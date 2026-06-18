import re
import os

def check_images():
    with open('services/data.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    # Find products array
    products_match = re.search(r'export const products:\s*Product\[\]\s*=\s*\[(.*?)\];\s*export const brands', content, re.DOTALL)
    if not products_match:
        products_match = re.search(r'export const products:\s*Product\[\]\s*=\s*\[(.*)\]', content, re.DOTALL)
        
    if not products_match:
        print("Error: Could not find products array in services/data.ts")
        return

    products_content = products_match.group(1)

    product_blocks = []
    id_positions = [m.start() for m in re.finditer(r'id:\s*\'([^\']+)\'', products_content)]
    id_positions.append(len(products_content))

    for i in range(len(id_positions) - 1):
        block = products_content[id_positions[i]:id_positions[i+1]]
        product_blocks.append(block)

    missing_images = []
    all_products = []

    for block in product_blocks:
        id_match = re.search(r'id:\s*\'([^\'\s]+)\'', block)
        name_match = re.search(r'name:\s*\'([^\'\n]+)\'', block)
        if not name_match:
            name_match = re.search(r'name:\s*"([^\"]+)"', block)
            
        image_match = re.search(r'image:\s*\'([^\']+)\'', block)
        if not image_match:
            image_match = re.search(r'image:\s*"([^\"]+)"', block)

        category_path_match = re.search(r'categoryPath:\s*\[(.*?)\]', block)

        if id_match and name_match:
            prod_id = id_match.group(1)
            prod_name = name_match.group(1).strip()
            category_path = category_path_match.group(1) if category_path_match else ""
            
            # Check if this product is under Media Tensión
            # The category path in data.ts might have encoded characters or be "Cables de Media Tensión" / "Cables de Media Tensión"
            is_media_tension = "Media Tensi" in category_path or "media-tension" in prod_id or "media-tension" in category_path

            if image_match:
                img_path = image_match.group(1)
                clean_path = img_path.lstrip('/')
                full_path = os.path.join('public', clean_path)

                exists = os.path.exists(full_path)
                
                prod_info = {
                    'id': prod_id,
                    'name': prod_name,
                    'image': img_path,
                    'exists': exists,
                    'is_media_tension': is_media_tension
                }
                all_products.append(prod_info)
                
                if is_media_tension and not exists:
                    missing_images.append(prod_info)
            else:
                prod_info = {
                    'id': prod_id,
                    'name': prod_name,
                    'image': None,
                    'exists': False,
                    'is_media_tension': is_media_tension
                }
                all_products.append(prod_info)
                if is_media_tension:
                    missing_images.append(prod_info)

    # Print results for Media Tensión products
    media_tension_prods = [p for p in all_products if p['is_media_tension']]
    print(f"Total Media Tensión products found: {len(media_tension_prods)}")
    
    print("\n--- MEDIA TENSIÓN PRODUCTS IMAGES STATUS ---")
    for idx, p in enumerate(media_tension_prods, 1):
        print(f"{idx}. ID: {p['id']}")
        print(f"   Name: {p['name']}")
        print(f"   Image path: {p['image']}")
        print(f"   File exists on disk: {p['exists']}")
        print()

    print(f"Missing Media Tensión images: {len(missing_images)}")
    if missing_images:
        print("\n--- MISSING MEDIA TENSIÓN IMAGES DETAILS ---")
        for p in missing_images:
            print(f"Product ID: {p['id']} ({p['name']})")
            print(f"Declared path: {p['image']}")
            # Show parent dir contents if it exists
            if p['image']:
                parent_dir = os.path.dirname(os.path.join('public', p['image'].lstrip('/')))
                if os.path.exists(parent_dir):
                    print(f"Parent directory exists: {parent_dir}")
                    print(f"Files in directory: {os.listdir(parent_dir)}")
                else:
                    print(f"Parent directory does NOT exist: {parent_dir}")
            print()

if __name__ == '__main__':
    check_images()
