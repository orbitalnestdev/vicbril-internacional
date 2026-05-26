with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

import re

# We find the start of each product and extract name, description, PDF, specs, characteristics, specsTables
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
                specs_match = re.search(r"specs\s*:\s*\[(.*?)\]", block_str)
                chars_match = re.search(r"characteristics\s*:\s*\[(.*?)\]", block_str, re.DOTALL)
                tables_match = re.search(r"specsTables\s*:\s*\[", block_str)
                
                if id_match:
                    current_product['id'] = id_match.group(1)
                if name_match:
                    current_product['name'] = name_match.group(1)
                if cat_path_match:
                    items = [x.strip().strip("'\"") for x in cat_path_match.group(1).split(',')]
                    current_product['categoryPath'] = items
                if pdf_match:
                    current_product['pdf'] = pdf_match.group(1)
                if specs_match:
                    current_product['specs'] = specs_match.group(1)
                if chars_match:
                    current_product['chars_raw'] = chars_match.group(1)
                current_product['has_tables'] = bool(tables_match)
                
                # Count tables by scanning the block_str
                # Let's count how many occurrences of { title: or "title":
                tables_count = len(re.findall(r"title\s*:", block_str))
                current_product['tables_count'] = tables_count
                
                products_data.append(current_product)
                current_block = []
                
    if brace_count > 0:
        current_block.append(line)

# Only keep actual products (which have id)
products_data = [p for p in products_data if 'id' in p]

# Print aerial products
print("=== AERIAL PRODUCTS IN SERVICES/DATA.TS ===")
for p in products_data:
    if p.get('categoryPath') and p.get('categoryPath')[0] == 'Cables Instalación Aérea':
        print(f"ID: {p['id']}")
        print(f"  Name: {p['name']}")
        print(f"  PDF: {p.get('pdf', 'None')}")
        print(f"  Specs: {p.get('specs', 'None')}")
        print(f"  Tables Count: {p['tables_count']}")
        print(f"  Has Characteristics: {'chars_raw' in p}")
        print("-" * 50)
