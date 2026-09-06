#!/usr/bin/env node
// 从 hunting/prompt.txt + lanes.md + target.json 生成 hunting/workflow.js
// 单一真源：改规则改那三个文件，然后跑 `node scripts/build-workflow.js`
// 之前 workflow.js 是手抄副本，已漂移过（缺链接分级、缺不预筛、硬编码日期、名单不同步）
const fs = require('fs'), path = require('path');
const KB = path.resolve(__dirname, '..');
const R = f => fs.readFileSync(path.join(KB, f), 'utf8');

const prompt = R('hunting/prompt.txt').trim();

// 从 lanes.md 的表格解析赛道
const lanes = R('hunting/lanes.md')
  .split('\n')
  .filter(l => /^\|\s*\d+\s*\|/.test(l))
  .map(l => l.split('|').map(s => s.trim()))
  .map(c => ({ key: c[2].replace(/\*\*/g, ''), task: c[3].replace(/\*\*/g, '').replace(/`/g, '') }))
  .filter(l => l.key && l.task);

if (lanes.length < 5) { console.error(`✗ 只解析出 ${lanes.length} 条赛道，检查 lanes.md 表格格式`); process.exit(1); }

const out = `// ⚠️ 本文件由 scripts/build-workflow.js 自动生成，不要手改。
// 源：hunting/prompt.txt（规则）+ hunting/lanes.md（赛道）+ hunting/target.json（画像）
// 改规则 → 改源文件 → 跑 \`node scripts/build-workflow.js\` 重新生成
// 生成于 ${new Date().toISOString().slice(0, 10)}，${lanes.length} 条赛道
//
// 跑法：Workflow({ scriptPath: "<绝对路径>/hunting/workflow.js", args: { exclude: "<排除名单>" } })
// 排除名单先在对话里跑：
//   ls session-log/ | grep -E '^[0-9]{4}-[0-9]{2}-[0-9]{2}-' | sed -E 's/^[0-9]{4}-[0-9]{2}-[0-9]{2}-//; s/-.*$//' | sort -u

export const meta = {
  name: 'hunt-by-keyword',
  description: '${lanes.length} 路并行扫描 AI Agent / FDE 校招岗位（关键词驱动）',
  phases: [{ title: '扫描', detail: '${lanes.length} 路赛道并行' }],
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

const COMMON = ${JSON.stringify(prompt)}.replace('{{EXCLUDE}}', EXCLUDE) + '\\n\\n【你的具体任务】\\n'

const LANES = ${JSON.stringify(lanes, null, 2)}

phase('扫描')
log(\`\${LANES.length} 路并行\`)
const r = await parallel(LANES.map(l => () => agent(COMMON + l.task, { label: l.key, schema: SCHEMA })))
return LANES.map((l, i) => ({ lane: l.key, ...(r[i] || { leads: [], dead_ends: 'agent failed' }) }))
`;
fs.writeFileSync(path.join(KB, 'hunting/workflow.js'), out);
console.log(`✓ hunting/workflow.js 已生成（${lanes.length} 条赛道，prompt ${prompt.length} 字符）`);
lanes.forEach((l, i) => console.log(`   ${i + 1}. ${l.key}`));
