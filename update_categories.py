import re

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

products = [
    'subterraneo-lsoh-aluminio',
    'subterraneo-pvc-aluminio',
    'subterraneo-xlpe-aluminio',
    'subterraneo-lsoh-cobre',
    'subterraneo-pvc-cobre',
    'subterraneo-xlpe-cobre'
]

for prod in products:
    match = re.search(f"(id:\\s*'{prod}'.*?categoryPath:\\s*\\[)(.*?)(\\])", content, re.DOTALL)
    if match:
        arr = match.group(2).split(',')
        if len(arr) == 4:
            new_arr = ','.join(arr[:3])
            new_str = match.group(1) + new_arr + match.group(3)
            content = content.replace(match.group(0), new_str)
            print(f"Updated categoryPath for {prod}")

with open('services/data.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done")
