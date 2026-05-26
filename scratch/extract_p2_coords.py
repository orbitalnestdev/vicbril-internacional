import fitz

def extract_coords(pdf_path, page_num):
    doc = fitz.open(pdf_path)
    page = doc[page_num - 1]
    
    # Let's extract words with coordinates: (x0, y0, x1, y1, "word", block_no, line_no, word_no)
    words = page.get_text("words")
    # Sort words primarily by y0 (row), and then by x0 (column)
    # We can group words into lines by y-coordinate tolerance
    lines = {}
    for w in words:
        y_center = (w[1] + w[3]) / 2.0
        # group by y_center within 3 points tolerance
        found = False
        for y_coord in lines:
            if abs(y_center - y_coord) < 4:
                lines[y_coord].append(w)
                found = True
                break
        if not found:
            lines[y_center] = [w]
            
    # Sort lines by y_center
    sorted_y = sorted(lines.keys())
    for y in sorted_y:
        # Sort words in line by x0
        sorted_words = sorted(lines[y], key=lambda w: w[0])
        line_str = " ".join([w[4] for w in sorted_words])
        print(f"y={y:.1f} | x0={sorted_words[0][0]:.1f}: {line_str}")

if __name__ == '__main__':
    import glob
    files = glob.glob('public/images/ProductosNuevos/5-CABLES INDUSTRIALES/1- INSTRUMENT*/**/*.pdf', recursive=True)
    if files:
        extract_coords(files[0], 2)
