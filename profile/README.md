# profile/ —— 个人事实层

**这一层是本知识库唯一的事实源，也是唯一含 PII 的地方。**
`.gitignore` 排除了本目录下除模板外的所有文件，真实数据永远不进仓库。

## clone 之后要做什么

复制模板去掉 `.example`，然后按自己的情况填：

```bash
cp profile/candidate_profile.example.json profile/candidate_profile.json
```

另外三个文件（`answer_bank.md` / `experience_bank.md` / `field-aliases.md`）
第一次用的时候让 agent 边填表边攒即可，不用一次写完 —— 它们本来就是增量长出来的。

## 四个文件各管什么

| 文件 | 管什么 | 什么时候查 |
|---|---|---|
| `candidate_profile.json` | **事实**：姓名、学历、经历日期、技能、可公开链接 | 取具体值时 |
| `field-aliases.md` | **映射**：表单上的各种叫法 → 标准键 | 换平台时先查这个 |
| `answer_bank.md` | **答案**：重复出现的问题的标准答案，带 `[已确认]`/`[推断]` 来源标记 | 遇到常见问题 |
| `experience_bank.md` | **经历库**：每段经历的完整素材 + JD关键词→主推组合速查表 | 选填哪几段经历时 |

查询顺序固定：`field-aliases` 定位标准键 → `candidate_profile` / `answer_bank` 取值。
**先查后推，查到直接用，不要重新分析简历。**

## never_guess

`candidate_profile.json` 里有个 `never_guess` 数组，列的是**绝不允许推断的字段**
（考试成绩、证书等级、签证状态、推荐码、现有薪资等）。
agent 碰到这些一律停下来问，不猜。

## Provenance

`experience_bank.md` 里的每个数字都要能追到源，标记见该文件顶部：
`[简历]` `[用户 日期]` `[论文]` 可直接用，`[推导-未验证]` 要先问，**无标记的不许用**。
