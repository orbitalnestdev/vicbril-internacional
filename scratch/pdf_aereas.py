import fitz
import os

base = r'c:\Users\azcur\OneDrive\Documentos\PROYECTOS\vicbril-internacional\public\images\ProductosNuevos\2-LINEAS AEREAS'
out_base = r'c:\Users\azcur\OneDrive\Documentos\PROYECTOS\vicbril-internacional\scratch\aereas_pages'
os.makedirs(out_base, exist_ok=True)

pdfs = [
    ('preensamblado', r'1-ENVAINADOS\1-PREENSAMBLADOS DE ALUMINIO\FICHA TECNICA\ficha tecnica a modificar.pdf'),
    ('acometida_cobre', r'1-ENVAINADOS\2-ACOMETIDAS DE COBRE\FICHA TECNICA\ficha tecnica a modificar.pdf'),
    ('concentrico', r'1-ENVAINADOS\3-CONCENTRICOS (ANTIHURTO)\2-CONCENTRICOS COBRE\FICHA TECNICA\ficha tecnica a modificar.pdf'),
    ('desnudo_aluminio', r'2-DESNUDOS\1-CABLE DESNUDO DE ALUMINIO\FICHA TECNICA\ficha tecnica a modificar.pdf'),
    ('desnudo_cobre', r'2-DESNUDOS\2-CABLE DESNUDO DE COBRE DURO\FICHA TECNICA\ficha tecnica a modificar.pdf'),
    ('aluminio_acero', r'2-DESNUDOS\3-CABLE ALUMINIO-ACERO\FICHA TECNICA\ficha tecnica a modificar.pdf'),
]

for name, rel_path in pdfs:
    pdf_path = os.path.join(base, rel_path)
    if not os.path.exists(pdf_path):
        print(f"NO ENCONTRADO: {pdf_path}")
        continue
    out_dir = os.path.join(out_base, name)
    os.makedirs(out_dir, exist_ok=True)
    doc = fitz.open(pdf_path)
    print(f"{name}: {len(doc)} página(s)")
    for i, page in enumerate(doc):
        pix = page.get_pixmap(dpi=160)
        out_path = os.path.join(out_dir, f"page_{i+1}.png")
        pix.save(out_path)
    doc.close()
    print(f"  -> OK guardado en {out_dir}")
