# Python script to check if the civil tables in data.ts are complete compared to the PDFs

import re

# Read data.ts
with open('services/data.ts', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Helper to find a product block by id
def get_product_block(prod_id):
    start = data_content.find(f"id: '{prod_id}'")
    if start == -1:
        return None
    open_brace = data_content.rfind('{', 0, start)
    brace_count = 0
    for i in range(open_brace, len(data_content)):
        if data_content[i] == '{':
            brace_count += 1
        elif data_content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                return data_content[open_brace : i + 1]
    return None

# List of products to check
prods = {
    'unipolar-pvc': 'scratch/civil_1-cable_unipolar_unipolar_pvc_ficha_tecnica_unipolar_pvc_ficha_tecnica_unip_pvc_(reemplazar_foto_de_abajo).pdf.txt',
    'unipolar-lsoh': 'scratch/civil_1-cable_unipolar_unipolar_lsoh_ficha_tecnica_unipolar_lsoh_ficha_tecnica_unip._lsoh_(reemplazar_foto).pdf.txt',
    'bipolar-vaina-chata': 'scratch/civil_2-cable_bipolar_cable_envainado_chato_ficha_tecnica_vaina_chata_ficha_tecnica_vaina_chata.pdf.txt',
    'bipolar-paralelo': 'scratch/civil_2-cable_bipolar_cable_paralelo_ficha_tecnica_paralelo_ficha_tecnica_paralelo.pdf.txt',
    'bipolar-paralelo-parlante': 'scratch/civil_2-cable_bipolar_cable_paralelo_parlante_ficha_tecnica_paralelo_parlante_ficha_tecnica_paralelo_parlante.pdf.txt',
    'civil-03': 'scratch/civil_3-cable_tipo_taller_ficha_tecnica_tipo_taller_ficha_tecnica_tipo_taller_(reemplazar_foto).pdf.txt'
}

for prod_id, txt_path in prods.items():
    print(f"\n================ Product: {prod_id} ================")
    block = get_product_block(prod_id)
    if not block:
        print("Product block not found in data.ts!")
        continue
    
    # Check what specsTables we have
    # We can match all titles
    titles = re.findall(r"title\s*:\s*['\"`](.*?)['\"`]", block)
    print(f"Tables in data.ts ({len(titles)}): {', '.join(titles)}")
    
    # Read PDF text
    try:
        with open(txt_path, 'r', encoding='utf-8') as f:
            pdf_text = f.read()
        
        # Print first page or some statistics
        print(f"PDF text size: {len(pdf_text)} characters")
        
        # Search for lines that look like numbers (sections)
        # to see if the PDF text has other sections
        # e.g., let's look for "0,5" or "0.5" or "1,5" etc.
        sections = re.findall(r"\b\d+,\d+|\b\d+\b", pdf_text)
        print(f"Some sections or numbers found in PDF: {set([s for s in sections if ',' in s][:15])}")
        
    except Exception as e:
        print(f"Error reading PDF text {txt_path}: {e}")
