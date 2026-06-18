import os

new_products_code = """  {
    id: 'especiales-mineria',
    name: 'Cables Mineros (Serie SHD-GC MT)',
    categoryPath: ['Cables Especiales', 'Minería'],
    description: 'Cables de energía flexibles blindados extrapesados (Extra-Heavy Duty) de 5 a 25 kV, diseñados para alimentación de equipos móviles pesados en minería y petróleo.',
    detailedDescription: `DESCRIPCIÓN
Son cables de energía en media tensión, reforzados y portátiles, para utilizar en desarrollos mineros para equipo móvil pesado como cables de arrastre, palas, taladros y alimentadores de energía. En campos petroleros se utiliza para alimentación de equipo móvil de perforación y en general para instalaciones móviles con desplazamientos horizontales o verticales a la intemperie.
Aptos para soportar en parada o en movimiento todos los esfuerzos de tracción, torsión y flexión generados por el funcionamiento normal de un enrollador de cables.
Cuenta con materiales plásticos que proporcionan una protección adecuada ante productos químicos, entorno hostil, desgarros e impactos. Adicionalmente, estos materiales no liberan gases halógenos ante la eventualidad de producirse un incendio. Apto para aplicaciones donde se necesiten conductores de protección (G) y un conductor de verificación de tierra (GC). El cable cuenta con blindaje individual sobre cada conductor de fase.`,
    image: '/images/ProductosNuevos/8-CABLES ESPECIALES/1-MINERIA/PORTADA.jpeg',
    gallery: [
      '/images/ProductosNuevos/8-CABLES ESPECIALES/1-MINERIA/PORTADA.jpeg'
    ],
    pdf: '/images/ProductosNuevos/8-CABLES ESPECIALES/1-MINERIA/FICHA TECNICA.pdf',
    specs: ['5 a 25 kV', 'EPR/TPU', 'Uso Minero Extrapesado'],
    characteristics: [
      'Temperatura máxima de operación: 90°C en instalación fija / 60°C para uso móvil y flexiones ocasionales.',
      'Temperatura mínima ambiente: -40°C en instalación fija / -25°C para flexiones ocasionales.',
      'Tensión nominal: 5, 8, 15 y 25 kV CA.',
      'Norma constructiva: ICEA S 75-381.',
      'Norma de conductores: ASTM B 33/172/174.',
      'Conductor: Cobre electrolítico recocido estañado en formación flexible.',
      'Aislación: EPR con capas semiconductoras helicoidales interna y externa.',
      'Blindaje: Trenzado de alambres de cobre estañado e hilos textiles (cobertura mínima 60%) sobre cada fase.',
      'Formación: 3F (Fases) + 2G (Ground) + 1GC (Ground Check).',
      'Cubierta: Doble protección de Poliuretano (TPU) resistente a UV, desgarros, impactos e hidrocarburos (UL 2556 / UIC 895 OR / UL 13 / UL 83).'
    ],
    specsTables: [
      {
        title: 'Especificaciones de Referencia (Serie SHD-GC 5kV)',
        headers: ['Formación', 'Resistencia CC a 20°C (Ohm/km)', 'Intensidad Admisible (A)', 'Diámetro Ext. (mm)', 'Peso Aprox. (kg/km)', 'Radio Curvatura (mm)', 'Tracción (daN)'],
        rows: [
          ['3x6 + 2G10 + GC8', '1.50', '79', '39.6', '1753', '237.6', '294'],
          ['3x4 + 2G8 + GC8', '0.94', '104', '42.7', '2180', '256.2', '442'],
          ['3x3 + 2G7 + GC8', '0.75', '120', '45.2', '2514', '271.2', '547'],
          ['3x2 + 2G6 + GC8', '0.59', '138', '47.5', '2852', '285.0', '679'],
          ['3x1 + 2G5 + GC8', '0.472', '161', '49.5', '3283', '297.0', '846'],
          ['3x1/0 + 2G4 + GC8', '0.376', '186', '52.8', '3895', '317.0', '1055'],
          ['3x2/0 + 2G3 + GC8', '0.299', '215', '55.9', '4582', '335.0', '1320'],
          ['3x3/0 + 2G2 + GC8', '0.237', '249', '59.9', '5357', '359.0', '1653'],
          ['3x4/0 + 2G1 + GC8', '0.188', '287', '63.5', '6396', '381.0', '2071'],
          ['3x250 + 2G1/0 + GC8', '0.161', '320', '68.3', '7569', '410.0', '2482'],
          ['3x300 + 2G1/0 + GC8', '0.134', '357', '71.4', '8079', '428.0', '2996']
        ]
      },
      {
        title: 'Especificaciones de Referencia (Serie SHD-GC 8kV)',
        headers: ['Formación', 'Resistencia CC a 20°C (Ohm/km)', 'Intensidad Admisible (A)', 'Diámetro Ext. (mm)', 'Peso Aprox. (kg/km)', 'Radio Curvatura (mm)', 'Tracción (daN)'],
        rows: [
          ['3x4 + 2G8 + GC8', '0.944', '122', '49.3', '2669', '394.0', '442'],
          ['3x3 + 2G7 + GC8', '0.748', '140', '51.3', '2982', '410.0', '547'],
          ['3x2 + 2G6 + GC8', '0.593', '159', '53.8', '3364', '430.0', '679'],
          ['3x1 + 2G5 + GC8', '0.472', '184', '56.1', '3846', '449.0', '846'],
          ['3x1/0 + 2G4 + GC8', '0.376', '211', '58.9', '4435', '471.0', '1055'],
          ['3x2/0 + 2G3 + GC8', '0.299', '243', '62.5', '5199', '500.0', '1320'],
          ['3x3/0 + 2G2 + GC8', '0.237', '279', '66.5', '6019', '532.0', '1653'],
          ['3x4/0 + 2G1 + GC8', '0.188', '321', '69.9', '7066', '559.0', '2071'],
          ['3x250 + 2G1/0 + GC8', '0.161', '355', '73.4', '7887', '587.0', '2482'],
          ['3x300 + 2G1/0 + GC8', '0.134', '398', '77.2', '8756', '618.0', '2857']
        ]
      },
      {
        title: 'Especificaciones de Referencia (Serie SHD-GC 15kV / 25kV)',
        headers: ['Formación', 'Tensión (kV)', 'Resistencia CC a 20°C (Ohm/km)', 'Intensidad Admisible (A)', 'Diámetro Ext. (mm)', 'Peso Aprox. (kg/km)', 'Radio Curvatura (mm)', 'Tracción (daN)'],
        rows: [
          ['15kV: 3x2 + 2G6 + GC8', '15', '0.593', '164', '53.8', '3331', '430.0', '679'],
          ['15kV: 3x1 + 2G5 + GC8', '15', '0.472', '187', '64.0', '4587', '512.0', '846'],
          ['15kV: 3x1/0 + 2G4 + GC8', '15', '0.376', '215', '58.9', '4302', '471.0', '1055'],
          ['15kV: 3x2/0 + 2G3 + GC8', '15', '0.299', '246', '62.5', '5085', '500.0', '1320'],
          ['15kV: 3x3/0 + 2G2 + GC8', '15', '0.237', '283', '66.5', '5890', '532.0', '1653'],
          ['15kV: 3x4/0 + 2G1 + GC8', '15', '0.188', '325', '77.5', '7916', '620.0', '2071'],
          ['25kV: 3x1 + 2G5 + GC8', '25', '0.472', '191', '74.9', '5488', '599.0', '846'],
          ['25kV: 3x1/0 + 2G4 + GC8', '25', '0.376', '218', '77.5', '6091', '620.0', '1055'],
          ['25kV: 3x2/0 + 2G3 + GC8', '25', '0.299', '249', '81.3', '6942', '650.0', '1320'],
          ['25kV: 3x3/0 + 2G2 + GC8', '25', '0.237', '286', '84.6', '7765', '677.0', '1653']
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'libre-halogenos', 'resistente-uv']
  },
  {
    id: 'especiales-ascensor',
    name: 'Cables para Ascensor (EMYSFLEX LIFT)',
    categoryPath: ['Cables Especiales', 'Ascensor'],
    description: 'Conductores colgantes extra flexibles diseñados con núcleo de soporte para comando de cabinas en ascensores y montacargas.',
    detailedDescription: `DESCRIPCIÓN
Este cable está especialmente diseñado para ser utilizado en instalaciones de comando de ascensores y montacargas.
Aislación conformada por compuesto especial extraflexible de PVC con numeración correlativa en tinta blanca indeleble y envoltura final de compuesto especial a base de polímeros termoplásticos y caucho con excelentes propiedades mecánicas y gran flexibilidad (resistencia a fatiga, abrasión, aceites y grasas).
Apto para uso intemperie y bajas temperaturas. No está diseñado para soportar esfuerzos de torsión.`,
    image: '/images/ProductosNuevos/8-CABLES ESPECIALES/2-ASCENSOR/PORTADA.jpeg',
    gallery: [
      '/images/ProductosNuevos/8-CABLES ESPECIALES/2-ASCENSOR/PORTADA.jpeg'
    ],
    pdf: '/images/ProductosNuevos/8-CABLES ESPECIALES/2-ASCENSOR/FICHA TECNICA.pdf',
    specs: ['300/500 V', 'Extra Flexible', 'Con Elemento Portante'],
    characteristics: [
      'Tensión máxima de servicio: 300/500 V.',
      'Tensión de ensayo: 2500 V C.A. durante 5 min.',
      'Temperatura máxima de servicio en el conductor: 70°C.',
      'Conductor: Cuerda flexible de alambres de cobre electrolítico recocido (Clase 5 IRAM NM 280).',
      'Núcleo de soporte: Cuerda de yute (NT) o de acero (NA) revestido en compuesto de PVC especial.',
      'Aislación: Compuesto especial extraflexible de color negro y verde-amarillo, numerado correlativamente.',
      'Envoltura: Compuesto especial a base de polímeros termoplásticos y caucho negro. Excelente resistencia mecánica, física y química (aceites, grasas, hidrocarburos). No propagante de llama, apto intemperie.'
    ],
    specsTables: [
      {
        title: 'Características Técnicas y Dimensionales (EMYSFLEX LIFT NT-NA)',
        headers: ['Nº Conductores x Sección (mm²)', 'Diámetro Ext. Aprox. (mm)', 'Radio Mín. Curvatura (mm)', 'Peso Aprox. (kg/km)', 'Tipo Soporte', 'Long. Máx. Autosoportada (m)'],
        rows: [
          ['6 x 0.75', '10.40', '208', '117', 'Textil', '50'],
          ['8 x 0.75', '12.00', '240', '154', 'Textil', '80'],
          ['10 x 0.75', '13.50', '270', '185', 'Textil', '80'],
          ['12 x 0.75', '15.60', '310', '265', 'Textil', '55'],
          ['20 x 0.75', '16.30', '330', '340', 'Acero', '90'],
          ['24 x 0.75', '19.90', '397', '430', 'Acero', '80'],
          ['4 x 1', '9.00', '180', '105', 'Textil', '55'],
          ['6 x 1', '11.00', '220', '145', 'Textil', '50'],
          ['8 x 1', '12.80', '256', '185', 'Textil', '80'],
          ['10 x 1', '14.30', '286', '225', 'Textil', '80'],
          ['12 x 1', '15.60', '312', '340', 'Textil', '60'],
          ['20 x 1', '18.50', '370', '425', 'Acero', '80'],
          ['14 x 1', '21.30', '426', '510', 'Textil', '60'],
          ['6 x 1.5', '12.20', '244', '190', 'Textil', '80'],
          ['8 x 1.5', '14.30', '286', '250', 'Textil', '60'],
          ['10 x 1.5', '16.00', '320', '320', 'Textil', '60'],
          ['12 x 1.5', '18.30', '365', '400', 'Textil', '60'],
          ['20 x 1.5', '23.00', '460', '650', 'Acero', '90'],
          ['24 x 1.5', '24.50', '490', '750', 'Acero', '90']
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'cuerdas-flexibles', 'no-propagacion']
  },
  {
    id: 'especiales-fibra-optica',
    name: 'Cables de Fibra Óptica ADSS (CIMET OPTEL®)',
    categoryPath: ['Cables Especiales', 'Fibra Óptica'],
    description: 'Cables de fibra óptica dieléctricos autoportantes (ADSS) de doble cubierta con estructura PKP, ideales para tendidos aéreos con vanos de hasta 300 metros.',
    detailedDescription: `DESCRIPCIÓN
Cable óptico dieléctrico de doble cubierta autoportante (ADSS) con estructura PKP, para aplicaciones en instalaciones de líneas aéreas en vanos de hasta 300 metros para líneas interurbanas.
Constituidos por fibras ópticas alojadas en tubos holgados de PBT rellenos con gel tixotrópico para el bloqueo de humedad, reunidos en SZ alrededor de un miembro central dieléctrico. El conjunto contiene elementos hinchables secos para bloqueo de ingreso de agua, protegidos por dos cubiertas de polietileno de media densidad separadas por una doble corona de aramida dispuesta de forma contra helicoidal.`,
    image: '/images/ProductosNuevos/8-CABLES ESPECIALES/3-FIBRA OPTICA/PORTADA.jpeg',
    gallery: [
      '/images/ProductosNuevos/8-CABLES ESPECIALES/3-FIBRA OPTICA/PORTADA.jpeg'
    ],
    pdf: '/images/ProductosNuevos/8-CABLES ESPECIALES/3-FIBRA OPTICA/FICHA TECNICA.pdf',
    specs: ['ADSS PKP', 'Doble Cubierta', 'Vanos hasta 300m'],
    characteristics: [
      'Normas de fabricación y ensayos: ITU-T G.652 (Monomodo estándar G.652D), IEEE 1222.',
      'Constitución: Tubos holgados de PBT rellenos con gel tixotrópico, miembro central dieléctrico.',
      'Protección contra ingreso de agua: Elementos hinchables secos.',
      'Armadura/Protección mecánica: Doble corona de aramida contra helicoidal y doble cubierta de polietileno (Estructura PKP).',
      'Cubierta interna y externa: Polietileno de media densidad negro con protección UV (ASTM D1248, tipo II, Clase C).',
      'Rango de temperatura de operación: -40°C a +70°C.',
      'Identificación: Código de colores de fibras y tubos según EIA-TIA 598.',
      'Embalaje: Carretes de madera no retornables, longitud estándar 4000 m +/-5%.'
    ],
    specsTables: [
      {
        title: 'Datos Dimensionales y de Tracción (CIMET OPTEL®)',
        headers: ['Nº Fibras', 'Diámetro Nominal (mm)', 'Espesor Cubierta (mm)', 'Peso de Cable (kg/km)', 'Modelo Vano', 'Carga Máx. Tracción (N)'],
        rows: [
          ['6 a 36', '13.1', '1.5', '132', 'V200 (Vanos hasta 200m)', '5000'],
          ['48 a 72', '14.3', '1.5', '160', 'V200 (Vanos hasta 200m)', '5500'],
          ['96', '16.6', '1.5', '210', 'V200 (Vanos hasta 200m)', '7000'],
          ['6 a 36', '14.5', '1.5', '155', 'V300 (Vanos hasta 300m)', '10500'],
          ['48 a 72', '15.8', '1.5', '185', 'V300 (Vanos hasta 300m)', '12000']
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'resistente-uv']
  },
  {
    id: 'especiales-utp',
    name: 'Cable UTP de Cobre CAT 6 (Corning)',
    categoryPath: ['Cables Especiales', 'UTP'],
    description: 'Cables de cobre UTP de 4 pares y alto rendimiento para redes estructuradas Gigabit y transmisiones de señal de voz, datos y video.',
    detailedDescription: `DESCRIPCIÓN
Los cables de cobre Corning de 4 pares son de alto rendimiento, conforme con la IEC 61156-5:2013 y EN 50288-10-1:2012.
El cable CAT 6 UTP es fabricado con 4 pares siguiendo el código de colores, conductores de cobre sólido de calibre 24 AWG, agrupados por una cubierta externa retardante al fuego. Cumple y excede las normas de la industria para redes de bajo voltaje y transmisión de señales.
Las aplicaciones incluyen estándar IEEE 802.3 para redes de 10 Mb hasta 1 Gb. Es también aplicable para POE (IEEE 802.3af), POE+ (IEEE 802.3at) y sistemas ATM LAN 1.2 Gb.`,
    image: '/images/ProductosNuevos/8-CABLES ESPECIALES/4-UTP/PORTADA.jpeg',
    gallery: [
      '/images/ProductosNuevos/8-CABLES ESPECIALES/4-UTP/PORTADA.jpeg'
    ],
    pdf: '/images/ProductosNuevos/8-CABLES ESPECIALES/4-UTP/FICHA TECNICA.pdf',
    specs: ['Cat 6 U/UTP', 'LSZH / PVC', 'Bajo Voltaje'],
    characteristics: [
      'Excelente desempeño eléctrico: Probado hasta 350 MHz.',
      'Diámetro del conductor: AWG 24 (0.51 mm) de cobre sólido.',
      'Aislamiento del conductor: PE mínimo 0.95 mm.',
      'Separador: Transversal no-metálico.',
      'Montaje del cable: 1 x 4 pares trenzados.',
      'Material de la cubierta: Disponible en LSZH (libre de halógenos) y PVC.',
      'Radio de curvatura mínimo: 8x diámetro externo (instalación) / 4x diámetro externo (instalado).',
      'Temperatura de servicio: -20°C a +60°C.',
      'Impedancia característica: 100 ± 15 Ω (1 a 100 MHz).'
    ],
    specsTables: [
      {
        title: 'Especificaciones Técnicas y Eléctricas',
        headers: ['Propiedad', 'Valor / Especificación'],
        rows: [
          ['Calibre de conductor', 'AWG 24 (0.51 mm)'],
          ['Material de la cubierta', 'LSZH / PVC'],
          ['Peso máximo de cable', '32.41 kg/km'],
          ['Diámetro externo máximo', '5.4 mm'],
          ['Tensión máxima de tracción', '100 N'],
          ['Resistencia del bucle (Max)', '190 Ω/Km @ 20°C'],
          ['Desbalanceo resistivo (Max)', '2% @ 20°C'],
          ['Impedancia característica', '100 ± 15 Ω (1 a 100 MHz)']
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion']
  },
  {
    id: 'especiales-coaxiales',
    name: 'Cables Coaxiales (RG6 / RG59)',
    categoryPath: ['Cables Especiales', 'Cables Coaxiales'],
    description: 'Cables coaxiales de 75 ohms para videovigilancia (CCTV) y distribución de señales de televisión analógica y digital.',
    detailedDescription: `DESCRIPCIÓN
Cables coaxiales de alta calidad con impedancia nominal de 75 ohms, especialmente diseñados para la transmisión y distribución de señales de alta frecuencia.
Cuentan con un conductor central de cobre sólido o acero cobreado, dieléctrico de polietileno espumado y un excelente blindaje mediante cintas de aluminio y mallas trenzadas de cobre o aluminio, asegurando una mínima atenuación y una óptima inmunidad frente al ruido electromagnético externo.`,
    image: '/images/ProductosNuevos/8-CABLES ESPECIALES/5-CABLES COAXIALES/PORTADA.jpeg',
    gallery: [
      '/images/ProductosNuevos/8-CABLES ESPECIALES/5-CABLES COAXIALES/PORTADA.jpeg'
    ],
    specs: ['RG6 / RG59', '75 Ohms', 'Distribución de Señal'],
    characteristics: [
      'Conductor central de alta conductividad (cobre macizo o acero cobreado).',
      'Dieléctrico de polietileno celular físico inyectado a gas, que evita la penetración de humedad.',
      'Blindaje doble con cinta de aluminio y malla trenzada (cobertura estándar del 60% al 90%).',
      'Cubiertas de PVC flexibles y resistentes a la intemperie (rayos UV) para exterior.',
      'Aptos para sistemas de videovigilancia analógica y digital de alta definición (CCTV HD), CATV y TV satelital.'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion']
  },
  {
    id: 'especiales-desarrollos',
    name: 'Desarrollos Especiales a Medida',
    categoryPath: ['Cables Especiales', 'Desarrollos Especiales'],
    description: 'Diseño, desarrollo y provisión de conductores eléctricos especiales y a pedido, adaptados a los requerimientos técnicos y operativos de cada proyecto.',
    detailedDescription: `DESCRIPCIÓN
En Vicbril Internacional S.A. sabemos que los proyectos de ingeniería de vanguardia y las industrias de alta exigencia requieren soluciones que van más allá de los productos estándar del mercado.
Por eso, nos especializamos en el diseño, desarrollo y provisión de conductores eléctricos especiales y a pedido, adaptados rigurosamente a los requerimientos técnicos y operativos de cada cliente.
Ofrecemos soluciones integrales y flexibles donde otros ven limitaciones, respaldando cada desarrollo con ensayos de laboratorio que aseguran el comportamiento óptimo del cable en su entorno real de trabajo.`,
    image: '/images/ProductosNuevos/8-CABLES ESPECIALES/6-DESARROLLOS ESPECIALES/PORTADA.jpeg',
    gallery: [
      '/images/ProductosNuevos/8-CABLES ESPECIALES/6-DESARROLLOS ESPECIALES/PORTADA.jpeg'
    ],
    pdf: '/images/ProductosNuevos/8-CABLES ESPECIALES/6-DESARROLLOS ESPECIALES/FICHA TECNICA.pdf',
    specs: ['A Medida', 'Estándar de Calidad', 'Diseño Personalizado'],
    characteristics: [
      'Diseño Personalizado: Desarrollamos conductores específicos según las necesidades de transmisión de potencia, control, señalización o datos.',
      'Materiales de Alta Performance: Selección optimizada de compuestos aislantes y cubiertas (XLPE, PVC, LSZH, PUR, resistentes a hidrocarburos y altas temperaturas).',
      'Protecciones a Medida: Configuraciones especiales de pantallas electromagnéticas y armaduras mecánicas (doble fleje de acero, corona de hilos) para entornos hostiles o alta tracción.',
      'Soluciones Multi-industria: Diseños aptos para el sector petrolero, minero, de energías renovables, infraestructura pesada y automatización industrial.',
      'Garantía de Confiabilidad: En estricto cumplimiento de las normas internacionales vigentes (como IEC, ASTM, ICEA, entre otras).'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion', 'resistente-uv']
  },
  {
    id: 'resto-termicas',
    name: 'Térmicas y Disyuntores',
    categoryPath: ['Resto de Materiales Eléctricos', 'Térmicas y Disyuntores'],
    description: 'Equipos de maniobra y protección para tableros eléctricos residenciales, comerciales e industriales, asegurando una desconexión rápida ante sobrecargas y cortocircuitos.',
    detailedDescription: `DESCRIPCIÓN
Los interruptores termomagnéticos y disyuntores diferenciales son elementos indispensables para garantizar la protección de las instalaciones eléctricas y de las personas.
Diseñados para un montaje rápido sobre riel DIN estándar, estos equipos ofrecen una elevada vida útil y un disparo confiable. Su estructura robusta y bornes con protección contra contactos accidentales cumplen con los estándares de seguridad eléctrica más exigentes.`,
    image: '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/1-TERMICAS Y DISYUNTORES/PORTADA.jpeg',
    gallery: [
      '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/1-TERMICAS Y DISYUNTORES/PORTADA.jpeg'
    ],
    specs: ['Baja Tensión', 'Montaje DIN', 'Termomagnéticas y Diferenciales'],
    characteristics: [
      'Protección confiable contra sobrecargas térmicas y corrientes de cortocircuito.',
      'Interruptores diferenciales para detección de fugas de corriente a tierra y protección humana.',
      'Bornes de conexión doble que admiten cables y peines de conexión tipo horquilla o aguja.',
      'Indicadores visuales de estado de los contactos y mecanismo de disparo libre.',
      'Conformidad con normas nacionales e internacionales de seguridad y fabricación.'
    ],
    certifications: ['iram', 'seguridad']
  },
  {
    id: 'resto-jabalinas',
    name: 'Puesta a Tierra, Conectores y Soldadura',
    categoryPath: ['Resto de Materiales Eléctricos', 'Jabalinas y Puesta a Tierra'],
    description: 'Línea de productos para la construcción de sistemas de puesta a tierra, protección eléctrica y equipotencialización.',
    detailedDescription: `DESCRIPCIÓN
Línea de productos destinada a la construcción de sistemas de puesta a tierra, protección eléctrica y equipotencialización en instalaciones industriales, comerciales, energéticas y de infraestructura.
Incluye jabalinas con recubrimiento de cobre por electrólisis de 254 micrones de espesor adherido al alma de acero SAE 1010/1020, conductores desnudos cobre-acero, conectores de compresión tipo 'C' y 'G', planchuelas de cobre electrolítico y sistemas de soldadura cuproaluminotérmica.
Diseñados bajo estrictas normas de fabricación para garantizar una muy baja resistencia de puesta a tierra y una larga vida útil operativa en ambientes enterrados.`,
    image: '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/2-JABALINAS/PORTADA.jpeg',
    gallery: [
      '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/2-JABALINAS/PORTADA.jpeg'
    ],
    pdf: '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/2-JABALINAS/FICHA TECNICA.pdf',
    specs: ['SAE 1010/1020', 'IRAM 2309', 'Cobre 254μm'],
    characteristics: [
      'Alma de acero SAE 1010/1020 de alta resistencia revestida con cobre de 254 micrones.',
      'Jabalinas disponibles en versiones lisas y acoplables con rosca laminada.',
      'Conductores desnudos cobre-acero de alta resistencia mecánica (Norma IRAM 2467).',
      'Conectores de compresión en cobre ETP 99.9% de pureza para uniones permanentes.',
      'Soldadura cuproaluminotérmica que realiza una unión molecular permanente y de mínima resistencia eléctrica.',
      'Planchuelas de cobre electrolítico con conductividad del 97% IACS para barras equipotenciales.'
    ],
    specsTables: [
      {
        title: 'Dimensiones de Jabalinas e Hincado (Norma IRAM 2309)',
        headers: ['Diámetro Nominal', 'Diámetro Aprox. (mm)', 'Largos Estándar (mm)', 'Tipo de Jabalina'],
        rows: [
          ['3/8"', '9.0', '1000, 1500, 2000, 2500, 3000', 'Lisas'],
          ['1/2"', '12.6', '1000, 1500, 2000, 2500, 3000', 'Lisas / Acoplables'],
          ['5/8"', '14.6', '1000, 1500, 2000, 2500, 3000', 'Lisas / Acoplables'],
          ['3/4"', '16.2', '1000, 1500, 2000, 2500, 3000', 'Lisas / Acoplables']
        ]
      }
    ],
    certifications: ['iram', 'seguridad']
  },
  {
    id: 'resto-herrajes',
    name: 'Herrajes y Morsetería para Redes Aéreas',
    categoryPath: ['Resto de Materiales Eléctricos', 'Herrajes y Morsetería'],
    description: 'Accesorios destinados a la conexión, empalme, retención, suspensión y protección de conductores eléctricos en redes de baja y media tensión.',
    detailedDescription: `DESCRIPCIÓN
Línea completa de accesorios para redes eléctricas aéreas y subterráneas, diseñada para maximizar la confiabilidad eléctrica, la seguridad operativa y la vida útil de las instalaciones.
Incluye morsas de suspensión y retención para conductores preensamblados de aluminio, acometidas domiciliarias, ménsulas de fijación, manguitos de empalme preaislados y desnudos, protectores terminales y flejes de acero inoxidable.
Los productos están fabricados en materiales de alta resistencia (aleaciones de aluminio, acero galvanizado en caliente y poliamidas con protección UV) para soportar esfuerzos mecánicos y climas severos.`,
    image: '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/3-HERRAJES Y MORSETERIA/PORTADA.jpeg',
    gallery: [
      '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/3-HERRAJES Y MORSETERIA/PORTADA.jpeg'
    ],
    pdf: '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/3-HERRAJES Y MORSETERIA/FICHA TECNICA.pdf',
    specs: ['Líneas Aéreas', 'Aluminio y Acero', 'Baja/Media Tensión'],
    characteristics: [
      'Morsas de retención y suspensión de alta resistencia mecánica.',
      'Materiales: Aleaciones de aluminio, acero galvanizado por inmersión, acero inoxidable AISI 304 y poliamidas UV.',
      'Sistemas de empalme con manguitos preaislados y terminales de conexión.',
      'Excelente resistencia a la corrosión galvánica y envejecimiento a la intemperie.',
      'Productos ensayados y homologados bajo normas internacionales IEC, IEEE y CENELEC.'
    ],
    certifications: ['iram', 'seguridad', 'resistente-uv']
  },
  {
    id: 'resto-iluminacion',
    name: 'Iluminación LED y Control',
    categoryPath: ['Resto de Materiales Eléctricos', 'Iluminación'],
    description: 'Línea de productos para iluminación residencial, comercial, industrial y pública, basada en tecnología LED de alta eficiencia y bajo consumo.',
    detailedDescription: `DESCRIPCIÓN
Línea integral orientada al ahorro energético y al confort visual en todo tipo de edificaciones y espacios públicos.
Comprende lámparas y tubos LED, luminarias interiores de diseño modular, paneles LED de aplicar o embutir, proyectores y reflectores para exterior (IP65/IP66), campanas de alta potencia para instalaciones industriales, luminarias solares autónomas y sistemas inteligentes de control y sensores de movimiento.
Diseñados con materiales disipadores de calor que garantizan una larga vida útil operativa y una baja emisión térmica.`,
    image: '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/4-ILUMINACIÓN/PORTADA.jpeg',
    gallery: [
      '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/4-ILUMINACIÓN/PORTADA.jpeg'
    ],
    pdf: '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/4-ILUMINACIÓN/FICHA TECNICA.pdf',
    specs: ['Tecnología LED', 'Ahorro Energético', 'IP65/IP66'],
    characteristics: [
      'Alta eficiencia lumínica con muy bajo consumo de potencia eléctrica.',
      'Carcasas en aluminio de alta disipación térmica y difusores ópticos de policarbonato con protección UV.',
      'Luminarias industriales y reflectores LED aptos para entornos exteriores y deportivos de alta exigencia.',
      'Sistemas de automatización y control: sensores de movimiento, fotocélulas e iluminación inteligente (Smart).',
      'Gran variedad de formatos modulares, temperaturas de color (cálido, neutro, frío) y encendido instantáneo.'
    ],
    certifications: ['iram', 'seguridad']
  },
  {
    id: 'resto-canos',
    name: 'Sistemas de Canalización, Caños y Cajas',
    categoryPath: ['Resto de Materiales Eléctricos', 'Caños y Cajas'],
    description: 'Sistemas de caños rígidos, corrugados, cablecanales y cajas diseñados para la conducción y protección segura del cableado eléctrico.',
    detailedDescription: `DESCRIPCIÓN
Sistemas integrales para canalización, conducción y protección mecánica de conductores eléctricos en obras civiles, comerciales y residenciales.
Comprende caños rígidos de diferentes espesores, tubos corrugados de tipo liviano, semipesado y pesado, cablecanales de pared y piso para una prolija distribución de cableado, cajas de embutir y estancas para empalmes y paso de cables, y gabinetes modulares DIN para armado de tableros eléctricos.
Fabricados en compuestos termoplásticos autoextinguibles de alta resistencia al impacto y libres de halógenos.`,
    image: '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/5-CAÑOS Y CAJAS/PORTADA.jpeg',
    gallery: [
      '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/5-CAÑOS Y CAJAS/PORTADA.jpeg'
    ],
    pdf: '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/5-CAÑOS Y CAJAS/FICHA TECNICA.pdf',
    specs: ['Canalización', 'Autoextinguible', 'DIN / Embutir'],
    characteristics: [
      'Tubos rígidos y corrugados autoextinguibles, de excelente flexibilidad y resistencia mecánica al aplastamiento.',
      'Cajas de embutir y cajas estancas compatibles para armado de mecanismos e inspección.',
      'Gabinetes modulares preparados para equipamiento DIN con puertas transparentes u opacas.',
      'Materiales de alta durabilidad libres de halógenos que no liberan gases tóxicos.',
      'Cumplimiento con reglamentos vigentes de seguridad para instalaciones eléctricas residenciales e industriales.'
    ],
    certifications: ['iram', 'seguridad']
  },
  {
    id: 'resto-bandejas',
    name: 'Bandejas Portacables y Accesorios',
    categoryPath: ['Resto de Materiales Eléctricos', 'Bandejas Portacables'],
    description: 'Sistemas modulares de bandejas portacables de chapa perforada, tipo escalera y rejilla para tendidos de potencia y control en industrias.',
    detailedDescription: `DESCRIPCIÓN
Sistema modular de canalización eléctrica diseñado para la conducción, soporte y organización de cables en industrias, plantas de proceso, centros de datos y grandes obras de infraestructura.
Incluye tramos rectos de bandejas perforadas, bandejas tipo escalera (estándar y ultra pesada) y bandejas de alambre (rejilla), junto con una completa gama de accesorios de acople, curvas planas y verticales, uniones Tee, Cruz, soportes tipo ménsula y varillas de fijación.
Fabricadas en acero de alta resistencia con terminación galvanizada de origen o por inmersión en caliente para máxima protección contra la corrosión.`,
    image: '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/6-BANDEJAS/PORTADA.jpeg',
    gallery: [
      '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/6-BANDEJAS/PORTADA.jpeg'
    ],
    pdf: '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/6-BANDEJAS/FICHA TECNICA.pdf',
    specs: ['Galvanizado en Caliente', 'Perforada / Escalera / Rejilla', 'Soporte Modulares'],
    characteristics: [
      'Sistema modular de rápida instalación con uniones integradas.',
      'Alta capacidad de carga y resistencia estructural ante la flexión.',
      'Diseño perforado y tipo escalera que asegura ventilación continua y disipación de temperatura de los cables.',
      'Materiales: Acero de alta resistencia galvanizado de origen, por inmersión en caliente (HDG) o acero inoxidable.',
      'Completo catálogo de accesorios para realizar desvíos de nivel, derivaciones e inspecciones.'
    ],
    certifications: ['iram', 'seguridad']
  },
  {
    id: 'resto-teclas',
    name: 'Teclas y Bastidores (Mecanismos Eléctricos)',
    categoryPath: ['Resto de Materiales Eléctricos', 'Teclas y Bastidores'],
    description: 'Línea de teclas, bastidores, interruptores y tomacorrientes modulares para instalaciones residenciales y comerciales.',
    detailedDescription: `DESCRIPCIÓN
Línea modular de mecanismos de comando y tomacorrientes eléctricos residenciales y comerciales.
Combina una excelente estética visual y funcionalidad modular, permitiendo configurar bastidores con teclas de encendido, pulsadores, tomacorrientes de distintas corrientes, variadores electrónicos de luz y ventilación, conectores telefónicos y puertos USB de carga.
Fabricadas con compuestos termoplásticos de ingeniería autoextinguibles y contactos de cobre/latón de alta conductividad para mayor durabilidad y seguridad.`,
    image: '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/7-TECLAS Y BASTIDORES/PORTADA.jpeg',
    gallery: [
      '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/7-TECLAS Y BASTIDORES/PORTADA.jpeg'
    ],
    pdf: '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/7-TECLAS Y BASTIDORES/FICHA TECNICA.pdf',
    specs: ['Diseño Modular', 'Policarbonato Autoextinguible', 'Conectividad USB/Datos'],
    characteristics: [
      'Interruptores y pulsadores de accionamiento silencioso y alta vida útil.',
      'Tomacorrientes normalizados con contactos de alta presión y excelente conductividad.',
      'Tomas especiales: variadores de luz, reguladores, tomas de TV, puertos USB integrados.',
      'Bastidores de fácil sujeción y tapas estéticas con gran variedad de colores.',
      'Materiales: Policarbonato resistente a la fatiga, abrasión y decoloración por rayos UV.'
    ],
    certifications: ['iram', 'seguridad']
  },
  {
    id: 'resto-transformadores',
    name: 'Transformadores de Distribución',
    categoryPath: ['Resto de Materiales Eléctricos', 'Transformadores'],
    description: 'Transformadores de potencia y distribución para redes de energía eléctrica civil, comercial y plantas de media tensión.',
    detailedDescription: `DESCRIPCIÓN
Transformadores de distribución eléctrica diseñados para ajustar los niveles de tensión en subestaciones transformadoras urbanas, rurales e industriales.
Disponibles en baño de aceite mineral o secos encapsulados en resina epoxi de alta resistencia. Diseñados bajo estrictas normas constructivas, proporcionan un rendimiento de excelencia con niveles mínimos de pérdidas de potencia, vibraciones y ruido, garantizando una excelente durabilidad y confiabilidad en redes de distribución.`,
    image: '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/8-TRANSFORMADORES/PORTADA.jpeg',
    gallery: [
      '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/8-TRANSFORMADORES/PORTADA.jpeg'
    ],
    specs: ['Bajo Nivel de Pérdidas', 'Aceite / Resina Seco', 'Distribución Urbana e Industrial'],
    characteristics: [
      'Transformadores en baño de aceite o tipo secos encapsulados en resina epoxi.',
      'Excelente comportamiento térmico y resistencia ante sobrecargas y cortocircuitos.',
      'Mecanismos de protección integrados: relé Buchholz, termómetros y válvulas de sobrepresión.',
      'Bajos niveles de pérdidas en vacío y en carga, maximizando la eficiencia energética.',
      'Cumplimiento de normas nacionales e internacionales aplicables.'
    ],
    certifications: ['iram', 'seguridad']
  },
  {
    id: 'resto-terminales',
    name: 'Terminales, Uniones y Morsetería',
    categoryPath: ['Resto de Materiales Eléctricos', 'Terminales'],
    description: 'Línea completa de terminales, uniones de compresión y morsetería para terminación de conductores eléctricos de cobre y aluminio.',
    detailedDescription: `DESCRIPCIÓN
Terminales y uniones de compresión diseñados para realizar conexiones eléctricas seguras, confiables y de baja resistencia de contacto en instalaciones de baja, media y alta tensión.
Comprende terminales de cobre estañado de un orificio, uniones de compresión, terminales de aluminio y terminales bimetálicos cobre-aluminio soldados por fricción para evitar la corrosión galvánica entre materiales disímiles.
La línea incorpora terminales preaislados y punteras tubulares para armado de tableros eléctricos.`,
    image: '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/9-TERMINALES/PORTADA.jpeg',
    gallery: [
      '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/9-TERMINALES/PORTADA.jpeg'
    ],
    pdf: '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/9-TERMINALES/FICHA TECNICA.pdf',
    specs: ['Cobre estañado', 'Bimetálicos', 'Compresión Hexagonal'],
    characteristics: [
      'Terminales y uniones de cobre estañado por electrodeposición para máxima conductividad y anticorrosión.',
      'Terminales bimetálicos aluminio-cobre unidos por fricción para transiciones de metales disímiles sin corrosión galvánica.',
      'Terminales preaislados y punteras tubulares en PVC/termoplásticos para tableros de control.',
      'Instalación simple mediante herramientas de compresión hexagonal o identación profunda.',
      'Secciones de marcación claras en los terminales de fácil lectura.'
    ],
    certifications: ['iram', 'seguridad']
  },
  {
    id: 'resto-empalmes',
    name: 'Empalmes y Terminales Termocontraíbles',
    categoryPath: ['Resto de Materiales Eléctricos', 'Empalmes y Accesorios Subterráneos'],
    description: 'Accesorios termocontraíbles y contraíbles en frío para la terminación, empalme y protección estanca de cables en redes aéreas y subterráneas.',
    detailedDescription: `DESCRIPCIÓN
Sistemas de empalmes y terminaciones diseñados para restablecer la continuidad aislante, eléctrica y mecánica de conductores eléctricos en redes de distribución.
Comprende empalmes rectos termocontraíbles o con resinas de encapsulado, y terminales termocontraíbles o contraíbles en frío para cables de media tensión de hasta 36 kV.
También se incorporan conectores enchufables apantallados para celdas de media tensión y descargadores de sobretensión, garantizando una total estanqueidad e inmunidad ante la penetración de humedad.`,
    image: '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/10-EMPALMES/PORTADA.jpeg',
    gallery: [
      '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/10-EMPALMES/PORTADA.jpeg'
    ],
    pdf: '/images/ProductosNuevos/9-RESTO DE MATERIALES ELECTRICOS/10-EMPALMES/FICHA TECNICA (PARTE EMPALMES).pdf',
    specs: ['Termocontraíbles / Contraíbles en Frío', 'Baja y Media Tensión', 'Estanqueidad IP'],
    characteristics: [
      'Empalmes rectos termocontraíbles y de resina dieléctrica para cables subterráneos de baja y media tensión.',
      'Terminales termocontraíbles y contraíbles en frío para media tensión hasta 36 kV.',
      'Conectores enchufables apantallados de codo y rectos para celdas transformadoras.',
      'Uniones y terminales con tornillos fusibles para facilidad de instalación mecánica.',
      'Tubos termocontraíbles con adhesivo interno y geles aislantes que aseguran total hermeticidad frente al agua.'
    ],
    certifications: ['iram', 'seguridad']
  }
];
"""

# Let's read the data.ts file
data_path = "services/data.ts"
with open(data_path, "r", encoding="utf-8") as f:
    content = f.read()

# We need to find the start index where we replace
# The specials-mineria product starts at `{` right before `id: 'especiales-mineria'`
target_str = "id: 'especiales-mineria'"
target_idx = content.find(target_str)
if target_idx == -1:
    print("Could not find specials-mineria!")
    exit(1)

# Walk backwards from target_idx to find the opening '{' of the product block
start_idx = target_idx
while start_idx > 0:
    if content[start_idx] == '{':
        break
    start_idx -= 1

# Walk backwards from start_idx to make sure we clean up leading spaces/newlines to match indentation
while start_idx > 0 and content[start_idx - 1] in [' ', '\\t', '\\r', '\\n']:
    start_idx -= 1

# Now find where the products array ends, which is just before `export const brands`
end_target = "export const brands = ["
end_idx = content.find(end_target)
if end_idx == -1:
    print("Could not find brands array!")
    exit(1)

# Walk backwards from end_idx to find the closing '];' of the products array
closing_idx = end_idx
while closing_idx > start_idx:
    if content[closing_idx:closing_idx+2] == '];':
        closing_idx += 2
        break
    closing_idx -= 1

# Re-slice the content
updated_content = content[:start_idx] + "\n" + new_products_code + content[end_idx:]

with open(data_path, "w", encoding="utf-8") as f:
    f.write(updated_content)

print("Replacement successful!")
