import re

FILE_PATH = r"services/data.ts"

with open(FILE_PATH, "r", encoding="utf-8") as f:
    content = f.read()

# Locate the product block for aerea-concentrico-antihurto
# It starts with:
#   {
#     id: 'aerea-concentrico-antihurto',
# and ends with:
#     certifications: ['iram', 'seguridad', 'resistente-uv', 'antihurto']
#   },

pattern = re.compile(
    r"\s*\{\s*id:\s*'aerea-concentrico-antihurto'.*?certifications:\s*\[\s*'iram'\s*,\s*'seguridad'\s*,\s*'resistente-uv'\s*,\s*'antihurto'\s*\]\s*\},",
    re.DOTALL
)

match = pattern.search(content)
if not match:
    print("ERROR: Could not find product block for 'aerea-concentrico-antihurto'")
    # Let's try matching with double quotes or simpler
    pattern = re.compile(
        r"\s*\{\s*id:\s*'aerea-concentrico-antihurto'.*?\n\s*\},",
        re.DOTALL
    )
    matches = list(pattern.finditer(content))
    print(f"Found {len(matches)} simple matches")
    if matches:
        # We will use the first one
        match = matches[0]

if match:
    print(f"Found match at character index {match.start()} to {match.end()}")
    print("Matched text:")
    print(content[match.start():match.start()+300])
    print("...")
    print(content[match.end()-300:match.end()])
    
    NEW_PRODUCTS = """  {
    id: 'aerea-concentrico-aluminio',
    name: 'Concéntricos de Aluminio',
    categoryPath: ['Cables Instalación Aérea', 'Envainados', 'Concéntricos Anti-hurto (ceCONEX)'],
    description: 'Cables de seguridad con conductor de aluminio diseñados para prevenir conexiones clandestinas y asegurar la medición.',
    detailedDescription: `DESCRIPCIÓN
Cables con conductor central de fase (Aluminio) y conductor neutro formado por una corona de alambres que rodea la aislación central. Esta configuración impide el pelado del cable para hurtar energía sin afectar el neutro, provocando un cortocircuito que protege la red.

USO
Acometidas desde líneas aéreas preensambladas y transformadores hacia medidores. Especialmente diseñado para imposibilitar conexiones clandestinas (antihurto).

NORMAS
IRAM 63001, IRAM-NM 280, ICEA S-95-658, IEC 60502-1.`,
    image: '/images/ProductosNuevos/2-LINEAS AEREAS/1-ENVAINADOS/3-CONCENTRICOS (ANTIHURTO)/1-CONCENTRICOS ALUMINIO/PORTADA (ELIMINAR SIMBOLO GEMINI).jpeg',
    pdf: '/images/ProductosNuevos/2-LINEAS AEREAS/1-ENVAINADOS/3-CONCENTRICOS (ANTIHURTO)/1-CONCENTRICOS ALUMINIO/1-CONCENTRICO ALUMINIO MONOFASICO/FICHA TECNICA/ficha tecnica a modificar.pdf',
    specs: ['0,6 / 1,1 kV', 'Antihurto', 'Aluminio'],
    technicalIntro: `CONSTRUCCIÓN
Conductor Central (Fase): Cuerda de aluminio puro (Clase 2).
Aislación: Polietileno reticulado (XLPE) resistente a la intemperie.
Conductor Periférico (Neutro): Corona de alambres de aleación de aluminio dispuesto helicoidalmente.
Vaina Exterior: Polietileno reticulado (XLPE) o PVC de alta resistencia mecánica y UV.`,
    characteristics: [
      'CONSTRUCCIÓN',
      'Configuración concéntrica que impide el fraude eléctrico.',
      'Conductor de fase central protegido por el neutro periférico.',
      'Aislación y vaina en XLPE de alta resistencia térmica (90°C).',
      'Excelente resistencia a la intemperie y radiación UV.',
      'Marcación secuencial metro a metro para control de stock.'
    ],
    specsTables: [
      {
        title: "Aluminio Monofásico (1xAl + Al) - Norma IEC 60502-1",
        headers: ["Sección Nominal (mm²)", "Formación (Cuerda N° x Ømm)", "Espesor de aislación nominal (mm)", "Diámetro exterior aprox. (mm)", "Espesor de vaina promedio (mm)", "Resistencia eléctrica a 20°C (Ohm/km)", "Peso aproximado (kg/km)", "Corriente admisible a 40°C (A)"],
        rows: [
          ["1x6 + 6", "1 x 7 x 1,05", "0,7", "9", "1,24", "4,61", "80", "42"],
          ["1x10 + 10", "1 x 7 x 1,35", "0,7", "10", "1,24", "3,08", "106", "51"],
          ["1x16 + 16", "1 x 7 x 1,70", "0,7", "12", "1,24", "1,91", "150", "72"],
          ["1x25 + 25", "1 x 7 x 2,15", "0,9", "14", "1,24", "1,2", "225", "94"]
        ]
      },
      {
        title: "Aluminio Trifásico (3xAl + Al) - Norma IEC 60502-1 (Métrico)",
        headers: ["Sección Nominal (mm²)", "Espesor de aislación nominal (mm)", "Espesor de la cubierta mínimo (mm)", "Diámetro exterior aprox. (mm)", "Peso aproximado (kg/km)", "Resistencia eléctrica en CC a 20°C (Ohm/km)", "Reactancia inductiva a 50 Hz (Ohm/km)", "Corriente admisible a 40°C (A)"],
        rows: [
          ["3x6 + 6", "0,7", "1,24", "17", "339", "4,61", "0,082", "34"],
          ["3x10 + 10", "0,7", "1,24", "19", "408", "3,08", "0,078", "44"],
          ["3x16 + 16", "0,7", "1,24", "21", "515", "1,91", "0,075", "62"],
          ["3x25 + 25", "0,9", "1,24", "24", "698", "1,2", "0,072", "77"]
        ]
      },
      {
        title: "Aluminio Trifásico (3xAl + Al) - Norma ICEA S-66-524 (AWG)",
        headers: ["Sección AWG", "Espesor de aislación (mm)", "Espesor de la cubierta mínimo (mm)", "Diámetro exterior aprox. (mm)", "Peso aproximado (kg/km)", "Resistencia eléctrica en CC a 20°C (Ohm/km)", "Reactancia inductiva a 50 Hz (Ohm/km)", "Corriente admisible a 40°C (A)"],
        rows: [
          ["3x6 + 6", "1,14", "1,52", "21", "432", "2,214", "0,101", "52"],
          ["3x4 + 4", "1,14", "2,03", "25", "622", "1,390", "0,095", "73"],
          ["3x2 + 2", "1,14", "2,03", "28", "871", "0,872", "0,091", "90"]
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'resistente-uv', 'antihurto']
  },
  {
    id: 'aerea-concentrico-cobre',
    name: 'Concéntricos de Cobre',
    categoryPath: ['Cables Instalación Aérea', 'Envainados', 'Concéntricos Anti-hurto (ceCONEX)'],
    description: 'Cables de seguridad con conductor de cobre diseñados para prevenir conexiones clandestinas y asegurar la medición.',
    detailedDescription: `DESCRIPCIÓN
Cables con conductor central de fase (Cobre) y conductor neutro formado por una corona de alambres que rodea la aislación central. Esta configuración impide el pelado del cable para hurtar energía sin afectar el neutro, provocando un cortocircuito que protege la red.

USO
Acometidas desde líneas aéreas preensambladas y transformadores hacia medidores. Especialmente diseñado para imposibilitar conexiones clandestinas (antihurto).

NORMAS
IRAM 63001, IRAM-NM 280, ICEA S-95-658, IEC 60502-1.`,
    image: '/images/ProductosNuevos/2-LINEAS AEREAS/1-ENVAINADOS/3-CONCENTRICOS (ANTIHURTO)/2-CONCENTRICOS COBRE/PORTADA (ELIMINAR SIMBOLO GEMINI).jpeg',
    pdf: '/images/ProductosNuevos/2-LINEAS AEREAS/1-ENVAINADOS/3-CONCENTRICOS (ANTIHURTO)/2-CONCENTRICOS COBRE/FICHA TECNICA/ficha tecnica a modificar.pdf',
    specs: ['0,6 / 1,1 kV', 'Antihurto', 'Cobre'],
    technicalIntro: `CONSTRUCCIÓN
Conductor Central (Fase): Cuerda de cobre recocido (Clase 2).
Aislación: Polietileno reticulado (XLPE) resistente a la intemperie.
Conductor Periférico (Neutro): Corona de alambres de cobre dispuesto helicoidalmente.
Vaina Exterior: Polietileno reticulado (XLPE) o PVC de alta resistencia mecánica y UV.`,
    characteristics: [
      'CONSTRUCCIÓN',
      'Configuración concéntrica que impide el fraude eléctrico.',
      'Conductor de fase central protegido por el neutro periférico.',
      'Aislación y vaina en XLPE de alta resistencia térmica (90°C).',
      'Excelente resistencia a la intemperie y radiación UV.',
      'Marcación secuencial metro a metro para control de stock.'
    ],
    specsTables: [
      {
        title: "Cobre Monofásico (1xCu + Cu)",
        headers: ["Sección Nominal (mm²)", "Formación (N° x Ømm)", "Espesor de aislación promedio (mm)", "Diámetro exterior aprox. (mm)", "Espesor de vaina promedio (mm)", "Resistencia eléctrica a 20°C (Ohm/km)", "Carga de rotura aprox. (daN)", "Peso aproximado (kg/km)", "Corriente admisible máxima (A)"],
        rows: [
          ["1x4 + 4", "1 x 7 x 0,85", "1,0", "9", "1,2", "4,61", "80", "115", "42"],
          ["1x6 + 6", "1 x 7 x 1,05", "1,0", "10", "1,2", "3,08", "120", "159", "54"],
          ["1x10 + 10", "1 x 7 x 1,35", "1,0", "11", "1,2", "1,83", "200", "241", "71"],
          ["1x16 + 16", "1 x 7 x 1,70", "1,0", "13", "1,2", "1,15", "320", "385", "96"]
        ],
        note: "(1) Corriente máxima para cables expuestos al sol, con temperatura ambiente de 40ºC, 90ºC en el conductor, sin viento. (2) La carga de rotura es orientativa."
      }
    ],
    certifications: ['iram', 'seguridad', 'resistente-uv', 'antihurto']
  },"""
    
    new_content = content[:match.start()] + NEW_PRODUCTS + content[match.end():]
    with open(FILE_PATH, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("SUCCESS: Split product block updated in data.ts")
else:
    print("ERROR: Match failed")
