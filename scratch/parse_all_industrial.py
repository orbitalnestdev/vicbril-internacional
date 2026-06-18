import os
import re
import json
import pypdf

BASE_DIR = r"public/images/PRODUCTOS/5-CABLES INDUSTRIALES"
OUTPUT_JSON = r"scratch/industrial_parsed.json"

def clean_name(name):
    # Strip leading numbers like "1-", "2- ", etc.
    name = re.sub(r'^\d{1,2}[-_\s]+', '', name)
    # Title Case adjustments
    name = name.strip()
    name = name.replace("mm2", "mm²").replace("MM2", "mm²").replace("Mm2", "mm²")
    # Replace special words
    if name.upper() == "LSOH":
        return "LSOH"
    if name.upper() == "EPR":
        return "EPR"
    if name.upper() == "PVC":
        return "PVC"
    if name.upper() == "XLPE":
        return "XLPE"
    
    # Capitalize nicely
    words = []
    for w in name.split():
        if w.upper() in ["LSOH", "SWA", "EPR", "PVC", "XLPE", "AWG", "VDF", "RS", "UTP", "FTP", "CCTV", "MM²", "MM2"]:
            words.append(w.upper())
        elif w.lower() in ["de", "a", "y", "o", "para", "con", "en"]:
            words.append(w.lower())
        else:
            words.append(w.capitalize())
    return " ".join(words)

def clean_category(name):
    # Remove leading numbers and strip whitespace
    name = re.sub(r'^\d{1,2}[-_\s]+', '', name).strip()
    name_lower = name.lower()
    
    if "instrumentaci" in name_lower:
        return "Instrumentación Electrónica"
    if "automatizaci" in name_lower:
        return "Automatización"
    if "comando blindado" in name_lower:
        return "Comando Blindado"
    if "comando" in name_lower:
        return "Cable Comando"
    if "libre halogeno" in name_lower or "libre de halogeno" in name_lower or "libre de halógeno" in name_lower:
        return "Libre de Halógenos"
    if "resistente incendio" in name_lower or "resistente a incendio" in name_lower:
        return "Resistente a Incendios"
    if "alarma" in name_lower:
        return "Alarma de Incendio"
    if "multipolar mm" in name_lower:
        return "Multipolar mm²"
    if "multipolar awg" in name_lower:
        return "Multipolar AWG"
    if "multipolar" in name_lower:
        return "Multipolar"
    if name_lower == "mm2" or name_lower == "mm²":
        return "mm²"
    if name_lower == "awg":
        return "AWG"
        
    return clean_name(name)

def get_pdf_and_image(folder_path):
    pdf_file = None
    image_file = None
    gallery = []
    
    for f in os.listdir(folder_path):
        f_path = os.path.join(folder_path, f)
        if os.path.isdir(f_path):
            continue
        if f.lower().endswith(".pdf"):
            pdf_file = f
        elif f.lower().endswith((".jpeg", ".jpg", ".png")):
            if "portada" in f.lower():
                image_file = f
            elif "foto" in f.lower() or "variante" in f.lower() or "whatsapp" in f.lower():
                gallery.append(f)
            else:
                if not image_file:
                    image_file = f
                else:
                    gallery.append(f)
                    
    return pdf_file, image_file, gallery

def parse_pdf_data(pdf_path):
    try:
        # Resolve long paths on Windows
        import os
        abs_path = os.path.abspath(pdf_path)
        if os.name == 'nt':
            abs_path = '\\\\?\\' + abs_path
        reader = pypdf.PdfReader(abs_path)
        first_page_text = reader.pages[0].extract_text() or ""
        
        # Extract title/specs
        lines = [l.strip() for l in first_page_text.split("\n") if l.strip()]
        
        # Extract specs (look at the first 10 lines for things like Volt, AWG, °C, etc.)
        specs = []
        for line in lines[:10]:
            volt_match = re.search(r'\b\d+\s*(?:Volt|V|kV)\b', line, re.IGNORECASE)
            awg_match = re.search(r'\b\d+\s*(?:a|to)\s*\d+\s*(?:AWG|mm²)\b', line, re.IGNORECASE)
            temp_match = re.search(r'\b\d+°C\b', line)
            
            if volt_match:
                specs.append(volt_match.group(0))
            if awg_match:
                specs.append(awg_match.group(0))
            if temp_match:
                specs.append(temp_match.group(0))
                
        # Fallback to general search in the first page
        if not specs:
            volts = re.findall(r'\b\d+\s*Volt\b', first_page_text, re.IGNORECASE)
            temps = re.findall(r'\b\d+°C\b', first_page_text)
            conductors = re.findall(r'\b(?:Cu|Cobre)\s+\d+.*?\b(?:AWG|mm²)\b', first_page_text, re.IGNORECASE)
            
            if volts: specs.append(volts[0])
            if temps: specs.append(temps[0])
            if conductors: specs.append(conductors[0])
            
        # Clean specs list
        specs = list(set(specs))
        
        # Extract description / applications
        description = ""
        detailed_description = ""
        
        # Applications and Description match with robust wildcards for accents and newlines
        app_match = re.search(r'APLICACIONES\s*(.*?)(?:\n\s*(?:CARACTER.STICAS|IDENTIFICACI.N|CONSTRUCCI|$))', first_page_text, re.DOTALL | re.IGNORECASE)
        desc_match = re.search(r'DESCRIPCI.N\s*(.*?)(?:\n\s*(?:APLICACIONES|CARACTER.STICAS|CONSTRUCCI|$))', first_page_text, re.DOTALL | re.IGNORECASE)
        
        app_text = app_match.group(1).strip() if app_match else ""
        desc_text = desc_match.group(1).strip() if desc_match else ""
        
        if desc_text:
            description = desc_text.split(".")[0] + "."
            detailed_description = f"DESCRIPCIÓN\n{desc_text}\n\nAPLICACIONES\n{app_text}"
        else:
            # Try to grab lines 4-7 from lines list
            if len(lines) > 5:
                description = lines[4]
                detailed_description = "\n".join(lines[3:8])
                
        # Extract characteristics with robust wildcards and line-start boundaries
        characteristics = []
        char_section = re.search(r'CARACTER.STICAS\s*(.*?)(?:\n\s*(?:IDENTIFICACI.N|CONSTRUCCI|VARIANTES|NORMAS|APLICACI|DESCRIPCI|INSTALACI)|$)', first_page_text, re.DOTALL | re.IGNORECASE)
        if char_section:
            char_text = char_section.group(1).strip()
            # Split by line
            for line in char_text.split("\n"):
                line = line.strip()
                if line and len(line) > 10:
                    characteristics.append(line)
        else:
            characteristics = [
                "Temperatura máxima de servicio según norma constructiva.",
                "Excelente resistencia a la propagación del incendio.",
                "Cubierta externa de alta durabilidad y protección física."
            ]
            
        return specs, description, detailed_description, characteristics
    except Exception as e:
        print(f"Error parsing PDF {pdf_path}: {e}")
        return [], "Cables para aplicaciones industriales.", "Descripción detallada no disponible.", []

def main():
    products = []
    
    # We will traverse the folders recursively
    for root, dirs, files in os.walk(BASE_DIR):
        # Skip folders named "FICHA TECNICA" or "FICHA_TECNICA"
        folder_name = os.path.basename(root).upper()
        if folder_name in ["FICHA TECNICA", "FICHA_TECNICA"]:
            continue
            
        # We only treat folders that contain at least one PDF as product folders
        has_pdf = any(f.lower().endswith(".pdf") for f in files)
        if not has_pdf:
            continue
            
        # Get path relative to BASE_DIR
        rel_path = os.path.relpath(root, BASE_DIR)
        path_parts = rel_path.split(os.sep)
        
        # Skip top level categories if they contain PDFs directly (but we don't have that)
        if len(path_parts) < 2:
            continue
            
        # Build categoryPath
        # e.g. path_parts: ["1- INSTRUMENTACIÓN ELECTRONICA", "1-LIBRE HALOGENOS", "1-LSOH"]
        # categoryPath: ["Cables Industriales", "Instrumentación Electrónica", "Libre de Halógenos"]
        category_path = ["Cables Industriales"]
        for p in path_parts[:-1]:
            category_path.append(clean_category(p))
            
        product_name = clean_name(path_parts[-1])
        
        # Product ID
        def make_id(parts):
            cleaned_parts = []
            for p in parts:
                p_clean = re.sub(r'^\d+[-_\s]+', '', p)
                p_clean = p_clean.lower().strip()
                p_clean = re.sub(r'[\s_]+', '-', p_clean)
                accents = {
                    'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
                    'ñ': 'n', 'ü': 'u'
                }
                for k, v in accents.items():
                    p_clean = p_clean.replace(k, v)
                p_clean = re.sub(r'[^\w-]', '', p_clean)
                p_clean = re.sub(r'-+', '-', p_clean)
                cleaned_parts.append(p_clean)
            full_id = "industrial-" + "-".join(cleaned_parts)
            return re.sub(r'-+', '-', full_id).strip('-')

        product_id = make_id(path_parts)
        
        # Get PDF and image paths
        pdf_file, image_file, gallery_files = get_pdf_and_image(root)
        
        # Use relative path starting from "public" so it becomes "/images/..."
        root_rel = os.path.relpath(root, "public").replace("\\", "/")
        
        pdf_path = f"/{root_rel}/{pdf_file}" if pdf_file else None
        image_path = f"/{root_rel}/{image_file}" if image_file else None
        gallery = [f"/{root_rel}/{g}" for g in gallery_files]
        
        # Parse PDF content
        specs, description, detailed_desc, characteristics = [], "", "", []
        if pdf_file:
            full_pdf_path = os.path.join(root, pdf_file)
            specs, description, detailed_desc, characteristics = parse_pdf_data(full_pdf_path)
            
        # Add basic specs fallbacks if empty
        if not specs:
            specs = ["Industrial", "300 V / 600 V"]
            
        # If no image found, use root portada or fallback
        if not image_path:
            image_path = "/images/PRODUCTOS/5-CABLES INDUSTRIALES/portada.jpeg"
            
        # Clean detailed desc backticks
        detailed_desc = detailed_desc.replace("`", "'")
        
        prod_data = {
            "id": product_id,
            "name": product_name,
            "categoryPath": category_path,
            "description": description,
            "detailedDescription": detailed_description_builder(description, detailed_desc),
            "image": image_path,
            "gallery": gallery,
            "pdf": pdf_path,
            "specs": specs,
            "characteristics": characteristics,
            "certifications": ["iram", "seguridad", "no-propagacion"]
        }
        
        products.append(prod_data)
        
    # Write to JSON
    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(products, f, indent=2, ensure_ascii=False)
        
    print(f"Parsed {len(products)} products and saved to {OUTPUT_JSON}")

def detailed_description_builder(desc, detailed):
    if detailed:
        return detailed
    return f"DESCRIPCIÓN\n{desc}\n\nAPLICACIONES\nInstalación fija en ductos, bandejas portacables o al aire libre según especificaciones técnicas."

if __name__ == '__main__':
    main()
