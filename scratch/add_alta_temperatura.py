import re
import os

data_path = 'services/data.ts'

with open(data_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Prepare Category 6 products
new_products = []

# Product 6.1: Solares
new_products.append("""  {
    id: 'alta-temp-solares',
    name: 'PAYTON® SOLTIX',
    categoryPath: ['Cables Alta Temperatura', 'Solares'],
    description: 'Cables flexibles con conductor de cobre multifilar, aislados para tensiones nominales de 1,5 kVCC, apto para sistemas fotovoltaicos. Resistente al intemperismo y rayos UV.',
    detailedDescription: `DESCRIPCIÓN
Los Payton® Soltix se utilizan en la interconexión de paneles fotovoltaicos, son adecuados para instalaciones fijas, tanto interior como exterior. NO APTO para aplicaciones de enterramiento directo. Recomendado para instalaciones donde el fuego, la emisión de humos y los vapores tóxicos representan un riesgo.

APLICACIONES
Sistemas solares fotovoltaicos terrestres, sobre cubiertas, plantas de generación y parques solares.`,
    image: '/images/ProductosNuevos/6-CABLES ALTA TEMPERATURA/1-SOLARES/PORTADA.jpeg',
    pdf: '/images/ProductosNuevos/6-CABLES ALTA TEMPERATURA/1-SOLARES/FICHA TECNICA.pdf',
    specs: ['1.5 kVCC', 'Fotovoltaicos', 'Resistente UV'],
    characteristics: [
      'Norma de construcción y ensayo: IEC 62930',
      'Conductor: según IEC 60228 Clase 5. (Opcional Cobre estañado)',
      'Aislación: Polímero reticulado libre de halógenos resistente al fuego',
      'Cubierta: Polímero reticulado libre de halógenos resistente al fuego',
      'Colores de aislación / envoltura: Natural / Negro o Rojo',
      'Rango de fabricación: de 2,5 a 16 mm²'
    ],
    specsTables: [
      {
        title: 'Dimensiones y peso',
        headers: ['Sección nominal (mm²)', 'Diámetro nominal (mm)', 'Peso nominal (kg/km)', 'Resist. Desnudo (Ohm/km)', 'Resist. Estañado (Ohm/km)', '1 cable en aire (A)', '1 cable sobre superf. (A)', '2 cables tocándose (A)'],
        rows: [
          ['2.5', '5.43', '44.33', '7.98', '8.21', '42', '40', '33'],
          ['4', '5.97', '60.49', '4.95', '5.09', '57', '54', '45'],
          ['6', '6.73', '83.15', '3.30', '3.39', '72', '69', '58'],
          ['10', '7.84', '126.86', '1.91', '1.95', '98', '96', '80'],
          ['16', '8.89', '184.36', '1.21', '1.24', '132', '130', '107']
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'libre-halogenos', 'resistente-uv']
  }""")

# Product 6.2: Siliconados
new_products.append("""  {
    id: 'alta-temp-siliconados',
    name: 'Unipolar Siliconado',
    categoryPath: ['Cables Alta Temperatura', 'Siliconados'],
    description: 'Cables flexibles con aislamiento de silicona de alto rendimiento para temperaturas de trabajo extremas.',
    detailedDescription: `DESCRIPCIÓN
Conductor formado a partir del reunido de alambres de cobre recocido según normas IRAM NM 280 en Clase 4 y 5. Aislación conformada por caucho de silicona de alto rendimiento ante bajas y altas temperaturas de trabajo.

APLICACIONES
Apto para artefactos electrodomésticos e industriales y de iluminación de altas o bajas temperaturas. Altamente flexible. Dependiendo de las características eléctricas será diferenciado en tensiones de trabajo.`,
    image: '/images/ProductosNuevos/6-CABLES ALTA TEMPERATURA/2-SILICONADOS/PORTADA Y FOTO FICHA TECNICA.jpeg',
    pdf: '/images/ProductosNuevos/6-CABLES ALTA TEMPERATURA/2-SILICONADOS/FICHA TECNICA.pdf',
    specs: ['-60°C a +180°C', 'Silicona', 'IRAM NM 274'],
    characteristics: [
      'Tensión Nominal de Trabajo: Sil 01 (300/500V) - Sil 02 (450/750V).',
      'Temperatura Máxima de Trabajo: -60°C a +180°C.',
      'Conductor: Alambres de cobre recocido según normas IRAM NM 280 en Clase 4 y 5.',
      'Aislación: Caucho de silicona de alto rendimiento.',
      'Norma constructiva: IRAM NM 274.'
    ],
    specsTables: [
      {
        title: 'Requisitos Generales IRAM NM 274: 2002',
        headers: ['Sección Nominal (mm²)', 'Resist. máxima a 20°C (Ohm/km)', 'Espesor Aisl. SIL 01 (mm)', 'Espesor Aisl. SIL 02 (mm)', 'Diámetro Ext. SIL 01 (mm)', 'Diámetro Ext. SIL 02 (mm)'],
        rows: [
          ['0.5', '36', '0.6', '0.8', '2.1 - 2.6', '2.4 - 3.1'],
          ['0.75', '26', '0.6', '0.8', '2.2 - 2.8', '2.6 - 3.2'],
          ['1', '19.5', '0.6', '0.8', '2.4 - 2.9', '2.7 - 3.4'],
          ['1.5', '13.3', '0.7', '0.8', '2.8 - 3.5', '3.0 - 3.6'],
          ['2.5', '7.98', '-', '0.8', '-', '3.4 - 4.3'],
          ['4', '4.95', '-', '0.8', '-', '3.9 - 4.9'],
          ['6', '3.3', '-', '0.8', '-', '4.4 - 5.5'],
          ['10', '1.91', '-', '1.0', '-', '5.7 - 7.1']
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'temperatura-servicio']
  }""")

# Product 6.3: Fibra de Vidrio / Mica
new_products.append("""  {
    id: 'alta-temp-fibra-mica',
    name: 'Fibra de Vidrio y/o Mica',
    categoryPath: ['Cables Alta Temperatura', 'Fibra de Vidrio y/o Mica'],
    description: 'Cables de extrema resistencia térmica protegidos con trenzas de fibra de vidrio y/o cintas de mica.',
    detailedDescription: `DESCRIPCIÓN
Conductores para temperaturas extremas (hasta 400°C), construidos con conductor de níquel o cobre niquelado, aislados con cintas de mica y protegidos con trenzas de fibra de vidrio impregnadas.

APLICACIONES
Resistencias eléctricas industriales, hornos de fundición, extrusoras de plástico, fundiciones y aplicaciones de seguridad contra incendios donde se requiere soporte a choques térmicos elevados.`,
    image: '/images/ProductosNuevos/6-CABLES ALTA TEMPERATURA/3-FIBRA DE VIDRIO Y-O AISLACIÓN DE MICA/PORTADA.jpeg',
    gallery: [
      '/images/ProductosNuevos/6-CABLES ALTA TEMPERATURA/3-FIBRA DE VIDRIO Y-O AISLACIÓN DE MICA/INFO FICHA TECNICA 1.jpeg',
      '/images/ProductosNuevos/6-CABLES ALTA TEMPERATURA/3-FIBRA DE VIDRIO Y-O AISLACIÓN DE MICA/INFO FICHA TECNICA 2.jpeg',
      '/images/ProductosNuevos/6-CABLES ALTA TEMPERATURA/3-FIBRA DE VIDRIO Y-O AISLACIÓN DE MICA/INFO FECHA TECNICA 3.jpeg',
      '/images/ProductosNuevos/6-CABLES ALTA TEMPERATURA/3-FIBRA DE VIDRIO Y-O AISLACIÓN DE MICA/INFO FICHA TECNICA 4.jpeg'
    ],
    specs: ['400°C', 'Mica / Fibra de Vidrio', 'Extrema Temperatura'],
    characteristics: [
      'Resistencia extrema a altas temperaturas continuas (hasta 400°C).',
      'Aislación mineral de mica de alta resistencia dieléctrica.',
      'Trenza de fibra de vidrio impregnada para protección mecánica y térmica.',
      'Conductor de níquel o cobre niquelado flexible.'
    ],
    certifications: ['iram', 'seguridad', 'temperatura-servicio']
  }""")

# Product 6.4: Pirometría
new_products.append("""  {
    id: 'alta-temp-pirometria',
    name: 'Cables para Pirometría (Serie MP-MT)',
    categoryPath: ['Cables Alta Temperatura', 'Pirometría'],
    description: 'Circuitos de extensión de termocuplas para medición y registro de temperaturas.',
    detailedDescription: `DESCRIPCIÓN
Circuitos de extensión de termocuplas para medición y registro de temperaturas. Los cables están diseñados con las aleaciones correspondientes para garantizar lecturas de sensores precisas.

APLICACIONES
Conexión de termocuplas y sensores de temperatura en hornos, calderas, refinerías y plantas petroquímicas. Instalados en conduits, bandejas, escaleras, al aire libre directo o bajo techo.`,
    image: '/images/ProductosNuevos/6-CABLES ALTA TEMPERATURA/4-PIROMETRIA/PORTADA.jpeg',
    pdf: '/images/ProductosNuevos/6-CABLES ALTA TEMPERATURA/4-PIROMETRIA/FICHA TECNICA(AGREGAR VARIANTES_ PIROMETRIA, ARMADO, CORRUGADO).pdf',
    gallery: [
      '/images/ProductosNuevos/6-CABLES ALTA TEMPERATURA/4-PIROMETRIA/IMAGEN DENTRO DE FICHA.jpeg'
    ],
    specs: ['300 V', 'Extensión Termocuplas', 'UL 13 PLTC'],
    characteristics: [
      'Temperatura máxima de servicio: 105ºC',
      'Tensión nominal: 300 Volt CA',
      'Norma constructiva: UL 13 tipo PLTC - UL 2250 tipo ITC',
      'Norma de conductores termopares: ASTM E 230-98 (Códigos MP) / IEC 60584-3 (Códigos MT)',
      'Termocupla tipo EX: (+) Chromel / (-) Constantan',
      'Termocupla tipo JX: (+) Hierro / (-) Constantan',
      'Termocupla tipo KX: (+) Chromel / (-) Alumel',
      'Termocupla tipo TX: (+) Cobre E / (-) Constantan',
      'Blindaje: Cinta aluminio-poliéster más conductor de drenaje de cobre estañado (cobertura 100%)',
      'Vaina: PVC no propagante del incendio, resistente a rayos UV e hidrocarburos'
    ],
    specsTables: [
      {
        title: 'Dimensiones y Pesos (Estándar)',
        headers: ['Tipo', 'Sección (mm²)', 'AWG', 'Formación del conductor', 'Diámetro exterior (mm)', 'Peso (kg/km)'],
        rows: [
          ['Par rígido', '0.5', '20', '1x0.80', '5.0', '30'],
          ['Par rígido', '1.31', '16', '1x1.29', '6.2', '51'],
          ['Par flexible', '0.5', '20', '16x0.20', '5.3', '32'],
          ['Par flexible', '0.81', '18', '26x0.20', '6.0', '42'],
          ['Par flexible', '1.31', '16', '42x0.20', '6.7', '55']
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion']
  }""")

# Product 6.5: Seguridad e Incendio
new_products.append("""  {
    id: 'alta-temp-seguridad-incendio',
    name: 'Seguridad e Incendio (Serie SWZ)',
    categoryPath: ['Cables Alta Temperatura', 'Seguridad e Incendio'],
    description: 'Cables libres de halógenos para sistemas de detección de fuego y notificación de alarma.',
    detailedDescription: `DESCRIPCIÓN
Cables diseñados para mantener la integridad del servicio eléctrico en condiciones de incendio. Compuesto de LSZH-HFFR (bajo humo, cero halógenos).

APLICACIONES
Sistemas de detección del fuego y notificación de alarma (visual y sonora), flujo y control de los sistemas de rociadores automáticos de agua. Control de las funciones de seguridad del edificio, ascensores, montacargas, megáfonos y ventiladores.`,
    image: '/images/ProductosNuevos/6-CABLES ALTA TEMPERATURA/5-SEGURIDAD E INCENDIO/PORTADA.jpeg',
    pdf: '/images/ProductosNuevos/6-CABLES ALTA TEMPERATURA/5-SEGURIDAD E INCENDIO/FICHA TECNICA (REPETIR IMAGEN FICHA).pdf',
    specs: ['300 V', 'LSZH 90°C', 'UL 1424 FPLR'],
    characteristics: [
      'Temperatura máxima: 90°C',
      'Tensión nominal: 300 Volt',
      'Norma constructiva: UL 1424 tipo FPLR',
      'Conductor: Alambre único de cobre electrolítico recocido',
      'Aislación y Vaina: LSZH-HFFR, no propagante del incendio, resistente a rayos UV y aceites',
      'Norma de humos: IEC 61034-1/2',
      'Norma de ausencia de halógenos: IEC 60754-1/2',
      'Comportamiento frente al agua: Apto AD7 (Inmersión ocasional)'
    ],
    specsTables: [
      {
        title: 'Características Eléctricas y Dimensionales',
        headers: ['Código', 'AWG', 'Estructura', 'Resistencia (Ohm/km)', 'Capacidad (pF/m)', 'Diámetro (mm)', 'Peso (kg/km)'],
        rows: [
          ['SWZ 1p 20', '20', 'Par simple', '37.86', '144', '2.9', '14.6'],
          ['SWZ-O 1p 20', '20', 'Par blindado', '37.86', '279', '3.0', '17.3'],
          ['SWZ 1p 18', '18', 'Par simple', '22.26', '131', '3.7', '22.6'],
          ['SWZ-O 1p 18', '18', 'Par blindado', '22.26', '251', '3.8', '25.2'],
          ['SWZ 1p 16', '16', 'Par simple', '14.04', '147', '4.2', '32.8'],
          ['SWZ-O 1p 16', '16', 'Par blindado', '14.04', '285', '4.3', '35.6']
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'libre-halogenos', 'bajos-humos']
  }""")

# Find insertion point
brands_start_idx = content.find("export const brands = [")
if brands_start_idx == -1:
    brands_start_idx = content.find("export const brands")

if brands_start_idx == -1:
    print("Error: Could not find export const brands in the file")
    exit(1)

products_end_idx = content.rfind("];", 0, brands_start_idx)
if products_end_idx == -1:
    print("Error: Could not find products array closing bracket ]; before brands")
    exit(1)

new_products_str = ",\n".join(new_products)

# Insert before closing bracket of products array
new_content = content[:products_end_idx] + ",\n" + new_products_str + "\n" + content[products_end_idx:]

with open(data_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Successfully appended {len(new_products)} Category 6 products to services/data.ts")
