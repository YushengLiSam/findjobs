# 问卷星（wjx.cn）— 表单类投递

`https://v.wjx.cn/vm/<表单ID>.aspx`

很多公司的校招/内推登记不走自建 ATS，而是直接用问卷星发一张表（凯捷中国 27 届校招就是）。
这类表单**没有账号、没有登录态、不保存草稿到服务器**，一次填完直接提交。

## 结构与选择器

| 元素 | 选择器 | 说明 |
|---|---|---|
| 每道题的容器 | `#div<N>` | N 是题号，从 1 开始 |
| 题干 | `#div<N> .topichtml` | |
| 文本/电话/多行 | `#q<N>` | id 和 name 都是 `q<N>` |
| 单选 | `#q<N>_<序号>` | name 是 `q<N>` |
| 多选 | `#q<N>_<序号>` | 同上 |
| 选项文字 | `#div<N> .label` | **不是 `<label for=...>`**，是 `div.label` |
| 文件上传 | `#div<N> input[type=file]` | id 是随机生成的（`html5_xxxx`），不要写死 |

## ⚠️ 最容易踩的坑：选中状态不在 input 上

**问卷星不维护 `input.checked`。** 选中状态是外层 `div.ui-radio` / `div.ui-checkbox` 上的 **`checked` class**。

```js
// ✗ 错误的校验 —— 永远返回 false，会误判成"没选中"
input.checked

// ✓ 正确的校验
document.querySelectorAll('#div1 .ui-radio.checked .label')
```

这次就因为查错了地方，把明明成功的点击误报成"未选中"，白折腾一轮。

## 选中的正确姿势

- **单选**：`input.click()` 有效（会正确设置外层 class）
- **多选**：`input.click()` **无效**，必须点外层 `div.ui-checkbox`

两者绑定方式不同，别假设一致。稳妥写法是统一点外层容器：

```js
[...document.querySelectorAll('#div21 .ui-checkbox')].forEach(box => {
  if (box.querySelector('.label').innerText.trim() === '目标选项'
      && !box.classList.contains('checked')) box.click();
});
```

**按选项文字匹配，不要按序号猜** —— 题干里列的顺序和 DOM 顺序不一定一致。

## 文本框

直接设 `value` + 派发 `input`/`change`/`blur` 事件即可（jQuery 站点，提交时读 `.val()`）：

```js
const el = document.querySelector('#q2');
el.value = '<候选人>';
['input','change','blur'].forEach(e => el.dispatchEvent(new Event(e,{bubbles:true})));
```

比逐个滚动 + `form_input` 快得多 —— `read_page` 只返回视口内元素，28 题逐个滚动不现实。

## 其他

- **恢复弹窗**：之前填过会弹「您之前已经回答了部分题目，是否继续上次回答」。**点「确认」**（保留已有答案），别点取消。注意恢复出来可能是空的。
- **题号偏移**：正文里的编号和 `#div<N>` 的 N 可能对不上（中间插了题）。以 `#div<N>` 为准。
- **文件上传**：用 `find` 拿 ref 再 `file_upload`，别点「选择文件」按钮（会弹系统窗口）。上传成功的标志是区块内出现文件名 + 删除图标。
- **JS 输出别带原始 HTML**：`outerHTML` 会被安全策略拦截（`BLOCKED: Cookie/query string data`）。只取 id / class / type / innerText。

## 已建档表单

| 公司 | 表单 | 题数 | 记录 |
|---|---|---|---|
| 凯捷中国 | 27届校招宣讲简历投递 `ryU3Kv3` | 28 | `session-log/2026-08-15-凯捷中国-27届校招.md` |

## 这类表单的共性提醒

问卷星表单**问的私人信息比正规 ATS 更多更杂** —— 户籍、挂科记录、四六级、期望薪资、可面试时间，一张表全要。
其中大半落在 `candidate_profile.json` 的 `never_guess` 里。**逐题对照别名表分类，能填的填，不能填的整理成清单一次性问用户**，不要为了"填满"而推测。
