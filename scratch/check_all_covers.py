import re
import os
import unicodedata

DATA_TS = 'services/data.ts'

def clean(s):
    s = unicodedata.normalize('NFD', s)
    s = "".join([c for c in s if not unicodedata.combining(c)])
    s = s.lower()
    s = re.sub(r'^\d+[-_ ]+', '', s)
    s = re.sub(r'\b(?:de|a)\b', '', s)
    s = re.sub(r'[^a-z0-9]', '', s)
    return s

def case_sensitive_exists(path):
    parts = path.replace('\\', '/').split('/')
    current = '.'
    for part in parts:
        if not part:
            continue
        if not os.path.exists(current):
            return False
        if os.path.isdir(current):
            contents = os.listdir(current)
            if part in contents:
                current = os.path.join(current, part)
            else:
                return False
        else:
            return False
    return True

def parse_data_ts():
    with open(DATA_TS, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Parse categories
    categories = []
    cat_section = re.search(r'export const categories: Category\[\] = \[(.*?)\];', content, re.DOTALL)
    if cat_section:
        for cat_match in re.finditer(r'\{\s*(.*?)\s*\}', cat_section.group(1), re.DOTALL):
            block = cat_match.group(1)
            name_match = re.search(r"name:\s*'([^']+)'", block)
            image_match = re.search(r"image:\s*'([^']+)'", block)
            if name_match and image_match:
                categories.append({
                    'name': name_match.group(1),
                    'image': image_match.group(1)
                })
                
    # 2. Parse products
    products = []
    # Find all products blocks
    for prod_match in re.finditer(r'\{\s*id:\s*\'([^\'\s]+.*?)\',', content):
        start = prod_match.start()
        # Find next id: or the end of products array
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
            
    return categories, products

def main():
    categories, products = parse_data_ts()
    print(f"Loaded {len(categories)} categories and {len(products)} products from {DATA_TS}.\n")
    
    # 1. Check categories defined in categories array
    print("=== CHECKING ROOT CATEGORY COVERS ===")
    all_root_exist = True
    for cat in categories:
        local_path = 'public' + cat['image']
        exists = case_sensitive_exists(local_path)
        print(f"Category: {cat['name']} | Cover: {cat['image']} | Exists: {exists}")
        if not exists:
            all_root_exist = False
            
    # 2. Check all dynamically resolved subcategory covers
    print("\n=== CHECKING SUBCATEGORY COVERS ===")
    
    # Let's find all possible subcategory paths that have > 1 product
    # A subcategory path is activePath + nextSegment, so we check every level
    all_paths = set()
    for p in products:
        for i in range(1, len(p['categoryPath'])):
            path_tuple = tuple(p['categoryPath'][:i+1])
            all_paths.add(path_tuple)
            
    # For each subcategory path, count products in it
    # and if > 1, resolve cover and check it.
    all_sub_exist = True
    for path in sorted(all_paths, key=lambda x: (len(x), x)):
        # Products in this subcategory (matches path prefix)
        prods_in_path = [p for p in products if len(p['categoryPath']) >= len(path) and p['categoryPath'][:len(path)] == list(path)]
        
        # Check if it has > 1 product
        if len(prods_in_path) <= 1:
            # Bypassed by Products.tsx (not shown as folder bubble)
            continue
            
        # sub is the last segment of the path
        sub = path[-1]
        
        # Find reference image
        first_with_img = next((p for p in prods_in_path if p['image'] and 'vicbril-hero-1.jpg' not in p['image']), None)
        ref_img = first_with_img['image'] if first_with_img else prods_in_path[0]['image']
        
        parts = ref_img.split('/')
        parent_cover_image = None
        
        if parts:
            clean_sub = clean(sub)
            match_index = -1
            
            # Left-to-right search (forward)
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
                elif '1-CABLE UNIPOLAR' in ref_img:
                    parent_cover_image = f"{parent_path}/PORTADA.png"
                elif '2-CABLE BIPOLAR' in ref_img:
                    parent_cover_image = f"{parent_path}/portada.jpeg"
                elif '3-CABLE TIPO TALLER' in ref_img:
                    parent_cover_image = f"{parent_path}/PORTADA.jpeg"
                elif '1-ENVAINADOS' in ref_img:
                    parent_cover_image = f"{parent_path}/PORTADA (ELIMINAR SIMBOLO GEMINI).jpeg"
                elif '2-DESNUDOS' in ref_img:
                    parent_cover_image = f"{parent_path}/PORTADA (ELIMINAR LOGO GEMINI).jpeg"
                else:
                    last_part = parts[-1]
                    if last_part.lower().startswith('portada'):
                        parent_cover_image = f"{parent_path}/portada.jpeg"
                    else:
                        parent_cover_image = f"{parent_path}/PORTADA.jpeg"
                        
        if parent_cover_image:
            local_path = 'public' + parent_cover_image
            exists = case_sensitive_exists(local_path)
            print(f"Path: {' -> '.join(path)} | Cover: {parent_cover_image} | Exists: {exists}")
            if not exists:
                all_sub_exist = False
                # Suggest potential matches
                dir_to_check = os.path.dirname(local_path)
                if os.path.exists(dir_to_check):
                    print(f"  [!] Files found in {dir_to_check}: {os.listdir(dir_to_check)}")
                else:
                    print(f"  [!] Directory {dir_to_check} does not exist.")
        else:
            print(f"Path: {' -> '.join(path)} | Could not resolve cover image path!")
            all_sub_exist = False

    if all_root_exist and all_sub_exist:
        print("\nAll cover images are successfully verified and exist on disk!")
    else:
        print("\nSome cover images are missing or failed validation!")

if __name__ == '__main__':
    main()
