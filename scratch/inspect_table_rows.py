import fitz

doc = fitz.open('public/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE PARALELO PARLANTE/FICHA TECNICA PARALELO PARLANTE/FICHA TECNICA PARALELO PARLANTE.pdf')
page = doc[0]
drawings = page.get_drawings()

print("All drawings in table area:")
for i, d in enumerate(drawings):
    r = d['rect']
    if r.x0 > 500 and r.y0 > 100 and r.y1 < 220:
        fill = d.get('fill')
        color = d.get('color')
        print(f"Index {i} - Type: {d['type']}, Rect: {r}, Fill: {fill}, Color: {color}")
doc.close()
