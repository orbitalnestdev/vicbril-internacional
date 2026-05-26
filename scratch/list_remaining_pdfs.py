import os

folders = [
    'public/images/ProductosNuevos/6-CABLES ALTA TEMPERATURA',
    'public/images/ProductosNuevos/7-CABLES ARMADOS',
    'public/images/ProductosNuevos/8-RESTO DE CABLES ESPECIALES',
    'public/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS'
]

print("PDFs in remaining folders:")
for folder in folders:
    if not os.path.exists(folder):
        print(f"Folder not found: {folder}")
        continue
    print(f"\n--- {os.path.basename(folder)} ---")
    for root, dirs, files in os.walk(folder):
        for file in files:
            if file.lower().endswith('.pdf'):
                full_path = os.path.join(root, file).replace('\\', '/')
                print(f"  {full_path}")
