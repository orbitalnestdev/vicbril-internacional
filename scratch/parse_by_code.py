import re

def parse_page_by_code(page_idx):
    with open('scratch/instrument_blocks.txt', 'r', encoding='utf-8') as f:
        content = f.read()
        
    pages = content.split('================ PAGE ')
    page = [p for p in pages if p.startswith(str(page_idx))][0]
    lines = [l.strip() for l in page.split('\n') if l.strip()][6:] # skip headers
    
    rows = []
    current_awg = None
    
    # Find all indices of códigos
    code_indices = []
    for idx, line in enumerate(lines):
        if re.match(r'^AR-(O|IO)\s+\d+(P|T|Q)\d+$', line):
            code_indices.append(idx)
            
    print(f"\n=== PAGE {page_idx}: Found {len(code_indices)} code indices ===")
    
    # For the first row, last_end should start at the first data element,
    # which is code_idx - 4 (since it has both Nro. Pares and AWG).
    last_end = code_indices[0] - 4
    
    for code_idx in code_indices:
        code = lines[code_idx]
        mat_num = lines[code_idx + 1] if code_idx + 1 < len(lines) else ""
        peso = lines[code_idx - 1]
        diam = lines[code_idx - 2]
        
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
        
    for r in rows[:5]:
        print(r)
    print("...")
    for r in rows[-5:]:
        print(r)

if __name__ == '__main__':
    parse_page_by_code(4)
    parse_page_by_code(5)
    parse_page_by_code(6)
    parse_page_by_code(7)
