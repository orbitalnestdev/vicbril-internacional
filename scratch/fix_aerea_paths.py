with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace all occurrences
new_content = content.replace('/images/ProductosNuevos/2-LINEAS AEREAS', '/images/PRODUCTOS/2-LINEAS AEREAS')

with open('services/data.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully replaced all 23 occurrences of /images/ProductosNuevos/2-LINEAS AEREAS with /images/PRODUCTOS/2-LINEAS AEREAS in services/data.ts")
