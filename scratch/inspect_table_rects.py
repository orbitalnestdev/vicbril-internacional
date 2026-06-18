import fitz

doc = fitz.open('public/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE PARALELO PARLANTE/FICHA TECNICA PARALELO PARLANTE/FICHA TECNICA PARALELO PARLANTE.pdf')
page = doc[0]
drawings = page.get_drawings()

print("Table-related drawings (x0 > 500, y0 > 100, y1 < 300):")
for i, d in enumerate(drawings):
    r = d['rect']
    if r.x0 > 500 and r.y0 > 100 and r.y1 < 300:
        fill = d.get('fill')
        color = d.get('color')
        # Only print large fills or lines that might define rows/borders
        if d['type'] == 's': # stroke
            print(f"Index {i} - Line: {r} color: {color}")
        elif fill and (r.width > 200 or r.height > 10): # fill of row or table
            print(f"Index {i} - Fill: {r} color: {fill}")
doc.close()
