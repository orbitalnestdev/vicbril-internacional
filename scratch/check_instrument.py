with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

import re
matches = re.findall(r"id:\s*['\"`](.*?)['\"`]", content)
for m in matches:
    if 'instrument' in m or '1-' in m:
        print(m)
