with open('scratch/1-envainados_3-concentricos_(antihurto)_2-concentricos_cobre_ficha_tecnica_ficha_tecnica_a_modificar.pdf.txt', 'r', encoding='utf-8') as f:
    text = f.read()

print("=== CONCENTRICOS COBRE TEXT ===")
print(text[:1000])

if "trifasico" in text.lower() or "trifásico" in text.lower() or "3x" in text:
    print("Found trifásico copper!")
else:
    print("No trifásico copper found in copper PDF.")
