import os
import re
import json
import pdfplumber

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all industrial products
matches = list(re.finditer(r'\{\s*id:\s*\'(industrial-[^\'\n]+)\'', content))
print(f"Found {len(matches)} industrial products in services/data.ts")

def fix_spanish_chars(val):
    if not val:
        return ""
    # Strip null bytes and control characters
    val = val.replace('\x00', '')
    val = re.sub(r'[\x00-\x1f\x7f-\x9f]', '', val)
    
    replacements = {
        'elctrica': 'eléctrica',
        'elctrico': 'eléctrico',
        'dimetro': 'diámetro',
        'cdigo': 'código',
        'seccin': 'sección',
        'intrnseca': 'intrínseca',
        'caracterstica': 'característica',
        'mxima': 'máxima',
        'formacin': 'formación',
        'aislacin': 'aislación',
        'tensin': 'tensión',
        'relacin': 'relación',
        'instalacin': 'instalación',
        'estndar': 'estándar',
        'ndice': 'índice',
        'bsico': 'básico',
        'tcnico': 'técnico',
        'trmico': 'térmico',
        'estaado': 'estañado',
        'diseo': 'diseño',
        'seales': 'señales',
        'especificacin': 'especificación',
        'parmetro': 'parámetro',
        'nmero': 'número',
        'espesor nominal de aislacion': 'espesor nominal de aislación',
        'espesor de aislacion': 'espesor de aislación',
        'espesor cubierta': 'espesor de cubierta',
        'resist.': 'resistencia',
        'resis.': 'resistencia',
        'react.': 'reactancia',
        'intens.': 'intensidad',
        'adm.': 'admisible'
    }
    # Case-insensitive replacements
    for k, v in replacements.items():
        # Match case
        pattern = re.compile(re.escape(k), re.IGNORECASE)
        def repl(match):
            m = match.group(0)
            if m.isupper():
                return v.upper()
            if m.istitle():
                return v.title()
            return v
        val = pattern.sub(repl, val)
        
    return val

def clean_cell(val):
    if val is None:
        return ""
    val = str(val).replace("\r", "").replace("\n", " ")
    val = " ".join(val.split())
    val = fix_spanish_chars(val)
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
    
    r1_is_units = any(u in cleaned_table[1][i].lower() for i in range(len(cleaned_table[1])) for u in ['awg', 'ohm/km', 'pf/m', 'mm', 'kg/km', 'cod', 'mat', 'amper', 'volt', 'ohm', 'hz'])
    
    if (is_numeric(first_col_r2) or (len(cleaned_table[2]) > 1 and is_numeric(cleaned_table[2][1]))) and not is_numeric(first_col_r1):
        return True
    if r1_is_units:
        return True
    return False

def guess_table_title(headers, cleaned_rows):
    hdr_txt = " ".join(headers).lower()
    
    # Electrical Characteristics
    if "capacidad mutua" in hdr_txt or ("resistencia" in hdr_txt and "inductancia" in hdr_txt) or "reactancia" in hdr_txt:
        return "Características Eléctricas"
        
    # Dimensions and Weights
    if "nro. pares" in hdr_txt or "nro pares" in hdr_txt:
        if "individual" in hdr_txt or "ind." in hdr_txt:
            return "Dimensiones y Pesos - Multipares (Blindaje Individual y General)"
        else:
            return "Dimensiones y Pesos - Multipares (Blindaje General)"
            
    if "nro. ternas" in hdr_txt or "nro ternas" in hdr_txt:
        if "individual" in hdr_txt or "ind." in hdr_txt:
            return "Dimensiones y Pesos - Multiternas (Blindaje Individual y General)"
        else:
            return "Dimensiones y Pesos - Multiternas (Blindaje General)"
            
    if "awg" in hdr_txt or "calibre" in hdr_txt:
        all_codes = []
        for r in cleaned_rows:
            for cell in r:
                if any(x in cell for x in ['1P', '1T', '1Q', '2P', '2T', 'Par', 'Terna', 'Cuadrete']):
                    all_codes.append(cell)
        
        has_t = any('1T' in c or 'Terna' in c for c in all_codes)
        has_q = any('1Q' in c or 'Cuadrete' in c for c in all_codes)
        has_p = any('1P' in c or 'Par' in c for c in all_codes)
        
        if has_p and not has_t and not has_q:
            return "Dimensiones y Pesos - Par"
        elif has_t and not has_q:
            return "Dimensiones y Pesos - Terna"
        elif has_q and not has_t:
            return "Dimensiones y Pesos - Cuadrete"
        elif has_t and has_q:
            return "Dimensiones y Pesos - Terna / Cuadrete"
            
    if "formacion" in hdr_txt or "formación" in hdr_txt or "nro. conductores" in hdr_txt or "nº cond." in hdr_txt or "conductores" in hdr_txt:
        return "Dimensiones y Pesos"
        
    if "diámetro" in hdr_txt or "diametro" in hdr_txt or "peso" in hdr_txt or "espesor" in hdr_txt:
        return "Dimensiones y Pesos"
        
    return "Especificaciones Técnicas"

extracted_data = {}

for i, m in enumerate(matches):
    prod_id = m.group(1)
    start = m.start()
    end = matches[i+1].start() if i+1 < len(matches) else content.find('];', start)
    block = content[start:end]
    name_m = re.search(r'name:\s*\'([^\'\n]+)\'', block)
    pdf_m = re.search(r'pdf:\s*\'([^\'\n]+)\'', block)
    name = name_m.group(1) if name_m else 'Unknown'
    pdf_path = pdf_m.group(1) if pdf_m else None
    
    if not pdf_path:
        continue
        
    full_path = 'public' + pdf_path
    if not os.path.exists(full_path):
        continue
        
    product_tables = []
    try:
        with pdfplumber.open(full_path) as pdf:
            # We skip page 0 (cover page) for all products
            for page_idx in range(1, len(pdf.pages)):
                page = pdf.pages[page_idx]
                tables = page.find_tables()
                for table in tables:
                    raw_rows = table.extract()
                    cleaned_rows = []
                    for r in raw_rows:
                        cleaned_row = [clean_cell(c) for c in r]
                        # Keep only non-empty rows
                        if any(cleaned_row):
                            cleaned_rows.append(cleaned_row)
                            
                    # Filter out layout tables (too small, or just single cell/sentence)
                    if len(cleaned_rows) < 2:
                        continue
                    if len(cleaned_rows[0]) <= 1:
                        continue
                    # Skip if the first cell has extremely long layout text
                    if len(cleaned_rows[0][0]) > 80:
                        continue
                        
                    # Parse headers and data
                    if is_two_row_header(cleaned_rows):
                        headers = flatten_headers(cleaned_rows[0], cleaned_rows[1])
                        data_rows = cleaned_rows[2:]
                    else:
                        headers = cleaned_rows[0]
                        data_rows = cleaned_rows[1:]
                        
                    title = guess_table_title(headers, data_rows)
                    
                    product_tables.append({
                        "title": title,
                        "headers": headers,
                        "rows": data_rows
                    })
        print(f"Extracted {len(product_tables)} tables for {prod_id}")
        extracted_data[prod_id] = product_tables
    except Exception as e:
        print(f"Error parsing {prod_id}: {e}")

# Save to JSON
with open('scratch/all_industrial_tables.json', 'w', encoding='utf-8') as f:
    json.dump(extracted_data, f, indent=2, ensure_ascii=False)
print("Finished extracting all tables!")
