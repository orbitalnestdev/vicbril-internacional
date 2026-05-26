import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

def clean_line(line):
    s = line.strip()
    replacements = {
        'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ñ': 'n',
        'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U', 'Ñ': 'N',
        '°': '', 'º': '', '┬': '', '├': '', '│': '', '®': '',
        '├│': 'o', '├í': 'a', '├®': 'e', '├║': 'u', '├▒': 'n', '├ô': 'O', '├ôN': 'ON'
    }
    for k, v in replacements.items():
        s = s.replace(k, v)
    s = re.sub(r'[^a-zA-Z0-9]', '', s)
    return s.lower()

with open('services/data.ts', 'r', encoding='utf-8') as f:
    orig_lines = f.readlines()

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

h1 = hunks[2]
expected_orig = []
for hl in h1['lines']:
    if hl.startswith(' ') or hl.startswith('-'):
        expected_orig.append(hl[1:])

# Let's align them starting from line 81 (index 80)
start_idx = 80
actual_window = orig_lines[start_idx : start_idx + len(expected_orig)]

print(f"Comparing hunk 1 (len={len(expected_orig)}) with data.ts lines {start_idx+1} to {start_idx+len(expected_orig)+1}:")
for idx_p, (el, al) in enumerate(zip(expected_orig, actual_window)):
    cel = clean_line(el)
    cal = clean_line(al)
    match_status = "MATCH" if cel == cal else "MISMATCH"
    print(f"Line {idx_p}: {match_status}")
    print(f"  Exp: {repr(el.strip())} -> {repr(cel)}")
    print(f"  Act: {repr(al.strip())} -> {repr(cal)}")
