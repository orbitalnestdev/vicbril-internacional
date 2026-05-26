import fitz
from PIL import Image
import pytesseract
import io

pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

pdf_path = r'c:\Users\azcur\OneDrive\Documentos\PROYECTOS\vicbril-internacional\public\images\ProductosNuevos\1-CABLES PARA INSTALACION CIVIL\2-CABLE BIPOLAR\CABLE PARALELO\FICHA TECNICA PARALELO\FICHA TECNICA PARALELO.pdf'

doc = fitz.open(pdf_path)
for i, page in enumerate(doc):
    pix = page.get_pixmap(dpi=200)
    img = Image.open(io.BytesIO(pix.tobytes("png")))
    text = pytesseract.image_to_string(img, lang='spa')
    print(f"\n=== PÁGINA {i+1} ===")
    print(text)
doc.close()
