import re

def fix_paths():
    with open('services/data.ts', 'r', encoding='utf-8') as f:
        content = f.read()
        
    # We want to replace categoryPath for specific product IDs:
    # 1. 1-instrumentaci-n-electronica
    # 2. 2-automatizaci-n
    # 3. 3-cable-comando
    # 4. 1-solares
    # 5. 2-siliconados
    # 6. 3-fibra-de-vidrio-y-o-aislaci-n-de-mica
    # 7. 1-para-protecci-n-mecanica
    # 8. 2-para-evitar-interferencias-interlock
    # 9. 1-desarrollos-a-medida
    # 10. 2-ascensor
    # 11. 3-puente-grua
    # 12. 4-utp-ftp-coaxiales-fibra-optica
    # 13. 2-para-bomba-sumergible
    # 14. 3-para-variador-de-frecuencia
    
    replacements = {
        '1-instrumentaci-n-electronica': "['Cables Industriales']",
        '2-automatizaci-n': "['Cables Industriales']",
        '3-cable-comando': "['Cables Industriales']",
        '1-solares': "['Cables Alta Temperatura']",
        '2-siliconados': "['Cables Alta Temperatura']",
        '3-fibra-de-vidrio-y-o-aislaci-n-de-mica': "['Cables Alta Temperatura']",
        '1-para-protecci-n-mecanica': "['Cables Armados']",
        '2-para-evitar-interferencias-interlock': "['Cables Armados']",
        '1-desarrollos-a-medida': "['Cables Especiales']",
        '2-ascensor': "['Cables Especiales']",
        '3-puente-grua': "['Cables Especiales']",
        '4-utp-ftp-coaxiales-fibra-optica': "['Cables Especiales']",
        '2-para-bomba-sumergible': "['Cables de Potencia']",
        '3-para-variador-de-frecuencia': "['Cables de Potencia']"
    }
    
    new_content = content
    for prod_id, new_path in replacements.items():
        # Find product start
        start_pos = new_content.find(f"id: '{prod_id}'")
        if start_pos == -1:
            print(f"Product {prod_id} not found!")
            continue
            
        # Find opening brace before id
        open_brace = new_content.rfind('{', 0, start_pos)
        
        # Find closing brace
        brace_count = 0
        close_brace = -1
        for i in range(open_brace, len(new_content)):
            if new_content[i] == '{':
                brace_count += 1
            elif new_content[i] == '}':
                brace_count -= 1
                if brace_count == 0:
                    close_brace = i
                    break
                    
        if close_brace == -1:
            print(f"Closing brace not found for {prod_id}!")
            continue
            
        product_block = new_content[open_brace : close_brace + 1]
        
        # Replace categoryPath in this block
        # categoryPath: [...]
        pat = r"(categoryPath\s*:\s*\[).*?(\])"
        new_block, count = re.subn(pat, rf"\g<1>{new_path[1:-1]}\g<2>", product_block)
        
        if count > 0:
            new_content = new_content[:open_brace] + new_block + new_content[close_brace + 1:]
            print(f"Updated categoryPath for {prod_id} to {new_path}")
        else:
            print(f"categoryPath not found in block for {prod_id}!")
            
    with open('services/data.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("Done fixing category paths!")

if __name__ == '__main__':
    fix_paths()
