import fitz
import io, os

# PDF de la carpeta vieja PRODUCTOS (no ProductosNuevos)
pdf_path = r'c:\Users\azcur\OneDrive\Documentos\PROYECTOS\vicbril-internacional\public\images\PRODUCTOS\2-CABLE BIPOLAR\CABLE PARALELO\FICHA TECNICA PARALELO\FICHA TECNICA PARALELO.pdf'
out_dir = r'c:\Users\azcur\OneDrive\Documentos\PROYECTOS\vicbril-internacional\scratch\paralelo_old_pages'
os.makedirs(out_dir, exist_ok=True)

doc = fitz.open(pdf_path)
print(f"Total páginas: {len(doc)}")
for i, page in enumerate(doc):
    pix = page.get_pixmap(dpi=180)
    out_path = os.path.join(out_dir, f"page_{i+1}.png")
    pix.save(out_path)
    print(f"Guardada: {out_path}")
doc.close()
