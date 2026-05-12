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
    detailedDescription: 'Apto para instalaciones fijas en interiores de inmuebles civiles, comerciales e industriales.',
    image: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR PVC/PORTADA.jpg',
    gallery: [
      '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR PVC/FICHA TECNICA UNIPOLAR PVC/foto producto dentro de ficha tecnica.jpeg'
    ],
    technicalTable: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR PVC/FICHA TECNICA UNIPOLAR PVC/marcas disponibles unipolar pvc.jpg',
    pdf: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR PVC/FICHA TECNICA UNIPOLAR PVC/FICHA TECNICA UNIP PVC (REEMPLAZAR FOTO DE ABAJO).pdf',
    specs: ['450/750 V', '70°', 'PVC'],
    characteristics: [
      'Temperatura máxima: 70° C de servicio',
      'Tensión normal: 450/750 Volt.',
      'Norma constructiva: IEC 60227-3 - IRAM NM 247-3',
      'Norma de fuego: IEC 60332-3-23 / IRAM NM IEC 60332-3-23 - No propagación de incendio.',
      'Norma de conductores: IEC 60228 / IRAM NM 280'
    ],
    applications: 'Permite cableado en tableros, cañerías embutidas y cañerías a la vista recomendando el uso de bandejas portantes',
    installation: 'Montaje: Radio mínimo de curvatura igual a 7 x diámetro exterior del cable. Tracción máxima: 5daN/mm² aplicados sobre los conductores. Temperatura de montaje: igual o mayor a 5°C.',
    specsTable: [
      { "Sección nominal mm": "0,5", "Espesor aislación mm": "0,60", "Diámetro exterior mm": "2,1", "Peso kg/km": "8,2", "Resistencia eléctrica Ohm/km": "39", "Intensidad admisible Amper (*)": "4,8" },
      { "Sección nominal mm": "0,75", "Espesor aislación mm": "0,60", "Diámetro exterior mm": "2,3", "Peso kg/km": "10,8", "Resistencia eléctrica Ohm/km": "26", "Intensidad admisible Amper (*)": "7,2" },
      { "Sección nominal mm": "1", "Espesor aislación mm": "0,70", "Diámetro exterior mm": "2,7", "Peso kg/km": "14,4", "Resistencia eléctrica Ohm/km": "19,5", "Intensidad admisible Amper (*)": "9,6" },
      { "Sección nominal mm": "1,5", "Espesor aislación mm": "0,70", "Diámetro exterior mm": "3,0", "Peso kg/km": "20", "Resistencia eléctrica Ohm/km": "13,3", "Intensidad admisible Amper (*)": "13" },
      { "Sección nominal mm": "2,5", "Espesor aislación mm": "0,80", "Diámetro exterior mm": "3,6", "Peso kg/km": "31", "Resistencia eléctrica Ohm/km": "7,98", "Intensidad admisible Amper (*)": "18" },
      { "Sección nominal mm": "4", "Espesor aislación mm": "0,80", "Diámetro exterior mm": "4,1", "Peso kg/km": "45", "Resistencia eléctrica Ohm/km": "4,95", "Intensidad admisible Amper (*)": "24" },
      { "Sección nominal mm": "6", "Espesor aislación mm": "0,80", "Diámetro exterior mm": "4,7", "Peso kg/km": "63", "Resistencia eléctrica Ohm/km": "3,3", "Intensidad admisible Amper (*)": "31" },
      { "Sección nominal mm": "10", "Espesor aislación mm": "1,00", "Diámetro exterior mm": "6,2", "Peso kg/km": "112", "Resistencia eléctrica Ohm/km": "1,91", "Intensidad admisible Amper (*)": "43" },
      { "Sección nominal mm": "16", "Espesor aislación mm": "1,00", "Diámetro exterior mm": "7,1", "Peso kg/km": "166", "Resistencia eléctrica Ohm/km": "1,21", "Intensidad admisible Amper (*)": "59" },
      { "Sección nominal mm": "25", "Espesor aislación mm": "1,20", "Diámetro exterior mm": "8,7", "Peso kg/km": "256", "Resistencia eléctrica Ohm/km": "0,78", "Intensidad admisible Amper (*)": "77" },
      { "Sección nominal mm": "35", "Espesor aislación mm": "1,20", "Diámetro exterior mm": "9,7", "Peso kg/km": "358", "Resistencia eléctrica Ohm/km": "0,554", "Intensidad admisible Amper (*)": "96" },
      { "Sección nominal mm": "50", "Espesor aislación mm": "1,40", "Diámetro exterior mm": "11,5", "Peso kg/km": "504", "Resistencia eléctrica Ohm/km": "0,386", "Intensidad admisible Amper (*)": "116" },
      { "Sección nominal mm": "70", "Espesor aislación mm": "1,40", "Diámetro exterior mm": "13,5", "Peso kg/km": "688", "Resistencia eléctrica Ohm/km": "0,272", "Intensidad admisible Amper (*)": "148" },
      { "Sección nominal mm": "95", "Espesor aislación mm": "1,60", "Diámetro exterior mm": "15,9", "Peso kg/km": "904", "Resistencia eléctrica Ohm/km": "0,206", "Intensidad admisible Amper (*)": "180" },
      { "Sección nominal mm": "120", "Espesor aislación mm": "1,60", "Diámetro exterior mm": "17,3", "Peso kg/km": "1136", "Resistencia eléctrica Ohm/km": "0,161", "Intensidad admisible Amper (*)": "207" },
      { "Sección nominal mm": "150", "Espesor aislación mm": "1,80", "Diámetro exterior mm": "19,9", "Peso kg/km": "1415", "Resistencia eléctrica Ohm/km": "0,129", "Intensidad admisible Amper (*)": "228" },
      { "Sección nominal mm": "185", "Espesor aislación mm": "2,00", "Diámetro exterior mm": "21,7", "Peso kg/km": "1730", "Resistencia eléctrica Ohm/km": "0,106", "Intensidad admisible Amper (*)": "260" },
      { "Sección nominal mm": "240", "Espesor aislación mm": "2,20", "Diámetro exterior mm": "25,1", "Peso kg/km": "2256", "Resistencia eléctrica Ohm/km": "0,0801", "Intensidad admisible Amper (*)": "290" },
      { "Sección nominal mm": "300", "Espesor aislación mm": "2,40", "Diámetro exterior mm": "28,3", "Peso kg/km": "2796", "Resistencia eléctrica Ohm/km": "0,641", "Intensidad admisible Amper (*)": "340" }
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
    detailedDescription: 'Conductores a instalar en lugares cerrados con alto tránsito de personas, por ejemplo cines, sanatorios, teatros, estaciones de trenes subterráneos, universidades, centros comerciales, escuelas, túneles de minas, etc; es decir todo lugar dónde la evacuación por incendio resulta difícil de resolver.',
    image: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR LSOH/PORTADA.jpeg',
    gallery: [
      '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR LSOH/FICHA TECNICA UNIPOLAR LSOH/foto producto dentro de ficha tecnica.jpeg'
    ],
    technicalTable: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR LSOH/FICHA TECNICA UNIPOLAR LSOH/MARCAS DISPONIBLES UNIPOLAR LSOH.jpg',
    pdf: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR LSOH/FICHA TECNICA UNIPOLAR LSOH/FICHA TECNICA UNIP. LSOH (REEMPLAZAR FOTO).pdf',
    specs: ['450/750 Volt', '70° C', 'IRAM 62267'],
    characteristics: [
      'Temperatura máxima: 70° C de servicio',
      'Tensión normal: 450/750 Volt.',
      'Norma constructiva: IRAM 62267',
      'Norma de fuego: IEC 60332-3-24 / IRAM NM IEC 60332-3-24 - No propagación de incendio.',
      'Norma de halógenos: IEC 60754 - 1/2 - Ausencia de halógenos',
      'Norma de humos: IEC 61034 - Transparencia de humos.',
      'Norma de toxicidad: NES 713 / CEI 20-37 - Ausencia de tóxicos',
      'Norma de conductores: IEC 60228 / IRAM NM 280',
      'Conductor: Metal cobre electrolítico recocido en formación clase 5.',
      'Flexibilidad: Clase 5; según IRAM NM-280 e IEC 60228'
    ],
    applications: 'Permite cableado en tableros, cañerías embutidas y cañerías a la vista recomendando el uso de bandejas portantes.',
    installation: 'Montaje: Radio mínimo de curvatura a 7 x diámetro exterior del cable. Tracción máxima: 5daN/mm² aplicados sobre los conductores de cobre. Temperatura de montaje: igual o mayor a 5°C.',
    specsTable: [
      { "Sección nominal mm": "0,5", "Espesor aislación mm": "0,60", "Diámetro exterior mm": "2,1", "Peso kg/km": "8,2", "Resistencia eléctrica Ohm/km": "39", "Intensidad admisible Amper (*)": "4,8" },
      { "Sección nominal mm": "0,75", "Espesor aislación mm": "0,60", "Diámetro exterior mm": "2,3", "Peso kg/km": "10,8", "Resistencia eléctrica Ohm/km": "26", "Intensidad admisible Amper (*)": "7,2" },
      { "Sección nominal mm": "1", "Espesor aislación mm": "0,70", "Diámetro exterior mm": "2,7", "Peso kg/km": "14,4", "Resistencia eléctrica Ohm/km": "19,5", "Intensidad admisible Amper (*)": "9,6" },
      { "Sección nominal mm": "1,5", "Espesor aislación mm": "0,70", "Diámetro exterior mm": "3,0", "Peso kg/km": "20", "Resistencia eléctrica Ohm/km": "13,3", "Intensidad admisible Amper (*)": "13" },
      { "Sección nominal mm": "2,5", "Espesor aislación mm": "0,80", "Diámetro exterior mm": "3,6", "Peso kg/km": "31", "Resistencia eléctrica Ohm/km": "7,98", "Intensidad admisible Amper (*)": "18" },
      { "Sección nominal mm": "4", "Espesor aislación mm": "0,80", "Diámetro exterior mm": "4,1", "Peso kg/km": "45", "Resistencia eléctrica Ohm/km": "4,95", "Intensidad admisible Amper (*)": "24" },
      { "Sección nominal mm": "6", "Espesor aislación mm": "0,80", "Diámetro exterior mm": "4,7", "Peso kg/km": "63", "Resistencia eléctrica Ohm/km": "3,3", "Intensidad admisible Amper (*)": "31" },
      { "Sección nominal mm": "10", "Espesor aislación mm": "1,00", "Diámetro exterior mm": "6,2", "Peso kg/km": "112", "Resistencia eléctrica Ohm/km": "1,91", "Intensidad admisible Amper (*)": "43" },
      { "Sección nominal mm": "16", "Espesor aislación mm": "1,00", "Diámetro exterior mm": "7,1", "Peso kg/km": "166", "Resistencia eléctrica Ohm/km": "1,21", "Intensidad admisible Amper (*)": "59" },
      { "Sección nominal mm": "25", "Espesor aislación mm": "1,20", "Diámetro exterior mm": "8,7", "Peso kg/km": "256", "Resistencia eléctrica Ohm/km": "0,78", "Intensidad admisible Amper (*)": "77" },
      { "Sección nominal mm": "35", "Espesor aislación mm": "1,20", "Diámetro exterior mm": "9,7", "Peso kg/km": "358", "Resistencia eléctrica Ohm/km": "0,554", "Intensidad admisible Amper (*)": "96" },
      { "Sección nominal mm": "50", "Espesor aislación mm": "1,40", "Diámetro exterior mm": "11,5", "Peso kg/km": "504", "Resistencia eléctrica Ohm/km": "0,386", "Intensidad admisible Amper (*)": "116" },
      { "Sección nominal mm": "70", "Espesor aislación mm": "1,40", "Diámetro exterior mm": "13,5", "Peso kg/km": "688", "Resistencia eléctrica Ohm/km": "0,272", "Intensidad admisible Amper (*)": "148" },
      { "Sección nominal mm": "95", "Espesor aislación mm": "1,60", "Diámetro exterior mm": "15,9", "Peso kg/km": "904", "Resistencia eléctrica Ohm/km": "0,206", "Intensidad admisible Amper (*)": "180" },
      { "Sección nominal mm": "120", "Espesor aislación mm": "1,60", "Diámetro exterior mm": "17,3", "Peso kg/km": "1136", "Resistencia eléctrica Ohm/km": "0,161", "Intensidad admisible Amper (*)": "207" },
      { "Sección nominal mm": "150", "Espesor aislación mm": "1,80", "Diámetro exterior mm": "19,9", "Peso kg/km": "1415", "Resistencia eléctrica Ohm/km": "0,129", "Intensidad admisible Amper (*)": "228" },
      { "Sección nominal mm": "185", "Espesor aislación mm": "2,00", "Diámetro exterior mm": "21,7", "Peso kg/km": "1730", "Resistencia eléctrica Ohm/km": "0,106", "Intensidad admisible Amper (*)": "260" },
      { "Sección nominal mm": "240", "Espesor aislación mm": "2,20", "Diámetro exterior mm": "25,1", "Peso kg/km": "2256", "Resistencia eléctrica Ohm/km": "0,0801", "Intensidad admisible Amper (*)": "290" },
      { "Sección nominal mm": "300", "Espesor aislación mm": "2,40", "Diámetro exterior mm": "28,3", "Peso kg/km": "2796", "Resistencia eléctrica Ohm/km": "0,0641", "Intensidad admisible Amper (*)": "340" }
    ],
    certifications: ['iram', 'seguridad', 'bajos-humos', 'libre-halogenos', 'marcacion-secuencial', 'espacios-publicos', 'instalacion-domiciliaria']
  },
  {
    id: 'bipolar-vaina-chata',
    name: 'Cable Envainado Chato',
    category: 'Cables para Instalación Civil',
    subCategory: '2-CABLE BIPOLAR',
    description: 'Cables flexibles diseñados para uso en instalaciones móviles industriales y domésticas.',
    detailedDescription: 'Cables flexibles diseñados para uso en instalaciones móviles industriales y domésticas y aparatos portátiles en general, excluyendo los aparatos de calefacción.',
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
      'Identificación: Color negro con identificación alfanumérica en color blanco o amarillo. Siempre incluye un conductor de tierra verde/amarillo.',
      'Cubierta: PVC negro, no propagante del incendio.'
    ],
    applications: 'Interconexión de máquinas empleadas para procesos fabriles, incluyendo máquinas - herramientas y equipamientos de mano. Los cables están permitidos para su conexión directa a la red eléctrica.',
    installation: 'Apto para uso industrial y domiciliario; incluye conductor de tierra verde/amarillo.',
    colors: [
      { 
        label: 'Bipolar', 
        values: ['Blanco', 'Marrón', 'Negro'], 
        codes: ['#FFFFFF', '#8B4513', '#000000'] 
      }
    ],
    specsTable: [
      { "Formación Nº x mm²": "2x1", "Diámetro máximo de alambres del conductor mm": "0,21", "Espesor de aislación nominal mm": "0,6", "Espesor de envoltura nominal mm": "0,6", "Dimensiones exteriores aproximadas mm": "4,1 x 6,6", "Masa aprox kg/km": "44", "Intensidad de corriente admisible en servicio continuo (A)": "7", "Resistencia eléctrica máxima a 20° C y C.C Ohm/km": "19,5" },
      { "Formación Nº x mm²": "2x1,5", "Diámetro máximo de alambres del conductor mm": "0,26", "Espesor de aislación nominal mm": "0,7", "Espesor de envoltura nominal mm": "0,6", "Dimensiones exteriores aproximadas mm": "4,5 x 7,5", "Masa aprox kg/km": "58", "Intensidad de corriente admisible en servicio continuo (A)": "10", "Resistencia eléctrica máxima a 20° C y C.C Ohm/km": "13,3" },
      { "Formación Nº x mm²": "2x2,5", "Diámetro máximo de alambres del conductor mm": "0,26", "Espesor de aislación nominal mm": "0,8", "Espesor de envoltura nominal mm": "0,6", "Dimensiones exteriores aproximadas mm": "5,1 x 8,8", "Masa aprox kg/km": "85", "Intensidad de corriente admisible en servicio continuo (A)": "16", "Resistencia eléctrica máxima a 20° C y C.C Ohm/km": "7,98" },
      { "Formación Nº x mm²": "3x1", "Diámetro máximo de alambres del conductor mm": "0,21", "Espesor de aislación nominal mm": "0,6", "Espesor de envoltura nominal mm": "0,6", "Dimensiones exteriores aproximadas mm": "4,1 x 9,2", "Masa aprox kg/km": "64", "Intensidad de corriente admisible en servicio continuo (A)": "7", "Resistencia eléctrica máxima a 20° C y C.C Ohm/km": "19,5" },
      { "Formación Nº x mm²": "3x1,5", "Diámetro máximo de alambres del conductor mm": "0,26", "Espesor de aislación nominal mm": "0,7", "Espesor de envoltura nominal mm": "0,6", "Dimensiones exteriores aproximadas mm": "4,5 x 10,6", "Masa aprox kg/km": "86", "Intensidad de corriente admisible en servicio continuo (A)": "10", "Resistencia eléctrica máxima a 20° C y C.C Ohm/km": "13,3" },
      { "Formación Nº x mm²": "3x2,5", "Diámetro máximo de alambres del conductor mm": "0,26", "Espesor de aislación nominal mm": "0,8", "Espesor de envoltura nominal mm": "0,6", "Dimensiones exteriores aproximadas mm": "5,1 x 12,5", "Masa aprox kg/km": "126", "Intensidad de corriente admisible en servicio continuo (A)": "16", "Resistencia eléctrica máxima a 20° C y C.C Ohm/km": "7,98" }
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
    detailedDescription: 'Conductores de cobre flexible dispuestos en paralelo con aislamiento de PVC. Ideales para conexiones de veladores, radios y electrodomésticos de baja potencia.',
    image: '/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE PARALELO/portada.jpeg',
    gallery: [
      '/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE PARALELO/FICHA TECNICA PARALELO/foto producto dentro de ficha tecnica.jpeg'
    ],
    technicalTable: '/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE PARALELO/FICHA TECNICA PARALELO/MARCAS DISPONIBLES PARALELO.jpg',
    pdf: '/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE PARALELO/FICHA TECNICA PARALELO/FICHA TECNICA PARALELO.pdf',
    specs: ['300V', 'Flexible', 'PVC Blanco/Negro'],
    characteristics: [
      'Tensión: 300/500V',
      'Formación clase 5',
      'Aislación de PVC'
    ],
    applications: 'Instalaciones móviles y aparatos portátiles en general.',
    installation: 'Apto para instalaciones móviles y uso doméstico.',
    specsTable: [
      { "Formación (Nº x mm²)": "2x0,50", "Diám. máx. alambres (mm)": "0,21", "Esp. aislación nominal (mm)": "0,6", "Dimensiones exteriores aprox. (mm)": "2,4 x 4,8", "Masa aprox. (kg/km)": "24", "Resistencia eléctrica máx. 20°C (Ohm/km)": "39", "Intensidad continua (A)": "3" },
      { "Formación (Nº x mm²)": "2x0,75", "Diám. máx. alambres (mm)": "0,21", "Esp. aislación nominal (mm)": "0,6", "Dimensiones exteriores aprox. (mm)": "2,6 x 5,2", "Masa aprox. (kg/km)": "28", "Resistencia eléctrica máx. 20°C (Ohm/km)": "26", "Intensidad continua (A)": "6" },
      { "Formación (Nº x mm²)": "2x1", "Diám. máx. alambres (mm)": "0,21", "Esp. aislación nominal (mm)": "0,6", "Dimensiones exteriores aprox. (mm)": "2,7 x 5,4", "Masa aprox. (kg/km)": "32", "Resistencia eléctrica máx. 20°C (Ohm/km)": "19,5", "Intensidad continua (A)": "6" },
      { "Formación (Nº x mm²)": "2x1,5", "Diám. máx. alambres (mm)": "0,26", "Esp. aislación nominal (mm)": "0,7", "Dimensiones exteriores aprox. (mm)": "3,0 x 6,1", "Masa aprox. (kg/km)": "45", "Resistencia eléctrica máx. 20°C (Ohm/km)": "13,3", "Intensidad continua (A)": "10" },
      { "Formación (Nº x mm²)": "2x2,5", "Diám. máx. alambres (mm)": "0,26", "Esp. aislación nominal (mm)": "0,8", "Dimensiones exteriores aprox. (mm)": "3,6 x 7,4", "Masa aprox. (kg/km)": "72", "Resistencia eléctrica máx. 20°C (Ohm/km)": "7,98", "Intensidad continua (A)": "15" },
      { "Formación (Nº x mm²)": "2x4", "Diám. máx. alambres (mm)": "0,31", "Esp. aislación nominal (mm)": "0,8", "Dimensiones exteriores aprox. (mm)": "4,2 x 8,6", "Masa aprox. (kg/km)": "110", "Resistencia eléctrica máx. 20°C (Ohm/km)": "4,95", "Intensidad continua (A)": "20" }
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
    detailedDescription: 'Cordones de cobre flexible con aislación de PVC cristal o bicolor. Diseñados para la interconexión de sistemas de audio, garantizando fidelidad en la señal.',
    image: '/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE PARALELO PARLANTE/portada.jpeg',
    gallery: [
      '/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE PARALELO PARLANTE/FICHA TECNICA PARALELO PARLANTE/foto producto dentro de ficha tecnica.jpeg'
    ],
    technicalTable: '/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE PARALELO PARLANTE/FICHA TECNICA PARALELO PARLANTE/MARCAS DISPONIBLES PARALELO PARLANTE.jpg',
    pdf: '/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE PARALELO PARLANTE/FICHA TECNICA PARALELO PARLANTE/FICHA TECNICA PARALELO PARLANTE.pdf',
    specs: ['Audio', 'Extra flexible', 'Bicolor/Cristal'],
    characteristics: [
      'Conductor de cobre flexible clase 5',
      'Aislación de PVC',
      'Tensión nominal 300/500V'
    ],
    applications: 'Interconexión de equipos de audio y aparatos portátiles.',
    installation: 'Diseñado para flexibilidad en instalaciones móviles.',
    colors: [
      { 
        label: 'Bipolar', 
        values: ['Negro', 'Rojo'], 
        codes: ['#000000', '#FF0000'] 
      }
    ],
    specsTable: [
      { "Formación (Nº x mm²)": "2x1", "Diám. máx. alambres (mm)": "0,21", "Espesor aislación nominal (mm)": "0,6", "Espesor envoltura nominal (mm)": "0,6", "Dimensiones exteriores aprox. (mm)": "4,1 x 6,6", "Masa aprox. (kg/km)": "44", "Intensidad continua (A)": "7" },
      { "Formación (Nº x mm²)": "2x1,5", "Diám. máx. alambres (mm)": "0,26", "Espesor aislación nominal (mm)": "0,7", "Espesor envoltura nominal (mm)": "0,6", "Dimensiones exteriores aprox. (mm)": "4,5 x 7,5", "Masa aprox. (kg/km)": "58", "Intensidad continua (A)": "10" }
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
    detailedDescription: 'Conductores diseñados para instalaciones móviles familiares, comerciales e industriales, máquinas manipuladas manualmente y dispositivos portátiles en general.',
    image: '/images/PRODUCTOS/3-CABLE TIPO TALLER/PORTADA.jpeg',
    gallery: [
      '/images/PRODUCTOS/3-CABLE TIPO TALLER/FICHA TECNICA TIPO TALLER/foto producto dentro de ficha tecnica.jpeg'
    ],
    technicalTable: '/images/PRODUCTOS/3-CABLE TIPO TALLER/FICHA TECNICA TIPO TALLER/MARCAS DISPONIBLES TIPO TALLER.jpg',
    pdf: '/images/PRODUCTOS/3-CABLE TIPO TALLER/FICHA TECNICA TIPO TALLER/FICHA TECNICA TIPO TALLER (REEMPLAZAR FOTO).pdf',
    specs: ['300/500 V', '70°', 'IRAM 247-5'],
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
    applications: 'Instalaciones móviles industriales y domésticas, maquinaria de mano y aparatos portátiles en general.',
    installation: 'Montaje: Radio mínimo de curvatura a 7 x diámetro exterior del cable. Tracción máxima: 5daN/mm² aplicados sobre los conductores de cobre. Temperatura de montaje: igual o mayor a 5°C.',
    colors: [
      { label: 'Bipolar', values: ['Celeste', 'Marrón'], codes: ['#00AEEF', '#8B4513'] },
      { label: 'Tripolar', values: ['Verde-Amarillo', 'Celeste', 'Marrón'], codes: ['linear-gradient(135deg, #fbbf24 50%, #16a34a 50%)', '#00AEEF', '#8B4513'] },
      { label: 'Tetrapolar', values: ['Verde-Amarillo', 'Negro', 'Celeste', 'Marrón'], codes: ['linear-gradient(135deg, #fbbf24 50%, #16a34a 50%)', '#000000', '#00AEEF', '#8B4513'] },
      { label: 'Pentapolar', values: ['Verde-Amarillo', 'Negro', 'Celeste', 'Marrón', 'Rojo'], codes: ['linear-gradient(135deg, #fbbf24 50%, #16a34a 50%)', '#000000', '#00AEEF', '#8B4513', '#FF0000'] }
    ],
    specsTable: [
      { "Sección nominal mm": "0,5", "Espesor nominal mm": "0,6", "Espesor cubierta mm": "0,8", "Diámetro exterior mm": "5,7", "Peso kg/km": "43", "Resistencia eléctrica a 20°C en CC Ohm/km": "39" },
      { "Sección nominal mm": "0,75", "Espesor nominal mm": "0,6", "Espesor cubierta mm": "0,8", "Diámetro exterior mm": "6,2", "Peso kg/km": "52", "Resistencia eléctrica a 20°C en CC Ohm/km": "26" },
      { "Sección nominal mm": "1,0", "Espesor nominal mm": "0,6", "Espesor cubierta mm": "0,8", "Diámetro exterior mm": "6,5", "Peso kg/km": "60", "Resistencia eléctrica a 20°C en CC Ohm/km": "19,5" },
      { "Sección nominal mm": "1,5", "Espesor nominal mm": "0,7", "Espesor cubierta mm": "0,8", "Diámetro exterior mm": "7,4", "Peso kg/km": "80", "Resistencia eléctrica a 20°C en CC Ohm/km": "13,3" },
      { "Sección nominal mm": "2,5", "Espesor nominal mm": "0,8", "Espesor cubierta mm": "1", "Diámetro exterior mm": "9,1", "Peso kg/km": "125", "Resistencia eléctrica a 20°C en CC Ohm/km": "7,98" },
      { "Sección nominal mm": "4,0", "Espesor nominal mm": "0,8", "Espesor cubierta mm": "1,1", "Diámetro exterior mm": "10,4", "Peso kg/km": "172", "Resistencia eléctrica a 20°C en CC Ohm/km": "4,95" },
      { "Sección nominal mm": "6,0", "Espesor nominal mm": "0,8", "Espesor cubierta mm": "1,3", "Diámetro exterior mm": "11,9", "Peso kg/km": "236", "Resistencia eléctrica a 20°C en CC Ohm/km": "3,3" },
      { "Sección nominal mm": "10", "Espesor nominal mm": "1,0", "Espesor cubierta mm": "1,5", "Diámetro exterior mm": "15,1", "Peso kg/km": "389", "Resistencia eléctrica a 20°C en CC Ohm/km": "1,91" }
    ],
    certifications: ['iram', 'seguridad', 'cuerdas-flexibles', 'no-propagacion', 'marcacion-secuencial', 'instalacion-industrial', 'conductor-tierra', 'instalacion-domiciliaria'],
    availableBrands: ['Prysmian', 'IMSA', 'Marlew', 'Upercab', 'Argenplas', 'Marvic', 'Erpla', 'Trefilcon', 'Fonseca', 'MH']
  },
  {
    id: 'aerea-preensamblado-aluminio',
    name: 'Preensamblado de Aluminio',
    category: 'Cables Instalación Aérea',
    subCategory: '1-ENVAINADOS',
    description: 'Conductores de aluminio para redes de distribución aérea de baja tensión.',
    detailedDescription: 'Cables formados por uno o más conductores de aluminio aislados con XLPE, trenzados alrededor de un elemento portante (neutro) de aleación de aluminio. Diseñados para soportar condiciones climáticas extremas.',
    image: '/images/PRODUCTOS/2-LINEAS AEREAS/1-ENVAINADOS/1-PREENSAMBLADOS DE ALUMINIO/PORTADA (ELIMINAR SIMBOLO GEMINI).jpeg',
    gallery: [
      '/images/PRODUCTOS/2-LINEAS AEREAS/1-ENVAINADOS/1-PREENSAMBLADOS DE ALUMINIO/FICHA TECNICA/foto dentro de ficha tecnica.jpeg'
    ],
    pdf: '/images/PRODUCTOS/2-LINEAS AEREAS/1-ENVAINADOS/1-PREENSAMBLADOS DE ALUMINIO/FICHA TECNICA/ficha tecnica a modificar.pdf',
    specs: ['0,6 / 1,1 kV', '90° C', 'IRAM 2263'],
    characteristics: [
      'Conductor de fase: Aluminio grado eléctrico 1350.',
      'Conductor neutro portante: Aleación de aluminio 6101.',
      'Aislación: Polietileno reticulado (XLPE) resistente a rayos UV.',
      'Temperatura máxima: 90° C de servicio, 250° C de cortocircuito.',
      'Norma constructiva: IRAM 2263.'
    ],
    applications: 'Redes aéreas de distribución de energía eléctrica en baja tensión.',
    installation: 'Tendido aéreo sobre postes o fachadas. No requiere elementos portantes externos adicionales.',
    specsTable: [
      { "Formación (mm²)": "2 x 16", "Diámetro ext. aprox. (mm)": "15,5", "Peso total aprox. (kg/km)": "145", "Resistencia máx. 20°C (Ohm/km)": "1,91", "Capacidad corriente (A)": "75" },
      { "Formación (mm²)": "2 x 25", "Diámetro ext. aprox. (mm)": "18,2", "Peso total aprox. (kg/km)": "215", "Resistencia máx. 20°C (Ohm/km)": "1,20", "Capacidad corriente (A)": "100" },
      { "Formación (mm²)": "4 x 16", "Diámetro ext. aprox. (mm)": "18,5", "Peso total aprox. (kg/km)": "290", "Resistencia máx. 20°C (Ohm/km)": "1,91", "Capacidad corriente (A)": "75" },
      { "Formación (mm²)": "4 x 25", "Diámetro ext. aprox. (mm)": "22,1", "Peso total aprox. (kg/km)": "430", "Resistencia máx. 20°C (Ohm/km)": "1,20", "Capacidad corriente (A)": "100" },
      { "Formación (mm²)": "3x35+50+25", "Diámetro ext. aprox. (mm)": "31,0", "Peso total aprox. (kg/km)": "580", "Resistencia máx. 20°C (Ohm/km)": "0,868", "Capacidad corriente (A)": "125" },
      { "Formación (mm²)": "3x50+50+25", "Diámetro ext. aprox. (mm)": "34,5", "Peso total aprox. (kg/km)": "730", "Resistencia máx. 20°C (Ohm/km)": "0,641", "Capacidad corriente (A)": "150" },
      { "Formación (mm²)": "3x70+50+25", "Diámetro ext. aprox. (mm)": "38,2", "Peso total aprox. (kg/km)": "950", "Resistencia máx. 20°C (Ohm/km)": "0,443", "Capacidad corriente (A)": "185" }
    ],
    certifications: ['iram', 'seguridad', 'marcacion-secuencial', 'resistente-uv']
  },
  {
    id: 'aerea-acometida-cobre',
    name: 'Acometidas de Cobre',
    category: 'Cables Instalación Aérea',
    subCategory: '1-ENVAINADOS',
    description: 'Cables preensamblados de cobre para conexiones domiciliarias.',
    detailedDescription: 'Conductores de cobre flexible aislados con XLPE o PVC, reunidos en espiral. Utilizados principalmente para la bajada desde la red aérea hasta el medidor domiciliario.',
    image: '/images/PRODUCTOS/2-LINEAS AEREAS/1-ENVAINADOS/2-ACOMETIDAS DE COBRE/PORTADA (ELIMINAR SIMBOLO GEMINI).jpeg',
    gallery: [
      '/images/PRODUCTOS/2-LINEAS AEREAS/1-ENVAINADOS/2-ACOMETIDAS DE COBRE/FICHA TECNICA/foto producto dentro de ficha tecnica.jpeg'
    ],
    pdf: '/images/PRODUCTOS/2-LINEAS AEREAS/1-ENVAINADOS/2-ACOMETIDAS DE COBRE/FICHA TECNICA/ficha tecnica a modificar.pdf',
    specs: ['0,6 / 1,1 kV', 'Flexible', 'IRAM 2164'],
    characteristics: [
      'Conductores: Cobre electrolítico recocido, clase 2 o 5.',
      'Aislación: XLPE o PVC resistente a la intemperie.',
      'Tensión nominal: 0,6/1,1 kV.',
      'Norma constructiva: IRAM 2164.'
    ],
    applications: 'Conexiones de acometida domiciliaria monofásica o trifásica.',
    installation: 'Instalación aérea entre el poste de la red de distribución y el punto de recepción del usuario.',
    specsTable: [
      { "Formación (mm²)": "2 x 4", "Diámetro ext. (mm)": "11,5", "Peso (kg/km)": "140", "Resistencia máx. 20°C (Ohm/km)": "4,61" },
      { "Formación (mm²)": "2 x 6", "Diámetro ext. (mm)": "12,8", "Peso (kg/km)": "185", "Resistencia máx. 20°C (Ohm/km)": "3,08" },
      { "Formación (mm²)": "4 x 4", "Diámetro ext. (mm)": "13,2", "Peso (kg/km)": "260", "Resistencia máx. 20°C (Ohm/km)": "4,61" },
      { "Formación (mm²)": "4 x 6", "Diámetro ext. (mm)": "14,8", "Peso (kg/km)": "350", "Resistencia máx. 20°C (Ohm/km)": "3,08" }
    ],
    certifications: ['iram', 'seguridad', 'resistente-uv']
  },
  {
    id: 'aerea-concentrico-antihurto',
    name: 'Concéntricos (Antihurto)',
    category: 'Cables Instalación Aérea',
    subCategory: '1-ENVAINADOS',
    description: 'Cables de seguridad diseñados para prevenir conexiones clandestinas.',
    detailedDescription: 'Cable con conductor central de fase y conductor neutro formado por una corona de alambres de cobre que rodea la aislación central. Esta configuración impide el pelado del cable para hurtar energía.',
    image: '/images/PRODUCTOS/2-LINEAS AEREAS/1-ENVAINADOS/3-CONCENTRICOS (ANTIHURTO)/PORTADA (ELIMINAR SIMBOLO GEMINI).jpeg',
    specs: ['0,6 / 1 kV', 'Antihurto', 'IRAM 63001'],
    characteristics: [
      'Conductor central (Fase): Cobre recocido clase 2.',
      'Conductor concéntrico (Neutro): Corona de alambres de cobre.',
      'Aislación y Vaina: Polietileno reticulado (XLPE).',
      'Protección: Difícil acceso al conductor de fase sin afectar el neutro.',
      'Norma: IRAM 63001 / IEC 60502-1.'
    ],
    applications: 'Acometidas de seguridad en zonas con alto riesgo de conexiones clandestinas.',
    installation: 'Uso en bajadas domiciliarias desde líneas aéreas o subterráneas.',
    specsTable: [
      { "Sección (mm²)": "1x4+4", "Diámetro ext. aprox. (mm)": "9,2", "Peso aprox. (kg/km)": "125", "Resistencia máx. 20°C (Ohm/km)": "4,61" },
      { "Sección (mm²)": "1x6+6", "Diámetro ext. aprox. (mm)": "10,5", "Peso aprox. (kg/km)": "170", "Resistencia máx. 20°C (Ohm/km)": "3,08" },
      { "Sección (mm²)": "1x10+10", "Diámetro ext. aprox. (mm)": "12,5", "Peso aprox. (kg/km)": "260", "Resistencia máx. 20°C (Ohm/km)": "1,83" }
    ],
    certifications: ['iram', 'seguridad', 'resistente-uv', 'antihurto']
  },
  {
    id: 'aerea-desnudo-aluminio',
    name: 'Cables Desnudos de Aluminio',
    category: 'Cables Instalación Aérea',
    subCategory: '2-DESNUDOS',
    description: 'Conductores de aluminio puro para líneas aéreas de transporte y distribución.',
    detailedDescription: 'Conductores formados por alambres de aluminio grado eléctrico 1350-H19 cableados concéntricamente. Ofrecen una excelente relación conductividad-peso, ideales para vanos cortos y medios.',
    image: '/images/PRODUCTOS/2-LINEAS AEREAS/2-DESNUDOS/1-CABLE DESNUDO DE ALUMINIO/PORTADA (ELIMINAR LOGO GEMINI).jpeg',
    specs: ['Aluminio 1350', 'Temple Duro', 'IRAM 2212'],
    characteristics: [
      'Material: Aluminio 1350-H19.',
      'Formación: Alambres cableados concéntricamente.',
      'Alta conductividad eléctrica.',
      'Bajo peso por metro.',
      'Norma: IRAM 2212 / ASTM B231.'
    ],
    applications: 'Líneas aéreas de distribución y transmisión donde se requiere bajo peso.',
    installation: 'Tendido aéreo sobre aisladores, requiere elementos de tensión específicos para aluminio.',
    specsTable: [
      { "Sección (mm²)": "16", "Formación (Nº x mm)": "7 x 1,70", "Diámetro (mm)": "5,1", "Peso (kg/km)": "43", "Resistencia (Ohm/km)": "1,80" },
      { "Sección (mm²)": "25", "Formación (Nº x mm)": "7 x 2,13", "Diámetro (mm)": "6,4", "Peso (kg/km)": "68", "Resistencia (Ohm/km)": "1,14" },
      { "Sección (mm²)": "35", "Formación (Nº x mm)": "7 x 2,52", "Diámetro (mm)": "7,6", "Peso (kg/km)": "95", "Resistencia (Ohm/km)": "0,81" },
      { "Sección (mm²)": "50", "Formación (Nº x mm)": "7 x 3,02", "Diámetro (mm)": "9,1", "Peso (kg/km)": "136", "Resistencia (Ohm/km)": "0,56" },
      { "Sección (mm²)": "70", "Formación (Nº x mm)": "19 x 2,14", "Diámetro (mm)": "10,7", "Peso (kg/km)": "192", "Resistencia (Ohm/km)": "0,40" }
    ],
    certifications: ['iram', 'seguridad']
  },
  {
    id: 'aerea-desnudo-cobre',
    name: 'Cables Desnudos de Cobre Duro',
    category: 'Cables Instalación Aérea',
    subCategory: '2-DESNUDOS',
    description: 'Conductores de cobre electrolítico de alta pureza para redes aéreas.',
    detailedDescription: 'Conductores de cobre electrolítico recocido o duro, cableados en capas concéntricas. Alta conductividad y excelente resistencia a la corrosión ambiental.',
    image: '/images/PRODUCTOS/2-LINEAS AEREAS/2-DESNUDOS/2-CABLE DESNUDO DE COBRE DURO/PORTADA (ELIMINAR LOGO GEMINI).jpeg',
    specs: ['Cobre Electrolítico', 'Temple Duro', 'IRAM 2004'],
    characteristics: [
      'Material: Cobre electrolítico de alta pureza (99.9%).',
      'Temple: Duro (para líneas aéreas) o Recocido (para puestas a tierra).',
      'Alta resistencia a la tracción.',
      'Excelente resistencia a la corrosión.',
      'Norma: IRAM 2004.'
    ],
    applications: 'Redes aéreas de distribución, líneas de transmisión y sistemas de puesta a tierra.',
    installation: 'Tendido aéreo sobre aisladores o instalación directa en tierra para sistemas de descarga.',
    specsTable: [
      { "Sección (mm²)": "16", "Formación (Nº x mm)": "7 x 1,70", "Diámetro (mm)": "5,1", "Peso (kg/km)": "142", "Resistencia (Ohm/km)": "1,15" },
      { "Sección (mm²)": "25", "Formación (Nº x mm)": "7 x 2,14", "Diámetro (mm)": "6,4", "Peso (kg/km)": "225", "Resistencia (Ohm/km)": "0,72" },
      { "Sección (mm²)": "35", "Formación (Nº x mm)": "7 x 2,52", "Diámetro (mm)": "7,6", "Peso (kg/km)": "312", "Resistencia (Ohm/km)": "0,52" },
      { "Sección (mm²)": "50", "Formación (Nº x mm)": "19 x 1,78", "Diámetro (mm)": "8,9", "Peso (kg/km)": "438", "Resistencia (Ohm/km)": "0,38" },
      { "Sección (mm²)": "70", "Formación (Nº x mm)": "19 x 2,14", "Diámetro (mm)": "10,7", "Peso (kg/km)": "635", "Resistencia (Ohm/km)": "0,26" }
    ],
    certifications: ['iram', 'seguridad']
  },
  {
    id: 'aerea-aluminio-acero',
    name: 'Cable Aluminio-Acero (ACSR)',
    category: 'Cables Instalación Aérea',
    subCategory: '2-DESNUDOS',
    description: 'Conductores reforzados con alma de acero para grandes vanos y alta resistencia mecánica.',
    detailedDescription: 'Conductores formados por alambres de aluminio grado 1350-H19 cableados sobre un núcleo central de acero galvanizado. Combina la conductividad del aluminio con la resistencia mecánica del acero.',
    image: '/images/PRODUCTOS/2-LINEAS AEREAS/2-DESNUDOS/3-CABLE ALUMINIO-ACERO/PORTADA (ELIMINAR LOGO GEMINI).jpeg',
    specs: ['ACSR', 'Reforzado', 'IRAM 2187'],
    characteristics: [
      'Material: Aluminio 1350 y Acero Galvanizado.',
      'Estructura: Núcleo de acero portante.',
      'Alta resistencia a la rotura.',
      'Permite vanos (distancia entre postes) mucho más largos.',
      'Norma: IRAM 2187.'
    ],
    applications: 'Líneas de alta tensión, transmisión y distribución rural de energía.',
    installation: 'Tendido aéreo de largo alcance. Requiere herrajes de amarre y suspensión diseñados para ACSR.',
    specsTable: [
      { "Sección (Al/Ac)": "16/2.5", "Diámetro (mm)": "5,6", "Peso (kg/km)": "62", "Carga Rotura (kgf)": "570" },
      { "Sección (Al/Ac)": "25/4", "Diámetro (mm)": "7,0", "Peso (kg/km)": "95", "Carga Rotura (kgf)": "920" },
      { "Sección (Al/Ac)": "35/6", "Diámetro (mm)": "8,4", "Peso (kg/km)": "145", "Carga Rotura (kgf)": "1350" },
      { "Sección (Al/Ac)": "50/8", "Diámetro (mm)": "10,1", "Peso (kg/km)": "205", "Carga Rotura (kgf)": "1850" },
      { "Sección (Al/Ac)": "70/12", "Diámetro (mm)": "12,0", "Peso (kg/km)": "285", "Sección (Al/Ac)": "95/15", "Carga Rotura (kgf)": "2450" }
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