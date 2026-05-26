import fitz
import re

def parse_pdf(pdf_path):
    doc = fitz.open(pdf_path)
    
    # We want to dump all pages text to help us write the tables
    output = []
    for i in range(len(doc)):
        page = doc[i]
        text = page.get_text("blocks") # get blocks to keep layout somewhat
        output.append(f"\n================ PAGE {i+1} ================\n")
        for b in text:
            # block structure: (x0, y0, x1, y1, "text", block_no, block_type)
            output.append(b[4])
            
    with open('scratch/instrument_blocks.txt', 'w', encoding='utf-8') as f:
        f.write("\n".join(output))
    print("Done writing blocks to scratch/instrument_blocks.txt")

if __name__ == '__main__':
    import glob
    files = glob.glob('public/images/ProductosNuevos/5-CABLES INDUSTRIALES/1- INSTRUMENT*/**/*.pdf', recursive=True)
    if files:
        parse_pdf(files[0])
