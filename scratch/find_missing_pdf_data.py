import os
import re

# Read data.ts
with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's extract all products.
# We will match blocks: id: '...' up to the end of that object.
products = []
matches = re.finditer(r'id:\s*\'([^\'\n]+)\'', content)
for m in matches:
    start_pos = m.start()
    sub = content[start_pos:start_pos+8000]
    next_id = re.search(r'id:\s*\'', sub[10:])
    if next_id:
        prod_block = sub[:10+next_id.start()]
    else:
        # Check if we hit the end of the array (bracket/semicolon)
        end_match = re.search(r'\]\s*;', sub)
        if end_match:
            prod_block = sub[:end_match.start()]
        else:
            prod_block = sub
    
    # Extract name, categoryPath, pdf, specsTables, characteristics
    name_m = re.search(r'name:\s*\'([^\'\n]+)\'', prod_block)
    cat_m = re.search(r'categoryPath:\s*\[([^\]\n]+)\]', prod_block)
    pdf_m = re.search(r'pdf:\s*\'([^\'\n]+)\'', prod_block)
    
    name = name_m.group(1) if name_m else "Unknown"
    cat = [c.strip().strip("'\"") for c in cat_m.group(1).split(',')] if cat_m else []
    pdf = pdf_m.group(1) if pdf_m else None
    
    has_specs_tables = 'specsTables:' in prod_block and not re.search(r'specsTables:\s*\[\s*\]', prod_block)
    has_characteristics = 'characteristics:' in prod_block and not re.search(r'characteristics:\s*\[\s*\]', prod_block)
    
    products.append({
        'id': m.group(1),
        'name': name,
        'categoryPath': cat,
        'pdf': pdf,
        'has_specs_tables': has_specs_tables,
        'has_characteristics': has_characteristics,
        'block': prod_block
    })

# Now let's traverse the filesystem under public/images/ProductosNuevos
# and locate all PDFs.
pdf_files = []
root_dir = 'public/images/ProductosNuevos'
for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.lower().endswith('.pdf'):
            full_path = os.path.join(root, file).replace('\\', '/')
            # Relativize to match the format in data.ts, e.g. /images/ProductosNuevos/...
            rel_path = '/' + full_path.replace('public/', '')
            pdf_files.append(rel_path)

print(f"Found {len(pdf_files)} PDF files in filesystem.")
print(f"Found {len(products)} products in data.ts.")

# Show products that have a PDF path but empty tables/characteristics
print("\n--- Products with PDF but EMPTY data in data.ts ---")
count_empty = 0
for p in products:
    if p['pdf'] and (not p['has_specs_tables'] or not p['has_characteristics']):
        print(f"ID: {p['id']}")
        print(f"  Name: {p['name']}")
        print(f"  Category: {p['categoryPath']}")
        print(f"  PDF: {p['pdf']}")
        print(f"  Has Tables: {p['has_specs_tables']}, Has Characteristics: {p['has_characteristics']}")
        count_empty += 1
if count_empty == 0:
    print("None!")

# Show PDFs in filesystem that are not assigned to any product in data.ts
print("\n--- PDFs in filesystem NOT referenced in data.ts ---")
assigned_pdfs = {p['pdf'] for p in products if p['pdf']}
unreferenced_pdfs = []
for pdf in pdf_files:
    if pdf not in assigned_pdfs:
        print(pdf)
        unreferenced_pdfs.append(pdf)
if not unreferenced_pdfs:
    print("None!")
