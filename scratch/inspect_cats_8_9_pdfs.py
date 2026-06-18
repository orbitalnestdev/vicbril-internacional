import os
import pypdf

DIRS = [
    r"public/images/ProductosNuevos/8-CABLES ESPECIALES",
    r"public/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS"
]
output_file = r"scratch/cats_8_9_text.txt"

with open(output_file, "w", encoding="utf-8") as out:
    for base_dir in DIRS:
        out.write(f"\n==================================================\n")
        out.write(f"BASE DIRECTORY: {base_dir}\n")
        out.write(f"==================================================\n")
        for root, dirs, files in os.walk(base_dir):
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
                        for page_idx in range(num_pages):
                            out.write(f"--- PAGE {page_idx + 1} ---\n")
                            text = reader.pages[page_idx].extract_text()
                            if text:
                                out.write(text + "\n")
                            else:
                                out.write("[No text extracted]\n")
                    except Exception as e:
                        out.write(f"ERROR: {str(e)}\n")

print(f"Inspection written to {output_file}")
