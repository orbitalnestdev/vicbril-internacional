import re

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

m = re.search(r'id:\s*\'13-2-kv-aluminio\'.*?specsTables:\s*\[(.*?)\],', content, re.DOTALL)
if m:
    print(m.group(1)[:2000])
else:
    print("Not found")
