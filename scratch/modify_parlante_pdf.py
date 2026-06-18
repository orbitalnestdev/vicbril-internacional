import fitz
import os

pdf_paths = [
    'public/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE PARALELO PARLANTE/FICHA TECNICA PARALELO PARLANTE/FICHA TECNICA PARALELO PARLANTE.pdf',
    'public/images/ProductosNuevos/1-CABLES PARA INSTALACION CIVIL/2-CABLE BIPOLAR/CABLE PARALELO PARLANTE/FICHA TECNICA PARALELO PARLANTE/FICHA TECNICA PARALELO PARLANTE.pdf'
]

for path in pdf_paths:
    print(f"Modifying PDF: {path}")
    doc = fitz.open(path)
    page = doc[0]

    # 1. Cover the header text in the dark green chevron block
    # Chevron text "TIPO BAJO PLOMO" is at X=25 to 250, Y=55 to 95.
    teal_color = (0.20, 0.36, 0.39) # RGB equivalent of (0.2, 0.36, 0.39)
    page.draw_rect(fitz.Rect(20, 52, 290, 98), color=teal_color, fill=teal_color, overlay=True)

    # Write the new title: "CABLE PARALELO PARLANTE" in white, bold
    page.insert_text(fitz.Point(25, 82), "CABLE PARALELO PARLANTE", color=(1, 1, 1), fontsize=15, fontname="helvetica-bold")

    # 2. Cover the subtitle below the chevron "MULTIPOLAR - PVC/PVC - 300/500 VOLT - 70ºC"
    # and write "BIPOLAR - PVC CRISTAL O BICOLOR - AUDIO"
    page.draw_rect(fitz.Rect(25, 110, 390, 135), color=(1,1,1), fill=(1,1,1), overlay=True)
    page.insert_text(fitz.Point(25, 126), "BIPOLAR - PVC CRISTAL O BICOLOR - AUDIO", color=(0.20, 0.36, 0.39), fontsize=10, fontname="helvetica-bold")

    # 3. Cover the entire left column text area (from Y=140 to Y=520)
    page.draw_rect(fitz.Rect(20, 140, 390, 520), color=(1,1,1), fill=(1,1,1), overlay=True)

    # Redraw the correct text on the left:
    # Description
    page.insert_text(fitz.Point(25, 160), "Descripción", color=(0.20, 0.36, 0.39), fontsize=12, fontname="helvetica-bold")
    desc_lines = [
        "Cordones de cobre flexible con aislación de PVC cristal o",
        "bicolor. Diseñados para la interconexión de sistemas de",
        "audio, garantizando fidelidad en la señal."
    ]
    for y_offset, line in enumerate(desc_lines):
        page.insert_text(fitz.Point(25, 180 + y_offset * 14), line, color=(0.3, 0.3, 0.3), fontsize=9, fontname="helvetica")

    # Applications
    page.insert_text(fitz.Point(25, 240), "Aplicaciones", color=(0.20, 0.36, 0.39), fontsize=12, fontname="helvetica-bold")
    app_lines = [
        "Interconexión de equipos de audio y aparatos portátiles.",
        "Diseñado para flexibilidad en instalaciones móviles."
    ]
    for y_offset, line in enumerate(app_lines):
        page.insert_text(fitz.Point(25, 260 + y_offset * 14), line, color=(0.3, 0.3, 0.3), fontsize=9, fontname="helvetica")

    # Characteristics
    page.insert_text(fitz.Point(25, 305), "Características", color=(0.20, 0.36, 0.39), fontsize=12, fontname="helvetica-bold")
    char_lines = [
        "Tensión nominal: 300/500 Volt.",
        "Conductor: Cobre flexible en formación clase 5.",
        "Aislación: PVC cristal o bicolor."
    ]
    for y_offset, line in enumerate(char_lines):
        page.insert_text(fitz.Point(25, 325 + y_offset * 14), line, color=(0.3, 0.3, 0.3), fontsize=9, fontname="helvetica")

    # Color
    page.insert_text(fitz.Point(25, 385), "Color", color=(0.20, 0.36, 0.39), fontsize=12, fontname="helvetica-bold")
    page.insert_text(fitz.Point(25, 410), "Bipolar", color=(0.3, 0.3, 0.3), fontsize=9, fontname="helvetica")

    # Draw Bipolar Color circles (Negro y Rojo)
    # Negro circle
    page.draw_circle(fitz.Point(85, 407), 8, color=(0, 0, 0), fill=(0, 0, 0), overlay=True)
    # Rojo circle
    page.draw_circle(fitz.Point(105, 407), 8, color=(1, 0, 0), fill=(1, 0, 0), overlay=True)
    # Label (Negro/Rojo)
    page.insert_text(fitz.Point(125, 410), "(Negro/Rojo)", color=(0.5, 0.5, 0.5), fontsize=8, fontname="helvetica-bold")

    # 4. Cover rows 3x1, 3x1.5, 3x2.5 in the table on the right
    # Table goes from X=530 to X=770. Cover from Y=162 to Y=210
    page.draw_rect(fitz.Rect(530, 162, 770, 210), color=(1,1,1), fill=(1,1,1), overlay=True)

    # Draw bottom border of the table
    page.draw_line(fitz.Point(530, 162), fitz.Point(770, 162), color=(0.20, 0.36, 0.39), width=1.5, overlay=True)

    # Save
    temp_path = path + ".temp"
    doc.save(temp_path)
    doc.close()
    os.replace(temp_path, path)
    print("  Done!")
