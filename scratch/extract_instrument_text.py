import fitz  # PyMuPDF
import json

def extract_pdf_data(pdf_path):
    doc = fitz.open(pdf_path)
    print(f"Number of pages: {len(doc)}")
    
    all_text = ""
    for i, page in enumerate(doc):
        text = page.get_text()
        print(f"--- Page {i+1} ---")
        print(text[:300])
        all_text += f"\n--- Page {i+1} ---\n" + text
        
    with open('scratch/instrument_text.txt', 'w', encoding='utf-8') as f:
        f.write(all_text)

if __name__ == '__main__':
    pdf_path = 'public/images/ProductosNuevos/5-CABLES INDUSTRIALES/1- INSTRUMENTACIN ELECTRONICA/FICHA TECNICA/FICHA TECNICA INSTRUMENTAR.pdf'
    # Wait, let's make sure the path encoding is correct. In Windows it might be with the special character or we can glob it.
    import glob
    files = glob.glob('public/images/ProductosNuevos/5-CABLES INDUSTRIALES/1- INSTRUMENT*/**/*.pdf', recursive=True)
    print("Found PDFs:", files)
    if files:
        extract_pdf_data(files[0])
    else:
        # try another glob
        files = glob.glob('public/images/ProductosNuevos/**/FICHA TECNICA INSTRUMENTAR.pdf', recursive=True)
        print("Found PDFs retry:", files)
        if files:
            extract_pdf_data(files[0])
