import re

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Add pdf for aerea-concentrico-antihurto
pdf1 = "    pdf: '/images/ProductosNuevos/2-LINEAS AEREAS/1-ENVAINADOS/3-CONCENTRICOS (ANTIHURTO)/1-CONCENTRICOS ALUMINIO/1-CONCENTRICO ALUMINIO MONOFASICO/FICHA TECNICA/ficha tecnica a modificar.pdf',"
content = re.sub(r'(id:\s*\'aerea-concentrico-antihurto\'.*?gallery:\s*\[\],\n)', r'\1' + pdf1 + '\n', content, flags=re.DOTALL)

# Add pdf for aerea-desnudo-aluminio
pdf2 = "    pdf: '/images/ProductosNuevos/2-LINEAS AEREAS/2-DESNUDOS/1-CABLE DESNUDO DE ALUMINIO/FICHA TECNICA/ficha tecnica a modificar.pdf',"
content = re.sub(r'(id:\s*\'aerea-desnudo-aluminio\'.*?gallery:\s*\[\],\n)', r'\1' + pdf2 + '\n', content, flags=re.DOTALL)

# Add pdf for aerea-desnudo-cobre
pdf3 = "    pdf: '/images/ProductosNuevos/2-LINEAS AEREAS/2-DESNUDOS/2-CABLE DESNUDO DE COBRE DURO/FICHA TECNICA/ficha tecnica a modificar.pdf',"
content = re.sub(r'(id:\s*\'aerea-desnudo-cobre\'.*?gallery:\s*\[\],\n)', r'\1' + pdf3 + '\n', content, flags=re.DOTALL)

# Add pdf for aerea-aluminio-acero
pdf4 = "    pdf: '/images/ProductosNuevos/2-LINEAS AEREAS/2-DESNUDOS/3-CABLE ALUMINIO-ACERO/FICHA TECNICA/ficha tecnica a modificar.pdf',"
content = re.sub(r'(id:\s*\'aerea-aluminio-acero\'.*?gallery:\s*\[\],\n)', r'\1' + pdf4 + '\n', content, flags=re.DOTALL)

with open('services/data.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print('Added missing PDFs')
