import pdfplumber
import json

pdf_path = 'public/images/ProductosNuevos/4- CABLES DE MEDIA TENSION/CABLES MEDIA TENSION ALUMINIO/13,2 KV/FICHA TECNICA MT 13.2KV ALUMINIO.pdf'

result = {}
with pdfplumber.open(pdf_path) as pdf:
    page = pdf.pages[0]
    tables = page.extract_tables()
    text = page.extract_text()
    
    result['text'] = text[:500]
    result['tables'] = tables

with open('test_extract.json', 'w', encoding='utf-8') as f:
    json.dump(result, f, ensure_ascii=False, indent=2)
