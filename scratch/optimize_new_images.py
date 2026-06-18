import os
from PIL import Image

dirs_to_optimize = [
    r"public/images/ProductosNuevos/8-CABLES ESPECIALES",
    r"public/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS"
]

total_saved = 0
processed_count = 0

print("Optimizing newly added images in categories 8 and 9...")

for image_dir in dirs_to_optimize:
    for root, dirs, files in os.walk(image_dir):
        for file in files:
            ext = file.lower()
            if ext.endswith(('.png', '.jpg', '.jpeg')):
                path = os.path.join(root, file)
                orig_size = os.path.getsize(path)
                
                try:
                    img = Image.open(path)
                    w, h = img.size
                    format_name = img.format
                    
                    needs_resize = False
                    needs_save = False
                    
                    # For cover images or photographs, resize if width > 1200
                    if w > 1200 or h > 1200:
                        needs_resize = True
                        max_dim = 1200
                        if w > h:
                            new_w = max_dim
                            new_h = int(h * (max_dim / w))
                        else:
                            new_h = max_dim
                            new_w = int(w * (max_dim / h))
                        w, h = new_w, new_h
                        needs_save = True
                    
                    # Compress if file size > 80KB
                    elif orig_size > 80 * 1024:
                        needs_save = True
                    
                    if needs_save:
                        if needs_resize:
                            print(f"Resizing {file}: {img.size[0]}x{img.size[1]} -> {w}x{h}")
                            img = img.resize((w, h), Image.Resampling.LANCZOS)
                        
                        img_format = format_name
                        
                        # Save in-place
                        if img_format == 'JPEG' or ext.endswith(('.jpg', '.jpeg')):
                            if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                                alpha = img.convert('RGBA')
                                bg = Image.new('RGBA', alpha.size, (255, 255, 255))
                                img = Image.alpha_composite(bg, alpha).convert('RGB')
                            
                            img.save(path, 'JPEG', quality=80, optimize=True)
                        elif img_format == 'PNG' or ext.endswith('.png'):
                            img.save(path, 'PNG', optimize=True)
                        else:
                            img.close()
                            continue
                        
                        new_size = os.path.getsize(path)
                        saved = orig_size - new_size
                        if saved > 0:
                            total_saved += saved
                            processed_count += 1
                            print(f"Optimized {file}: {orig_size/1024:.1f} KB -> {new_size/1024:.1f} KB (Saved {saved/1024:.1f} KB)")
                    
                    img.close()
                except Exception as e:
                    print(f"Error optimizing {file}: {e}")

print(f"\nOptimization complete. Total files: {processed_count}, Total space saved: {total_saved/1024/1024:.2f} MB")
