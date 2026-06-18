import pdfplumber
import re

pdf_path = 'public/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/1-LIBRE HALOGENOS/1-LSOH/FICHA TECNICA - USAR FOTO DE PORTADA.pdf'

def fix_spanish_chars(val):
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
        'C': '°C',
        '': 'º'
    }
    for k, v in replacements.items():
        val = val.replace(k, v)
    return val

def get_table_title(page, table_bbox):
    words = page.extract_words()
    above_words = [w for w in words if w['bottom'] < table_bbox[1]]
    above_words.sort(key=lambda w: w['bottom'], reverse=True)
    
    lines = []
    if above_words:
        current_line = [above_words[0]]
        for w in above_words[1:]:
            if abs(w['top'] - current_line[-1]['top']) < 6:
                current_line.append(w)
            else:
                current_line.sort(key=lambda w: w['x0'])
                lines.append(" ".join([x['text'] for x in current_line]))
                current_line = [w]
        current_line.sort(key=lambda w: w['x0'])
        lines.append(" ".join([x['text'] for x in current_line]))
    
    candidate_lines = []
    for line in lines:
        line_clean = line.strip()
        if not line_clean:
            continue
        digits = sum(c.isdigit() for c in line_clean)
        if len(line_clean) > 0 and digits / len(line_clean) > 0.3:
            continue
        if len(line_clean) > 100:
            continue
        if any(c in line_clean for c in ['Mat Number', 'AE-O', 'AE-IO', ' ohm/', ' pf/']):
            continue
        candidate_lines.append(line_clean)
        
    if not candidate_lines:
        return "Especificaciones Técnicas"
        
    title_parts = []
    for c in candidate_lines[:3]:
        c_clean = fix_spanish_chars(c)
        if any(w in c_clean.lower() for w in ['www.marlew', 'serie', 'pina', 'hoja', 'pagina', 'capacidad mutua', 'inductancia mutua']):
            continue
        title_parts.append(c_clean)
        
    if len(title_parts) >= 2:
        if "dimensiones" in title_parts[1].lower() or "pesos" in title_parts[1].lower() or "características" in title_parts[1].lower():
            return f"{title_parts[1]} - {title_parts[0]}"
        return " - ".join(title_parts[:2])
    elif len(title_parts) == 1:
        return title_parts[0]
        
    return "Especificaciones Técnicas"

with pdfplumber.open(pdf_path) as pdf:
    for page_idx in range(1, len(pdf.pages)):
        page = pdf.pages[page_idx]
        tables = page.find_tables()
        print(f"\n=== PAGE {page_idx + 1} ===")
        for t_idx, table in enumerate(tables):
            cleaned_table = []
            for r in table.extract():
                cleaned_row = [c if c is not None else "" for c in r]
                if any(cleaned_row):
                    cleaned_table.append(cleaned_row)
            if len(cleaned_table) < 2:
                continue
            title = get_table_title(page, table.bbox)
            print(f"Table {t_idx + 1} Title: {title}")
            print(f"  Headers: {cleaned_table[0][:3]}")
