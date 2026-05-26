import fitz  # PyMuPDF

pdf_path = r'c:\Users\azcur\OneDrive\Documentos\PROYECTOS\vicbril-internacional\public\images\ProductosNuevos\1-CABLES PARA INSTALACION CIVIL\2-CABLE BIPOLAR\CABLE PARALELO\FICHA TECNICA PARALELO\FICHA TECNICA PARALELO.pdf'

doc = fitz.open(pdf_path)
for i, page in enumerate(doc):
    print(f"\n=== PÁGINA {i+1} ===")
    print(page.get_text())
doc.close()
