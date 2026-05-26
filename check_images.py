import os
import re

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

prods = ['subterraneo-lsoh-aluminio', 'subterraneo-lsoh-cobre']
for prod in prods:
    match = re.search(f"id:\\s*'{prod}'.*?image:\\s*'([^']+)'", content, re.DOTALL)
    if match:
        img_path = 'public' + match.group(1)
        print(f"{prod} image: {img_path} - Exists: {os.path.exists(img_path)}")
