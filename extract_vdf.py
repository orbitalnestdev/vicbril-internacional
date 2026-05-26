import fitz
import re
import json

pdf_path = 'public/images/ProductosNuevos/3-CABLES DE POTENCIA/3-PARA VARIADOR DE FRECUENCIA/FICHA TECNICA VDF.pdf'
doc = fitz.open(pdf_path)
rows = []
for page in doc:
    blocks = page.get_text('blocks')
    blocks.sort(key=lambda b: (round(b[1]/5)*5, b[0]))
    for b in blocks:
        text = b[4].strip()
        if text.startswith('3x'):
            pts = text.split('\n')
            if len(pts) >= 4:
                rows.append([p.strip() for p in pts])

table = {
    "title": "Dimensiones y Pesos",
    "headers": ["Sección (N° x mm²)", "Código", "Diam. bajo armadura (mm)", "Diámetro exterior (mm)", "Peso (kg/km)"],
    "rows": rows
}

table_str = json.dumps([table], ensure_ascii=False, indent=2)
table_str = re.sub(r'\"(title|headers|rows)\":', r'\1:', table_str)
table_str = "specsTables: " + table_str

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r"(id:\s*'3-para-variador-de-frecuencia'.*?)specsTables:\s*\[\s*\],", content, re.DOTALL)
if match:
    new_str = match.group(1) + table_str + ","
    content = content.replace(match.group(0), new_str)
    print("Updated variador")
    with open('services/data.ts', 'w', encoding='utf-8') as f:
        f.write(content)
