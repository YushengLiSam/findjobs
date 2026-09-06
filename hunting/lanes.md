# 10 条搜索赛道

每条独立分配给一个 agent（或一轮独立对话）。用法：`prompt.txt` 全文 + 下面某一条的 task。

| # | key | task |
|---|---|---|
| 1 | AI创业-智谱/月暗/MiniMax | 逐一排查这 3 家的 2027 届校招：智谱AI（zhipuai,注意它有 FDE 岗传统）、月之暗面 Moonshot/Kimi、MiniMax 稀宇科技。找 Agent/LLM应用/FDE 类岗位和投递入口。 |
| 2 | AI创业-阶跃/DeepSeek/百川 | 逐一排查这 3 家的 2027 届校招：阶跃星辰 StepFun、深度求索 DeepSeek、百川智能。找 Agent/LLM应用/FDE 类岗位和投递入口。 |
| 3 | AI创业-面壁/硅基/无问/Dify | 逐一排查这 4 家的 2027 届校招或应届生岗位：面壁智能、硅基流动 SiliconFlow、无问芯穹、Dify（苏州语灵/LangGenius）。找 Agent/LLM应用/FDE 类岗位和投递入口。 |
| 4 | 大厂-字节/阿里/蚂蚁 | 排查字节跳动（jobs.bytedance.com,重点 Seed、豆包、TikTok 的 Agent/LLM 应用岗）、阿里巴巴（talent.alibaba.com,通义/夸克/淘天/阿里云）、蚂蚁集团（talent.antgroup.com）的 2027 届校招中 Agent/RAG/大模型应用类岗位。这三家岗位多,按 ★/☆/· 分层全报,不设上限（见 README 6.5 不预筛）。 |
| 5 | 大厂-百度/美团/快手 | 排查百度（talent.baidu.com,文心/智能云）、美团（zhaopin.meituan.com,重点大模型/到店到家的 Agent 岗）、快手（zhaopin.kuaishou.cn,可灵/主站）的 2027 届校招中 Agent/RAG/大模型应用类岗位。 |
| 6 | 大厂-华为/网易/京东 | 排查华为（career.huawei.com）、网易（campus.163.com,含云音乐/雷火/伏羲）、京东（campus.jd.com）的 2027 届校招中 Agent/RAG/大模型应用类岗位。 |
| 7 | 中厂-小红书/携程/车厂手机厂 | 排查这些公司 2027 届校招的 Agent/LLM 应用岗：小红书、携程、理想汽车、蔚来、大疆、OPPO、vivo、荣耀。沾 AI/大模型/算法/研发即报；纯硬件/嵌入式/非技术岗进 dead_ends。 |
| 8 | **FDE 专项** | 专搜 FDE 类岗位。**必须逐个搜同义词**（见 prompt 中的 FDE 特别说明）：解决方案架构师、解决方案工程师、产品解决方案、工程交付、交付工程师、前向部署工程师、技术支持工程师(AI方向)、客户成功工程师、实施顾问(大模型)。覆盖所有公司（排除名单除外）,特别留意 AI 创业公司。FDE 是本次搜索重点方向之一,尽量挖深。**已知无中国大陆校招入口,别重复查：Palantir、Databricks。** |
| 9 | 聚合源-GitHub/网站 | 搜校招聚合源里的 Agent/LLM 岗：1) GitHub 上的 2027 届校招汇总仓库（搜 "2027 校招 github"、"campus-recruitment 2027",找类似 xxx/2027-campus 的仓库并读其列表）；2) givemeoc.com、超级简历、应届生求职网等聚合站的 2027 届 AI 岗汇总页。从中提取符合 Agent/RAG/FDE 方向的具体条目。 |
| 10 | 牛客公开页 | 不登录、只通过搜索引擎和公开页面挖牛客网（nowcoder.com）上的 2027 届 Agent/FDE 岗位信息：搜 `site:nowcoder.com 2027届 Agent`、`site:nowcoder.com 27届 提前批 大模型`、`牛客 2027 FDE` 等。牛客讨论区帖子无需登录可读,岗位详情页可能要登录——能拿到公司名+岗位名+批次信息就算 lead。**但 url 必须是官方站**（进该公司官网找到对应岗位）,牛客帖只能写进 notes 当证据。 |

## 想扩大覆盖时往哪加

按「一条 lane 管 3-4 家」的粒度加：AI 芯片（寒武纪/壁仞/燧原）、金融科技（招银网络/平安科技/微众）、
出海（Shein/Temu 已投PDD/Lazada）、垂类 AI（科大讯飞/云从/依图）、外企在华（微软/英伟达/AWS）。
