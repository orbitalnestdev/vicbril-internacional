import fitz
import json

pdf_path = 'public/images/ProductosNuevos/4- CABLES DE MEDIA TENSION/CABLES MEDIA TENSION ALUMINIO/13,2 KV/FICHA TECNICA MT 13.2KV ALUMINIO.pdf'
doc = fitz.open(pdf_path)
page = doc[0]
text = page.get_text("text")

with open('test_fitz.json', 'w', encoding='utf-8') as f:
    json.dump({'text': text}, f, ensure_ascii=False, indent=2)
