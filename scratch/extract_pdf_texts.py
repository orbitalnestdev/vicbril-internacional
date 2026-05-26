import fitz
import os

pdf_paths = {
    'instrumentar': 'public/images/ProductosNuevos/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/FICHA TECNICA/FICHA TECNICA INSTRUMENTAR.pdf',
    'automatizar': 'public/images/ProductosNuevos/5-CABLES INDUSTRIALES/2-AUTOMATIZACIÓN/FICHA TECNICA/FICHA TECNICA AUTOMATIZAR.pdf',
    'comando': 'public/images/ProductosNuevos/5-CABLES INDUSTRIALES/3-CABLE COMANDO/FICHA TECNICA/FICHA TECNICA COMANDO.pdf'
}

for name, path in pdf_paths.items():
    if not os.path.exists(path):
        print(f"Not found: {path}")
        continue
    try:
        doc = fitz.open(path)
        print(f"--- {name} ({len(doc)} pages) ---")
        
        # Dump all text to a file
        out_path = f"scratch/text_{name}.txt"
        with open(out_path, 'w', encoding='utf-8') as f:
            for page_num in range(len(doc)):
                f.write(f"\n--- PAGE {page_num+1} ---\n")
                f.write(doc[page_num].get_text("text"))
        print(f"Saved text to {out_path}")
    except Exception as e:
        print(f"Error on {name}: {e}")
