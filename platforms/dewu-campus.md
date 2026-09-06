# 得物 App 校园招聘（campus.dewu.com）

```
职位详情  https://campus.dewu.com/<企业号>/position/<postId>/detail
投递表单  https://campus.dewu.com/<企业号>/resume/<postId>/apply
投递成功  https://campus.dewu.com/<企业号>/resume/applied     ← 跳到这个 URL 才算真提交
```

前端是 **Formily**（阿里系 React 表单框架）。整页单表单，无分区块保存，一次性提交。

## 结构与选择器

| 元素 | 选择器 |
|---|---|
| 每个字段的容器 | `.ud-formily-item` |
| 标签文字 | `[class*="formily-item-label"]` |
| 展示态的值 | `[class*="control-content"]` |
| 下拉弹层 | `[class*="select__dropdown"]` |
| 下拉选项 | `[class*="select__list__item"]`（**过滤掉 class 含 `content` 的**） |
| 多选已选标签 | `[class*="select__selector__item"]` |

## ⚠️ 三个必踩的坑

### 1. 永远按 label 定位，不要按索引

字段容器是一个扁平数组，**每加一段教育/实习/项目子表单，后面所有索引整体偏移**。
我这次就因为缓存了索引，加完第二个项目后把项目名写进了「项目角色」、角色写进了「起止时间」。

```js
const items = [...document.querySelectorAll('.ud-formily-item')];
const findByLabel = kw => items.findIndex(it =>
  (it.querySelector('[class*="formily-item-label"]')?.innerText || '').includes(kw));
```

**写错位的字段要先清空再重填**，直接覆盖不生效。

### 2. 下拉弹层不销毁，必须按选项内容认

6 个下拉打开过就全部留在 DOM 里。按 opacity / display 挑"可见的那个"会拿到过期弹层，
结果是把别的字段的候选值填进当前字段。

```js
const dd = [...document.querySelectorAll('[class*="select__dropdown"]')]
  .find(e => [...e.querySelectorAll('[class*="select__list__item"]')]
    .some(x => x.innerText.trim() === '牛客网'));
```

点完**必须读回** `[class*="control-content"]` 确认。

### 3. `input[type=text]` 匹配不到任何东西

Formily 渲染的 `<input>` 没有显式 `type` 属性。用 DOM 属性过滤：

```js
[...it.querySelectorAll('input')].filter(e => e.type === 'text')
```

## 文本框写入

React 受控组件，用原生 setter 穿透：

```js
const set = (el, v) => {
  Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set.call(el, v);
  el.dispatchEvent(new Event('input', { bubbles: true }));
  el.dispatchEvent(new Event('change', { bubbles: true }));
};
```

`textarea` 换成 `HTMLTextAreaElement.prototype`。

**日期字段用同样的方法写入是有效的**（2026-08-24 实测：起止时间 ×3、预计毕业月份、教育起止时间全部用原生 setter 写入，表单提交成功未报错）。这和 PDD 的日期控件不一样，不必每次都去点日历面板——但提交前仍应读回确认。

## 字段地图（AI搜推产品岗，共 39 项）

| 字段 | 类型 | 取值 |
|---|---|---|
| 推荐方式 | 单选 | 无 |
| 意向城市 | 只读 | 随岗位（上海） |
| 简历附件 | 上传 | `file_upload` + ref |
| 姓名 / 手机 / 邮箱 / 性别 / 证件号码 | 文本、单选 | profile |
| 家庭现居住地 | 级联 | 广东省广州市 |
| 期望工作地点 | **虚拟滚动树** | ⚠️ 见下 |
| 是否接受调换工作地点 | 单选 | 是 |
| 预计毕业月份 | 日期 | 2026-12 |
| 语言水平 | 文本 | answer_bank |
| 是否已上传作品集 | 文本 | 非设计岗填「岗位非设计岗，无需作品集」 |
| 通过何种方式获知得物校招信息 | 下拉 | 见下方选项全集 |
| 过去1年，是否在得物/识货/95分APP购物 | 文本 | ⚠️ **不要敷衍**，见下 |
| 教育经历（学校/学历/二级学院/专业/起止/绩点） | 子表单 | profile |
| 实习经历（公司/职位/起止/描述） | 子表单 | experience_bank |
| 项目经历（项目名/角色/起止/描述/链接） | 子表单 | experience_bank |

**「获知渠道」选项全集**：得物校招官方推送信息 / 牛客网 / 小红书 / 老师·同学推荐 / 实习僧 / Boss直聘 / 学校就业信息网 / 在得物的亲属·朋友·学长学姐推荐 / 得物校招-校园大使

## 两个非机械性的点

**「期望工作地点」是 rc-virtual-list 虚拟滚动树**，程序设 `scrollTop` 无效，很难钻到具体城市。
这次只选到「中国大陆」这一层。配合「接受调换=是」逻辑自洽，但不精确——**这个字段交给用户手点更快**。

**「过去1年是否在得物购物」不是走过场题。** AI 产品类岗位的 JD 常写「是各类 AI 产品的活跃用户优先」，
这题是在考产品体感。只写「买过鞋，体验不错」偏薄。**应该向用户要真实细节**（搜索遇到什么不顺、
推荐准不准、鉴别流程体验如何），能接上 LionPick 的搜索导购经历最好。**但绝不替用户编造使用体验。**

## 已投记录

| 日期 | 岗位 | 记录 |
|---|---|---|
| 2026-08-24 | 【27届校招】AI搜推产品 | `session-log/2026-08-24-得物-AI搜推产品.md` |
