// 公司驱动找岗：Workflow({ scriptPath: "<绝对路径>/hunting/by-company.js", args: ["字节跳动","美团"] })
// 每家公司一个 agent，做完整解析链（找站→找岗→拿JD→标关键词）。规则见 by-company.md。
// Codex / 其他 agent 请用 by-company.md 末尾的跑法。

export const meta = {
  name: 'hunt-by-company',
  description: '按公司名单逐家进官网挖 2027届 AI Agent/LLM/FDE 岗位，拿直达 JD 链接',
  phases: [{ title: '逐家挖岗', detail: '每家公司一个 agent 并行' }],
}

const SCHEMA = {
  type: 'object',
  required: ['company', 'career_site', 'platform', 'positions'],
  properties: {
    company: { type: 'string' },
    career_site: { type: 'string', description: '官方校招站URL，必须真实访问过' },
    platform: { type: 'string', enum: ['飞书招聘', 'Moka', '北森', '自建', '未知'] },
    batch_evidence: { type: 'string', description: '引用页面原文证明2027届校招开放' },
    positions: {
      type: 'array',
      items: {
        type: 'object',
        required: ['title', 'url', 'grade', 'verified'],
        properties: {
          title: { type: 'string', description: '官方页面上的准确岗位名' },
          url: { type: 'string', description: 'A级=岗位详情页 B级=带筛选的列表页 C级=官网首页' },
          grade: { type: 'string', enum: ['A', 'B', 'C'] },
          city: { type: 'string' },
          deadline_iso: { type: 'string', description: 'YYYY-MM-DD 或 null。不要填「剩几天」' },
          kw: { type: 'array', items: { type: 'string' } },
          jd_excerpt: { type: 'string', description: 'JD 里 Agent/RAG/LangGraph/MCP 相关原文' },
          verified: { type: 'string', description: '你实际打开这个URL看到了什么' },
          how_to_find: { type: 'string', description: 'B/C级必填：进站后搜索框输什么' },
        },
      },
    },
    dead_end: { type: 'string' },
  },
}

// 目标画像：优先 args.target（由调用方从 hunting/target.json 读入），没传就用这份默认。
// 改方向请改 target.json，不要改这里。
const DEFAULT_TARGET = {
  届别: '2027届', 毕业时间: '2026-12', 毕业窗口: '2026.9 ~ 2027.8（「26/27届均可」也算）',
  候选人一句话: '哥伦比亚大学 CS 硕士，方向 AI Agent / LLM 应用',
  目标岗位: ['AI Agent 应用研发', 'LLM 应用研发', '大模型应用', 'FDE / Forward Deployed Engineer', '解决方案架构师（AI方向）', '交付工程师（大模型）'],
  FDE同义词_必须逐个搜: ['解决方案架构师', '解决方案工程师', '产品解决方案', '工程交付', '交付工程师', '前向部署工程师', '技术支持工程师(AI方向)', '客户成功工程师', '实施顾问(大模型)'],
  JD关键词: ['Agent', 'RAG', 'LangGraph', 'LangChain', 'MCP', 'Function Calling', 'Harness', '大模型应用', 'LLM', '智能体', 'Tool Use', 'Multi-Agent'],
  站内搜索词: ['Agent', '大模型', 'LLM', '智能体', '算法', '解决方案', 'AI应用'],
}
const T = (args && !Array.isArray(args) && args.target) ? { ...DEFAULT_TARGET, ...args.target } : DEFAULT_TARGET

const BASE = `先跑 date 命令拿真实日期，不要凭上下文推断。

为一名 ${T.届别} 应届生（毕业时间 ${T.毕业时间}，${T.候选人一句话}）在**一家指定公司**的校招里找岗位。

目标岗位：${T.目标岗位.join(' / ')}。
JD 关键词：${T.JD关键词.join('、')}。
站内搜索词：${T.站内搜索词.join(' / ')}。
FDE 类岗位在国内校招几乎不叫 FDE，必须逐个搜这些同义词：${T.FDE同义词_必须逐个搜.join('、')}。

完整解析链（每步都要做）：
1a 找站：搜「<公司> 校招 官网」「<公司> 2027届 校园招聘」。识别平台：
    *.jobs.feishu.cn 或定制域名带 feishu → 飞书招聘；app.mokahr.com → Moka；
    *.zhiye.com / beisen → 北森；其他 → 自建。
1b 找岗：站内搜 Agent / 大模型 / LLM / 智能体 / 算法 / 解决方案 / AI应用。
    飞书招聘是 SPA，WebFetch 常渲染不出列表——找官方 JSON API（很多站有），
    或用搜索引擎 site:<域名> <岗位名> 直接命中详情页。
1c 拿 JD：每个岗进详情页，拿 A 级直达链接（打开第一屏就是职责）+ JD 原文。
1d 标关键词：JD 里出现的 Agent 技术栈词填进 kw。

硬规则：
- 只收对 ${T.届别} 开放的（毕业窗口 ${T.毕业窗口}）。batch_evidence 必须引原文。
- url 必须真实访问过。绝不编造。打不开就降级或不报。
- 不预筛：只要沾 AI/大模型/Agent/算法/研发就报。贴不贴是用户判断。不设条数上限。
- 截止日只填 ISO 日期，不填「剩几天」。
- B/C 级必须填 how_to_find。
- 返回的最终文本就是数据本身，不写客套话。

你负责这一家：`

phase('逐家挖岗')
// args 两种形式：["字节","美团"]  或  { companies: ["字节","美团"], target: {...} }
const raw = Array.isArray(args) ? args : (args && args.companies) || args
const companies = Array.isArray(raw) ? raw : String(raw || '').split(/[,，、\s]+/).filter(Boolean)
if (!companies.length) throw new Error('args 需要公司名数组：["字节跳动","美团"] 或 { companies: [...], target: {...} }')
log(`${companies.length} 家公司，每家一个 agent`)

const BATCH = 12
const out = []
for (let i = 0; i < companies.length; i += BATCH) {
  const chunk = companies.slice(i, i + BATCH)
  const r = await parallel(chunk.map(c => () => agent(BASE + c, { label: c, schema: SCHEMA })))
  out.push(...r.map((x, j) => x || { company: chunk[j], career_site: '', platform: '未知', positions: [], dead_end: 'agent failed' }))
}
return out
