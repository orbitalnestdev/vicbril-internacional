import re

def check_data():
    with open('services/data.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Let's find all products block
    # products is defined as: export const products: Product[] = [ ... ]
    # We can search for each product starting with { and ending with },
    # but a simple way is to find all objects inside products.
    # Let's write a simple parser or search for blocks
    
    # Let's look for id and categoryPath
    # We can split by lines and keep track of product objects
    lines = content.split('\n')
    current_product = None
    product_line_num = 0
    products_found = []
    
    in_products = False
    brace_count = 0
    current_block = []
    
    for i, line in enumerate(lines):
        line_num = i + 1
        if 'export const products:' in line:
            in_products = True
            continue
            
        if not in_products:
            continue
            
        # Track braces to identify top-level objects in the products array
        for char in line:
            if char == '{':
                if brace_count == 0:
                    current_block = []
                    product_line_num = line_num
                brace_count += 1
            elif char == '}':
                brace_count -= 1
                if brace_count == 0:
                    current_block.append(line)
                    block_str = '\n'.join(current_block)
                    products_found.append((product_line_num, block_str))
                    current_block = []
                    
        if brace_count > 0:
            current_block.append(line)
            
    print(f"Found {len(products_found)} products.")
    
    missing_cat_path = []
    missing_id = []
    missing_name = []
    for line_num, prod_str in products_found:
        # Check id
        id_match = re.search(r"id:\s*['\"`](.*?)['\"`]", prod_str)
        name_match = re.search(r"name:\s*['\"`](.*?)['\"`]", prod_str)
        cat_path_match = re.search(r"categoryPath\s*:", prod_str)
        
        prod_id = id_match.group(1) if id_match else f"UNKNOWN (line {line_num})"
        prod_name = name_match.group(1) if name_match else "UNKNOWN"
        
        if not id_match:
            missing_id.append(line_num)
        if not name_match:
            missing_name.append(line_num)
        if not cat_path_match:
            missing_cat_path.append((line_num, prod_id, prod_name))
            
    print(f"Missing ID: {missing_id}")
    print(f"Missing Name: {missing_name}")
    print(f"Missing categoryPath: {len(missing_cat_path)}")
    for line_num, prod_id, prod_name in missing_cat_path:
        print(f"  Line {line_num}: ID={prod_id}, Name={prod_name}")

if __name__ == '__main__':
    check_data()
