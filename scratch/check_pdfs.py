import re
import os

def check_pdfs():
    # Read services/data.ts
    with open('services/data.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the products array
    # Products start after "export const products: Product[] = ["
    products_match = re.search(r'export const products:\s*Product\[\]\s*=\s*\[(.*?)\];\s*export const brands', content, re.DOTALL)
    if not products_match:
        # Try a more general match if needed
        products_match = re.search(r'export const products:\s*Product\[\]\s*=\s*\[(.*)\]', content, re.DOTALL)
        
    if not products_match:
        print("Error: Could not find products array in services/data.ts")
        return

    products_content = products_match.group(1)

    # Let's extract each product block
    # A product block is enclosed in curly braces {...}
    # Since products can have nested braces (e.g. in specsTables, colors, etc.), 
    # we can use a stack or a regex that parses product objects.
    # Alternatively, we can use regex to find all matches of:
    # id: '...', name: '...', pdf: '...'
    
    # Let's find all blocks containing id, name, and optionally pdf
    product_blocks = []
    # Let's find each id
    id_positions = [m.start() for m in re.finditer(r'id:\s*\'([^\']+)\'', products_content)]
    id_positions.append(len(products_content))

    for i in range(len(id_positions) - 1):
        block = products_content[id_positions[i]:id_positions[i+1]]
        product_blocks.append(block)

    missing_pdfs = []
    total_checked = 0
    total_with_pdf = 0

    for block in product_blocks:
        id_match = re.search(r'id:\s*\'([^\'\s]+)\'', block)
        name_match = re.search(r'name:\s*\'([^\'\n]+)\'', block)
        if not name_match:
            name_match = re.search(r'name:\s*"([^\"]+)"', block)
            
        pdf_match = re.search(r'pdf:\s*\'([^\']+)\'', block)
        if not pdf_match:
            pdf_match = re.search(r'pdf:\s*"([^\"]+)"', block)

        if id_match and name_match:
            prod_id = id_match.group(1)
            prod_name = name_match.group(1).strip()
            total_checked += 1

            if pdf_match:
                pdf_path = pdf_match.group(1)
                total_with_pdf += 1
                
                # Check on filesystem
                # Remove leading slash if any
                clean_path = pdf_path.lstrip('/')
                full_path = os.path.join('public', clean_path)

                if not os.path.exists(full_path):
                    missing_pdfs.append({
                        'id': prod_id,
                        'name': prod_name,
                        'pdf': pdf_path,
                        'full_path': full_path
                    })
            else:
                print(f"Product without PDF field: ID={prod_id}, Name={prod_name}")

    print(f"Total products checked: {total_checked}")
    print(f"Products with PDF field: {total_with_pdf}")
    print(f"Missing PDFs count: {len(missing_pdfs)}")
    
    if missing_pdfs:
        print("\n--- MISSING PDFS ---")
        for idx, item in enumerate(missing_pdfs, 1):
            print(f"{idx}. Product ID: {item['id']}")
            print(f"   Name: {item['name']}")
            # Check if there is a file in the parent dir that is similar
            parent_dir = os.path.dirname(item['full_path'])
            if os.path.exists(parent_dir):
                files = os.listdir(parent_dir)
                pdf_files = [f for f in files if f.endswith('.pdf')]
                print(f"   Declared PDF: {item['pdf']}")
                print(f"   Available PDFs in folder: {pdf_files}")
            else:
                print(f"   Declared PDF: {item['pdf']}")
                print(f"   Folder does NOT exist: {parent_dir}")
            print()

if __name__ == '__main__':
    check_pdfs()
