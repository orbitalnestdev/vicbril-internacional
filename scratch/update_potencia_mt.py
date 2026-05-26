import re

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Define the updated products
subte_al_xlpe = """  {
    id: 'subterraneo-xlpe-aluminio',
    name: 'SUBTERRANEO XLPE',
    categoryPath: ['Cables de Potencia', 'Subterráneos', 'Subterráneo Aluminio'],
    description: 'Cables subterráneos de potencia de aluminio, aislación XLPE y vaina de PVC.',
    detailedDescription: `DESCRIPCIÓN
Cables subterráneos de potencia, de aluminio, con aislación XLPE y vaina de PVC violeta. Aptos para sistemas fijos de potencia y distribución de energía.

APLICACIONES
Instalación a la intemperie, sobre bandejas portacables, en ductos eléctricos o directamente enterrados, en ambientes secos y húmedos.`,
    image: '/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO ALUMINIO/SUBTERRANEO XLPE/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO ALUMINIO/SUBTERRANEO XLPE/FICHA TECNICA/ficha tecnica subte aluminio xlpe.pdf',
    specs: ['1.1 kV', 'Aluminio', 'IRAM 2178-1'],
    characteristics: [
      'Temperatura máxima: 90°C de servicio, 130°C de sobrecarga, 250°C de cortocircuito',
      'Tensión nominal: 0.6 / 1.1 kV',
      'Norma constructiva: IRAM 2178-1 / IEC 60502-1',
      'Norma de conductores: IRAM NM 280 / IEC 60228',
      'Conductor: Aluminio, semirrígido clase 2',
      'Aislación: XLPE (Polietileno reticulado) con identificación por colores normalizados',
      'Relleno: Revestimiento extruido no higroscópico de XLPE o cinta',
      'Vaina exterior: PVC ecológico tipo ST2 color violeta resistente a la propagación de incendios (IRAM NM IEC 60332-3)',
      'Marcaje: Impresión en tinta secuencial metro a metro',
      'Armadura (Opcional): Fleje helicoidal de acero (multipolares) o aluminio (unipolares)'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH'],
    specsTables: [
  {
    title: "DIMENSIONES Y PESOS - UNIPOLARES",
    headers: [
      "Sección nominal (mm²)",
      "Diámetro cond. (mm)",
      "Espesor aisl. (mm)",
      "Espesor env. (mm)",
      "Diámetro ext. (mm)",
      "Masa (kg/km)"
    ],
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
    title: "DIMENSIONES Y PESOS - BIPOLARES",
    headers: [
      "Sección nominal (mm²)",
      "Diámetro cond. (mm)",
      "Espesor aisl. (mm)",
      "Espesor env. (mm)",
      "Diámetro ext. (mm)",
      "Masa (kg/km)"
    ],
    rows: [
      ["458", "19.5", "1.8", "1.00", "5.20", "16"],
      ["647", "23.1", "1.8", "1.20", "6.50", "25"],
      ["777", "25.1", "1.8", "1.20", "7.50", "35"]
    ]
  },
  {
    title: "DIMENSIONES Y PESOS - TRIPOLARES",
    headers: [
      "Sección nominal (mm²)",
      "Diámetro cond. (mm)",
      "Espesor aisl. (mm)",
      "Espesor env. (mm)",
      "Diámetro ext. (mm)",
      "Masa (kg/km)"
    ],
    rows: [
      ["522", "20.7", "1.8", "1.00", "5.20", "16"],
      ["742", "24.6", "1.8", "1.20", "6.50", "25"],
      ["900", "26.7", "1.8", "1.20", "7.50", "35"],
      ["1168", "30.3", "1.9", "1.40", "8.60", "50"],
      ["1521", "34.2", "2.0", "1.40", "10.20", "70"],
      ["2018", "39.3", "2.2", "1.60", "12.00", "95"],
      ["2413", "42.7", "2.3", "1.60", "13.50", "120"],
      ["2940", "47.1", "2.5", "1.80", "15.00", "150"],
      ["3666", "52.6", "2.7", "2.00", "16.80", "185"]
    ]
  },
  {
    title: "DIMENSIONES Y PESOS - TETRAPOLARES",
    headers: [
      "Sección nominal (mm²)",
      "Diámetro cond. (mm)",
      "Espesor aisl. (mm)",
      "Espesor env. (mm)",
      "Diámetro ext. (mm)",
      "Masa (kg/km)"
    ],
    rows: [
      ["623", "22.5", "1.8", "1.0", "5.2", "16"],
      ["824", "25.8", "1.8", "1.2/1.0", "6.5/5.2", "25/16"],
      ["968", "27.7", "1.8", "1.2/1.0", "7.5/5.2", "35/16"],
      ["1290", "31.7", "2.0", "1.4/1.2", "8.6/6.5", "50/25"],
      ["1670", "35.7", "2.1", "1.4/1.2", "10.2/7.5", "70/35"],
      ["2210", "40.9", "2.3", "1.6/1.4", "12.0/8.6", "95/50"],
      ["2687", "44.8", "2.4", "1.6/1.4", "13.5/10.2", "120/70"],
      ["3155", "48.5", "2.5", "1.8/1.4", "15.0/10.2", "150/70"]
    ]
  }
]
  }"""

subte_cu_xlpe = """  {
    id: 'subterraneo-xlpe-cobre',
    name: 'SUBTERRANEO XLPE',
    categoryPath: ['Cables de Potencia', 'Subterráneos', 'Subterráneo Cobre'],
    description: 'Cables subterráneos de potencia de cobre, aislación XLPE y vaina de PVC.',
    detailedDescription: `DESCRIPCIÓN
Cables subterráneos de potencia, de cobre recocido, con aislación XLPE y vaina de PVC violeta. Aptos para sistemas fijos de potencia y distribución de energía.

APLICACIONES
Instalación a la intemperie, sobre bandejas portacables, en ductos eléctricos o directamente enterrados, en ambientes secos y húmedos.`,
    image: '/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO COBRE/SUBTERRANEO XLPE/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO COBRE/SUBTERRANEO XLPE/FICHA TECNICA/ficha tecnica subte cobre xlpe.pdf',
    specs: ['1.1 kV', 'Cobre Clase 4/5/2', 'IRAM 2178-1'],
    characteristics: [
      'Temperatura máxima: 90°C de servicio, 130°C de sobrecarga, 250°C de cortocircuito',
      'Tensión nominal: 0.6 / 1.1 kV',
      'Norma constructiva: IRAM 2178-1 / IEC 60502-1',
      'Norma de conductores: IRAM NM 280 / IEC 60228',
      'Conductor: Cobre recocido flexible clase 4 o 5 (hasta 35 mm²) y semirrígido clase 2 (desde 50 mm²)',
      'Aislación: XLPE (Polietileno reticulado) con identificación por colores normalizados',
      'Relleno: Revestimiento extruido no higroscópico de XLPE o cinta',
      'Vaina exterior: PVC ecológico tipo ST2 color violeta resistente a la propagación de incendios (IRAM NM IEC 60332-3)',
      'Marcaje: Impresión en tinta secuencial metro a metro',
      'Armadura (Opcional): Fleje helicoidal de acero (multipolares) o aluminio (unipolares)'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH'],
    specsTables: [
  {
    title: "DIMENSIONES Y PESOS - UNIPOLARES",
    headers: [
      "Sección nominal (mm²)",
      "Diámetro cond. (mm)",
      "Espesor aisl. (mm)",
      "Espesor env. (mm)",
      "Diámetro ext. (mm)",
      "Masa (kg/km)"
    ],
    rows: [
      ["25", "6.70", "1.20", "1.4", "12.1", "326"],
      ["35", "7.60", "1.20", "1.4", "13.0", "413"],
      ["50", "9.30", "1.40", "1.4", "15.1", "588"],
      ["70", "10.80", "1.40", "1.4", "16.6", "772"],
      ["95", "12.62", "1.60", "1.5", "19.0", "989"],
      ["120", "14.30", "1.60", "1.6", "20.9", "1273"],
      ["150", "15.85", "1.80", "1.6", "22.9", "1604"],
      ["185", "18.00", "2.00", "1.7", "25.6", "1930"],
      ["240", "22.10", "2.20", "1.8", "30.3", "2493"],
      ["300", "26.10", "2.40", "1.9", "34.9", "3252"]
    ]
  },
  {
    title: "DIMENSIONES Y PESOS - BIPOLARES",
    headers: [
      "Sección nominal (mm²)",
      "Diámetro cond. (mm)",
      "Espesor aisl. (mm)",
      "Espesor env. (mm)",
      "Diámetro ext. (mm)",
      "Masa (kg/km)"
    ],
    rows: [
      ["157", "11.1", "1.8", "0.80", "1.53", "1,5"],
      ["192", "11.9", "1.8", "0.80", "1.95", "2,5"],
      ["261", "13.7", "1.8", "1.00", "2.43", "4"],
      ["331", "15.0", "1.8", "1.00", "2.98", "6"],
      ["489", "17.8", "1.8", "1.00", "4.42", "10"],
      ["654", "19.9", "1.8", "1.00", "5.40", "16"],
      ["955", "23.5", "1.8", "1.20", "6.70", "25"],
      ["1165", "25.3", "1.8", "1.20", "7.60", "35"]
    ]
  },
  {
    title: "DIMENSIONES Y PESOS - TRIPOLARES",
    headers: [
      "Sección nominal (mm²)",
      "Diámetro cond. (mm)",
      "Espesor aisl. (mm)",
      "Espesor env. (mm)",
      "Diámetro ext. (mm)",
      "Masa (kg/km)"
    ],
    rows: [
      ["179", "11.6", "1.8", "0.80", "1.53", "1.5"],
      ["223", "12.5", "1.8", "0.80", "1.95", "2.5"],
      ["308", "14.4", "1.8", "1.00", "2.43", "4"],
      ["400", "15.8", "1.8", "1.00", "2.98", "6"],
      ["595", "18.9", "1.8", "1.00", "4.40", "10"],
      ["748", "21.1", "1.8", "1.00", "5.40", "16"],
      ["1186", "25.0", "1.8", "1.20", "6.70", "25"],
      ["1486", "27.0", "1.8", "1.20", "7.60", "35"],
      ["2187", "31.9", "2.0", "1.40", "9.30", "50"],
      ["2920", "35.6", "2.1", "1.40", "10.80", "70"],
      ["3908", "40.7", "2.3", "1.60", "12.62", "95"],
      ["4572", "44.6", "2.4", "1.60", "14.30", "120"],
      ["5869", "49.1", "2.5", "1.80", "15.85", "150"],
      ["7386", "55.4", "2.7", "2.00", "18.00", "185"]
    ]
  },
  {
    title: "DIMENSIONES Y PESOS - TETRAPOLARES",
    headers: [
      "Sección nominal (mm²)",
      "Diámetro cond. (mm)",
      "Espesor aisl. (mm)",
      "Espesor env. (mm)",
      "Diámetro ext. (mm)",
      "Masa (kg/km)"
    ],
    rows: [
      ["210", "12.4", "1.8", "0.80", "1.53", "1.5"],
      ["266", "13.4", "1.8", "0.80", "1.95", "2.5"],
      ["374", "15.5", "1.8", "1.00", "2.43", "4"],
      ["475", "17.0", "1.8", "1.00", "2.98", "6"],
      ["729", "20.5", "1.8", "1.00", "4.42", "10"],
      ["991", "23.0", "1.8", "1.00", "5.40", "16"],
      ["1370", "26.3", "1.8", "1.2/1.0", "6.7/5.4", "25/16"]
    ]
  }
]
  }"""

bomba_sumergible = """  {
    id: '2-para-bomba-sumergible',
    name: '2-PARA BOMBA SUMERGIBLE',
    categoryPath: ['Cables de Potencia', 'Bomba Sumergible'],
    description: 'Cables flexibles con vaina plana celeste para el conexionado de todo tipo de bombas sumergibles.',
    detailedDescription: `DESCRIPCIÓN
Cables planos (vaina chata) diseñados especialmente para la alimentación de bombas sumergibles. Poseen excelente flexibilidad y resistencia a la inmersión en agua y agentes químicos comunes.

APLICACIONES
Conexionado y alimentación eléctrica de bombas sumergibles instaladas en pozos de agua, cisternas y aplicaciones industriales similares.`,
    image: '/images/ProductosNuevos/3-CABLES DE POTENCIA/2-PARA BOMBA SUMERGIBLE/foto ficha tecnica(1).jpeg',
    gallery: [],
    pdf: '/images/ProductosNuevos/3-CABLES DE POTENCIA/2-PARA BOMBA SUMERGIBLE/FICHA TECNICA BOMBA SUMERGIBLE.pdf',
    specs: ['IRAM 63007', 'Cu Clase 4', 'Vaina Celeste'],
    characteristics: [
      'Temperatura máxima de servicio: 70°C',
      'Tensión nominal: 450/750 V',
      'Norma constructiva: IRAM 63007',
      'Norma de conductores: IRAM NM 280 Clase 4',
      'Conductor: Cuerdas flexibles de alambres de cobre electrolítico recocido',
      'Aislación: PVC especial contra llama',
      'Disposición: Conductores aislados colocados de forma paralela en vaina plana',
      'Vaina exterior: PVC celeste especial contra llama con marcado secuencial metro a metro',
      'Marcaje: Facilita el corte a la medida exacta sin errores de medición',
      'Resistencia: Alta resistencia al agua, abrasión y golpes mecánicos'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH'],
    specsTables: [
      {
        title: "Características Dimensionales",
        headers: ["Código", "Formación (N° x mm²)", "Espesor aislación (mm)", "Espesor vaina (mm)", "Medidas aprox. (mm)", "Intensidad corriente (A)*", "Peso aprox. (kg/100m)", "Embalaje"],
        rows: [
          ["B2150", "2 x 1,50", "1,2", "1,25", "14,20 x 7,10", "20", "16,5", "Corte a medida"],
          ["B150", "3 x 1,50", "1,2", "1,5", "15,00 x 7,15", "20", "17,7", "Corte a medida"],
          ["B250", "3 x 2,50", "1,2", "1,4", "16,60 x 7,90", "28", "23,3", "Corte a medida"],
          ["B4", "3 x 4", "1,2", "1,4", "18,40 x 8,30", "36", "29,5", "Corte a medida"],
          ["B6", "3 x 6", "1,2", "1,45", "19,80 x 9,00", "46", "36,0", "Corte a medida"],
          ["B10", "3 x 10", "1,4", "1,55", "24,60 x 10,90", "60", "58,3", "Corte a medida"],
          ["B16", "3 x 16", "1,4", "1,65", "29,00 x 12,60", "82", "85,0", "Corte a medida"],
          ["B25", "3 x 25", "1,7", "1,8", "34,50 x 15,70", "105", "130,0", "Corte a medida"],
          ["B35", "3 x 35", "1,7", "1,9", "38,50 x 17,70", "122", "171,6", "Corte a medida"],
          ["B50", "3 x 50", "1,9", "2,05", "45,40 x 18,00", "146", "227,0", "Corte a medida"],
          ["B70", "3 x 70", "1,9", "2,2", "52,20 x 21,00", "170", "227,0", "Corte a medida"],
          ["B95", "3 x 95", "2,2", "2,4", "60,10 x 24,00", "208", "407,0", "Corte a medida"],
          ["B4150", "4 x 1,50", "1,2", "1,5", "16,90 x 5,30", "20", "22,0", "Corte a medida"],
          ["B4250", "4 x 2,50", "1,2", "1,7", "18,70 x 5,80", "28", "28,0", "Corte a medida"]
        ],
        note: "(*) Intensidad de corriente admisible válida para temperatura del medio a 20° C."
      }
    ]
  }"""

vdf = """  {
    id: '3-para-variador-de-frecuencia',
    name: '3-PARA VARIADOR DE FRECUENCIA',
    categoryPath: ['Cables de Potencia', 'Variador de Frecuencia'],
    description: 'Alimentación de motores con variadores de frecuencia. (VDF) - XLPE/PVC - 0,6/1kV - 90ºC.',
    detailedDescription: `DESCRIPCIÓN
Cables tripolares blindados diseñados especialmente para la alimentación de motores comandados por variadores de frecuencia (VDF/VFD). Ofrecen una excelente inmunidad a las interferencias electromagnéticas (EMI) gracias a su doble blindaje concéntrico.

APLICACIONES
Conexión de potencia entre convertidores de frecuencia y motores eléctricos en aplicaciones industriales y de automatización.`,
    image: '/images/ProductosNuevos/3-CABLES DE POTENCIA/3-PARA VARIADOR DE FRECUENCIA/foto ficha tecnica(1).jpeg',
    gallery: [],
    pdf: '/images/ProductosNuevos/3-CABLES DE POTENCIA/3-PARA VARIADOR DE FRECUENCIA/FICHA TECNICA VDF.pdf',
    specs: ['0.6/1 kV', 'Doble Blindaje', 'XLPE/PVC'],
    characteristics: [
      'Temperatura máxima: 90ºC de servicio, 130ºC de sobrecarga, 250ºC de cortocircuito',
      'Tensión nominal: 600/1000 Volt CA (máxima 1200 / 1500 Volt CC)',
      'Norma constructiva: IEC 60502-1 / IRAM 2178-1',
      'Norma de fuego: IEC 60332-3-24 / IRAM NM IEC 60332-3-24 - No propagación de incendio',
      'Norma de conductores: IEC 60228 / IRAM NM 280',
      'Conductor: Cobre electrolítico recocido en formación clase 5 (cuerdas flexibles)',
      'Aislación: XLPE (Polietileno reticulado)',
      'Doble Blindaje: Conductor concéntrico de alambres de cobre más cinta de cobre helicoidal con solapamiento y cobertura del 100%',
      'Vaina exterior: PVC color violeta, no propagante del incendio y resistente a hidrocarburos',
      'Montaje: Radio mínimo de curvatura de 12 x diámetro exterior. Tracción máxima 5daN/mm² en conductores',
      'Opcionales: Armadura de alambres o flejes de acero cincado (bajo pedido)'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion', 'interferencias'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH'],
    specsTables: [
      {
        title: "Características Eléctricas",
        headers: ["Sección nominal (mm²)", "Sección Cond. Concéntrico (mm²)", "Resistencia CA a 90ºC (Ohm/km)", "Resistencia Blindaje a 90ºC (Ohm/km)", "Reactancia inductiva a 50Hz (Ohm/km)", "Intensidad en aire a 40ºC (A)*", "Intensidad en tierra a 25ºC (A)**"],
        rows: [
          ["1.5", "6", "16.96", "4.21", "0.100", "20.0", "27.6"],
          ["2.5", "6", "10.18", "4.21", "0.093", "27.6", "37.1"],
          ["4", "6", "6.31", "4.21", "0.088", "36.1", "48.5"],
          ["6", "6", "4.21", "4.21", "0.083", "46.6", "60.8"],
          ["10", "10", "2.44", "2.44", "0.078", "64.6", "82.7"],
          ["16", "16", "1.54", "1.54", "0.075", "86.5", "107.4"],
          ["25", "16", "0.995", "1.54", "0.075", "109.3", "140.6"],
          ["35", "16", "0.707", "1.54", "0.073", "136.8", "168.2"],
          ["50", "25", "0.493", "0.995", "0.073", "166.3", "198.6"],
          ["70", "35", "0.348", "0.707", "0.071", "212.8", "243.2"],
          ["95", "50", "0.264", "0.493", "0.070", "257.5", "292.6"],
          ["120", "70", "0.207", "0.348", "0.070", "299.3", "333.5"],
          ["150", "70", "0.166", "0.348", "0.070", "344.9", "373.4"],
          ["185", "95", "0.137", "0.264", "0.070", "394.3", "424.7"],
          ["240", "120", "0.105", "0.207", "0.069", "464.6", "493.1"],
          ["300", "150", "0.0853", "0.166", "0.069", "536.8", "558.6"]
        ],
        note: "(*) En aire a 40ºC según IEC 364-5-523. (**) Enterrados a 25ºC, resistividad del terreno 1 K.m/W, profundidad 0.7m."
      },
      {
        title: "Dimensiones y Pesos",
        headers: ["Sección (N° x mm²)", "Código", "Diam. bajo armadura (mm)", "Diámetro exterior (mm)", "Peso (kg/km)"],
        rows: [
          ["3x1", "BX 0310", "7.7", "12.7", "233"],
          ["3x1,5", "BX 0315", "8.4", "13.4", "259"],
          ["3x2,5", "BX 0325", "9.3", "14.3", "300"],
          ["3x4", "BX 0340", "10.3", "15.3", "359"],
          ["3x6", "BX 0360", "11.7", "16.7", "443"],
          ["3x10", "BX 3100", "14.0", "19.0", "646"],
          ["3x16", "BX 3160", "16.0", "21.0", "892"],
          ["3x25", "BX 3250", "19.5", "24.5", "1230"],
          ["3x35", "BX 3350", "21.7", "26.7", "1553"],
          ["3x50", "BX 3500", "25.1", "30.1", "2118"],
          ["3x70", "BX 3700", "30.3", "35.7", "2997"],
          ["3x95", "BX 3950", "34.6", "41.3", "3909"],
          ["3x120", "BX 31200", "38.0", "44.9", "5174"],
          ["3x150", "BX 31500", "44.1", "51.4", "6085"],
          ["3x185", "BX 31850", "47.9", "55.4", "7387"],
          ["3x240", "BX 32400", "55.3", "63.2", "9697"],
          ["3x300", "BX 33000", "61.7", "70.0", "12009"]
        ]
      }
    ]
  }"""

mt_132_al = """  {
    id: '13-2-kv-aluminio',
    name: '13,2 KV',
    categoryPath: ['Cables de Media Tensión', 'Aluminio', '13.2 kV'],
    description: 'Cables subterráneos de potencia de aluminio para 13.2 kV, aislación de XLPE y vaina de PVC.',
    detailedDescription: `DESCRIPCIÓN
Cables unipolares subterráneos de potencia, de aluminio compactado, aislación de XLPE y envoltura de PVC. Diseñados para sistemas de media tensión.

APLICACIONES
Instalaciones fijas en intemperie, sobre bandejas, en ductos eléctricos o directamente enterrados.`,
    image: '/images/ProductosNuevos/4- CABLES DE MEDIA TENSION/CABLES MEDIA TENSION ALUMINIO/13,2 KV/portada.jpeg',
    gallery: [],
    pdf: '/images/ProductosNuevos/4- CABLES DE MEDIA TENSION/CABLES MEDIA TENSION ALUMINIO/13,2 KV/FICHA TECNICA MT 13.2KV ALUMINIO.pdf',
    specs: ['13.2 kV', 'Aluminio', 'IRAM 2178-2'],
    characteristics: [
      'Tensión nominal de servicio: 13.2 kV',
      'Temperatura de servicio: 90 ºC continuo, 250 ºC cortocircuito',
      'Norma constructiva: IRAM 2178-2 / IEC 60502-2',
      'Norma de conductores: IRAM NM 280 / IEC 60228',
      'Conductor: Aluminio puro compactado',
      'Aislación: XLPE (Polietileno reticulado)',
      'Pantalla metálica: Alambres o cintas de cobre',
      'Envoltura exterior: PVC violeta resistente a la intemperie y radiación UV',
      'Armadura (Opcional): Alambres o flejes helicoidales de acero cincado o aluminio'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH'],
    specsTables: [
      {
        title: "Dimensiones y Pesos Aproximados (Aluminio)",
        headers: ["Sección (mm²)", "Diámetro cond. (mm)", "Diámetro ext. s/armar (mm)", "Diámetro ext. armado (mm)", "Peso s/armar (kg/km)", "Peso armado (kg/km)"],
        rows: [
          ["70", "9.9", "22.5", "27.4", "679", "1027"],
          ["95", "11.5", "24.1", "29.2", "783", "1166"],
          ["120", "13.05", "25.65", "30.75", "893", "1296"],
          ["150", "14.4", "27.0", "32.3", "1009", "1417"],
          ["185", "15.95", "28.8", "33.85", "1136", "1565"],
          ["240", "18.65", "31.7", "36.75", "1396", "1861"],
          ["300", "20.4", "34.2", "39.1", "1569", "2075"],
          ["400", "23.65", "37.65", "42.95", "1944", "2516"],
          ["500", "26.1", "42.3", "47.8", "2294", "2901"],
          ["630", "29.6", "46.0", "51.5", "2767", "3424"]
        ],
        note: "Valores aproximados para cables con conductor de aluminio, de acuerdo a Norma IRAM 2178-2."
      }
    ]
  }"""

mt_33_al = """  {
    id: '33-kv-aluminio',
    name: '33 KV',
    categoryPath: ['Cables de Media Tensión', 'Aluminio', '33 kV'],
    description: 'Cables subterráneos de potencia de aluminio para 33 kV, aislación de XLPE y vaina de PVC.',
    detailedDescription: `DESCRIPCIÓN
Cables unipolares subterráneos de potencia, de aluminio compactado, aislación de XLPE y envoltura de PVC. Diseñados para sistemas de distribución de 33 kV.

APLICACIONES
Instalaciones fijas en intemperie, sobre bandejas, en ductos eléctricos o directamente enterrados.`,
    image: '/images/ProductosNuevos/4- CABLES DE MEDIA TENSION/CABLES MEDIA TENSION ALUMINIO/33 KV/portada.jpeg',
    gallery: [],
    pdf: '/images/ProductosNuevos/4- CABLES DE MEDIA TENSION/CABLES MEDIA TENSION ALUMINIO/33 KV/FICHA TECNICA MT 33KV ALUMINIO.pdf',
    specs: ['33 kV', 'Aluminio', 'IRAM 2178-2'],
    characteristics: [
      'Tensión nominal de servicio: 33 kV',
      'Temperatura de servicio: 90 ºC continuo, 250 ºC cortocircuito',
      'Norma constructiva: IRAM 2178-2 / IEC 60502-2',
      'Norma de conductores: IRAM NM 280 / IEC 60228',
      'Conductor: Aluminio puro compactado',
      'Aislación: XLPE (Polietileno reticulado)',
      'Pantalla metálica: Alambres o cintas de cobre',
      'Envoltura exterior: PVC violeta resistente a la intemperie y radiación UV',
      'Armadura (Opcional): Alambres o flejes helicoidales de acero cincado o aluminio'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH'],
    specsTables: [
      {
        title: "Dimensiones y Pesos Aproximados (Aluminio)",
        headers: ["Sección (mm²)", "Diámetro cond. (mm)", "Diámetro ext. s/armar (mm)", "Diámetro ext. armado (mm)", "Peso s/armar (kg/km)", "Peso armado (kg/km)"],
        rows: [
          ["50", "8.1", "32.1", "37.0", "946", "1364"],
          ["70", "9.9", "33.9", "39.0", "1074", "1532"],
          ["95", "11.5", "35.5", "40.6", "1199", "1677"],
          ["120", "13.05", "37.05", "42.35", "1331", "1848"],
          ["150", "14.4", "38.6", "44.1", "1471", "2028"],
          ["185", "15.95", "40.15", "45.65", "1621", "2199"],
          ["240", "18.65", "43.05", "48.55", "1924", "2541"],
          ["300", "20.4", "45.0", "50.5", "2142", "2786"],
          ["400", "23.65", "49.59", "55.09", "2575", "3282"],
          ["500", "26.05", "50.85", "56.75", "2930", "3705"],
          ["630", "29.55", "54.55", "60.65", "3450", "4306"]
        ],
        note: "Valores aproximados para cables con conductor de aluminio, de acuerdo a Norma IRAM 2178-2."
      }
    ]
  }"""

mt_132_cu = """  {
    id: '13-2-kv-cobre',
    name: '13,2 KV',
    categoryPath: ['Cables de Media Tensión', 'Cobre', '13.2 kV'],
    description: 'Cables subterráneos de potencia de cobre para 13.2 kV, aislación de XLPE y vaina de PVC.',
    detailedDescription: `DESCRIPCIÓN
Cables unipolares subterráneos de potencia, de cobre electrolítico compactado, aislación de XLPE y envoltura de PVC. Diseñados para sistemas de media tensión.

APLICACIONES
Instalaciones fijas en intemperie, sobre bandejas, en ductos eléctricos o directamente enterrados.`,
    image: '/images/ProductosNuevos/4- CABLES DE MEDIA TENSION/CABLES MEDIA TENSION COBRE/13,2 KV/portada.jpeg',
    gallery: [],
    pdf: '/images/ProductosNuevos/4- CABLES DE MEDIA TENSION/CABLES MEDIA TENSION COBRE/13,2 KV/FICHA TECNICA MT 13.2KV COBRE.pdf',
    specs: ['13.2 kV', 'Cobre', 'IRAM 2178-2'],
    characteristics: [
      'Tensión nominal de servicio: 13.2 kV',
      'Temperatura de servicio: 90 ºC continuo, 250 ºC cortocircuito',
      'Norma constructiva: IRAM 2178-2 / IEC 60502-2',
      'Norma de conductores: IRAM NM 280 / IEC 60228',
      'Conductor: Cobre electrolítico recocido compactado clase 2',
      'Aislación: XLPE (Polietileno reticulado)',
      'Pantalla metálica: Alambres o cintas de cobre',
      'Envoltura exterior: PVC violeta resistente a la intemperie y radiación UV',
      'Armadura (Opcional): Alambres o flejes helicoidales de acero cincado o aluminio'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH'],
    specsTables: [
      {
        title: "Dimensiones y Pesos Aproximados (Cobre)",
        headers: ["Sección (mm²)", "Diámetro cond. (mm)", "Diámetro ext. s/armar (mm)", "Diámetro ext. armado (mm)", "Peso s/armar (kg/km)", "Peso armado (kg/km)"],
        rows: [
          ["35", "7.05", "19.65", "24.55", "728", "1028"],
          ["50", "8.1", "20.7", "25.6", "852", "1177"],
          ["70", "9.9", "22.5", "27.4", "1096", "1445"],
          ["95", "11.5", "24.1", "29.2", "1347", "1730"],
          ["120", "13.05", "25.65", "30.75", "1621", "2025"],
          ["150", "14.4", "27.0", "32.3", "1897", "2305"],
          ["185", "15.95", "28.8", "33.85", "2227", "2655"],
          ["240", "18.65", "31.7", "36.75", "2903", "3368"],
          ["300", "20.4", "34.2", "39.1", "3374", "3879"],
          ["400", "23.65", "37.65", "42.95", "4375", "4947"],
          ["500", "26.1", "42.3", "47.8", "5203", "5810"]
        ],
        note: "Valores aproximados para cables con conductor de cobre, de acuerdo a Norma IRAM 2178-2."
      }
    ]
  }"""

mt_33_cu = """  {
    id: '33-kv-cobre',
    name: '33 KV',
    categoryPath: ['Cables de Media Tensión', 'Cobre', '33 kV'],
    description: 'Cables subterráneos de potencia de cobre para 33 kV, aislación de XLPE y vaina de PVC.',
    detailedDescription: `DESCRIPCIÓN
Cables unipolares subterráneos de potencia, de cobre electrolítico compactado, aislación de XLPE y envoltura de PVC. Diseñados para sistemas de distribución de 33 kV.

APLICACIONES
Instalaciones fijas en intemperie, sobre bandejas, en ductos eléctricos o directamente enterrados.`,
    image: '/images/ProductosNuevos/4- CABLES DE MEDIA TENSION/CABLES MEDIA TENSION COBRE/33 KV/portada.jpeg',
    gallery: [],
    pdf: '/images/ProductosNuevos/4- CABLES DE MEDIA TENSION/CABLES MEDIA TENSION COBRE/33 KV/FICHA TECNICA MT 33KV COBRE.pdf',
    specs: ['33 kV', 'Cobre', 'IRAM 2178-2'],
    characteristics: [
      'Tensión nominal de servicio: 33 kV',
      'Temperatura de servicio: 90 ºC continuo, 250 ºC cortocircuito',
      'Norma constructiva: IRAM 2178-2 / IEC 60502-2',
      'Norma de conductores: IRAM NM 280 / IEC 60228',
      'Conductor: Cobre electrolítico recocido compactado clase 2',
      'Aislación: XLPE (Polietileno reticulado)',
      'Pantalla metálica: Alambres o cintas de cobre',
      'Envoltura exterior: PVC violeta resistente a la intemperie y radiación UV',
      'Armadura (Opcional): Alambres o flejes helicoidales de acero cincado o aluminio'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH'],
    specsTables: [
      {
        title: "Dimensiones y Pesos Aproximados (Cobre)",
        headers: ["Sección (mm²)", "Diámetro cond. (mm)", "Diámetro ext. s/armar (mm)", "Diámetro ext. armado (mm)", "Peso s/armar (kg/km)", "Peso armado (kg/km)"],
        rows: [
          ["50", "8.1", "32.1", "37.0", "1224", "1642"],
          ["70", "9.9", "33.9", "39.0", "1491", "1949"],
          ["95", "11.5", "35.5", "40.6", "1763", "2241"],
          ["120", "13.05", "37.05", "42.35", "2059", "2576"],
          ["150", "14.4", "38.6", "44.1", "2359", "2916"],
          ["185", "15.95", "40.15", "45.65", "2711", "3290"],
          ["240", "18.65", "43.05", "48.55", "3430", "4048"],
          ["300", "20.4", "45.0", "50.5", "3946", "4591"],
          ["400", "23.65", "49.59", "55.09", "5006", "5712"]
        ],
        note: "Valores aproximados para cables con conductor de cobre, de acuerdo a Norma IRAM 2178-2."
      }
    ]
  }"""

# Replacements
def replace_block(pattern_id, replacement_str, text):
    # Find matching brace pair for this id
    m = re.search(r'\{\s*id:\s*\'' + pattern_id + r'\'', text)
    if not m:
        return text, 0
    start_pos = m.start()
    sub = text[start_pos:start_pos+12000]
    next_id = re.search(r'id:\s*\'', sub[10:])
    if next_id:
        block = sub[:10+next_id.start()]
    else:
        end_match = re.search(r'\]\s*;', sub)
        if end_match:
            block = sub[:end_match.start()]
        else:
            block = sub
            
    open_brace_idx = start_pos
    full_block = text[open_brace_idx:open_brace_idx + len(block)]
    last_brace = full_block.rfind('}')
    if last_brace != -1:
        full_block = full_block[:last_brace+1]
    
    # We replace full_block with replacement_str
    # Let's count replacement
    new_text = text.replace(full_block, replacement_str)
    return new_text, 1

replacements = {
    'subterraneo-xlpe-aluminio': subte_al_xlpe,
    'subterraneo-xlpe-cobre': subte_cu_xlpe,
    '2-para-bomba-sumergible': bomba_sumergible,
    '3-para-variador-de-frecuencia': vdf,
    '13-2-kv-aluminio': mt_132_al,
    '33-kv-aluminio': mt_33_al,
    '13-2-kv-cobre': mt_132_cu,
    '33-kv-cobre': mt_33_cu
}

total_count = 0
for pid, repl in replacements.items():
    content, count = replace_block(pid, repl, content)
    total_count += count
    print(f"Replaced {pid}: {count}")

if total_count == 8:
    with open('services/data.ts', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Successfully updated all 8 products in services/data.ts")
else:
    import sys
    print(f"Error: Only replaced {total_count} of 8 products!")
    sys.exit(1)
