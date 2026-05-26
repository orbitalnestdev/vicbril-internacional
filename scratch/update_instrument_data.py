import json
import re

def update_instrument_product():
    # Load the JSON tables
    with open('scratch/instrument_tables.json', 'r', encoding='utf-8') as f:
        tables = json.load(f)
        
    # Convert tables to JS format string
    # We will format the JS array by hand or serialize it and adjust quotes
    js_tables = json.dumps(tables, indent=6, ensure_ascii=False)
    # Convert JSON keys to JS object keys (no quotes around keys if possible, but double/single quotes is fine too)
    # Let's keep it as valid JS
    
    with open('services/data.ts', 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Let's find the start of the product object with id '1-instrumentaci-n-electronica'
    # and its ending brace.
    start_pos = content.find("id: '1-instrumentaci-n-electronica'")
    if start_pos == -1:
        print("Product not found!")
        return
        
    # Find the products array boundary or just locate the closing brace of the product
    # Let's find where the product starts (which is the brace '{' before the id)
    # We scan backwards from start_pos to find the opening '{'
    open_brace_idx = content.rfind('{', 0, start_pos)
    
    # Now find the matching closing brace '}' for this product.
    # We track the braces count starting from open_brace_idx
    brace_count = 0
    close_brace_idx = -1
    for i in range(open_brace_idx, len(content)):
        char = content[i]
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                close_brace_idx = i
                break
                
    if close_brace_idx == -1:
        print("Could not find matching closing brace!")
        return
        
    product_block = content[open_brace_idx : close_brace_idx + 1]
    
    # Let's rebuild the product block using the updated details.
    # We will define the product attributes with clean accents (UTF-8).
    new_product_block = f"""{{
    id: '1-instrumentaci-n-electronica',
    name: '1- INSTRUMENTACIÓN ELECTRÓNICA',
    categoryPath: ['Cables Industriales', 'Instrumentación Electrónica'],
    description: 'Circuitos de instrumentación electrónica, señales digitales y analógicas (4-20mA).',
    detailedDescription: `DESCRIPCIÓN
Circuitos de instrumentación electrónica, señales digitales y analógicas (4-20mA). Circuitos de seguridad intrínseca. Detección de pérdidas de gas y/o fluidos. Medición y monitoreo de presión, temperatura, volumen. Monitoreo de señales de alarma.

APLICACIONES
Instalados en conduits, bandeja, escalera, al aire libre directo o bajo techo, enterrado en trinchera o en ductos.`,
    image: '/images/ProductosNuevos/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/portada.jpeg',
    gallery: [],
    pdf: '/images/ProductosNuevos/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/FICHA TECNICA/FICHA TECNICA INSTRUMENTAR.pdf',
    specs: ['300 Volt', 'Cu 22 a 12 AWG', 'PVC 105°C / PVC'],
    characteristics: [
      'Temperatura máxima: 105°C de servicio',
      'Tensión nominal: 300 Volt',
      'Norma constructiva: UL 13 tipo PLTC - UL 2250 tipo ITC',
      'Norma de conductores: ASTM B8 Clase B',
      'Conductor: Cobre electrolítico recocido en formación de 7 hilos',
      'Aislación: PVC',
      'Paso del trenzado: 50mm (20 torsiones por metro)',
      'Blindaje: Cinta aluminio-poliéster más conductor de drenaje de cobre estañado',
      'Cubierta: PVC no propagante del incendio, resistente a la luz solar e hidrocarburos',
      'Norma de fuego: UL 1685',
      'Norma hidrocarburos: NFC 32-200 - ASTM D 1239',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Código NEC (NFPA 70): Art. 725 PLTC – Art. 727 ITC – Art. 800 CM – Art. 501 áreas clasificadas CL1 Div.2 y Cl2 Div.2'
    ],
    specsTables: {js_tables},
    certifications: ['no-propagacion', 'resistente-uv', 'temperatura-servicio'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  }}"""
  
    # Replace in content
    new_content = content[:open_brace_idx] + new_product_block + content[close_brace_idx + 1:]
    
    with open('services/data.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("Product 1-instrumentaci-n-electronica updated successfully in services/data.ts!")

if __name__ == '__main__':
    update_instrument_product()
