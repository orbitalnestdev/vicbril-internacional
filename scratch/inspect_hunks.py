import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/tmp_diff_utf8.txt', 'r', encoding='utf-8') as f:
    diff_text = f.read()

diff_lines = diff_text.splitlines(keepends=True)
hunks = []
current_hunk = None

for line in diff_lines:
    if line.startswith('@@'):
        if current_hunk:
            hunks.append(current_hunk)
        current_hunk = {'header': line, 'lines': []}
    elif current_hunk is not None:
        if line.startswith('+') or line.startswith('-') or line.startswith(' '):
            current_hunk['lines'].append(line)
if current_hunk:
    hunks.append(current_hunk)

print(f"Loaded {len(hunks)} hunks.")

# Print the last hunks
if len(hunks) > 2:
    for idx in [-2, -1]:
        h = hunks[idx]
        print(f"Hunk index {len(hunks)+idx} header: {h['header']}")
        print(f"Number of lines: {len(h['lines'])}")
        print("First 10 lines of hunk:")
        for l in h['lines'][:10]:
            print(f"  {l.strip()}")
        print("Last 10 lines of hunk:")
        for l in h['lines'][-10:]:
            print(f"  {l.strip()}")
