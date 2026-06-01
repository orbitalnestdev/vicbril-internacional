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
    image: '/images/vicbril-hero-1.jpg',
    banner: '/images/vicbril-hero-1.jpg'
  },
  {
    id: 'armados',
    name: 'Cables Armados',
    slug: 'cables-armados',
    image: '/images/vicbril-hero-1.jpg',
    banner: '/images/vicbril-hero-1.jpg'
  },
  {
    id: 'especiales',
    name: 'Cables Especiales',
    slug: 'cables-especiales',
    image: '/images/vicbril-hero-1.jpg',
    banner: '/images/vicbril-hero-1.jpg'
  },
  {
    id: 'resto-materiales',
    name: 'Resto de Materiales Eléctricos',
    slug: 'resto-materiales-electricos',
    image: '/images/vicbril-hero-1.jpg',
    banner: '/images/vicbril-hero-1.jpg'
  }
];

export const products: Product[] = [
  {
    id: 'unipolar-pvc',
    name: 'Cable Unipolar PVC',
    categoryPath: ['Cables para Instalación Civil', 'Unipolar'],
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
    installation: `Montaje: Radio mínimo de curvatura igual a 7 x diámetro exterior del cable
Tracción máxima: 5daN/mm² aplicados sobre los conductores
Temperatura de montaje: igual o mayor a 5°C`,
    characteristics: [
      'Temperatura máxima: 70° C de servicio',
      'Tensión normal: 450/750 Volt.',
      'Norma constructiva: IEC 60227-3 - IRAM NM 247-3',
      'Norma de fuego: IEC 60332-3-23 / IRAM NM IEC 60332-3-23 - No propagación de incendio.',
      'Norma de conductores: IEC 60228 / IRAM NM 280'
    ],
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
    categoryPath: ['Cables para Instalación Civil', 'Unipolar'],
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
    technicalIntro: `CONSTRUCCIÓN
Conductor: Metal cobre electrolítico recocido en formación clase 5.
Flexibilidad: Clase 5; según IRAM NM-280 e IEC 60228.`,
    installation: `Montaje: Radio mínimo de curvatura a 7 x diámetro exterior del cable.
Tracción máxima: 5daN/mm² aplicados sobre los conductores de cobre.
Temperatura de montaje: igual o mayor a 5°C.`,
    characteristics: [
      'Temperatura máxima: 70° C de servicio',
      'Tensión normal: 450/750 Volt.',
      'Norma constructiva: IRAM 62267',
      'Norma de fuego: IEC 60332-3-24 / IRAM NM IEC 60332-3-24 - No propagación de incendio.',
      'Norma de halógenos: IEC 60754 - 1/2 - Ausencia de halógenos.',
      'Norma de humos: IEC 61034 - Transparencia de humos.',
      'Norma de toxicidad: NES 713 / CEI 20-37 - Ausencia de tóxicos.',
      'Norma de conductores: IEC 60228 / IRAM NM 280.'
    ],
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
    certifications: ['iram', 'seguridad', 'bajos-humos', 'libre-halogenos', 'marcacion-secuencial', 'espacios-publicos', 'instalacion-domiciliaria', 'cuerdas-flexibles', 'no-propagacion', 'temperatura-servicio']
  },
  {
    id: 'bipolar-vaina-chata',
    name: 'Cable Envainado Chato (Bajo Plomo)',
    categoryPath: ['Cables para Instalación Civil', 'Bipolar'],
    description: 'Cables flexibles diseñados para uso en instalaciones móviles industriales y domésticas.',
    detailedDescription: `DESCRIPCIÓN
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
    characteristics: [
      'Temperatura máxima: 70°C de servicio, 160°C de cortocircuito.',
      'Tensión nominal: 300/500 Volt.',
      'Norma constructiva: IEC 60227-7.',
      'Norma de fuego: IRAM NM 60332-1.',
      'Norma de conductores: IEC 60228 / IRAM NM 280.',
      'Conductor: Cobre electrolítico recocido en formación clase 5.',
      'Aislación: PVC.',
      'Identificación: Color negro con identificación alfanumerica en color blanco o amarillo. Siempre incluye un conductor de tierra verde/amarillo en el total de conductores indicados.',
      'Cubierta: PVC negro, no propagante del incendio.'
    ],
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
    categoryPath: ['Cables para Instalación Civil', 'Bipolar'],
    description: 'Cables flexibles diseñados para uso en instalaciones móviles industriales y domésticas y aparatos portátiles en general.',
    detailedDescription: `DESCRIPCIÓN
Cables flexibles diseñados para uso en instalaciones móviles industriales y domésticas y aparatos portátiles en general, excluyendo los aparatos de calefacción.

APLICACIONES
Interconexión de máquinas empleadas para procesos fabriles, incluyendo máquinas - herramientas y equipamientos de mano. Los cables están permitidos para su conexión directa a la red eléctrica.`,
    image: '/images/ProductosNuevos/1-CABLES PARA INSTALACION CIVIL/2-CABLE BIPOLAR/CABLE PARALELO/portada.jpeg',
    gallery: [
      '/images/ProductosNuevos/1-CABLES PARA INSTALACION CIVIL/2-CABLE BIPOLAR/CABLE PARALELO/FICHA TECNICA PARALELO/foto producto dentro de ficha tecnica.jpeg'
    ],
    technicalTable: '/images/ProductosNuevos/1-CABLES PARA INSTALACION CIVIL/2-CABLE BIPOLAR/CABLE PARALELO/FICHA TECNICA PARALELO/MARCAS DISPONIBLES PARALELO.jpg',
    pdf: '/images/ProductosNuevos/1-CABLES PARA INSTALACION CIVIL/2-CABLE BIPOLAR/CABLE PARALELO/FICHA TECNICA PARALELO/FICHA TECNICA PARALELO.pdf',
    specs: ['300/500 V', '70°C', 'PVC/PVC'],
    characteristics: [
      'Temperatura máxima: 70°C de servicio, 160°C de cortocircuito.',
      'Tensión nominal: 300/500 Volt.',
      'Norma constructiva: IEC 60227-7.',
      'Norma de fuego: IRAM NM 60332-1.',
      'Norma de conductores: IEC 60228 / IRAM NM 280.',
      'Conductor: Cobre electrolítico recocido en formación clase 5.',
      'Aislación: PVC.',
      'Identificación: Color negro con identificación alfanumérica en color blanco o amarillo. Siempre incluye un conductor de tierra verde/amarillo en el total de conductores indicados.',
      'Cubierta: PVC negro, no propagante del incendio.'
    ],
    colors: [
      {
        label: 'Bipolar',
        values: ['Blanco', 'Marrón', 'Negro'],
        codes: ['#FFFFFF', '#8B4513', '#1a1a1a']
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
    id: 'bipolar-paralelo-parlante',
    name: 'Cable Paralelo Parlante',
    categoryPath: ['Cables para Instalación Civil', 'Bipolar'],
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
    characteristics: [
      'Tensión nominal 300/500V.',
      'Conductor: Cobre flexible formación clase 5.',
      'Aislación: PVC cristal o bicolor.'
    ],
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
        headers: ["Formación (mm²)", "Diám. máx. alambres (mm)", "Espesor Aisl. (mm)", "Espesor Env. (mm)", "Dimensiones Ext. (mm)", "Masa aprox. (kg/km)", "Intensidad admisible (A)", "Resistencia eléctrica máx a 20°C (Ohm/km)"],
        rows: [
          ["2x1", "0,21", "0,6", "0,6", "4,1 x 6,6", "44", "7", "19,5"],
          ["2x1,5", "0,26", "0,7", "0,6", "4,5 x 7,5", "58", "10", "13,3"],
          ["2x2,5", "0,26", "0,8", "0,6", "5,1 x 8,8", "85", "16", "7,98"]
        ]
      }
    ],
    certifications: ['iram', 'seguridad', 'instalacion-domiciliaria', 'temperatura-servicio', 'cuerdas-flexibles'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'civil-03',
    name: 'Cable Tipo Taller (TT)',
    categoryPath: ['Cables para Instalación Civil', 'Tipo Taller'],
    description: 'Conductores diseñados para instalaciones móviles familiares, comerciales e industriales.',
    detailedDescription: `DESCRIPCIÓN
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
    installation: `Montaje: Radio mínimo de curvatura a 7 x diámetro exterior del cable
Tracción máxima: 5daN/mm² aplicados sobre los conductores de cobre.
Temperatura de montaje: igual o mayor a 5°C.`,
    characteristics: [
      'Temperatura máxima: 70° C de servicio, 160° C de cortocircuito',
      'Tensión nominal: 300/ 500 Volt.',
      'Norma constructiva: IRAM NM-247-5',
      'Norma de fuego: IRAM NM IEC 60332-1',
      'Norma de conductores: IEC 60228 / IRAM NM 280',
      'Conductor: Metal cobre electrolítico recocido en formación clase 5.',
      'Flexibilidad: Clase 5; según IRAM NM-280 e IEC 60228',
      'Cubierta externa: PVC Negro, no propagante de incendio',
      'Aislacion: PVC'
    ],
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
    categoryPath: ['Cables Instalación Aérea', 'Envainados'],
    description: 'Conductores de aluminio para redes de distribución aérea de baja tensión de hasta 1 kV.',
    detailedDescription: `DESCRIPCIÓN
Cable preensamblado para líneas aéreas de distribución de energía eléctrica en baja tensión, constituido por tres fases aisladas cableadas a espiral visible con un neutro portante (mensajero), aislado o desnudo; para tensiones nominales de servicio de hasta 1 kV entre fases. El conjunto básico descripto puede suministrarse con una o dos fases adicionales para alumbrado público.

USO
Estos cables se utilizan en líneas aéreas de distribución en baja tensión, instalados sobre postes, fachadas y en zonas arboladas.

NORMAS
La construcción y ensayo de los cables contemplados en el presente folleto responden a las normas IRAM 2263, NBR 8182, ICEA S-76-474 y NFC 33209.`,
    image: '/images/ProductosNuevos/2-LINEAS AEREAS/1-ENVAINADOS/1-PREENSAMBLADOS DE ALUMINIO/PORTADA (ELIMINAR SIMBOLO GEMINI).jpeg',
    gallery: [
      '/images/ProductosNuevos/2-LINEAS AEREAS/1-ENVAINADOS/1-PREENSAMBLADOS DE ALUMINIO/FICHA TECNICA/foto dentro de ficha tecnica.jpeg'
    ],
    pdf: '/images/ProductosNuevos/2-LINEAS AEREAS/1-ENVAINADOS/1-PREENSAMBLADOS DE ALUMINIO/FICHA TECNICA/ficha tecnica a modificar.pdf',
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
          ["25", "7", "1,4", "9,0", "98", "75", "1,539", "0,097"],
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
    categoryPath: ['Cables Instalación Aérea', 'Envainados'],
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
    image: '/images/ProductosNuevos/2-LINEAS AEREAS/1-ENVAINADOS/2-ACOMETIDAS DE COBRE/PORTADA (ELIMINAR SIMBOLO GEMINI).jpeg',
    gallery: [
      '/images/ProductosNuevos/2-LINEAS AEREAS/1-ENVAINADOS/2-ACOMETIDAS DE COBRE/FICHA TECNICA/foto producto dentro de ficha tecnica.jpeg'
    ],
    pdf: '/images/ProductosNuevos/2-LINEAS AEREAS/1-ENVAINADOS/2-ACOMETIDAS DE COBRE/FICHA TECNICA/ficha tecnica a modificar.pdf',
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
  },  {
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
  },
  {
    id: 'aerea-desnudo-aluminio',
    name: 'Cables Desnudos de Aleación de Aluminio',
    categoryPath: ['Cables Instalación Aérea', 'Desnudos'],
    description: 'Conductores de aleación de aluminio para líneas aéreas de transporte y distribución.',
    detailedDescription: `DESCRIPCIÓN
Conductor de cuerda desnuda rígida de aleación de aluminio tratada térmicamente (6101 / 6201-T81). Ofrecen una excelente relación conductividad-peso y alta resistencia mecánica.

USO
Transmisión aérea de energía en media y baja tensión (hasta 33 kV).

NORMAS
IRAM 2212, ASTM B-399.`,
    image: '/images/ProductosNuevos/2-LINEAS AEREAS/2-DESNUDOS/1-CABLE DESNUDO DE ALUMINIO/PORTADA(ELIMINAR LOGO GEMINI).jpeg',
    gallery: [
      '/images/ProductosNuevos/2-LINEAS AEREAS/2-DESNUDOS/1-CABLE DESNUDO DE ALUMINIO/FICHA TECNICA/foto producto dentro de ficha tecnica.jpeg'
    ],
    pdf: '/images/ProductosNuevos/2-LINEAS AEREAS/2-DESNUDOS/1-CABLE DESNUDO DE ALUMINIO/FICHA TECNICA/ficha tecnica a modificar.pdf',
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
        headers: ["Sección nominal (mm²)", "Formación (N° x mm)", "Peso aproximado (kg/km)", "Diámetro exterior máximo (mm)", "Resistencia óhmica máxima a 20°C (Ohm/km)", "Carga de rotura mínima (daN)", "Corriente admisible máxima (A)"],
        rows: [
          ["16", "7 x 1,70", "43,5", "5,1", "2,07", "445", "100"],
          ["25", "7 x 2,15", "69,6", "6,5", "1,3", "712", "125"],
          ["35", "7 x 2,52", "95,6", "7,6", "0,944", "978", "160"],
          ["50 (7 hilos)", "7 x 3,02", "137,5", "9,1", "0,657", "1405", "195"],
          ["50 (19 hilos)", "19 x 1,85", "140,5", "9,3", "0,648", "1431", "195"],
          ["70", "19 x 2,15", "189,8", "10,8", "0,48", "1933", "235"],
          ["95", "19 x 2,52", "260,7", "12,6", "0,349", "2656", "300"],
          ["120 (19 hilos)", "19 x 2,85", "333,5", "14,3", "0,273", "3397", "340"],
          ["120 (37 hilos)", "37 x 2,15", "370,4", "15,1", "0,247", "3765", "340"],
          ["150", "37 x 2,25", "405,6", "15,8", "0,226", "4123", "395"],
          ["185", "37 x 2,52", "508,8", "17,6", "0,18", "5172", "455"],
          ["240", "37 x 2,85", "650,8", "20,0", "0,141", "6615", "545"],
          ["300", "61 x 2,52", "840,6", "22,7", "0,109", "8526", "615"],
          ["400", "61 x 2,85", "1075,1", "25,7", "0,0855", "10906", "725"]
        ],
        note: "(1) A temperatura ambiente de 40 °C, no expuesto al sol, con viento 0.6 m/seg, temperatura en el conductor 80 °C y factor de carga 100 %. (2) Resistencia óhmica a 20 °C, en corriente continua."
      }
    ],
    certifications: ['iram', 'seguridad']
  },
  {
    id: 'aerea-desnudo-cobre',
    name: 'Cables Desnudos de Cobre Duro',
    categoryPath: ['Cables Instalación Aérea', 'Desnudos'],
    description: 'Conductores de cobre electrolítico de alta pureza para redes aéreas y puestas a tierra.',
    detailedDescription: `DESCRIPCIÓN
Cables de cobre duro desnudos, fabricados con cobre electrolítico de alta pureza. Ofrecen la máxima conductividad eléctrica y excelente resistencia a la corrosión.

USO
Redes aéreas de distribución de energía, líneas de transmisión y sistemas de protección contra descargas atmosféricas (puestas a tierra).

NORMAS
IRAM 2004.`,
    image: '/images/ProductosNuevos/2-LINEAS AEREAS/2-DESNUDOS/2-CABLE DESNUDO DE COBRE DURO/PORTADA(ELIMINAR LOGO GEMINI).jpeg',
    gallery: [
      '/images/ProductosNuevos/2-LINEAS AEREAS/2-DESNUDOS/2-CABLE DESNUDO DE COBRE DURO/FICHA TECNICA/foto producto dentro de ficha tecnica.jpeg'
    ],
    pdf: '/images/ProductosNuevos/2-LINEAS AEREAS/2-DESNUDOS/2-CABLE DESNUDO DE COBRE DURO/FICHA TECNICA/ficha tecnica a modificar.pdf',
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
        headers: ["Sección nominal (mm²)", "Formación (N° x mm)", "Peso aproximado (kg/km)", "Diámetro exterior (mm)", "Resistencia a 20°C en CC (Ohm/km)", "Carga de rotura aprox. (daN)", "Corriente admisible máxima (A)"],
        rows: [
          ["10", "7 x 1,35", "90", "4,05", "1,81", "389", "82"],
          ["16", "7 x 1,70", "143", "5,1", "1,14", "614", "115"],
          ["25", "7 x 2,15", "225", "6,45", "0,712", "975", "143"],
          ["35", "7 x 2,52", "314", "7,56", "0,518", "1326", "180"],
          ["50 (7 hilos)", "7 x 3,02", "450", "9,06", "0,361", "1869", "215"],
          ["50 (19 hilos)", "19 x 1,85", "462", "9,25", "0,356", "1967", "215"],
          ["70", "19 x 2,15", "621", "10,75", "0,264", "2645", "280"],
          ["95", "19 x 2,52", "854", "12,6", "0,192", "3600", "345"],
          ["120", "19 x 2,85", "1090", "14,25", "0,15", "4549", "400"],
          ["150 (19 hilos)", "19 x 3,20", "1377", "16,0", "0,119", "5667", "465"],
          ["150 (37 hilos)", "37 x 2,25", "1326", "15,75", "0,124", "5628", "465"],
          ["185", "37 x 2,52", "1665", "17,64", "0,0988", "8010", "530"],
          ["240", "37 x 2,85", "2129", "19,95", "0,0772", "8858", "635"],
          ["300", "37 x 3,20", "2682", "22,4", "0,0612", "11040", "730"]
        ],
        note: "(1) Cables expuestos al sol con viento transversal de 0.6 m/s, temperatura ambiente de 40°C, sobreelevación de temperatura de 40°C (temperatura en el conductor 80°C). (2) Resistencia óhmica a 20°C en corriente continua."
      }
    ],
    certifications: ['iram', 'seguridad']
  },
  {
    id: 'aerea-aluminio-acero',
    name: 'Aluminio con Alma de Acero (ACSR)',
    categoryPath: ['Cables Instalación Aérea', 'Desnudos'],
    description: 'Conductores reforzados con alma de acero para grandes vanos y alta resistencia mecánica.',
    detailedDescription: `DESCRIPCIÓN
Conductores formados por alambres de aluminio grado 1350-H19 cableados alrededor de un núcleo central de acero galvanizado (ACSR). Combina la alta conductividad del aluminio con la excelente resistencia mecánica del acero.

USO
Líneas aéreas de transmisión y distribución de energía eléctrica, especialmente donde se requieren grandes vanos (distancia entre postes).

NORMAS
IRAM 2187, ASTM B-232.`,
    image: '/images/ProductosNuevos/2-LINEAS AEREAS/2-DESNUDOS/3-CABLE ALUMINIO-ACERO/portada (eliminar logo de gemini).png',
    gallery: [
      '/images/ProductosNuevos/2-LINEAS AEREAS/2-DESNUDOS/3-CABLE ALUMINIO-ACERO/FICHA TECNICA/foto producto dentro de ficha tecnica.jpeg'
    ],
    pdf: '/images/ProductosNuevos/2-LINEAS AEREAS/2-DESNUDOS/3-CABLE ALUMINIO-ACERO/FICHA TECNICA/ficha tecnica a modificar.pdf',
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
        headers: ["Sección nominal Al/Ac (mm²)", "Formación Al/Aleación (N° x mm)", "Formación Alma de Acero (N° x mm)", "Diámetro exterior máximo (mm)", "Peso aproximado (kg/km)", "Resistencia máx. 20°C - Al Puro (Ohm/km)", "Resistencia máx. 20°C - Aleación Al (Ohm/km)", "Carga rotura mín. - Al Puro (daN)", "Carga rotura mín. - Aleación Al (daN)", "Corriente admisible máxima (A)"],
        rows: [
          ["16/2.5", "6 x 1,80", "1 x 1,80", "5,4", "62", "1,88", "2,16", "580", "760", "90"],
          ["25/4", "6 x 2,25", "1 x 2,25", "6,75", "97", "1,2", "1,38", "900", "1180", "125"],
          ["35/6", "6 x 2,70", "1 x 2,70", "8,1", "139", "0,835", "0,961", "1230", "1680", "145"],
          ["50/8", "6 x 3,20", "1 x 3,20", "9,6", "195", "0,595", "0,684", "1680", "2350", "170"],
          ["70/12", "26 x 1,85", "7 x 1,44", "11,7", "282", "0,413", "0,475", "2630", "3440", "280"],
          ["95/15", "26 x 2,15", "7 x 1,67", "13,6", "380", "0,306", "0,352", "3490", "4630", "340"],
          ["120/20", "26 x 2,44", "7 x 1,90", "15,5", "490", "0,237", "0,273", "4440", "5980", "400"],
          ["150/25", "26 x 2,70", "7 x 2,10", "17,1", "600", "0,194", "0,223", "5360", "7310", "460"],
          ["185/30", "26 x 3,00", "7 x 2,33", "18,9", "741", "0,157", "0,181", "6520", "8940", "520"],
          ["210/35", "26 x 3,20", "7 x 2,49", "20,3", "844", "0,138", "0,159", "7340", "10200", "580"],
          ["240/40", "26 x 3,45", "7 x 2,68", "21,8", "979", "0,119", "0,137", "8510", "11800", "625"],
          ["300/50", "26 x 3,86", "7 x 3,00", "24,4", "1227", "0,0949", "0,109", "10500", "14800", "710"]
        ],
        note: "(1) A temperatura ambiente de 35°C, expuesto al sol, viento 0.6 m/seg, temperatura en el conductor 80 °C y factor de carga 100 %. (2) Resistencia óhmica a 20 °C – corriente continua."
      }
    ],
    certifications: ['iram', 'seguridad']
  },
  {
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
  },
  {
    id: 'subterraneo-pvc-aluminio',
    name: 'SUBTERRANEO PVC',
    categoryPath: ['Cables de Potencia','Subterráneos','Subterráneo Aluminio'],
    description: 'Descripción no disponible.',
    detailedDescription: 'Detalles a completar.',
    image: '/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO ALUMINIO/SUBTERRANEO PVC/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO ALUMINIO/SUBTERRANEO PVC/FICHA TECNICA/ficha tecnica subte aluminio pvc.pdf',
    specs: ['1 kV', 'IRAM 2178-1'],
    characteristics: [
      'Material aislante: PVC',
      'No propaga la llama',
      'Apto para instalaciones subterráneas'
    ],
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
      [
        "131",
        "10.2",
        "1.4",
        "1.0",
        "5.2",
        "16"
      ],
      [
        "181",
        "11.9",
        "1.4",
        "1.2",
        "6.5",
        "25"
      ],
      [
        "220",
        "12.9",
        "1.4",
        "1.2",
        "7.5",
        "35"
      ],
      [
        "281",
        "14.4",
        "1.4",
        "1.4",
        "8.6",
        "50"
      ],
      [
        "358",
        "16.0",
        "1.4",
        "1.4",
        "10.2",
        "70"
      ],
      [
        "477",
        "18.4",
        "1.5",
        "1.6",
        "12.0",
        "95"
      ],
      [
        "576",
        "20.1",
        "1.6",
        "1.6",
        "13.5",
        "120"
      ],
      [
        "693",
        "22.0",
        "1.6",
        "1.8",
        "15.0",
        "150"
      ],
      [
        "854",
        "24.4",
        "1.7",
        "2.0",
        "16.8",
        "185"
      ],
      [
        "1088",
        "27.4",
        "1.8",
        "2.2",
        "19.2",
        "240"
      ],
      [
        "1336",
        "30.4",
        "1.9",
        "2.4",
        "21.6",
        "300"
      ]
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
      [
        "464",
        "19.5",
        "1.8",
        "1.0",
        "5.2",
        "16"
      ],
      [
        "653",
        "23.1",
        "1.8",
        "1.2",
        "6.5",
        "25"
      ],
      [
        "784",
        "25.1",
        "1.8",
        "1.2",
        "7.5",
        "35"
      ]
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
      [
        "529",
        "20.7",
        "1.8",
        "1.0",
        "5.2",
        "16"
      ],
      [
        "751",
        "24.6",
        "1.8",
        "1.2",
        "6.5",
        "25"
      ],
      [
        "909",
        "26.7",
        "1.8",
        "1.2",
        "7.5",
        "35"
      ],
      [
        "1179",
        "30.3",
        "1.9",
        "1.4",
        "8.6",
        "50"
      ],
      [
        "1535",
        "34.2",
        "2.0",
        "1.4",
        "10.2",
        "70"
      ],
      [
        "2035",
        "39.3",
        "2.2",
        "1.6",
        "12.0",
        "95"
      ],
      [
        "2433",
        "42.7",
        "2.3",
        "1.6",
        "13.5",
        "120"
      ],
      [
        "2963",
        "47.1",
        "2.5",
        "1.8",
        "15.0",
        "150"
      ],
      [
        "3694",
        "52.6",
        "2.7",
        "2.0",
        "16.8",
        "185"
      ]
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
      [
        "631",
        "22.5",
        "1.8",
        "1.0",
        "5.2",
        "16"
      ],
      [
        "833",
        "25.8",
        "1.8",
        "1.2/1.0",
        "6.5/5.2",
        "25/16"
      ],
      [
        "978",
        "27.7",
        "1.8",
        "1.2/1.0",
        "7.5/5.2",
        "35/16"
      ],
      [
        "1303",
        "31.7",
        "2.0",
        "1.4/1.2",
        "8.6/6.5",
        "50/25"
      ],
      [
        "1685",
        "35.7",
        "2.1",
        "1.4/1.2",
        "10.2/7.5",
        "70/35"
      ],
      [
        "2229",
        "40.9",
        "2.3",
        "1.6/1.4",
        "12.0/8.6",
        "95/50"
      ],
      [
        "2709",
        "44.8",
        "2.4",
        "1.6/1.4",
        "13.5/10.2",
        "120/70"
      ],
      [
        "3180",
        "48.5",
        "2.5",
        "1.8/1.4",
        "15.0/10.2",
        "150/70"
      ]
    ]
  }
],
    certifications: []
  },
    {
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
  },
  {
    id: 'subterraneo-lsoh-cobre',
    name: 'SUBTERRANEO LSOH',
    categoryPath: ['Cables de Potencia','Subterráneos','Subterráneo Cobre'],
    description: 'Descripción no disponible.',
    detailedDescription: 'Detalles a completar.',
    image: '/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO COBRE/SUBTERRANEO LSOH/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO COBRE/SUBTERRANEO LSOH/FICHA TECNICA/ficha tecnica subte cobre lsoh.pdf',
    specs: ['1 kV', 'IRAM 62266'],
    characteristics: [
      'Material aislante: LSOH',
      'No propaga el incendio (IRAM 2289)',
      'Baja emisión de humos tóxicos',
      'Libre de halógenos'
    ],
    specsTables: [
  {
    title: "Especificaciones",
    headers: [
      "Sección nominal",
      "Diám. del alambre",
      "Espesor de la aislación",
      "Espesor nominal vaina",
      "Diam. exterior del cable 1",
      "Peso final del cable 1"
    ],
    rows: [
      [
        "mm2",
        "mm",
        "mm",
        "mm",
        "mm",
        "Kg/Km"
      ],
      [
        "1.50",
        "0.26",
        "0.80",
        "1.40",
        "5.9",
        "56"
      ]
    ]
  },
  {
    title: "Especificaciones",
    headers: [
      "N° de Fases",
      "Celeste",
      "Marrón",
      "Rojo",
      "Negro",
      "Verde",
      "Violeta"
    ],
    rows: [
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "aammaarriilllloo",
        "-"
      ],
      [
        "1",
        "-",
        "•",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "2",
        "•",
        "•",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "3",
        "-",
        "•",
        "•",
        "•",
        "-",
        "-"
      ],
      [
        "4",
        "•",
        "•",
        "•",
        "•",
        "-",
        "-"
      ],
      [
        "5",
        "•",
        "•",
        "•",
        "•",
        "-",
        "-"
      ],
      [
        "Vaina",
        "-",
        "-",
        "-",
        "-",
        "-",
        "•"
      ]
    ]
  },
  {
    title: "Especificaciones",
    headers: [
      "Sección nominal",
      "Diam. conductor",
      "Espesor de la aislación",
      "Espesor nominal vaina",
      "Diam. exterior del cable 1",
      "",
      "Peso final del cable (Cu) 1",
      "Peso final del cable (Al) 1"
    ],
    rows: [
      [
        "mm2",
        "mm",
        "mm",
        "mm",
        "mm",
        "-",
        "Kg/Km",
        "Kg/Km"
      ],
      [
        "3x50",
        "-",
        "1.0",
        "2.0",
        "25",
        "-",
        "1794",
        "933"
      ],
      [
        "3x70 - 1.1 2.1 29",
        "-",
        "-",
        "-",
        "-",
        "-",
        "2521",
        "1224"
      ],
      [
        "3x95",
        "-",
        "1.1",
        "2.2",
        "33",
        "-",
        "3261",
        "1586"
      ],
      [
        "3x120 - 1.2 2.4 35",
        "-",
        "-",
        "-",
        "-",
        "-",
        "4089",
        "1908"
      ],
      [
        "3x150",
        "-",
        "1.48",
        "2.5",
        "42",
        "-",
        "5016",
        "2302"
      ],
      [
        "3x185 - 1.70 2.50 42",
        "-",
        "-",
        "-",
        "-",
        "-",
        "6143",
        "2636"
      ],
      [
        "3x240",
        "-",
        "1.80",
        "2.80",
        "52",
        "-",
        "7871",
        "3327"
      ],
      [
        "3x300",
        "-",
        "1.90",
        "3.00",
        "56",
        "-",
        "9795",
        "4039"
      ],
      [
        "3x25+16",
        "-",
        "1.2/1.0",
        "1.8",
        "26",
        "-",
        "-",
        "635"
      ],
      [
        "3x35+16",
        "-",
        "1.2/1.0",
        "1.8",
        "28",
        "-",
        "-",
        "758"
      ],
      [
        "3x50+25",
        "-",
        "1.0/0.9",
        "1.9",
        "27",
        "-",
        "1900",
        "843"
      ],
      [
        "3x70+35",
        "-",
        "1.1/0.9",
        "2",
        "31",
        "-",
        "2660",
        "1102"
      ],
      [
        "3x95+50",
        "-",
        "1.1/1.0",
        "2.2",
        "35",
        "-",
        "3524",
        "1442"
      ],
      [
        "3x120+70",
        "-",
        "1.2/1.1",
        "2.3",
        "39",
        "-",
        "4545",
        "1840"
      ],
      [
        "3x150+70",
        "-",
        "1.5/1.1",
        "2.5",
        "42",
        "-",
        "5719",
        "2443"
      ],
      [
        "3x185+95",
        "-",
        "1.7/1.1",
        "2.7",
        "46",
        "-",
        "7084",
        "2981"
      ],
      [
        "3x240+120",
        "-",
        "1.8/1.2",
        "2.9",
        "51",
        "-",
        "9092",
        "3786"
      ],
      [
        "3x300+150",
        "-",
        "1.9/1.4",
        "3.1",
        "59",
        "11000",
        "11000",
        "4589"
      ]
    ]
  },
  {
    title: "Especificaciones",
    headers: [
      "Sección nominal",
      "Corriente Adm, aires unipolares",
      "Corriente Adm, aire Multipolares",
      "Corriente Adm, enterrados unipolares",
      "Corriente Adm, enterrados multipolares",
      "Caída de tensión unipolares",
      "Caída de tensión Multipolares"
    ],
    rows: [
      [
        "mm2",
        "A",
        "A",
        "A",
        "A",
        "V/A km",
        "V/A km"
      ],
      [
        "1.5",
        "19",
        "24",
        "32",
        "34",
        "21",
        "21"
      ]
    ]
  },
  {
    title: "Especificaciones",
    headers: [
      "Características eléctricas cables de cobre Sección Corriente Adm, Corriente Adm, Corriente Adm, Corriente Adm, Caída de tensión Caída de tensión nominal aires unipolares aire Multipolares enterrados enterrados unipolares Multipolares unipolares multipolares mm2 A A A A V/A km V/A km 35 144 168 189 210 1.09 1.01 50 175 205 231 251 0.84 0.76 70 224 263 280 307 0.63 0.55 95 271 320 327 369 0.49 0.42 120 315 373 379 420 0.42 0.35 150 363 430 424 472 0.37 0.29 185 415 493 473 535 0.32 0.25 240 489 583 555 626 0.28 0.21 300 565 674 624 704 0.27 0.18",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    rows: [
      [
        "-",
        "Sección nominal",
        "Corriente Adm, aires unipolares",
        "Corriente Adm, aire Multipolares",
        "Corriente Adm, enterrados unipolares",
        "Corriente Adm, enterrados multipolares",
        "Caída de tensión unipolares",
        "Caída de tensión Multipolares",
        "-"
      ],
      [
        "-",
        "mm2",
        "A",
        "A",
        "A",
        "A",
        "V/A km",
        "V/A km",
        "-"
      ],
      [
        "-",
        "35",
        "144",
        "168",
        "189",
        "210",
        "1.09",
        "1.01",
        "-"
      ],
      [
        "-",
        "50",
        "175",
        "205",
        "231",
        "251",
        "0.84",
        "0.76",
        "-"
      ],
      [
        "-",
        "70",
        "224",
        "263",
        "280",
        "307",
        "0.63",
        "0.55",
        "-"
      ],
      [
        "-",
        "95",
        "271",
        "320",
        "327",
        "369",
        "0.49",
        "0.42",
        "-"
      ],
      [
        "-",
        "120",
        "315",
        "373",
        "379",
        "420",
        "0.42",
        "0.35",
        "-"
      ],
      [
        "-",
        "150",
        "363",
        "430",
        "424",
        "472",
        "0.37",
        "0.29",
        "-"
      ],
      [
        "-",
        "185",
        "415",
        "493",
        "473",
        "535",
        "0.32",
        "0.25",
        "-"
      ],
      [
        "-",
        "240",
        "489",
        "583",
        "555",
        "626",
        "0.28",
        "0.21",
        "-"
      ],
      [
        "-",
        "300",
        "565",
        "674",
        "624",
        "704",
        "0.27",
        "0.18",
        "-"
      ]
    ]
  },
  {
    title: "Especificaciones",
    headers: [
      "Sección nominal",
      "Corriente Adm, aires unipolares",
      "Corriente Adm, aire Multipolares",
      "Corriente Adm, enterrados unipolares",
      "Corriente Adm, enterrados multipolares",
      "Caída de tensión unipolares",
      "Caída de tensión Multipolares"
    ],
    rows: [
      [
        "mm2",
        "A",
        "A",
        "A",
        "A",
        "V/A km",
        "V/A km"
      ],
      [
        "25",
        "1.26",
        "98",
        "128",
        "136",
        "2.29",
        "2.21"
      ],
      [
        "35 157 123 153 163 1.7 1.62",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "50",
        "191",
        "149",
        "180",
        "194",
        "1.29",
        "1.21"
      ],
      [
        "70 2474 192 221 239 0.94 0.86",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "95",
        "302",
        "234",
        "265",
        "286",
        "0.72",
        "0.65"
      ],
      [
        "120 352 273 302 326 0.6 0.53",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "150",
        "408",
        "315",
        "338",
        "366",
        "0.51",
        "0.44"
      ],
      [
        "185",
        "469",
        "361",
        "384",
        "415",
        "0.44",
        "0.36"
      ],
      [
        "240",
        "556",
        "428",
        "448",
        "484",
        "0.37",
        "0.29"
      ],
      [
        "300",
        "644",
        "494",
        "507",
        "547",
        "0.32",
        "0.25"
      ]
    ]
  }
],
    certifications: []
  },
  {
    id: 'subterraneo-pvc-cobre',
    name: 'SUBTERRANEO PVC',
    categoryPath: ['Cables de Potencia','Subterráneos','Subterráneo Cobre'],
    description: 'Descripción no disponible.',
    detailedDescription: 'Detalles a completar.',
    image: '/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO COBRE/SUBTERRANEO PVC/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO COBRE/SUBTERRANEO PVC/FICHA TECNICA/ficha tecnica subte cobre pvc.pdf',
    specs: ['1 kV', 'IRAM 2178-1'],
    characteristics: [
      'Material aislante: PVC',
      'No propaga la llama',
      'Apto para instalaciones subterráneas'
    ],
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
      [
        "326",
        "12.1",
        "1.4",
        "1.20",
        "6.70",
        "25"
      ],
      [
        "413",
        "13.0",
        "1.4",
        "1.20",
        "7.60",
        "35"
      ],
      [
        "588",
        "15.1",
        "1.4",
        "1.40",
        "9.30",
        "50"
      ],
      [
        "772",
        "16.6",
        "1.4",
        "1.40",
        "10.80",
        "70"
      ],
      [
        "989",
        "19.0",
        "1.5",
        "1.60",
        "12.62",
        "95"
      ],
      [
        "1273",
        "20.9",
        "1.6",
        "1.60",
        "14.30",
        "120"
      ],
      [
        "1604",
        "22.9",
        "1.6",
        "1.80",
        "15.85",
        "150"
      ],
      [
        "1930",
        "25.6",
        "1.7",
        "2.00",
        "18.00",
        "185"
      ],
      [
        "2493",
        "30.3",
        "1.8",
        "2.20",
        "22.10",
        "240"
      ],
      [
        "3252",
        "34.9",
        "1.9",
        "2.40",
        "26.10",
        "300"
      ]
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
      [
        "157",
        "11.1",
        "1.8",
        "0.80",
        "1.53",
        "1,5"
      ],
      [
        "192",
        "11.9",
        "1.8",
        "0.80",
        "1.95",
        "2,5"
      ],
      [
        "261",
        "13.7",
        "1.8",
        "1.00",
        "2.43",
        "4"
      ],
      [
        "331",
        "15.0",
        "1.8",
        "1.00",
        "2.98",
        "6"
      ],
      [
        "489",
        "17.8",
        "1.8",
        "1.00",
        "4.42",
        "10"
      ],
      [
        "654",
        "19.9",
        "1.8",
        "1.00",
        "5.40",
        "16"
      ],
      [
        "955",
        "23.5",
        "1.8",
        "1.20",
        "6.70",
        "25"
      ],
      [
        "1165",
        "25.3",
        "1.8",
        "1.20",
        "7.60",
        "35"
      ]
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
      [
        "179",
        "11.6",
        "1.8",
        "0.80",
        "1.53",
        "1.5"
      ],
      [
        "223",
        "12.5",
        "1.8",
        "0.80",
        "1.95",
        "2.5"
      ],
      [
        "308",
        "14.4",
        "1.8",
        "1.00",
        "2.43",
        "4"
      ],
      [
        "400",
        "15.8",
        "1.8",
        "1.00",
        "2.98",
        "6"
      ],
      [
        "595",
        "18.9",
        "1.8",
        "1.00",
        "4.40",
        "10"
      ],
      [
        "748",
        "21.1",
        "1.8",
        "1.00",
        "5.40",
        "16"
      ],
      [
        "1186",
        "25.0",
        "1.8",
        "1.20",
        "6.70",
        "25"
      ],
      [
        "1486",
        "27.0",
        "1.8",
        "1.20",
        "7.60",
        "35"
      ],
      [
        "2187",
        "31.9",
        "2.0",
        "1.40",
        "9.30",
        "50"
      ],
      [
        "2920",
        "35.6",
        "2.1",
        "1.40",
        "10.80",
        "70"
      ],
      [
        "3908",
        "40.7",
        "2.3",
        "1.60",
        "12.62",
        "95"
      ],
      [
        "4572",
        "44.6",
        "2.4",
        "1.60",
        "14.30",
        "120"
      ],
      [
        "5869",
        "49.1",
        "2.5",
        "1.80",
        "15.85",
        "150"
      ],
      [
        "7386",
        "55.4",
        "2.7",
        "2.00",
        "18.00",
        "185"
      ]
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
      [
        "210",
        "12.4",
        "1.8",
        "0.80",
        "1.53",
        "1.5"
      ],
      [
        "266",
        "13.4",
        "1.8",
        "0.80",
        "1.95",
        "2.5"
      ],
      [
        "374",
        "15.5",
        "1.8",
        "1.00",
        "2.43",
        "4"
      ],
      [
        "475",
        "17.0",
        "1.8",
        "1.00",
        "2.98",
        "6"
      ],
      [
        "729",
        "20.5",
        "1.8",
        "1.00",
        "4.42",
        "10"
      ],
      [
        "991",
        "23.0",
        "1.8",
        "1.00",
        "5.40",
        "16"
      ],
      [
        "1370",
        "26.3",
        "1.8",
        "1.2/1.0",
        "6.70/5.40",
        "25/16"
      ],
      [
        "1656",
        "28.0",
        "1.8",
        "1.2/1.0",
        "7.60/5.40",
        "35/16"
      ],
      [
        "2438",
        "33.2",
        "2.0",
        "1.4/1.2",
        "9.30/6.70",
        "50/25"
      ],
      [
        "3185",
        "36.9",
        "2.1",
        "1.4/1.2",
        "10.80/7.60",
        "70/35"
      ],
      [
        "4340",
        "42.6",
        "2.3",
        "1.6/1.4",
        "12.68/9.30",
        "95/50"
      ],
      [
        "5385",
        "46.8",
        "2.5",
        "1.6/1.4",
        "14.30/10.80",
        "120/70"
      ],
      [
        "6558",
        "50.6",
        "2.6",
        "1.8/1.4",
        "15.85/10.80",
        "150/70"
      ]
    ]
  }
],
    certifications: []
  },
    {
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
  },
    {
    id: '2-para-bomba-sumergible',
    name: '2-PARA BOMBA SUMERGIBLE',
    categoryPath: ['Cables de Potencia'],
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
  },
    {
    id: '3-para-variador-de-frecuencia',
    name: '3-PARA VARIADOR DE FRECUENCIA',
    categoryPath: ['Cables de Potencia'],
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
  },
    {
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
  },
    {
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
  },
  {
    id: 'otras-potencias-aluminio',
    name: 'OTRAS POTENCIAS',
    categoryPath: ['Cables de Media Tensión','Aluminio','Otras Potencias'],
    description: 'Descripción no disponible.',
    detailedDescription: 'Detalles a completar.',
    image: '/images/ProductosNuevos/4- CABLES DE MEDIA TENSION/CABLES MEDIA TENSION ALUMINIO/OTRAS POTENCIAS/portada.jpeg',
    gallery: [],
    pdf: '',
    specs: [],
    characteristics: [],
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
      [
        "75",
        "7.3",
        "1.4",
        "1.0",
        "2.43",
        "4"
      ],
      [
        "93",
        "7.9",
        "1.4",
        "1.0",
        "2.98",
        "6"
      ],
      [
        "125",
        "9.3",
        "1.4",
        "1.0",
        "4.42",
        "10"
      ],
      [
        "226",
        "10.4",
        "1.4",
        "1.0",
        "5.40",
        "16"
      ],
      [
        "328",
        "12.1",
        "1.4",
        "1.2",
        "6.70",
        "25"
      ],
      [
        "415",
        "13.0",
        "1.4",
        "1.2",
        "7.60",
        "35"
      ],
      [
        "591",
        "15.1",
        "1.4",
        "1.4",
        "9.30",
        "50"
      ],
      [
        "775",
        "16.6",
        "1.4",
        "1.4",
        "10.80",
        "70"
      ],
      [
        "994",
        "19.0",
        "1.5",
        "1.6",
        "12.62",
        "95"
      ],
      [
        "1278",
        "20.9",
        "1.6",
        "1.6",
        "14.30",
        "120"
      ],
      [
        "1610",
        "22.9",
        "1.6",
        "1.8",
        "15.85",
        "150"
      ],
      [
        "1938",
        "25.6",
        "1.7",
        "2.0",
        "18.00",
        "185"
      ],
      [
        "2504",
        "30.3",
        "1.8",
        "2.2",
        "22.10",
        "240"
      ],
      [
        "3264",
        "34.9",
        "1.9",
        "2.4",
        "26.10",
        "300"
      ]
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
      [
        "160",
        "11.1",
        "1.8",
        "0.8",
        "1.53",
        "1,5"
      ],
      [
        "194",
        "11.9",
        "1.8",
        "0.8",
        "1.95",
        "2,5"
      ],
      [
        "264",
        "13.7",
        "1.8",
        "1.0",
        "2.43",
        "4"
      ],
      [
        "335",
        "15.0",
        "1.8",
        "1.0",
        "2.98",
        "6"
      ],
      [
        "493",
        "17.8",
        "1.8",
        "1.0",
        "4.42",
        "10"
      ],
      [
        "660",
        "19.9",
        "1.8",
        "1.0",
        "5.40",
        "16"
      ],
      [
        "962",
        "23.5",
        "1.8",
        "1.2",
        "6.70",
        "25"
      ],
      [
        "1172",
        "25.3",
        "1.8",
        "1.2",
        "7.60",
        "35"
      ]
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
      [
        "182",
        "11.6",
        "1.8",
        "0.8",
        "1.53",
        "1.5"
      ],
      [
        "226",
        "12.5",
        "1.8",
        "0.8",
        "1.95",
        "2.5"
      ],
      [
        "312",
        "14.4",
        "1.8",
        "1.0",
        "2.43",
        "4"
      ],
      [
        "405",
        "15.8",
        "1.8",
        "1.0",
        "2.98",
        "6"
      ],
      [
        "600",
        "18.9",
        "1.8",
        "1.0",
        "4.42",
        "10"
      ],
      [
        "755",
        "21.1",
        "1.8",
        "1.0",
        "5.40",
        "16"
      ],
      [
        "1195",
        "25.0",
        "1.8",
        "1.2",
        "6.70",
        "25"
      ],
      [
        "1505",
        "27.0",
        "1.8",
        "1.2",
        "7.60",
        "35"
      ],
      [
        "2199",
        "31.9",
        "2.0",
        "1.4",
        "9.30",
        "50"
      ],
      [
        "2935",
        "35.6",
        "2.1",
        "1.4",
        "10.80",
        "70"
      ],
      [
        "3926",
        "40.7",
        "2.3",
        "1.6",
        "12.62",
        "95"
      ],
      [
        "4593",
        "44.6",
        "2.4",
        "1.6",
        "14.30",
        "120"
      ],
      [
        "5894",
        "49.1",
        "2.5",
        "1.8",
        "15.58",
        "150"
      ],
      [
        "7416",
        "55.4",
        "2.7",
        "2.0",
        "18.00",
        "185"
      ]
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
      [
        "214",
        "12.4",
        "1.8",
        "0.8",
        "1.53",
        "1.5"
      ],
      [
        "270",
        "13.4",
        "1.8",
        "0.8",
        "1.95",
        "2.5"
      ],
      [
        "379",
        "15.5",
        "1.8",
        "1.0",
        "2.43",
        "4"
      ],
      [
        "480",
        "17.0",
        "1.8",
        "1.0",
        "2.98",
        "6"
      ],
      [
        "736",
        "20.5",
        "1.8",
        "1.0",
        "4.42",
        "10"
      ],
      [
        "998",
        "23.0",
        "1.8",
        "1.0",
        "5.40",
        "16"
      ],
      [
        "1379",
        "26.3",
        "1.8",
        "1.2/1.0",
        "6.70/5.40",
        "25/16"
      ],
      [
        "1666",
        "28.0",
        "1.8",
        "1.2/1.0",
        "7.60/5.40",
        "35/16"
      ],
      [
        "2452",
        "33.2",
        "2.0",
        "1.4/1.2",
        "9.30/6.70",
        "50/25"
      ],
      [
        "3201",
        "36.9",
        "2.1",
        "1.4/1.2",
        "10.80/7.60",
        "70/35"
      ],
      [
        "4360",
        "42.6",
        "2.3",
        "1.6/1.4",
        "12.62/9.30",
        "95/50"
      ],
      [
        "5408",
        "46.8",
        "2.5",
        "1.6/1.4",
        "14.30/10.80",
        "120/70"
      ],
      [
        "6585",
        "50.6",
        "2.6",
        "1.8/1.4",
        "15.85/10.80",
        "150/70"
      ]
    ]
  }
],
    certifications: []
  },
    {
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
  },
    {
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
  },
  {
    id: 'otras-potencias-cobre',
    name: 'OTRAS POTENCIAS',
    categoryPath: ['Cables de Media Tensión','Cobre','Otras Potencias'],
    description: 'Descripción no disponible.',
    detailedDescription: 'Detalles a completar.',
    image: '/images/ProductosNuevos/4- CABLES DE MEDIA TENSION/CABLES MEDIA TENSION COBRE/OTRAS POTENCIAS/PORTADA.jpeg',
    gallery: [],
    pdf: '',
    specs: [],
    characteristics: [],
    specsTables: [
  {
    title: "Especificaciones",
    headers: [
      "3 Una sola capa fijada debajo de cielorraso. 0.95 0.81 0.72 0.68 0.66 0.64 0.63 0.62",
      ""
    ],
    rows: [
      [
        "reducción 4 Una sola capa sobre más de n una bandeja perforada 1.00 0.88 0.82 0.77 0.75 0.73 0.73 0.72 0.72 circuitos o horizontal o vertical. multipola 5 Una sola capa sobre bandeja tipo escalera 1.00 0.87 0.82 0.80 0.80 0.79 0.79 0.78 0.78 o engrapada.",
        "para ueve cables res. Métodos E y F"
      ],
      [
        "5 Una sola capa sobre bandeja tipo escalera 1.00 0.87 0.82 0.80 0.80 0.79 0.79 0.78 o engrapada.",
        "-"
      ]
    ]
  }
],
    certifications: []
  },
        {
    id: 'industrial-instrumentacion-electronica-libre-halogenos-lsoh',
    name: 'LSOH',
    categoryPath: ['Cables Industriales', 'Instrumentación Electrónica', 'Libre de Halógenos'],
    description: 'Circuitos de instrumentación electrónica, señales digitales y analógicas (4-20mA). Circuitos de seguridad intrínseca.',
    detailedDescription: `300 Volt Cu 22 a 12 AWG LSZH 90°C / LSZH UL 13 PLTC
Circuitos de instrumentación electrónica, señales digitales y analógicas (4-20mA). Circuitos de seguridad intrínseca.
Detección de pérdidas de gas y/o fluidos. Medición y monitoreo de presión, temperatura, volumen. Monitoreo de
señales de alarma. Uso en ambientes cerrados con alta concentración de personas (Aeropuertos, hospitales, trenes,
cines, centros comerciales, túneles) y en salas de control con equipamiento electrónico sensible ante la exposición de`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/1-LIBRE HALOGENOS/1-LSOH/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/1-LIBRE HALOGENOS/1-LSOH/FICHA TECNICA - USAR FOTO DE PORTADA.pdf',
    specs: ['22 a 12 AWG', '90°C', '300 Volt'],
    characteristics: [
      'Temperatura máxima: 90°C',
      'Tensión nominal: 300 Volt',
      'Norma constructiva: UL 13 tipo PLTC - UL 2250 tipo ITC',
      'Norma de conductores: ASTM B8 Clase B',
      'Conductor: Cobre electrolítico recocido en formación de 7 hilos',
      'Aislación: LSZH-HFFR (Low Smoke Zero Halogen - Halogen Free Flame Retardant)',
      'Paso del trenzado: 50mm (20 torsiones por metro)',
      'Blindaje: Cinta aluminio-poliéster más conductor de drenaje de cobre estañado',
      'Cubierta: LSZH-HFFR (Low Smoke Zero Halogen - Halogen Free Flame Retardant), no propagante del',
      'incendio, resistente a la luz solar y los aceites',
      'Norma de fuego: UL 1685 – IEC 60332-3-24',
      'Norma de ausencia de halógenos y gases corrosivos: IEC 60754-1/2',
      'Norma de transparencia de humos: IEC 61034-1/2',
      'Norma de toxicidad: NES 713 – CEI 20.37',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Comportamiento frente al agua: Apto AD7 (Inmersión ocasional en agua)',
      'Código NEC (NFPA 70): Art. 725 PLTC – Art. 727 ITC – Art. 800 CM – Art. 501 áreas clasificadas CL1 Div.2',
      'y Cl2 Div.2'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-instrumentacion-electronica-libre-halogenos-lsoh-armado',
    name: 'LSOH Armado',
    categoryPath: ['Cables Industriales', 'Instrumentación Electrónica', 'Libre de Halógenos'],
    description: '300 Volt Cu 22 a 12 AWG LSZH 90°C / LSZH UL 13 PLTC',
    detailedDescription: `Par, terna, cuadrete, multipar, multiterna Armados (SWA)
300 Volt Cu 22 a 12 AWG LSZH 90°C / LSZH UL 13 PLTC
Circuitos de instrumentación electrónica, señales digitales y analógicas (4-20mA). Circuitos de seguridad intrínseca.
Detección de pérdidas de gas y/o fluidos. Medición y monitoreo de presión, temperatura, volumen. Monitoreo de
señales de alarma. Uso en ambientes cerrados con alta concentración de personas (Aeropuertos, hospitales, trenes,`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/1-LIBRE HALOGENOS/2-LSOH ARMADO/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/1-LIBRE HALOGENOS/2-LSOH ARMADO/FICHA TECNICA - REPETIR FOTO PORTADA.pdf',
    specs: ['22 a 12 AWG', '90°C', '300 Volt'],
    characteristics: [
      'Temperatura máxima: 90°C',
      'Tensión nominal: 300 Volt',
      'Norma constructiva: UL 13 tipo PLTC - UL 2250 tipo ITC',
      'Norma de conductores: ASTM B8 Clase B',
      'Conductor: Cobre electrolítico recocido en formación de 7 hilos',
      'Aislación: LSZH-HFFR (Low Smoke Zero Halogen - Halogen Free Flame Retardant)',
      'Paso del trenzado: 50mm (20 torsiones por metro)',
      'Blindaje: Cinta aluminio-poliéster más conductor de drenaje de cobre estañado',
      'Cubierta interna: LSZH-HFFR (Low Smoke Zero Halogen - Halogen Free Flame Retardant)',
      'Armadura: Corona helicoidal de alambres de acero cincado (galvanizado)',
      'Cubierta: LSZH-HFFR (Low Smoke Zero Halogen - Halogen Free Flame Retardant), no propagante del',
      'incendio, resistente a la luz solar y los aceites',
      'Norma de fuego: UL 1685 – IEC 60332-3-24',
      'Norma de ausencia de halógenos y gases corrosivos: IEC 60754-1/2',
      'Norma de transparencia de humos: IEC 61034-1/2',
      'Norma de toxicidad: NES 713 – CEI 20.37',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Comportamiento frente al agua: Apto AD7 (Inmersión ocasional en agua)',
      'Código NEC (NFPA 70): Art. 725 PLTC – Art. 727 ITC – Art. 800 CM – Art. 501 áreas clasificadas CL1 Div.2',
      'y Cl2 Div.2'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-instrumentacion-electronica-libre-halogenos-lsoh-corrugado-interlock',
    name: 'LSOH Corrugado (interlock)',
    categoryPath: ['Cables Industriales', 'Instrumentación Electrónica', 'Libre de Halógenos'],
    description: '300 Volt Cu 22 a 12 AWG LSZH 90°C / LSZH UL 13 PLTC',
    detailedDescription: `Par, terna, cuadrete, multipar, multiterna Armados (Interlock)
300 Volt Cu 22 a 12 AWG LSZH 90°C / LSZH UL 13 PLTC
Circuitos de instrumentación electrónica, señales digitales y analógicas (4-20mA). Circuitos de seguridad intrínseca.
Detección de pérdidas de gas y/o fluidos. Medición y monitoreo de presión, temperatura, volumen. Monitoreo de
señales de alarma. Uso en ambientes cerrados con alta concentración de personas (Aeropuertos, hospitales, trenes,`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/1-LIBRE HALOGENOS/3-LSOH CORRUGADO (INTERLOCK)/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/1-LIBRE HALOGENOS/3-LSOH CORRUGADO (INTERLOCK)/FICHA TECNICA - REPETIR FOTO PORTADA.pdf',
    specs: ['22 a 12 AWG', '90°C', '300 Volt'],
    characteristics: [
      'Temperatura máxima: 90°C',
      'Tensión nominal: 300 Volt',
      'Norma constructiva: UL 13 tipo PLTC - UL 2250 tipo ITC',
      'Norma de conductores: ASTM B8 Clase B',
      'Conductor: Cobre electrolítico recocido en formación de 7 hilos',
      'Aislación: LSZH-HFFR (Low Smoke Zero Halogen - Halogen Free Flame Retardant)',
      'Paso del trenzado: 50mm (20 torsiones por metro)',
      'Blindaje: Cinta aluminio-poliéster más conductor de drenaje de cobre estañado',
      'Cubierta interna: LSZH-HFFR (Low Smoke Zero Halogen - Halogen Free Flame Retardant)',
      'Armadura: Fleje de aluminio, tipo interlock',
      'Cubierta: LSZH-HFFR (Low Smoke Zero Halogen - Halogen Free Flame Retardant), no propagante del',
      'incendio, resistente a la luz solar y los aceites',
      'Norma de fuego: UL 1685 – IEC 60332-3-24',
      'Norma de ausencia de halógenos y gases corrosivos: IEC 60754-1/2',
      'Norma de transparencia de humos: IEC 61034-1/2',
      'Norma de toxicidad: NES 713 – CEI 20.37',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Comportamiento frente al agua: Apto AD7 (Inmersión ocasional en agua)',
      'Código NEC (NFPA 70): Art. 725 PLTC – Art. 727 ITC – Art. 800 CM – Art. 501 áreas clasificadas CL1 Div.2',
      'y Cl2 Div.2'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-instrumentacion-electronica-resistente-incendios-resistente-incendios',
    name: 'Resistente Incendios',
    categoryPath: ['Cables Industriales', 'Instrumentación Electrónica', 'Resistente a Incendios'],
    description: 'Circuitos de instrumentación electrónica, señales digitales y analógicas (4-20mA). Circuitos de seguridad intrínseca.',
    detailedDescription: `300 Volt Cu 20 a 12 AWG Doble aislación (MICA+LSZH) UL 13 PLTC
Circuitos de instrumentación electrónica, señales digitales y analógicas (4-20mA). Circuitos de seguridad intrínseca.
Detección de pérdidas de gas y/o fluidos. Medición y monitoreo de presión, temperatura, volumen. Monitoreo de
señales de alarma. Uso adecuado para mantener la integridad eléctrica en presencia de fuego directo en servicios
críticos en destilerías, petroquímicas, astilleros, etc. Instalados en conduits, bandeja, escalera, al aire libre directo o`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/2-RESISTENTE INCENDIOS/1-RESISTENTE INCENDIOS/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/2-RESISTENTE INCENDIOS/1-RESISTENTE INCENDIOS/FICHA TECNICA - USAR FOTO DE PORTADA.pdf',
    specs: ['300 Volt', '20 a 12 AWG'],
    characteristics: [
      'Temperatura máxima: 90°C',
      'Tensión nominal: 300 Volt',
      'Norma constructiva: UL 13 tipo PLTC\xa0 - UL 2250 tipo ITC',
      'Norma de conductores: ASTM B8 Clase B',
      'Conductor: Cobre electrolítico recocido en formación de 7 hilos',
      'Aislación: Encintado de MICA + LSZH-HFFR (Low Smoke Zero Halogen - Halogen Free Flame\xa0 Retardant)',
      'Paso del trenzado: 50mm (20 torsiones por metro)',
      'Blindaje: Cinta aluminio-poliéster más conductor de drenaje de cobre estañado',
      'Cubierta: LSZH-HFFR (Low Smoke Zero Halogen - Halogen Free Flame\xa0Retardant), no propagante del',
      'incendio, resistente a la luz solar y los aceites',
      'Norma\xa0de fuego: UL 1685 – IEC 60332-3-24',
      'Norma de resistencia al fuego: IEC 60331-23 / IEC 60331-1/2 PH120',
      'Norma de ausencia de halógenos y gases corrosivos: IEC 60754-1/2',
      'Norma de transparencia de humos: IEC 61034-1/2',
      'Norma de toxicidad: NES 713 – CEI 20.37',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Comportamiento frente al agua: Apto AD7 (Inmersión ocasional en agua)',
      'Código NEC (NFPA 70): Art. 725 PLTC – Art. 727 ITC – Art. 800 CM – Art. 501 áreas clasificadas CL1 Div.2',
      'y Cl2 Div.2'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-instrumentacion-electronica-resistente-incendios-resistente-incendios-armado',
    name: 'Resistente Incendios Armado',
    categoryPath: ['Cables Industriales', 'Instrumentación Electrónica', 'Resistente a Incendios'],
    description: '300 Volt Cu 20 a 12 AWG Doble aislación (MICA+LSZH) UL 13 PLTC',
    detailedDescription: `Par, terna, cuadrete, multipar, multiterna Armados (SWA)
300 Volt Cu 20 a 12 AWG Doble aislación (MICA+LSZH) UL 13 PLTC
Circuitos de instrumentación electrónica, señales digitales y analógicas (4-20mA). Circuitos de seguridad intrínseca.
Detección de pérdidas de gas y/o fluidos. Medición y monitoreo de presión, temperatura, volumen. Monitoreo de
señales de alarma. Uso adecuado para mantener la integridad eléctrica en presencia de fuego directo en servicios`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/2-RESISTENTE INCENDIOS/2-RESISTENTE INCENDIOS ARMADO/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/2-RESISTENTE INCENDIOS/2-RESISTENTE INCENDIOS ARMADO/FICHA TECNICA - REPETIR FOTO PORTADA.pdf',
    specs: ['300 Volt', '20 a 12 AWG'],
    characteristics: [
      'Temperatura máxima: 90°C',
      'Tensión nominal: 300 Volt',
      'Norma constructiva: UL 13 tipo PLTC\xa0 - UL 2250 tipo ITC',
      'Norma de conductores: ASTM B8 Clase B',
      'Conductor: Cobre electrolítico recocido en formación de 7 hilos',
      'Aislación: Encintado de MICA + LSZH-HFFR (Low Smoke Zero Halogen - Halogen Free Flame\xa0 Retardant)',
      'Paso del trenzado: 50mm (20 torsiones por metro)',
      'Blindaje: Cinta aluminio-poliéster más conductor de drenaje de cobre estañado',
      'Cubierta interna: LSZH-HFFR (Low Smoke Zero Halogen - Halogen Free Flame\xa0Retardant)',
      'Armadura: Corona helicoidal de alambres de acero cincado (galvanizado)',
      'Cubierta: LSZH-HFFR (Low Smoke Zero Halogen - Halogen Free Flame\xa0Retardant), no propagante del',
      'incendio, resistente a la luz solar y los aceites',
      'Norma\xa0de fuego: UL 1685 – IEC 60332-3-24',
      'Norma de resistencia al fuego: IEC 60331-23 / IEC 60331-1/2 PH120',
      'Norma de ausencia de halógenos y gases corrosivos: IEC 60754-1/2',
      'Norma de transparencia de humos: IEC 61034-1/2',
      'Norma de toxicidad: NES 713 – CEI 20.37',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Comportamiento frente al agua: Apto AD7 (Inmersión ocasional en agua)',
      'Código NEC (NFPA 70): Art. 725 PLTC – Art. 727 ITC – Art. 800 CM – Art. 501 áreas clasificadas CL1 Div.2',
      'y Cl2 Div.2'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-instrumentacion-electronica-resistente-incendios-resistente-incendios-corrugado-interlock',
    name: 'Resistente Incendios Corrugado (interlock)',
    categoryPath: ['Cables Industriales', 'Instrumentación Electrónica', 'Resistente a Incendios'],
    description: '300 Volt Cu 20 a 12 AWG Doble aislación (MICA+LSZH) UL 13 PLTC',
    detailedDescription: `Par, terna, cuadrete, multipar, multiterna Armados (Interlock)
300 Volt Cu 20 a 12 AWG Doble aislación (MICA+LSZH) UL 13 PLTC
Circuitos de instrumentación electrónica, señales digitales y analógicas (4-20mA). Circuitos de seguridad intrínseca.
Detección de pérdidas de gas y/o fluidos. Medición y monitoreo de presión, temperatura, volumen. Monitoreo de
señales de alarma. Uso adecuado para mantener la integridad eléctrica en presencia de fuego directo en servicios`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/2-RESISTENTE INCENDIOS/3-RESISTENTE INCENDIOS CORRUGADO (INTERLOCK)/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/2-RESISTENTE INCENDIOS/3-RESISTENTE INCENDIOS CORRUGADO (INTERLOCK)/FICHA TECNICA - REPETIR FOTO PORTADA.pdf',
    specs: ['300 Volt', '20 a 12 AWG'],
    characteristics: [
      'Temperatura máxima: 90°C',
      'Tensión nominal: 300 Volt',
      'Norma constructiva: UL 13 tipo PLTC\xa0 - UL 2250 tipo ITC',
      'Norma de conductores: ASTM B8 Clase B',
      'Conductor: Cobre electrolítico recocido en formación de 7 hilos',
      'Aislación: Encintado de MICA + LSZH-HFFR (Low Smoke Zero Halogen - Halogen Free Flame\xa0 Retardant)',
      'Paso del trenzado: 50mm (20 torsiones por metro)',
      'Blindaje: Cinta aluminio-poliéster más conductor de drenaje de cobre estañado',
      'Cubierta interna: LSZH-HFFR (Low Smoke Zero Halogen - Halogen Free Flame\xa0Retardant)',
      'Armadura: Fleje de aluminio, tipo interlock',
      'Cubierta: LSZH-HFFR (Low Smoke Zero Halogen - Halogen Free Flame\xa0Retardant), no propagante del',
      'incendio, resistente a la luz solar y los aceites',
      'Norma\xa0de fuego: UL 1685 – IEC 60332-3-24',
      'Norma de resistencia al fuego: IEC 60331-23 / IEC 60331-1/2 PH120',
      'Norma de ausencia de halógenos y gases corrosivos: IEC 60754-1/2',
      'Norma de transparencia de humos: IEC 61034-1/2',
      'Norma de toxicidad: NES 713 – CEI 20.37',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Comportamiento frente al agua: Apto AD7 (Inmersión ocasional en agua)',
      'Código NEC (NFPA 70): Art. 725 PLTC – Art. 727 ITC – Art. 800 CM – Art. 501 áreas clasificadas CL1 Div.2',
      'y Cl2 Div.2'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-instrumentacion-electronica-300-volts-300-volts',
    name: '300 Volts',
    categoryPath: ['Cables Industriales', 'Instrumentación Electrónica', '300 Volts'],
    description: 'Circuitos de instrumentación electrónica, señales digitales y analógicas (4-20mA). Circuitos de seguridad intrínseca.',
    detailedDescription: `300 Volt Cu 22 a 12 AWG PVC 105°C / PVC UL 13 PLTC
Circuitos de instrumentación electrónica, señales digitales y analógicas (4-20mA). Circuitos de seguridad intrínseca.
Detección de pérdidas de gas y/o fluidos. Medición y monitoreo de presión, temperatura, volumen. Monitoreo de
señales de alarma. Instalados en conduits, bandeja, escalera, al aire libre directo o bajo techo, enterrado en trinchera o
en ductos.`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/3-300 VOLTS/1-300 VOLTS/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/3-300 VOLTS/1-300 VOLTS/FICHA TECNICA - USAR FOTO DE PORTADA.pdf',
    specs: ['22 a 12 AWG', '300 Volt', '105°C'],
    characteristics: [
      'Temperatura máxima: 105°C',
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
      'Código NEC (NFPA 70): Art. 725 PLTC – Art. 727 ITC – Art. 800 CM – Art. 501 áreas clasificadas CL1 Div.2',
      'y Cl2 Div.2'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-instrumentacion-electronica-300-volts-300-volts-armado',
    name: '300 Volts Armado',
    categoryPath: ['Cables Industriales', 'Instrumentación Electrónica', '300 Volts'],
    description: '300 Volt Cu 22 a 12 AWG PVC 105°C / PVC UL 13 PLTC',
    detailedDescription: `Par, terna, cuadrete, multipar, multiterna Armados (SWA)
300 Volt Cu 22 a 12 AWG PVC 105°C / PVC UL 13 PLTC
Circuitos de instrumentación electrónica, señales digitales y analógicas (4-20mA). Circuitos de seguridad intrínseca.
Detección de pérdidas de gas y/o fluidos. Medición y monitoreo de presión, temperatura, volumen. Monitoreo de
señales de alarma. Instalados en bandeja, escalera, al aire libre directo o bajo techo, directamente enterrados o`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/3-300 VOLTS/2-300 VOLTS ARMADO/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/3-300 VOLTS/2-300 VOLTS ARMADO/FICHA TECNICA - REPETIR FOTO PORTADA.pdf',
    specs: ['22 a 12 AWG', '300 Volt', '105°C'],
    characteristics: [
      'Temperatura máxima: 105°C',
      'Tensión nominal: 300 Volt',
      'Norma constructiva: UL 13 tipo PLTC - UL 2250 tipo ITC',
      'Norma de conductores: ASTM B8 Clase B',
      'Conductor: Cobre electrolítico recocido en formación de 7 hilos',
      'Aislación: PVC',
      'Paso del trenzado: 50mm (20 torsiones por metro)',
      'Blindaje: Cinta aluminio-poliéster más conductor de drenaje de cobre estañado',
      'Cubierta interna: PVC',
      'Armadura: Corona helicoidal de alambres de acero cincado (galvanizado)',
      'Cubierta: PVC no propagante del incendio, resistente a la luz solar e hidrocarburos',
      'Norma de fuego: UL 1685',
      'Norma hidrocarburos: NFC 32-200 - ASTM D 1239',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Código NEC (NFPA 70): Art. 725 PLTC – Art. 727 ITC – Art. 800 CM – Art. 501 áreas clasificadas CL1 Div.2',
      'y Cl2 Div.2'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-instrumentacion-electronica-300-volts-300-volts-corrugado-interlock',
    name: '300 Volts Corrugado (interlock)',
    categoryPath: ['Cables Industriales', 'Instrumentación Electrónica', '300 Volts'],
    description: '300 Volt Cu 22 a 12 AWG PVC 105°C / PVC UL 13 PLTC',
    detailedDescription: `Par, terna, cuadrete, multipar, multiterna Armados (Interlock)
300 Volt Cu 22 a 12 AWG PVC 105°C / PVC UL 13 PLTC
Circuitos de instrumentación electrónica, señales digitales y analógicas (4-20mA). Circuitos de seguridad intrínseca.
Detección de pérdidas de gas y/o fluidos. Medición y monitoreo de presión, temperatura, volumen. Monitoreo de
señales de alarma. Instalados en bandeja, escalera, al aire libre directo o bajo techo, directamente enterrados o`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/3-300 VOLTS/3-300 VOLTS CORRUGADO (INTERLOCK)/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/3-300 VOLTS/3-300 VOLTS CORRUGADO (INTERLOCK)/FICHA TECNICA - REPETIR FOTO PORTADA.pdf',
    specs: ['22 a 12 AWG', '300 Volt', '105°C'],
    characteristics: [
      'Temperatura máxima: 105°C',
      'Tensión nominal: 300 Volt',
      'Norma constructiva: UL 13 tipo PLTC - UL 2250 tipo ITC',
      'Norma de conductores: ASTM B8 Clase B',
      'Conductor: Cobre electrolítico recocido en formación de 7 hilos',
      'Aislación: PVC',
      'Paso del trenzado: 50mm (20 torsiones por metro)',
      'Blindaje: Cinta aluminio-poliéster más conductor de drenaje de cobre estañado',
      'Cubierta interna: PVC',
      'Armadura: Armadura de interlock de aluminio',
      'Cubierta: PVC no propagante del incendio, resistente a la luz solar e hidrocarburos',
      'Norma de fuego: UL 1685',
      'Norma hidrocarburos: NFC 32-200 - ASTM D 1239',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Código NEC (NFPA 70): Art. 725 PLTC – Art. 727 ITC – Art. 800 CM – Art. 501 áreas clasificadas CL1 Div.2',
      'y Cl2 Div.2'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-instrumentacion-electronica-300-volts-300-volts-alarma-incendio',
    name: '300 Volts Alarma Incendio',
    categoryPath: ['Cables Industriales', 'Instrumentación Electrónica', '300 Volts'],
    description: 'Circuitos de instrumentación electrónica, señales digitales y analógicas (4-20mA). Especialmente diseñados para',
    detailedDescription: `300 Volt Cu 20 a 12 AWG PVC 105°C / PVC UL 1424 FPL
Circuitos de instrumentación electrónica, señales digitales y analógicas (4-20mA). Especialmente diseñados para
alarmas de aviso de detección de incendio. Instalados en conduits, bandeja, escalera, al aire libre directo o bajo techo,
enterrado en trinchera o en ductos.
No propagación de`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/3-300 VOLTS/4-300 VOLTS ALARMA INCENDIO/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/3-300 VOLTS/4-300 VOLTS ALARMA INCENDIO/FICHA TECNICA - USAR FOTO DE PORTADA.pdf',
    specs: ['105°C', '300 Volt', '20 a 12 AWG'],
    characteristics: [
      'Temperatura máxima: 105°C',
      'Tensión nominal: 300 Volt',
      'Norma constructiva: UL 1424 tipo FPL',
      'Norma de conductores: ASTM B8 Clase B',
      'Conductor: Cobre electrolítico recocido en formación de 7 hilos',
      'Aislación: PVC',
      'Paso del trenzado: 50mm (20 torsiones por metro)',
      'Par sin blindar: Encintado de poliéster',
      'Blindaje: Cinta aluminio-poliéster más conductor de drenaje de cobre estañado',
      'Cubierta: PVC, no propagante del incendio, resistente a la luz solar e hidrocarburos',
      'Norma de fuego: UL 1685',
      'Norma de hidrocarburos: NFC 32-200 – ASTM D 1239',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Código NEC (NFPA 70): Art. 760 FPL'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-instrumentacion-electronica-300-volts-300-volts-blindado',
    name: '300 Volts Blindado',
    categoryPath: ['Cables Industriales', 'Instrumentación Electrónica', '300 Volts'],
    description: 'Circuitos de instrumentación electrónica. Circuitos de seguridad intrínseca. Detección de pérdidas de gas y/o fluidos.',
    detailedDescription: `300 Volt Cu 20 a 14 AWG PVC 105°C / PVC UL 13 PLTC
Circuitos de instrumentación electrónica. Circuitos de seguridad intrínseca. Detección de pérdidas de gas y/o fluidos.
Medición y monitoreo de presión, temperatura, volumen. Monitoreo de señales de alarma. Instalados en conduits,
bandeja, escalera, al aire libre directo o bajo techo, enterrado en trinchera o en ductos.
No propagación de`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/3-300 VOLTS/5-300 VOLTS BLINDADO/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/3-300 VOLTS/5-300 VOLTS BLINDADO/FICHA TECNICA.pdf',
    specs: ['105°C', '300 Volt', '20 a 14 AWG'],
    characteristics: [
      'Temperatura máxima: 105°C',
      'Tensión nominal: 300 Volt',
      'Norma constructiva: UL 13 tipo PLTC - UL 2250 tipo ITC',
      'Norma de conductores: ASTM B8 Clase B',
      'Conductor: Cobre electrolítico recocido en formación de 7 hilos',
      'Aislación: PVC',
      'Ensamblado: Reunido de conductores formando coronas + encintado de poliéster',
      'Blindaje: Cinta aluminio-poliéster más conductor de drenaje de cobre estañado',
      'Cubierta: PVC no propagante del incendio, resistente a la luz solar e hidrocarburos',
      'Norma de fuego: UL 1685',
      'Norma de hidrocarburos: NFC 32-200 - ASTM D 1239',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Código NEC (NFPA 70): Art. 725 PLTC – Art. 727 ITC– Art. 501 áreas clasificadas CL1 Div.2 y Cl2 Div.2'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-instrumentacion-electronica-300-volts-300-volts-blindado-armado',
    name: '300 Volts Blindado Armado',
    categoryPath: ['Cables Industriales', 'Instrumentación Electrónica', '300 Volts'],
    description: '300 Volt Cu 20 a 14 AWG PVC 105°C / PVC UL 13 PLTC',
    detailedDescription: `Multipolares Blindados (SWA)
300 Volt Cu 20 a 14 AWG PVC 105°C / PVC UL 13 PLTC
Circuitos de instrumentación electrónica. Circuitos de seguridad intrínseca. Detección de pérdidas de gas y/o fluidos.
Medición y monitoreo de presión, temperatura, volumen. Monitoreo de señales de alarma. Instalados en bandeja,
escalera, al aire libre directo o bajo techo, directamente enterrados o enterrado en trinchera o en ductos.`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/3-300 VOLTS/6-300 VOLTS BLINDADO ARMADO/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/3-300 VOLTS/6-300 VOLTS BLINDADO ARMADO/FICHA TECNICA.pdf',
    specs: ['105°C', '300 Volt', '20 a 14 AWG'],
    characteristics: [
      'Temperatura máxima: 105°C',
      'Tensión nominal: 300 Volt',
      'Norma constructiva: UL 13 tipo PLTC - UL 2250 tipo ITC',
      'Norma de conductores: ASTM B8 Clase B',
      'Conductor: Cobre electrolítico recocido en formación de 7 hilos',
      'Aislación: PVC',
      'Ensamblado: Reunido de conductores formando coronas + encintado de poliéster',
      'Blindaje: Cinta aluminio-poliéster más conductor de drenaje de cobre estañado',
      'Cubierta interna: PVC',
      'Armadura: Corona helicoidal de alambres de acero cincado (galvanizado)',
      'Cubierta: PVC no propagante del incendio, resistente a la luz solar e hidrocarburos',
      'Norma de fuego: UL 1685',
      'Norma de hidrocarburos: NFC 32-200 - ASTM D 1239',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Código NEC (NFPA 70): Art. 725 PLTC – Art. 727 ITC– Art. 501 áreas clasificadas CL1 Div.2 y Cl2 Div.2'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-instrumentacion-electronica-300-volts-300-volts-blindado-interlock',
    name: '300 Volts Blindado Interlock',
    categoryPath: ['Cables Industriales', 'Instrumentación Electrónica', '300 Volts'],
    description: '300 Volt Cu 20 a 14 AWG PVC 105°C / PVC UL 13 PLTC',
    detailedDescription: `Multipolares Blindados (Interlock)
300 Volt Cu 20 a 14 AWG PVC 105°C / PVC UL 13 PLTC
Circuitos de instrumentación electrónica. Circuitos de seguridad intrínseca. Detección de pérdidas de gas y/o fluidos.
Medición y monitoreo de presión, temperatura, volumen. Monitoreo de señales de alarma. Instalados en bandeja,
escalera, al aire libre directo o bajo techo, directamente enterrados o enterrado en trinchera o en ductos.`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/3-300 VOLTS/7-300 VOLTS BLINDADO INTERLOCK/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/3-300 VOLTS/7-300 VOLTS BLINDADO INTERLOCK/FICHA TECNICA.pdf',
    specs: ['105°C', '300 Volt', '20 a 14 AWG'],
    characteristics: [
      'Temperatura máxima: 105°C',
      'Tensión nominal: 300 Volt',
      'Norma constructiva: UL 13 tipo PLTC - UL 2250 tipo ITC',
      'Norma de conductores: ASTM B8 Clase B',
      'Conductor: Cobre electrolítico recocido en formación de 7 hilos',
      'Aislación: PVC',
      'Ensamblado: Reunido de conductores formando coronas + encintado de poliéster',
      'Blindaje: Cinta aluminio-poliéster más conductor de drenaje de cobre estañado',
      'Cubierta interna: PVC',
      'Armadura: Fleje de aluminio, tipo interlock',
      'Cubierta: PVC no propagante del incendio, resistente a la luz solar e hidrocarburos',
      'Norma de fuego: UL 1685',
      'Norma de hidrocarburos: NFC 32-200 - ASTM D 1239',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Código NEC (NFPA 70): Art. 725 PLTC – Art. 727 ITC– Art. 501 áreas clasificadas CL1 Div.2 y Cl2 Div.2'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-instrumentacion-electronica-300-volts-300-volts-trabajos-pesados',
    name: '300 Volts Trabajos Pesados',
    categoryPath: ['Cables Industriales', 'Instrumentación Electrónica', '300 Volts'],
    description: 'Circuitos de instrumentación electrónica, señales digitales y analógicas (4-20mA). Uso en trabajo pesado (Heavy Duty)',
    detailedDescription: `300 Volt Cu 22 a 12 AWG XLPE 90°C / PUR UL 13
Circuitos de instrumentación electrónica, señales digitales y analógicas (4-20mA). Uso en trabajo pesado (Heavy Duty)
para Señales y comunicaciones en equipos de perforación, Pulling y Workover. Su material de cubierta le confiere
robustez para condiciones ambientales agresivas (Cambios bruscos de temperatura, sol, lluvia y viento) como
resistencia aumentada a su manipulación diaria (torceduras, impactos, abrasión).`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/3-300 VOLTS/8-300 VOLTS TRABAJOS PESADOS/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/3-300 VOLTS/8-300 VOLTS TRABAJOS PESADOS/FICHA TECNICA.pdf',
    specs: ['22 a 12 AWG', '90°C', '300 Volt'],
    characteristics: [
      'Temperatura máxima: 105°C',
      'Tensión nominal: 300 Volt',
      'Norma constructiva: UL 13',
      'Norma de conductores: ASTM B8 Clase B',
      'Conductor: Cobre electrolítico recocido en formación de 7 hilos',
      'Aislación: XLPE (Polietileno reticulado)',
      'Paso del trenzado: 50mm (20 torsiones por metro)',
      'Blindaje: Cinta aluminio-poliéster más conductor de drenaje de cobre estañado',
      'Cubierta: Poliuretano, no propagante de la llama, resistente a la luz solar, hidrocarburos y aceites',
      'Norma\xa0de fuego: FT1 – IEC 60332-1',
      'Norma de hidrocarburos: UIC 895 OR',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-instrumentacion-electronica-600-volts-600-volts',
    name: '600 Volts',
    categoryPath: ['Cables Industriales', 'Instrumentación Electrónica', '600 Volts'],
    description: 'Circuitos de instrumentación electrónica, señales digitales y analógicas (4-20mA). Circuitos de seguridad intrínseca.',
    detailedDescription: `600 Volt Cu 20 a 12 AWG PVC-Nylon 90°C / PVC ICEA S 73-532
Circuitos de instrumentación electrónica, señales digitales y analógicas (4-20mA). Circuitos de seguridad intrínseca.
Detección de pérdidas de gas y/o fluidos. Medición y monitoreo de presión, temperatura, volumen. Monitoreo de
señales de alarma. Instalados en conduits, bandeja, escalera, al aire libre directo o bajo techo, enterrado en trinchera o
en ductos.`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/4-600 VOLTS/1-600 VOLTS/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/4-600 VOLTS/1-600 VOLTS/FICHA TECNICA.pdf',
    specs: ['90°C', '600 Volt', '20 a 12 AWG'],
    characteristics: [
      'Temperatura máxima: 90°C',
      'Tensión nominal: 600 Volt',
      'Norma constructiva: ICEA S 73-532',
      'Norma de conductores: ASTM B8 Clase B',
      'Conductor: Cobre electrolítico recocido en formación de 7 hilos',
      'Aislación: PVC-Nylon',
      'Paso del trenzado: 50mm (20 torsiones por metro)',
      'Blindaje: Cinta aluminio-poliéster más conductor de drenaje de cobre estañado',
      'Cubierta: PVC, no propagante del incendio, resistente a la luz solar e hidrocarburos',
      'Norma de fuego: ICEA T 30-520',
      'Norma de hidrocarburos: NFC 32-200 – ASTM D 1239',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Código NEC (NFPA 70): Art. 336 TC –Art. 501 áreas clasificadas CL1 Div.2 y Cl2 Div.2'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-instrumentacion-electronica-600-volts-600-volts-armado',
    name: '600 Volts Armado',
    categoryPath: ['Cables Industriales', 'Instrumentación Electrónica', '600 Volts'],
    description: '600 Volt Cu 20 a 12 AWG PVC-Nylon 90°C / PVC ICEA S 73-532',
    detailedDescription: `Par, terna, cuadrete, multipar, multiterna Armados (SWA)
600 Volt Cu 20 a 12 AWG PVC-Nylon 90°C / PVC ICEA S 73-532
Circuitos de instrumentación electrónica, señales digitales y analógicas (4-20mA). Circuitos de seguridad intrínseca.
Detección de pérdidas de gas y/o fluidos. Medición y monitoreo de presión, temperatura, volumen. Monitoreo de
señales de alarma. Instalados en bandeja, escalera, al aire libre directo o bajo techo, directamente enterrados o`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/4-600 VOLTS/2-600 VOLTS ARMADO/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/4-600 VOLTS/2-600 VOLTS ARMADO/FICHA TECNICA - REPETIR FOTO PORTADA.pdf',
    specs: ['90°C', '600 Volt', '20 a 12 AWG'],
    characteristics: [
      'Temperatura máxima: 90°C',
      'Tensión nominal: 600 Volt',
      'Norma constructiva: ICEA S 73-532',
      'Norma de conductores: ASTM B8 Clase B',
      'Conductor: Cobre electrolítico recocido en formación de 7 hilos',
      'Aislación: PVC-Nylon',
      'Paso del trenzado: 50mm (20 torsiones por metro)',
      'Blindaje: Cinta aluminio-poliéster más conductor de drenaje de cobre estañado',
      'Cubierta interna: PVC',
      'Armadura: Corona helicoidal de alambres de acero cincado (galvanizado)',
      'Cubierta: PVC no propagante del incendio, resistente a la luz solar e hidrocarburos',
      'Norma de fuego: ICEA T 30-520',
      'Norma de hidrocarburos: NFC 32-200 – ASTM D 1239',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Código NEC (NFPA 70): Art. 336 TC –Art. 501 áreas clasificadas CL1 Div.2 y Cl2 Div.2'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-instrumentacion-electronica-600-volts-600-volts-corrugado-interlock',
    name: '600 Volts Corrugado (interlock)',
    categoryPath: ['Cables Industriales', 'Instrumentación Electrónica', '600 Volts'],
    description: '600 Volt Cu 20 a 12 AWG PVC-Nylon 90°C / PVC ICEA S 73-532',
    detailedDescription: `Par, terna, cuadrete, multipar, multiterna Armados (Interlock)
600 Volt Cu 20 a 12 AWG PVC-Nylon 90°C / PVC ICEA S 73-532
Circuitos de instrumentación electrónica, señales digitales y analógicas (4-20mA). Circuitos de seguridad intrínseca.
Detección de pérdidas de gas y/o fluidos. Medición y monitoreo de presión, temperatura, volumen. Monitoreo de
señales de alarma. Instalados en bandeja, escalera, al aire libre directo o bajo techo, directamente enterrados o`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/4-600 VOLTS/3 -600 VOLTS CORRUGADO (INTERLOCK)/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/1- INSTRUMENTACIÓN ELECTRONICA/4-600 VOLTS/3 -600 VOLTS CORRUGADO (INTERLOCK)/FICHA TECNICA - REPETIR FOTO PORTADA.pdf',
    specs: ['90°C', '600 Volt', '20 a 12 AWG'],
    characteristics: [
      'Temperatura máxima: 90°C',
      'Tensión nominal: 600 Volt',
      'Norma constructiva: ICEA S 73-532',
      'Norma de conductores: ASTM B8 Clase B',
      'Conductor: Cobre electrolítico recocido en formación de 7 hilos',
      'Aislación: PVC-Nylon',
      'Paso del trenzado: 50mm (20 torsiones por metro)',
      'Blindaje: Cinta aluminio-poliéster más conductor de drenaje de cobre estañado',
      'Cubierta interna: PVC',
      'Armadura: Fleje de aluminio, tipo interlock',
      'Cubierta: PVC no propagante del incendio, resistente a la luz solar e hidrocarburos',
      'Norma de fuego: ICEA T 30-520',
      'Norma de hidrocarburos: NFC 32-200 – ASTM D 1239',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Código NEC (NFPA 70): Art. 336 TC –Art. 501 áreas clasificadas CL1 Div.2 y Cl2 Div.2'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-automatizacion-sistemas-rs-485-24-awg',
    name: 'RS 485 24 AWG',
    categoryPath: ['Cables Industriales', 'Automatización', 'Sistemas'],
    description: 'Aplicaciones en circuitos de distribución de buses de campo para sistemas informáticos RS 485. Este sistema permite',
    detailedDescription: `300 Volt Cu 24 AWG UL 13 Sistema RS 485
Aplicaciones en circuitos de distribución de buses de campo para sistemas informáticos RS 485. Este sistema permite
una red de nodos múltiples comunicada con un cable a pares que ofrece: comunicación bidireccional, gran longitud
del cable de interconexión y alta velocidad de transmisión de datos. Instalados en conduits, bandeja, escalera, al aire
libre directo o bajo techo, enterrado en trinchera o en ductos.`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/2-AUTOMATIZACIÓN/1-SISTEMAS/1-RS 485 24 AWG/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/2-AUTOMATIZACIÓN/1-SISTEMAS/1-RS 485 24 AWG/FICHA TECNICA RS 485 24 AWG.pdf',
    specs: ['300 Volt'],
    characteristics: [
      'Temperatura máxima: 75°C',
      'Tensión nominal: 300 Volt',
      'Norma constructiva: UL13',
      'Norma de conductores: ASTM B8 Clase B',
      'Conductor: Cobre electrolítico recocido estañado en formación de 7 hilos',
      'Aislación: Compuesto termoplástico',
      'Paso de trenzado: 50mm (20 torsiones por metro)',
      'Blindaje: Cinta aluminio-poliéster (Cobertura 100%) más trenza de alambres de cobre estañado (Cobertura',
      'Cubierta: PVC no propagante del incendio, resistente a la luz solar e hidrocarburos',
      'Norma de fuego: UL 1685',
      'Norma hidrocarburos: NFC 32-200 – ASTM D 1239',
      'Norma de aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Código NEC (NFPA 70): Art. 725 PLTC – Art. 727 ITC – Art. 800 CM – Art. 501 áreas clasificadas CL1 Div.2',
      'y Cl2 Div.2',
      'Conexión: La máxima longitud del RS 485 es de 1200 metros sin el uso de amplificadores, para distancias',
      'mayores se debe utilizar equipamiento para regenerar y amplificar la señal. El RS 485 es un bus serie, por',
      'lo tanto, no permite la instalación de los equipos en estrella o anillo. Se recomienda evitar el paso de',
      'estos cables cerca de cables y equipos de potencia, estos producen inducciones electromagnéticas que',
      'pueden provocar el mal funcionamiento del sistema.'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-automatizacion-sistemas-rs-485-22-awg',
    name: 'RS 485 22 AWG',
    categoryPath: ['Cables Industriales', 'Automatización', 'Sistemas'],
    description: 'Aplicaciones en circuitos de distribución de buses de campo para sistemas informáticos RS 485. Este sistema permite',
    detailedDescription: `300 Volt Cu 22 AWG UL 13 Sistema RS 485
Aplicaciones en circuitos de distribución de buses de campo para sistemas informáticos RS 485. Este sistema permite
una red de nodos múltiples comunicada con un cable a pares que ofrece: comunicación bidireccional, gran longitud
del cable de interconexión y alta velocidad de transmisión de datos. Instalados en conduits, bandeja, escalera, al aire
libre directo o bajo techo, enterrado en trinchera o en ductos.`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/2-AUTOMATIZACIÓN/1-SISTEMAS/2-RS 485 22 AWG/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/2-AUTOMATIZACIÓN/1-SISTEMAS/2-RS 485 22 AWG/FICHA TECNICA RS 485 22 AWG.pdf',
    specs: ['300 Volt'],
    characteristics: [
      'Temperatura máxima: 75°C',
      'Tensión nominal: 300 Volt',
      'Norma constructiva: UL 13 tipo PLTC',
      'Norma de conductores: ASTM B8 Clase B',
      'Conductor: Cobre electrolítico recocido estañado en formación de 7 hilos',
      'Aislación: Compuesto termoplástico',
      'Paso de trenzado: 50mm (20 torsiones por metro)',
      'Blindaje: Cinta aluminio-poliéster (Cobertura 100%) más trenza de alambres de cobre estañado (Cobertura',
      'Cubierta: PVC no propagante del incendio, resistente a la luz solar e hidrocarburos',
      'Norma de fuego: UL 1685',
      'Norma hidrocarburos: NFC 32-200 – ASTM D 1239',
      'Norma de aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Código NEC (NFPA 70): Art. 725 PLTC – Art. 727 ITC – Art. 800 CM – Art. 501 áreas clasificadas CL1 Div.2',
      'y Cl2 Div.2',
      'Conexión: La máxima longitud del RS 485 es de 1200 metros sin el uso de amplificadores, para distancias',
      'mayores se debe utilizar equipamiento para regenerar y amplificar la señal. El RS 485 es un bus serie, por',
      'lo tanto, no permite la instalación de los equipos en estrella o anillo. Se recomienda evitar el paso de',
      'estos cables cerca de cables y equipos de potencia, estos producen inducciones electromagnéticas que',
      'pueden provocar el mal funcionamiento del sistema.'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-automatizacion-sistemas-rs-485-armado-24-awg',
    name: 'RS 485 Armado 24 AWG',
    categoryPath: ['Cables Industriales', 'Automatización', 'Sistemas'],
    description: '300 Volt Cu 24 AWG UL 13 Sistema RS 485',
    detailedDescription: `Par y Multipares Blindados
300 Volt Cu 24 AWG UL 13 Sistema RS 485
Aplicaciones en circuitos de distribución de buses de campo para sistemas informáticos RS 485. Este sistema permite
una red de nodos múltiples comunicada con un cable a pares que ofrece: comunicación bidireccional, gran longitud
del cable de interconexión y alta velocidad de transmisión de datos. Instalados en conduits, bandeja, escalera, al aire`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/2-AUTOMATIZACIÓN/1-SISTEMAS/3- RS 485 ARMADO 24 AWG/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/2-AUTOMATIZACIÓN/1-SISTEMAS/3- RS 485 ARMADO 24 AWG/FICHA TECNICA RS 485 24 AWG ARMADO.pdf',
    specs: ['300 Volt'],
    characteristics: [
      'Temperatura máxima: 75°C',
      'Tensión nominal: 300 Volt',
      'Norma constructiva: UL13',
      'Norma de conductores: ASTM B8 Clase B',
      'Conductor: Cobre electrolítico recocido estañado en formación de 7 hilos',
      'Aislación: Compuesto termoplástico',
      'Paso de trenzado: 50mm (20 torsiones por metro)',
      'Blindaje: Cinta aluminio-poliéster (Cobertura 100%) más trenza de alambres de cobre estañado (Cobertura',
      'Armadura: Corona helicoidal de alambres de acero cincado (Galvanizado)',
      'Cubierta: PVC no propagante del incendio, resistente a la luz solar e hidrocarburos',
      'Norma de fuego: UL 1685',
      'Norma hidrocarburos: NFC 32-200 – ASTM D 1239',
      'Norma de aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Código NEC (NFPA 70): Art. 725 PLTC – Art. 727 ITC – Art. 800 CM – Art. 501 áreas clasificadas CL1 Div.2',
      'y Cl2 Div.2',
      'Conexión: La máxima longitud del RS 485 es de 1200 metros sin el uso de amplificadores, para distancias',
      'mayores se debe utilizar equipamiento para regenerar y amplificar la señal. El RS 485 es un bus serie, por',
      'lo tanto, no permite la instalación de los equipos en estrella o anillo. Se recomienda evitar el paso de',
      'estos cables cerca de cables y equipos de potencia, estos producen inducciones electromagnéticas que',
      'pueden provocar el mal funcionamiento del sistema.'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-automatizacion-sistemas-rs-485-armado-22-awg',
    name: 'RS 485 Armado 22 AWG',
    categoryPath: ['Cables Industriales', 'Automatización', 'Sistemas'],
    description: '300 Volt Cu 22 AWG UL 13 Sistema RS 485',
    detailedDescription: `Par y Multipares Blindados
300 Volt Cu 22 AWG UL 13 Sistema RS 485
Aplicaciones en circuitos de distribución de buses de campo para sistemas informáticos RS 485. Este sistema permite
una red de nodos múltiples comunicada con un cable a pares que ofrece: comunicación bidireccional, gran longitud
del cable de interconexión y alta velocidad de transmisión de datos. Instalados en conduits, bandeja, escalera, al aire`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/2-AUTOMATIZACIÓN/1-SISTEMAS/4-RS 485 ARMADO 22 AWG/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/2-AUTOMATIZACIÓN/1-SISTEMAS/4-RS 485 ARMADO 22 AWG/FICHA TECNICA RS 485 22 AWG ARMADO.pdf',
    specs: ['300 Volt'],
    characteristics: [
      'Temperatura máxima: 75°C',
      'Tensión nominal: 300 Volt',
      'Norma constructiva: UL 13 tipo PLTC',
      'Norma de conductores: ASTM B8 Clase B',
      'Conductor: Cobre electrolítico recocido estañado en formación de 7 hilos',
      'Aislación: Compuesto termoplástico',
      'Paso de trenzado: 50mm (20 torsiones por metro)',
      'Blindaje: Cinta aluminio-poliéster (Cobertura 100%) más trenza de alambres de cobre estañado (Cobertura',
      'Armadura: Corona helicoidal de alambres de acero cincado (Galvanizado)',
      'Cubierta: PVC no propagante del incendio, resistente a la luz solar e hidrocarburos',
      'Norma de fuego: UL 1685',
      'Norma hidrocarburos: NFC 32-200 – ASTM D 1239',
      'Norma de aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Código NEC (NFPA 70): Art. 725 PLTC – Art. 727 ITC – Art. 800 CM – Art. 501 áreas clasificadas CL1 Div.2',
      'y Cl2 Div.2',
      'Conexión: La máxima longitud del RS 485 es de 1200 metros sin el uso de amplificadores, para distancias',
      'mayores se debe utilizar equipamiento para regenerar y amplificar la señal. El RS 485 es un bus serie, por',
      'lo tanto, no permite la instalación de los equipos en estrella o anillo. Se recomienda evitar el paso de',
      'estos cables cerca de cables y equipos de potencia, estos producen inducciones electromagnéticas que',
      'pueden provocar el mal funcionamiento del sistema.'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-automatizacion-datos-profibus',
    name: 'Profibus',
    categoryPath: ['Cables Industriales', 'Automatización', 'Datos'],
    description: 'Par balanceado para bus de datos sistema Profibus. Instalados en conduits, bandeja, escalera, al aire libre directo o',
    detailedDescription: `300 Volt Cu 22 a 18 AWG UL 13 PLTC PROFIBUS
Par balanceado para bus de datos sistema Profibus. Instalados en conduits, bandeja, escalera, al aire libre directo o
bajo techo, enterrado en trinchera o en ductos.
Protección
interferencias`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/2-AUTOMATIZACIÓN/2-DATOS/1-PROFIBUS/PORTADA.jpeg',
    gallery: ['/images/PRODUCTOS/5-CABLES INDUSTRIALES/2-AUTOMATIZACIÓN/2-DATOS/1-PROFIBUS/VARIANTE ARMADO.jpeg', '/images/PRODUCTOS/5-CABLES INDUSTRIALES/2-AUTOMATIZACIÓN/2-DATOS/1-PROFIBUS/VARIANTE LSOH.jpg'],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/2-AUTOMATIZACIÓN/2-DATOS/1-PROFIBUS/FICHA TECNICA PROFIBUS (PONER TAMBIEN FOTO ARMADO Y LSOH).pdf',
    specs: ['300 Volt', '22 a 18 AWG'],
    characteristics: [
      'Temperatura máxima: 75°C',
      'Tensión nominal: 300 Volt',
      'Norma constructiva: UL 13 tipo PLTC',
      'Norma de conductores: ASTM B8',
      'Conductor: Alambre único de cobre electrolítico recocido',
      'Aislación: Compuesto termoplástico espumado',
      'Pazo del trenzado: 50mm (20 torsiones por metro)',
      'Blindaje: Cinta aluminio-poliéster (Cobertura 100%) más trenza de alambres de cobre estañado (Cobertura',
      'Cubierta: PVC no propagante del incendio, resistente a la luz solar e hidrocarburos',
      'Norma de fuego: UL 1685',
      'Norma hidrocarburos: NFC 32-200 – ASTM D 1239',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Código NEC (NFPA 70): Art. 725 PLTC – Art. 727 ITC – Art. 800 CM – Art. 501 áreas clasificadas CL1 Div.2',
      'y Cl2 Div.2'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-automatizacion-datos-fieldbus',
    name: 'Fieldbus',
    categoryPath: ['Cables Industriales', 'Automatización', 'Datos'],
    description: 'Par balanceado para bus de datos sistema Fieldbus. Instalados en conduits, bandeja, escalera, al aire libre directo o',
    detailedDescription: `300 Volt Cu 18 a 16 AWG UL 13 PLTC FIELDBUS
Par balanceado para bus de datos sistema Fieldbus. Instalados en conduits, bandeja, escalera, al aire libre directo o
bajo techo, enterrado en trinchera o en ductos.
Protección
interferencias`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/2-AUTOMATIZACIÓN/2-DATOS/2-FIELDBUS/PORTADA.jpeg',
    gallery: ['/images/PRODUCTOS/5-CABLES INDUSTRIALES/2-AUTOMATIZACIÓN/2-DATOS/2-FIELDBUS/VARIANTE ARMADO.jpg', '/images/PRODUCTOS/5-CABLES INDUSTRIALES/2-AUTOMATIZACIÓN/2-DATOS/2-FIELDBUS/VARIANTE LSOH.jpeg'],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/2-AUTOMATIZACIÓN/2-DATOS/2-FIELDBUS/FICHA TECNICA FIELDBUS (PONER TAMBIEN FOTO ARMADO Y LSOH).pdf',
    specs: ['18 a 16 AWG', '300 Volt'],
    characteristics: [
      'Temperatura máxima: 105°C',
      'Tensión nominal: 300 Volt',
      'Norma constructiva: UL 13 tipo PLTC',
      'Norma de conductores: ASTM B8 Clase B',
      'Conductor: Cobre electrolítico estañado en formación de 7 hilos',
      'Aislación: XLPE (Polietileno reticulado)',
      'Pazo del trenzado: 50mm (20 torsiones por metro)',
      'Blindaje: Cinta aluminio-poliéster (Cobertura 100%) más drenaje de cobre estañado',
      'Cubierta: PVC no propagante del incendio, resistente a la luz solar e hidrocarburos',
      'Norma de fuego: UL 1685',
      'Norma hidrocarburos: NFC 32-200 – ASTM D 1239',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Código NEC (NFPA 70): Art. 725 PLTC – Art. 727 ITC – Art. 800 CM – Art. 501 áreas clasificadas CL1 Div.2',
      'y Cl2 Div.2'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-automatizacion-datos-fieldbus-2079',
    name: 'Fieldbus 2079',
    categoryPath: ['Cables Industriales', 'Automatización', 'Datos'],
    description: 'Par balanceado para bus de datos sistema Fieldbus. Instalados en conduits, bandeja, escalera, al aire libre directo o',
    detailedDescription: `300 Volt Cu 22 AWG UL 13 PLTC FIELDBUS
Par balanceado para bus de datos sistema Fieldbus. Instalados en conduits, bandeja, escalera, al aire libre directo o
bajo techo, enterrado en trinchera o en ductos.
Protección
interferencias`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/2-AUTOMATIZACIÓN/2-DATOS/3-FIELDBUS 2079/PORTADA.jpeg',
    gallery: ['/images/PRODUCTOS/5-CABLES INDUSTRIALES/2-AUTOMATIZACIÓN/2-DATOS/3-FIELDBUS 2079/VARIANTE ARMADO.jpg'],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/2-AUTOMATIZACIÓN/2-DATOS/3-FIELDBUS 2079/FICHA TECNICA FIELDBUS 2079 (PONER TAMBIEN VARIANTE ARMADO).pdf',
    specs: ['300 Volt'],
    characteristics: [
      'Temperatura máxima: 75°C',
      'Tensión nominal: 300 Volt',
      'Norma constructiva: UL 13 tipo PLTC',
      'Norma de conductores: ASTM B8 Clase B',
      'Conductor: Cobre electrolítico estañado en formación de 7 hilos',
      'Aislación: Compuesto termoplástico espumado',
      'Pazo del trenzado: 50mm (20 torsiones por metro)',
      'Blindaje: Cinta aluminio-poliéster (Cobertura 100%) más drenaje de cobre estañado',
      'Cubierta: PVC no propagante del incendio, resistente a la luz solar e hidrocarburos',
      'Norma de fuego: UL 1685',
      'Norma hidrocarburos: NFC 32-200 – ASTM D 1239',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Código NEC (NFPA 70): Art. 725 PLTC – Art. 727 ITC – Art. 800 CM – Art. 501 áreas clasificadas CL1 Div.2',
      'y Cl2 Div.2'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-cable-comando-multipolar-multipolar-mm2-pvc-hasta-48-conductores',
    name: 'PVC - Hasta 48 Conductores',
    categoryPath: ['Cables Industriales', 'Cable Comando', 'Multipolar', 'Multipolar mm²'],
    description: 'Equipos de control, señalización, medición, protección y comandos eléctricos de instalaciones industriales.',
    detailedDescription: `0.6/1kV Cu flexible 1 a 4mm² Hasta 48 conductores PVC 70°C / PVC
Equipos de control, señalización, medición, protección y comandos eléctricos de instalaciones industriales.
Instalaciones aéreas en bandeja, canaletas o conductos, enterrados en ductos o directamente enterrados.
No propagación de
incendio`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/1-MULTIPOLAR/1-MULTIPOLAR MM2/1-PVC - HASTA 48 CONDUCTORES/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/1-MULTIPOLAR/1-MULTIPOLAR MM2/1-PVC - HASTA 48 CONDUCTORES/FICHA TECNICA.pdf',
    specs: ['1kV', '70°C', '1 a 4mm²'],
    characteristics: [
      'Temperaturas: 70°C máxima de servicio – 160°C de cortocircuito',
      'Tensión nominal: 600/1000 Volt CA – 1200 Volt CA (Máximo) – 1500 Volt CC',
      'Norma constructiva: IRAM 2178-1 – IEC 60502-1',
      'Norma de conductores: IRAM NM 280 – IEC 60228',
      'Conductor: Cobre electrolítico recocido en formación flexible clase 5',
      'Aislación: PVC',
      'Cubierta: PVC no propagante del incendio',
      'Norma de fuego: IEC 60332-3-24'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-cable-comando-multipolar-multipolar-mm2-xlpe-hasta-48-conductores',
    name: 'XLPE - Hasta 48 Conductores',
    categoryPath: ['Cables Industriales', 'Cable Comando', 'Multipolar', 'Multipolar mm²'],
    description: 'Equipos de control, señalización, medición, protección y comandos eléctricos de instalaciones industriales.',
    detailedDescription: `0.6/1kV Cu flexible 1 a 4mm² Hasta 48 conductores XLPE 90°C / PVC
Equipos de control, señalización, medición, protección y comandos eléctricos de instalaciones industriales.
Instalaciones aéreas en bandeja, canaletas o conductos, bajo techo o a la intemperie, enterrados en ductos o
directamente enterrados.
No propagación de`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/1-MULTIPOLAR/1-MULTIPOLAR MM2/2-XLPE - HASTA 48 CONDUCTORES/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/1-MULTIPOLAR/1-MULTIPOLAR MM2/2-XLPE - HASTA 48 CONDUCTORES/FICHA TECNICA.pdf',
    specs: ['1kV', '90°C', '1 a 4mm²'],
    characteristics: [
      'Temperatura máxima: 90°C máxima de servicio – 130°C de sobrecarga – 250°C de cortocircuito',
      'Tensión nominal: 600/1000 Volt CA, 1200 Volt CA (Máximo) / 1500 Volt CC',
      'Norma constructiva: IRAM 2178-1 – IEC 60502-1',
      'Norma de conductores: IRAM NM 280 – IEC 60228',
      'Conductor: Cobre electrolítico recocido en formación flexible clase 5',
      'Aislación: XLPE (Polietileno reticulado)',
      'Cubierta: PVC, no propagante del incendio, resistente a la luz solar y los aceites',
      'Norma de fuego: IEC 60332-1',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-cable-comando-multipolar-multipolar-mm2-corrugado-proteccion-interferencias',
    name: 'Corrugado - Proteccion Interferencias',
    categoryPath: ['Cables Industriales', 'Cable Comando', 'Multipolar', 'Multipolar mm²'],
    description: '0.6/1kV Cu flexible 1 a 4mm² XLPE 90°C / LSZH Protección electromagnética',
    detailedDescription: `Multipolar
0.6/1kV Cu flexible 1 a 4mm² XLPE 90°C / LSZH Protección electromagnética
Equipos de control, señalización, medición, protección y comandos eléctricos en subestaciones de alta tensión
(SSEE), su blindaje permite el adecuado filtrado de interferencias electromagnéticas a frecuencias hasta 1 MHz. Uso
en ambientes cerrados y en salas de control con equipamiento electrónico sensible ante la exposición de gases`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/1-MULTIPOLAR/1-MULTIPOLAR MM2/3-CORRUGADO - PROTECCION INTERFERENCIAS/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/1-MULTIPOLAR/1-MULTIPOLAR MM2/3-CORRUGADO - PROTECCION INTERFERENCIAS/FICHA TECNICA.pdf',
    specs: ['1kV', '90°C', '1 a 4mm²'],
    characteristics: [
      'Temperatura máxima: 90°C máxima de servicio – 130°C de sobrecarga – 250°C de cortocircuito',
      'Tensión nominal: 600/1000 Volt CA – 1200 Volt CA (Máximo) – 1500 Volt CC',
      'Norma constructiva: IRAM 2178-1 – IEC 60502-1',
      'Norma de conductores: IRAM NM 280 – IEC 60228',
      'Conductor: Cobre electrolítico recocido en formación flexible clase 5',
      'Aislación: XLPE (Polietileno reticulado)',
      'Asiento de blindaje: LSZH-HFFR (Low Smoke Zero Halogen - Halogen Free Flame Retardant) No',
      'propagante del incendio',
      'Blindaje: Cinta longitudinal corrugada de cobre recocido con solape adecuado y una sección mínima de',
      '10mm² (Re < 2 ohm/km)',
      'Cubierta: LSZH-HFFR (Low Smoke Zero Halogen - Halogen Free Flame Retardant) no propagante del',
      'incendio, resistente a la luz solar y los aceites',
      'Norma de fuego: IEC 60332-3-24',
      'Norma de EMC: IRAM 63020 – HN 33-S-34, impedancia de transferencia (Zt) menor a 2 ohm/km hasta',
      'frecuencias de 1MHz.',
      'Norma de ausencia de halógenos y gases corrosivos: IEC 60754-1/2',
      'Norma de transparencia de humos: IEC 61034-1/2',
      'Norma de toxicidad: NES 713 – CEI 20.37',
      'Norma de aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Comportanmiento frente al agua: Apto AD7 (Inmersión ocasional en agua)'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-cable-comando-multipolar-multipolar-mm2-resistente-a-hidrocarburos',
    name: 'Resistente a Hidrocarburos',
    categoryPath: ['Cables Industriales', 'Cable Comando', 'Multipolar', 'Multipolar mm²'],
    description: 'Equipos de control, señalización, protección y comandos eléctricos en la industria Petrolera (Midstream y',
    detailedDescription: `0.6/1kV Cu flexible 1 a 4mm² XLPE 90°C PVC Resistente HC y UV
Equipos de control, señalización, protección y comandos eléctricos en la industria Petrolera (Midstream y
Downstream). Instalaciones aéreas en bandeja, canaletas o conductos, bajo techo o a la intemperie, enterrados en
ductos o directamente enterrados.
No propagación de`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/1-MULTIPOLAR/1-MULTIPOLAR MM2/4-RESISTENTE A HIDROCARBUROS/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/1-MULTIPOLAR/1-MULTIPOLAR MM2/4-RESISTENTE A HIDROCARBUROS/FICHA TECNICA (AGREGAR VARIANTES_ MULTIPOLAR_ARMADO_FLEJE_FLEJE COBRE).pdf',
    specs: ['1kV', '90°C', '1 a 4mm²'],
    characteristics: [
      'Temperaturas: 90°C máxima de servicio – 130°C de sobrecarga – 250°C de cortocircuito',
      'Temperatura mínima: Apto para su funcionamiento en instalaciones a -30°C',
      'Tensión nominal: 600/1000 Volt CA – 1200 Volt CA (Máximo) – 1500 Volt CC',
      'Norma constructiva: IEC 60502-1 – IRAM 2178-1',
      'Norma de conductores: IRAM NM 280 – IEC 60228',
      'Conductor: Cobre electrolítico recocido en formación flexible clase 5',
      'Aislación: XLPE (Polietileno reticulado)',
      'Cubierta: PVC no propagante del incendio, resistente aumentada a hidrocarburos, rayos ultravioletas y',
      'bajas temperaturas, con baja emisión de ácido clorhídrico (HCl)',
      'Norma de fuego: IEC 60332-3-24',
      'Norma de resistencia a hidrocarburos: UIC 895 OR (Aceite y Gas Oil)',
      'Norma de intemperismo: UL 2556 (Resistencia a rayos UV)',
      'Norma de emisión de Halógenos: IEC 60754-1 (Emisión de HCl < 15%)'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-cable-comando-multipolar-multipolar-mm2-epr',
    name: 'EPR',
    categoryPath: ['Cables Industriales', 'Cable Comando', 'Multipolar', 'Multipolar mm²'],
    description: 'Equipos de control, señalización, medición, protección y comandos eléctricos de instalaciones industriales. Cables',
    detailedDescription: `0.6/1kV Cu flexible 1 a 4mm² Hasta 48 conductores EPR 90°C / PUR
Equipos de control, señalización, medición, protección y comandos eléctricos de instalaciones industriales. Cables
requeridos para uso industrial pesado (Heavy Duty). Los materiales utilizados en su fabricación combinan una elevada
resistencia y flexibilidad y le proporcionan una protección adecuada ante productos químicos, entorno hostil,
desgarros e impactos.`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/1-MULTIPOLAR/1-MULTIPOLAR MM2/5-EPR/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/1-MULTIPOLAR/1-MULTIPOLAR MM2/5-EPR/FICHA TECNICA.pdf',
    specs: ['1kV', '90°C', '1 a 4mm²'],
    characteristics: [
      'Temperatura máxima de operación: 90°C en instalación fija / 60°C para uso móvil y flexiones ocasionales',
      'Temperatura mínima ambiente: -40°C en instalación fija / -25°C para flexiones ocasionales',
      'Tensión nominal: 600/1000 Volt CA, 1200 Volt CA (Máximo) / 1500 Volt CC',
      'Norma constructiva: IRAM 2178-1 – IEC 60502-1',
      'Norma de conductores: IRAM NM 280 – IEC 60228',
      'Conductor: Cobre electrolítico recocido en formación flexible clase 5',
      'Aislación: EPR',
      'Cubierta: Poliuretano, resistente a la luz solar y los aceites',
      'Ensayo de flexión: NM 247-2 aumentado a 150000 ciclos dobles de flexión',
      'Norma\xa0de fuego: IEC 60332-1',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Norma de resistencia a hidrocarburos: UIC 895 OR (aceite, gas oil y fuel oil) / UL 13 (aceite) / UL 83 (Fuel C:',
      'tolueno e isoctano)'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-cable-comando-multipolar-multipolar-awg-600-volts-14-10-awg',
    name: '600 Volts - 14-10 AWG',
    categoryPath: ['Cables Industriales', 'Cable Comando', 'Multipolar', 'Multipolar AWG'],
    description: 'Equipos de control, señalización, medición, protección y comandos eléctricos de instalaciones industriales.',
    detailedDescription: `600 Volt Cu 14 a 10 AWG XHHW-2 UL 1277
Equipos de control, señalización, medición, protección y comandos eléctricos de instalaciones industriales.
Instalaciones aéreas en bandeja, canaletas o conductos, bajo techo o a la intemperie, enterrados en ductos o
directamente enterrados. Cables elaborados para cumplir los requerimientos del código eléctrico Nacional ANSI/NFPA
70 de EEUU y el código eléctrico nacional NOM-001 SEDE de México.`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/1-MULTIPOLAR/2-MULTIPOLAR AWG/1-600 VOLTS - 14-10 AWG/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/1-MULTIPOLAR/2-MULTIPOLAR AWG/1-600 VOLTS - 14-10 AWG/FICHA TECNICA (AGREGAR EN VARIANTES_ DOBLE AISLACION).pdf',
    specs: ['600 Volt', '14 a 10 AWG'],
    characteristics: [
      'Temperatura máxima: 90°C máxima de servicio – 130°C de sobrecarga – 250°C de cortocircuito',
      'Tensión nominal: 600 Volt C.A.',
      'Norma constructiva: UL 1277',
      'Norma de conductores: ASTM B8',
      'Conductor: Cobre electrolítico recocido en formación clase B',
      'Aislación: XLPE (polietileno reticulado) tipo XHHW-2',
      'Cubierta: PVC, no propagante del incendio',
      'Norma de fuego: UL 1685',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Código NEC (NFPA 70):: Art. 336 TC –Art. 501 áreas clasificadas CL1 Div.2 y Cl2 Div.2'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-cable-comando-multipolar-multipolar-awg-600-volts-16-10-awg-pvc',
    name: '600 Volts 16 - 10 AWG PVC',
    categoryPath: ['Cables Industriales', 'Cable Comando', 'Multipolar', 'Multipolar AWG'],
    description: 'Equipos de control, señalización, medición, protección y comandos eléctricos de instalaciones industriales.',
    detailedDescription: `600 Volt Cu 16 a 10 AWG PVC 75°C ICEA S 73-532
Equipos de control, señalización, medición, protección y comandos eléctricos de instalaciones industriales.
Instalaciones aéreas en bandeja, canaletas o conductos, bajo techo o a la intemperie, enterrados en ductos o
directamente enterrados.
No propagación de`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/1-MULTIPOLAR/2-MULTIPOLAR AWG/2-600 Volts 16 - 10 AWG PVC/PORTADA.jpeg',
    gallery: ['/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/1-MULTIPOLAR/2-MULTIPOLAR AWG/2-600 Volts 16 - 10 AWG PVC/FOTO DENTRO FICHA TECNICA.jpeg'],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/1-MULTIPOLAR/2-MULTIPOLAR AWG/2-600 Volts 16 - 10 AWG PVC/FICHA TECNICA (AGREGAR EN VARIANTES_ ARMADO_FLEJE_FLEJE COBRE).pdf',
    specs: ['16 a 10 AWG', '600 Volt', '75°C'],
    characteristics: [
      'Temperatura máxima: 75ºC de servicio, 160ºC de cortocircuito',
      'Tensión nominal: 600 Volt CA',
      'Norma constructiva: ICEA S 73-532',
      'Norma de conductores: Serie ASTM B174',
      'Conductor: Cobre electrolítico recocido en formación flexible',
      'Aislación: PVC',
      'Cubierta: PVC no propagante del incendio, resistente a la luz solar y aceite mineral',
      'Norma de fuego: ICEA T 30-520',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-cable-comando-multipolar-multipolar-awg-600-volts-16-10-awg-xlpe',
    name: '600 Volts 16 - 10 AWG XLPE',
    categoryPath: ['Cables Industriales', 'Cable Comando', 'Multipolar', 'Multipolar AWG'],
    description: 'Equipos de control, señalización, medición, protección y comandos eléctricos de instalaciones industriales.',
    detailedDescription: `600 Volt Cu 16 a 10 AWG XLPE 90°C ICEA S 73-532
Equipos de control, señalización, medición, protección y comandos eléctricos de instalaciones industriales.
Instalaciones en canaletas o conductos, bajo techo o a la intemperie, enterrados en ductos o directamente enterrados.
No propagación de
llama`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/1-MULTIPOLAR/2-MULTIPOLAR AWG/3-600 Volts 16 - 10 AWG XLPE/PORTADA.jpeg',
    gallery: ['/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/1-MULTIPOLAR/2-MULTIPOLAR AWG/3-600 Volts 16 - 10 AWG XLPE/WhatsApp Image 2026-05-29 at 15.38.41.jpeg'],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/1-MULTIPOLAR/2-MULTIPOLAR AWG/3-600 Volts 16 - 10 AWG XLPE/FICHA TECNICA (AGREGAR VARIANTES DE LA FOTO ANEXADA).pdf',
    specs: ['90°C', '16 a 10 AWG', '600 Volt'],
    characteristics: [
      'Temperaturas: 90ºC de servicio, 130ºC de sobrecarga, 250ºC de cortocircuito',
      'Tensión nominal: 600 Volt CA',
      'Norma constructiva: ICEA S 73-532',
      'Norma de conductores: ASTM B 174',
      'Conductor: Cobre electrolítico recocido en formación flexible',
      'Aislación: XLPE (Polietileno reticulado)',
      'Cubierta: PVC no propagante del incendio, resistente a la luz solar y aceite mineral',
      'Norma de fuego: FT1 (UL 1581)',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-cable-comando-comando-blindado-mm2-xlpe-hasta-48-conductores-1-a-4-mm2-blindado-fleje-cobre',
    name: 'XLPE - Hasta 48 Conductores - 1 a 4 MM² - Blindado Fleje Cobre',
    categoryPath: ['Cables Industriales', 'Cable Comando', 'Comando Blindado', 'mm²'],
    description: '0.6/1kV Cu flexible 1 a 4mm² Hasta 48 conductores XLPE 90°C / PVC',
    detailedDescription: `Multipolar Blindado (Fleje Cobre)
0.6/1kV Cu flexible 1 a 4mm² Hasta 48 conductores XLPE 90°C / PVC
Equipos de control, señalización, medición, protección y comandos eléctricos de instalaciones industriales.
Instalaciones aéreas en bandeja, canaletas o conductos, bajo techo o a la intemperie, enterrados en ductos o
directamente enterrados. Cuenta con protección electromagnética adicional.`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/2-COMANDO BLINDADO/2-MM2/1-XLPE - HASTA 48 CONDUCTORES - 1 A 4 MM2 - BLINDADO FLEJE COBRE/PORTADA Y FOTO FICHA TECNICA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/2-COMANDO BLINDADO/2-MM2/1-XLPE - HASTA 48 CONDUCTORES - 1 A 4 MM2 - BLINDADO FLEJE COBRE/FICHA TECNICA.pdf',
    specs: ['1kV', '90°C', '1 a 4mm²'],
    characteristics: [
      'Temperatura máxima: 90°C máxima de servicio – 130°C de sobrecarga – 250°C de cortocircuito',
      'Tensión nominal: 600/1000 Volt CA, 1200 Volt CA (Máximo) / 1500 Volt CC',
      'Norma constructiva: IRAM 2178-1 – IEC 60502-1',
      'Norma de conductores: IRAM NM 280 – IEC 60228',
      'Conductor: Cobre electrolítico recocido en formación flexible clase 5',
      'Aislación: XLPE (Polietileno reticulado)',
      'Blindaje: Fleje helicoidal de cobre recocido, con cobertura del 100% y solape adecuado',
      'Cubierta: PVC, no propagante del incendio, resistente a la luz solar y los aceites',
      'Norma de fuego: IEC 60332-1',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-cable-comando-comando-blindado-mm2-xlpe-1-a-4mm2-corrugado-cobre',
    name: 'XLPE - 1 a 4mm² - Corrugado Cobre',
    categoryPath: ['Cables Industriales', 'Cable Comando', 'Comando Blindado', 'mm²'],
    description: 'Equipos de control, señalización, medición, protección y comandos eléctricos en subestaciones de alta tensión',
    detailedDescription: `0.6/1kV Cu flexible 1 a 4mm² XLPE 90°C / PVC Protección electromagnética
Equipos de control, señalización, medición, protección y comandos eléctricos en subestaciones de alta tensión
(SSEE), su blindaje permite el adecuado filtrado de interferencias electromagnéticas a frecuencias hasta 1 MHz.
Instalaciones aéreas en bandeja, canaletas o conductos, bajo techo o a la intemperie, enterrados en ductos o
directamente enterrados.`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/2-COMANDO BLINDADO/2-MM2/3-XLPE - 1 A 4MM2 - CORRUGADO COBRE/PORTADA Y FICHA TECNICA.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/2-COMANDO BLINDADO/2-MM2/3-XLPE - 1 A 4MM2 - CORRUGADO COBRE/FICHA TECNICA.pdf',
    specs: ['1kV', '90°C', '1 a 4mm²'],
    characteristics: [
      'Temperatura máxima: 90°C máxima de servicio – 130°C de sobrecarga – 250°C de cortocircuito',
      'Tensión nominal: 600/1000 Volt CA – 1200 Volt CA (Máximo) – 1500 Volt CC',
      'Norma constructiva: IRAM 2178-1 – IEC 60502-1',
      'Norma de conductores: IRAM NM 280 – IEC 60228',
      'Conductor: Cobre electrolítico recocido en formación flexible clase 5',
      'Aislación: XLPE (Polietileno reticulado)',
      'Asiento de blindaje: PVC',
      'Blindaje: Cinta longitudinal corrugada de cobre recocido con solape adecuado',
      'Cubierta: PVC no propagante del incendio, resistente a la luz solar y los aceites',
      'Norma de fuego: IEC 60332-1',
      'Norma de EMC: IRAM 63020 – HN 33-S-34, impedancia de transferencia (Zt) menor a 2 ohm/km hasta',
      'frecuencias de 1MHz.',
      'Norma de aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-cable-comando-libre-de-halogenos-awg',
    name: 'AWG',
    categoryPath: ['Cables Industriales', 'Cable Comando', 'Libre de Halógenos'],
    description: 'Equipos de control, señalización, medicion, protección y comandos eléctricos de instalaciones domiciliarias. Uso en',
    detailedDescription: `600 Volt Cu 16 a 10 AWG XLPE 90°C / LSZH ICEA S 73-532
Equipos de control, señalización, medicion, protección y comandos eléctricos de instalaciones domiciliarias. Uso en
ambientes cerrados con alta concentración de personas (Aeropuertos, hospitales, trenes, cines, centros comerciales,
túneles) y en salas de control con equipamiento electrónico sensible ante la exposición de gases corrosivos. Instalados
en conduits, bandeja, escalera, al aire libre directo o bajo techo, enterrado en trinchera o en ductos.`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/3- LIBRE DE HALOGENOS/1-AWG/PORTADA.jpeg',
    gallery: ['/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/3- LIBRE DE HALOGENOS/1-AWG/FOTO FICHA TECNICA.jpeg'],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/3- LIBRE DE HALOGENOS/1-AWG/FICHA TECNICA(AGREGAR VARIANTES_ XLPE_ARMADO_FLEJE_FLEJE COBRE).pdf',
    specs: ['90°C', '16 a 10 AWG', '600 Volt'],
    characteristics: [
      'Temperatura máxima: 90°C máxima de servicio – 130°C de Sobrecarga – 250°C de Cortocircuito',
      'Tensión nominal: 600 Volt CA',
      'Norma constructiva: ICEA S 73-532',
      'Norma de conductores: ASTM B174',
      'Conductor: Cobre electrolítico recocido en formación flexible',
      'Aislación: XLPE (Polietileno reticulado)',
      'Cubierta: LSZH-HFFR (Low Smoke Zero Halogen - Halogen Free Flame Retardant), no propagante del',
      'incendio, resistente a la luz solar y los aceites',
      'Norma de fuego: ICEA T 30-520',
      'Norma de ausencia de halógenos y gases corrosivos: IEC 60754-1/2',
      'Norma de transparencia de humos: IEC 61034-1/2',
      'Norma de toxicidad: NES 713 – CEI 20.37',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Comportamiento frente al agua: Apto AD7 (Inmersión ocasional en agua)'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-cable-comando-libre-de-halogenos-mm2',
    name: 'MM²',
    categoryPath: ['Cables Industriales', 'Cable Comando', 'Libre de Halógenos'],
    description: 'Equipos de control, señalización, medicion, protección y comandos eléctricos de instalaciones domiciliarias. Uso en',
    detailedDescription: `0.6/1kV Cu flexible 1 a 4mm² Hasta 48 conductores XLPE 90°C / LSZH
Equipos de control, señalización, medicion, protección y comandos eléctricos de instalaciones domiciliarias. Uso en
ambientes cerrados con alta concentración de personas (Aeropuertos, hospitales, trenes, cines, centros comerciales,
túneles) y en salas de control con equipamiento electrónico sensible ante la exposición de gases corrosivos. Instalados
en conduits, bandeja, escalera, al aire libre directo o bajo techo, enterrado en trinchera o en ductos.`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/3- LIBRE DE HALOGENOS/2-MM2/PORTADA.jpeg',
    gallery: ['/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/3- LIBRE DE HALOGENOS/2-MM2/FOTO FICHA TECNICA.jpeg'],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/3- LIBRE DE HALOGENOS/2-MM2/FICHA TECNICA(AGREGAR VARIANTES_ XLPE_ARMADO_FLEJE_FLEJE COBRE).pdf',
    specs: ['1kV', '90°C', '1 a 4mm²'],
    characteristics: [
      'Temperatura máxima: 90°C máxima de servicio – 130°C de sobrecarga – 250°C de cortocircuito',
      'Tensión nominal: 600/1000 Volt CA, 1200 Volt CA (Máximo) / 1500 Volt CC',
      'Norma constructiva: IRAM 62266 – IEC 60502-1',
      'Norma de conductores: IRAM NM 280 – IEC 60228',
      'Conductor: Cobre electrolítico recocido en formación flexible clase 5',
      'Aislación: XLPE (Polietileno reticulado)',
      'Cubierta: LSZH-HFFR (Low Smoke Zero Halogen - Halogen Free Flame Retardant), no propagante del',
      'incendio, resistente a la luz solar y los aceites',
      'Norma de fuego: IEC 60332-3-24',
      'Norma de ausencia de halógenos y gases corrosivos: IEC 60754-1/2',
      'Norma de transparencia de humos: IEC 61034-1/2',
      'Norma de toxicidad: NES 713 – CEI 20.37',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Comportamiento frente al agua: Apto AD7 (Inmersión ocasional en agua)'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-cable-comando-resistente-a-incendio',
    name: 'Resistente a Incendio',
    categoryPath: ['Cables Industriales', 'Cable Comando'],
    description: 'Equipos de control, señalización, medicion, protección y comandos eléctricos de instalaciones domiciliarias. Uso',
    detailedDescription: `0.6/1kV Cu flexible 1 a 4mm² Hasta 48 conductores Doble aislación (MICA+XLPE)
Equipos de control, señalización, medicion, protección y comandos eléctricos de instalaciones domiciliarias. Uso
adecuado para mantener la integridad eléctrica en presencia de fuego directo en servicios críticos en destilerías,
petroquímicas, astilleros, etc. Instalados en conduits, bandeja, escalera, al aire libre directo o bajo techo, enterrado en
trinchera o en ductos.`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/4-RESISTENTE A INCENDIO/PORTADA.jpeg',
    gallery: ['/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/4-RESISTENTE A INCENDIO/FOTO FICHA TECNICA.jpeg'],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/4-RESISTENTE A INCENDIO/FICHA TECNICA(AGREGAR VARIANTE_CINTA DE MICA_ARMADO CON FLEJE).pdf',
    specs: ['1kV', '1 a 4mm²'],
    characteristics: [
      'Temperaturas: 90°C máxima de servicio – 130°C de sobrecarga – 250°C de cortocircuito',
      'Tensión nominal: 600/1000 Volt CA – 1200 Volt CA (Máximo) – 1500 Volt CC',
      'Norma constructiva: IRAM 62266 – IEC 60502-1',
      'Norma de conductores: IRAM NM 280 – IEC 60228',
      'Conductor: Cobre electrolítico recocido en formación flexible clase 5',
      'Aislación: Encintado de Mica + XLPE (Polietileno reticulado)',
      'Cubierta: LSZH-HFFR (Low Smoke Zero Halogen - Halogen Free Flame Retardant), no propagante del',
      'incendio, resistente a la luz solar y los aceites',
      'Norma de fuego: IEC 60332-3-24',
      'Norma de resistencia al fuego: IEC 60331-21 (70000 BTU-750°C aplicados durante 90 minutos)',
      'Norma de ausencia de halógenos y gases corrosivos:: IEC 60754-1/2',
      'Norma de transparencia de humos: IEC 61034-1/2',
      'Norma de toxicidad: NES 713 – CEI 20.37',
      'Norma aceites: ICEA S 73-532',
      'Norma de intemperismo: UL 2556 (rayos UV)',
      'Comportamiento frente al agua: Apto AD7 (Inmersión ocasional en agua)'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'industrial-cable-comando-ficha-tecnica',
    name: 'Ficha Tecnica',
    categoryPath: ['Cables Industriales', 'Cable Comando'],
    description: '',
    detailedDescription: `DESCRIPCIÓN


APLICACIONES
Instalación fija en ductos, bandejas portacables o al aire libre según especificaciones técnicas.`,

    image: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/portada.jpeg',
    gallery: [],
    pdf: '/images/PRODUCTOS/5-CABLES INDUSTRIALES/3-CABLE COMANDO/FICHA TECNICA/FICHA TECNICA COMANDO.pdf',
    specs: ['Industrial', '300 V / 600 V'],
    characteristics: [
      'Temperatura máxima de servicio según norma constructiva.',
      'Excelente resistencia a la propagación del incendio.',
      'Cubierta externa de alta durabilidad y protección física.'
    ],
    certifications: ['iram', 'seguridad', 'no-propagacion'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  }
];

export const brands = [
  { name: 'Logo 1', logo: '/images/logos/Logos_-1.png' },
  { name: 'Logo 2', logo: '/images/logos/Logos_-2.png' },
  { name: 'Logo 3', logo: '/images/logos/Logos_-3.png' },
  { name: 'Logo 4', logo: '/images/logos/Logos_-4.png' },
  { name: 'Logo 5', logo: '/images/logos/Logos_-5.png' }
];