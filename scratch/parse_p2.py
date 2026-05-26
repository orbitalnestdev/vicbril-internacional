import re

def parse_p2():
    with open('scratch/instrument_blocks.txt', 'r', encoding='utf-8') as f:
        content = f.read()
        
    pages = content.split('================ PAGE ')
    page = [p for p in pages if p.startswith('2')][0]
    lines = [l.strip() for l in page.split('\n') if l.strip()][10:] # skip headers
    
    # Let's inspect the lines of Page 2 in order
    # The columns are: AWG, Estructura, Tipo de blindaje, Resistencia, Capacidad, Impedancia, Inductancia
    # Let's check how we can parse them.
    # The gauges (AWG) are 20, 18, 16, 14, 12.
    # Let's search for lines containing AWG numbers
    # A block starts with the gauge (AWG) e.g., 20, 18, 16, 14, 12.
    # Let's see:
    # AWG 20 starts at line 29: '20'
    # AWG 18 starts at line 46: '18'
    # AWG 16 starts at line 63: '16'
    # AWG 14 starts at line 80: '14'
    # AWG 12 starts at line 97: '12'
    
    # Each block spans 17 lines! Let's check:
    # 46 - 29 = 17 lines!
    # 63 - 46 = 17 lines!
    # 80 - 63 = 17 lines!
    # 97 - 80 = 17 lines!
    # Yes, each block is exactly 17 lines!
    # Let's list the 17 lines for AWG 20 (index 29 to 45):
    # 29: 20  (AWG)
    # 30: Par /terna / cuadrete (Estructura 1)
    # 31: Sin blindar (Shield 1)
    # 32: 35,78 (Resist 1)
    # 33: 98 (Capac 1)
    # 34: 76 (Imped 1)
    # 35: 588 (Induct 1)
    # 36: Blindado (Shield 2)
    # 37: 180 (Capac 2)
    # 38: 41 (Imped 2)
    # 39: Multipar / multiterna (Estructura 2)
    # 40: Blindaje general (Shield 3)
    # 41: 111 (Capac 3)
    # 42: 67 (Imped 3)
    # 43: Blindaje individual y general (Shield 4)
    # 44: 180 (Capac 4)
    # 45: 41 (Imped 4)
    
    # This is incredibly regular! Let's verify AWG 18 (index 46 to 62):
    # 46: 18
    # 47: Par /terna / cuadrete
    # 48: Sin blindar
    # 49: 22,78
    # 50: 85
    # 51: 88
    # 52: 641
    # 53: Blindado
    # 54: 165
    # 55: 50
    # 56: Multipar / multiterna
    # 57: Blindaje general
    # 58: 98
    # 59: 76
    # 60: Blindaje individual y general
    # 61: 165
    # 62: 50
    
    # Yes, it is 100% exactly 17 lines per block!
    # Let's map them to 4 rows for each AWG block:
    # Row 1 (Sin blindar): AWG, Estructura="Par/Terna/Cuadrete", Blindaje="Sin blindar", Resistencia=Resist1, Capacidad=Capac1, Impedancia=Imped1, Inductancia=Induct1
    # Row 2 (Blindado): AWG, Estructura="Par/Terna/Cuadrete", Blindaje="Blindado", Resistencia=Resist1, Capacidad=Capac2, Impedancia=Imped2, Inductancia="--"
    # Row 3 (Blindaje general): AWG, Estructura="Multipar/Multiterna", Blindaje="Blindaje general", Resistencia=Resist1, Capacidad=Capac3, Impedancia=Imped3, Inductancia="--"
    # Row 4 (Blindaje individual y general): AWG, Estructura="Multipar/Multiterna", Blindaje="Blindaje individual y general", Resistencia=Resist1, Capacidad=Capac4, Impedancia=Imped4, Inductancia="--"
    
    rows = []
    blocks = [lines[i:i+17] for i in range(29, len(lines), 17) if len(lines[i:i+17]) == 17]
    for b in blocks:
        awg = b[0]
        r1 = [awg, "Par / Terna / Cuadrete", b[2], b[3], b[4], b[5], b[6]]
        r2 = [awg, "Par / Terna / Cuadrete", b[7], b[3], b[8], b[9], "--"]
        r3 = [awg, "Multipar / Multiterna", b[11], b[3], b[12], b[13], "--"]
        r4 = [awg, "Multipar / Multiterna", b[14], b[3], b[15], b[16], "--"]
        rows.extend([r1, r2, r3, r4])
        
    print(f"Parsed {len(rows)} rows for Características Eléctricas.")
    for r in rows[:8]:
        print(r)

if __name__ == '__main__':
    parse_p2()
