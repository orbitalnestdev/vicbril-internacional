import json
import re
import glob

files = glob.glob("pdf_markdowns/*.md")

products = []

for idx, file in enumerate(files):
    with open(file, "r", encoding="utf-8") as f:
        text = f.read()
    
    # Very basic parsing based on markdown lines
    # We just want to grab any markdown table we can find
    
    product = {
        "id": f"product-from-pdf-{idx}",
        "name": "",
        "detailedDescription": "",
        "specsTables": []
    }
    
    # Try to find tables
    # Markdown tables look like:
    # | header | header |
    # |---|---|
    # | val | val |
    
    table_blocks = re.findall(r'(\|(?:[^\n]*\|)\n\|(?:[-|]*)\|\n(?:\|(?:[^\n]*\|)\n)+)', text)
    
    for tb in table_blocks:
        lines = tb.strip().split('\n')
        headers = [c.strip().replace('**', '') for c in lines[0].split('|')[1:-1]]
        
        rows = []
        for line in lines[2:]:
            cols = [c.strip().replace('**', '') for c in line.split('|')[1:-1]]
            rows.append(cols)
            
        product["specsTables"].append({
            "title": "Datos Técnicos",
            "headers": headers,
            "rows": rows
        })
        
    products.append(product)

with open("auto_parsed.json", "w", encoding="utf-8") as f:
    json.dump(products, f, indent=2, ensure_ascii=False)
