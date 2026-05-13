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