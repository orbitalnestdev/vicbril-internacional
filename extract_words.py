import pdfplumber
import json
import os
from collections import defaultdict

pdf_files = [
    "public\\images\\ProductosNuevos\\3-CABLES DE POTENCIA\\1-SUBTERRANEOS\\SUBTERRANEO ALUMINIO\\SUBTERRANEO LSOH\\FICHA TECNICA\\ficha tecnica subte aluminio lsoh.pdf",
    "public\\images\\ProductosNuevos\\3-CABLES DE POTENCIA\\1-SUBTERRANEOS\\SUBTERRANEO ALUMINIO\\SUBTERRANEO PVC\\FICHA TECNICA\\ficha tecnica subte aluminio pvc.pdf",
    "public\\images\\ProductosNuevos\\3-CABLES DE POTENCIA\\1-SUBTERRANEOS\\SUBTERRANEO ALUMINIO\\SUBTERRANEO XLPE\\FICHA TECNICA\\ficha tecnica subte aluminio xlpe.pdf"
]

results = []

def extract_tables_from_words(words):
    # Group words into lines based on vertical coordinate (top)
    # We round 'top' to group words roughly on the same line
    lines_dict = defaultdict(list)
    for w in words:
        lines_dict[round(w['top'], 1)].append(w)
        
    lines = []
    for top in sorted(lines_dict.keys()):
        # Sort words in the line by horizontal coordinate (x0)
        sorted_words = sorted(lines_dict[top], key=lambda x: x['x0'])
        lines.append(sorted_words)
        
    # Join words into a single string line with large spaces separating columns
    text_lines = []
    for line in lines:
        if not line:
            continue
        # simple heuristic to add tabs between distant words
        s = ""
        last_x1 = line[0]['x0']
        for w in line:
            if w['x0'] - last_x1 > 10:
                s += " \t "
            else:
                if s:
                    s += " "
            s += w['text']
            last_x1 = w['x1']
        text_lines.append(s)
        
    return "\n".join(text_lines)

for pdf_path in pdf_files:
    if not os.path.exists(pdf_path):
        continue
        
    doc_data = {"file": pdf_path, "pages": []}
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            words = page.extract_words()
            text_lines = extract_tables_from_words(words)
            doc_data["pages"].append(text_lines)
            
    results.append(doc_data)

with open("pdf_lines.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

print("Check pdf_lines.json")
