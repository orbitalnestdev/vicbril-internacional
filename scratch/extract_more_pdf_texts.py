import fitz
import os

pdf_paths = {
    'subte_al_xlpe': 'public/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO ALUMINIO/SUBTERRANEO XLPE/FICHA TECNICA/ficha tecnica subte aluminio xlpe.pdf',
    'subte_cu_xlpe': 'public/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO COBRE/SUBTERRANEO XLPE/FICHA TECNICA/ficha tecnica subte cobre xlpe.pdf',
    'bomba': 'public/images/ProductosNuevos/3-CABLES DE POTENCIA/2-PARA BOMBA SUMERGIBLE/FICHA TECNICA BOMBA SUMERGIBLE.pdf',
    'vdf': 'public/images/ProductosNuevos/3-CABLES DE POTENCIA/3-PARA VARIADOR DE FRECUENCIA/FICHA TECNICA VDF.pdf',
    'mt_132_al': 'public/images/ProductosNuevos/4- CABLES DE MEDIA TENSION/CABLES MEDIA TENSION ALUMINIO/13,2 KV/FICHA TECNICA MT 13.2KV ALUMINIO.pdf',
    'mt_33_al': 'public/images/ProductosNuevos/4- CABLES DE MEDIA TENSION/CABLES MEDIA TENSION ALUMINIO/33 KV/FICHA TECNICA MT 33KV ALUMINIO.pdf',
    'mt_132_cu': 'public/images/ProductosNuevos/4- CABLES DE MEDIA TENSION/CABLES MEDIA TENSION COBRE/13,2 KV/FICHA TECNICA MT 13.2KV COBRE.pdf',
    'mt_33_cu': 'public/images/ProductosNuevos/4- CABLES DE MEDIA TENSION/CABLES MEDIA TENSION COBRE/33 KV/FICHA TECNICA MT 33KV COBRE.pdf'
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
