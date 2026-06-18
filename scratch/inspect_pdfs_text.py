import os
import pypdf

DIR = r"public/images/PRODUCTOS/5-CABLES INDUSTRIALES"
output_file = r"scratch/industrial_pdfs_inspection.txt"

with open(output_file, "w", encoding="utf-8") as out:
    for root, dirs, files in os.walk(DIR):
        for file in files:
            if file.lower().endswith(".pdf"):
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, ".").replace("\\", "/")
                out.write(f"\n=========================================\n")
                out.write(f"PDF PATH: {rel_path}\n")
                out.write(f"=========================================\n")
                try:
                    reader = pypdf.PdfReader(full_path)
                    num_pages = len(reader.pages)
                    out.write(f"Total Pages: {num_pages}\n\n")
                    # Extract text from page 1 and page 2 (if exists)
                    for page_idx in range(min(num_pages, 2)):
                        out.write(f"--- PAGE {page_idx + 1} ---\n")
                        text = reader.pages[page_idx].extract_text()
                        if text:
                            out.write(text[:1500] + "\n")
                        else:
                            out.write("[No text extracted]\n")
                except Exception as e:
                    out.write(f"ERROR: {str(e)}\n")

print(f"Inspection written to {output_file}")
