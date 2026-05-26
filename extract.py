import pdfplumber
import json
import os

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
    data = {"file": pdf_path, "text": "", "tables": []}
    
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text = page.extract_text()
            if text:
                data["text"] += text + "\n"
            
            tables = page.extract_tables()
            for table in tables:
                data["tables"].append(table)
                
    results.append(data)

with open("pdf_data.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

print("Extraction complete. Check pdf_data.json.")
