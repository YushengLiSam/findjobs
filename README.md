# findjobs —— 求职投递知识库

给 AI coding agent 用的求职工作台。**Claude Code 和 Codex 都能跑**，规则写在 Markdown 里，不绑定任何一家。

解决的问题：每次投简历，agent 都要重新读一遍简历、重新试探表单控件、重新编一遍自我评价。
这套东西把「查得到」和「写得回」做成机制 —— 事实查表不推导，踩过的坑记下来，投完必须回写。

> 这是**个人工具**，不是通用产品。作者自己在用，规则都是踩坑换来的。
> 想拿去用的话，改 `hunting/target.json`（找岗方向）和 `profile/`（个人事实）这两处就行。

---

## 快速开始

### 1. 准备个人数据

`profile/` 是唯一含 PII 的目录，已被 `.gitignore` 排除。clone 之后要自己建：

```bash
cp profile/candidate_profile.example.json profile/candidate_profile.json
# 然后按自己的情况填
```

其余三个文件（`answer_bank.md` / `experience_bank.md` / `field-aliases.md`）
不用一次写完 —— 让 agent 边填表边攒，它们本来就是增量长出来的。
详见 [`profile/README.md`](profile/README.md)。

### 2. 装回写检查（可选，但强烈建议）

```bash
# ~/.claude/settings.json 的 hooks.Stop 里加一条：
#   "command": "<仓库绝对路径>/scripts/check-writeback.sh"
```

它在会话结束时检查：投了岗位有没有更新台账、缓存改了有没有同步索引、
平台档案变了有没有记新坑。第一次检出会 block 一次，之后降级为提示。

**装在用户级而不是项目级** —— 因为从其他目录发起会话时，项目级 hook 根本不加载。

### 3. 开跑

在仓库目录里开 agent 会话，`CLAUDE.md` 会自动加载。
从别的目录发起的话，让 agent 先读 `CLAUDE.md`（Codex 读 `AGENTS.md`）。

---

## 两种用法

### A. 找岗 —— 你不知道有哪些岗位

```
「帮我找 AI Agent 岗」        → 关键词驱动：10 路赛道并行全网搜
「看看字节、美团、小红书」      → 公司驱动：每家一个 agent 进官网挖
```

两种模式都在 [`hunting/`](hunting/)，规则见 [`hunting/README.md`](hunting/README.md)。
结果统一写进 `job-leads.md`。

**换方向只改 [`hunting/target.json`](hunting/target.json)** —— 届别、目标岗位、JD 关键词、
FDE 同义词都在那一个文件里，脚本和 prompt 都不用动。

Claude Code：
```
Workflow({ scriptPath: "<绝对路径>/hunting/by-company.js", args: ["字节跳动","美团"] })
```

Codex / 其他 agent：每家开一轮对话，贴 `hunting/prompt.txt` + `hunting/lanes.md` 里的一条任务。

### B. 投递 —— 你已经有链接了

把岗位链接给 agent，它会：

1. 查 [`platforms/README.md`](platforms/README.md) 按域名找到该读哪份平台档案
2. **先只读扫一遍全部字段**，输出「字段 → 拟填 → 来源 → 状态」四列表给你过目
3. 你确认后一次性填完，**停在提交前**
4. 回写：session-log、平台档案、排障库、台账状态

---

## 三条红线

1. **绝不点最终提交** —— 保存/暂存可以，提交永远由本人点
2. **绝不替用户输验证码** —— 可以导航、填手机号、点发送，验证码本身交给用户
3. **绝不编造** —— 成绩、证书、分数、使用体验、URL、截止日期，一律不编。宁可选「无」或问

---

## 设计

### 四层分离

```
candidate_profile.json   事实（姓名、学历、日期、技能）
        ↓
field-aliases.md         映射（表单上的各种叫法 → 标准键）
        ↓
answer_bank.md           答案（重复问题的标准答案，带来源标记）
        ↓
generated/               表达（自由文本缓存，可复用可微调）
```

查询顺序固定，**先查后推**。查到直接用，不重新分析简历。

### 反编造

- `never_guess` 列表：考试成绩、证书等级、签证状态、推荐码 —— 碰到就停下来问
- **Provenance 标记**：派生数据的每个数字要能追到源。
  `[简历]` `[用户 日期]` `[论文]` 可直接用，`[推导-未验证]` 先问，**无标记的不许用**
- 来源标签：`answer_bank.md` 每条答案标 `[已确认]` / `[推断]`

这条纪律有具体来由：曾经信了 arXiv 摘要页的元数据，跟用户说「你不是这篇论文的作者」，
实际 PDF 正文第一作者就是他。派生数据不标源，就分不清原始事实和二手信息。

### 自由文本不轮换正文

`generated/self-eval/` 按**立论**分骨架（段1/2/4），只有「适配这家公司」的第3段每次重写。

早期做法是保留一份正文每次微调，结果基底永远漂移成最后投的那家 ——
一度变成某公司的「财务ERP」特化版，下一个泛 Agent 岗命中缓存反而要往回改。

---

## 目录

| 路径 | 内容 |
|---|---|
| [`CLAUDE.md`](CLAUDE.md) | **操作规则**：铁律、标准流程、回写清单。Claude Code 自动加载 |
| [`AGENTS.md`](AGENTS.md) | Codex 的入口，指向同一套规则 |
| [`profile/`](profile/) | 个人事实（**gitignore，只有模板进仓库**） |
| [`hunting/`](hunting/) | 找岗 SOP：两种模式、10 路赛道、目标画像、链接分级规则 |
| [`platforms/`](platforms/) | 11 个招聘平台的字段地图与联动坑 + 通用浏览器战术 + Claude/Codex 术语对照 |
| [`generated/`](generated/) | 自由文本缓存 + 自我评价的 few-shot 模板 |
| [`troubleshooting.md`](troubleshooting.md) | 35 条「症状 → 原因 → 解法」，全是踩坑换来的 |
| `job-leads.md` | 岗位台账（投不投） |
| `pipeline.md` | 投后管道（笔试/面试时限）+ 各公司投递上限 + 冷却期 |
| `session-log/` | 每次投递记录（**gitignore**） |

## 脚本

```bash
./scripts/check-pii.sh                      # PII 自查，推送前/定期跑
./scripts/set-status.sh "<公司>" "<岗位>" 已投  # 原子改台账状态，别手改那张表
node scripts/build-workflow.js              # 从 prompt.txt + lanes.md 重新生成 workflow.js
```

`scripts/check-writeback.sh` 是给 Stop hook 调的，见「快速开始」第 2 步。
`scripts/check-liveness.md` 是岗位存活性校验的协议（不是脚本）—— 台账放几天，
「招满即止」的岗位可能已经关了，投前先确认。

## 隐私

`profile/` 和 `session-log/` 含身份证号、手机号、微信号，已在 `.gitignore` 排除。
**其余目录都会被提交**，绝不能往里写 PII。

推送前跑 `./scripts/check-pii.sh`。它扫身份证号和手机号模式，
但**查不到姓名、邮箱、投递史** —— 这些如果要转公开仓库，得先手动脱敏。
