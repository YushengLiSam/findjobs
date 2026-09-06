#!/bin/bash
# 原子改 job-leads.md 的状态列。别手工编辑那张表——105 行，手改容易改错行。
# 用法: ./scripts/set-status.sh "<公司>" "<岗位关键词>" <新状态>
#   状态: 待筛 待投 已投 oc 挂 过期
set -euo pipefail
cd "$(dirname "$0")/.."
[ $# -lt 3 ] && { echo "用法: $0 \"<公司>\" \"<岗位关键词>\" <待筛|待投|已投|oc|挂|过期>"; exit 1; }
CO="$1"; JOB="$2"; NEW="$3"
case "$NEW" in 待筛|待投|已投|oc|挂|过期) ;; *) echo "✗ 状态只能是 待筛/待投/已投/oc/挂/过期"; exit 1;; esac

python3 - "$CO" "$JOB" "$NEW" <<'PY'
import sys, re, shutil, datetime
co, job, new = sys.argv[1:4]
p = 'job-leads.md'
lines = open(p, encoding='utf-8').read().split('\n')
hits = [i for i, l in enumerate(lines)
        if l.startswith('|') and co in l and job in l and re.match(r'^\|\s*(待筛|待投|已投|oc|挂|过期)\s*\|', l)]
if not hits:
    print(f"✗ 没找到匹配「{co}」+「{job}」的行"); sys.exit(1)
if len(hits) > 1:
    print(f"✗ 匹配到 {len(hits)} 行，把岗位关键词写具体些：")
    for i in hits: print("   " + '|'.join(lines[i].split('|')[1:6]))
    sys.exit(1)
i = hits[0]
shutil.copy(p, f'/tmp/job-leads.bak.{datetime.datetime.now():%Y%m%d-%H%M%S}')
old = re.match(r'^\|\s*(\S+)\s*\|', lines[i]).group(1)
lines[i] = re.sub(r'^\|\s*\S+\s*\|', f'| {new} |', lines[i], count=1)
open(p, 'w', encoding='utf-8').write('\n'.join(lines))
c = lines[i].split('|')
print(f"✓ {old} → {new}")
print(f"  {c[4].strip()} · {c[5].strip()}")
PY
[ "$NEW" = "已投" ] && echo "⚠️ 别忘了：session-log/ 建记录（照抄 _TEMPLATE.md）+ pipeline.md 加一行"
exit 0
