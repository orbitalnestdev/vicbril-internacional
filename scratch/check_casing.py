import os
import re

# Parse data.ts to get categories and products
with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Parse products
products = []
for block in re.finditer(r'\{\s*id:\s*\'([^\']+)\',', content):
    start = block.start()
    next_id = content.find('id:', start + 10)
    end = next_id if next_id != -1 else len(content)
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

def clean(s):
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

def verify_case_sensitive_path(path):
    # Check if a path exists case-sensitively on Windows
    parts = path.replace('\\', '/').split('/')
    current = '.'
    for part in parts:
        if not part:
            continue
        if part == 'images':
            # Translate virtual web path to public/images
            part = 'public/images'
            if not os.path.exists(part):
                return False
            current = 'public/images'
            continue
            
        if current == '.':
            # Handle root/drive prefix or absolute path elements
            if os.path.exists(part):
                current = part
                continue
            else:
                return False
                
        # List contents of current directory and check for exact match
        if not os.path.isdir(current):
            return False
        contents = os.listdir(current)
        if part in contents:
            current = os.path.join(current, part)
        else:
            # Case mismatch! Let's find if it exists with different case
            lower_contents = {item.lower(): item for item in contents}
            if part.lower() in lower_contents:
                actual_name = lower_contents[part.lower()]
                print(f"  [CASE MISMATCH] Expected '{part}' but found '{actual_name}' in '{current}'")
                return False
            else:
                print(f"  [NOT FOUND] '{part}' not found in '{current}'")
                return False
    return True

# Group products by all subcategory paths at all levels to test all folders
# For example, if categoryPath is ['A', 'B', 'C'], we have folders:
# - ['A'] (root category, which is checked via categories list)
# - ['A', 'B'] (first level subcategory folder)
# - ['A', 'B', 'C'] (etc)

# Let's collect all paths
paths = set()
for p in products:
    cat_path = tuple(p['categoryPath'])
    for i in range(1, len(cat_path)):
        paths.add(cat_path[:i+1])

print(f"Checking {len(paths)} folder paths...")
for path_tuple in sorted(paths):
    # Let's run the Products.tsx logic for this path
    # currentDepth is len(path_tuple) - 1
    # sub is path_tuple[-1]
    sub = path_tuple[-1]
    currentDepth = len(path_tuple) - 1
    parent_path_filter = list(path_tuple[:-1])
    
    # Filter products that match parent path
    filtered = [p for p in products if len(p['categoryPath']) > currentDepth and p['categoryPath'][:currentDepth] == parent_path_filter]
    
    # Products in this sub folder
    products_in_sub = [p for p in filtered if p['categoryPath'][currentDepth] == sub]
    if not products_in_sub:
        continue
        
    first_with_img = next((p for p in products_in_sub if p['image'] and 'vicbril-hero-1.jpg' not in p['image']), None)
    reference_image = first_with_img['image'] if first_with_img else products_in_sub[0]['image']
    
    parent_cover_image = None
    if reference_image:
        parts = reference_image.split('/')
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
                
                if parent_path.endswith('3-CONCENTRICOS (ANTIHURTO)'):
                    parent_cover_image = f"{parent_path}/PORTADA.jpeg"
                elif reference_image.find('1-CABLE UNIPOLAR') != -1:
                    parent_cover_image = f"{parent_path}/PORTADA.png"
                elif reference_image.find('2-CABLE BIPOLAR') != -1:
                    parent_cover_image = f"{parent_path}/portada.jpeg"
                elif reference_image.find('3-CABLE TIPO TALLER') != -1:
                    parent_cover_image = f"{parent_path}/PORTADA.jpeg"
                elif reference_image.find('1-ENVAINADOS') != -1:
                    parent_cover_image = f"{parent_path}/PORTADA (ELIMINAR SIMBOLO GEMINI).jpeg"
                elif reference_image.find('2-DESNUDOS') != -1:
                    parent_cover_image = f"{parent_path}/PORTADA (ELIMINAR LOGO GEMINI).jpeg"
                else:
                    last_part = parts[-1]
                    if last_part.startswith('portada'):
                        parent_cover_image = f"{parent_path}/portada.jpeg"
                    else:
                        parent_cover_image = f"{parent_path}/PORTADA.jpeg"
            else:
                # Default fallback
                parent_cover_image = reference_image
        else:
            parent_cover_image = reference_image
    else:
        parent_cover_image = '/images/vicbril-hero-1.jpg'
        
    print(f"\nFolder Path: {path_tuple}")
    print(f"Calculated Image: {parent_cover_image}")
    ok = verify_case_sensitive_path(parent_cover_image)
    print(f"Status: {'OK' if ok else 'FAIL'}")
