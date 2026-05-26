with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

import re
# We can find the start of each product and extract name and categoryPath
lines = content.split('\n')
products_data = []

current_product = {}
in_products = False
brace_count = 0
current_block = []

for i, line in enumerate(lines):
    line_num = i + 1
    if 'export const products:' in line:
        in_products = True
        continue
        
    if not in_products:
        continue
        
    for char in line:
        if char == '{':
            if brace_count == 0:
                current_block = []
                current_product = {'line': line_num}
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                current_block.append(line)
                block_str = '\n'.join(current_block)
                
                id_match = re.search(r"id:\s*['\"`](.*?)['\"`]", block_str)
                name_match = re.search(r"name:\s*['\"`](.*?)['\"`]", block_str)
                cat_path_match = re.search(r"categoryPath\s*:\s*\[(.*?)\]", block_str)
                
                if id_match:
                    current_product['id'] = id_match.group(1)
                if name_match:
                    current_product['name'] = name_match.group(1)
                if cat_path_match:
                    # parse array elements
                    items = [x.strip().strip("'\"") for x in cat_path_match.group(1).split(',')]
                    current_product['categoryPath'] = items
                    
                products_data.append(current_product)
                current_block = []
                
    if brace_count > 0:
        current_block.append(line)

# Only keep actual products (which have id)
products_data = [p for p in products_data if 'id' in p]

# Print categories and their products
categories_map = {}
for p in products_data:
    root_cat = p.get('categoryPath', ['NO_CAT'])[0]
    if root_cat not in categories_map:
        categories_map[root_cat] = []
    categories_map[root_cat].append(p)

for cat, prods in categories_map.items():
    print(f"\nRoot Category: {cat} ({len(prods)} products)")
    for p in prods:
        print(f"  - ID: {p['id']}, Name: {p['name']}, Path: {p.get('categoryPath')}")
