import fitz, os

pdf_path = r'c:\Users\azcur\OneDrive\Documentos\PROYECTOS\vicbril-internacional\public\images\ProductosNuevos\3-CABLES DE POTENCIA\1-SUBTERRANEOS\SUBTERRANEO ALUMINIO\SUBTERRANEO LSOH\FICHA TECNICA\ficha tecnica subte aluminio lsoh.pdf'
out_dir = r'c:\Users\azcur\OneDrive\Documentos\PROYECTOS\vicbril-internacional\scratch\subte_lsoh_al'
os.makedirs(out_dir, exist_ok=True)
doc = fitz.open(pdf_path)
print(f"Total páginas: {len(doc)}")
for i, page in enumerate(doc):
    pix = page.get_pixmap(dpi=170)
    out_path = os.path.join(out_dir, f'page_{i+1}.png')
    pix.save(out_path)
    print(f"  page_{i+1}.png guardada")
doc.close()
