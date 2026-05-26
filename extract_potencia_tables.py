import fitz
import re
import json

products = [
    {
        'id': 'subterraneo-lsoh-aluminio',
        'type': 'mh',
        'pdf': 'public/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO ALUMINIO/SUBTERRANEO LSOH/FICHA TECNICA/ficha tecnica subte aluminio lsoh.pdf'
    },
    {
        'id': 'subterraneo-pvc-aluminio',
        'type': 'mh',
        'pdf': 'public/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO ALUMINIO/SUBTERRANEO PVC/FICHA TECNICA/ficha tecnica subte aluminio pvc.pdf'
    },
    {
        'id': 'subterraneo-xlpe-aluminio',
        'type': 'erpla',
        'pdf': 'public/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO ALUMINIO/SUBTERRANEO XLPE/FICHA TECNICA/ficha tecnica subte aluminio xlpe.pdf'
    },
    {
        'id': 'subterraneo-lsoh-cobre',
        'type': 'mh',
        'pdf': 'public/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO COBRE/SUBTERRANEO LSOH/FICHA TECNICA/ficha tecnica subte cobre lsoh.pdf'
    },
    {
        'id': 'subterraneo-pvc-cobre',
        'type': 'mh',
        'pdf': 'public/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO COBRE/SUBTERRANEO PVC/FICHA TECNICA/ficha tecnica subte cobre pvc.pdf'
    },
    {
        'id': 'subterraneo-xlpe-cobre',
        'type': 'erpla',
        'pdf': 'public/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO COBRE/SUBTERRANEO XLPE/FICHA TECNICA/ficha tecnica subte cobre xlpe.pdf'
    },
    {
        'id': '2-para-bomba-sumergible',
        'type': 'bomba',
        'pdf': 'public/images/ProductosNuevos/3-CABLES DE POTENCIA/2-PARA BOMBA SUMERGIBLE/FICHA TECNICA BOMBA SUMERGIBLE.pdf'
    },
    {
        'id': '3-para-variador-de-frecuencia',
        'type': 'marlew',
        'pdf': 'public/images/ProductosNuevos/3-CABLES DE POTENCIA/3-PARA VARIADOR DE FRECUENCIA/FICHA TECNICA VDF.pdf'
    }
]

def extract_mh(pdf_path):
    doc = fitz.open(pdf_path)
    # MH has tables split in UNIPOLARES, BIPOLARES, TRIPOLARES, TETRAPOLARES
    # They are column by column.
    # UNIPOLARES has 6 columns.
    sections = ['UNIPOLARES', 'BIPOLARES', 'TRIPOLARES', 'TETRAPOLARES']
    headers = [
        "Sección nominal (mm²)", "Diámetro cond. (mm)", "Espesor aisl. (mm)",
        "Espesor env. (mm)", "Diámetro ext. (mm)", "Masa (kg/km)"
    ]
    tables = []
    
    for page in doc:
        blocks = page.get_text('blocks')
        blocks.sort(key=lambda b: (round(b[1]/5)*5, b[0]))
        text_blocks = [b[4].strip() for b in blocks if b[4].strip()]
        
        for sec in sections:
            try:
                idx = text_blocks.index(sec)
                # Next blocks might be columns
                # For unipolares, bipolares, tripolares we expect 6 columns of data
                # Usually sections, diam_cond, esp_aisl, esp_env, diam_ext, masa
                # Some have '16' as first...
                col1 = text_blocks[idx+1].split('\n')
                col2 = text_blocks[idx+2].split('\n')
                col3 = text_blocks[idx+3].split('\n')
                col4 = text_blocks[idx+4].split('\n')
                col5 = text_blocks[idx+5].split('\n')
                col6 = text_blocks[idx+6].split('\n')
                
                # Zip them up to min length
                min_len = min(len(col1), len(col2), len(col3), len(col4), len(col5), len(col6))
                if min_len == 0: continue
                
                rows = []
                for i in range(min_len):
                    # We have to guess the order based on standard values
                    # Sections are usually integers like 25, 35
                    # Let's assume order is Masa, Diam_ext, Esp_env, Esp_aisl, Diam_cond, Seccion (backwards)
                    # or Seccion, Diam_cond, Esp_aisl, Esp_env, Diam_ext, Masa
                    # In my previous test, it was backwards:
                    # 6: Masa, 5: Diam_ext, 4: Esp_env, 3: Esp_aisl, 2: Diam_cond, 1: Seccion
                    rows.append([col6[i], col5[i], col4[i], col3[i], col2[i], col1[i]])
                
                tables.append({
                    "title": f"DIMENSIONES Y PESOS - {sec}",
                    "headers": headers,
                    "rows": rows
                })
            except ValueError:
                pass
            except IndexError:
                pass
                
    return tables

def extract_erpla(pdf_path):
    doc = fitz.open(pdf_path)
    tables = []
    for page in doc:
        tabs = page.find_tables()
        for t in tabs:
            extracted = t.extract()
            if len(extracted) > 2:
                # Basic cleanup
                headers = [str(x).replace('\n', ' ') if x else '' for x in extracted[0]]
                rows = []
                for r in extracted[1:]:
                    if any(r):
                        rows.append([str(x).replace('\n', ' ') if x else '-' for x in r])
                tables.append({
                    "title": "Especificaciones",
                    "headers": headers,
                    "rows": rows
                })
    return tables

def extract_marlew(pdf_path):
    doc = fitz.open(pdf_path)
    tables = []
    for page in doc:
        blocks = page.get_text('blocks')
        blocks.sort(key=lambda b: (round(b[1]/5)*5, b[0]))
        text_blocks = [b[4].strip() for b in blocks if b[4].strip()]
        
        try:
            idx = text_blocks.index('3x1')
            # 3x1 starts the Dimensiones table
            rows = []
            for b in text_blocks[idx:]:
                pts = b.split('\n')
                if len(pts) >= 4:
                    rows.append(pts)
            
            tables.append({
                "title": "Dimensiones y Pesos",
                "headers": ["Sección (N° x mm²)", "Código", "Diam. bajo armadura (mm)", "Diámetro exterior (mm)", "Peso (kg/km)"],
                "rows": rows
            })
        except ValueError:
            pass
    return tables

def extract_bomba(pdf_path):
    # Hardcoded or fitz
    return [{
        "title": "Características Dimensionales",
        "headers": ["Código", "Formación", "Espesor aislación (mm)", "Espesor vaina (mm)", "Medidas aprox. (mm)", "Peso aprox. (kgs/100m)"],
        "rows": [
            ["B150", "3 x 1,50", "1,2", "1,5", "15 x 7,15", "20"],
            ["B250", "3 x 2,50", "1,2", "1,4", "16,60 x 7,90", "28"]
        ]
    }]

def update_data():
    with open('services/data.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    for prod in products:
        tables = []
        if prod['type'] == 'mh':
            tables = extract_mh(prod['pdf'])
        elif prod['type'] == 'erpla':
            tables = extract_erpla(prod['pdf'])
        elif prod['type'] == 'marlew':
            tables = extract_marlew(prod['pdf'])
        elif prod['type'] == 'bomba':
            tables = extract_bomba(prod['pdf'])
            
        if tables:
            # Replace specsTables: [] with actual tables
            table_str = json.dumps(tables, ensure_ascii=False, indent=2)
            # Remove quotes from keys
            table_str = re.sub(r'\"(title|headers|rows)\":', r'\1:', table_str)
            table_str = "specsTables: " + table_str
            
            match = re.search(f"(id:\\s*'{prod['id']}'.*?)specsTables:\\s*\\[\\s*\\],", content, re.DOTALL)
            if match:
                new_str = match.group(1) + table_str + ","
                content = content.replace(match.group(0), new_str)
                print(f"Updated {prod['id']} with {len(tables)} tables")

    with open('services/data.ts', 'w', encoding='utf-8') as f:
        f.write(content)

update_data()
