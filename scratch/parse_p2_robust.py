import re

def parse_p2():
    with open('scratch/instrument_blocks.txt', 'r', encoding='utf-8') as f:
        content = f.read()
        
    pages = content.split('================ PAGE ')
    page = [p for p in pages if p.startswith('2')][0]
    lines = [l.strip() for l in page.split('\n') if l.strip()][10:] # skip headers
    
    # We want to find indices of the gauges: '20', '18', '16', '14', '12'
    gauges = ['20', '18', '16', '14', '12']
    gauge_indices = []
    
    # We need to find the exact line indices. But we must be careful:
    # '20', '18' etc could appear as capacities or other numbers.
    # Fortunately, the gauges appear in a specific sequence and on lines by themselves.
    # Let's search for lines that are exactly one of the gauges, and in descending order.
    current_gauge_idx = 0
    for idx, line in enumerate(lines):
        if current_gauge_idx < len(gauges) and line == gauges[current_gauge_idx]:
            gauge_indices.append((gauges[current_gauge_idx], idx))
            current_gauge_idx += 1
            
    print("Gauge indices found:", gauge_indices)
    
    rows = []
    for idx, (gauge, start_line) in enumerate(gauge_indices):
        end_line = gauge_indices[idx+1][1] if idx + 1 < len(gauge_indices) else len(lines)
        # Check if it has a footer line at the end (e.g. line 107)
        block_lines = lines[start_line:end_line]
        # remove any line starting with pF/m
        block_lines = [l for l in block_lines if not l.startswith('pF/m') and not l.startswith('2 www.marlew')]
        
        print(f"\nBlock for AWG {gauge} ({len(block_lines)} lines):")
        for i, l in enumerate(block_lines):
            print(f"  {i}: {l}")
            
        # Now let's parse this block.
        # It should contain:
        # gauge
        # Estructura 1 (e.g. Par /terna / cuadrete)
        # Shield 1 (e.g. Sin blindar)
        # Resist 1 (e.g. 35,78)
        # Capac 1 (e.g. 98)
        # Imped 1 (e.g. 76)
        # Induct 1 (e.g. 588)
        # Shield 2 (e.g. Blindado)
        # Capac 2 (e.g. 180)
        # Imped 2 (e.g. 41)
        # If it has more lines, it has Estructura 2:
        # Estructura 2 (e.g. Multipar / multiterna)
        # Shield 3 (e.g. Blindaje general)
        # Capac 3 (e.g. 111)
        # Imped 3 (e.g. 67)
        # Shield 4 (e.g. Blindaje individual y general)
        # Capac 4 (e.g. 180)
        # Imped 4 (e.g. 41)
        
        # Let's extract:
        awg = block_lines[0]
        # We can find where 'Par /terna / cuadrete' and 'Multipar / multiterna' are located in block_lines
        struct1_idx = -1
        struct2_idx = -1
        for i, l in enumerate(block_lines):
            if 'Par' in l and 'terna' in l:
                struct1_idx = i
            elif 'Multipar' in l and 'multiterna' in l:
                struct2_idx = i
                
        # Struct 1:
        # Shield 1: Sin blindar
        # Shield 2: Blindado
        # Let's find Shield 1 and 2
        shield1_idx = -1
        shield2_idx = -1
        for i in range(struct1_idx + 1, struct2_idx if struct2_idx != -1 else len(block_lines)):
            if 'Sin blindar' in block_lines[i]:
                shield1_idx = i
            elif 'Blindado' in block_lines[i]:
                shield2_idx = i
                
        # Parse Shield 1 values: it should be at shield1_idx + 1, + 2, + 3, + 4
        # (Resist, Capac, Imped, Induct)
        r1_resist = block_lines[shield1_idx + 1]
        r1_capac = block_lines[shield1_idx + 2]
        r1_imped = block_lines[shield1_idx + 3]
        r1_induct = block_lines[shield1_idx + 4]
        
        rows.append([awg, "Par / Terna / Cuadrete", "Sin blindar", r1_resist, r1_capac, r1_imped, r1_induct])
        
        if shield2_idx != -1:
            # Parse Shield 2 values: Capac is at shield2_idx + 1, Imped is at shield2_idx + 2
            r2_capac = block_lines[shield2_idx + 1]
            r2_imped = block_lines[shield2_idx + 2]
            rows.append([awg, "Par / Terna / Cuadrete", "Blindado", r1_resist, r2_capac, r2_imped, "--"])
            
        if struct2_idx != -1:
            # Parse Struct 2 (Multipar / Multiterna)
            # Shield 3: Blindaje general
            # Shield 4: Blindaje individual y general
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
                
    print("\n--- FINAL PARSED CARACTERÍSTICAS ELÉCTRICAS ---")
    for r in rows:
        print(r)

if __name__ == '__main__':
    parse_p2()
