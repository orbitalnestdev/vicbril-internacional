with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

import re

# Find products in data.ts
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
                pdf_match = re.search(r"pdf:\s*['\"`](.*?)['\"`]", block_str)
                
                if id_match:
                    current_product['id'] = id_match.group(1)
                if name_match:
                    current_product['name'] = name_match.group(1)
                if cat_path_match:
                    items = [x.strip().strip("'\"") for x in cat_path_match.group(1).split(',')]
                    current_product['categoryPath'] = items
                if pdf_match:
                    current_product['pdf'] = pdf_match.group(1)
                
                # Check for tables
                tables = []
                tables_block_match = re.search(r"specsTables\s*:\s*\[(.*?)\]\s*,?\s*\n\s*(?:certifications|availableBrands)", block_str, re.DOTALL)
                if tables_block_match:
                    titles = re.findall(r"title\s*:\s*['\"`](.*?)['\"`]", tables_block_match.group(1))
                    tables = titles
                current_product['table_titles'] = tables
                
                products_data.append(current_product)
                current_block = []
                
        if brace_count > 0:
            current_block.append(line)

products_data = [p for p in products_data if 'id' in p]

print("=== POTENCIA PRODUCTS IN SERVICES/DATA.TS ===")
for p in products_data:
    if p.get('categoryPath') and p.get('categoryPath')[0] == 'Cables de Potencia':
        print(f"ID: {p['id']}, Name: {p['name']}")
        print(f"  CategoryPath: {p['categoryPath']}")
        print(f"  PDF: {p.get('pdf', 'None')}")
        print(f"  Tables:")
        for t in p.get('table_titles', []):
            print(f"    - {t}")
        print("-" * 50)
