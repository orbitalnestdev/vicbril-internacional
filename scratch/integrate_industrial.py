import json
import re

DATA_TS_PATH = "services/data.ts"
PARSED_JSON_PATH = "scratch/industrial_parsed.json"

def format_product_to_ts(p):
    lines = []
    lines.append("  {")
    lines.append(f"    id: {repr(p['id'])},")
    lines.append(f"    name: {repr(p['name'])},")
    
    cat_path_str = ", ".join(repr(c) for c in p['categoryPath'])
    lines.append(f"    categoryPath: [{cat_path_str}],")
    
    lines.append(f"    description: {repr(p['description'])},")
    
    if p.get('detailedDescription'):
        # escape backticks and ${} template syntax just in case
        dd_val = p['detailedDescription'].replace('`', '\\`').replace('${', '\\${')
        lines.append(f"    detailedDescription: `{dd_val}`,\n")
        
    lines.append(f"    image: {repr(p['image'])},")
    
    gallery_str = ", ".join(repr(g) for g in p.get('gallery', []))
    lines.append(f"    gallery: [{gallery_str}],")
    
    if p.get('pdf'):
        lines.append(f"    pdf: {repr(p['pdf'])},")
        
    specs_str = ", ".join(repr(s) for s in p.get('specs', []))
    lines.append(f"    specs: [{specs_str}],")
    
    char_str = ",\n      ".join(repr(c) for c in p.get('characteristics', []))
    if char_str:
        lines.append(f"    characteristics: [\n      {char_str}\n    ],")
    else:
        lines.append("    characteristics: [],")
        
    cert_str = ", ".join(repr(c) for c in p.get('certifications', []))
    lines.append(f"    certifications: [{cert_str}],")
    
    brands = ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
    brands_str = ", ".join(repr(b) for b in brands)
    lines.append(f"    availableBrands: [{brands_str}]")
    
    lines.append("  }")
    return "\n".join(lines)

def main():
    # Read the parsed products
    with open(PARSED_JSON_PATH, "r", encoding="utf-8") as f:
        parsed_products = json.load(f)
        
    print(f"Read {len(parsed_products)} products from parsed JSON.")
    
    # Format all parsed products to TS
    ts_blocks = [format_product_to_ts(p) for p in parsed_products]
    replacement_str = ",\n".join(ts_blocks)
    
    # Read data.ts
    with open(DATA_TS_PATH, "r", encoding="utf-8") as f:
        content = f.read()
        
    # Find the positions of the start product and end product
    # We look for the start index of "industrial-instrumentacion-electronica-libre-halogenos-lsoh"
    match_start = re.search(r'id:\s*\'industrial-instrumentacion-electronica-libre-halogenos-lsoh\'', content)
    if not match_start:
        raise Exception("Could not find start product ID 'industrial-instrumentacion-electronica-libre-halogenos-lsoh'")
        
    # Let's find the '{' that starts this product. We can search backward from the match start.
    idx = match_start.start()
    while idx >= 0 and content[idx] != '{':
        idx -= 1
    if idx < 0:
        raise Exception("Could not find opening brace '{' for start product")
    start_pos = idx
    
    # We look for the start of the last product "industrial-cable-comando-resistente-a-incendio"
    match_end = re.search(r'id:\s*\'industrial-cable-comando-resistente-a-incendio\'', content)
    if not match_end:
        raise Exception("Could not find end product ID 'industrial-cable-comando-resistente-a-incendio'")
        
    # Let's find the closing '}' of this product. Since we know it's right before '];', let's search forward from the match end.
    idx = match_end.end()
    bracket_count = 1
    # We want to find the matching '}' for the product object
    # In data.ts, it's followed by availableBrands and then a closing '}' before ];
    while idx < len(content):
        if content[idx] == '{':
            bracket_count += 1
        elif content[idx] == '}':
            bracket_count -= 1
            if bracket_count == 0:
                break
        idx += 1
    if bracket_count != 0:
        raise Exception("Could not find matching closing brace '}' for end product")
    end_pos = idx + 1 # include the brace
    
    print(f"Found product block from character {start_pos} to {end_pos}.")
    print("Old block sample start:\n", content[start_pos:start_pos+200])
    print("Old block sample end:\n", content[end_pos-200:end_pos])
    
    # Replace the block
    new_content = content[:start_pos] + replacement_str + content[end_pos:]
    
    # Write back to data.ts
    with open(DATA_TS_PATH, "w", encoding="utf-8") as f:
        f.write(new_content)
        
    print("Successfully integrated new products into data.ts!")

if __name__ == "__main__":
    main()
