import re
import json

def parse_p2():
    with open('scratch/instrument_blocks.txt', 'r', encoding='utf-8') as f:
        content = f.read()
        
    pages = content.split('================ PAGE ')
    page = [p for p in pages if p.startswith('2')][0]
    lines = [l.strip() for l in page.split('\n') if l.strip()][10:] # skip headers
    
    gauges = ['20', '18', '16', '14', '12']
    gauge_indices = []
    current_gauge_idx = 0
    for idx, line in enumerate(lines):
        if current_gauge_idx < len(gauges) and line == gauges[current_gauge_idx]:
            gauge_indices.append((gauges[current_gauge_idx], idx))
            current_gauge_idx += 1
            
    rows = []
    for idx, (gauge, start_line) in enumerate(gauge_indices):
        end_line = gauge_indices[idx+1][1] if idx + 1 < len(gauge_indices) else len(lines)
        block_lines = lines[start_line:end_line]
        block_lines = [l for l in block_lines if not l.startswith('pF/m') and not l.startswith('2 www.marlew')]
        
        awg = block_lines[0]
        struct1_idx = -1
        struct2_idx = -1
        for i, l in enumerate(block_lines):
            if 'Par' in l and 'terna' in l:
                struct1_idx = i
            elif 'Multipar' in l and 'multiterna' in l:
                struct2_idx = i
                
        shield1_idx = -1
        shield2_idx = -1
        for i in range(struct1_idx + 1, struct2_idx if struct2_idx != -1 else len(block_lines)):
            if 'Sin blindar' in block_lines[i]:
                shield1_idx = i
            elif 'Blindado' in block_lines[i]:
                shield2_idx = i
                
        r1_resist = block_lines[shield1_idx + 1]
        r1_capac = block_lines[shield1_idx + 2]
        r1_imped = block_lines[shield1_idx + 3]
        r1_induct = block_lines[shield1_idx + 4]
        
        rows.append([awg, "Par / Terna / Cuadrete", "Sin blindar", r1_resist, r1_capac, r1_imped, r1_induct])
        
        if shield2_idx != -1:
            r2_capac = block_lines[shield2_idx + 1]
            r2_imped = block_lines[shield2_idx + 2]
            rows.append([awg, "Par / Terna / Cuadrete", "Blindado", r1_resist, r2_capac, r2_imped, "--"])
            
        if struct2_idx != -1:
            shield3_idx = -1
            shield4_idx = -1
            for i in range(struct2_idx + 1, len(block_lines)):
                if 'Blindaje general' in block_lines[i]:
                    shield3_idx = i
                elif 'Blindaje individual' in block_lines[i]:
                    shield4_idx = i
            
            if shield3_idx != -1:
                r3_capac = block_lines[shield3_idx + 1]
                r3_imped = block_lines[shield3_idx + 2]
                rows.append([awg, "Multipar / Multiterna", "Blindaje general", r1_resist, r3_capac, r3_imped, "--"])
                
            if shield4_idx != -1:
                r4_capac = block_lines[shield4_idx + 1]
                r4_imped = block_lines[shield4_idx + 2]
                rows.append([awg, "Multipar / Multiterna", "Blindaje individual y general", r1_resist, r4_capac, r4_imped, "--"])
                
    return {
        "title": "Características Eléctricas",
        "headers": ["Calibre (AWG)", "Estructura del cable", "Tipo de blindaje", "Resistencia eléctrica CC a 20°C (Ohm/km)", "Capacidad mutua (pF/m)", "Impedancia característica (Ohm)", "Inductancia mutua (µH/km)"],
        "rows": rows
    }

def parse_page_by_code(page_idx, title, type_name):
    with open('scratch/instrument_blocks.txt', 'r', encoding='utf-8') as f:
        content = f.read()
        
    pages = content.split('================ PAGE ')
    page = [p for p in pages if p.startswith(str(page_idx))][0]
    lines = [l.strip() for l in page.split('\n') if l.strip()][6:] # skip headers
    
    rows = []
    current_awg = None
    
    code_indices = []
    for idx, line in enumerate(lines):
        if re.match(r'^AR-(O|IO)\s+\d+(P|T|Q)\d+$', line):
            code_indices.append(idx)
            
    last_end = code_indices[0] - 4
    
    for code_idx in code_indices:
        code = lines[code_idx]
        mat_num = lines[code_idx + 1] if code_idx + 1 < len(lines) else ""
        peso = lines[code_idx - 1]
        diam = lines[code_idx - 2].replace(',', '.')
        
        gap_elements = lines[last_end : code_idx - 2]
        
        if len(gap_elements) == 2:
            nro = gap_elements[0]
            current_awg = gap_elements[1]
        elif len(gap_elements) == 1:
            nro = gap_elements[0]
        else:
            nro = gap_elements[0] if gap_elements else "?"
            
        rows.append([nro, current_awg, diam, peso, code, mat_num])
        last_end = code_idx + 2
        
    return {
        "title": title,
        "headers": [f"Nro. {type_name}", "Calibre (AWG)", "Diámetro exterior (mm)", "Peso (kg/km)", "Código", "Mat Number"],
        "rows": rows
    }

def main():
    tables = []
    
    # 1. Page 2 Table
    tables.append(parse_p2())
    
    # 2 & 3. From services/data.ts (We can keep Page 3 Par and Terna/Cuadrete)
    # We can write them manually since we already have them:
    par_table = {
        "title": "Dimensiones y Pesos - Par",
        "headers": ["Calibre (AWG)", "Blindado", "Drenaje (AWG)", "Diámetro exterior (mm)", "Peso (kg/km)", "Código"],
        "rows": [
          ["20", "No", "--", "4.9", "30", "AR 1P20"],
          ["20", "Sí", "22", "5.0", "33", "AR-O 1P20"],
          ["18", "No", "--", "5.6", "40", "AR 1P18"],
          ["18", "Sí", "20", "5.7", "45", "AR-O 1P18"],
          ["16", "No", "--", "6.2", "53", "AR 1P16"],
          ["16", "Sí", "18", "6.3", "61", "AR-O 1P16"],
          ["14", "No", "--", "7.7", "82", "AR 1P14"],
          ["14", "Sí", "18", "7.8", "89", "AR-O 1P14"],
          ["12", "No", "--", "8.7", "111", "AR 1P12"],
          ["12", "Sí", "18", "8.8", "119", "AR-O 1P12"]
        ]
    }
    terna_cuadrete_table = {
        "title": "Dimensiones y Pesos - Terna / Cuadrete",
        "headers": ["Estructura", "Calibre (AWG)", "Drenaje (AWG)", "Diámetro exterior (mm)", "Peso (kg/km)", "Código"],
        "rows": [
          ["Terna (Blindado)", "20", "22", "5.3", "41", "AR-O 1T20"],
          ["Terna (Blindado)", "18", "20", "6.0", "57", "AR-O 1T18"],
          ["Terna (Blindado)", "16", "18", "6.7", "78", "AR-O 1T16"],
          ["Terna (Blindado)", "14", "18", "8.3", "116", "AR-O 1T14"],
          ["Terna (Blindado)", "12", "18", "9.3", "159", "AR-O 1T12"],
          ["Cuadrete (Blindado)", "20", "22", "5.7", "50", "AR-O 1Q20"],
          ["Cuadrete (Blindado)", "18", "20", "6.5", "70", "AR-O 1Q18"],
          ["Cuadrete (Blindado)", "16", "18", "7.5", "101", "AR-O 1Q16"],
          ["Cuadrete (Blindado)", "14", "18", "9.0", "146", "AR-O 1Q14"],
          ["Cuadrete (Blindado)", "12", "18", "10.7", "214", "AR-O 1Q12"]
        ]
    }
    tables.append(par_table)
    tables.append(terna_cuadrete_table)
    
    # 4. Page 4 Table
    tables.append(parse_page_by_code(4, "Dimensiones y Pesos - Multipares (Blindaje General)", "Pares"))
    # 5. Page 5 Table
    tables.append(parse_page_by_code(5, "Dimensiones y Pesos - Multipares (Blindaje Individual y General)", "Pares"))
    # 6. Page 6 Table
    tables.append(parse_page_by_code(6, "Dimensiones y Pesos - Multiternas (Blindaje General)", "Ternas"))
    # 7. Page 7 Table
    tables.append(parse_page_by_code(7, "Dimensiones y Pesos - Multiternas (Blindaje Individual y General)", "Ternas"))
    
    # Let's save this as JSON
    with open('scratch/instrument_tables.json', 'w', encoding='utf-8') as f:
        json.dump(tables, f, indent=2, ensure_ascii=False)
        
    print("Done generating JSON tables!")

if __name__ == '__main__':
    main()
