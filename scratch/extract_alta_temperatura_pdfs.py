import os
import fitz
import json

folder = 'public/images/ProductosNuevos/6-CABLES ALTA TEMPERATURA'
pdf_files = []
for root, dirs, files in os.walk(folder):
    for file in files:
        if file.lower().endswith('.pdf'):
            pdf_files.append(os.path.join(root, file))

results = []

for pdf_path in pdf_files:
    if not os.path.exists(pdf_path):
        print(f"File not found: {pdf_path}")
        continue
        
    print(f"Processing {pdf_path}")
    try:
        doc = fitz.open(pdf_path)
        
        product = {
            "file": pdf_path.replace('\\', '/'),
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
    except Exception as e:
        print(f"Error processing {pdf_path}: {e}")

with open("scratch/alta_temp_extracted.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

print("Extraction complete. Check scratch/alta_temp_extracted.json.")
