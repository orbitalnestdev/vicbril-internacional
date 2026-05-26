import re

# Read data.ts
with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Define the new objects
instrumentacion = """  {
    id: '1-instrumentaci-n-electronica',
    name: '1- INSTRUMENTACIÓN ELECTRONICA',
    categoryPath: ['Cables Industriales', 'Instrumentación Electrónica'],
    description: 'Circuitos de instrumentación electrónica, señales digitales y analógicas (4-20mA).',
    detailedDescription: `DESCRIPCIÓN
Circuitos de instrumentación electrónica, señales digitales y analógicas (4-20mA). Circuitos de seguridad intrínseca. Detección de pérdidas de gas y/o fluidos. Medición y monitoreo de presión, temperatura, volumen. Monitoreo de señales de alarma.

APLICACIONES
Instalados en conduits, bandeja, escalera, al aire libre directo o bajo techo, enterrado en trinchera o en ductos.`,
    image: '/images/ProductosNuevos/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/portada.jpeg',
    gallery: [],
    pdf: '/images/ProductosNuevos/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/FICHA TECNICA/FICHA TECNICA INSTRUMENTAR.pdf',
    specs: ['300 Volt', 'Cu 22 a 12 AWG', 'PVC 105°C / PVC'],
    characteristics: [
      'Temperatura máxima: 105°C de servicio',
      'Tensión nominal: 300 Volt',
      'Norma constructiva: UL 13 tipo PLTC - UL 2250 tipo ITC',
      'Norma de conductores: ASTM B8 Clase B',
      'Conductor: Cobre electrolítico recocido en formación de 7 hilos',
      'Aislación: PVC',
      'Paso del trenzado: 50mm (20 torsiones por metro)',
      'Blindaje: Cinta aluminio-poliéster más conductor de drenaje de cobre estañado',
      'Cubierta: PVC no propagante del incendio, resistente a la luz solar e hidrocarburos',
      'Norma de fuego: UL 1685',
      'Norma hidrocarburos: NFC 32-200 - ASTM D 1239',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Código NEC (NFPA 70): Art. 725 PLTC – Art. 727 ITC – Art. 800 CM – Art. 501 áreas clasificadas CL1 Div.2 y Cl2 Div.2'
    ],
    specsTables: [
      {
        title: "Dimensiones y Pesos - Par",
        headers: ["Calibre (AWG)", "Blindado", "Drenaje (AWG)", "Diámetro exterior (mm)", "Peso (kg/km)", "Código"],
        rows: [
          ["20", "No", "--", "4.9", "30", "AR 1P20"],
          ["20", "Sí", "22", "5.0", "33", "AR-O 1P20"],
          ["18", "No", "--", "5.6", "40", "AR 1P18"],
          ["18", "Sí", "20", "5.7", "45", "AR-O 1P18"],
          ["16", "No", "--", "6.2", "53", "AR 1P16"],
          ["16", "Sí", "18", "6.3", "61", "AR-O 1P16"],
          ["14", "No", "--", "7.7", "82", "AR 1P14"],
          ["14", "Sí", "18", "7.8", "89", "AR-O 1P14"],
          ["12", "No", "--", "8.7", "111", "AR 1P12"],
          ["12", "Sí", "18", "8.8", "119", "AR-O 1P12"]
        ]
      },
      {
        title: "Dimensiones y Pesos - Terna / Cuadrete",
        headers: ["Estructura", "Calibre (AWG)", "Drenaje (AWG)", "Diámetro exterior (mm)", "Peso (kg/km)", "Código"],
        rows: [
          ["Terna (Blindado)", "20", "22", "5.3", "41", "AR-O 1T20"],
          ["Terna (Blindado)", "18", "20", "6.0", "57", "AR-O 1T18"],
          ["Terna (Blindado)", "16", "18", "6.7", "78", "AR-O 1T16"],
          ["Terna (Blindado)", "14", "18", "8.3", "116", "AR-O 1T14"],
          ["Terna (Blindado)", "12", "18", "9.3", "159", "AR-O 1T12"],
          ["Cuadrete (Blindado)", "20", "22", "5.7", "50", "AR-O 1Q20"],
          ["Cuadrete (Blindado)", "18", "20", "6.5", "70", "AR-O 1Q18"],
          ["Cuadrete (Blindado)", "16", "18", "7.5", "101", "AR-O 1Q16"],
          ["Cuadrete (Blindado)", "14", "18", "9.0", "146", "AR-O 1Q14"],
          ["Cuadrete (Blindado)", "12", "18", "10.7", "214", "AR-O 1Q12"]
        ]
      }
    ],
    certifications: ['no-propagacion', 'resistente-uv', 'temperatura-servicio'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  }"""

automatizacion = """  {
    id: '2-automatizaci-n',
    name: '2-AUTOMATIZACIÓN',
    categoryPath: ['Cables Industriales', 'Automatización'],
    description: 'Transmisión de datos, señales digitales con protección aumentada contra perturbaciones electromagnéticas.',
    detailedDescription: `DESCRIPCIÓN
Transmisión de datos, señales digitales con protección aumentada contra perturbaciones electromagnéticas.

APLICACIONES
Instalados en conduits, bandeja, escalera, enterrado en trinchera o en ductos. Apto para sistemas informáticos.`,
    image: '/images/ProductosNuevos/5-CABLES INDUSTRIALES/2-AUTOMATIZACIÓN/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/ProductosNuevos/5-CABLES INDUSTRIALES/2-AUTOMATIZACIÓN/FICHA TECNICA/FICHA TECNICA AUTOMATIZAR.pdf',
    specs: ['500 Volt', 'Cu 0.35 a 1.5 mm²', 'VDE 0812'],
    characteristics: [
      'Temperatura máxima: 80°C de servicio',
      'Tensión nominal: 500 Volt',
      'Norma constructiva: VDE0812',
      'Norma de conductores: IEC 60228 / IRAM NM 280',
      'Conductor: Cobre electrolítico recocido estañado en formación de 7 hilos',
      'Aislación: PVC',
      'Blindaje: Cinta aluminio-poliéster (Cobertura 100%) más trenza de alambres de cobre estañado (Cobertura 80%)',
      'Cubierta: PVC no propagante del incendio',
      'Norma de fuego: IEC 60332-1 / IRAM NM IEC 60332-1'
    ],
    specsTables: [
      {
        title: "Características Eléctricas",
        headers: ["Sección (mm²)", "Resistencia CC a 20°C (Ohm/km)", "Velocidad de propagación (%)", "Capacidad mutua (pF/m)", "Capacidad mutua (pF/ft)"],
        rows: [
          ["0.35", "59.9", "45", "97", "30"],
          ["0.50", "40.1", "45", "102", "31.5"],
          ["0.75", "24.8", "45", "110", "34"],
          ["1.00", "18.2", "45", "117", "36"],
          ["1.50", "12.2", "45", "116", "36"]
        ]
      },
      {
        title: "Dimensiones y Pesos",
        headers: ["Conductores", "Sección (mm²)", "Diámetro exterior (mm)", "Peso (kg/km)", "Código"],
        rows: [
          ["2", "0.35", "5.1", "36", "EC 2x0.35"],
          ["2", "0.50", "5.6", "44", "EC 2x0.5"],
          ["2", "0.75", "6.2", "55", "EC 2x0.75"],
          ["2", "1.00", "6.6", "63", "EC 2x1"],
          ["2", "1.50", "7.8", "88", "EC 2x1.5"],
          ["3", "0.35", "5.3", "42", "EC 3x0.35"],
          ["3", "0.50", "5.9", "53", "EC 3x0.5"],
          ["3", "0.75", "6.5", "67", "EC 3x0.75"],
          ["3", "1.00", "6.9", "78", "EC 3x1"],
          ["3", "1.50", "8.2", "110", "EC 3x1.5"],
          ["4", "0.35", "5.7", "50", "EC 4x0.35"],
          ["4", "0.50", "6.3", "63", "EC 4x0.5"],
          ["4", "0.75", "7.0", "80", "EC 4x0.75"],
          ["4", "1.00", "7.6", "98", "EC 4x1"],
          ["4", "1.50", "8.8", "134", "EC 4x1.5"],
          ["5", "0.35", "6.3", "61", "EC 5x0.35"],
          ["5", "0.50", "7.0", "76", "EC 5x0.5"],
          ["5", "0.75", "7.8", "98", "EC 5x0.75"],
          ["5", "1.00", "8.2", "115", "EC 5x1"],
          ["5", "1.50", "9.6", "159", "EC 5x1.5"],
          ["7", "0.35", "6.8", "74", "EC 7x0.35"],
          ["7", "0.50", "7.7", "97", "EC 7x0.5"],
          ["7", "0.75", "8.5", "125", "EC 7x0.75"],
          ["7", "1.00", "9.1", "149", "EC 7x1"],
          ["7", "1.50", "10.6", "208", "EC 7x1.5"],
          ["12", "0.35", "8.8", "119", "EC 12x0.35"],
          ["12", "0.50", "9.9", "152", "EC 12x0.5"],
          ["12", "0.75", "10.7", "192", "EC 12x0.75"],
          ["12", "1.00", "11.7", "237", "EC 12x1"],
          ["12", "1.50", "14.0", "349", "EC 12x1.5"],
          ["19", "0.35", "10.1", "164", "EC 19x0.35"],
          ["19", "0.50", "11.3", "212", "EC 19x0.5"],
          ["19", "0.75", "12.8", "292", "EC 19x0.75"],
          ["19", "1.00", "13.7", "354", "EC 19x1"],
          ["19", "1.50", "16.6", "518", "EC 19x1.5"],
          ["24", "0.35", "11.5", "200", "EC 24x0.35"],
          ["24", "0.50", "13.4", "280", "EC 24x0.5"],
          ["24", "0.75", "14.9", "367", "EC 24x0.75"],
          ["24", "1.00", "16.1", "451", "EC 24x1"],
          ["24", "1.50", "19.3", "661", "EC 24x1.5"]
        ]
      }
    ],
    certifications: ['no-propagacion', 'temperatura-servicio', 'interferencias'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  }"""

comando = """  {
    id: '3-cable-comando',
    name: '3-CABLE COMANDO',
    categoryPath: ['Cables Industriales', 'Comando y Señalización'],
    description: 'Cables de potencia para comando y señalización de instalaciones fijas.',
    detailedDescription: `DESCRIPCIÓN
Cables de potencia diseñados para comando y señalización, medición, control y protecciones eléctricas a distancia.

APLICACIONES
Apto para uso en bandejas portacables, conduits, entubados, al aire libre o enterrados bajo tierra en instalaciones industriales.`,
    image: '/images/ProductosNuevos/5-CABLES INDUSTRIALES/3-CABLE COMANDO/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/ProductosNuevos/5-CABLES INDUSTRIALES/3-CABLE COMANDO/FICHA TECNICA/FICHA TECNICA COMANDO.pdf',
    specs: ['0.6/1 kV', 'CU/PVC', 'IRAM 2178-1'],
    characteristics: [
      'Temperatura máxima: 70 °C en uso continuo / 160 °C en cortocircuito',
      'Tensión nominal: 0.6/1 kV',
      'Norma constructiva: IRAM 2178-1 / REF: IEC 60502-1',
      'Conductor: Cobre electrolítico recocido flexible clase 4 o extraflexible clase 5 (IRAM-NM 280:2002)',
      'Aislación: PVC ecológico antillama, resistente a la propagación de incendios',
      'Identificación: Conductores blancos numerados + 1 conductor de tierra (verde/amarillo)',
      'Relleno interno: PVC blando no higroscópico de fácil extracción',
      'Vaina exterior: PVC ecológico tipo ST2 color violeta resistente a la propagación de incendios (IRAM NM IEC 60332-3)',
      'Marcaje: Impresión Inkjet secuencial metro a metro',
      'Resistencia: Radiación solar, golpes, abrasión y agua'
    ],
    specsTables: [
      {
        title: "Especificaciones Técnicas - Sección 1,50 mm²",
        headers: ["Cantidad de conductores", "Diámetro máx. alambres (mm)", "Espesor aislación (mm)", "Espesor vaina (mm)", "Diámetro exterior (mm)", "Peso aprox. (kg/km)", "Corriente Aire (A)", "Corriente Enterrado (A)"],
        rows: [
          ["5 (4+T)", "0.41", "0.8", "1.8", "11.4", "210", "11", "15"],
          ["7 (6+T)", "0.41", "0.8", "1.8", "12.6", "265", "10", "13"],
          ["10 (9+T)", "0.41", "0.8", "1.8", "15.3", "365", "9", "11"],
          ["12 (11+T)", "0.41", "0.8", "1.8", "15.7", "425", "9", "10"],
          ["19 (18+T)", "0.41", "0.8", "1.8", "19.0", "585", "8", "8"],
          ["24 (23+T)", "0.41", "0.8", "1.8", "21.3", "750", "7", "8"]
        ],
        note: "Diámetro de cuerda 1,5 mm – Resistencia eléctrica máx a 20°C: 13.3 ohm/km - Resistencia eléctrica máx a 70°C: 15.9 ohm/km"
      },
      {
        title: "Especificaciones Técnicas - Sección 2,50 mm²",
        headers: ["Cantidad de conductores", "Diámetro máx. alambres (mm)", "Espesor aislación (mm)", "Espesor vaina (mm)", "Diámetro exterior (mm)", "Peso aprox. (kg/km)", "Corriente Aire (A)", "Corriente Enterrado (A)"],
        rows: [
          ["5 (4+T)", "0.41", "0.8", "1.8", "13.0", "305", "15", "20"],
          ["7 (6+T)", "0.41", "0.8", "1.8", "14.3", "360", "13", "17"],
          ["10 (9+T)", "0.41", "0.8", "1.8", "17.1", "505", "12", "15"],
          ["12 (11+T)", "0.41", "0.8", "1.8", "18.9", "568", "12", "14"],
          ["19 (18+T)", "0.41", "0.8", "1.8", "22.0", "830", "10", "11"],
          ["24 (23+T)", "0.41", "0.8", "1.8", "25.9", "960", "10", "10"]
        ],
        note: "Diámetro de cuerda 2.0 mm – Resistencia eléctrica máx a 20°C: 7.98 ohm/km - Resistencia eléctrica máx a 70°C: 9.55 ohm/km"
      }
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion', 'resistente-uv', 'conductor-tierra'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  }"""

# Locate old objects using regex and replace them
# We want to target:
# 1) id: '1-instrumentaci-n-electronica' ... certifications: []\n  },
# 2) id: '2-automatizaci-n' ... certifications: []\n  },
# 3) id: '3-cable-comando' ... certifications: []\n  },

# Let's find each of the three old products blocks and replace them.
# The template is:
# {\s*id:\s*'1-instrumentaci-n-electronica'.*?certifications:\s*\[\s*\]\s*\},
p1 = r'\{\s*id:\s*\'1-instrumentaci-n-electronica\'.*?certifications:\s*\[\s*\]\s*\},'
content, count1 = re.subn(p1, instrumentacion + ',', content, flags=re.DOTALL)

p2 = r'\{\s*id:\s*\'2-automatizaci-n\'.*?certifications:\s*\[\s*\]\s*\},'
content, count2 = re.subn(p2, automatizacion + ',', content, flags=re.DOTALL)

p3 = r'\{\s*id:\s*\'3-cable-comando\'.*?certifications:\s*\[\s*\]\s*\},'
content, count3 = re.subn(p3, comando + ',', content, flags=re.DOTALL)

print(f"Replacements done: Instrumentacion={count1}, Automatizacion={count2}, Comando={count3}")

if count1 > 0 and count2 > 0 and count3 > 0:
    with open('services/data.ts', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Successfully updated services/data.ts")
else:
    import sys
    print("Error: Could not find all product blocks in services/data.ts!")
    sys.exit(1)
