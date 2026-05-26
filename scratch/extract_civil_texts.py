import os
import fitz # PyMuPDF

civil_dir = 'public/images/ProductosNuevos/1-CABLES PARA INSTALACION CIVIL'

for root, dirs, files in os.walk(civil_dir):
    for file in files:
        if file.lower().endswith('.pdf'):
            pdf_path = os.path.join(root, file)
            # Create a simple clean filename for the text dump
            # e.g., unipolar_pvc.pdf.txt
            rel = os.path.relpath(pdf_path, civil_dir).replace('\\', '_').replace(' ', '_').lower()
            txt_path = os.path.join('scratch', f"civil_{rel}.txt")
            
            print(f"Extracting {pdf_path} -> {txt_path} ...")
            try:
                doc = fitz.open(pdf_path)
                text_content = []
                for idx, page in enumerate(doc):
                    text_content.append(f"--- PAGE {idx+1} ---")
                    text_content.append(page.get_text())
                
                with open(txt_path, 'w', encoding='utf-8') as f:
                    f.write('\n'.join(text_content))
            except Exception as e:
                print(f"Error extracting {pdf_path}: {e}")
