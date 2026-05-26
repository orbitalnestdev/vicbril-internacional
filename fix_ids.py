with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

import re

# Find duplicate IDs based on their path
matches = re.finditer(r'id:\s*\'([^\']+)\'(.*?categoryPath:\s*\[([^\]]+)\])', content, re.DOTALL)

for match in matches:
    prod_id = match.group(1)
    path_str = match.group(3)
    if 'Aluminio' in path_str and prod_id in ['subterraneo-lsoh', 'subterraneo-pvc', 'subterraneo-xlpe', '13-2-kv', '33-kv', 'otras-potencias']:
        content = content.replace(match.group(0), f"id: '{prod_id}-aluminio'{match.group(2)}")
    elif 'Cobre' in path_str and prod_id in ['subterraneo-lsoh', 'subterraneo-pvc', 'subterraneo-xlpe', '13-2-kv', '33-kv', 'otras-potencias']:
        content = content.replace(match.group(0), f"id: '{prod_id}-cobre'{match.group(2)}")

with open('services/data.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("done")
