#!/bin/bash
# 扫描应当公开的目录里有没有 PII。投递前 / 开源前跑一次。
# profile/ session-log/ 被 .gitignore 排除，是 PII 的合法存放处，不扫。
cd "$(dirname "$0")/.." || exit 1
echo "扫描非 profile/ 非 session-log/ 的文件…"
hits=$(grep -rnE '(^|[^0-9])(1[3-9][0-9]{9})([^0-9]|$)|(^|[^0-9])([1-9][0-9]{5}(19|20)[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[0-9]{3}[0-9Xx])([^0-9]|$)' . \
  --include="*.md" --include="*.json" --include="*.txt" --include="*.js" --include="*.sh" \
  --exclude-dir=profile --exclude-dir=session-log --exclude-dir=my-materials --exclude-dir=.git 2>/dev/null)
if [ -z "$hits" ]; then echo "✅ 干净"; exit 0; fi
echo "$hits" | sed 's/1[3-9][0-9]\{9\}/1**********/g; s/[1-9][0-9]\{16\}[0-9Xx]/******************/g'
echo; echo "⚠️ 上面这些位置有疑似身份证号或手机号。"
echo "   真 PII → 移进 profile/；误报（长数字ID）→ 加到本脚本的排除规则。"
exit 1
