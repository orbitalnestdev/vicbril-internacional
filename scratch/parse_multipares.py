def parse_page_4_and_5():
    with open('scratch/instrument_blocks.txt', 'r', encoding='utf-8') as f:
        content = f.read()
        
    pages = content.split('================ PAGE ')
    
    # We want to parse page 4 and page 5
    for page_idx in [4, 5]:
        page = [p for p in pages if p.startswith(str(page_idx))][0]
        lines = [line.strip() for line in page.split('\n') if line.strip()][6:] # skip headers
        
        # In Page 4: Nro. Pares, AWG, Blindaje General, Diámetro, Peso, Código, Mat Number
        # But wait, Nro. Pares, AWG (only on first row of AWG block), Diámetro, Peso, Código, Mat Number.
        # Let's parse this!
        rows = []
        current_awg = None
        i = 0
        while i < len(lines):
            # Let's check if the first item is a number representing Nro. Pares
            val = lines[i]
            if not val.isdigit():
                i += 1
                continue
                
            # If it's a number, let's see. For example, if it's '2', '20', '7.4', '65', 'AR-O 2P20', '810000360'
            # Let's look at the next few lines
            if i + 5 < len(lines) and lines[i+1].isdigit() and (len(lines[i+1]) == 2) and ('.' in lines[i+2]) and lines[i+3].isdigit() and ('AR' in lines[i+4]):
                # This is a 6-item row (new AWG block)
                nro_pares = lines[i]
                current_awg = lines[i+1]
                diam = lines[i+2]
                peso = lines[i+3]
                codigo = lines[i+4]
                mat_num = lines[i+5]
                rows.append([nro_pares, current_awg, diam, peso, codigo, mat_num])
                i += 6
            elif i + 4 < len(lines) and ('.' in lines[i+1] or ',' in lines[i+1]) and lines[i+2].isdigit() and ('AR' in lines[i+3]):
                # This is a 5-item row (same AWG block)
                nro_pares = lines[i]
                diam = lines[i+1]
                peso = lines[i+2]
                codigo = lines[i+3]
                mat_num = lines[i+4]
                rows.append([nro_pares, current_awg, diam, peso, codigo, mat_num])
                i += 5
            else:
                # print(f"Page {page_idx}: skipped line {i}: {lines[i]}")
                i += 1
                
        print(f"\n--- PARSED PAGE {page_idx} ({len(rows)} rows) ---")
        for r in rows[:5]:
            print(r)
        print("...")
        for r in rows[-5:]:
            print(r)

if __name__ == '__main__':
    parse_page_4_and_5()
