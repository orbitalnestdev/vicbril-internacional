import re

def clean_row(row):
    return [cell.strip().replace('Sí', 'SÍ').replace('Si', 'SÍ') for cell in row]

def parse_txt():
    with open('scratch/instrument_blocks.txt', 'r', encoding='utf-8') as f:
        content = f.read()
        
    pages = content.split('================ PAGE ')
    
    # We want to extract details page by page.
    # Let's inspect the blocks of each page.
    for page in pages:
        if not page.strip():
            continue
        lines = [line.strip() for line in page.split('\n') if line.strip()]
        page_num = lines[0].split(' ')[0]
        print(f"\n--- PAGE {page_num} (first 20 lines) ---")
        print("\n".join(lines[1:21]))

if __name__ == '__main__':
    parse_txt()
