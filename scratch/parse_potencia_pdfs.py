import fitz
import sys

pdfs = [
    ("subterraneo-pvc-aluminio", "public/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO ALUMINIO/SUBTERRANEO PVC/FICHA TECNICA/ficha tecnica subte aluminio pvc.pdf"),
    ("subterraneo-lsoh-cobre", "public/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO COBRE/SUBTERRANEO LSOH/FICHA TECNICA/ficha tecnica subte cobre lsoh.pdf"),
    ("subterraneo-pvc-cobre", "public/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO COBRE/SUBTERRANEO PVC/FICHA TECNICA/ficha tecnica subte cobre pvc.pdf")
]

for pid, path in pdfs:
    sys.stdout.buffer.write(f"\n=====================================\nID: {pid}\nPath: {path}\n=====================================\n".encode('utf-8'))
    try:
        doc = fitz.open(path)
        for i in range(min(2, len(doc))):
            sys.stdout.buffer.write(f"--- PAGE {i} ---\n".encode('utf-8'))
            text = doc[i].get_text('text')
            sys.stdout.buffer.write(text.encode('utf-8', errors='replace'))
    except Exception as e:
        sys.stdout.buffer.write(f"Error: {e}\n".encode('utf-8'))
