# 岗位台账 — AI Agent / FDE 2027届

**用法**：每次投递前先查这里，不重复找、不重复投。只增不删，状态流转：`待筛` → `待投` → `已投` → `oc / 挂 / 过期`。
搜索口径：Agent / RAG / LangGraph / MCP / 大模型应用 / LLM / FDE（前向部署/交付/解决方案-AI）。
城市不限（用户 2026-08-29 确认）；只收 2027届校招正式岗；Boss直聘暂不用。

## 已投 = 怎么算

**不再手写名单**（手写的会腐烂，已经腐烂过一次）。已投公司 =

```bash
ls session-log/ | grep -E '^[0-9]{4}-[0-9]{2}-[0-9]{2}-' | sed -E 's/^[0-9]{4}-[0-9]{2}-[0-9]{2}-//; s/-.*$//' | sort -u
```

∪ 本表 `状态` 列为「已投」的行。两者应当一致，不一致说明有一边漏写。

⚠️ **人工协作模式投的（如腾讯 join.qq.com）也必须建 session-log 存根**，否则上面的命令永远算不出它。

## 待筛/待投 —— 105 条

> 2026-08-29 扫描（10路搜索 → 6路验证 → 7路链接解析）；2026-09-05 从用户「27届秋招作战台」补入乐狗游戏。**先跑 `date` 看今天几号，算算过了多久。**
> 状态：`待筛` → `待投` → `已投` → `oc` / `挂` / `过期`
> 链接级：**A**=点开就是 JD · **B**=官方列表页（备注写了进站怎么搜）· **C**=官网首页
> 贴合度：**★**=56 JD 原文点名 Agent 技术栈 · **☆**=21 提到 Agent · **·**=方向相关但 JD 无关键词
> `平台` 列决定填表时读哪份 `platforms/<平台>.md`。
> `截止ISO` 只填**官方明确标注的截止日**（24 条）。发布日、更新日、毕业窗口、聚合站转述一律「未知」
> ——见 `troubleshooting.md` 聚合站失真那条。「未知」多为滚动招聘/招满即止。

| 状态 | 贴 | 级 | 公司 | 岗位 | 城市 | 平台 | 截止ISO | 链接 | JD原文命中 | 备注/进站方式 |
|---|---|---|---|---|---|---|---|---|---|---|
| 待投 | ★ | A | 乐狗游戏 | 算法工程师（游戏理解方向） | 北京 | Moka | 2026-09-11 | [JD](https://app.mokahr.com/campus-recruitment/legougames/6163#/job/ef2b8b97-e793-478a-9ad0-dea9815db03f) | RAG, Tool Use, Agent | JD 点名复杂RAG/多步推理/工具调用/规则校验/Agent；加分项明写「Skill、工作流、GitHub项目」。无暂存按钮，别关标签页 |
| 待筛 | ★ | A | 快手 | 大模型 AI Agent 开发工程师 | 北京、杭州 | 自建:campus.kuaishou.cn | 未知 | [JD](https://campus.kuaishou.cn/recruit/campus/e/#/campus/job-info/13091) | LangGraph, LangChain, LlamaIndex, AutoGen, CrewAI | 未标注 |
| 待筛 | ★ | A | 小红书 | 【REDstar】Agent/大模型算法工程师 - 国际化 | 北京市，上海市，新加坡 | 自建:job.xiaohongshu.com | 未知 | [JD](https://job.xiaohongshu.com/campus/position/20876) | MCP, Tool Use, RAG, ReAct | 未标注 |
| 待筛 | ★ | A | 网易（互联网/云音乐） | 大模型算法工程师（AI Agent方向） | 杭州 | 自建:campus.163.com | 未知 | [JD](https://campus.163.com/app/detail/index?id=4800&projectId=103) | LangChain, LlamaIndex, AutoGen, ReAct | 未标注 |
| 待筛 | ★ | A | DeepSeek（深度求索） | Agent Harness 团队 | 北京 / 杭州 | Moka | 未知 | [JD](https://app.mokahr.com/social-recruitment/high-flyer/140576#/job/8d40c764-d2b2-49b1-826c-e3f2adb75c01) | MCP, Tool Use, Harness | 未标注 |
| 待筛 | ★ | A | 字节跳动（火山方舟） | 豆包AI大模型产品解决方案 - 火山方舟 | 北京、上海、杭州、深圳 | 自建:jobs.bytedance.com | 未知 | [JD](https://jobs.bytedance.com/campus/position/7667579728820259125/detail) | LangGraph, MCP, RAG | 页面未标注截止时间；招聘项目「2027届校园招聘」在招 |
| 待筛 | ★ | A | 快手 | AI Agent 全栈工程师-Agent 应用研发方向 | 北京 | 自建:campus.kuaishou.cn | 未知 | [JD](https://campus.kuaishou.cn/recruit/campus/e/#/campus/job-info/13836) | MCP, RAG, Harness | 未标注 |
| 待筛 | ★ | A | 携程 | Agent开发工程师（2027届秋招）MJ036607 | 上海 | 自建:careers.ctrip.com | 未知 | [JD](https://careers.ctrip.com/#/campus/job-detail/MJ036607) | LangChain, LlamaIndex, CrewAI | 未标注 |
| 待筛 | ★ | A | 百度 | 上海-Agent Harness 研发工程师(J100779) | 上海市 | 自建:talent.baidu.com | 未知 | [JD](https://talent.baidu.com/jobs/detail/GRADUATE/74d83772-1bd0-42b9-8cc5-69eb45696b62) | LangChain, AutoGen, ReAct | 页面显示日期 2026-07-21 |
| 待筛 | ★ | A | 百度 | 北京-智能体算法工程师(J101017) | 北京市 | 自建:talent.baidu.com | 未知 | [JD](https://talent.baidu.com/jobs/detail/GRADUATE/02f73086-be71-4d09-8d6e-f1c6981b8b48) | LangChain, AutoGen, ReAct | 页面显示日期 2026-07-21（列表/详情页同一字段，未标注为「截止」，同批次其他岗为 2026-08-05 / 2 |
| 待筛 | ★ | A | 百度 | 上海-智能体算法工程师(J101018) | 上海市 | 自建:talent.baidu.com | 未知 | [JD](https://talent.baidu.com/jobs/detail/GRADUATE/cad8f67a-4118-4e26-a39d-0cc84f699f9d) | LangChain, AutoGen, ReAct | 页面显示日期 2026-07-21 |
| 待筛 | ★ | A | 科大讯飞 | Agent研发工程师-Harness方向 (J13347) | 安徽省·合肥市 | 北森 | 2026-10-13 | [JD](https://iflytek.zhiye.com/campus/detail?jobAdId=4808a259-81bf-4523-8866-2ecb63689324) | MCP, RAG, Harness |  |
| 待筛 | ★ | A | 网易（互联网/有道） | AI Agent 应用开发工程师-网易有道 | 北京 | 自建:campus.163.com | 未知 | [JD](https://campus.163.com/app/detail/index?id=4858&projectId=103) | MCP, Function Calling, RAG | 未标注 |
| 待筛 | ★ | A | 蚂蚁集团 | 智能体与大模型应用工程 | 北京 / 上海 / 杭州 / 广州 /  | 自建:talent.antgroup.com | 未知 | [JD](https://talent.antgroup.com/campus-position?positionId=260721011006030) | LangChain, MCP, RAG | 未标注 |
| 待筛 | ★ | A | 阿里巴巴集团 | Agent Infra工程师 | 北京 / 广州 / 杭州 / 上海 /  | 自建:campus-talent.alibaba | 未知 | [JD](https://campus-talent.alibaba.com/campus/position/199907640058) | LangGraph, LangChain, AutoGen | 未标注 |
| 待筛 | ★ | A | 阿里巴巴集团 | AI应用算法工程师 | 北京 / 广州 / 杭州 / 上海 | 自建:campus-talent.alibaba | 未知 | [JD](https://campus-talent.alibaba.com/campus/position/199907740040) | MCP, Tool Use, RAG | 未标注 |
| 待筛 | ★ | A | 阿里巴巴集团 | AI Infra工程师 | 北京 / 成都 / 杭州 / 上海 等 | 自建:campus-talent.alibaba | 未知 | [JD](https://campus-talent.alibaba.com/campus/position/199907640056) | LangGraph, MCP, RAG | 未标注 |
| 待投 | ★ | A | vivo | Agent技术工程师-27届秋招 | 广东省·深圳市，浙江省·杭州市（在招25 | 自建:hr-campus.vivo.com | 未知 | [JD](https://hr-campus.vivo.com/campus/detail?jobAdId=b76e70ff-34f0-4867-a66c-8872757d1892) | LangChain, RAG | 岗位详情页未标注截止时间；线索称 2026-09-15 12:00 网申截止，官方页面无法佐证，按最急处理 |
| 待筛 | ★ | A | 字节跳动 | AI搜索Agent算法工程师-Seed大模型人才校招 | 北京 | 自建:jobs.bytedance.com | 未知 | [JD](https://jobs.bytedance.com/campus/position/7622891592143096117/detail) | LangChain, RAG | 页面未标注截止时间；招聘项目「2027届Seed大模型人才校招」在招 |
| 待筛 | ★ | A | 字节跳动 | 大语言模型应用算法工程师 - Seed大模型人才校招 | 北京 | 自建:jobs.bytedance.com | 未知 | [JD](https://jobs.bytedance.com/campus/position/7622895938651343109/detail) | MCP, RAG | 页面未标注截止时间；招聘项目「2027届Seed大模型人才校招」在招 |
| 待筛 | ★ | A | 小红书 | 【REDstar】AI Agent工程师 | 北京市，上海市 | 自建:job.xiaohongshu.com | 未知 | [JD](https://job.xiaohongshu.com/campus/position/21821) | Tool Use, Harness | 未标注 |
| 待筛 | ★ | A | 科大讯飞 | AI Agent 应用研发工程师 (J14187) | 安徽省·合肥市 | 北森 | 2026-10-13 | [JD](https://iflytek.zhiye.com/campus/detail?jobAdId=2ca30bc1-4bec-46f5-9dee-6b7c050fac3a) | MCP, RAG |  |
| 待筛 | ★ | A | 网易互娱 | AI Agent工程师（游戏研发方向） | 杭州、上海、广州 | 自建:campus.game.163.com | 未知 | [JD](https://campus.game.163.com/app/detail/index?id=4732&projectId=102) | Tool Use, RAG | 未标注 |
| 待筛 | ★ | A | 网易互娱 | AI应用工程师 | 广州 | 自建:campus.game.163.com | 未知 | [JD](https://campus.game.163.com/app/detail/index?id=4756&projectId=102) | Function Calling, RAG | 未标注 |
| 待筛 | ★ | A | 网易雷火 | 智能体研发工程师（多模态方向） | 杭州 | 自建:campus.163.com | 2026-10-15 | [JD](https://campus.163.com/app/detail/index?id=4770&projectId=77) | LangChain, AutoGen |  |
| 待筛 | ★ | A | 网易（互联网/有道） | 算法应用工程师-网易有道 | 北京 | 自建:campus.163.com | 未知 | [JD](https://campus.163.com/app/detail/index?id=4859&projectId=103) | MCP, RAG | 未标注 |
| 待筛 | ★ | A | 美团 | AI Agent开发工程师（应届-校园招聘） | 北京市、上海市、成都市、深圳市 | 自建:zhaopin.meituan.com | 未知 | [JD](https://zhaopin.meituan.com/web/position/detail?jobUnionId=4697317646&highlightType=campus) | Function Calling, RAG | 未标截止；列表显示「更新于2026/08/17」，可投（「立即申请」） |
| 待筛 | ★ | A | 蚂蚁集团 | 大模型智能体优化算法 | 北京 / 上海 / 杭州 / 广州 /  | 自建:talent.antgroup.com | 未知 | [JD](https://talent.antgroup.com/campus-position?positionId=260721010991745) | MCP, RAG | 未标注 |
| 待筛 | ★ | A | 阿里巴巴集团 | AI Agent优化工程师-训练/数据/评测 | 北京 / 杭州 / 上海 等 | 自建:campus-talent.alibaba | 未知 | [JD](https://campus-talent.alibaba.com/campus/position/199907720043) | MCP, RAG | 未标注 |
| 待筛 | ★ | A | MiniMax | 大模型算法工程师-2028届实习（JD里唯一明确写 agent / RAG / tool-use 的 | 北京 / 上海 | 飞书招聘 | 2026-09-28 | [JD](https://vrfi1sk8a0.jobs.feishu.cn/379481/position/7674980747073095986/detail) | RAG |  |
| 待筛 | ★ | B | OPPO | AI研究员（AI多模态智能体） | 深圳市 | 自建:careers.oppo.com | 未知 | [JD](https://careers.oppo.com/university/oppo/campus/post?recruitType=Graduate) | Harness | 打开链接后在搜索框输入「AI研究员」回车，列表会出现多个AI研究员岗位；认准招聘类型标着「应届生 (2027届应届生校园招聘)」、工作地「深圳市」、名字不带「-博士」后缀的那条「AI研究员（AI多模态智能体）」。同名的还有博士生招聘版和寻梦实习版，别投错。 |
| 待筛 | ★ | A | 京东 | 算法工程师-多模态大模型（JDS-新星计划） | 北京/广东省-深圳市 | 自建:campus.jd.com | 2026-11-30 | [JD](https://campus.jd.com/#/details?id=9112) | RAG |  |
| 待筛 | ★ | A | 京东 | 算法工程师-机器学习（JDS-新星计划） | 北京/广东省-深圳市 | 自建:campus.jd.com | 2026-11-30 | [JD](https://campus.jd.com/#/details?id=9084) | RAG |  |
| 挂 | ★ | A | 元戎启行 DeepRoute | 【2027秋招】大模型算法工程师 | 上海市、广东·深圳市 | Moka | 2026-12-31 | [JD](https://app.mokahr.com/campus-recruitment/deeproute/145894#/job/402f5281-a0e9-4bec-ac97-a76742fc74d8) | RAG |  |
| 待筛 | ★ | A | 华为 | AI应用工程师 应届生 | 深圳/上海/北京/南京/杭州/西安/东莞 | 自建:career.huawei.com | 2026-10-14 | [JD](https://career.huawei.com/cn/job-details?advertisementId=36390) | RAG |  |
| 待筛 | ★ | A | 字节跳动 | 大语言模型Agent算法工程师-Seed大模型人才校招 | 北京 | 自建:jobs.bytedance.com | 未知 | [JD](https://jobs.bytedance.com/campus/position/7622493697326582069/detail) | Tool Use | 页面未标注截止时间；招聘项目「2027届Seed大模型人才校招」在招 |
| 待筛 | ★ | A | 字节跳动 | 豆包AI搜索架构工程师-Seed大模型人才校招 | 北京 | 自建:jobs.bytedance.com | 未知 | [JD](https://jobs.bytedance.com/campus/position/7621894037364836613/detail) | RAG | 页面未标注截止时间；招聘项目「2027届Seed大模型人才校招」在招 |
| 待筛 | ★ | A | 字节跳动 | AI Agent开发工程师 - Data-抖音/直播/电商/剪映 | 北京、杭州 | 自建:jobs.bytedance.com | 未知 | [JD](https://jobs.bytedance.com/campus/position/7677585479047563573/detail) | RAG | 页面未标注截止时间；招聘项目「2027届校园招聘」在招 |
| 待筛 | ★ | A | 字节跳动（TikTok） | Agent开发工程师（搜索） - TikTok研发 | 北京、上海 | 自建:jobs.bytedance.com | 未知 | [JD](https://jobs.bytedance.com/campus/position/7665985793949993269/detail) | RAG | 页面未标注截止时间；招聘项目「2027届校园招聘」在招 |
| 待筛 | ★ | A | 字节跳动（飞书） | Agent研发工程师 - 飞书 | 深圳 | 自建:jobs.bytedance.com | 未知 | [JD](https://jobs.bytedance.com/campus/position/7668280227769157893/detail) | RAG | 页面未标注截止时间；招聘项目「2027届校园招聘」在招 |
| 待筛 | ★ | A | 小红书 | 【REDstar】AI Agent算法工程师 | 北京市，上海市 | 自建:job.xiaohongshu.com | 未知 | [JD](https://job.xiaohongshu.com/campus/position/20889) | Harness | 未标注 |
| 待筛 | ★ | A | 智谱AI（北京智谱华章） | 【智谱星】26届校招-算法工程师-行业应用（解决方案/交付方向最接近的一条） | 北京（上海/深圳/杭州有同名岗） | 飞书招聘 | 未知 | [JD](https://zhipu-ai.jobs.feishu.cn/zhipucampus/position/7563599319066347815/detail) | RAG | 未标注 |
| 待筛 | ★ | A | 月之暗面 Moonshot AI / | Harness Agent 产品工程师实习生 | 北京 | Moka | 未知 | [JD](https://app.mokahr.com/campus-recruitment/moonshot/148507#/job/caa36d5e-8007-47f4-b279-cc1388d0c9ed) | Harness | 未标注 |
| 待筛 | ★ | A | 理想汽车 | 大模型算法工程师（Agent / harness 方向，岗位号 A159682） | 北京 | 自建:www.lixiang.com | 2026-10-10 | [JD](https://www.lixiang.com/employ/detail/19790.html?jobCode=A159682) | Harness |  |
| 待筛 | ★ | A | 理想汽车 | 大模型算法工程师（RAG + Agent 方向，岗位号 A182593） | 北京 | 自建:www.lixiang.com | 2026-10-10 | [JD](https://www.lixiang.com/employ/detail/19791.html?jobCode=A182593) | RAG |  |
| 待筛 | ★ | A | 百度 | 北京-大模型算法工程师(J100728) | 北京市 | 自建:talent.baidu.com | 未知 | [JD](https://talent.baidu.com/jobs/detail/GRADUATE/ccfdea4e-4ae4-4954-9062-fd94960a2861) | RAG | 页面显示日期 2026-07-21（同上，判断为发布/更新日期） |
| 待筛 | ★ | A | 百度 | 2027AIDU-Agent应用全栈工程师(J99974) | 北京市 | 自建:talent.baidu.com | 未知 | [JD](https://talent.baidu.com/jobs/detail/GRADUATE/6f9c3a86-6557-409d-8fa7-e6f4c68d6765) | RAG | 页面显示日期 2026-07-21 |
| 待筛 | ★ | A | 网易互娱 | AI Agent工程师（引擎方向） | 杭州、广州 | 自建:campus.game.163.com | 未知 | [JD](https://campus.game.163.com/app/detail/index?id=4755&projectId=102) | RAG | 未标注 |
| 待筛 | ★ | A | 网易雷火 | 人工智能算法工程师（LLM Agent方向） | 杭州 | 自建:campus.163.com | 2026-10-15 | [JD](https://campus.163.com/app/detail/index?id=4692&projectId=77) | Harness |  |
| 待筛 | ★ | A | 网易雷火 | 人工智能算法工程师（Agent智能体与强化学习方向） | 杭州 | 自建:campus.163.com | 2026-10-15 | [JD](https://campus.163.com/app/detail/index?id=4691&projectId=77) | Harness |  |
| 待筛 | ★ | A | 美团 | 【北斗】AI Agent工程师（大模型方向） | 北京市、上海市 | 自建:zhaopin.meituan.com | 未知 | [JD](https://zhaopin.meituan.com/web/position/detail?jobUnionId=4533842729&highlightType=campus) | LangChain | 页面未标截止日期；列表显示「更新于2026/06/03」，状态可投（有「立即申请」，无「当前职位无法投递」提示） |
| 待筛 | ★ | A | 美团 | AI全栈工程师（应届-校园招聘） | 北京市、上海市、成都市、深圳市 | 自建:zhaopin.meituan.com | 未知 | [JD](https://zhaopin.meituan.com/web/position/detail?jobUnionId=4697320043&highlightType=campus) | RAG | 未标截止；列表显示「更新于2026/08/17」，可投 |
| 待筛 | ★ | C | 美团 | 北斗计划 官方项目页（校招入口） | 北京/上海/深圳等 | 自建:zhaopin.meituan.com | 未知 | [JD](https://zhaopin.meituan.com/web/beidouprogram) | RAG | 这是项目介绍页，不是岗位列表。要看具体北斗岗位，点页面中部「应届职位」按钮，或直接用下一条的B级列表链接。 |
| 待筛 | ★ | A | 荣耀 HONOR | 大模型算法工程师 | 南京市、上海市、深圳市 | 自建:career.honor.com | 2026-09-30 | [JD](https://career.honor.com/SU60eea919bef57c1023f6fe78/pb/posDetail.html?postId=6a83c5431ad6db7cf8056b7d&postType=campus) | RAG |  |
| 待筛 | ★ | A | 蔚来 NIO | Super Sparks-校招-智能体Harness Engineering研究员/工程师 | 上海 | 飞书招聘 | 2026-09-28 | [JD](https://nio.jobs.feishu.cn/campus/position/7661853188068591935/detail) | RAG |  |
| 待筛 | ★ | A | 蔚来 NIO | Super Sparks-校招-企业智能系统研发工程师 | 上海 | 飞书招聘 | 2026-09-28 | [JD](https://nio.jobs.feishu.cn/campus/position/7665996543711054118/detail) | MCP |  |
| 待筛 | ★ | A | 阿里巴巴集团 | AI应用研发工程师 | 北京 / 广州 / 杭州 / 上海 /  | 自建:campus-talent.alibaba | 未知 | [JD](https://campus-talent.alibaba.com/campus/position/199907620013) | RAG | 未标注 |
| 待筛 | ☆ | A | DeepSeek（深度求索） | Code Agent 数据工程师 | 北京 | Moka | 未知 | [JD](https://app.mokahr.com/social-recruitment/high-flyer/140576#/job/a4ad8628-286e-4395-ac3e-b8117ac695c6) | — | 未标注 |
| 待筛 | ☆ | A | DeepSeek（深度求索） | 通用Agent数据产品经理（办公/生活/搜索） | 北京 / 杭州 | Moka | 未知 | [JD](https://app.mokahr.com/social-recruitment/high-flyer/140576#/job/bdffaaf8-5d88-4aa5-9869-8ab76fcd862a) | — | 未标注 |
| 待筛 | ☆ | B | OPPO | AI工程师（AI Agent方向） | 成都市、深圳市 | 自建:careers.oppo.com | 未知 | [JD](https://careers.oppo.com/university/oppo/campus/post?recruitType=Graduate) | — | 打开链接后（已默认筛出2027届应届生115个岗位），在岗位列表右上方的搜索框「按职位或者关键词搜索」里输入 AI工程师 回车；或在左侧筛选栏「职位类别」勾选「AI/算法类」，然后翻页找「AI工程师（AI Agent方向）」。点岗位标题即在列表内展开完整JD。 |
| 待筛 | ☆ | A | 华为 | AI模型工程师 应届生（岗位意向可选「Agent技术」方向） | 深圳/上海/北京/南京/杭州/西安/东莞 | 自建:career.huawei.com | 2026-10-14 | [JD](https://career.huawei.com/cn/job-details?advertisementId=36383) | — |  |
| 待筛 | ☆ | A | 华为 | AI Infra工程师 应届生 | 深圳/上海/北京/南京/杭州/西安/东莞 | 自建:career.huawei.com | 2026-10-14 | [JD](https://career.huawei.com/cn/job-details?advertisementId=36384) | — |  |
| 待筛 | ☆ | A | 字节跳动（火山引擎 / AI算力基础 | Agent解决方案架构师 - AI算力基础设施 | 北京、杭州 | 自建:jobs.bytedance.com | 未知 | [JD](https://jobs.bytedance.com/campus/position/7667893314209384757/detail) | — | 页面未标注截止时间；招聘项目「2027届校园招聘」在招 |
| 待筛 | ☆ | A | 字节跳动（火山引擎） | 云与AI解决方案架构师 - 火山引擎 | 北京、上海、成都、深圳 | 自建:jobs.bytedance.com | 未知 | [JD](https://jobs.bytedance.com/campus/position/7678245416031095045/detail) | — | 页面未标注截止时间；招聘项目「2027届校园招聘」在招 |
| 待筛 | ☆ | A | 快手 | 数据FDE工程师-数据研发方向 | 杭州、北京 | 自建:campus.kuaishou.cn | 未知 | [JD](https://campus.kuaishou.cn/recruit/campus/e/#/campus/job-info/13613) | — | 未标注 |
| 待筛 | ☆ | A | 快手 | AI Agent产品设计工程师-PDE | 北京 | 自建:campus.kuaishou.cn | 未知 | [JD](https://campus.kuaishou.cn/recruit/campus/e/#/campus/job-info/13770) | — | 未标注 |
| 待筛 | ☆ | B | 快手 | 快Star顶尖技术人才计划（27届校招，77个在招岗位） | 北京、杭州、深圳、上海、广州、成都 | 自建:campus.kuaishou.cn | 未知 | [JD](https://campus.kuaishou.cn/recruit/campus/e/#/campus/jobs?name=%E5%BF%ABStar&pageNum=1&recruitSubProjectCodes=20271779425607) | — | 进 https://campus.kuaishou.cn/recruit/campus/e/ → 顶部搜索框输「快Star」→ 回车；或走左侧「职位筛选 → 招聘项目 → 快Star人才计划」勾选。计划介绍页走顶部导航「快Star人才计划」。注意：URL 里的 |
| 待筛 | ☆ | A | 携程 | LLM算法工程师（2027届秋招）MJ036605 | 上海 | 自建:careers.ctrip.com | 未知 | [JD](https://careers.ctrip.com/#/campus/job-detail/MJ036605) | — | 未标注 |
| 待筛 | ☆ | A | 携程 | 大数据平台开发工程师（AI Agent方向）（2027届秋招）MJ036677 | 上海 | 自建:careers.ctrip.com | 未知 | [JD](https://careers.ctrip.com/#/campus/job-detail/MJ036677) | — | 未标注 |
| 待筛 | ☆ | A | 智谱AI（北京智谱华章） | 多模态强化学习算法实习生 (VLM Agentic RL 方向) | 北京 | 飞书招聘 | 未知 | [JD](https://zhipu-ai.jobs.feishu.cn/zhipucampus/position/7615179145912240411/detail) | — | 未标注 |
| 待筛 | ☆ | A | 智谱AI（北京智谱华章） | 26届校招-agent算法工程师（AutoGLM 团队） | 北京 | 飞书招聘 | 未知 | [JD](https://zhipu-ai.jobs.feishu.cn/zhipucampus/position/7530590286038075686/detail) | — | 未标注 |
| 待筛 | ☆ | A | 月之暗面 Moonshot AI / | Agent Development Engineer（实习） | 北京 | Moka | 未知 | [JD](https://app.mokahr.com/campus-recruitment/moonshot/148507#/job/529591c4-cac4-47a1-b122-a15088e5459e) | — | 未标注 |
| 待筛 | ☆ | A | 百度 | 2027AIDU-智能体算法研究员(J102506) | 北京市 | 自建:talent.baidu.com | 未知 | [JD](https://talent.baidu.com/jobs/detail/GRADUATE/cbdc8a04-785e-483e-9037-43c2b7fa873e) | — | 页面显示日期 2026-07-21 |
| 待筛 | ☆ | B | 百度 | 百度2027校招职位列表（该批次入口，157个岗位） | 北京/上海/深圳/大连等 | 自建:talent.baidu.com | 未知 | [JD](https://talent.baidu.com/jobs/list) | — | 重要：百度这个列表页的筛选/搜索状态不写进URL（搜完URL仍是 /jobs/list），所以无法给带参数的B级链接。进站后在页面中部搜索框（placeholder「请输入职位关键词」）输入 Agent 或 智能体，点右侧蓝色「百度一下」按钮。左侧还可勾选「校 |
| 待筛 | ☆ | A | 美团 | AI产品经理岗（应届-校园招聘） | 北京市、上海市、成都市、深圳市 | 自建:zhaopin.meituan.com | 未知 | [JD](https://zhaopin.meituan.com/web/position/detail?jobUnionId=4697309845&highlightType=campus) | — | 未标截止；列表显示「更新于2026/08/17」，可投 |
| 待筛 | ☆ | B | 美团 | 美团校招列表页 · 北斗计划岗位（keyword=北斗） | 北京/上海/深圳等 | 自建:zhaopin.meituan.com | 未知 | [JD](https://zhaopin.meituan.com/web/campus?keyword=%E5%8C%97%E6%96%97) | — | 美团校招列表页的 ?keyword= 参数实测生效（不带参数570条，keyword=北斗 → 151条，keyword=AI产品经理 → 264条并把AI产品岗排到最前）。进站后也可在页面「输入关键词搜索岗位」框里输 北斗 / AI Agent / RAG， |
| 待筛 | ☆ | A | 阶跃星辰 StepFun | 27届Stepstar-Code Agent 算法研究员 | 北京 / 上海 | Moka | 未知 | [JD](https://app.mokahr.com/campus-recruitment/step/141903#/job/6c97ac79-0156-408d-be2f-f7e2a73ba34f) | — | 未标注 |
| 待筛 | ☆ | A | 阶跃星辰 StepFun | 实习-通用多模态Agent算法研究员 | 北京 | Moka | 未知 | [JD](https://app.mokahr.com/campus-recruitment/step/141903#/job/3a2af6d6-1bb0-4225-9d29-06e976be1345) | — | 未标注 |
| 待筛 | · | C | DeepSeek（深度求索） | DeepSeek 招聘官网（自有域名入口，无独立2027校招站） | 北京 / 杭州 / 乌兰察布 | 自建:talent.deepseek.com | 未知 | [JD](https://talent.deepseek.com/) | — | 重要结论：DeepSeek 没有独立的「2027校园招聘」站点，校招/实习和社招共用这一个池子，是否收应届生写在每条 JD 的「【岗位类别】：实习/全职」里。进站后直接在职位列表点岗位名；或在 https://app.mokahr.com/social-rec |
| 待筛 | · | A | MiniMax | 大模型算法工程师-2027届 | 北京 / 上海 | 飞书招聘 | 2026-09-28 | [JD](https://vrfi1sk8a0.jobs.feishu.cn/379481/position/7573984779819010313/detail) | — |  |
| 待筛 | · | B | MiniMax | 2027届校园招聘 职位列表（全部30个岗位） | 北京 / 上海 | 飞书招聘 | 2026-09-28 | [JD](https://vrfi1sk8a0.jobs.feishu.cn/379481/position?project=7495675705720965415&limit=30) | — | 结论：2027届校招目前【没有】独立的 Agent / 大模型应用类岗位，30 个岗里 18 个是后端/infra，其余是算法研究（预训练、后训练、多模态、语音、视频）+ 市场/HR。离 Agent 最近的是「大模型算法工程师」系列。加 &keywords=A |
| 待筛 | · | A | NVIDIA | 【2027校园招聘】AI工程师（多方向）— 含 LLM推理优化 方向 | 上海市、广东·深圳市、北京市 | Moka | 未知 | [JD](https://app.mokahr.com/campus-recruitment/nvidia/47111#/job/9bad93b7-226a-40aa-9ba0-3637e3e7b6de) | — | 未在官网标注（2027校园招聘进行中，发布于2026-07-15） |
| 待筛 | · | A | 京东 | 算法工程师-数据挖掘（JDS-新星计划） | 北京 | 自建:campus.jd.com | 2026-11-30 | [JD](https://campus.jd.com/#/details?id=9095) | — |  |
| 待筛 | · | B | 京东 | 京东校招 · JDS-新星计划 技术方向职位列表 | 北京/深圳/成都/西安等 | 自建:campus.jd.com | 2026-11-30 | [JD](https://campus.jd.com/#/jobs) | — | 进站后左侧顶部先点「应届生」分组下的「JDS-新星计划」；再在「职位类别」横向筛选条里点「技术」。筛选条件不会写进URL，所以必须手动点。点岗位标题会新开 campus.jd.com/#/details?id=<岗位id>。 |
| 待筛 | · | A | 千寻智能 Spirit AI | 【2027 届校招】解决方案工程师 | 深圳 | 飞书招聘 | 未知 | [JD](https://nwd4iy9rd2s.jobs.feishu.cn/campusofSpiritAI/position/7672037136895396142/detail) | — | 未在官网标注（2027届秋季校园招聘项目进行中） |
| 待筛 | · | A | 千寻智能 Spirit AI | 【2027 届校招】技术交付运营 | 北京、深圳 | 飞书招聘 | 未知 | [JD](https://nwd4iy9rd2s.jobs.feishu.cn/campusofSpiritAI/position/7672038113417791787/detail) | — | 未在官网标注（2027届秋季校园招聘项目进行中） |
| 待筛 | · | A | 华为 | 智能汽车解决方案BD 应届生（解决方案序列） | 上海/深圳/北京/广州/重庆/芜湖/长春 | 自建:career.huawei.com | 2026-10-14 | [JD](https://career.huawei.com/cn/job-details?advertisementId=38434) | — |  |
| 待筛 | · | B | 华为 | 华为2027届应届生招聘 · 校招职位列表（69个在招岗位） | 全国 | 自建:career.huawei.com | 2026-10-14 | [JD](https://career.huawei.com/cn/campus-recruitment-job-list?recruitmentType=FRESH_GRADUATE) | — | 左侧「招聘类别」勾选「应届生」；「岗位类别」勾选「研发类」即可看到 AI应用工程师 / AI模型工程师 / AI Infra工程师 / 算法工程师。顶部搜索框可直接输入岗位名（如「AI模型工程师」「智能汽车解决方案BD」）。注意：职位标题本身不可点击跳转，要拿 |
| 待筛 | · | B | 字节跳动 | 2027届Seed大模型人才校招 全部在招岗位（列表页） | 北京 / 上海 / 深圳 / 杭州 | 自建:jobs.bytedance.com | 未知 | [JD](https://jobs.bytedance.com/campus/position?keywords=&category=&location=&project=7621018151002507573&type=&job_hot_flag=&current=1&limit=50) | — | 这条 URL 已带上校招批次 id project=7621018151002507573（= 2027届Seed大模型人才校招），打开即是该批次全部 50 个岗位的卡片列表，每张卡片直接展开 JD。要定位 LLM Applications 方向，在页面里找标 |
| 待筛 | · | B | 字节跳动 | 2027届校园招聘「AI全栈」相关正式岗（列表页） | 北京 / 上海 / 杭州 / 成都 /  | 自建:jobs.bytedance.com | 未知 | [JD](https://jobs.bytedance.com/campus/position?keywords=AI%E5%85%A8%E6%A0%88&category=&location=&project=&type=&job_hot_flag=&current=1&limit=30) | — | 这条 URL 已把搜索框内容设成「AI全栈」。打开后在结果里挑 tag 为「正式 + 2027届校园招聘」的（实习/ByteIntern 的跳过）。实际命中的正式岗有：AI全栈工程师-豆包 A258228B、AI全栈开发工程师-抖音用户产品 A177626、A |
| 待筛 | · | A | 字节跳动（豆包 / Flow） | AI全栈工程师 - 豆包 | 上海、北京 | 自建:jobs.bytedance.com | 未知 | [JD](https://jobs.bytedance.com/campus/position/7668601480149076277/detail) | — | 页面未标注截止时间；招聘项目「2027届校园招聘」在招 |
| 待筛 | · | A | 小红书 | 【REDstar】Dots-Post-Training算法工程师 | 北京市，上海市 | 自建:job.xiaohongshu.com | 未知 | [JD](https://job.xiaohongshu.com/campus/position/16684) | — | 未标注 |
| 待筛 | · | B | 小红书 | 小红书校园招聘官网（27届技术类正式校招入口） | 北京/上海/杭州/深圳/新加坡 | 自建:job.xiaohongshu.com | 未知 | [JD](https://job.xiaohongshu.com/campus/position) | — | 进站后在职位搜索框输入「Agent」或「大模型」或「Dots」；只看27届全职就挑标题带【REDstar】的。详情页URL规律：job.xiaohongshu.com/campus/position/<positionId>。 |
| 待筛 | · | A | 快手 | AI全栈开发工程师 | 北京、杭州 | 自建:campus.kuaishou.cn | 未知 | [JD](https://campus.kuaishou.cn/recruit/campus/e/#/campus/job-info/13185) | — | 未标注 |
| 待筛 | · | B | 携程 | 携程2027届秋招 · 校招职位列表（53个岗位） | 上海/北京/南通/合肥/南昌/广州/成都 | 自建:careers.ctrip.com | 未知 | [JD](https://careers.ctrip.com/#/campus/jobList) | — | 进站后左侧「筛选职位 → 职位类型」可筛，但更快的是直接把列表翻到第4-5页看技术岗；每张卡片下方的「查看职位」跳 careers.ctrip.com/#/campus/job-detail/<MJ编号>。 |
| 待筛 | · | B | 智谱AI（北京智谱华章） | 智谱AI校招官网 职位列表（当前共61个岗位） | 北京 / 上海 / 深圳 / 杭州 | 飞书招聘 | 未知 | [JD](https://zhipu-ai.jobs.feishu.cn/zhipucampus/position?limit=100) | — | 进站后左侧只有「职位类别/城市」筛选，没有届别筛选。要找 Agent 岗：直接看这几条 —— 26届校招-agent算法工程师、26届校招-AI院-大模型算法工程师-Agent、【智谱星】26届校招-AI院-GLM后训练团队-算法工程师（Agent）、日常实习 |
| 待筛 | · | B | 月之暗面 Moonshot AI / | Kimi 校园招聘 职位列表（共100个岗位） | 北京 / 上海 | Moka | 未知 | [JD](https://app.mokahr.com/campus-recruitment/moonshot/148507#/jobs) | — | 注意：careers.kimi.com 首页的「加入我们」只指向【社招】站（app.mokahr.com/apply/moonshot/148506），校招要走这条。进站后在搜索框输入 Agent 得到 12 条：Kimi Agent Eval 研究与产品实习 |
| 待筛 | · | B | 网易互娱 | 网易互娱2027届校园招聘 · 职位列表（54个岗位） | 杭州/上海/广州/新加坡 | 自建:campus.game.163.com | 未知 | [JD](https://campus.game.163.com/app/job/position?id=102) | — | 进站后左侧「职位类别」选「人工智能」或「技术」，或搜索框输入「Agent」/「大模型」。详情页URL规律：campus.game.163.com/app/detail/index?id=<岗位id>&projectId=102。 |
| 待筛 | · | B | 网易雷火 | 网易游戏雷火2027届校园招聘 · 全职职位列表（64个岗位） | 杭州 | 自建:leihuo.163.com | 2026-10-15 | [JD](https://leihuo.163.com/campus/#/full) | — | 进站后左侧筛选「职位类别」；或直接在职位搜索框输入「Agent」「智能体」「大模型」。点进任一岗位会跳到 campus.163.com/app/detail/index?id=<岗位id>&projectId=77。 |
| 待筛 | · | B | 网易（互联网） | 网易互联网2027届校园招聘 · 职位列表（73个岗位） | 杭州/北京/上海/广州/宁波/安顺 | 自建:campus.163.com | 未知 | [JD](https://campus.163.com/app/job/position?id=103) | — | 左侧「职位类别」选「技术」或「人工智能」，或用搜索框输入「Agent」「大模型」。详情页URL规律：campus.163.com/app/detail/index?id=<岗位id>&projectId=103。 |
| 待筛 | · | A | 美团 | AI产品经理（应届-校园招聘，AI产品经理提前批） | 北京市、上海市 | 自建:zhaopin.meituan.com | 未知 | [JD](https://zhaopin.meituan.com/web/position/detail?jobUnionId=3524979618&highlightType=campus) | — | 未标截止；列表显示「更新于2026/03/05」（较旧，但页面仍显示「立即申请」） |
| 待筛 | · | B | 蚂蚁集团 | 蚂蚁集团2027届应届生招聘 全部职位列表（70个） | 全国 | 自建:talent.antgroup.com | 未知 | [JD](https://talent.antgroup.com/campus-full-list?type=campus_graduates) | — | 打开即是2027届应届生批次。目标两个岗在第1页最上面两条，不用搜。若要搜：中部搜索框输入「智能体」或「大模型」再点「搜 索」。注意该站职位卡片不是超链接，鼠标点卡片是就地展开JD而非跳转；要拿分享链接得点详情页里的「分享」按钮。备注：每个批次最多只能投 2  |
| 待筛 | · | B | 阶跃星辰 StepFun | 2027届校园招聘 职位列表（共20个岗位） | 北京 / 上海 | Moka | 未知 | [JD](https://app.mokahr.com/campus-recruitment/step/141903#/jobs) | — | 进站后左侧「职能类型」选「算法研究」，或直接看列表。2027届正式岗都以「27届Stepstar-」开头，实习岗以「Stepstar实习-」开头。Agent 相关的只有两条：27届Stepstar-Code Agent 算法研究员（全职）和 Stepstar实 |
| 待筛 | · | B | 阿里巴巴集团 / Token Fou | Token Foundry 2027届应届生在招职位（74个） | 北京 / 杭州 等 | 自建:campus-talent.alibaba | 未知 | [JD](https://campus-talent.alibaba.com/campus/position?batchId=100000760001&filterParams=%7B%22customDept%22%3A%5B%22Q5EOVE%22%5D%7D) | — | 打开即已筛好（Q5EOVE=Token Foundry）。手动路径：左侧「业务集团/公司」→ 勾「Token Foundry」。 |
| 待筛 | · | B | 阿里巴巴集团 / 千问事业部（千问A | 千问事业部 2027届应届生在招职位（28个） | 北京 / 杭州 / 上海 等 | 自建:campus-talent.alibaba | 未知 | [JD](https://campus-talent.alibaba.com/campus/position?batchId=100000760001&filterParams=%7B%22customDept%22%3A%5B%22YZ8741%22%2C%2253MICY%22%2C%22IDN1B2%22%2C%22N6XDI8%22%5D%7D) | — | 打开链接后左侧筛选栏「业务集团/公司」已勾选千问事业部四条线，右侧列表直接显示28个岗。想再窄一点，在左侧「职位类别」勾「技术类」。若URL的filterParams被浏览器吃掉，改为手动：进 campus-talent.alibaba.com/campus/ |
| 待筛 | · | B | 阿里巴巴集团 / 阿里云（阿里云技术 | 阿里云技术线+MaaS业务线 2027届应届生在招职位（98个） | 北京 / 杭州 / 上海 / 深圳 等 | 自建:campus-talent.alibaba | 未知 | [JD](https://campus-talent.alibaba.com/campus/position?batchId=100000760001&filterParams=%7B%22customDept%22%3A%5B%22JM3EV0%22%2C%225YTU0N%22%5D%7D) | — | 打开即已筛好。手动路径：campus-talent.alibaba.com/campus/position?batchId=100000760001 → 左侧「业务集团/公司」→「阿里云」→ 勾「阿里云技术线」和「MaaS业务线」。大模型应用类重点看 AI应用 |

## 查过没岗的（别重复查）

| 公司/来源 | 查询日期 | 结论 |
|---|---|---|
| AI创业-智谱/月暗/MiniMax | 2026-08-29 | 智谱Moka校招页 app.mokahr.com/campus-recruitment/zphz/148984 重定向循环抓不到；zhipu-ai.jobs.feishu.cn/zhipucampus、vrfi1sk8a0.jobs.feishu.cn 岗位列表、careers.kimi.com 均为SPA只返回标题；知乎穿越计划文章403、牛客discuss帖与Superlinear帖正文渲染失败；resumemakeroffer.com 与 campus.niuqizp.com 的2027届汇总页均未收录这三家；智谱与月之暗面的"2027届秋招"正式公告、穿越计划官方报名入口经多轮检索均未找到。 |
| AI创业-阶跃/DeepSeek/百川 | 2026-08-29 | 百川智能：未找到任何2027届校招证据。搜到的最新校招计划为星耀计划2025届（面向2024.10~2025.9毕业生），2024/2025届公告皆有但无2027届启动信息；2027届聚合仓库（github.com/xixicc186/xixicc2027）、resumemakeroffer、牛客27届秋招汇总帖均无百川条目；官方飞书招聘站 cq6qe6bvfr6.jobs.feishu.cn/646926/ 为SPA，WebFetch只渲染出\"百川智能，欢迎你的加入！\"一句，无岗位数据；四川大学就业网公告页返回HTTP 483无法读取。该公司2025年后转向医疗AI且有收缩报道，2027届校招可能未开/不开，建议仅低频监控其飞书站。另：阶跃星辰Moka校招站（app.mokahr.com/campus-recruitment/step/141903）WebFetch重定向超限无法验证 |
| AI创业-面壁/硅基/无问/Dify | 2026-08-29 | 硅基流动SiliconFlow：官网 siliconflow.cn 无任何招聘入口，多轮搜索（含"2027届/27届/校园招聘/秋招"）均无校招公告；牛客企业页 nowcoder.com/enterprise/265283 显示"暂无岗位信息"（校招日程停在2025/07/29）；现有招聘渠道仅社招简历邮箱 talent@siliconflow.cn（知乎社招帖），无2027届证据，判定未启动校招。Dify（苏州语灵/LangGenius）：官方招聘页 join.dify.ai/roles.html 明确显示"No open roles at the moment"，仅留邮箱 joinus@dify.ai（"We read every email"）；无中国校招体系、无2027届任何公告，日本LangGenius采用站也显示招聘停止；如仍想尝试只能邮箱自荐。另：面壁/无问/硅基的牛客企业主 |
| 大厂-字节/阿里/蚂蚁 | 2026-08-29 | jobs.bytedance.com、talent-holding.alibaba.com、talent.antgroup.com 均为SPA，WebFetch渲染不出岗位列表（字节岗位详情页仅渲染出标题），具体岗位只能靠搜索引擎旁证；guancha.cn 阿里报道WebFetch返回空内容（改用tidenews核实）；蚂蚁星PlanA顶尖人才专项提前批（含Agent系统与强化学习方向）截止时间2026-07-18已过，未收录；会话WebSearch配额中途用尽（200/200），未能进一步挖到字节\"AI Agent开发\"具体岗位直链和蚂蚁秋招具体岗位页直链。 |
| 大厂-百度/美团/快手 | 2026-08-29 | zhaopin.meituan.com 和 zhaopin.kuaishou.cn 的岗位列表/详情页均为SPA，WebFetch只返回加载动画空壳，拿不到单岗直投URL（美团两个detail链接来自搜索引擎收录，无法进站核对岗位名）；talent.baidu.com/jobs/list 例外地渲染成功，直接抓到岗位。快手可灵团队的具体校招岗位名未搜到公开单岗公告，仅有"大模型相关岗位需求翻倍"的公司级表述。 |
| 大厂-华为/网易/京东 | 2026-08-29 | campus.jd.com、career.huawei.com、campus.163.com、bole.campus.163.com、leihuo.163.com/campus 均为SPA，WebFetch渲染不出岗位列表，只能靠转载公告取证；京东官方公众号文章(mp.weixin.qq.com)被环境验证码拦截；知乎两篇关键帖（网易内推攻略、京东智能体团队内推）403；南开就业网的华为AI工程师岗页已过期；quanzhi.com的\"华为2027届校招AI工程师\"公告投递入口指向猎聘第三方链接、可信度低未收录；京东TGT顶尖青年技术天才计划含\"多模态大模型与应用\"方向且毕业窗口(2024.10.1后)覆盖27届，但该批网申2026-06-26~07-24已截止；未找到华为\"Agent技术/大模型应用\"具体单岗的可验证直链（集团IT 27届秋招岗位清单仅见于搜索摘要）。 |
| 中厂-小红书/携程/理想/蔚来等 | 2026-08-29 | 大疆(DJI)：2027届"拓疆者"校招46岗以硬件/嵌入式/经典算法为主，仅有的大模型相关岗为"大模型推理部署算法工程师"（量化/剪枝/算子优化，压缩部署向，非Agent/应用）和"世界模型算法工程师"（3D/4D场景重建），均不属Agent/大模型应用/RAG方向，且该批次投递截止2026-08-25已过——不报。其他排查中的死胡同：OPPO官网careers.oppo.com为SPA，WebFetch渲染为空（改用民族大学就业网公告取证）；知乎"小红书大模型Agent算法工程师"帖返回403无法验证是否对27届校招开放；携程/小红书/蔚来官方career站均为SPA无法直接渲染岗位列表，具体岗位名均需进站搜索。 |
| FDE专项 | 2026-08-29 | Palantir：无中国大陆办公室与校招入口，搜索无中国区岗位。Databricks：搜索未见中国大陆校招。AWS中国：仅查到2026届助理解决方案架构师实习（浙大就业网，截止2025-06-30已过期），27届SA校招未见。微软中国：27届校招未见启动公告。Manus/蝴蝶效应：仅2025年3月武汉社招报道，无27届校招。无问芯穹：牛企直聘帖为2026届（2025年11月发布），27届未见。阶跃星辰：仅见26届校招/春招，27届未启动，只有邮箱 campus@stepfun.com。月之暗面：27届仅"穿越计划"顶尖人才专项，无FDE类岗。阿里云：27届实习截止2026-07-31已过；阿里27届秋招（8月5日启动）中解决方案架构师校招岗未能确认，需进 talent.alibaba.com 自查。第四范式：Moka校招页重定向循环无法核验届次。以"FDE/前向部署工程师"为岗位名的校招J |
| 聚合源-GitHub/网站 | 2026-08-29 | givemeoc.com：2027届条目仅公司名可见，Agent/LLM岗位明细在会员付费墙后，无法提取带链接的具体岗。gankinterview.cn：17427条记录但全部"Unlock"需登录，未提取到任何岗。小林coding校招汇总页：只是givemeoc的推广跳转页，无岗位。应届生求职网(yingjiesheng.com)：搜索未发现2027届大模型/Agent专项汇总页。FDE关键词专项搜索：只命中科普/培训文章，未找到明确面向2027届的FDE校招岗。智谱（仅确认2027届实习生计划，未见2027届秋招公告）、月之暗面/Kimi（仅26届校招+27届期权激励新闻）故未列入。航天智能院有2027届大模型算法岗但仅公众号入口且军工单位对海外院校生源可能受限，未列入。 |
