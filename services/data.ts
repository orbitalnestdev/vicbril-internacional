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
  },
  {
    id: 'aerea-concentrico-antihurto',
    name: 'Concéntricos Anti-hurto (ceCONEX)',
    categoryPath: ['Cables Instalación Aérea', 'Envainados'],
    description: 'Cables de seguridad diseñados para prevenir conexiones clandestinas y asegurar la medición.',
    detailedDescription: `DESCRIPCIÓN
Cables con conductor central de fase (Aluminio o Cobre) y conductor neutro formado por una corona de alambres que rodea la aislación central. Esta configuración impide el pelado del cable para hurtar energía sin afectar el neutro, provocando un cortocircuito que protege la red.

USO
Acometidas desde líneas aéreas preensambladas y transformadores hacia medidores. Especialmente diseñado para imposibilitar conexiones clandestinas (antihurto).

NORMAS
IRAM 63001, IRAM-NM 280, ICEA S-95-658, IEC 60502-1.`,
    image: '/images/ProductosNuevos/2-LINEAS AEREAS/1-ENVAINADOS/3-CONCENTRICOS (ANTIHURTO)/PORTADA.jpeg',
    pdf: '/images/ProductosNuevos/2-LINEAS AEREAS/1-ENVAINADOS/3-CONCENTRICOS (ANTIHURTO)/2-CONCENTRICOS COBRE/FICHA TECNICA/ficha tecnica a modificar.pdf',
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
      },
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
    id: '1-instrumentaci-n-electronica',
    name: 'INSTRUMENTACIÓN ELECTRÓNICA',
    categoryPath: ['Cables Industriales'],
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
            "title": "Características Eléctricas",
            "headers": [
                  "Calibre (AWG)",
                  "Estructura del cable",
                  "Tipo de blindaje",
                  "Resistencia eléctrica CC a 20°C (Ohm/km)",
                  "Capacidad mutua (pF/m)",
                  "Impedancia característica (Ohm)",
                  "Inductancia mutua (µH/km)"
            ],
            "rows": [
                  [
                        "20",
                        "Par / Terna / Cuadrete",
                        "Sin blindar",
                        "35,78",
                        "98",
                        "76",
                        "588"
                  ],
                  [
                        "20",
                        "Par / Terna / Cuadrete",
                        "Blindado",
                        "35,78",
                        "180",
                        "41",
                        "--"
                  ],
                  [
                        "20",
                        "Multipar / Multiterna",
                        "Blindaje general",
                        "35,78",
                        "111",
                        "67",
                        "--"
                  ],
                  [
                        "20",
                        "Multipar / Multiterna",
                        "Blindaje individual y general",
                        "35,78",
                        "180",
                        "41",
                        "--"
                  ],
                  [
                        "18",
                        "Par / Terna / Cuadrete",
                        "Sin blindar",
                        "22,78",
                        "85",
                        "88",
                        "641"
                  ],
                  [
                        "18",
                        "Par / Terna / Cuadrete",
                        "Blindado",
                        "22,78",
                        "165",
                        "50",
                        "--"
                  ],
                  [
                        "18",
                        "Multipar / Multiterna",
                        "Blindaje general",
                        "22,78",
                        "98",
                        "76",
                        "--"
                  ],
                  [
                        "18",
                        "Multipar / Multiterna",
                        "Blindaje individual y general",
                        "22,78",
                        "165",
                        "50",
                        "--"
                  ],
                  [
                        "16",
                        "Par / Terna / Cuadrete",
                        "Sin blindar",
                        "14,25",
                        "112",
                        "66",
                        "544"
                  ],
                  [
                        "16",
                        "Par / Terna / Cuadrete",
                        "Blindado",
                        "14,25",
                        "210",
                        "35",
                        "--"
                  ],
                  [
                        "16",
                        "Multipar / Multiterna",
                        "Blindaje general",
                        "14,25",
                        "122",
                        "61",
                        "--"
                  ],
                  [
                        "16",
                        "Multipar / Multiterna",
                        "Blindaje individual y general",
                        "14,25",
                        "210",
                        "35",
                        "--"
                  ],
                  [
                        "14",
                        "Par / Terna / Cuadrete",
                        "Sin blindar",
                        "8,94",
                        "103",
                        "68",
                        "553"
                  ],
                  [
                        "14",
                        "Par / Terna / Cuadrete",
                        "Blindado",
                        "8,94",
                        "203",
                        "37",
                        "--"
                  ],
                  [
                        "14",
                        "Multipar / Multiterna",
                        "Blindaje general",
                        "8,94",
                        "133",
                        "56",
                        "--"
                  ],
                  [
                        "14",
                        "Multipar / Multiterna",
                        "Blindaje individual y general",
                        "8,94",
                        "203",
                        "37",
                        "--"
                  ],
                  [
                        "12",
                        "Par / Terna / Cuadrete",
                        "Sin blindar",
                        "5,63",
                        "121",
                        "62",
                        "522"
                  ],
                  [
                        "12",
                        "Par / Terna / Cuadrete",
                        "Blindado",
                        "5,63",
                        "228",
                        "33",
                        "--"
                  ]
            ]
      },
      {
            "title": "Dimensiones y Pesos - Par",
            "headers": [
                  "Calibre (AWG)",
                  "Blindado",
                  "Drenaje (AWG)",
                  "Diámetro exterior (mm)",
                  "Peso (kg/km)",
                  "Código"
            ],
            "rows": [
                  [
                        "20",
                        "No",
                        "--",
                        "4.9",
                        "30",
                        "AR 1P20"
                  ],
                  [
                        "20",
                        "Sí",
                        "22",
                        "5.0",
                        "33",
                        "AR-O 1P20"
                  ],
                  [
                        "18",
                        "No",
                        "--",
                        "5.6",
                        "40",
                        "AR 1P18"
                  ],
                  [
                        "18",
                        "Sí",
                        "20",
                        "5.7",
                        "45",
                        "AR-O 1P18"
                  ],
                  [
                        "16",
                        "No",
                        "--",
                        "6.2",
                        "53",
                        "AR 1P16"
                  ],
                  [
                        "16",
                        "Sí",
                        "18",
                        "6.3",
                        "61",
                        "AR-O 1P16"
                  ],
                  [
                        "14",
                        "No",
                        "--",
                        "7.7",
                        "82",
                        "AR 1P14"
                  ],
                  [
                        "14",
                        "Sí",
                        "18",
                        "7.8",
                        "89",
                        "AR-O 1P14"
                  ],
                  [
                        "12",
                        "No",
                        "--",
                        "8.7",
                        "111",
                        "AR 1P12"
                  ],
                  [
                        "12",
                        "Sí",
                        "18",
                        "8.8",
                        "119",
                        "AR-O 1P12"
                  ]
            ]
      },
      {
            "title": "Dimensiones y Pesos - Terna / Cuadrete",
            "headers": [
                  "Estructura",
                  "Calibre (AWG)",
                  "Drenaje (AWG)",
                  "Diámetro exterior (mm)",
                  "Peso (kg/km)",
                  "Código"
            ],
            "rows": [
                  [
                        "Terna (Blindado)",
                        "20",
                        "22",
                        "5.3",
                        "41",
                        "AR-O 1T20"
                  ],
                  [
                        "Terna (Blindado)",
                        "18",
                        "20",
                        "6.0",
                        "57",
                        "AR-O 1T18"
                  ],
                  [
                        "Terna (Blindado)",
                        "16",
                        "18",
                        "6.7",
                        "78",
                        "AR-O 1T16"
                  ],
                  [
                        "Terna (Blindado)",
                        "14",
                        "18",
                        "8.3",
                        "116",
                        "AR-O 1T14"
                  ],
                  [
                        "Terna (Blindado)",
                        "12",
                        "18",
                        "9.3",
                        "159",
                        "AR-O 1T12"
                  ],
                  [
                        "Cuadrete (Blindado)",
                        "20",
                        "22",
                        "5.7",
                        "50",
                        "AR-O 1Q20"
                  ],
                  [
                        "Cuadrete (Blindado)",
                        "18",
                        "20",
                        "6.5",
                        "70",
                        "AR-O 1Q18"
                  ],
                  [
                        "Cuadrete (Blindado)",
                        "16",
                        "18",
                        "7.5",
                        "101",
                        "AR-O 1Q16"
                  ],
                  [
                        "Cuadrete (Blindado)",
                        "14",
                        "18",
                        "9.0",
                        "146",
                        "AR-O 1Q14"
                  ],
                  [
                        "Cuadrete (Blindado)",
                        "12",
                        "18",
                        "10.7",
                        "214",
                        "AR-O 1Q12"
                  ]
            ]
      },
      {
            "title": "Dimensiones y Pesos - Multipares (Blindaje General)",
            "headers": [
                  "Nro. Pares",
                  "Calibre (AWG)",
                  "Diámetro exterior (mm)",
                  "Peso (kg/km)",
                  "Código",
                  "Mat Number"
            ],
            "rows": [
                  [
                        "2",
                        "20",
                        "7.4",
                        "65",
                        "AR-O 2P20",
                        "810000360"
                  ],
                  [
                        "3",
                        "20",
                        "7.8",
                        "79",
                        "AR-O 3P20",
                        "810000370"
                  ],
                  [
                        "4",
                        "20",
                        "8.5",
                        "100",
                        "AR-O 4P20",
                        "810000380"
                  ],
                  [
                        "6",
                        "20",
                        "10.6",
                        "147",
                        "AR-O 6P20",
                        "810000390"
                  ],
                  [
                        "8",
                        "20",
                        "11.4",
                        "178",
                        "AR-O 8P20",
                        "810000400"
                  ],
                  [
                        "12",
                        "20",
                        "13.6",
                        "245",
                        "AR-O 12P20",
                        "810000410"
                  ],
                  [
                        "16",
                        "20",
                        "15.1",
                        "307",
                        "AR-O 16P20",
                        "810000420"
                  ],
                  [
                        "20",
                        "20",
                        "17.2",
                        "390",
                        "AR-O 20P20",
                        "810000430"
                  ],
                  [
                        "24",
                        "20",
                        "19",
                        "456",
                        "AR-O 24P20",
                        "810000440"
                  ],
                  [
                        "36",
                        "20",
                        "21.7",
                        "634",
                        "AR-O 36P20",
                        "810000460"
                  ],
                  [
                        "2",
                        "18",
                        "8.3",
                        "87",
                        "AR-O 2P18",
                        "810000470"
                  ],
                  [
                        "3",
                        "18",
                        "9.1",
                        "111",
                        "AR-O 3P18",
                        "810000480"
                  ],
                  [
                        "4",
                        "18",
                        "10.5",
                        "152",
                        "AR-O 4P18",
                        "810000490"
                  ],
                  [
                        "6",
                        "18",
                        "12.4",
                        "205",
                        "AR-O 6P18",
                        "810000500"
                  ],
                  [
                        "8",
                        "18",
                        "13.4",
                        "252",
                        "AR-O 8P18",
                        "810000510"
                  ],
                  [
                        "12",
                        "18",
                        "16.7",
                        "370",
                        "AR-O 12P18",
                        "810000520"
                  ],
                  [
                        "16",
                        "18",
                        "18.4",
                        "465",
                        "AR-O 16P18",
                        "810000530"
                  ],
                  [
                        "20",
                        "18",
                        "20.4",
                        "562",
                        "AR-O 20P18",
                        "810000540"
                  ],
                  [
                        "24",
                        "18",
                        "23.3",
                        "688",
                        "AR-O 24P18",
                        "810000550"
                  ],
                  [
                        "36",
                        "18",
                        "26.5",
                        "961",
                        "AR-O 36P18",
                        "810000570"
                  ],
                  [
                        "2",
                        "16",
                        "9",
                        "111",
                        "AR-O 2P16",
                        "810000580"
                  ],
                  [
                        "3",
                        "16",
                        "10.8",
                        "159",
                        "AR-O 3P16",
                        "810000590"
                  ],
                  [
                        "4",
                        "16",
                        "11.7",
                        "200",
                        "AR-O 4P16",
                        "810000600"
                  ],
                  [
                        "6",
                        "16",
                        "13.9",
                        "275",
                        "AR-O 6P16",
                        "810000610"
                  ],
                  [
                        "8",
                        "16",
                        "15.1",
                        "344",
                        "AR-O 8P16",
                        "810000620"
                  ],
                  [
                        "12",
                        "16",
                        "18.8",
                        "508",
                        "AR-O 12P16",
                        "810000630"
                  ],
                  [
                        "16",
                        "16",
                        "20.9",
                        "646",
                        "AR-O 16P16",
                        "810000640"
                  ],
                  [
                        "20",
                        "16",
                        "23.7",
                        "813",
                        "AR-O 20P16",
                        "810000650"
                  ],
                  [
                        "24",
                        "16",
                        "26.4",
                        "959",
                        "AR-O 24P16",
                        "810000660"
                  ],
                  [
                        "36",
                        "16",
                        "30.2",
                        "1359",
                        "AR-O 36P16",
                        "810000680"
                  ],
                  [
                        "2",
                        "14",
                        "11.1",
                        "170",
                        "AR-O 2P14",
                        "810000690"
                  ],
                  [
                        "3",
                        "14",
                        "13.1",
                        "230",
                        "AR-O 3P14",
                        "810000700"
                  ],
                  [
                        "4",
                        "14",
                        "14.3",
                        "292",
                        "AR-O 4P14",
                        "810000710"
                  ],
                  [
                        "6",
                        "14",
                        "17.7",
                        "429",
                        "AR-O 6P14",
                        "810000720"
                  ],
                  [
                        "8",
                        "14",
                        "19.2",
                        "539",
                        "AR-O 8P14",
                        "810000730"
                  ],
                  [
                        "12",
                        "14",
                        "24",
                        "796",
                        "AR-O 12P14",
                        "810000740"
                  ],
                  [
                        "16",
                        "14",
                        "26.6",
                        "1016",
                        "AR-O 16P14",
                        "810000750"
                  ],
                  [
                        "20",
                        "14",
                        "29.5",
                        "1239",
                        "AR-O 20P14",
                        "810000760"
                  ],
                  [
                        "24",
                        "14",
                        "33.4",
                        "1503",
                        "AR-O 24P14",
                        "810000770"
                  ],
                  [
                        "36",
                        "14",
                        "38.3",
                        "2144",
                        "AR-O 36P14",
                        "810000790"
                  ]
            ]
      },
      {
            "title": "Dimensiones y Pesos - Multipares (Blindaje Individual y General)",
            "headers": [
                  "Nro. Pares",
                  "Calibre (AWG)",
                  "Diámetro exterior (mm)",
                  "Peso (kg/km)",
                  "Código",
                  "Mat Number"
            ],
            "rows": [
                  [
                        "2",
                        "20",
                        "7.4",
                        "72",
                        "AR-IO 2P20",
                        "810000910"
                  ],
                  [
                        "3",
                        "20",
                        "8.3",
                        "94",
                        "AR-IO 3P20",
                        "810000920"
                  ],
                  [
                        "4",
                        "20",
                        "9.1",
                        "120",
                        "AR-IO 4P20",
                        "810000930"
                  ],
                  [
                        "6",
                        "20",
                        "11.3",
                        "176",
                        "AR-IO 6P20",
                        "810000940"
                  ],
                  [
                        "8",
                        "20",
                        "12.1",
                        "215",
                        "AR-IO 8P20",
                        "810000950"
                  ],
                  [
                        "12",
                        "20",
                        "14.6",
                        "300",
                        "AR-IO 12P20",
                        "810000960"
                  ],
                  [
                        "16",
                        "20",
                        "16.7",
                        "397",
                        "AR-IO 16P20",
                        "810000970"
                  ],
                  [
                        "20",
                        "20",
                        "18.4",
                        "479",
                        "AR-IO 20P20",
                        "810000980"
                  ],
                  [
                        "24",
                        "20",
                        "20.4",
                        "562",
                        "AR-IO 24P20",
                        "810000990"
                  ],
                  [
                        "36",
                        "20",
                        "23.9",
                        "818",
                        "AR-IO 36P20",
                        "810001010"
                  ],
                  [
                        "2",
                        "18",
                        "8.3",
                        "98",
                        "AR-IO 2P18",
                        "810001020"
                  ],
                  [
                        "3",
                        "18",
                        "10.3",
                        "143",
                        "AR-IO 3P18",
                        "810001030"
                  ],
                  [
                        "4",
                        "18",
                        "11.2",
                        "180",
                        "AR-IO 4P18",
                        "810001040"
                  ],
                  [
                        "6",
                        "18",
                        "13.2",
                        "245",
                        "AR-IO 6P18",
                        "810001050"
                  ],
                  [
                        "8",
                        "18",
                        "14.3",
                        "305",
                        "AR-IO 8P18",
                        "810001060"
                  ],
                  [
                        "12",
                        "18",
                        "17.9",
                        "451",
                        "AR-IO 12P18",
                        "810001070"
                  ],
                  [
                        "16",
                        "18",
                        "19.8",
                        "570",
                        "AR-IO 16P18",
                        "810001080"
                  ],
                  [
                        "20",
                        "18",
                        "21.9",
                        "691",
                        "AR-IO 20P18",
                        "810001090"
                  ],
                  [
                        "24",
                        "18",
                        "25",
                        "845",
                        "AR-IO 24P18",
                        "810001100"
                  ],
                  [
                        "36",
                        "18",
                        "28.5",
                        "1192",
                        "AR-IO 36P18",
                        "810001120"
                  ],
                  [
                        "2",
                        "16",
                        "9",
                        "128",
                        "AR-IO 2P16",
                        "810001130"
                  ],
                  [
                        "3",
                        "16",
                        "11.5",
                        "190",
                        "AR-IO 3P16",
                        "810001140"
                  ],
                  [
                        "4",
                        "16",
                        "12.5",
                        "241",
                        "AR-IO 4P16",
                        "810001150"
                  ],
                  [
                        "6",
                        "16",
                        "14.9",
                        "335",
                        "AR-IO 6P16",
                        "810001160"
                  ],
                  [
                        "8",
                        "16",
                        "16.7",
                        "441",
                        "AR-IO 8P16",
                        "810001170"
                  ],
                  [
                        "12",
                        "16",
                        "20.2",
                        "626",
                        "AR-IO 12P16",
                        "810001180"
                  ],
                  [
                        "16",
                        "16",
                        "23",
                        "827",
                        "AR-IO 16P16",
                        "810001190"
                  ],
                  [
                        "20",
                        "16",
                        "25.5",
                        "1006",
                        "AR-IO 20P16",
                        "810001200"
                  ],
                  [
                        "24",
                        "16",
                        "28.4",
                        "1190",
                        "AR-IO 24P16",
                        "810001210"
                  ],
                  [
                        "36",
                        "16",
                        "33",
                        "1737",
                        "AR-IO 36P16",
                        "810001230"
                  ],
                  [
                        "2",
                        "14",
                        "11.1",
                        "187",
                        "AR-IO 2P14",
                        "810001240"
                  ],
                  [
                        "3",
                        "14",
                        "14",
                        "264",
                        "AR-IO 3P14",
                        "810001250"
                  ],
                  [
                        "4",
                        "14",
                        "15.9",
                        "354",
                        "AR-IO 4P14",
                        "810001260"
                  ],
                  [
                        "6",
                        "14",
                        "19",
                        "495",
                        "AR-IO 6P14",
                        "810001270"
                  ],
                  [
                        "8",
                        "14",
                        "20.6",
                        "624",
                        "AR-IO 8P14",
                        "810001280"
                  ],
                  [
                        "12",
                        "14",
                        "25.7",
                        "923",
                        "AR-IO 12P14",
                        "810001290"
                  ],
                  [
                        "16",
                        "14",
                        "28.6",
                        "1183",
                        "AR-IO 16P14",
                        "810001300"
                  ],
                  [
                        "20",
                        "14",
                        "32.3",
                        "1482",
                        "AR-IO 20P14",
                        "810001310"
                  ],
                  [
                        "24",
                        "14",
                        "36",
                        "1754",
                        "AR-IO 24P14",
                        "810001320"
                  ],
                  [
                        "36",
                        "14",
                        "41.8",
                        "2559",
                        "AR-IO 36P14",
                        "810001340"
                  ]
            ]
      },
      {
            "title": "Dimensiones y Pesos - Multiternas (Blindaje General)",
            "headers": [
                  "Nro. Ternas",
                  "Calibre (AWG)",
                  "Diámetro exterior (mm)",
                  "Peso (kg/km)",
                  "Código",
                  "Mat Number"
            ],
            "rows": [
                  [
                        "2",
                        "20",
                        "8.9",
                        "85",
                        "AR-O 2T20",
                        "810001460"
                  ],
                  [
                        "3",
                        "20",
                        "9.4",
                        "107",
                        "AR-O 3T20",
                        "810001470"
                  ],
                  [
                        "4",
                        "20",
                        "10.8",
                        "148",
                        "AR-O 4T20",
                        "810001480"
                  ],
                  [
                        "6",
                        "20",
                        "12.8",
                        "201",
                        "AR-O 6T20",
                        "810001490"
                  ],
                  [
                        "8",
                        "20",
                        "13.8",
                        "246",
                        "AR-O 8T20",
                        "810001500"
                  ],
                  [
                        "12",
                        "20",
                        "17.2",
                        "363",
                        "AR-O 12T20",
                        "810001510"
                  ],
                  [
                        "16",
                        "20",
                        "19.1",
                        "456",
                        "AR-O 16T20",
                        "810001520"
                  ],
                  [
                        "20",
                        "20",
                        "21.1",
                        "550",
                        "AR-O 20T20",
                        "810001530"
                  ],
                  [
                        "24",
                        "20",
                        "24.1",
                        "676",
                        "AR-O 24T20",
                        "810001540"
                  ],
                  [
                        "36",
                        "20",
                        "27.5",
                        "942",
                        "AR-O 36T20",
                        "810001560"
                  ],
                  [
                        "2",
                        "18",
                        "10.8",
                        "129",
                        "AR-O 2T18",
                        "810001570"
                  ],
                  [
                        "3",
                        "18",
                        "11.5",
                        "164",
                        "AR-O 3T18",
                        "810001580"
                  ],
                  [
                        "4",
                        "18",
                        "12.5",
                        "205",
                        "AR-O 4T18",
                        "810001590"
                  ],
                  [
                        "6",
                        "18",
                        "14.9",
                        "282",
                        "AR-O 6T18",
                        "810001600"
                  ],
                  [
                        "8",
                        "18",
                        "16.6",
                        "370",
                        "AR-O 8T18",
                        "810001610"
                  ],
                  [
                        "12",
                        "18",
                        "20.2",
                        "519",
                        "AR-O 12T18",
                        "810001620"
                  ],
                  [
                        "16",
                        "18",
                        "23.0",
                        "685",
                        "AR-O 16T18",
                        "810001630"
                  ],
                  [
                        "20",
                        "18",
                        "25.4",
                        "829",
                        "AR-O 20T18",
                        "810001640"
                  ],
                  [
                        "24",
                        "18",
                        "28.3",
                        "976",
                        "AR-O 24T18",
                        "810001650"
                  ],
                  [
                        "36",
                        "18",
                        "32.9",
                        "1417",
                        "AR-O 36T18",
                        "810001670"
                  ],
                  [
                        "2",
                        "16",
                        "12.2",
                        "168",
                        "AR-O 2T16",
                        "810001680"
                  ],
                  [
                        "3",
                        "16",
                        "13.0",
                        "219",
                        "AR-O 3T16",
                        "810001690"
                  ],
                  [
                        "4",
                        "16",
                        "14.2",
                        "273",
                        "AR-O 4T16",
                        "810001700"
                  ],
                  [
                        "6",
                        "16",
                        "17.5",
                        "402",
                        "AR-O 6T16",
                        "810001710"
                  ],
                  [
                        "8",
                        "16",
                        "18.9",
                        "504",
                        "AR-O 8T16",
                        "810001720"
                  ],
                  [
                        "12",
                        "16",
                        "23.7",
                        "747",
                        "AR-O 12T16",
                        "810001730"
                  ],
                  [
                        "16",
                        "16",
                        "26.3",
                        "953",
                        "AR-O 16T16",
                        "810001740"
                  ],
                  [
                        "20",
                        "16",
                        "29.1",
                        "1161",
                        "AR-O 20T16",
                        "810001750"
                  ],
                  [
                        "24",
                        "16",
                        "33.0",
                        "1412",
                        "AR-O 24T16",
                        "810001760"
                  ],
                  [
                        "36",
                        "16",
                        "37.8",
                        "2009",
                        "AR-O 36T16",
                        "810001780"
                  ],
                  [
                        "2",
                        "14",
                        "15.0",
                        "242",
                        "AR-O 2T14",
                        "810001790"
                  ],
                  [
                        "3",
                        "14",
                        "16.5",
                        "341",
                        "AR-O 3T14",
                        "810001800"
                  ],
                  [
                        "4",
                        "14",
                        "18.0",
                        "431",
                        "AR-O 4T14",
                        "810001810"
                  ],
                  [
                        "6",
                        "14",
                        "21.7",
                        "607",
                        "AR-O 6T14",
                        "810001820"
                  ],
                  [
                        "8",
                        "14",
                        "24.2",
                        "798",
                        "AR-O 8T14",
                        "810001830"
                  ],
                  [
                        "12",
                        "14",
                        "29.5",
                        "1140",
                        "AR-O 12T14",
                        "810001840"
                  ],
                  [
                        "16",
                        "14",
                        "33.3",
                        "1502",
                        "AR-O 16T14",
                        "810001850"
                  ],
                  [
                        "20",
                        "14",
                        "37.1",
                        "1836",
                        "AR-O 20T14",
                        "810001860"
                  ],
                  [
                        "24",
                        "14",
                        "41.9",
                        "2223",
                        "AR-O 24T14",
                        "810001870"
                  ],
                  [
                        "36",
                        "14",
                        "48.1",
                        "3180",
                        "AR-O 36T14",
                        "810001890"
                  ]
            ]
      },
      {
            "title": "Dimensiones y Pesos - Multiternas (Blindaje Individual y General)",
            "headers": [
                  "Nro. Ternas",
                  "Calibre (AWG)",
                  "Diámetro exterior (mm)",
                  "Peso (kg/km)",
                  "Código",
                  "Mat Number"
            ],
            "rows": [
                  [
                        "2",
                        "20",
                        "9.1",
                        "94",
                        "AR-IO 2T20",
                        "810002010"
                  ],
                  [
                        "3",
                        "20",
                        "10.2",
                        "133",
                        "AR-IO 3T20",
                        "810002020"
                  ],
                  [
                        "4",
                        "20",
                        "11.0",
                        "166",
                        "AR-IO 4T20",
                        "810002030"
                  ],
                  [
                        "6",
                        "20",
                        "13.1",
                        "227",
                        "AR-IO 6T20",
                        "810002040"
                  ],
                  [
                        "8",
                        "20",
                        "14.2",
                        "282",
                        "AR-IO 8T20",
                        "810002050"
                  ],
                  [
                        "12",
                        "20",
                        "17.7",
                        "416",
                        "AR-IO 12T20",
                        "810002060"
                  ],
                  [
                        "16",
                        "20",
                        "19.6",
                        "526",
                        "AR-IO 16T20",
                        "810002070"
                  ],
                  [
                        "20",
                        "20",
                        "21.7",
                        "637",
                        "AR-IO 20T20",
                        "810002080"
                  ],
                  [
                        "24",
                        "20",
                        "24.7",
                        "779",
                        "AR-IO 24T20",
                        "810002090"
                  ],
                  [
                        "36",
                        "20",
                        "28.2",
                        "1096",
                        "AR-IO 36T20",
                        "810002110"
                  ],
                  [
                        "2",
                        "18",
                        "11.0",
                        "142",
                        "AR-IO 2T18",
                        "810002120"
                  ],
                  [
                        "3",
                        "18",
                        "11.7",
                        "184",
                        "AR-IO 3T18",
                        "810002130"
                  ],
                  [
                        "4",
                        "18",
                        "12.7",
                        "231",
                        "AR-IO 4T18",
                        "810002140"
                  ],
                  [
                        "6",
                        "18",
                        "15.2",
                        "321",
                        "AR-IO 6T18",
                        "810002150"
                  ],
                  [
                        "8",
                        "18",
                        "17.0",
                        "421",
                        "AR-IO 8T18",
                        "810002160"
                  ],
                  [
                        "12",
                        "18",
                        "20.6",
                        "596",
                        "AR-IO 12T18",
                        "810002170"
                  ],
                  [
                        "16",
                        "18",
                        "23.4",
                        "786",
                        "AR-IO 16T18",
                        "810002180"
                  ],
                  [
                        "20",
                        "18",
                        "26.0",
                        "956",
                        "AR-IO 20T18",
                        "810002190"
                  ],
                  [
                        "24",
                        "18",
                        "28.9",
                        "1128",
                        "AR-IO 24T18",
                        "810002200"
                  ],
                  [
                        "36",
                        "18",
                        "33.6",
                        "1644",
                        "AR-IO 36T18",
                        "810002220"
                  ],
                  [
                        "2",
                        "16",
                        "12.4",
                        "188",
                        "AR-IO 2T16",
                        "810002230"
                  ],
                  [
                        "3",
                        "16",
                        "13.2",
                        "248",
                        "AR-IO 3T16",
                        "810002240"
                  ],
                  [
                        "4",
                        "16",
                        "14.4",
                        "315",
                        "AR-IO 4T16",
                        "810002250"
                  ],
                  [
                        "6",
                        "16",
                        "17.8",
                        "463",
                        "AR-IO 6T16",
                        "810002260"
                  ],
                  [
                        "8",
                        "16",
                        "19.3",
                        "585",
                        "AR-IO 8T16",
                        "810002270"
                  ],
                  [
                        "12",
                        "16",
                        "24.1",
                        "864",
                        "AR-IO 12T16",
                        "810002280"
                  ],
                  [
                        "16",
                        "16",
                        "26.7",
                        "1107",
                        "AR-IO 16T16",
                        "810002290"
                  ],
                  [
                        "20",
                        "16",
                        "29.7",
                        "1353",
                        "AR-IO 20T16",
                        "810002300"
                  ],
                  [
                        "24",
                        "16",
                        "33.6",
                        "1640",
                        "AR-IO 24T16",
                        "810002310"
                  ],
                  [
                        "36",
                        "16",
                        "38.5",
                        "2348",
                        "AR-IO 36T16",
                        "810002330"
                  ],
                  [
                        "2",
                        "14",
                        "15.2",
                        "263",
                        "AR-IO 2T14",
                        "810002340"
                  ],
                  [
                        "3",
                        "14",
                        "16.7",
                        "372",
                        "AR-IO 3T14",
                        "810002350"
                  ],
                  [
                        "4",
                        "14",
                        "18.3",
                        "472",
                        "AR-IO 4T14",
                        "810002360"
                  ],
                  [
                        "6",
                        "14",
                        "22.0",
                        "667",
                        "AR-IO 6T14",
                        "810002370"
                  ],
                  [
                        "8",
                        "14",
                        "24.5",
                        "877",
                        "AR-IO 8T14",
                        "810002380"
                  ],
                  [
                        "12",
                        "14",
                        "29.9",
                        "1258",
                        "AR-IO 12T14",
                        "810002390"
                  ],
                  [
                        "16",
                        "14",
                        "33.8",
                        "1660",
                        "AR-IO 16T14",
                        "810002400"
                  ],
                  [
                        "20",
                        "14",
                        "37.6",
                        "2032",
                        "AR-IO 20T14",
                        "810002410"
                  ],
                  [
                        "24",
                        "14",
                        "42.5",
                        "2459",
                        "AR-IO 24T14",
                        "810002420"
                  ],
                  [
                        "36",
                        "14",
                        "48.8",
                        "3532",
                        "AR-IO 36T14",
                        "810002440"
                  ]
            ]
      }
],
    certifications: ['no-propagacion', 'resistente-uv', 'temperatura-servicio'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
    {
    id: '2-automatizaci-n',
    name: 'AUTOMATIZACIÓN',
    categoryPath: ['Cables Industriales'],
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
  },
    {
    id: '3-cable-comando',
    name: 'CABLE COMANDO',
    categoryPath: ['Cables Industriales'],
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
  }
];

export const brands = [
  { name: 'Logo 1', logo: '/images/logos/Logos_-1.png' },
  { name: 'Logo 2', logo: '/images/logos/Logos_-2.png' },
  { name: 'Logo 3', logo: '/images/logos/Logos_-3.png' },
  { name: 'Logo 4', logo: '/images/logos/Logos_-4.png' },
  { name: 'Logo 5', logo: '/images/logos/Logos_-5.png' }
];