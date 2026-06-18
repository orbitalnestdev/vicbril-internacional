import os
import re
import json

DATA_TS_PATH = "services/data.ts"

def parse_categories(content):
    # Find the categories block: export const categories: Category[] = [ ... ];
    categories_match = re.search(r'export const categories:\s*Category\[\]\s*=\s*\[(.*?)\];\s*export const products', content, re.DOTALL)
    if not categories_match:
        # fallback
        categories_match = re.search(r'export const categories:\s*Category\[\]\s*=\s*\[(.*?)\];', content, re.DOTALL)
        
    if not categories_match:
        print("Could not locate categories array.")
        return []
        
    categories_block = categories_match.group(1)
    
    # Split into individual category blocks
    # Categories are like: { id: '...', name: '...', banner: '...' }
    cat_matches = re.findall(r'\{\s*(.*?)\s*\}', categories_block, re.DOTALL)
    
    categories = []
    for block in cat_matches:
        id_m = re.search(r'id:\s*\'([^\']+)\'', block)
        name_m = re.search(r'name:\s*\'([^\']+)\'', block)
        img_m = re.search(r'image:\s*\'([^\']+)\'', block)
        banner_m = re.search(r'banner:\s*\'([^\']+)\'', block)
        
        if id_m and name_m:
            categories.append({
                'id': id_m.group(1),
                'name': name_m.group(1),
                'image': img_m.group(1) if img_m else None,
                'banner': banner_m.group(1) if banner_m else None
            })
    return categories

def parse_products(content):
    # Find products array
    products_match = re.search(r'export const products:\s*Product\[\]\s*=\s*\[(.*?)\];\s*export const brands', content, re.DOTALL)
    if not products_match:
        products_match = re.search(r'export const products:\s*Product\[\]\s*=\s*\[(.*)\]', content, re.DOTALL)
        
    if not products_match:
        print("Could not locate products array.")
        return []
        
    products_content = products_match.group(1)
    
    # Split by product ID declarations to separate product blocks
    id_positions = [m.start() for m in re.finditer(r'id:\s*\'([^\']+)\'', products_content)]
    id_positions.append(len(products_content))
    
    product_blocks = []
    for i in range(len(id_positions) - 1):
        block = products_content[id_positions[i]:id_positions[i+1]]
        product_blocks.append(block)
        
    products = []
    for block in product_blocks:
        id_m = re.search(r'id:\s*\'([^\'\s]+)\'', block)
        name_m = re.search(r'name:\s*\'([^\'\n]+)\'', block)
        if not name_m:
            name_m = re.search(r'name:\s*"([^\"]+)"', block)
            
        image_m = re.search(r'image:\s*\'([^\']+)\'', block)
        if not image_m:
            image_m = re.search(r'image:\s*"([^\"]+)"', block)
            
        tech_m = re.search(r'technicalTable:\s*\'([^\']+)\'', block)
        if not tech_m:
            tech_m = re.search(r'technicalTable:\s*"([^\"]+)"', block)
            
        gallery_m = re.search(r'gallery:\s*\[(.*?)\]', block, re.DOTALL)
        
        if id_m and name_m:
            # Parse gallery list
            gallery_paths = []
            if gallery_m:
                gallery_content = gallery_m.group(1)
                # Find all single or double quoted strings
                gallery_paths = re.findall(r'\'([^\'\s]+)\'|"([^\"]+)"', gallery_content)
                # re.findall returns tuples because of group matches, clean them up
                gallery_paths = [path[0] or path[1] for path in gallery_paths if path[0] or path[1]]
                
            products.append({
                'id': id_m.group(1),
                'name': name_m.group(1).strip(),
                'image': image_m.group(1) if image_m else None,
                'technicalTable': tech_m.group(1) if tech_m else None,
                'gallery': gallery_paths
            })
            
    return products

def verify_file_path(path):
    if not path:
        return False, "No path declared"
    # Remove leading slash
    clean_path = path.lstrip('/')
    
    # We resolve it inside public/
    full_path = os.path.join('public', clean_path)
    
    # Also resolve case-sensitivity on Windows (check exact file spelling in parent directory)
    if os.path.exists(full_path):
        return True, full_path
    
    # Fallback to check if path contains public/
    if clean_path.startswith('public/'):
        clean_path_no_pub = clean_path.replace('public/', '', 1)
        full_path_no_pub = os.path.join('public', clean_path_no_pub)
        if os.path.exists(full_path_no_pub):
            return True, full_path_no_pub
            
    return False, full_path

def main():
    with open(DATA_TS_PATH, "r", encoding="utf-8") as f:
        content = f.read()
        
    categories = parse_categories(content)
    products = parse_products(content)
    
    print(f"Loaded {len(categories)} categories and {len(products)} products from {DATA_TS_PATH}.\n")
    
    # Verify categories
    missing_cat_images = []
    for cat in categories:
        if cat['image']:
            exists, resolved = verify_file_path(cat['image'])
            if not exists:
                missing_cat_images.append((cat['name'], 'image', cat['image'], resolved))
        if cat['banner']:
            exists, resolved = verify_file_path(cat['banner'])
            if not exists:
                missing_cat_images.append((cat['name'], 'banner', cat['banner'], resolved))
                
    # Verify products
    missing_prod_images = []
    for prod in products:
        # Check main image
        if prod['image']:
            exists, resolved = verify_file_path(prod['image'])
            if not exists:
                missing_prod_images.append((prod['name'], prod['id'], 'image', prod['image'], resolved))
        else:
            missing_prod_images.append((prod['name'], prod['id'], 'image', 'MISSING_IN_DB', 'N/A'))
            
        # Check technical table
        if prod['technicalTable']:
            exists, resolved = verify_file_path(prod['technicalTable'])
            if not exists:
                missing_prod_images.append((prod['name'], prod['id'], 'technicalTable', prod['technicalTable'], resolved))
                
        # Check gallery images
        for g_path in prod['gallery']:
            exists, resolved = verify_file_path(g_path)
            if not exists:
                missing_prod_images.append((prod['name'], prod['id'], 'gallery_image', g_path, resolved))
                
    # Output results
    print("=== CATEGORIES VERIFICATION RESULTS ===")
    if missing_cat_images:
        print(f"Found {len(missing_cat_images)} missing category images/banners:")
        for name, field, declared, resolved in missing_cat_images:
            print(f"- Category '{name}' -> missing '{field}': '{declared}' (Resolved path: {resolved})")
    else:
        print("[OK] All category images and banners are present on disk.")
        
    print("\n=== PRODUCTS VERIFICATION RESULTS ===")
    missing_images_only = [item for item in missing_prod_images if item[2] == 'image']
    missing_tables_only = [item for item in missing_prod_images if item[2] == 'technicalTable']
    missing_gallery_only = [item for item in missing_prod_images if item[2] == 'gallery_image']
    
    print(f"Total products missing main image: {len(missing_images_only)}")
    print(f"Total products missing technical table image: {len(missing_tables_only)}")
    print(f"Total products missing gallery image: {len(missing_gallery_only)}")
    
    if missing_prod_images:
        print(f"\nDetails of {len(missing_prod_images)} missing product resources:")
        for name, prod_id, field, declared, resolved in missing_prod_images:
            print(f"- Product '{name}' ({prod_id}) -> missing '{field}': '{declared}' (Resolved path: {resolved})")
    else:
        print("[OK] All product images, technical tables, and gallery items are present on disk.")

if __name__ == '__main__':
    main()
