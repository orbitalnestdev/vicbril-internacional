import os
import re
import json
import pdfplumber

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all industrial products
matches = list(re.finditer(r'\{\s*id:\s*\'(industrial-[^\'\n]+)\'', content))
print(f"Found {len(matches)} industrial products.")

results = []
for i, m in enumerate(matches):
    start = m.start()
    end = matches[i+1].start() if i+1 < len(matches) else content.find('];', start)
    block = content[start:end]
    name_m = re.search(r'name:\s*\'([^\'\n]+)\'', block)
    pdf_m = re.search(r'pdf:\s*\'([^\'\n]+)\'', block)
    name = name_m.group(1) if name_m else 'Unknown'
    pdf_path = pdf_m.group(1) if pdf_m else None
    
    if not pdf_path:
        print(f"{i+1}. {name}: No PDF path")
        continue
        
    full_path = 'public' + pdf_path
    if not os.path.exists(full_path):
        print(f"{i+1}. {name}: PDF file does not exist at {full_path}")
        continue
        
    try:
        with pdfplumber.open(full_path) as pdf:
            total_tables = 0
            pages_info = []
            for p_idx, page in enumerate(pdf.pages):
                tables = page.extract_tables()
                total_tables += len(tables)
                pages_info.append(len(tables))
            print(f"{i+1}. {name} | PDF: {pdf_path} | Pages: {len(pdf.pages)} | Tables: {total_tables} | Per-page: {pages_info}")
            results.append({
                "id": m.group(1),
                "name": name,
                "pdf": pdf_path,
                "pages": len(pdf.pages),
                "tables_count": total_tables
            })
    except Exception as e:
        print(f"{i+1}. {name}: Error reading PDF {pdf_path}: {e}")
