def print_page_range(page_num, start_idx, end_idx):
    with open('scratch/instrument_blocks.txt', 'r', encoding='utf-8') as f:
        content = f.read()
    pages = content.split('================ PAGE ')
    for page in pages:
        if page.startswith(str(page_num)):
            lines = [line.strip() for line in page.split('\n') if line.strip()]
            print(f"=== PAGE {page_num} lines {start_idx} to {end_idx} ===")
            for idx in range(start_idx, min(end_idx, len(lines))):
                print(f"{idx}: {lines[idx]}")

if __name__ == '__main__':
    print_page_range(4, 0, 100)
