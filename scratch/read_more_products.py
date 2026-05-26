import re

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

products_to_find = [
    '2-para-bomba-sumergible',
    '3-para-variador-de-frecuencia',
    'subterraneo-xlpe-aluminio',
    'subterraneo-xlpe-cobre'
]

for pid in products_to_find:
    m = re.search(r'id:\s*\'' + pid + r'\'.*?\}', content, re.DOTALL)
    # Let's get the whole block
    if m:
        start_pos = m.start()
        sub = content[start_pos:start_pos+6000]
        next_id = re.search(r'id:\s*\'', sub[10:])
        if next_id:
            block = sub[:10+next_id.start()]
        else:
            block = sub
        print(f"=== {pid} ===")
        print(block[:800] + "...\n")
    else:
        print(f"Not found: {pid}")
