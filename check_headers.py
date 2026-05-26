import re

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

matches = re.findall(r"detailedDescription:\s*`([^`]+)`", content)
for m in matches:
    lines = m.strip().split('\n')
    if len(lines) > 0 and lines[0].isupper() and lines[0] != 'DESCRIPCIÓN':
        print(lines[0])
