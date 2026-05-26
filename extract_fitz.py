import fitz
import json
import os
import re

pdf_files = [
    "public\\images\\ProductosNuevos\\3-CABLES DE POTENCIA\\1-SUBTERRANEOS\\SUBTERRANEO ALUMINIO\\SUBTERRANEO LSOH\\FICHA TECNICA\\ficha tecnica subte aluminio lsoh.pdf",
    "public\\images\\ProductosNuevos\\3-CABLES DE POTENCIA\\1-SUBTERRANEOS\\SUBTERRANEO ALUMINIO\\SUBTERRANEO PVC\\FICHA TECNICA\\ficha tecnica subte aluminio pvc.pdf",
    "public\\images\\ProductosNuevos\\3-CABLES DE POTENCIA\\1-SUBTERRANEOS\\SUBTERRANEO ALUMINIO\\SUBTERRANEO XLPE\\FICHA TECNICA\\ficha tecnica subte aluminio xlpe.pdf"
]

results = []

for pdf_path in pdf_files:
    if not os.path.exists(pdf_path):
        print(f"File not found: {pdf_path}")
        continue
        
    print(f"Processing {pdf_path}")
    doc = fitz.open(pdf_path)
    
    product = {
        "file": pdf_path,
        "text": "",
        "tables": []
    }
    
    for page in doc:
        # Extract blocks, sort by Y then X
        blocks = page.get_text("blocks")
        blocks.sort(key=lambda b: (b[1], b[0]))
        
        for b in blocks:
            text = b[4].strip()
            if text:
                product["text"] += text + "\n\n"
        
        # Try extracting tables
        tabs = page.find_tables()
        for tab in tabs:
            product["tables"].append(tab.extract())
            
    results.append(product)

with open("pdf_data_pymupdf.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

print("Extraction complete. Check pdf_data_pymupdf.json.")
