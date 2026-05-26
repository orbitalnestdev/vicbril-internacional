"""
Script para reemplazar completamente el producto subterraneo-lsoh-aluminio en data.ts
Corrige:
  - description / detailedDescription vacios
  - characteristics incompletas
  - filas de tablas en orden inverso
  - agrega tablas de intensidades de corriente (paginas 3-5 del PDF)
"""

import re

FILE = r'c:\Users\azcur\OneDrive\Documentos\PROYECTOS\vicbril-internacional\services\data.ts'

with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

# === NUEVO BLOQUE para el producto ===
NEW_PRODUCT = r"""  {
    id: 'subterraneo-lsoh-aluminio',
    name: 'Cable de Potencia Aluminio LSOH/LSOH',
    categoryPath: ['Cables de Potencia','Subterráneos','Subterráneo Aluminio'],
    description: 'Cable de potencia con conductor de aluminio y aislación LSOH, libre de halógenos, para instalaciones fijas en sistemas de distribución de 1 kV.',
    detailedDescription: `DESCRIPCIÓN
Cable de Potencia. Norma: IRAM 62266. Tensión: 1 kV.

APLICACIONES
Cables de potencia y cables de control y comando, con aislación y envolturas extruidas, de baja emisión de humos, toxicidad y libres de halógeno, para una tensión de 1 kV, para instalaciones fijas tales como sistemas (redes) de distribución o instalaciones industriales. Especialmente diseñados para ser utilizados en inmuebles de alta densidad de ocupación y/o con condiciones de evacuación difíciles.`,
    image: '/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO ALUMINIO/SUBTERRANEO LSOH/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO ALUMINIO/SUBTERRANEO LSOH/FICHA TECNICA/ficha tecnica subte aluminio lsoh.pdf',
    specs: ['1 kV', '70°C', 'IRAM 62266'],
    characteristics: [
      'CONDUCTOR',
      'Material: Aluminio.',
      'Norma: IRAM NM 280. Conductores Clase 2.',
      'Temperatura máxima en carga permanente: 70°C.',
      'Temperatura máxima en cortocircuito: 160°C (S ≤ 300 mm²) / 140°C (S > 300 mm²).',
      'Duración de cortocircuito: 5 s.',
      'AISLANTE',
      'Material: LSOH (termoplástico).',
      'Colores — Unipolar: Marrón. Dos conductores: Marrón y Celeste. Tres conductores: Marrón, Negro y Rojo. Cuatro conductores: Marrón, Negro, Rojo y Celeste.',
      'No propaga el incendio: IRAM 2289 - Cat. C.'
    ],
    specsTables: [
      {
        title: "Dimensiones y Pesos - Unipolares",
        headers: ["Sección nominal (mm²)", "Diámetro conductor aprox. (mm)", "Espesor aislación nominal (mm)", "Espesor envoltura nominal (mm)", "Diámetro exterior aprox. (mm)", "Masa aprox. (kg/km)"],
        rows: [
          ["25", "6.50", "1.20", "1.4", "11.9", "178"],
          ["35", "7.50", "1.20", "1.4", "12.9", "217"],
          ["50", "8.60", "1.40", "1.4", "14.4", "277"],
          ["70", "10.20", "1.40", "1.4", "16.0", "354"],
          ["95", "12.00", "1.60", "1.5", "18.4", "471"],
          ["120", "13.50", "1.60", "1.6", "20.1", "570"],
          ["150", "15.00", "1.80", "1.6", "22.0", "686"],
          ["185", "16.80", "2.00", "1.7", "24.4", "846"],
          ["240", "19.20", "2.20", "1.8", "27.4", "1077"]
        ]
      },
      {
        title: "Dimensiones y Pesos - Bipolares",
        headers: ["Sección nominal (mm²)", "Diámetro conductor aprox. (mm)", "Espesor aislación nominal (mm)", "Espesor envoltura nominal (mm)", "Diámetro exterior aprox. (mm)", "Masa aprox. (kg/km)"],
        rows: [
          ["16", "5.20", "1.00", "1.8", "19.5", "458"],
          ["25", "6.50", "1.20", "1.8", "23.1", "647"],
          ["35", "7.50", "1.20", "1.8", "25.1", "777"]
        ]
      },
      {
        title: "Dimensiones y Pesos - Tripolares",
        headers: ["Sección nominal (mm²)", "Diámetro conductor aprox. (mm)", "Espesor aislación nominal (mm)", "Espesor envoltura nominal (mm)", "Diámetro exterior aprox. (mm)", "Masa aprox. (kg/km)"],
        rows: [
          ["16", "5.20", "1.00", "1.8", "20.7", "522"],
          ["25", "6.50", "1.20", "1.8", "24.6", "742"],
          ["35", "7.50", "1.20", "1.8", "26.7", "900"],
          ["50", "8.60", "1.40", "1.9", "30.3", "1168"],
          ["70", "10.20", "1.40", "2.0", "34.2", "1521"],
          ["95", "12.00", "1.60", "2.2", "39.3", "2018"],
          ["120", "13.50", "1.60", "2.3", "42.7", "2413"],
          ["150", "15.00", "1.80", "2.5", "47.1", "2940"],
          ["185", "16.80", "2.00", "2.7", "52.6", "3666"]
        ]
      },
      {
        title: "Dimensiones y Pesos - Tetrapolares",
        headers: ["Sección nominal (mm²)", "Diámetro conductor aprox. (mm)", "Espesor aislación nominal (mm)", "Espesor envoltura nominal (mm)", "Diámetro exterior aprox. (mm)", "Masa aprox. (kg/km)"],
        rows: [
          ["16", "5.2", "1.0", "1.8", "22.5", "623"],
          ["25/16", "6.5/5.2", "1.2/1.0", "1.8", "25.8", "824"],
          ["35/16", "7.5/5.2", "1.2/1.0", "1.8", "27.7", "968"],
          ["50/25", "8.6/6.5", "1.4/1.2", "2.0", "31.7", "1290"],
          ["70/35", "10.2/7.5", "1.4/1.2", "2.1", "35.7", "1670"],
          ["95/50", "12.0/8.6", "1.6/1.4", "2.3", "40.9", "2210"],
          ["120/70", "13.5/10.2", "1.6/1.4", "2.4", "44.8", "2687"],
          ["150/70", "15.0/10.2", "1.8/1.4", "2.5", "48.5", "3155"]
        ]
      },
      {
        title: "Cables en Aire - Intensidades admisibles (A) a 40°C amb. — Métodos B2 y C",
        headers: ["Sección (mm²)", "Mét. B2 — 2 cond.", "Mét. B2 — 3 cond.", "Mét. C — 2 cond.", "Mét. C — 3 cond."],
        rows: [
          ["16", "47", "42", "57", "51"],
          ["25", "62", "54", "72", "64"],
          ["35", "75", "67", "90", "78"],
          ["50", "90", "80", "109", "96"],
          ["70", "114", "101", "139", "122"],
          ["95", "137", "121", "170", "148"],
          ["120", "157", "139", "197", "171"],
          ["150", "175", "153", "227", "197"],
          ["185", "200", "173", "259", "225"],
          ["240", "234", "202", "306", "265"],
          ["300", "268", "231", "353", "305"]
        ],
        note: "Mét. B2: Caño embutido en pared / Caño a la vista. Mét. C: Bandeja no perforada o de fondo sólido."
      },
      {
        title: "Cables en Aire - Intensidades admisibles (A) a 40°C amb. — Métodos E, F y G",
        headers: ["Sección (mm²)", "Mét. E — 2 cond.", "Mét. E — 3 cond.", "Mét. F — 2x1x", "Mét. F — 3x1x trébol", "Mét. F — 3x1x plano", "Mét. G — 3x1x horiz.", "Mét. G — 3x1x vert."],
        rows: [
          ["25", "77", "68", "85", "73", "76", "97", "86"],
          ["35", "97", "84", "106", "91", "95", "121", "108"],
          ["50", "117", "102", "130", "111", "116", "147", "132"],
          ["70", "151", "131", "167", "144", "151", "189", "171"],
          ["95", "183", "159", "204", "177", "184", "231", "210"],
          ["120", "212", "184", "238", "206", "215", "268", "245"],
          ["150", "245", "213", "275", "238", "250", "310", "284"],
          ["185", "280", "244", "316", "274", "287", "354", "327"],
          ["240", "331", "287", "374", "326", "341", "419", "389"],
          ["300", "382", "331", "432", "378", "396", "485", "452"]
        ],
        note: "Mét. E: Bandeja perforada. Mét. F: Bandeja perforada tipo escalera. Mét. G: Bandeja perforada — cables separados 1 diámetro mínimo."
      },
      {
        title: "Cables Directamente Enterrados - Intensidades admisibles (A) — Método D2 (terreno 25°C, 1 K.m/W)",
        headers: ["Sección (mm²)", "1 cable unipolar", "2 cables (directo)", "2 cables (en caño)", "3 cables (directo)", "3 cables (en caño)"],
        rows: [
          ["16", "84", "86", "70", "73", "58"],
          ["25", "109", "112", "90", "94", "74"],
          ["35", "130", "134", "106", "113", "90"],
          ["50", "153", "161", "127", "135", "105"],
          ["70", "188", "198", "157", "168", "131"],
          ["95", "226", "237", "186", "202", "155"],
          ["120", "258", "272", "212", "231", "176"],
          ["150", "288", "305", "239", "260", "200"],
          ["185", "326", "346", "269", "294", "224"],
          ["240", "380", "403", "311", "341", "258"],
          ["300", "430", "457", "351", "386", "291"]
        ],
        note: "Para cables con formación flexible multiplicar por 0,95. *Los bipolares se construyen generalmente hasta 35 mm²."
      }
    ],
    certifications: ['iram', 'no-propagacion', 'libre-halogenos', 'baja-emision-humos']
  }"""

# Locate the old product block using a regex
pattern = re.compile(
    r'\{\s*\n\s*id:\s*\'subterraneo-lsoh-aluminio\'.*?certifications:\s*\[\]\s*\},',
    re.DOTALL
)

match = pattern.search(content)
if not match:
    print("ERROR: No se encontro el bloque del producto. Intentando patron alternativo...")
    # Try alternative pattern
    pattern2 = re.compile(
        r'\{\s*\n\s*id:\s*\'subterraneo-lsoh-aluminio\'.*?\},\s*\n\s*\{',
        re.DOTALL
    )
    match2 = pattern2.search(content)
    if match2:
        print(f"Encontrado (alternativo) en posicion {match2.start()}-{match2.end()}")
        print(content[match2.start():match2.start()+200])
    else:
        print("No encontrado. Buscando manualmente...")
        idx = content.find("id: 'subterraneo-lsoh-aluminio'")
        if idx >= 0:
            print(f"ID encontrado en posicion {idx}")
            print(repr(content[idx-50:idx+200]))
else:
    print(f"Encontrado en posicion {match.start()}-{match.end()}")
    new_content = content[:match.start()] + NEW_PRODUCT + ',' + content[match.end():]
    with open(FILE, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("ARCHIVO ACTUALIZADO exitosamente.")
