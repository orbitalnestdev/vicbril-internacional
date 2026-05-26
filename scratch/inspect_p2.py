import re
import json

def parse_txt():
    with open('scratch/instrument_blocks.txt', 'r', encoding='utf-8') as f:
        content = f.read()
        
    pages = content.split('================ PAGE ')
    page_data = {}
    for page in pages:
        if not page.strip():
            continue
        lines = [line.strip() for line in page.split('\n') if line.strip()]
        page_num = int(lines[0].split(' ')[0])
        page_data[page_num] = lines[1:]

    # Let's parse Page 2: CARACTERÍSTICAS ELÉCTRICAS
    # Let's look at the structure of Page 2 lines
    p2_lines = page_data.get(2, [])
    # We will print the lines to inspect
    print("=== PAGE 2 lines ===")
    for idx, line in enumerate(p2_lines[:150]):
        print(f"{idx}: {line}")

if __name__ == '__main__':
    parse_txt()
