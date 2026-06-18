import re
import os

data_path = 'services/data.ts'

with open(data_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update the categories array to have nice cover images from home_productos
categories_block_pattern = r'(export const categories: Category\[\] = \[)(.*?)(\];)'
categories_match = re.search(categories_block_pattern, content, re.DOTALL)

if not categories_match:
    print("Error: Could not find categories array in services/data.ts")
    exit(1)

new_categories_content = """
  {
    id: 'civil',
    name: 'Cables para Instalación Civil',
    slug: 'instalacion-civil',
    image: '/images/PRODUCTOS/PORTADA.png',
    banner: '/images/PRODUCTOS/PORTADA.png'
  },
  {
    id: 'aerea',
    name: 'Cables Instalación Aérea',
    slug: 'instalacion-aerea',
    image: '/images/PRODUCTOS/2-LINEAS AEREAS/PORTADA.jpeg',
    banner: '/images/PRODUCTOS/2-LINEAS AEREAS/PORTADA.jpeg'
  },
  {
    id: 'potencia',
    name: 'Cables de Potencia',
    slug: 'cables-de-potencia',
    image: '/images/PRODUCTOS/3-CABLES DE POTENCIA/1-SUBTERRANEOS/PORTADA.jpeg',
    banner: '/images/PRODUCTOS/3-CABLES DE POTENCIA/1-SUBTERRANEOS/PORTADA.jpeg'
  },
  {
    id: 'media-tension',
    name: 'Cables de Media Tensión',
    slug: 'cables-de-media-tension',
    image: '/images/PRODUCTOS/4- CABLES DE MEDIA TENSION/PORTADA.jpeg',
    banner: '/images/PRODUCTOS/4- CABLES DE MEDIA TENSION/PORTADA.jpeg'
  },
  {
    id: 'industriales',
    name: 'Cables Industriales',
    slug: 'cables-industriales',
    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/portada.jpeg',
    banner: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/portada.jpeg'
  },
  {
    id: 'alta-temperatura',
    name: 'Cables Alta Temperatura',
    slug: 'cables-alta-temperatura',
    image: '/images/home_productos/Cables-alta-temperatura.jpg',
    banner: '/images/home_productos/Cables-alta-temperatura.jpg'
  },
  {
    id: 'armados',
    name: 'Cables Armados',
    slug: 'cables-armados',
    image: '/images/home_productos/Cables-armados.jpg',
    banner: '/images/home_productos/Cables-armados.jpg'
  },
  {
    id: 'especiales',
    name: 'Cables Especiales',
    slug: 'cables-especiales',
    image: '/images/home_productos/Resto-de-Cables-Especiales.jpg',
    banner: '/images/home_productos/Resto-de-Cables-Especiales.jpg'
  },
  {
    id: 'resto-materiales',
    name: 'Resto de Materiales Eléctricos',
    slug: 'resto-materiales-electricos',
    image: '/images/home_productos/Materiales electricos.jpg',
    banner: '/images/home_productos/Materiales electricos.jpg'
  }
"""

content = content.replace(categories_match.group(2), new_categories_content)
print("Updated categories cover images successfully.")

# 2. Prepare the new products strings
new_products = []

# Product 7.1: Flejes de Acero
new_products.append("""  {
    id: 'armados-flejes-acero',
    name: 'Flejes de Acero',
    categoryPath: ['Cables Armados', 'Para Protección Mecánica', 'Flejes de Acero'],
    description: 'Cables de potencia y control con armadura de flejes de acero galvanizado para una excelente protección mecánica contra aplastamientos e impactos.',
    detailedDescription: `DESCRIPCIÓN
Cables multipolares armados con doble fleje de acero galvanizado (o de aluminio para unipolares) aplicados helicoidalmente para máxima protección mecánica en instalaciones subterráneas directas.

APLICACIONES
Redes de distribución de energía en industrias, plantas de proceso, refinerías, minería y tendidos subterráneos propensos a agresiones mecánicas o presencia de roedores.`,
    image: '/images/ProductosNuevos/7-CABLES ARMADOS/1-PARA PROTECCIÓN MECANICA/1-FLEJES DE ACERO/PORTADA Y FICHA TECNICA.jpeg',
    gallery: [
      '/images/ProductosNuevos/7-CABLES ARMADOS/1-PARA PROTECCIÓN MECANICA/1-FLEJES DE ACERO/FICHA TECNICA.jpeg'
    ],
    specs: ['Baja Tensión', 'Fleje de Acero', 'Protección Mecánica'],
    characteristics: [
      'Conductor: Cobre o Aluminio semirrígido Clase 2 o flexible Clase 5',
      'Aislación: XLPE o PVC con colores normalizados',
      'Armadura: Doble fleje de acero galvanizado (multipolares) o de aluminio (unipolares) aplicados helicoidalmente',
      'Vaina exterior: PVC resistente a la propagación del incendio (IRAM NM IEC 60332-3)',
      'Temperatura de servicio: 90°C (XLPE) / 70°C (PVC)'
    ],
    specsTables: [
      {
        title: 'Características dimensionales de referencia',
        headers: ['Formación', 'Espesor Aislación (mm)', 'Diámetro Ext. (mm)', 'Peso Aprox. (Kg/Km)'],
        rows: [
          ['4 x 2.5', '0.8', '15.5', '480'],
          ['4 x 4', '0.8', '16.8', '590'],
          ['4 x 6', '0.8', '18.0', '720'],
          ['4 x 10', '1.0', '20.8', '1050'],
          ['4 x 16', '1.0', '23.2', '1420']
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion']
  }""")

# Product 7.2: Doble Fleje
new_products.append("""  {
    id: 'armados-doble-fleje',
    name: 'Doble Fleje',
    categoryPath: ['Cables Armados', 'Para Protección Mecánica', 'Doble Fleje'],
    description: 'Cables protegidos con doble fleje helicoidal de acero para resistir esfuerzos de compresión radial severos.',
    detailedDescription: `DESCRIPCIÓN
Conductores provistos de armadura por doble cinta (fleje) de acero galvanizado solapado, diseñados para soportar agresiones mecánicas en todas las direcciones y evitar la penetración de roedores.

APLICACIONES
Instalaciones fijas de potencia, comandos y señales en plantas industriales, instalaciones petroquímicas, subterráneos y túneles.`,
    image: '/images/ProductosNuevos/7-CABLES ARMADOS/1-PARA PROTECCIÓN MECANICA/2-DOBLE FLEJE/PORTADA Y FICHA TECNICA.jpeg',
    gallery: [
      '/images/ProductosNuevos/7-CABLES ARMADOS/1-PARA PROTECCIÓN MECANICA/2-DOBLE FLEJE/FICHA TECNICA .jpg'
    ],
    specs: ['Doble Fleje', 'Protección Superior', 'Subterráneo'],
    characteristics: [
      'Armadura metálica: Doble cinta de acero galvanizado solapado',
      'Protección contra roedores y aplastamiento: Cobertura física excepcional',
      'Instalación: Apto para enterramiento directo o en bandejas industriales'
    ],
    specsTables: [
      {
        title: 'Dimensiones de referencia',
        headers: ['Formación', 'Espesor envoltura (mm)', 'Diámetro exterior aprox. (mm)', 'Masa aprox. (Kg/Km)'],
        rows: [
          ['2 x 1.5', '1.2', '13.5', '320'],
          ['3 x 2.5', '1.2', '15.0', '410'],
          ['4 x 4', '1.3', '17.2', '560']
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion']
  }""")

# Product 7.3: Hilos de Acero
new_products.append("""  {
    id: 'armados-hilos-acero',
    name: 'Hilos de Acero',
    categoryPath: ['Cables Armados', 'Para Protección Mecánica', 'Hilos de Acero'],
    description: 'Cables de energía y control armados con hilos redondos de acero galvanizado (SWA), diseñados para resistir tracciones longitudinales severas.',
    detailedDescription: `DESCRIPCIÓN
Capa protectora helicoidal constituida por hilos redondos de acero galvanizado (SWA). Su función principal es otorgar una resistencia superior a impactos mecánicos, penetración y esfuerzos de tracción lateral o longitudinal durante la instalación y vida útil del cable, además de actuar como pantalla de protección a tierra.

APLICACIONES
Especialmente diseñado para instalaciones verticales (pozos mineros, torres) o tramos con pendientes pronunciadas, y tendidos subterráneos con riesgos mecánicos elevados. Permite soportar el tendido vertical sin fatiga de los conductores.`,
    image: '/images/ProductosNuevos/7-CABLES ARMADOS/1-PARA PROTECCIÓN MECANICA/3-HILOS DE ACERO/PORTADA Y FICHA TECNICA.jpeg',
    pdf: '/images/ProductosNuevos/7-CABLES ARMADOS/1-PARA PROTECCIÓN MECANICA/3-HILOS DE ACERO/FICHA TECNICA HILOS DE ACERO.docx',
    specs: ['SWA (Steel Wire Armour)', 'Alta Tracción', 'IEC 60502-1'],
    characteristics: [
      'Material Base: Acero al carbono de bajo residuo, estirado en frío.',
      'Protección contra Corrosión: Galvanizado por inmersión en caliente (recubrimiento de zinc continuo).',
      'Carga mínima de rotura por tracción: 340 a 540 N/mm² (según diámetro del hilo).',
      'Alargamiento mínimo a la rotura: 10% en longitud de probeta de 250 mm.',
      'Efecto Magnético (Regla de diseño): Para sistemas de CA, la armadura de hilos de acero (SWA) solo se permite en cables multipolares.'
    ],
    specsTables: [
      {
        title: 'Diámetros Nominales del Hilo (IEC 60502-1)',
        headers: ['Diámetro bajo armadura (mm)', 'Diámetro nominal del hilo (mm)'],
        rows: [
          ['Hasta 10 mm', '0,80 mm'],
          ['De 10 a 15 mm', '1,25 mm'],
          ['De 15 a 25 mm', '1,60 mm'],
          ['De 25 a 35 mm', '2,00 mm'],
          ['De 35 a 60 mm', '2,50 mm'],
          ['Mayor a 60 mm', '3,15 mm']
        ]
      },
      {
        title: 'Propiedades del Acero Galvanizado',
        headers: ['Propiedad', 'Valor / Especificación'],
        rows: [
          ['Material Base', 'Acero al carbono de bajo residuo, estirado en frío.'],
          ['Protección contra Corrosión', 'Galvanizado por inmersión en caliente.'],
          ['Carga mínima de rotura', '340 a 540 N/mm²'],
          ['Alargamiento mínimo', '10% en probeta de 250 mm']
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion']
  }""")

# Product 7.4: Trenza de Acero
new_products.append("""  {
    id: 'armados-trenza-acero',
    name: 'Trenza de Acero',
    categoryPath: ['Cables Armados', 'Para Protección Mecánica', 'Trenza de Acero'],
    description: 'Protección mecánica de alta flexibilidad constituida por una malla tejida de hilos de acero galvanizado o inoxidable.',
    detailedDescription: `DESCRIPCIÓN
Cables con armadura tejida (trenza) de hilos de acero, ideal para aplicaciones que requieren un equilibrio perfecto entre protección mecánica (impactos/aplastamiento) y una alta flexibilidad dinámica. Funciona como una malla o tejido metálico flexible.

APLICACIONES
Conexionado de motores, bombas y tableros en industrias, grúas portacables, instalaciones marinas y off-shore (plataformas petroleras) con espacios reducidos donde se exijan flexiones continuas.`,
    image: '/images/ProductosNuevos/7-CABLES ARMADOS/1-PARA PROTECCIÓN MECANICA/4-TRENZA DE ACERO/PORTADA Y FICHA TECNICA.jpeg',
    pdf: '/images/ProductosNuevos/7-CABLES ARMADOS/1-PARA PROTECCIÓN MECANICA/4-TRENZA DE ACERO/FICHA TECNICA TRENZA DE ACERO.docx',
    specs: ['Malla Tejida', 'Flexibilidad Dinámica', 'Uso Marino/Móvil'],
    characteristics: [
      'Alta flexibilidad y radio de curvatura dinámico: permite flexiones continuas sin fatiga metálica.',
      'Protección contra roedores y abrasión: actúa como una barrera física muy eficaz.',
      'Función de pantalla: si se conecta a tierra, actúa como pantalla electromagnética (EMI) y disipador de corrientes de falla.',
      'Resistencia a la tracción: protege los conductores de cobre internos durante la instalación.'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion']
  }""")

# Product 7.5: Interlock Cobre
new_products.append("""  {
    id: 'armados-interlock-cobre',
    name: 'Interlock Cobre',
    categoryPath: ['Cables Armados', 'Interlock (Antirrobo/Interferencias)', 'Interlock Cobre'],
    description: 'Cables con blindaje continuo de cinta de cobre corrugado para entornos con altísima interferencia electromagnética.',
    detailedDescription: `DESCRIPCIÓN
Cable diseñado para la distribución de energía o señales de control en entornos con alta presencia de ruido electromagnético. Su pantalla de cobre corrugado actúa como una jaula de Faraday, bloqueando las interferencias y garantizando la integridad de los datos o de la tensión.

APLICACIONES
Conexión de variadores de frecuencia (VFD) hacia motores, y cableado de instrumentación y control en subestaciones eléctricas (SSEE) o plantas industriales.`,
    image: '/images/ProductosNuevos/7-CABLES ARMADOS/2-PARA EVITAR INTERFERENCIAS (INTERLOCK)/1-INTERLOCK COBRE/PORTADA Y FICHA TECNICA.jpeg',
    pdf: '/images/ProductosNuevos/7-CABLES ARMADOS/2-PARA EVITAR INTERFERENCIAS (INTERLOCK)/1-INTERLOCK COBRE/Ficha Técnica.docx',
    specs: ['Blindaje Corrugado', 'Cobre', 'Jaula de Faraday'],
    characteristics: [
      'Blindaje: Cinta de cobre corrugada transversalmente con solape mínimo del 15% al 25% (cobertura 100%).',
      'Excelente flexibilidad: el corrugado transversal evita que la cinta se corte o se arrugue al doblar el cable.',
      'Resistencia química y humedad: actúa como barrera física y estanca de estanqueidad contra agentes externos.',
      'Tensión Nominal: Desde 600/1000 V (Baja Tensión) hasta 15 kV / 35 kV (Media Tensión).'
    ],
    specsTables: [
      {
        title: 'Estructura y Construcción',
        headers: ['Capa', 'Componente', 'Descripción Técnica'],
        rows: [
          ['1', 'Conductor', 'Cobre electrolítico recocido, flexible Clase 5 o cableado Clase B.'],
          ['2', 'Aislamiento', 'XLPE (90°C) o PVC (70°C).'],
          ['3', 'Asiento / Lecho', 'Capa extruida de PVC o compuesto libre de halógenos.'],
          ['4', 'Blindaje', 'Cinta de cobre corrugada longitudinalmente con solape de 15-25%.'],
          ['5', 'Cubierta Exterior', 'PVC o LSZH, resistente a rayos UV y agentes químicos.']
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion']
  }""")

# Product 7.6: Trenzado de Cobre
new_products.append("""  {
    id: 'armados-trenzado-cobre',
    name: 'Trenzado de Cobre',
    categoryPath: ['Cables Armados', 'Interlock (Antirrobo/Interferencias)', 'Trenzado de Cobre'],
    description: 'Cables de datos y señales de alta performance con doble blindaje (aluminio individual + malla global de cobre estañado).',
    detailedDescription: `DESCRIPCIÓN
Cable de datos y señal de alta performance, compuesto por pares de cobre trenzados entre sí para cancelar la diafonía (crosstalk). Incorpora un sistema de doble blindaje que asegura inmunidad total contra EMI y RFI.

APLICACIONES
Conexión de sistemas de control industrial (PLCs, sensores, actuadores) y redes de datos en plantas con alta presencia de motores eléctricos y transformadores.`,
    image: '/images/ProductosNuevos/7-CABLES ARMADOS/2-PARA EVITAR INTERFERENCIAS (INTERLOCK)/2-TRENZADO DE COBRE/PORTADA Y FICHA TECNICA.jpeg',
    pdf: '/images/ProductosNuevos/7-CABLES ARMADOS/2-PARA EVITAR INTERFERENCIAS (INTERLOCK)/2-TRENZADO DE COBRE/Ficha Técnica.docx',
    specs: ['Par Trenzado', 'Doble Blindaje', 'Cobre Estañado'],
    characteristics: [
      'Impedancia característica: 100 ± 15 Ohm (frecuencias de 1 a 250 MHz).',
      'Blindaje individual: Cinta de Aluminio/Poliéster sobre cada par (cobertura 100%).',
      'Blindaje global: Malla de hilos de cobre estañado (cobertura >= 65%) contra EMI de baja frecuencia.',
      'Resistencia del conductor (máx.): 9.38 Ohm / 100m a 20°C.'
    ],
    specsTables: [
      {
        title: 'Componentes Técnicos',
        headers: ['Componente', 'Características'],
        rows: [
          ['Conductor', 'Cobre rojo electrolítico recocido, pureza > 99.9%.'],
          ['Aislamiento', 'Polietileno de alta densidad (HDPE) con colores normalizados.'],
          ['Trenzados', 'Pares trenzados con paso corto y diferenciado.'],
          ['Blindaje Individual', 'Cinta de Aluminio/Poliéster sobre cada par (cobertura 100%).'],
          ['Blindaje Global', 'Malla de hilos de cobre estañado (cobertura >= 65%).'],
          ['Hilo de Drenaje', 'Cobre estañado en contacto continuo con el blindaje.'],
          ['Cubierta', 'Compuesto de PVC ignífugo o LSZH, color gris/azul industrial.']
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion']
  }""")

# Product 7.7: Cinta-Hilos de Cobre
new_products.append("""  {
    id: 'armados-cinta-hilos-cobre',
    name: 'Cinta-Hilos de Cobre',
    categoryPath: ['Cables Armados', 'Interlock (Antirrobo/Interferencias)', 'Cinta-Hilos de Cobre'],
    description: 'Cables de media tensión con blindaje electrostático mediante cintas helicoidales o corona de hilos de cobre.',
    detailedDescription: `DESCRIPCIÓN
Cables provistos de pantalla metálica electrostática aplicada helicoidalmente sobre el aislamiento semiconductor. Disponible en configuración de cinta de cobre o hilos de cobre con contraespira.

APLICACIONES
Sistemas de distribución de energía en media tensión, subestaciones eléctricas y acometidas industriales donde se exigen secciones robustas de retorno a tierra.`,
    image: '/images/ProductosNuevos/7-CABLES ARMADOS/2-PARA EVITAR INTERFERENCIAS (INTERLOCK)/3- CINTA-HILOS DE COBRE/PORTADA Y FICHA TECNICA.jpeg',
    pdf: '/images/ProductosNuevos/7-CABLES ARMADOS/2-PARA EVITAR INTERFERENCIAS (INTERLOCK)/3- CINTA-HILOS DE COBRE/Ficha Técnica.docx',
    specs: ['Media Tensión', 'Wire Shield', 'Tape Shield'],
    characteristics: [
      'Pantalla de Cinta (Full Tape): Excelente confinamiento del campo electrostático, sección típica 5 a 10 mm².',
      'Pantalla de Hilos (Wire Shield): Diseñada para soportar elevadas corrientes de cortocircuito monofásicas, secciones típicas de 16, 25 o 50 mm².',
      'Conductividad: Superior al 100% IACS a 20°C.',
      'Protección Longitudinal (Opcional): Cinta hinchable (swelling tape) semiconductora que bloquea el paso del agua.'
    ],
    specsTables: [
      {
        title: 'Configuraciones de Pantalla de Cobre',
        headers: ['Parámetro', 'Configuración: Cinta de Cobre', 'Configuración: Hilos + Contraespira'],
        rows: [
          ['Tipo de Material', 'Cobre electrolítico suave / recocido', 'Cobre electrolítico suave, desnudo o estañado'],
          ['Normas', 'IEC 60502-2, ICEA S-93-639', 'IEC 60502-2, UNE 21-161'],
          ['Disposición Física', 'Aplicada en forma helicoidal sobre semiconductora', 'Alambres colocados helicoidalmente con contraespira'],
          ['Espesor / Diámetro', 'Espesor estándar: 0.127 mm', 'Diámetro típico: 0.6 mm a 0.8 mm'],
          ['Traslape / Cobertura', 'Traslape mínimo del 25%', 'Cobertura abierta pero calculada para sección equivalente']
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion']
  }""")

# Product 7.8: Cinta Aluminio
new_products.append("""  {
    id: 'armados-cinta-aluminio',
    name: 'Cinta Aluminio',
    categoryPath: ['Cables Armados', 'Interlock (Antirrobo/Interferencias)', 'Cinta Aluminio'],
    description: 'Laminado blindante de alta ingeniería para protección electroestática y electromagnética en cables de instrumentación.',
    detailedDescription: `DESCRIPCIÓN
Cinta de Aluminio-Poliéster (Al-Mylar) constituida por laminado de aluminio recocido y film de poliéster. Ofrece cobertura del 100% contra interferencias externas y diafonía en cables multipares.

APLICACIONES
Cables de instrumentación, control y transmisión de datos de alta velocidad en refinerías, industrias de proceso y cercanía a motores.`,
    image: '/images/ProductosNuevos/7-CABLES ARMADOS/2-PARA EVITAR INTERFERENCIAS (INTERLOCK)/4-CINTA ALUMINIO/PORTADA Y FICHA TECNICA.jpeg',
    pdf: '/images/ProductosNuevos/7-CABLES ARMADOS/2-PARA EVITAR INTERFERENCIAS (INTERLOCK)/4-CINTA ALUMINIO/Ficha Técnica.docx',
    specs: ['Al-Mylar (Aluminio-Poliéster)', 'Crosstalk Cero', 'Señal/Instrumentación'],
    characteristics: [
      'Blindaje EMI/RFI: Barrera física que refleja y absorbe interferencias en señales críticas (4-20 mA, PLC).',
      'Eliminación de Diafonía: Usado como blindaje individual en cada par para evitar interferencia cruzada.',
      'Hilo de drenaje: En contacto longitudinal directo con la cara de aluminio para descarga segura.',
      'Estabilidad térmica: Soporta las temperaturas de extrusión de PVC, XLPE o LSZH sin delaminarse.'
    ],
    specsTables: [
      {
        title: 'Propiedades Técnicas del Laminado',
        headers: ['Propiedad', 'Unidad', 'Valor Típico'],
        rows: [
          ['Estructura Estándar', '—', 'Aluminio (Al) + Adhesivo + Poliéster (PET)'],
          ['Espesor del Aluminio', 'μm (Micrones)', '7 a 9'],
          ['Espesor del Poliéster', 'μm (Micrones)', '12 a 15'],
          ['Espesor Total', 'μm (Micrones)', '23 a 27'],
          ['Fuerza de Tensión', 'N/mm²', '>= 60'],
          ['Elongación a la Ruptura', '%', '>= 35%'],
          ['Fuerza de Despegue', 'N/cm', '>= 6.3']
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion']
  }""")

# Product 8.1: Desarrollos a Medida
new_products.append("""  {
    id: 'especiales-desarrollos-medida',
    name: 'Desarrollos a Medida',
    categoryPath: ['Cables Especiales', 'Desarrollos a Medida'],
    description: 'Soluciones de cableado a medida según especificaciones particulares y requerimientos de ingeniería únicos.',
    detailedDescription: `DESCRIPCIÓN
Diseño y fabricación de conductores eléctricos no estandarizados según especificaciones exactas del cliente, optimizando materiales, dimensiones y propiedades mecánicas.

APLICACIONES
Industria naval, aeroespacial, robótica, equipos médicos complejos y cualquier desarrollo especial de ingeniería.`,
    image: '/images/home_productos/Resto-de-Cables-Especiales.jpg',
    gallery: [],
    specs: ['Diseño Custom', 'Materiales Especiales', 'Desarrollo a Medida'],
    characteristics: [
      'Flexibilidad en materiales: Siliconas, Poliuretano (PUR), Teflón, Kevlar portante.',
      'Formaciones híbridas: Combinación de conductores de potencia, control, señal coaxial y fibra óptica en un solo cable.',
      'Ingeniería de producto personalizada.',
      'Soporte para condiciones ambientales extremas.'
    ],
    specsTables: [
      {
        title: 'Tipos de Desarrollos Habituales',
        headers: ['Tipo de Desarrollo', 'Materiales Comunes', 'Propiedades Destacadas', 'Rango de Secciones', 'Aplicación Típica'],
        rows: [
          ['Cables Híbridos', 'PVC/PUR + Cobre/Fibra', 'Señal y Potencia Integrada', '0.22 a 150 mm²', 'Robótica Industrial'],
          ['Cables Portantes', 'Kevlar + Cobre flexible', 'Alta resistencia a la tracción', '0.50 a 16 mm²', 'Sondeo y Grúas'],
          ['Cables Subacuáticos', 'Poliuretano Especial', 'Impermeabilidad absoluta', '0.75 a 35 mm²', 'Pozos y Cámaras']
        ]
      }
    ],
    certifications: ['iram', 'seguridad']
  }""")

# Product 8.2: Ascensor
new_products.append("""  {
    id: 'especiales-ascensor',
    name: 'Ascensor',
    categoryPath: ['Cables Especiales', 'Ascensor'],
    description: 'Conductores chatos colgantes diseñados para resistir la flexión continua y esfuerzos de tracción.',
    detailedDescription: `DESCRIPCIÓN
Cables planos con alma portante de acero o textil que soportan el peso del cable colgante y el movimiento constante del ascensor.

APLICACIONES
Instalaciones de alimentación y comando de cabinas en ascensores civiles y montacargas industriales.`,
    image: '/images/home_productos/Resto-de-Cables-Especiales.jpg',
    gallery: [],
    specs: ['300/500 V', 'Chapeado / Plano', 'Con Elemento Portante'],
    characteristics: [
      'Construcción extra flexible con conductores de cobre recocido clase 6.',
      'Dos cables de acero laterales o núcleo textil para soportar esfuerzos mecánicos de suspensión.',
      'Formación extraflexible clase 6.',
      'Vaina exterior chata de PVC de alta flexibilidad.'
    ],
    specsTables: [
      {
        title: 'Características dimensionales',
        headers: ['Formación', 'Espesor aislación (mm)', 'Espesor vaina (mm)', 'Dimensiones externas (mm)', 'Masa aproximada (Kg/Km)', 'Tensión rotura portante (N)'],
        rows: [
          ['12 x 0.75', '0.6', '1.2', '4.2 x 29', '280', '1500'],
          ['18 x 0.75', '0.6', '1.2', '4.2 x 42', '410', '1500'],
          ['24 x 0.75', '0.6', '1.4', '4.6 x 56', '580', '2000']
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'cuerdas-flexibles']
  }""")

# Product 8.3: Puente Grúa
new_products.append("""  {
    id: 'especiales-puente-grua',
    name: 'Puente Grúa',
    categoryPath: ['Cables Especiales', 'Puente Grúa'],
    description: 'Cables extra flexibles planos para sistemas de festón y carros portacables en grúas.',
    detailedDescription: `DESCRIPCIÓN
Cables planos (Flatform) diseñados para flexión extrema en un solo plano, optimizando el radio de curvatura y el espacio ocupado.

APLICACIONES
Alimentación y control de puentes grúa, pórticos, polipastos y sistemas festón.`,
    image: '/images/home_productos/Resto-de-Cables-Especiales.jpg',
    gallery: [],
    specs: ['450/750 V', 'Extra Flexible', 'Plano Festoon'],
    characteristics: [
      'Construcción plana que optimiza el espacio de doblado.',
      'Conductores alineados de cobre extra flexible clase 6.',
      'Vaina de PVC resistente al desgaste y aceites.',
      'Flexibilidad superior especial para carros de festón.'
    ],
    specsTables: [
      {
        title: 'Características técnicas',
        headers: ['Formación', 'Dimensiones nominales (mm)', 'Peso aproximado (Kg/Km)', 'Radio curvatura mínimo (mm)', 'Corriente máxima (A)'],
        rows: [
          ['4 x 1.5', '5.1 x 15.2', '150', '50', '18'],
          ['4 x 2.5', '5.8 x 17.9', '220', '60', '25'],
          ['4 x 4', '6.8 x 21.6', '320', '70', '34'],
          ['4 x 6', '7.6 x 24.2', '450', '80', '44']
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'cuerdas-flexibles']
  }""")

# Product 8.4: UTP/FTP/Coaxiales/Fibra Óptica
new_products.append("""  {
    id: 'especiales-datos-telecom',
    name: 'UTP/FTP/Coaxiales/Fibra Óptica',
    categoryPath: ['Cables Especiales', 'UTP/FTP/Coaxiales/Fibra Óptica'],
    description: 'Cables UTP, FTP, coaxiales y fibra óptica para transmisión de datos de alta velocidad y telefonía.',
    detailedDescription: `DESCRIPCIÓN
Gama de conductores para redes de datos y comunicación industrial: pares trenzados blindados y sin blindar, cables coaxiales e hilos de fibra óptica multimodo/monomodo.

APLICACIONES
Infraestructuras de redes de datos, cableado estructurado, sistemas de videovigilancia (CCTV) y enlaces de telecomunicaciones en oficinas y plantas industriales.`,
    image: '/images/home_productos/Resto-de-Cables-Especiales.jpg',
    gallery: [],
    specs: ['Cat 5e / 6 / 6A', 'RG6 / RG59', 'Fibra MM/SM'],
    characteristics: [
      'Conductores de cobre de alta pureza para mínima atenuación.',
      'Aislamientos y cubiertas termoplásticas resistentes a la llama (CM/LSZH).',
      'Excelente desempeño en anchos de banda elevados.',
      'Opciones con blindaje general en cinta de aluminio (FTP).',
      'Fibra óptica para aislamiento electromagnético total.'
    ],
    specsTables: [
      {
        title: 'Variedad y Normativas',
        headers: ['Tipo de Cable', 'Categoría / Norma', 'Blindaje', 'Diámetro exterior (mm)', 'Peso aprox (Kg/Km)', 'Aplicación Principal'],
        rows: [
          ['UTP Cat 6', 'ANSI/TIA-568', 'Ninguno (U/UTP)', '6.0', '40', 'Redes Gigabit Ethernet'],
          ['FTP Cat 6A', 'ANSI/TIA-568', 'Foil de Aluminio (F/UTP)', '7.2', '55', 'Redes 10-Gigabit'],
          ['Coaxial RG6', 'MIL-C-17', 'Malla Trenzada de Cobre', '6.9', '48', 'Distribución de TV / CCTV'],
          ['Fibra Monomodo', 'ITU-T G.652.D', 'Armadura de Aramida', '7.0 (8 pelos)', '60', 'Enlaces de larga distancia']
        ]
      }
    ],
    certifications: ['iram', 'seguridad']
  }""")

# 3. Find insertion point and insert
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

# We insert this right before the closing bracket of the products array: "];"
new_content = content[:products_end_idx] + ",\n" + new_products_str + "\n" + content[products_end_idx:]

with open(data_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Successfully appended {len(new_products)} products to services/data.ts")
