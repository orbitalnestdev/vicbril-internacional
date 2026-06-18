import os
import re
import json

# Parse data.ts to get categories and products
with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# We can parse the categories array and products array using simple regex/eval or json
# Since data.ts is TypeScript, let's parse products via regex.
# We want to find all unique category paths under 'Cables Industriales'
# and see what reference images they have.

# Let's extract all products' categoryPath and image.
# An entry looks like:
# {
#   id: '...',
#   name: '...',
#   categoryPath: ['Cables Industriales', 'Instrumentación Electrónica', ...],
#   ...
#   image: '...',
# }
# Simple regex to find blocks of products
product_blocks = re.findall(r'\{\s*id:\s*\'([^\']+)\'.*?\}', content, re.DOTALL)
products = []

for block in re.finditer(r'\{\s*id:\s*\'([^\']+)\',', content):
    start = block.start()
    # Find next object by scanning brackets or finding next id:
    next_id = content.find('id:', start + 10)
    if next_id == -1:
        end = len(content)
    else:
        end = next_id
    chunk = content[start:end]
    
    cat_match = re.search(r'categoryPath:\s*\[(.*?)\]', chunk, re.DOTALL)
    img_match = re.search(r'image:\s*\'([^\']+)\'', chunk)
    name_match = re.search(r'name:\s*\'([^\'\s]+.*?)\'', chunk)
    
    if cat_match and img_match and name_match:
        cats = [c.strip().strip("'").strip('"') for c in cat_match.group(1).split(',')]
        img = img_match.group(1)
        products.append({
            'name': name_match.group(1),
            'categoryPath': cats,
            'image': img
        })


print(f"Loaded {len(products)} products.")

# Let's filter products where categoryPath[0] == 'Cables Industriales'
industrial_products = [p for p in products if p['categoryPath'] and p['categoryPath'][0] == 'Cables Industriales']
print(f"Found {len(industrial_products)} industrial products.")

# Let's group by categoryPath[1] (which is the subcategory)
subcategories = set()
for p in industrial_products:
    if len(p['categoryPath']) > 1:
        subcategories.add(p['categoryPath'][1])

print(f"Subcategories: {subcategories}")

def clean(s):
    # Normalize spanish characters
    replacements = {
        'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
        'Á': 'a', 'É': 'e', 'Í': 'i', 'Ó': 'o', 'Ú': 'u'
    }
    s = s.lower()
    for k, v in replacements.items():
        s = s.replace(k, v)
    s = re.sub(r'^\d+[-_]', '', s)
    s = re.sub(r'[^a-z0-9]', '', s)
    return s

for sub in subcategories:
    products_in_sub = [p for p in industrial_products if p['categoryPath'][1] == sub]
    first_with_img = next((p for p in products_in_sub if p['image'] and 'vicbril-hero-1.jpg' not in p['image']), None)
    ref_img = first_with_img['image'] if first_with_img else products_in_sub[0]['image']
    
    print(f"\nSubcategory: {sub}")
    print(f"Reference image: {ref_img}")
    
    parts = ref_img.split('/')
    if len(parts) >= 3:
        clean_sub = clean(sub)
        match_index = -1
        for idx in range(len(parts) - 1):
            part = parts[idx]
            if not part: continue
            clean_part = clean(part)
            if not clean_part: continue
            if clean_sub in clean_part or clean_part in clean_sub:
                match_index = idx
                break
        
        if match_index != -1:
            parent_path = '/'.join(parts[:match_index + 1])
            # Determine PORTADA case
            last_part = parts[-1]
            if last_part.startswith('portada'):
                parent_cover_image = f"{parent_path}/portada.jpeg"
            else:
                parent_cover_image = f"{parent_path}/PORTADA.jpeg"
                
            local_path = "public" + parent_cover_image
            exists = os.path.exists(local_path)
            print(f"Resolved cover path: {parent_cover_image}")
            print(f"Local path: {local_path}")
            print(f"Exists: {exists}")
            if not exists:
                # Let's see what is actually in that directory
                dir_to_check = os.path.dirname(local_path)
                print(f"Checking directory: {dir_to_check}")
                if os.path.exists(dir_to_check):
                    print("Files in dir:", os.listdir(dir_to_check))
                else:
                    print("Directory does not exist!")
        else:
            print("Match index not found!")
