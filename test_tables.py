import fitz
import re

pdfs = [
    'public/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO ALUMINIO/SUBTERRANEO LSOH/FICHA TECNICA/ficha tecnica subte aluminio lsoh.pdf',
    'public/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO COBRE/SUBTERRANEO LSOH/FICHA TECNICA/ficha tecnica subte cobre lsoh.pdf'
]

for path in pdfs:
    doc = fitz.open(path)
    full_text = ""
    for page in doc:
        full_text += page.get_text("text") + "\n"
        
    print(f"--- {path} ---")
    
    # Try to find UNIPOLARES
    unip_idx = full_text.find("UNIPOLARES")
    if unip_idx != -1:
        # Get next 50 lines
        lines = full_text[unip_idx:unip_idx+1000].split('\n')
        print("Found UNIPOLARES. Next 20 lines:")
        for line in lines[:20]:
            print(repr(line))
