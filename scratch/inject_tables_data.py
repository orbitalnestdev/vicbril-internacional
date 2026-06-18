import json
import re

with open('scratch/all_industrial_tables.json', 'r', encoding='utf-8') as f:
    all_tables = json.load(f)

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

print(f"Loaded {len(all_tables)} products from JSON.")

modified_count = 0

for prod_id, tables in all_tables.items():
    # Find id in content
    id_pos = content.find(f"id: '{prod_id}'")
    if id_pos == -1:
        # try double quotes
        id_pos = content.find(f'id: "{prod_id}"')
        
    if id_pos == -1:
        print(f"Warning: Product {prod_id} not found in services/data.ts")
        continue
        
    # Find the opening brace of the product object
    open_brace_idx = content.rfind('{', 0, id_pos)
    if open_brace_idx == -1:
        print(f"Warning: Could not find opening brace for product {prod_id}")
        continue
        
    # Find the closing brace of the product object
    brace_count = 0
    close_brace_idx = -1
    for i in range(open_brace_idx, len(content)):
        char = content[i]
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                close_brace_idx = i
                break
                
    if close_brace_idx == -1:
        print(f"Warning: Could not find closing brace for product {prod_id}")
        continue
        
    product_block = content[open_brace_idx:close_brace_idx+1]
    
    # Format the tables as a JS array representation
    tables_js = json.dumps(tables, indent=6, ensure_ascii=False)
    
    # We want to insert 'specsTables: <tables_js>,\n' inside the product block
    # If specsTables already exists in the block, replace it.
    # Otherwise, insert it before 'certifications:' or 'availableBrands:'
    
    # Check if specsTables already exists
    if "specsTables:" in product_block:
        # Find where specsTables starts and ends in the block
        # Since specsTables is followed by [ ... ], we can use brace/bracket matching
        st_pos = product_block.find("specsTables:")
        # Find opening bracket [
        open_bracket_idx = product_block.find("[", st_pos)
        bracket_count = 0
        close_bracket_idx_st = -1
        for i in range(open_bracket_idx, len(product_block)):
            char = product_block[i]
            if char == '[':
                bracket_count += 1
            elif char == ']':
                bracket_count -= 1
                if bracket_count == 0:
                    close_bracket_idx_st = i
                    break
        if close_bracket_idx_st != -1:
            old_specs = product_block[st_pos:close_bracket_idx_st+1]
            new_specs = f"specsTables: {tables_js}"
            new_product_block = product_block.replace(old_specs, new_specs)
        else:
            print(f"Warning: Could not match brackets in existing specsTables for {prod_id}")
            continue
    else:
        # Insert before certifications: or availableBrands:
        insert_pos = product_block.find("certifications:")
        if insert_pos == -1:
            insert_pos = product_block.find("availableBrands:")
            
        if insert_pos != -1:
            indentation = "    "
            new_specs = f"specsTables: {tables_js},\n{indentation}"
            new_product_block = product_block[:insert_pos] + new_specs + product_block[insert_pos:]
        else:
            # Fallback to right before closing brace
            new_specs = f",\n    specsTables: {tables_js}"
            new_product_block = product_block[:-1] + new_specs + product_block[-1]
            
    # Replace the product block in the content
    content = content[:open_brace_idx] + new_product_block + content[close_brace_idx+1:]
    modified_count += 1

# Write back the modified content
with open('services/data.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Successfully injected tables for {modified_count} products in services/data.ts!")
