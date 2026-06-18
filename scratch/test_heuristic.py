import pdfplumber

pdf_path = 'public/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/1-LIBRE HALOGENOS/1-LSOH/FICHA TECNICA - USAR FOTO DE PORTADA.pdf'

def clean_cell(val):
    if val is None:
        return ""
    val = str(val).replace("\r", "").replace("\n", " ")
    val = " ".join(val.split())
    return val

def flatten_headers(row0, row1):
    flattened = []
    r0_filled = []
    current = ""
    for c in row0:
        if c:
            current = c
        r0_filled.append(current)
        
    for c0, c1 in zip(r0_filled, row1):
        c0 = c0.strip()
        c1 = c1.strip()
        if c0 and c1:
            if c0 == c1:
                flattened.append(c0)
            elif c1 in c0:
                flattened.append(c0)
            elif c0 in c1:
                flattened.append(c1)
            else:
                flattened.append(f"{c0} ({c1})")
        elif c0:
            flattened.append(c0)
        elif c1:
            flattened.append(c1)
        else:
            flattened.append("")
    return flattened

def is_two_row_header(cleaned_table):
    if len(cleaned_table) < 3:
        return False
        
    def is_numeric(s):
        s_clean = s.replace(",", "").replace(".", "").strip()
        return s_clean.isdigit()
        
    first_col_r0 = cleaned_table[0][0]
    first_col_r1 = cleaned_table[1][0]
    first_col_r2 = cleaned_table[2][0]
    
    r1_is_units = any(u in cleaned_table[1][i].lower() for i in range(len(cleaned_table[1])) for u in ['awg', 'ohm/km', 'pf/m', 'mm', 'kg/km', 'cod', 'mat'])
    
    if (is_numeric(first_col_r2) or (len(cleaned_table[2]) > 1 and is_numeric(cleaned_table[2][1]))) and not is_numeric(first_col_r1):
        return True
    if r1_is_units:
        return True
    return False

with pdfplumber.open(pdf_path) as pdf:
    for page_idx in range(1, 5):
        page = pdf.pages[page_idx]
        tables = page.extract_tables()
        print(f"\n=== PAGE {page_idx + 1} ===")
        for t_idx, table in enumerate(tables):
            cleaned_table = []
            for r in table:
                cleaned_row = [clean_cell(c) for c in r]
                if any(cleaned_row):
                    cleaned_table.append(cleaned_row)
            
            if len(cleaned_table) < 2:
                continue
                
            has_two_row = is_two_row_header(cleaned_table)
            print(f"Table {t_idx + 1}: Has 2-row header? {has_two_row}")
            if has_two_row:
                headers = flatten_headers(cleaned_table[0], cleaned_table[1])
                data_rows = cleaned_table[2:]
            else:
                headers = cleaned_table[0]
                data_rows = cleaned_table[1:]
                
            print("  Flattened Headers:", headers)
            print("  First Data Row:   ", data_rows[0] if data_rows else "None")
