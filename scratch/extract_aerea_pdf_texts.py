import fitz
import glob
import os

def extract_all():
    files = glob.glob('public/images/ProductosNuevos/2-LINEAS AEREAS/**/*.pdf', recursive=True)
    print(f"Found {len(files)} PDFs:")
    for f in sorted(files):
        print(f"  - {f}")
        
    for f_path in sorted(files):
        try:
            doc = fitz.open(f_path)
            # Make a short name for the output file
            rel_path = os.path.relpath(f_path, 'public/images/ProductosNuevos/2-LINEAS AEREAS')
            out_name = rel_path.replace(os.sep, '_').replace(' ', '_').lower() + '.txt'
            out_path = os.path.join('scratch', out_name)
            
            text = ""
            for i, page in enumerate(doc):
                text += f"\n--- PAGE {i+1} ---\n" + page.get_text()
                
            with open(out_path, 'w', encoding='utf-8') as f_out:
                f_out.write(text)
                
            print(f"Extracted {len(doc)} pages of {rel_path} to {out_path}")
        except Exception as e:
            print(f"Error extracting {f_path}: {e}")

if __name__ == '__main__':
    extract_all()
