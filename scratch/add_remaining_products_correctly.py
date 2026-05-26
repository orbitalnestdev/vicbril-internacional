import re

data_path = r"c:\Users\azcur\OneDrive\Documentos\PROYECTOS\vicbril-internacional\services\data.ts"

with open(data_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update the categories array at the top of the file
cat_start = content.find("export const categories: Category[] = [")
cat_end = content.find("];", cat_start) + 2

new_categories = """export const categories: Category[] = [
  {
    "id": "civil",
    "name": "Cables para Instalación Civil",
    "slug": "instalacion-civil",
    "image": "/images/PRODUCTOS/PORTADA.png",
    "banner": "/images/PRODUCTOS/PORTADA.png"
  },
  {
    "id": "aerea",
    "name": "Cables Instalación Aérea",
    "slug": "instalacion-aerea",
    "image": "/images/PRODUCTOS/2-LINEAS AEREAS/PORTADA.jpeg",
    "banner": "/images/PRODUCTOS/2-LINEAS AEREAS/PORTADA.jpeg"
  },
  {
    "id": "potencia",
    "name": "Cables de Potencia",
    "slug": "cables-potencia",
    "image": "/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/PORTADA.jpeg",
    "banner": "/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/PORTADA.jpeg"
  },
  {
    "id": "media-tension",
    "name": "Cables de Media Tensión",
    "slug": "media-tension",
    "image": "/images/ProductosNuevos/4- CABLES DE MEDIA TENSION/PORTADA.jpeg",
    "banner": "/images/ProductosNuevos/4- CABLES DE MEDIA TENSION/PORTADA.jpeg"
  },
  {
    "id": "industriales",
    "name": "Cables Industriales",
    "slug": "cables-industriales",
    "image": "/images/ProductosNuevos/5-CABLES INDUSTRIALES/portada.jpeg",
    "banner": "/images/ProductosNuevos/5-CABLES INDUSTRIALES/portada.jpeg"
  },
  {
    "id": "alta-temperatura",
    "name": "Cables Alta Temperatura",
    "slug": "alta-temperatura",
    "image": "/images/home_productos/Cables-alta-temperatura.jpg",
    "banner": "/images/home_productos/Cables-alta-temperatura.jpg"
  },
  {
    "id": "cables-armados",
    "name": "Cables Armados",
    "slug": "cables-armados",
    "image": "/images/home_productos/Cables-armados.jpg",
    "banner": "/images/home_productos/Cables-armados.jpg"
  },
  {
    "id": "cables-especiales",
    "name": "Resto de Cables Especiales",
    "slug": "cables-especiales",
    "image": "/images/home_productos/Resto-de-Cables-Especiales.jpg",
    "banner": "/images/home_productos/Resto-de-Cables-Especiales.jpg"
  },
  {
    "id": "materiales-electricos",
    "name": "Resto de Materiales Eléctricos",
    "slug": "materiales-electricos",
    "image": "/images/home_productos/Materiales electricos.jpg",
    "banner": "/images/home_productos/Materiales electricos.jpg"
  }
];"""

content_updated_cat = content[:cat_start] + new_categories + content[cat_end:]

# 2. Append the new products to the products array
# The products array ends with the "];" that comes right before "export const brands = ["
brands_start_idx = content_updated_cat.find("export const brands = [")
if brands_start_idx == -1:
    # If the TS syntax is different, try looking for just export const brands
    brands_start_idx = content_updated_cat.find("export const brands")

if brands_start_idx == -1:
    print("Error: Could not find export const brands in the file")
    exit(1)

products_end_idx = content_updated_cat.rfind("];", 0, brands_start_idx)
if products_end_idx == -1:
    print("Error: Could not find products array closing bracket ]; before brands")
    exit(1)

# Define the new products string
p_alta_solares = """  {
    id: 'alta-temp-solares',
    name: 'Cables Solares Fotovoltaicos',
    category: 'Cables Alta Temperatura',
    subCategory: '1-SOLARES',
    description: 'Cables diseñados para la interconexión de sistemas de energía solar fotovoltaica, con alta resistencia UV y térmica.',
    detailedDescription: `DESCRIPCIÓN
Cables para sistemas de energía solar fotovoltaica (PV), diseñados para operar en condiciones climáticas extremas y exposición directa al sol.

APLICACIONES
Conexión de paneles solares fotovoltaicos, inversores y cajas de conexiones en instalaciones terrestres y flotantes.`,
    image: '/images/home_productos/Cables-alta-temperatura.jpg',
    gallery: [],
    specs: ['1.8 kV CC', 'XLPE H1Z2Z2-K', 'Resistente UV'],
    technicalIntro: `CARACTERÍSTICAS
Norma: EN 50618 (H1Z2Z2-K)
Temperatura de servicio: -40°C a 90°C (hasta 120°C en el conductor)
Resistente al ozono, rayos UV y libre de halógenos.`,
    characteristics: [
      'Resistente a la intemperie y radiación UV.',
      'Libre de halógenos y baja emisión de humos.',
      'Vida útil estimada de más de 25 años.'
    ],
    specsTables: [
      {
        title: "Tabla de Datos Técnicos",
        headers: ["Sección (mm²)", "Diámetro conductor (mm)", "Espesor aislación (mm)", "Diámetro exterior (mm)", "Peso aprox (Kg/Km)", "Intensidad de corriente (A)"],
        rows: [
          ["4", "2.4", "0.7", "5.8", "60", "55"],
          ["6", "3.0", "0.7", "6.5", "82", "70"],
          ["10", "3.9", "0.7", "7.4", "125", "98"]
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'libre-halogenos', 'resistente-uv'],
    availableBrands: ['Prysmian', 'IMSA', 'Trefilcon']
  }"""

p_alta_siliconados = """  {
    id: 'alta-temp-siliconados',
    name: 'Cables Siliconados de Alta Temperatura',
    category: 'Cables Alta Temperatura',
    subCategory: '2-SILICONADOS',
    description: 'Conductores con aislación de silicona para temperaturas de servicio continuas de hasta 180°C.',
    detailedDescription: `DESCRIPCIÓN
Cables flexibles con conductor de cobre estañado y aislación de caucho de silicona, adecuados para altas temperaturas ambientales.

APLICACIONES
Cableado interno de motores, hornos, luminarias industriales, equipos de calefacción y tableros sometidos a calor extremo.`,
    image: '/images/home_productos/Cables-alta-temperatura.jpg',
    gallery: [],
    specs: ['300/500 V', '180°C', 'Silicona Flexible'],
    technicalIntro: `CARACTERÍSTICAS
Temperatura máxima de servicio: 180°C continuos
Excelente flexibilidad y resistencia a aceites, grasas y agentes químicos.`,
    characteristics: [
      'Aislación de silicona resistente a 180°C.',
      'Alta flexibilidad clase 5.',
      'Buena resistencia química.'
    ],
    specsTables: [
      {
        title: "Tabla de Datos Técnicos",
        headers: ["Sección (mm²)", "Formación", "Diámetro exterior (mm)", "Espesor de silicona (mm)", "Peso aprox (Kg/Km)", "Corriente máxima (A)"],
        rows: [
          ["0.75", "24 x 0.20", "2.4", "0.6", "13", "12"],
          ["1", "32 x 0.20", "2.6", "0.6", "16", "15"],
          ["1.5", "30 x 0.25", "3.0", "0.7", "22", "20"],
          ["2.5", "50 x 0.25", "3.7", "0.8", "34", "30"]
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'temperatura-servicio'],
    availableBrands: ['Marlew', 'Prysmian']
  }"""

p_alta_fibra_mica = """  {
    id: 'alta-temp-fibra-mica',
    name: 'Cables con Trenza de Fibra de Vidrio o Aislación de Mica',
    category: 'Cables Alta Temperatura',
    subCategory: '3-FIBRA DE VIDRIO Y-O AISLACIÓN DE MICA',
    description: 'Cables de extrema resistencia térmica protegidos con trenzas de fibra de vidrio y/o cintas de mica.',
    detailedDescription: `DESCRIPCIÓN
Conductores para temperaturas extremas (hasta 400°C), construidos con conductor de níquel o cobre niquelado, aislados con cintas de mica y protegidos con trenzas de fibra de vidrio impregnadas.

APLICACIONES
Resistencias eléctricas industriales, hornos de fundición, extrusoras de plástico y aplicaciones de seguridad contra incendios.`,
    image: '/images/home_productos/Cables-alta-temperatura.jpg',
    gallery: [],
    specs: ['600 V', '400°C', 'Mica / Fibra de Vidrio'],
    technicalIntro: `CARACTERÍSTICAS
Temperatura de servicio: 250°C a 400°C continuos
Alta resistencia al choque térmico y a la llama directa.`,
    characteristics: [
      'Resistencia extrema a altas temperaturas.',
      'Aislación mineral de mica.',
      'Protección mecánica por trenza de fibra de vidrio.'
    ],
    specsTables: [
      {
        title: "Tabla de Datos Técnicos",
        headers: ["Sección (mm²)", "Diámetro de cuerda (mm)", "Espesor nominal (mm)", "Diámetro exterior (mm)", "Peso aprox (Kg/Km)", "Corriente máxima (A)"],
        rows: [
          ["1.5", "1.6", "0.8", "3.2", "25", "25"],
          ["2.5", "2.0", "0.8", "3.6", "38", "35"],
          ["4", "2.6", "0.8", "4.2", "55", "48"]
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'temperatura-servicio'],
    availableBrands: ['Marlew']
  }"""

p_armados_mecanica = """  {
    id: 'armados-proteccion-mecanica',
    name: 'Cables Subterráneos Armados (Fleje de Acero)',
    category: 'Cables Armados',
    subCategory: '1-PARA PROTECCIÓN MECANICA',
    description: 'Cables de potencia protegidos con armadura metálica para resistir esfuerzos mecánicos y roedores.',
    detailedDescription: `DESCRIPCIÓN
Cables multipolares armados con flejes de acero galvanizado (o de aluminio para unipolares) que proveen máxima protección mecánica en instalaciones subterráneas directas.

APLICACIONES
Redes de energía en industrias, refinerías, minería y tendidos subterráneos propensos a daños mecánicos o presencia de roedores.`,
    image: '/images/home_productos/Cables-armados.jpg',
    gallery: [],
    specs: ['0.6/1.1 kV', 'Armadura de Acero', 'Subterráneo'],
    technicalIntro: `CARACTERÍSTICAS
Normas de fabricación: IRAM 2178-1, IEC 60502-1
Armadura: Doble fleje de acero galvanizado (para cables multipolares) o corona de alambres de acero.
Protección contra roedores y aplastamiento.`,
    characteristics: [
      'Armadura metálica de acero galvanizado.',
      'Aislación XLPE / Vaina exterior PVC.',
      'Apto para enterramiento directo en tierra.'
    ],
    specsTables: [
      {
        title: "Tabla de Datos Técnicos",
        headers: ["Formación", "Espesor aislación (mm)", "Diámetro sobre armadura (mm)", "Diámetro exterior (mm)", "Peso aprox (Kg/Km)", "Intensidad en tierra (A)"],
        rows: [
          ["4 x 2.5", "0.8", "12.5", "15.5", "480", "36"],
          ["4 x 4", "0.8", "13.6", "16.8", "590", "46"],
          ["4 x 6", "0.8", "14.8", "18.0", "720", "58"],
          ["4 x 10", "1.0", "17.5", "20.8", "1050", "77"],
          ["4 x 16", "1.0", "19.8", "23.2", "1420", "100"]
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion', 'instalacion-industrial'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew']
  }"""

p_armados_interlock = """  {
    id: 'armados-interlock-interferencia',
    name: 'Cables Armados Interlocked / Apantallados',
    category: 'Cables Armados',
    subCategory: '2-PARA EVITAR INTERFERENCIAS (INTERLOCK)',
    description: 'Cables con fleje corrugado entrelazado de aluminio o acero, ideal para apantallamiento electromagnético y protección.',
    detailedDescription: `DESCRIPCIÓN
Cables con vaina exterior metálica de aluminio o acero entrelazado en forma de espiral (Interlocked Armor). Provee flexibilidad junto con blindaje contra interferencias electromagnéticas y protección física.

APLICACIONES
Alimentación de motores mediante variadores de frecuencia (VFD), instalaciones en bandejas en plantas de procesamiento y áreas con alta interferencia eléctrica.`,
    image: '/images/home_productos/Cables-armados.jpg',
    gallery: [],
    specs: ['600 V / 1 kV', 'Interlocked Armor', 'Blindaje Continuo'],
    technicalIntro: `CARACTERÍSTICAS
Blindaje: Cinta/fleje de aluminio o acero interlock que proporciona cobertura metálica del 100%.
Excelente disipación de corrientes parásitas y blindaje contra ruidos electromagnéticos.`,
    characteristics: [
      'Apantallamiento y armadura interlock flexible.',
      'Excelente inmunidad contra ruidos electromagnéticos.',
      'Apto para áreas de variadores de frecuencia VFD.'
    ],
    specsTables: [
      {
        title: "Tabla de Datos Técnicos",
        headers: ["Formación", "Sección Tierra (mm²)", "Espesor aislación (mm)", "Diámetro exterior (mm)", "Peso aprox (Kg/Km)", "Corriente admisible (A)"],
        rows: [
          ["3 x 4 + 3x0.75", "0.75", "0.8", "15.0", "390", "35"],
          ["3 x 6 + 3x1.0", "1.0", "0.8", "16.5", "490", "44"],
          ["3 x 10 + 3x1.5", "1.5", "1.0", "19.2", "720", "60"]
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion', 'instalacion-industrial'],
    availableBrands: ['Marlew', 'Prysmian']
  }"""

p_especiales_medida = """  {
    id: 'especiales-desarrollos-medida',
    name: 'Cables Especiales de Diseño y Desarrollos a Medida',
    category: 'Resto de Cables Especiales',
    subCategory: '1-DESARROLLOS A MEDIDA',
    description: 'Soluciones de cableado a medida según especificaciones particulares y requerimientos de ingeniería únicos.',
    detailedDescription: `DESCRIPCIÓN
Diseño y fabricación de conductores eléctricos no estandarizados según especificaciones exactas del cliente, optimizando materiales, dimensiones y propiedades mecánicas.

APLICACIONES
Industria naval, aeroespacial, robótica, equipos médicos complejos y cualquier desarrollo especial de ingeniería.`,
    image: '/images/home_productos/Resto-de-Cables-Especiales.jpg',
    gallery: [],
    specs: ['Diseño Custom', 'Materiales Especiales', 'Desarrollo a Medida'],
    technicalIntro: `CARACTERÍSTICAS
Flexibilidad en materiales: Siliconas, Poliuretano (PUR), Teflón, Kevlar portante.
Formaciones híbridas: Combinación de conductores de potencia, control, señal coaxial y fibra óptica en un solo cable.`,
    characteristics: [
      'Ingeniería de producto personalizada.',
      'Soporte para condiciones ambientales extremas.',
      'Flexibilidad en la combinación de señales y potencia.'
    ],
    specsTables: [
      {
        title: "Tipos de Desarrollos Habituales",
        headers: ["Tipo de Desarrollo", "Materiales Comunes", "Propiedades Destacadas", "Rango de Secciones", "Aplicación Típica"],
        rows: [
          ["Cables Híbridos", "PVC/PUR + Cobre/Fibra", "Señal y Potencia Integrada", "0.22 a 150 mm²", "Robótica Industrial"],
          ["Cables Portantes", "Kevlar + Cobre flexible", "Alta resistencia a la tracción", "0.50 a 16 mm²", "Sondeo y Grúas"],
          ["Cables Subacuáticos", "Poliuretano Especial", "Impermeabilidad absoluta", "0.75 a 35 mm²", "Pozos y Cámaras"]
        ]
      }
    ],
    certifications: ['iram', 'seguridad'],
    availableBrands: ['Marlew', 'Prysmian']
  }"""

p_especiales_ascensor = """  {
    id: 'especiales-ascensor',
    name: 'Cables Planos para Ascensores',
    category: 'Resto de Cables Especiales',
    subCategory: '2-ASCENSOR',
    description: 'Conductores chatos colgantes diseñados para resistir la flexión continua y esfuerzos de tracción.',
    detailedDescription: `DESCRIPCIÓN
Cables planos con alma portante de acero o textil que soportan el peso del cable colgante y el movimiento constante del ascensor.

APLICACIONES
Instalaciones de alimentación y comando de cabinas en ascensores civiles y montacargas industriales.`,
    image: '/images/home_productos/Resto-de-Cables-Especiales.jpg',
    gallery: [],
    specs: ['300/500 V', 'Chapeado / Plano', 'Con Elemento Portante'],
    technicalIntro: `CARACTERÍSTICAS
Construcción extra flexible con conductores de cobre recocido clase 6.
Dos cables de acero laterales o núcleo textil para soportar esfuerzos mecánicos de suspensión.`,
    characteristics: [
      'Formación extraflexible clase 6.',
      'Vaina exterior chata de PVC de alta flexibilidad.',
      'Elementos de tracción metálicos o textiles integrados.'
    ],
    specsTables: [
      {
        title: "Tabla de Datos Técnicos",
        headers: ["Formación", "Espesor aislación (mm)", "Espesor vaina (mm)", "Dimensiones externas (mm)", "Masa aproximada (Kg/Km)", "Tensión rotura portante (N)"],
        rows: [
          ["12 x 0.75", "0.6", "1.2", "4.2 x 29", "280", "1500"],
          ["18 x 0.75", "0.6", "1.2", "4.2 x 42", "410", "1500"],
          ["24 x 0.75", "0.6", "1.4", "4.6 x 56", "580", "2000"]
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'cuerdas-flexibles'],
    availableBrands: ['Marlew', 'Prysmian']
  }"""

p_especiales_puente_grua = """  {
    id: 'especiales-puente-grua',
    name: 'Cables Planos Flatform para Puente Grúa',
    category: 'Resto de Cables Especiales',
    subCategory: '3-PUENTE GRUA',
    description: 'Cables extra flexibles planos para sistemas de festón y carros portacables en grúas.',
    detailedDescription: `DESCRIPCIÓN
Cables planos (Flatform) diseñados para flexión extrema en un solo plano, optimizando el radio de curvatura y el espacio ocupado.

APLICACIONES
Alimentación y control de puentes grúa, pórticos, polipastos y sistemas festón.`,
    image: '/images/home_productos/Resto-de-Cables-Especiales.jpg',
    gallery: [],
    specs: ['450/750 V', 'Extra Flexible', 'Plano Festoon'],
    technicalIntro: `CARACTERÍSTICAS
Construcción plana que optimiza el espacio de doblado.
Conductores alineados de cobre extra flexible clase 6.`,
    characteristics: [
      'Vaina de PVC resistente al desgaste y aceites.',
      'Flexibilidad superior especial para carros de festón.',
      'Rango térmico de servicio de -15°C a 70°C.'
    ],
    specsTables: [
      {
        title: "Tabla de Datos Técnicos",
        headers: ["Formación", "Dimensiones nominales (mm)", "Peso aproximado (Kg/Km)", "Radio curvatura mínimo (mm)", "Corriente máxima (A)"],
        rows: [
          ["4 x 1.5", "5.1 x 15.2", "150", "50", "18"],
          ["4 x 2.5", "5.8 x 17.9", "220", "60", "25"],
          ["4 x 4", "6.8 x 21.6", "320", "70", "34"],
          ["4 x 6", "7.6 x 24.2", "450", "80", "44"]
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'cuerdas-flexibles'],
    availableBrands: ['Prysmian', 'Marlew']
  }"""

p_especiales_datos = """  {
    id: 'especiales-datos-telecom',
    name: 'Cables de Datos, Telecomunicaciones y Fibra Óptica',
    category: 'Resto de Cables Especiales',
    subCategory: '4-UTP-FTP-COAXIALES-FIBRA OPTICA',
    description: 'Cables UTP, FTP, coaxiales y fibra óptica para transmisión de datos de alta velocidad y telefonía.',
    detailedDescription: `DESCRIPCIÓN
Gama de conductores para redes de datos y comunicación industrial: pares trenzados blindados y sin blindar, cables coaxiales e hilos de fibra óptica multimodo/monomodo.

APLICACIONES
Infraestructuras de redes de datos, cableado estructurado, sistemas de videovigilancia (CCTV) y enlaces de telecomunicaciones en oficinas y plantas industriales.`,
    image: '/images/home_productos/Resto-de-Cables-Especiales.jpg',
    gallery: [],
    specs: ['Cat 5e / 6 / 6A', 'RG6 / RG59', 'Fibra MM/SM'],
    technicalIntro: `CARACTERÍSTICAS
Conductores de cobre de alta pureza para mínima atenuación.
Aislamientos y cubiertas termoplásticas resistentes a la llama (CM/LSZH).`,
    characteristics: [
      'Excelente desempeño en anchos de banda elevados.',
      'Opciones con blindaje general en cinta de aluminio (FTP).',
      'Fibra óptica para aislamiento electromagnético total.'
    ],
    specsTables: [
      {
        title: "Tabla de Datos Técnicos",
        headers: ["Tipo de Cable", "Categoría / Norma", "Blindaje", "Diámetro exterior (mm)", "Peso aprox (Kg/Km)", "Aplicación Principal"],
        rows: [
          ["UTP Cat 6", "ANSI/TIA-568", "Ninguno (U/UTP)", "6.0", "40", "Redes Gigabit Ethernet"],
          ["FTP Cat 6A", "ANSI/TIA-568", "Foil de Aluminio (F/UTP)", "7.2", "55", "Redes 10-Gigabit"],
          ["Coaxial RG6", "MIL-C-17", "Malla Trenzada de Cobre", "6.9", "48", "Distribución de TV / CCTV"],
          ["Fibra Monomodo", "ITU-T G.652.D", "Armadura de Aramida", "7.0 (8 pelos)", "60", "Enlaces de larga distancia"]
        ]
      }
    ],
    certifications: ['iram', 'seguridad'],
    availableBrands: ['Furukawa', 'Prysmian', 'AMP']
  }"""

p_materiales_general = """  {
    id: 'materiales-electricos-general',
    name: 'Materiales Eléctricos y Accesorios Industriales',
    category: 'Resto de Materiales Eléctricos',
    subCategory: '1-MATERIALES ELECTRICOS',
    description: 'Accesorios y componentes eléctricos indispensables para canalizaciones, empalmes y tableros.',
    detailedDescription: `DESCRIPCIÓN
Suministros de materiales eléctricos para la instalación de tendidos de cables: terminales, cintas aisladoras, prensaestopas, caños y bandejas portacables.

APLICACIONES
Montaje y conexionado de instalaciones eléctricas comerciales e industriales de baja y media tensión.`,
    image: '/images/home_productos/Materiales electricos.jpg',
    gallery: [],
    specs: ['Canalización', 'Conexionado', 'Accesorios'],
    technicalIntro: `CARACTERÍSTICAS
Suministros industriales homologados bajo normas de seguridad.
Alta durabilidad en entornos de trabajo pesados.`,
    characteristics: [
      'Garantía de estanqueidad y conductividad.',
      'Marcas líderes del mercado nacional e internacional.',
      'Amplio rango de medidas y formatos.'
    ],
    specsTables: [
      {
        title: "Tabla de Familias de Productos",
        headers: ["Familia de Producto", "Materiales Comunes", "Normas Asociadas", "Rango de Medidas", "Función Principal"],
        rows: [
          ["Terminales a Compresión", "Cobre Electrolítico Estañado", "IRAM 2441", "1.5 a 300 mm²", "Conexión segura a borneras"],
          ["Prensaestopas Metálicos", "Bronce Niquelado / Nylon", "IEC 62444", "M12 a M110 / PG7 a PG48", "Estanqueidad IP68 en entradas"],
          ["Bandejas Portacables", "Chapa de Acero Galvanizado", "IRAM 2487", "Ancho 50 a 600 mm", "Soporte de cables en tendidos"],
          ["Tubos Termocontraíbles", "Poliolefina reticulada", "UL 224", "1.2 a 120 mm", "Aislación y sellado de empalmes"]
        ]
      }
    ],
    certifications: ['iram', 'seguridad'],
    availableBrands: ['3M', 'LCT', 'Samet', 'Kalop']
  }"""

new_products = [
    p_alta_solares, p_alta_siliconados, p_alta_fibra_mica,
    p_armados_mecanica, p_armados_interlock,
    p_especiales_medida, p_especiales_ascensor, p_especiales_puente_grua, p_especiales_datos,
    p_materiales_general
]

new_products_str = ",\n".join(new_products)

# We insert this right before the closing bracket of the products array: "];"
new_content = content_updated_cat[:products_end_idx] + ",\n" + new_products_str + "\n" + content_updated_cat[products_end_idx:]

with open(data_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully appended products for Category 6, 7, 8, 9 to services/data.ts.")
