// ⚠️ 本文件由 scripts/build-workflow.js 自动生成，不要手改。
// 源：hunting/prompt.txt（规则）+ hunting/lanes.md（赛道）+ hunting/target.json（画像）
// 改规则 → 改源文件 → 跑 `node scripts/build-workflow.js` 重新生成
// 生成于 2026-09-05，10 条赛道
//
// 跑法：Workflow({ scriptPath: "<绝对路径>/hunting/workflow.js", args: { exclude: "<排除名单>" } })
// 排除名单先在对话里跑：
//   ls session-log/ | grep -E '^[0-9]{4}-[0-9]{2}-[0-9]{2}-' | sed -E 's/^[0-9]{4}-[0-9]{2}-[0-9]{2}-//; s/-.*$//' | sort -u

export const meta = {
  name: 'hunt-by-keyword',
  description: '10 路并行扫描 AI Agent / FDE 校招岗位（关键词驱动）',
  phases: [{ title: '扫描', detail: '10 路赛道并行' }],
}

const SCHEMA = {
  type: 'object',
  required: ['leads', 'dead_ends'],
  properties: {
    leads: {
      type: 'array',
      items: {
        type: 'object',
        required: ['company', 'title', 'url', 'url_grade', 'batch_evidence', 'confidence'],
        properties: {
          company: { type: 'string' },
          title: { type: 'string' },
          city: { type: 'string' },
          keywords_hit: { type: 'array', items: { type: 'string' } },
          url: { type: 'string', description: '直达JD的官方链接。绝不填新闻稿/聚合站/牛客帖' },
          url_grade: { type: 'string', enum: ['A', 'B', 'C'] },
          platform: { type: 'string', description: '飞书招聘/Moka/北森/自建:<域名>/未知 —— 决定填表时读哪份 platforms/ 档案' },
          deadline_iso: { type: 'string', description: 'YYYY-MM-DD 或 null。只填官方明确标注的截止日，不填发布日/更新日/毕业窗口，也不填「剩几天」' },
          batch_evidence: { type: 'string' },
          how_to_find: { type: 'string', description: 'B/C级必填：进站后搜索框输什么' },
          confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
          notes: { type: 'string' },
        },
      },
    },
    dead_ends: { type: 'string' },
  },
}

const EXCLUDE = (args && args.exclude) || '（调用方未注入排除名单——先跑上面注释里的 ls 命令）'

const COMMON = "⚠️ 开跑第一件事：跑 `date \"+%Y-%m-%d\"` 拿到真实日期,不要凭上下文推断。\n下面写的日期是这份 prompt 的编写日,不是你运行的日期。\n\n编写日：2026-08-29。若今天已明显晚于此,届别判断和「秋招是否进行中」都要按真实日期重新判断。\n\n⚠️ 返回数据时：截止日只填 ISO 日期（如 2026-09-15）,**不要填「还剩几天」**——\n那是相对当下的推导值,写进数据当场就开始过期。\n\n为一名 2027 届硕士应届生寻找中国校招岗位。\n候选人：哥伦比亚大学 CS 硕士,2026 年 12 月毕业,方向 AI Agent / LLM 应用。\n\n目标岗位：AI Agent 应用研发 / LLM 应用研发 / 大模型应用 / FDE（Forward Deployed Engineer）。\nJD 命中关键词：Agent、RAG、LangGraph、MCP、Function Calling、大模型应用、LLM、AIGC 应用、智能体。\n\n【FDE 特别说明】国内校招几乎没有以「FDE」为名的岗位。该职能在中文 JD 里叫：\n解决方案架构师 / 解决方案工程师 / 产品解决方案 / 工程交付 / 交付工程师 /\n前向部署工程师 / 技术支持工程师(AI方向) / 客户成功工程师 / 实施顾问(大模型)。\n搜 FDE 时必须逐个搜这些同义词,只搜 \"FDE\" 会颗粒无收。\n\n【硬规则】\n1. 只收对 2027 届开放的岗位（毕业时间 2026.9~2027.8；写\"26/27届均可\"也算）。\n   2027 届秋招/提前批正是现在（2026 年 8-9 月）进行中。\n   凡是 2025 年发布的 2026 届信息一律丢弃,除非页面明确写了 2027 届批次已开。\n   batch_evidence 字段必须引用页面原文短句作为证据。\n2. 每条 lead 的 url 必须真实出现在你的搜索结果里,或是你实际访问过的页面。\n   绝不编造 URL。拿不准就 confidence=low 并在 notes 说明。宁可少报,不可假报。\n\n2.5 【最重要】url 必须直达岗位描述（JD）。用户的动作是：点开链接 → 读 JD → 决定投不投。\n   给新闻稿链接等于没找到。链接分级：\n     A级 岗位详情页（打开就是职责/要求）—— 首选\n        例：jobs.bytedance.com/campus/position/<id>/detail\n     B级 官方岗位列表 + 精确筛选参数（打开能看到目标岗在列表里）—— 可接受，\n        但 notes 必须写「进站后搜 XX」\n        例：talent.baidu.com/jobs/list?keyword=智能体、飞书站带 project=<校招项目id>\n     C级 官方招聘站首页 —— 仅当 A/B 都拿不到，notes 必须写清进站后怎么搜\n     D级 新闻稿 / 聚合站 / 牛客帖 / 公众号转载 —— 【绝不填进 url 字段】\n        例：leiphone.com、wondercv.com/xiaozhao、quanzhi.com/notice、\n            campus.niuqizp.com、nowcoder.com/feed、mp.weixin.qq.com\n        D级只能放在 batch_evidence / notes 里当届次证据用。\n   拿不到 A 级时：从 D 级页面里找官方链接（新闻稿通常附投递入口）→\n   搜「<公司> 校招 官网」→ 飞书 SPA 抓不到列表时带上 URL 里的 project=<id> 参数即算 B 级。\n   链接死了打不开 → 这条作废，宁可不交。\n   每条交付前自检：这个 URL 打开后第一屏能看到岗位职责吗？不能的话能看到目标岗在列表里吗？\n3. 优先给具体岗位 + 投递入口；只找到公司级\"2027届校招启动\"公告也收,\n   title 写「校招已启动-需进站搜岗」。\n\n3.5 【不预筛】只要沾 AI / 大模型 / Agent / 算法 / 研发就报出来,不要自己判断\"这个可能不够贴\"。\n   贴不贴是用户的判断,不是你的。不设条数上限,找到多少报多少。\n   不因为置信度低就丢弃——标 confidence=low 报出来即可。\n   不因为岗位名不带 Agent 就丢弃——很多贴的岗位叫\"AI应用研发\"\"大模型算法\"\"解决方案架构师\"。\n   真正该丢弃的只有两种：确认是往届的、链接死了的。\n   注意这与规则 2 不冲突：规则 2 管**真实性**（不编造），规则 3.5 管**相关性**（不漏报）。\n   拿不准的岗位要报，但要如实标注 confidence 和 url_grade。\n4. 绝不编造截止日期,查不到写\"未知\"。\n5. 排除这些已投公司：{{EXCLUDE}}\n   （调用方跑 `ls session-log/ | grep -E '^[0-9]{4}-[0-9]{2}-[0-9]{2}-' | sed -E 's/^[0-9]{4}-[0-9]{2}-[0-9]{2}-//; s/-.*$//' | sort -u` 注入）\n6. 工具：联网搜索 + 网页抓取。飞书招聘（*.jobs.feishu.cn 及定制域名）是 SPA,抓取常渲染不出列表——\n   此时：① 找官方 JSON API（很多招聘站有公开接口,比解析页面可靠得多）\n        ② `site:<官方域名> <岗位名>` 直接命中详情页\n        ③ 都不行就用带 `project=<校招项目id>` 参数的官方列表页,算 B 级\n   **公告页/牛客帖/公众号只能写进 notes 或 batch_evidence 当届次证据,绝不填进 url。**\n7. 返回的最终文本就是数据本身,不写给人看的客套话。\n\n【返回格式】严格的 JSON：\n{\n  \"leads\": [{\n    \"company\": \"公司名\",\n    \"title\": \"岗位名（公司级公告则写「校招已启动-需进站搜岗」）\",\n    \"city\": \"城市\",\n    \"keywords_hit\": [\"Agent\", \"RAG\"],\n    \"url\": \"直达JD的链接（A/B级，见规则2.5。绝不填新闻稿或聚合站）\",\n    \"url_grade\": \"A|B|C —— 按规则2.5自评。D级不允许出现\",\n    \"platform\": \"飞书招聘/Moka/北森/官网自建/牛客/未知\",\n    \"deadline\": \"截止日期或「未知」\",\n    \"batch_evidence\": \"引用页面原文短句,证明对2027届开放\",\n    \"confidence\": \"high|medium|low\",\n    \"notes\": \"补充说明\"\n  }],\n  \"dead_ends\": \"查了但没结果的来源及原因,一两句\"\n}\n\n【你的具体任务】".replace('{{EXCLUDE}}', EXCLUDE) + '\n\n【你的具体任务】\n'

const LANES = [
  {
    "key": "AI创业-智谱/月暗/MiniMax",
    "task": "逐一排查这 3 家的 2027 届校招：智谱AI（zhipuai,注意它有 FDE 岗传统）、月之暗面 Moonshot/Kimi、MiniMax 稀宇科技。找 Agent/LLM应用/FDE 类岗位和投递入口。"
  },
  {
    "key": "AI创业-阶跃/DeepSeek/百川",
    "task": "逐一排查这 3 家的 2027 届校招：阶跃星辰 StepFun、深度求索 DeepSeek、百川智能。找 Agent/LLM应用/FDE 类岗位和投递入口。"
  },
  {
    "key": "AI创业-面壁/硅基/无问/Dify",
    "task": "逐一排查这 4 家的 2027 届校招或应届生岗位：面壁智能、硅基流动 SiliconFlow、无问芯穹、Dify（苏州语灵/LangGenius）。找 Agent/LLM应用/FDE 类岗位和投递入口。"
  },
  {
    "key": "大厂-字节/阿里/蚂蚁",
    "task": "排查字节跳动（jobs.bytedance.com,重点 Seed、豆包、TikTok 的 Agent/LLM 应用岗）、阿里巴巴（talent.alibaba.com,通义/夸克/淘天/阿里云）、蚂蚁集团（talent.antgroup.com）的 2027 届校招中 Agent/RAG/大模型应用类岗位。这三家岗位多,按 ★/☆/· 分层全报,不设上限（见 README 6.5 不预筛）。"
  },
  {
    "key": "大厂-百度/美团/快手",
    "task": "排查百度（talent.baidu.com,文心/智能云）、美团（zhaopin.meituan.com,重点大模型/到店到家的 Agent 岗）、快手（zhaopin.kuaishou.cn,可灵/主站）的 2027 届校招中 Agent/RAG/大模型应用类岗位。"
  },
  {
    "key": "大厂-华为/网易/京东",
    "task": "排查华为（career.huawei.com）、网易（campus.163.com,含云音乐/雷火/伏羲）、京东（campus.jd.com）的 2027 届校招中 Agent/RAG/大模型应用类岗位。"
  },
  {
    "key": "中厂-小红书/携程/车厂手机厂",
    "task": "排查这些公司 2027 届校招的 Agent/LLM 应用岗：小红书、携程、理想汽车、蔚来、大疆、OPPO、vivo、荣耀。沾 AI/大模型/算法/研发即报；纯硬件/嵌入式/非技术岗进 dead_ends。"
  },
  {
    "key": "FDE 专项",
    "task": "专搜 FDE 类岗位。必须逐个搜同义词（见 prompt 中的 FDE 特别说明）：解决方案架构师、解决方案工程师、产品解决方案、工程交付、交付工程师、前向部署工程师、技术支持工程师(AI方向)、客户成功工程师、实施顾问(大模型)。覆盖所有公司（排除名单除外）,特别留意 AI 创业公司。FDE 是本次搜索重点方向之一,尽量挖深。已知无中国大陆校招入口,别重复查：Palantir、Databricks。"
  },
  {
    "key": "聚合源-GitHub/网站",
    "task": "搜校招聚合源里的 Agent/LLM 岗：1) GitHub 上的 2027 届校招汇总仓库（搜 \"2027 校招 github\"、\"campus-recruitment 2027\",找类似 xxx/2027-campus 的仓库并读其列表）；2) givemeoc.com、超级简历、应届生求职网等聚合站的 2027 届 AI 岗汇总页。从中提取符合 Agent/RAG/FDE 方向的具体条目。"
  },
  {
    "key": "牛客公开页",
    "task": "不登录、只通过搜索引擎和公开页面挖牛客网（nowcoder.com）上的 2027 届 Agent/FDE 岗位信息：搜 site:nowcoder.com 2027届 Agent、site:nowcoder.com 27届 提前批 大模型、牛客 2027 FDE 等。牛客讨论区帖子无需登录可读,岗位详情页可能要登录——能拿到公司名+岗位名+批次信息就算 lead。但 url 必须是官方站（进该公司官网找到对应岗位）,牛客帖只能写进 notes 当证据。"
  }
]

phase('扫描')
log(`${LANES.length} 路并行`)
const r = await parallel(LANES.map(l => () => agent(COMMON + l.task, { label: l.key, schema: SCHEMA })))
return LANES.map((l, i) => ({ lane: l.key, ...(r[i] || { leads: [], dead_ends: 'agent failed' }) }))
