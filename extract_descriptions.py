import json
import re
import fitz
import os

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

matches = re.finditer(r'(id:\s*\'([^\']+)\'.*?description:\s*\')Descripci[^\']*\'(.*?detailedDescription:\s*\')Detalles a completar.\'(.*?pdf:\s*\'([^\']+)\')', content, re.DOTALL | re.IGNORECASE)

new_content = content
for match in matches:
    full_str = match.group(0)
    prod_id = match.group(2)
    pdf_path = match.group(5)
    
    # Add public/
    pdf_path_real = 'public' + pdf_path
    if not os.path.exists(pdf_path_real):
        print(f'File not found: {pdf_path_real}')
        continue
        
    try:
        doc = fitz.open(pdf_path_real)
        text = doc[0].get_text('text')
        
        desc_match = re.search(r'(?:Usos|APLICACIONES)[:\s]*([^\n]+\n?[^\n]*\n?[^\n]*)', text, re.IGNORECASE)
        desc = 'Cables de energía y potencia para múltiples aplicaciones.'
        if desc_match:
            desc = desc_match.group(1).strip().replace('\n', ' ')
        
        if len(desc) > 120:
            desc = desc[:117] + '...'
            
        det_desc = desc
        normas_match = re.search(r'(?:Normas|Norma)[:\s]*([^\n]+)', text, re.IGNORECASE)
        if normas_match:
            det_desc += f' Normas: {normas_match.group(1).strip()}'
            
        first_p_match = re.search(r'(Cables [^\n]+\n?[^\n]+)', text, re.IGNORECASE)
        if first_p_match:
            det_desc = first_p_match.group(1).strip().replace('\n', ' ') + ' ' + det_desc

        desc = desc.replace("'", "\\'")
        det_desc = det_desc.replace("'", "\\'")

        new_str = re.sub(r'description:\s*\'[^\']*\'', f"description: '{desc}'", full_str)
        new_str = re.sub(r'detailedDescription:\s*\'[^\']*\'', f"detailedDescription: '{det_desc}'", new_str)
        
        new_content = new_content.replace(full_str, new_str)
        print(f'Extracted data for {prod_id}')
    except Exception as e:
        print(f'Error on {prod_id}: {e}')

with open('services/data.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)
