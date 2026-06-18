import os
import re

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

new_ids = [
    'armados-flejes-acero', 'armados-doble-fleje', 'armados-hilos-acero', 'armados-trenza-acero',
    'armados-interlock-cobre', 'armados-trenzado-cobre', 'armados-cinta-hilos-cobre', 'armados-cinta-aluminio',
    'especiales-desarrollos-medida', 'especiales-ascensor', 'especiales-puente-grua', 'especiales-datos-telecom'
]

# Find product blocks
for pid in new_ids:
    print(f"=== CHECKING {pid} ===")
    
    # We find the block of this product
    m = re.search(r'id:\s*\'' + pid + r'\'', content)
    if not m:
        print(f"[!] PRODUCT {pid} NOT FOUND IN services/data.ts")
        continue
        
    start_pos = m.start()
    sub = content[start_pos:start_pos+10000]
    next_id = re.search(r'id:\s*\'', sub[10:])
    if next_id:
        block = sub[:10+next_id.start()]
    else:
        end_match = re.search(r'\]\s*;', sub)
        if end_match:
            block = sub[:end_match.start()]
        else:
            block = sub
            
    # Extract image, pdf, gallery
    image_match = re.search(r'image:\s*\'([^\']*)\'', block)
    pdf_match = re.search(r'pdf:\s*\'([^\']*)\'', block)
    gallery_match = re.search(r'gallery:\s*\[(.*?)\]', block, re.DOTALL)
    
    if image_match:
        img = image_match.group(1)
        if img:
            local = 'public' + img
            print(f"  Image: {img} | Exists: {os.path.exists(local)}")
        else:
            print("  Image: Empty")
    else:
        print("  Image: Not defined")
        
    if pdf_match:
        pdf = pdf_match.group(1)
        if pdf:
            local = 'public' + pdf
            print(f"  PDF: {pdf} | Exists: {os.path.exists(local)}")
        else:
            print("  PDF: Empty")
            
    if gallery_match:
        g_str = gallery_match.group(1).strip()
        if g_str:
            g_imgs = [g.strip().strip("'").strip('"') for g in g_str.split(',') if g.strip()]
            for g_img in g_imgs:
                local = 'public' + g_img
                print(f"  Gallery Image: {g_img} | Exists: {os.path.exists(local)}")
