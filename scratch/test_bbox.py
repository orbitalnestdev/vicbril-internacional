import pdfplumber

pdf_path = 'public/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/1-LIBRE HALOGENOS/1-LSOH/FICHA TECNICA - USAR FOTO DE PORTADA.pdf'

with pdfplumber.open(pdf_path) as pdf:
    page = pdf.pages[2] # Page 3 (0-indexed 2)
    tables = page.find_tables()
    print(f"Page 3 has {len(tables)} tables")
    
    # Extract all words with their positions
    words = page.extract_words()
    
    for t_idx, table in enumerate(tables):
        print(f"\nTable {t_idx + 1} bbox: {table.bbox}")
        
        # Let's find words that are above the table (y1 < table.bbox[1])
        # and group them by line (words with similar top coordinates)
        above_words = [w for w in words if w['bottom'] < table.bbox[1]]
        
        # Sort by bottom descending (closest to the table first)
        above_words.sort(key=lambda w: w['bottom'], reverse=True)
        
        # Group into lines
        lines = []
        if above_words:
            current_line = [above_words[0]]
            for w in above_words[1:]:
                # If the difference in top is small, it's the same line
                if abs(w['top'] - current_line[-1]['top']) < 5:
                    current_line.append(w)
                else:
                    # Sort words in line from left to right
                    current_line.sort(key=lambda w: w['x0'])
                    lines.append(" ".join([x['text'] for x in current_line]))
                    current_line = [w]
            current_line.sort(key=lambda w: w['x0'])
            lines.append(" ".join([x['text'] for x in current_line]))
            
        print("Lines above table (closest to furthest):")
        for line in lines[:5]:
            print(f"  {line}")
