import os
import re

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract all PDFs listed in data.ts
pdfs_in_data = re.findall(r"pdf:\s*['\"`](.*?)['\"`]", content)

def normalize_path(path):
    # Convert to lowercase and replace backslashes, PRODUCTOS, and ProductosNuevos
    p = path.lower().replace('\\', '/')
    p = p.replace('/productos/', '/')
    p = p.replace('/productosnuevos/', '/')
    return p

normalized_data_pdfs = {normalize_path(p) for p in pdfs_in_data}

# Scan all PDFs under public/images/ProductosNuevos
root_dir = 'public/images/ProductosNuevos'
unreferenced = []
referenced_count = 0

for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.lower().endswith('.pdf'):
            full_path = os.path.join(root, file).replace('\\', '/')
            rel_path = '/' + full_path.replace('public/', '')
            norm = normalize_path(rel_path)
            
            if norm not in normalized_data_pdfs:
                unreferenced.append(rel_path)
            else:
                referenced_count += 1

print(f"Total PDFs in ProductosNuevos: {referenced_count + len(unreferenced)}")
print(f"Referenced (normalized): {referenced_count}")
print(f"Unreferenced (normalized): {len(unreferenced)}")
if unreferenced:
    print("\n--- Completely Unreferenced PDFs ---")
    for u in unreferenced:
        print(u)
else:
    print("All PDFs are referenced (with matching base paths) in data.ts!")
