import { Product, Category } from '../types';

export const categories: Category[] = [
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
  }
];

export const products: Product[] = [
  {
    id: 'unipolar-pvc',
    name: 'Cable Unipolar PVC',
    category: 'Cables para Instalación Civil',
    subCategory: '1-CABLE UNIPOLAR',
    description: 'Apto para instalaciones fijas en interiores de inmuebles civiles, comerciales e industriales.',
    detailedDescription: `DESCRIPCIÓN
Apto para instalaciones fijas en interiores de inmuebles civiles, comerciales e industriales.

APLICACIONES
Permite cableado en tableros, cañerías embutidas y cañerías a la vista recomendando el uso de bandejas portantes.`,
    image: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR PVC/PORTADA.jpg',
    gallery: [
      '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR PVC/FICHA TECNICA UNIPOLAR PVC/foto producto dentro de ficha tecnica.jpeg'
    ],
    technicalTable: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR PVC/FICHA TECNICA UNIPOLAR PVC/marcas disponibles unipolar pvc.jpg',
    pdf: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR PVC/FICHA TECNICA UNIPOLAR PVC/FICHA TECNICA UNIP PVC (REEMPLAZAR FOTO DE ABAJO).pdf',
    specs: ['450/750 V', '70°', 'PVC'],
    technicalIntro: `CARACTERÍSTICAS
Temperatura máxima: 70° C de servicio
Tensión normal: 450/750 Volt.
Norma constructiva: IEC 60227-3 - IRAM NM 247-3
Norma de fuego: IEC 60332-3-23 / IRAM NM IEC 60332-3-23 - No propagación de incendio.
Norma de conductores: IEC 60228 / IRAM NM 280

INSTALACIÓN
Montaje: Radio mínimo de curvatura igual a 7 x diámetro exterior del cable
Tracción máxima: 5daN/mm² aplicados sobre los conductores
Temperatura de montaje: igual o mayor a 5°C`,
    characteristics: [],
    specsTables: [
      {
        title: "Tabla de Datos Técnicos",
        headers: ["Sección nominal (mm²)", "Espesor aislación (mm)", "Diámetro exterior (mm)", "Peso (kg/km)", "Resistencia eléctrica (Ohm/km)", "Intensidad admisible Amper (*)"],
        rows: [
          ["0,5", "0,60", "2,1", "8,2", "39", "4,8"],
          ["0,75", "0,60", "2,3", "10,8", "26", "7,2"],
          ["1", "0,70", "2,7", "14,4", "19,5", "9,6"],
          ["1,5", "0,70", "3,0", "20", "13,3", "13"],
          ["2,5", "0,80", "3,6", "31", "7,98", "18"],
          ["4", "0,80", "4,1", "45", "4,95", "24"],
          ["6", "0,80", "4,7", "63", "3,3", "31"],
          ["10", "1,00", "6,2", "112", "1,91", "43"],
          ["16", "1,00", "7,1", "166", "1,21", "59"],
          ["25", "1,20", "8,7", "256", "0,78", "77"],
          ["35", "1,20", "9,7", "358", "0,554", "96"],
          ["50", "1,40", "11,5", "504", "0,386", "116"],
          ["70", "1,40", "13,5", "688", "0,272", "148"],
          ["95", "1,60", "15,9", "904", "0,206", "180"],
          ["120", "1,60", "17,3", "1136", "0,161", "207"],
          ["150", "1,80", "19,9", "1415", "0,129", "228"],
          ["185", "2,00", "21,7", "1730", "0,106", "260"],
          ["240", "2,20", "25,1", "2256", "0,0801", "290"],
          ["300", "2,40", "28,3", "2796", "0,0641", "340"]
        ],
        note: "(*) Valores para una temperatura ambiente de 40° C y temperatura en el conductor de 70° C para una terna de conductores instalados en cañería embutida en mampostería."
      }
    ],
    certifications: ['iram', 'seguridad', 'cuerdas-flexibles', 'instalacion-domiciliaria', 'no-propagacion', 'temperatura-servicio'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'unipolar-lsoh',
    name: 'Cable Unipolar LSOH',
    category: 'Cables para Instalación Civil',
    subCategory: '1-CABLE UNIPOLAR',
    description: 'Conductores a instalar en lugares cerrados con alto tránsito de personas donde la evacuación por incendio resulta difícil de resolver.',
    detailedDescription: `DESCRIPCIÓN
Conductores a instalar en lugares cerrados con alto tránsito de personas, por ejemplo cines, sanatorios, teatros, estaciones de trenes subterráneos, universidades, centros comerciales, escuelas, túneles de minas, etc; es decir todo lugar dónde la evacuación por incendio resulta difícil de resolver.

APLICACIONES
Permite cableado en tableros, cañerías embutidas y cañerías a la vista recomendando el uso de bandejas portantes.`,
    image: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR LSOH/PORTADA.jpeg',
    gallery: [
      '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR LSOH/FICHA TECNICA UNIPOLAR LSOH/foto producto dentro de ficha tecnica.jpeg'
    ],
    technicalTable: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR LSOH/FICHA TECNICA UNIPOLAR LSOH/MARCAS DISPONIBLES UNIPOLAR LSOH.jpg',
    pdf: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR LSOH/FICHA TECNICA UNIPOLAR LSOH/FICHA TECNICA UNIP. LSOH (REEMPLAZAR FOTO).pdf',
    specs: ['450/750 Volt', '70° C', 'IRAM 62267'],
    technicalIntro: `CARACTERÍSTICAS
Temperatura máxima: 70° C de servicio
Tensión normal: 450/750 Volt.
Norma constructiva: IRAM 62267
Norma de fuego: IEC 60332-3-24 / IRAM NM IEC 60332-3-24 - No propagación de incendio.
Norma de halógenos: IEC 60754 - 1/2 - Ausencia de halógenos.
Norma de humos: IEC 61034 - Transparencia de humos.
Norma de toxicidad: NES 713 / CEI 20-37 - Ausencia de tóxicos.
Norma de conductores: IEC 60228 / IRAM NM 280.

CONSTRUCCIÓN
Conductor: Metal cobre electrolítico recocido en formación clase 5.
Flexibilidad: Clase 5; según IRAM NM-280 e IEC 60228.

INSTALACIÓN
Montaje: Radio mínimo de curvatura a 7 x diámetro exterior del cable.
Tracción máxima: 5daN/mm² aplicados sobre los conductores de cobre.
Temperatura de montaje: igual o mayor a 5°C.`,
    characteristics: [],
    specsTables: [
      {
        title: "Tabla de Datos Técnicos",
        headers: ["Sección nominal (mm²)", "Espesor aislación (mm)", "Diámetro exterior (mm)", "Peso (kg/km)", "Resistencia eléctrica (Ohm/km)", "Intensidad admisible (A)"],
        rows: [
          ["0,5", "0,60", "2,1", "8,2", "39", "4,8"],
          ["0,75", "0,60", "2,3", "10,8", "26", "7,2"],
          ["1", "0,70", "2,7", "14,4", "19,5", "9,6"],
          ["1,5", "0,70", "3,0", "20", "13,3", "13"],
          ["2,5", "0,80", "3,6", "31", "7,98", "18"],
          ["4", "0,80", "4,1", "45", "4,95", "24"],
          ["6", "0,80", "4,7", "63", "3,3", "31"],
          ["10", "1,00", "6,2", "112", "1,91", "43"],
          ["16", "1,00", "7,1", "166", "1,21", "59"],
          ["25", "1,20", "8,7", "256", "0,78", "77"],
          ["35", "1,20", "9,7", "358", "0,554", "96"],
          ["50", "1,40", "11,5", "504", "0,386", "116"],
          ["70", "1,40", "13,5", "688", "0,272", "148"],
          ["95", "1,60", "15,9", "904", "0,206", "180"],
          ["120", "1,60", "17,3", "1136", "0,161", "207"],
          ["150", "1,80", "19,9", "1415", "0,129", "228"],
          ["185", "2,00", "21,7", "1730", "0,106", "260"],
          ["240", "2,20", "25,1", "2256", "0,0801", "290"],
          ["300", "2,40", "28,3", "2796", "0,0641", "340"]
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'bajos-humos', 'libre-halogenos', 'marcacion-secuencial', 'espacios-publicos', 'instalacion-domiciliaria']
  },
  {
    id: 'bipolar-vaina-chata',
    name: 'Cable Envainado Chato (Bajo Plomo)',
    category: 'Cables para Instalación Civil',
    subCategory: '2-CABLE BIPOLAR',
    description: 'Cables flexibles diseñados para uso en instalaciones móviles industriales y domésticas.',
    detailedDescription: `TIPO BAJO PLOMO
MULTIPOLAR - PVC/PVC - 300/500 VOLT - 70°C

DESCRIPCIÓN
Cables flexibles diseñados para uso en instalaciones móviles industriales y domésticas y aparatos portátiles en general, excluyendo los aparatos de calefacción.

APLICACIONES
Interconexión de máquinas empleadas para procesos fabriles, incluyendo máquinas - herramientas y equipamientos de mano. Los cables están permitidos para su conexión directa a la red eléctrica.`,
    image: '/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE ENVAINADO CHATO/portada.jpg',
    gallery: [
      '/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE ENVAINADO CHATO/FICHA TECNICA VAINA CHATA/foto producto dentro de ficha tecnica.png'
    ],
    technicalTable: '/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE ENVAINADO CHATO/FICHA TECNICA VAINA CHATA/MARCAS DISPONIBLES VAINA CHATA.jpg',
    pdf: '/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE ENVAINADO CHATO/FICHA TECNICA VAINA CHATA/FICHA TECNICA VAINA CHATA.pdf',
    specs: ['300/500 V', '70°', 'PVC/PVC'],
    technicalIntro: `CARACTERÍSTICAS
Temperatura máxima: 70°C de servicio, 160°C de cortocircuito.
Tensión nominal: 300/500 Volt.
Norma constructiva: IEC 60227-7.
Norma de fuego: IRAM NM 60332-1.
Norma de conductores: IEC 60228 / IRAM NM 280.
Conductor: Cobre electrolítico recocido en formación clase 5.
Aislación: PVC.
Identificación: Color negro con identificación alfanumerica en color blanco o amarillo. Siempre incluye un conductor de tierra verde/amarillo en el total de conductores indicados.
Cubierta: PVC negro, no propagante del incendio.`,
    characteristics: [],
    colors: [
      { 
        label: 'Bipolar', 
        values: ['Celeste', 'Marrón'], 
        codes: ['#00AEEF', '#8B4513'] 
      },
      { 
        label: 'Tripolar', 
        values: ['Verde-Amarillo', 'Celeste', 'Marrón'], 
        codes: ['linear-gradient(135deg, #fbbf24 50%, #16a34a 50%)', '#00AEEF', '#8B4513'] 
      }
    ],
    specsTables: [
      {
        title: "Tabla de Datos Técnicos",
        headers: ["Formación N° x mm²", "Diámetro máx. alambres mm", "Espesor aislación nominal mm", "Espesor envoltura nominal mm", "Dimensiones exteriores aprox. mm", "Masa aprox. kg/km", "Intensidad admisible (A)", "Resistencia eléctrica máx a 20°C (Ohm/km)"],
        rows: [
          ["2x1", "0,21", "0,6", "0,6", "4,1 x 6,6", "44", "7", "19,5"],
          ["2x1,5", "0,26", "0,7", "0,6", "4,5 x 7,5", "58", "10", "13,3"],
          ["2x2,5", "0,26", "0,8", "0,6", "5,1 x 8,8", "85", "16", "7,98"],
          ["3x1", "0,21", "0,6", "0,6", "4,1 x 9,2", "64", "7", "19,5"],
          ["3x1,5", "0,26", "0,7", "0,6", "4,5 x 10,6", "86", "10", "13,3"],
          ["3x2,5", "0,26", "0,8", "0,6", "5,1 x 12,5", "126", "16", "7,98"]
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'cuerdas-flexibles', 'no-propagacion', 'marcacion-secuencial', 'instalacion-industrial', 'conductor-tierra', 'instalacion-domiciliaria'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'bipolar-paralelo',
    name: 'Cable Paralelo (Bipolar)',
    category: 'Cables para Instalación Civil',
    subCategory: '2-CABLE BIPOLAR',
    description: 'Cordones paralelos de cobre para alimentación de artefactos livianos y prolongaciones.',
    detailedDescription: `CABLE PARALELO (BIPOLAR) - 300/300V

DESCRIPCIÓN
Cordones paralelos de cobre para alimentación de artefactos livianos y prolongaciones. Ideales para conexiones de veladores, radios y electrodomésticos de baja potencia.

APLICACIONES
Instalaciones móviles y aparatos portátiles en general. Apto para uso doméstico y artefactos de iluminación.`,
    image: '/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE PARALELO/portada.jpeg',
    gallery: [
      '/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE PARALELO/FICHA TECNICA PARALELO/foto producto dentro de ficha tecnica.jpeg'
    ],
    technicalTable: '/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE PARALELO/FICHA TECNICA PARALELO/MARCAS DISPONIBLES PARALELO.jpg',
    pdf: '/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE PARALELO/FICHA TECNICA PARALELO/FICHA TECNICA PARALELO.pdf',
    specs: ['300V', 'Flexible', 'PVC Blanco/Negro'],
    technicalIntro: `CARACTERÍSTICAS
Tensión nominal: 300/300V
Conductor: Cobre flexible en formación clase 5.
Aislación: PVC.`,
    characteristics: [],
    specsTables: [
      {
        title: "Tabla de Datos Técnicos",
        headers: ["Formación (mm²)", "Diám. máx. alambres (mm)", "Espesor Aisl. (mm)", "Dimensiones Ext. (mm)", "Masa (kg/km)", "Resistencia (Ohm/km)", "Intensidad (A)"],
        rows: [
          ["2x0,50", "0,21", "0,6", "2,4 x 4,8", "24", "39", "3"],
          ["2x0,75", "0,21", "0,6", "2,6 x 5,2", "28", "26", "6"],
          ["2x1", "0,21", "0,6", "2,7 x 5,4", "32", "19,5", "6"],
          ["2x1,5", "0,26", "0,7", "3,0 x 6,1", "45", "13,3", "10"],
          ["2x2,5", "0,26", "0,8", "3,6 x 7,4", "72", "7,98", "15"],
          ["2x4", "0,31", "0,8", "4,2 x 8,6", "110", "4,95", "20"]
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'instalacion-domiciliaria', 'temperatura-servicio', 'cuerdas-flexibles'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'bipolar-paralelo-parlante',
    name: 'Cable Paralelo Parlante',
    category: 'Cables para Instalación Civil',
    subCategory: '2-CABLE BIPOLAR',
    description: 'Cables específicos para audio y parlantes con identificación de polaridad.',
    detailedDescription: `CABLE PARALELO PARLANTE

DESCRIPCIÓN
Cordones de cobre flexible con aislación de PVC cristal o bicolor. Diseñados para la interconexión de sistemas de audio, garantizando fidelidad en la señal.

APLICACIONES
Interconexión de equipos de audio y aparatos portátiles. Diseñado para flexibilidad en instalaciones móviles.`,
    image: '/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE PARALELO PARLANTE/portada.jpeg',
    gallery: [
      '/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE PARALELO PARLANTE/FICHA TECNICA PARALELO PARLANTE/foto producto dentro de ficha tecnica.jpeg'
    ],
    technicalTable: '/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE PARALELO PARLANTE/FICHA TECNICA PARALELO PARLANTE/MARCAS DISPONIBLES PARALELO PARLANTE.jpg',
    pdf: '/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE PARALELO PARLANTE/FICHA TECNICA PARALELO PARLANTE/FICHA TECNICA PARALELO PARLANTE.pdf',
    specs: ['Audio', 'Extra flexible', 'Bicolor/Cristal'],
    technicalIntro: `CARACTERÍSTICAS
Tensión nominal 300/500V.
Conductor: Cobre flexible formación clase 5.
Aislación: PVC cristal o bicolor.`,
    characteristics: [],
    colors: [
      { 
        label: 'Bipolar', 
        values: ['Negro', 'Rojo'], 
        codes: ['#000000', '#FF0000'] 
      }
    ],
    specsTables: [
      {
        title: "Tabla de Datos Técnicos",
        headers: ["Formación (mm²)", "Diám. máx. alambres (mm)", "Espesor Aisl. (mm)", "Espesor Env. (mm)", "Dimensiones Ext. (mm)", "Masa (kg/km)", "Intensidad (A)"],
        rows: [
          ["2x1", "0,21", "0,6", "0,6", "4,1 x 6,6", "44", "7"],
          ["2x1,5", "0,26", "0,7", "0,6", "4,5 x 7,5", "58", "10"]
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'instalacion-domiciliaria', 'temperatura-servicio', 'cuerdas-flexibles'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'civil-03',
    name: 'Cable Tipo Taller (TT)',
    category: 'Cables para Instalación Civil',
    subCategory: '3-CABLE TIPO TALLER',
    description: 'Conductores diseñados para instalaciones móviles familiares, comerciales e industriales.',
    detailedDescription: `BAJA TENSIÓN 300/500 VOLT
MULTIPOLAR - PVC/PVC - 70° C - IRAM 247-5

DESCRIPCIÓN
Conductores diseñados para instalaciones móviles familiares, comerciales e industriales, máquinas manipuladas manualmente y dispositivos portátiles en general.

APLICACIONES
Instalaciones móviles industriales y domésticas, maquinaria de mano y aparatos portátiles en general.`,
    image: '/images/PRODUCTOS/3-CABLE TIPO TALLER/PORTADA.jpeg',
    gallery: [
      '/images/PRODUCTOS/3-CABLE TIPO TALLER/FICHA TECNICA TIPO TALLER/foto producto dentro de ficha tecnica.jpeg'
    ],
    technicalTable: '/images/PRODUCTOS/3-CABLE TIPO TALLER/FICHA TECNICA TIPO TALLER/MARCAS DISPONIBLES TIPO TALLER.jpg',
    pdf: '/images/PRODUCTOS/3-CABLE TIPO TALLER/FICHA TECNICA TIPO TALLER/FICHA TECNICA TIPO TALLER (REEMPLAZAR FOTO).pdf',
    specs: ['300/500 V', '70°', 'IRAM 247-5'],
    technicalIntro: `CARACTERÍSTICAS
Temperatura máxima: 70° C de servicio, 160° C de cortocircuito
Tensión nominal: 300/ 500 Volt.
Norma constructiva: IRAM NM-247-5
Norma de fuego: IRAM NM IEC 60332-1
Norma de conductores: IEC 60228 / IRAM NM 280
Conductor: Metal cobre electrolítico recocido en formación clase 5.
Flexibilidad: Clase 5; según IRAM NM-280 e IEC 60228
Cubierta externa: PVC Negro, no propagante de incendio
Aislacion: PVC

INSTALACIÓN
Montaje: Radio mínimo de curvatura a 7 x diámetro exterior del cable
Tracción máxima: 5daN/mm² aplicados sobre los conductores de cobre.
Temperatura de montaje: igual o mayor a 5°C.`,
    characteristics: [],
    colors: [
      { label: 'Bipolar', values: ['Celeste', 'Marrón'], codes: ['#00AEEF', '#8B4513'] },
      { label: 'Tripolar', values: ['Verde-Amarillo', 'Celeste', 'Marrón'], codes: ['linear-gradient(135deg, #fbbf24 50%, #16a34a 50%)', '#00AEEF', '#8B4513'] },
      { label: 'Tetrapolar', values: ['Verde-Amarillo', 'Negro', 'Celeste', 'Marrón'], codes: ['linear-gradient(135deg, #fbbf24 50%, #16a34a 50%)', '#000000', '#00AEEF', '#8B4513'] },
      { label: 'Pentapolar', values: ['Verde-Amarillo', 'Negro', 'Celeste', 'Marrón', 'Rojo'], codes: ['linear-gradient(135deg, #fbbf24 50%, #16a34a 50%)', '#000000', '#00AEEF', '#8B4513', '#FF0000'] }
    ],
    specsTables: [
      {
        title: "Bipolar",
        headers: ["Sección nominal mm²", "Espesor nominal mm", "Espesor cubierta mm", "Diámetro exterior mm", "Peso Kg/km", "Resistencia eléctrica a 20°C en C.C Ohm/km"],
        rows: [
          ["0,5", "0,6", "0,8", "5,7", "43", "39"],
          ["0,75", "0,6", "0,8", "6,2", "52", "26"],
          ["1,0", "0,6", "0,8", "6,5", "60", "19,5"],
          ["1,5", "0,7", "0,8", "7,4", "80", "13,3"],
          ["2,5", "0,8", "1", "9,1", "125", "7,98"],
          ["4,0", "0,8", "1,1", "10,4", "172", "4,95"],
          ["6,0", "0,8", "1,3", "11,9", "236", "3,3"],
          ["10", "1,0", "1,5", "15,1", "389", "1,91"]
        ]
      },
      {
        title: "Tripolar",
        headers: ["Sección nominal mm²", "Espesor nominal mm", "Espesor cubierta mm", "Diámetro exterior mm", "Peso Kg/km", "Resistencia eléctrica a 20°C en C.C Ohm/km"],
        rows: [
          ["0,5", "0,6", "0,8", "6", "50", "39"],
          ["0,75", "0,6", "0,8", "6,6", "62", "26"],
          ["1,0", "0,6", "0,8", "6,9", "72", "19,5"],
          ["1,5", "0,7", "0,9", "8,1", "101", "13,3"],
          ["2,5", "0,8", "1,1", "9,9", "157", "7,98"],
          ["4,0", "0,8", "1,2", "11,3", "219", "4,95"],
          ["6,0", "0,8", "1,4", "12,9", "301", "3,3"],
          ["10", "1,0", "1,6", "16", "486", "1,91"]
        ]
      },
      {
        title: "Tetrapolar",
        headers: ["Sección nominal mm²", "Espesor nominal mm", "Espesor cubierta mm", "Diámetro exterior mm", "Peso Kg/km", "Resistencia eléctrica a 20°C en C.C Ohm/km"],
        rows: [
          ["0,5", "0,6", "0,8", "6,6", "60", "39"],
          ["0,75", "0,6", "0,9", "7,2", "75", "26"],
          ["1,0", "0,6", "0,9", "7,8", "91", "19,5"],
          ["1,5", "0,7", "1", "9,1", "128", "13,3"],
          ["2,5", "0,8", "1,1", "10,8", "191", "7,98"],
          ["4,0", "0,8", "1,3", "12,5", "273", "4,95"],
          ["6,0", "0,8", "1,4", "14,1", "371", "3,3"],
          ["10", "1,0", "1,6", "17,8", "612", "1,91"]
        ]
      },
      {
        title: "Pentapolar",
        headers: ["Sección nominal mm²", "Espesor nominal mm", "Espesor cubierta mm", "Diámetro exterior mm", "Peso Kg/km", "Resistencia eléctrica a 20°C en C.C Ohm/km"],
        rows: [
          ["0,5", "0,6", "0,8", "7,2", "72", "39"],
          ["0,75", "0,6", "0,9", "8", "94", "26"],
          ["1,0", "0,6", "0,9", "8,4", "110", "19,5"],
          ["1,5", "0,7", "1,1", "10,1", "159", "13,3"],
          ["2,5", "0,8", "1,2", "12", "237", "7,98"],
          ["4,0", "0,8", "1,3", "13,7", "333", "4,95"],
          ["6,0", "0,8", "1,5", "15,6", "459", "3,3"],
          ["10", "1,0", "1,6", "19,5", "748", "1,91"]
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'cuerdas-flexibles', 'no-propagacion', 'marcacion-secuencial', 'instalacion-industrial', 'conductor-tierra', 'instalacion-domiciliaria'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  }
,
  {
    id: 'aerea-preensamblado-aluminio',
    name: 'Preensamblado de Aluminio (cePRET)',
    category: 'Cables Instalación Aérea',
    subCategory: '1-ENVAINADOS',
    description: 'Conductores de aluminio para redes de distribución aérea de baja tensión de hasta 1 kV.',
    detailedDescription: `DESCRIPCIÓN
Cable preensamblado para líneas aéreas de distribución de energía eléctrica en baja tensión, constituido por tres fases aisladas cableadas a espiral visible con un neutro portante (mensajero), aislado o desnudo; para tensiones nominales de servicio de hasta 1 kV entre fases. El conjunto básico descripto puede suministrarse con una o dos fases adicionales para alumbrado público.

USO
Estos cables se utilizan en líneas aéreas de distribución en baja tensión, instalados sobre postes, fachadas y en zonas arboladas.

NORMAS
La construcción y ensayo de los cables contemplados en el presente folleto responden a las normas IRAM 2263, NBR 8182, ICEA S-76-474 y NFC 33209.`,
    image: '/images/PRODUCTOS/2-LINEAS AEREAS/1-ENVAINADOS/1-PREENSAMBLADOS DE ALUMINIO/PORTADA (ELIMINAR SIMBOLO GEMINI).jpeg',
    gallery: [
      '/images/PRODUCTOS/2-LINEAS AEREAS/1-ENVAINADOS/1-PREENSAMBLADOS DE ALUMINIO/FICHA TECNICA/foto dentro de ficha tecnica.jpeg'
    ],
    pdf: '/images/PRODUCTOS/2-LINEAS AEREAS/1-ENVAINADOS/1-PREENSAMBLADOS DE ALUMINIO/FICHA TECNICA/ficha tecnica a modificar.pdf',
    specs: ['0,6 / 1 kV', '90° C', 'IRAM 2263'],
    technicalIntro: `ELECCIÓN DE LOS CABLES
La sección de los cables se determina en función de la corriente a transmitir, caída de tensión e intensidad de cortocircuito admisible.

Caída de tensión: Se determina mediante la siguiente expresión:
ΔU = K · I · L · (Rca cosφ + X senφ)
ΔU: caída de tensión, en V
K: 1.73 para líneas trifásicas
I: corriente a transmitir, en A
L: longitud de la línea, en km.
cosφ: factor de potencia
Rca, X: resistencia eléctrica de los conductores a la temperatura de servicio y reactancia inductiva por fase a 50 Hz según tabla adjunta, en ohm / km.

Intensidad de cortocircuito admisible: Se verifica con la siguiente expresión:
I = (k · S) / √t
I: intensidad de corriente de cortocircuito admisible, en A
k: 92 (para cables aislados con XLPE)
S: sección del conductor, en mm2
t: duración del cortocircuito, en segundos.`,
    characteristics: [
      'CONSTRUCCIÓN',
      'Fases: aluminio puro 1350 (AAC), clase 2, compactadas (a pedido se pueden fabricar sin compactar).',
      'Neutro portante: aleación de aluminio (AAAC), aluminio con alma de acero (ACSR) o aluminio puro 1350 H-19 (AAC).',
      'Alumbrado: aluminio puro 1350 (AAC), clase 2, compactadas (a pedido se pueden fabricar sin compactar).',
      'Aislación XLPE: Polietileno reticulado color negro, resistente UV (90°C servicio / 130°C emergencia / 250°C cortocircuito).',
      'Aislación PEBD: Polietileno termoplástico color negro, resistente UV (75°C servicio / 95°C emergencia / 150°C cortocircuito).',
      'Identificación: Mediante números o bien con nervaduras.',
      'Reunión: Conductores reunidos en espiral visible, con una relación de cableado de 20 a 25 veces el diámetro del conjunto o 60 veces el diámetro de un conductor de fase aislado.'
    ],
    specsTables: [
      {
        title: "Conductores de fase aislados con XLPE",
        headers: ["Sección (mm²/AWG)", "Nº hilos", "Espesor aisl. (mm)", "Diámetro ext. (mm)", "Peso (kg/km)", "Intens. adm. (A)", "Resist. 90°C (Ω/km)", "React. 50Hz (Ω/km)"],
        rows: [
          { isSubtitle: true, content: "Secciones en mm²" },
          ["10", "7", "1,2", "6,0", "45", "55", "3,949", "0,105"],
          ["16", "7", "1,2", "7,2", "63", "65", "2,449", "0,098"],
          ["25", "7", "1,2", "9,0", "98", "75", "1,539", "0,097"],
          ["35", "7", "1,6", "10,5", "135", "100", "1,113", "0,097"],
          ["50", "7", "1,6", "11,4", "173", "120", "0,822", "0,093"],
          ["70", "14", "1,8", "13,6", "244", "155", "0,568", "0,092"],
          ["95", "19", "2,0", "15,8", "332", "190", "0,410", "0,089"],
          ["120", "19", "2,0", "17,0", "400", "230", "0,324", "0,088"],
          ["150", "19", "2,2", "19,2", "502", "270", "0,264", "0,085"],
          { isSubtitle: true, content: "Secciones en AWG" },
          ["6", "7", "1,2", "7,0", "56", "70", "2,782", "0,098"],
          ["4", "7", "1,2", "8,0", "113", "85", "1,744", "0,094"],
          ["2", "7", "1,2", "9,7", "124", "120", "1,097", "0,087"],
          ["1/0", "7 ó 19", "1,5", "11,7", "176", "150", "0,690", "0,090"],
          ["2/0", "19", "1,5", "13,0", "232", "190", "0,547", "0,087"],
          ["4/0", "19", "1,5", "15,5", "352", "250", "0,345", "0,084"]
        ],
        note: "(1) Valores válidos para conjuntos trifásicos, expuestos al sol con una temperatura ambiente de 40° C y de 90° C en los conductores."
      },
      {
        title: "Conductor neutro portante aislado con XLPE",
        headers: ["Sección", "Formación (Nº x mm)", "Diám. Desnudo (mm)", "Diám. Aislado (mm)", "Peso (kg/km)", "Resist. 90°C (Ω/km)", "Tracción (daN)"],
        rows: [
          { isSubtitle: true, content: "Secciones en mm²" },
          ["16 - AAAC", "7 x 1,70", "5,1", "7,5", "70", "2,598", "444"],
          ["25 - AAAC", "7 x 2,15", "6,5", "9,3", "109", "1,628", "710"],
          ["35 - AAAC", "7 x 2,52", "7,6", "10,8", "149", "1,183", "976"],
          ["50 - AAAC", "7 x 3,02", "9,1", "12,3", "202", "0,824", "1401"],
          ["54.6 - AAAC", "7 x 3,15", "9,5", "12,7", "217", "0,757", "1577"],
          ["70 - AAAC", "7 x 3,50", "10,6", "14,2", "274", "0,602", "1928"],
          { isSubtitle: true, content: "Secciones en AWG" },
          ["6 - AAC", "7 x 1,55", "4,7", "7,0", "57", "2,782", "250"],
          ["4 - AAC", "7 x 1,96", "5,9", "8,2", "82", "1,744", "392"],
          ["2 - AAC", "7 x 2,47", "7,4", "9,7", "122", "1,097", "601"],
          ["1/0 - AAC", "7 x 3,12", "9,4", "12,5", "191", "0,690", "884"],
          ["2/0 - AAC", "7 x 3,50", "10,5", "13,6", "233", "0,547", "1117"],
          ["4/0 - AAC", "7 x 4,42", "11,8", "14,9", "359", "0,345", "1705"],
          { isSubtitle: true, content: "Otras Secciones AAAC" },
          ["30.58 - AAAC", "7 x 1,68", "5,0", "7,5", "76", "2,685", "492"],
          ["48.89 - AAAC", "7 x 2,12", "6,4", "9,0", "119", "1,690", "784"],
          ["77.47 - AAAC", "7 x 2,67", "8,0", "10,5", "179", "1,060", "1250"],
          ["123.3 - AAAC", "7 x 3,37", "10,1", "13,5", "289", "0,666", "1900"],
          ["155.4 - AAAC", "7 x 3,78", "11,4", "14,5", "355", "0,528", "2400"],
          ["246.9 - AAAC", "7 x 4,77", "14,3", "17,5", "544", "0,333", "3810"],
          { isSubtitle: true, content: "Secciones ACSR" },
          ["6 - ACSR", "6 + 1 x 1,68", "5,0", "7,4", "76", "2,769", "528"],
          ["4 - ACSR", "6 + 1 x 2,12", "6,4", "8,7", "119", "1,744", "827"],
          ["2 - ACSR", "6 + 1 x 2,67", "8,0", "10,3", "179", "1,092", "1264"],
          ["1/0 - ACSR", "6 + 1 x 3,37", "10,1", "13,2", "289", "0,687", "1950"],
          ["2/0 - ACSR", "6 + 1 x 3,78", "11,3", "14,4", "355", "0,546", "2352"],
          ["4/0 - ACSR", "6 + 1 x 4,77", "14,3", "17,4", "544", "0,344", "3714"]
        ]
      },
      {
        title: "Coeficientes de Corrección de la Intensidad Admisible",
        isHorizontal: true,
        headers: [],
        rows: [
          ["Temperatura en °C", "10", "15", "20", "25", "30", "35", "40", "45", "50"],
          ["Factor de corrección", "1,26", "1,22", "1,18", "1,14", "1,10", "1,05", "1,00", "0,95", "0,90"]
        ],
        note: "Cables instalados con temperatura distinta a 40° C."
      }
    ],
    certifications: ['iram', 'seguridad', 'marcacion-secuencial', 'resistente-uv'],
    availableBrands: []
  },
  {
    id: 'aerea-acometida-cobre',
    name: 'Acometidas de Cobre (CENTRALFLEX VC-30)',
    category: 'Cables Instalación Aérea',
    subCategory: '1-ENVAINADOS',
    description: 'Cables preensamblados de cobre para conexiones domiciliarias y baja tensión.',
    detailedDescription: `DESCRIPCIÓN
Especialmente adecuado para acometidas desde líneas aéreas de baja tensión, monofásicas o trifásicas, hasta 0,6 / 1,1 kV.
Fabricados con cobre electrolítico de alta conductividad semirrígido clase 2, los mismos están aislados y reunidos en espiral visible con relación de cableado de 14 a 16 veces el diámetro del conjunto o 60 veces el diámetro de una fase.
Apto para intemperie. El compuesto aislante XLPE tiene excelentes características aislantes y mecánicas, sumado a su contenido de negro de humo, que aporta resistencia a la radiación solar.

USO
Los cables acometida se utilizan primordialmente para la conexión y la alimentación de usuarios particulares desde la red de distribución de energía eléctrica, aunque también son aptos para la aplicación de iluminación, alimentación de motores, etc.
Sistemas de distribución de energía en baja tensión. Acometidas monofásicas y trifásicas.

NORMAS
IRAM 2164 - IRAM NM 280 (Clase 2).`,
    image: '/images/PRODUCTOS/2-LINEAS AEREAS/1-ENVAINADOS/2-ACOMETIDAS DE COBRE/PORTADA.jpeg',
    gallery: [
      '/images/PRODUCTOS/2-LINEAS AEREAS/1-ENVAINADOS/2-ACOMETIDAS DE COBRE/FICHA TECNICA/foto producto dentro de ficha tecnica.jpeg'
    ],
    pdf: '/images/PRODUCTOS/2-LINEAS AEREAS/1-ENVAINADOS/2-ACOMETIDAS DE COBRE/FICHA TECNICA/ficha tecnica a modificar.pdf',
    specs: ['0,6 / 1,1 kV', 'Cobre Clase 2', 'IRAM 2164'],
    technicalIntro: `CONSTRUCCIÓN
Conductores: Cuerda rígida de cobre electrolítico recocido (Norma IRAM NM 280, clase 2).
Aislación: Polietileno reticulado (XLPE).
Reunión: Los conductores se cablean entre sí (sin conductor portante).

PARÁMETROS TÉCNICOS
• Material del Conductor: Cobre duro
• Material de Aislación: Polietileno reticulado XLPE
• Clase (Flexibilidad): 2
• Temp. de Servicio: 90 °C
• Temp. Máx. de Servicio: 130 °C
• Cortocircuito: 250 °C
• Tensión de servicio (Uo/U): 0.6 / 1 kV
• Rango de fabricación: 4 a 16 mm²`,
    characteristics: [
      'CONSTRUCCIÓN',
      'Conductores: Cuerda rígida de cobre electrolítico recocido (Norma IRAM NM 280, clase 2).',
      'Aislación: Polietileno reticulado (XLPE).',
      'Reunión: Los conductores se cablean entre sí (sin conductor portante).',
      'Apto para intemperie con resistencia a la radiación solar.',
      'Excelente resistencia mecánica y aislante.'
    ],
    specsTables: [
      {
        title: "Tabla de Especificaciones",
        headers: ["Sección nominal (mm²)", "Cant. Alambres", "Clase conductor", "Diámetro del Haz (mm²)", "Corriente Admisible (A)", "Temple del Cu", "Peso Aproximado (Kg/Km)"],
        rows: [
          ["2x4", "7", "2", "10", "45", "Rec.", "100"],
          ["2x6", "7", "2", "11", "55", "Rec.", "143"],
          ["2x10", "7", "2", "13", "70", "Rec.", "222"],
          ["2x16", "7", "2", "15", "90", "Rec.", "343"],
          ["4x4", "7", "2", "12", "35", "Rec.", "200"],
          ["4x6", "7", "2", "14", "45", "Rec.", "286"],
          ["4x10", "7", "2", "16", "55", "Rec.", "446"],
          ["4x16", "7", "2", "19", "75", "Rec.", "694"]
        ],
        note: "(1) Valor aproximado. (2) Cables expuestos al sol, temp. amb. 40°C y 90°C en los conductores. (3) Cuando no se especifica el temple, corresponderá duro."
      }
    ],
    certifications: ['iram', 'seguridad', 'marcacion-secuencial', 'resistente-uv']
  },
  {
    id: 'aerea-concentrico-antihurto',
    name: 'Concéntricos Anti-hurto (ceCONEX)',
    category: 'Cables Instalación Aérea',
    subCategory: '1-ENVAINADOS',
    description: 'Cables de seguridad diseñados para prevenir conexiones clandestinas y asegurar la medición.',
    detailedDescription: `DESCRIPCIÓN
Cables con conductor central de fase (Aluminio o Cobre) y conductor neutro formado por una corona de alambres que rodea la aislación central. Esta configuración impide el pelado del cable para hurtar energía sin afectar el neutro, provocando un cortocircuito que protege la red.

USO
Acometidas desde líneas aéreas preensambladas y transformadores hacia medidores. Especialmente diseñado para imposibilitar conexiones clandestinas (antihurto).

NORMAS
IRAM 63001, IRAM-NM 280, ICEA S-95-658, IEC 60502-1.`,
    image: '/images/PRODUCTOS/2-LINEAS AEREAS/1-ENVAINADOS/3-CONCENTRICOS (ANTIHURTO)/PORTADA.jpeg',
    specs: ['0,6 / 1,1 kV', 'Antihurto', 'XLPE'],
    technicalIntro: `CONSTRUCCIÓN
Conductor Central (Fase): Cuerda de aluminio puro o cobre recocido (Clase 2).
Aislación: Polietileno reticulado (XLPE) resistente a la intemperie.
Conductor Periférico (Neutro): Corona de alambres de aleación de aluminio o cobre dispuesto helicoidalmente.
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
        title: "Aluminio Monofásico (1xAl + Al)",
        headers: ["Sección Nominal (mm²)", "Formación (Cuerda N° x Ømm)", "Corriente Máx (A)", "Resistencia 20°C (Ω/km)", "Diámetro ext. (mm)", "Peso (kg/km)"],
        rows: [
          ["1x6 + 6", "1 x 7x1.05", "40", "4.61", "10", "81"],
          ["1x10 + 10", "1 x 7x1.35", "50", "3.08", "11", "120"],
          ["1x16 + 16", "1 x 7x1.70", "70", "1.91", "13", "180"]
        ]
      },
      {
        title: "Aluminio Trifásico (3xAl + Al)",
        headers: ["Sección AWG / mm²", "Aislación (mm)", "Diámetro ext. (mm)", "Peso (kg/km)", "Corriente 40°C (A)", "Resistencia 20°C (Ω/km)"],
        rows: [
          ["3x6 + 6", "1.14", "21", "432", "52", "2.214"],
          ["3x4 + 4", "1.14", "25", "622", "73", "1.390"],
          ["3x2 + 2", "1.14", "28", "871", "90", "0.872"]
        ]
      },
      {
        title: "Cobre Monofásico (1xCu + Cu)",
        headers: ["Sección Nominal (mm²)", "Formación (N° x Ømm)", "Corriente Máx (A)", "Resistencia 20°C (Ω/km)", "Diámetro ext. (mm)", "Peso (kg/km)"],
        rows: [
          ["1x4 + 4", "7 x 0.85", "45", "4.61", "9.0", "110"],
          ["1x6 + 6", "7 x 1.05", "55", "3.08", "10.0", "160"],
          ["1x10 + 10", "7 x 1.35", "75", "1.83", "11.5", "250"]
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'resistente-uv', 'antihurto']
  },
  {
    id: 'aerea-desnudo-aluminio',
    name: 'Cables Desnudos de Aleación de Aluminio',
    category: 'Cables Instalación Aérea',
    subCategory: '2-DESNUDOS',
    description: 'Conductores de aleación de aluminio para líneas aéreas de transporte y distribución.',
    detailedDescription: `DESCRIPCIÓN
Conductor de cuerda desnuda rígida de aleación de aluminio tratada térmicamente (6101 / 6201-T81). Ofrecen una excelente relación conductividad-peso y alta resistencia mecánica.

USO
Transmisión aérea de energía en media y baja tensión (hasta 33 kV).

NORMAS
IRAM 2212, ASTM B-399.`,
    image: '/images/PRODUCTOS/2-LINEAS AEREAS/2-DESNUDOS/1-CABLE DESNUDO DE ALUMINIO/PORTADA.jpeg',
    specs: ['Aleación 6101/6201', 'Temple Duro', 'IRAM 2212'],
    technicalIntro: `CONSTRUCCIÓN
Conductor: Cuerda concéntrica de alambres de aleación de aluminio 6201-T81.
Acabado: Desnudo, sin aislación.`,
    characteristics: [
      'CONSTRUCCIÓN',
      'Material: Aleación de aluminio 6101 / 6201-T81.',
      'Alta resistencia mecánica y bajo peso.',
      'Excelente resistencia a la corrosión ambiental.',
      'Ideal para vanos de media y larga distancia.'
    ],
    specsTables: [
      {
        title: "Tabla de Datos Técnicos",
        headers: ["Sección (mm²)", "Formación (N° x Ømm)", "Diámetro (mm)", "Peso (kg/km)", "Carga Rotura (kN)", "Resistencia 20°C (Ω/km)"],
        rows: [
          ["25", "7 x 2.15", "6.45", "71", "7.31", "1.341"],
          ["50", "7 x 3.00", "9.00", "138", "14.22", "0.690"],
          ["95", "7 x 4.15", "12.45", "264", "27.20", "0.360"]
        ]
      }
    ],
    certifications: ['iram', 'seguridad']
  },
  {
    id: 'aerea-desnudo-cobre',
    name: 'Cables Desnudos de Cobre Duro',
    category: 'Cables Instalación Aérea',
    subCategory: '2-DESNUDOS',
    description: 'Conductores de cobre electrolítico de alta pureza para redes aéreas y puestas a tierra.',
    detailedDescription: `DESCRIPCIÓN
Cables de cobre duro desnudos, fabricados con cobre electrolítico de alta pureza. Ofrecen la máxima conductividad eléctrica y excelente resistencia a la corrosión.

USO
Redes aéreas de distribución de energía, líneas de transmisión y sistemas de protección contra descargas atmosféricas (puestas a tierra).

NORMAS
IRAM 2004.`,
    image: '/images/PRODUCTOS/2-LINEAS AEREAS/2-DESNUDOS/2-CABLE DESNUDO DE COBRE DURO/PORTADA.jpeg',
    specs: ['Cobre Electrolítico', 'Temple Duro', 'IRAM 2004'],
    technicalIntro: `CONSTRUCCIÓN
Conductor: Cuerda concéntrica de alambres de cobre electrolítico recocido o duro.
Acabado: Desnudo, sin aislación.`,
    characteristics: [
      'CONSTRUCCIÓN',
      'Material: Cobre electrolítico de alta pureza (99.9%).',
      'Temple: Duro (para líneas aéreas) o Recocido (para puestas a tierra).',
      'Alta conductividad eléctrica y térmica.',
      'Gran resistencia a la tracción y fatiga.'
    ],
    specsTables: [
      {
        title: "Tabla de Datos Técnicos",
        headers: ["Sección (mm²)", "Formación (N° x mm)", "Diámetro (mm)", "Resistencia CC (Ω/km)", "Peso (kg/km)", "Corriente (A)"],
        rows: [
          ["16", "7 x 1.70", "5.1", "1.14", "143", "115"],
          ["35", "7 x 2.52", "7.56", "0.518", "314", "180"],
          ["70", "19 x 2.15", "10.75", "0.264", "621", "280"],
          ["120", "19 x 2.85", "14.25", "0.151", "1090", "400"]
        ]
      }
    ],
    certifications: ['iram', 'seguridad']
  },
  {
    id: 'aerea-aluminio-acero',
    name: 'Aluminio con Alma de Acero (ACSR)',
    category: 'Cables Instalación Aérea',
    subCategory: '2-DESNUDOS',
    description: 'Conductores reforzados con alma de acero para grandes vanos y alta resistencia mecánica.',
    detailedDescription: `DESCRIPCIÓN
Conductores formados por alambres de aluminio grado 1350-H19 cableados alrededor de un núcleo central de acero galvanizado (ACSR). Combina la alta conductividad del aluminio con la excelente resistencia mecánica del acero.

USO
Líneas aéreas de transmisión y distribución de energía eléctrica, especialmente donde se requieren grandes vanos (distancia entre postes).

NORMAS
IRAM 2187, ASTM B-232.`,
    image: '/images/PRODUCTOS/2-LINEAS AEREAS/2-DESNUDOS/3-CABLE ALUMINIO-ACERO/PORTADA.jpeg',
    specs: ['ACSR', 'Reforzado', 'IRAM 2187'],
    technicalIntro: `CONSTRUCCIÓN
Conductor: Alambres de aluminio 1350-H19.
Núcleo: Alambres de acero galvanizado (clase A).
Formación: Cableado concéntrico.`,
    characteristics: [
      'CONSTRUCCIÓN',
      'Material: Aluminio 1350 y Acero Galvanizado.',
      'Alta resistencia a la rotura por tracción.',
      'Permite mayores distancias entre estructuras portantes.',
      'Excelente desempeño en condiciones climáticas adversas.'
    ],
    specsTables: [
      {
        title: "Tabla de Datos Técnicos",
        headers: ["Designación", "Sección Total (mm²)", "Formación Al/Ac", "Diámetro (mm)", "Carga Rotura (kg)", "Resistencia (Ω/km)"],
        rows: [
          ["Raven", "33.72", "6/1 x 2.67", "8.01", "1279", "0.852"],
          ["Petrel", "54.06", "6/1 x 3.39", "10.17", "1968", "0.531"],
          ["Hawk", "280.8", "26/7 x 3.44", "21.78", "8840", "0.119"]
        ]
      }
    ],
    certifications: ['iram', 'seguridad']
  }
];

export const brands = [
  { name: 'Logo 1', logo: '/images/logos/Logos_-1.png' },
  { name: 'Logo 2', logo: '/images/logos/Logos_-2.png' },
  { name: 'Logo 3', logo: '/images/logos/Logos_-3.png' },
  { name: 'Logo 4', logo: '/images/logos/Logos_-4.png' },
  { name: 'Logo 5', logo: '/images/logos/Logos_-5.png' }
];