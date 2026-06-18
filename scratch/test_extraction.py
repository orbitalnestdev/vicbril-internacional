import pdfplumber
import os

pdf_path = 'public/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/1-LIBRE HALOGENOS/1-LSOH/FICHA TECNICA - USAR FOTO DE PORTADA.pdf'

def clean_cell(val):
    if val is None:
        return ""
    # clean newlines and extra spaces
    val = str(val).replace("\r", "").replace("\n", " ")
    val = " ".join(val.split())
    # remove some non-ascii chars or fix encoding
    return val

with pdfplumber.open(pdf_path) as pdf:
    for page_idx in range(1, 4): # look at pages 2 and 3 (0-indexed 1 and 2)
        page = pdf.pages[page_idx]
        tables = page.extract_tables()
        print(f"\n=== PAGE {page_idx + 1} ===")
        for t_idx, table in enumerate(tables):
            print(f"Table {t_idx + 1}: original rows = {len(table)}")
            cleaned_table = []
            for r in table:
                cleaned_row = [clean_cell(c) for c in r]
                # skip completely empty rows
                if any(cleaned_row):
                    cleaned_table.append(cleaned_row)
            
            if len(cleaned_table) < 2:
                print("Skipping layout table")
                continue
                
            # Print headers and first few rows
            print("Headers:", cleaned_table[0])
            if len(cleaned_table) > 1:
                print("Row 1:", cleaned_table[1])
            if len(cleaned_table) > 2:
                print("Row 2:", cleaned_table[2])
            print(f"Total rows: {len(cleaned_table)}")
