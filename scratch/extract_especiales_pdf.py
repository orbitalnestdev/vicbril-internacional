import os
import pypdf

def extract_pdf_text(pdf_path):
    print(f"Extracting: {pdf_path}")
    text = ""
    try:
        reader = pypdf.PdfReader(pdf_path)
        for i, page in enumerate(reader.pages):
            text += f"--- Page {i+1} ---\n"
            text += page.extract_text() + "\n"
    except Exception as e:
        text = f"Error extracting {pdf_path}: {e}"
    return text

pdf_files = [
    "public/images/ProductosNuevos/8-CABLES ESPECIALES/1-MINERIA/FICHA TECNICA.pdf",
    "public/images/ProductosNuevos/8-CABLES ESPECIALES/2-ASCENSOR/FICHA TECNICA.pdf",
    "public/images/ProductosNuevos/8-CABLES ESPECIALES/3-FIBRA OPTICA/FICHA TECNICA.pdf"
]

with open("scratch/especiales_extracted.txt", "w", encoding="utf-8") as out:
    for pdf_path in pdf_files:
        if os.path.exists(pdf_path):
            out.write(f"=== FILE: {pdf_path} ===\n")
            out.write(extract_pdf_text(pdf_path))
            out.write("\n\n" + "="*80 + "\n\n")
        else:
            out.write(f"=== FILE NOT FOUND: {pdf_path} ===\n\n")

print("Done extracting PDF text to scratch/especiales_extracted.txt")
