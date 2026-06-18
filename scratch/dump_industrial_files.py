import os

DIR = r"public/images/PRODUCTOS/5-CABLES INDUSTRIALES"
output_file = r"scratch/industrial_files_list.txt"

with open(output_file, "w", encoding="utf-8") as out:
    for root, dirs, files in os.walk(DIR):
        for file in files:
            full_path = os.path.join(root, file)
            rel_path = os.path.relpath(full_path, ".")
            out.write(rel_path.replace("\\", "/") + "\n")

print(f"List written to {output_file}")
