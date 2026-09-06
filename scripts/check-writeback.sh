#!/bin/bash
# Stop hook：检查知识库回写是否完成。
# 装在 ~/.claude/settings.json（不是项目级）——因为 SKILL.md 的意义就是「从别的目录发起」，
# 项目级 hook 在那种会话里根本不加载。无今日改动时秒退出，代价可忽略。
KB="/Users/yushengli/Documents/找工作/简历投递bot"
cd "$KB" 2>/dev/null || exit 0
D=$(date +%Y-%m-%d)
chg(){ [ -n "$(find $1 -newermt "$D 00:00:00" -type f 2>/dev/null | head -1)" ]; }
miss=()

# 有今日 session-log → 台账必须同日更新，且能 grep 到该公司
todaylogs=$(ls session-log/"$D"-*.md 2>/dev/null)   # _maintenance/ 子目录不算投递
if [ -n "$todaylogs" ]; then
  chg job-leads.md || miss+=("job-leads.md 今天没动 —— 投了岗位就要把状态改「已投」")
  for f in $todaylogs; do
    co=$(basename "$f" .md | sed -E 's/^[0-9]{4}-[0-9]{2}-[0-9]{2}-//; s/-.*$//')
    grep -q "$co" job-leads.md 2>/dev/null || miss+=("job-leads.md 里找不到「$co」—— 投过的公司要在台账里有行")
  done
elif ls session-log/_maintenance/"$D"-*.md >/dev/null 2>&1; then
  :   # 今天有维护记录 —— 维护会话也算回写了，放行
else
  { chg profile || chg generated; } && miss+=("动过 profile/ 或 generated/，但 session-log/ 没有今天($D)的记录。\
非投递的维护记录放 session-log/_maintenance/$D-<主题>.md")
fi

# 自由文本缓存变了 → index.json 必须同步
{ chg generated/self-eval || chg generated/qa; } && ! chg generated/index.json \
  && miss+=("generated/ 缓存改了但 index.json 没动 —— 索引会失准")

# 平台档案变了 → 提醒查 troubleshooting
chg platforms && ! chg troubleshooting.md \
  && miss+=("platforms/ 改了但 troubleshooting.md 没动 —— 新踩的坑记了吗")

[ ${#miss[@]} -eq 0 ] && exit 0

# 用 python 生成 JSON，避免手拼时把真换行写进 JSON 字符串（非法）
export KB_MISS=$(printf '%s\n' "${miss[@]}")
MARK="/tmp/.kb-writeback-$D-${CLAUDE_SESSION_ID:-x}"
FIRST=0; [ ! -f "$MARK" ] && { touch "$MARK"; FIRST=1; }
export KB_FIRST=$FIRST
python3 - <<'PYJSON'
import json, os
miss = [m for m in os.environ.get('KB_MISS', '').split('\n') if m.strip()]
msg = "⚠️ 知识库回写未完成：\n" + "\n".join("  · " + m for m in miss)
msg += "\n\n完整清单见 CLAUDE.md「回写清单」。"
msg += "\n（本次若只是知识库维护、没有实际投递，说明一句忽略即可。）"
print(json.dumps({"decision": "block", "reason": msg} if os.environ.get('KB_FIRST') == '1'
                 else {"systemMessage": msg}, ensure_ascii=False))
PYJSON
