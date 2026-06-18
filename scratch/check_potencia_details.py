import os
import re
import json
import sys

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Parse products
products = []
for block in re.finditer(r'\{\s*id:\s*\'([^\']+)\',', content):
    start = block.start()
    next_id = content.find('id:', start + len(block.group(0)))
    end = next_id if next_id != -1 else len(content)
    chunk = content[start:end]
    
    cat_match = re.search(r'categoryPath:\s*\[(.*?)\]', chunk, re.DOTALL)
    name_match = re.search(r'name:\s*\'([^\'\s]+.*?)\'', chunk)
    
    if cat_match and name_match:
        cats = [c.strip().strip("'").strip('"') for c in cat_match.group(1).split(',')]
        name = name_match.group(1)
        
        # Check details
        has_specs = 'specs:' in chunk and not re.search(r'specs:\s*\[\s*\]', chunk)
        has_chars = 'characteristics:' in chunk and not re.search(r'characteristics:\s*\[\s*\]', chunk)
        has_tables = 'specsTables:' in chunk and not re.search(r'specsTables:\s*\[\s*\]', chunk)
        
        # Get actual content
        specs_m = re.search(r'specs:\s*\[(.*?)\]', chunk, re.DOTALL)
        chars_m = re.search(r'characteristics:\s*\[(.*?)\]', chunk, re.DOTALL)
        tables_m = re.search(r'specsTables:\s*\[(.*?)\]', chunk, re.DOTALL)
        
        products.append({
            'id': block.group(1),
            'name': name,
            'categoryPath': cats,
            'has_specs': has_specs,
            'has_chars': has_chars,
            'has_tables': has_tables,
            'specs_val': specs_m.group(1).strip() if specs_m else '',
            'chars_val': chars_m.group(1).strip() if chars_m else '',
            'tables_val': tables_m.group(1).strip()[:100] + '...' if tables_m else ''
        })

potencia_prods = [p for p in products if p['categoryPath'] and p['categoryPath'][0] == 'Cables de Potencia']

sys.stdout.buffer.write(f"Found {len(potencia_prods)} products in Cables de Potencia:\n".encode('utf-8'))
for p in potencia_prods:
    out = f"\nID: {p['id']}\n  Name: {p['name']}\n  Specs: {p['specs_val']}\n  Characteristics: {repr(p['chars_val'])}\n  Tables sample: {p['tables_val']}\n"
    sys.stdout.buffer.write(out.encode('utf-8'))
