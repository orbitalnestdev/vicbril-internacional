import re
import os

data_path = 'services/data.ts'

if not os.path.exists(data_path):
    print(f"Error: {data_path} not found.")
    exit(1)

with open(data_path, 'r', encoding='utf-8') as f:
    content = f.read()

def repl_func(match):
    cat = match.group(1)
    sub = match.group(2)
    
    # Clean up standard characters
    cat_clean = cat.replace('Instalacián', 'Instalación').replace('Instalación', 'Instalación')
    
    if 'Civil' in cat_clean:
        if 'UNIPOLAR' in sub:
            path = "['Cables para Instalación Civil', 'Unipolar']"
        elif 'BIPOLAR' in sub:
            path = "['Cables para Instalación Civil', 'Bipolar']"
        elif 'TALLER' in sub:
            path = "['Cables para Instalación Civil', 'Tipo Taller']"
        else:
            path = f"['Cables para Instalación Civil', '{sub}']"
    elif 'Aérea' in cat_clean or 'Aerea' in cat_clean:
        if 'ENVAINADOS' in sub:
            path = "['Cables Instalación Aérea', 'Envainados']"
        elif 'DESNUDOS' in sub:
            path = "['Cables Instalación Aérea', 'Desnudos']"
        else:
            path = f"['Cables Instalación Aérea', '{sub}']"
    else:
        path = f"['{cat_clean}', '{sub}']"
    return f"categoryPath: {path},"

# Replace category followed by subCategory
content_updated = re.sub(r"category:\s*'([^']+)',\s*subCategory:\s*'([^']+)',?", repl_func, content, flags=re.DOTALL)

with open(data_path, 'w', encoding='utf-8') as f:
    f.write(content_updated)

print("Converted category and subCategory to categoryPath in services/data.ts")
