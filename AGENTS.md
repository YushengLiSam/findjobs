# 求职投递工作台

**完整规则见 [`CLAUDE.md`](CLAUDE.md)，先读它再动手。** 这份文件只是给读 AGENTS.md 的 agent（Codex 等）的入口。

## 两条主线

| 我要做什么 | 读哪个 |
|---|---|
| **找岗位**（用户没给链接） | [`hunting/README.md`](hunting/README.md) —— 可执行规格。Codex 走第 9 节：`hunting/prompt.txt` + `hunting/lanes.md` 分 10 轮跑 |
| **填表投递**（用户给了链接） | [`CLAUDE.md`](CLAUDE.md) 的「标准流程」+ [`platforms/_ats-tactics.md`](platforms/_ats-tactics.md) |

投递前先查 [`job-leads.md`](job-leads.md)（岗位台账）和 [`troubleshooting.md`](troubleshooting.md)（卡住时的解法库）。

## 五条红线

1. **绝不点最终提交** —— 保存/暂存可以，提交永远由用户本人点
2. **绝不替用户输验证码** —— 可以导航、填手机号、点发送，验证码本身交给用户
3. **绝不编造** —— 成绩、证书、分数、使用体验、URL、截止日期，一律不编。宁可选「无」或问用户
4. **绝不提交 `profile/` `session-log/` 到远程仓库** —— 含身份证号、手机号，已在 .gitignore
5. **`join.qq.com` 被策略封锁**，不要尝试绕过，转人工协作模式

## 铁律

- **先查后推**：任何字段先查 `profile/field-aliases.md` → `candidate_profile.json` / `answer_bank.md`，查到直接用
- **不确定不要问，先填后报**：能推断的直接填，最后一次性交推断清单，不要中途打断用户
- **投完必须回写**：见 `CLAUDE.md` 的「回写清单」。不回写 = 下次从零开始
