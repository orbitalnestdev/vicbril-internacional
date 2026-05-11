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
    image: '/images/fotos-nuevas/Cables Instalación Aérea.jpg',
    banner: '/images/fotos-nuevas/Cables Instalación Aérea.jpg'
  },
  {
    id: 'potencia',
    name: 'Cables de Potencia',
    slug: 'potencia',
    image: '/images/fotos-nuevas/Cables de potencia.jpg',
    banner: '/images/fotos-nuevas/Cables de potencia.jpg'
  },
  {
    id: 'media-tension',
    name: 'Cables Media Tensión',
    slug: 'media-tension',
    image: '/images/fotos-nuevas/Cables-media-tension.jpg',
    banner: '/images/fotos-nuevas/Cables-media-tension.jpg'
  },
  {
    id: 'industriales',
    name: 'Cables Industriales',
    slug: 'industriales',
    image: '/images/fotos-nuevas/Cables industriales.jpg',
    banner: '/images/fotos-nuevas/Cables industriales.jpg'
  },
  {
    id: 'alta-temperatura',
    name: 'Cables Alta Temperatura',
    slug: 'alta-temperatura',
    image: '/images/fotos-nuevas/Cables-alta-temperatura.jpg',
    banner: '/images/fotos-nuevas/Cables-alta-temperatura.jpg'
  },
  {
    id: 'armados',
    name: 'Cables Armados',
    slug: 'armados',
    image: '/images/fotos-nuevas/Cables-armados.jpg',
    banner: '/images/fotos-nuevas/Cables-armados.jpg'
  },
  {
    id: 'especiales',
    name: 'Resto de Cables Especiales',
    slug: 'cables-especiales',
    image: '/images/fotos-nuevas/Resto-de-Cables-Especiales.jpg',
    banner: '/images/fotos-nuevas/Resto-de-Cables-Especiales.jpg'
  },
  {
    id: 'materiales-electricos',
    name: 'Resto de Materiales Eléctricos',
    slug: 'materiales-electricos',
    image: '/images/fotos-nuevas/Materiales electricos.jpg',
    banner: '/images/fotos-nuevas/Materiales electricos.jpg'
  }
];

export const products: Product[] = [
  {
    id: 'unipolar-pvc',
    name: 'Cable Unipolar PVC',
    category: 'Cables para Instalación Civil',
    subCategory: '1-CABLE UNIPOLAR',
    description: 'Conductores de cobre con aislación de PVC para instalaciones fijas.',
    detailedDescription: 'Cable unipolar de cobre electrolítico recocido, aislado con una capa de PVC/A. Diseñados para instalaciones fijas en viviendas, oficinas y edificios industriales. Gran facilidad de deslizamiento en conductos.',
    image: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR PVC/PORTADA.jpg',
    gallery: [
      '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR PVC/FICHA TECNICA UNIPOLAR PVC/foto producto dentro de ficha tecnica.jpeg'
    ],
    technicalTable: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR PVC/FICHA TECNICA UNIPOLAR PVC/marcas disponibles unipolar pvc.jpg',
    pdf: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR PVC/FICHA TECNICA UNIPOLAR PVC/FICHA TECNICA UNIP PVC (REEMPLAZAR FOTO DE ABAJO).pdf',
    specs: ['750V', 'Norma IRAM 247-3', 'PVC Ecológico'],
    characteristics: [
      'Temperatura máxima: 70° C de servicio',
      'Tensión nominal: 450/750 Volt',
      'Norma constructiva: IEC 60227-3 - IRAM NM 247-3',
      'Norma de fuego: IEC 60332-3-23 / IRAM NM IEC 60332-3-23',
      'Norma de conductores: IEC 60228 / IRAM NM 280'
    ],
    applications: 'Apto para instalaciones fijas en interiores de inmuebles civiles, comerciales e industriales. Permite cableado en tableros, cañerías embutidas y cañerías a la vista, recomendando el uso de bandejas portantes.',
    installation: 'Montaje: Radio mínimo de curvatura igual a 7 x diámetro exterior del cable. Tracción máxima: 5daN/mm² aplicados sobre los conductores. Temperatura de montaje: Igual o mayor a 5°C.',
    specsTable: [
      { "Sección nominal (mm²)": "0,5", "Espesor aislación (mm)": "0,60", "Diámetro exterior (mm)": "2,1", "Peso (kg/km)": "8,2", "Resistencia eléctrica (Ohm/km)": "39", "Intensidad admisible (A)": "4,8" },
      { "Sección nominal (mm²)": "0,75", "Espesor aislación (mm)": "0,60", "Diámetro exterior (mm)": "2,3", "Peso (kg/km)": "10,8", "Resistencia eléctrica (Ohm/km)": "26", "Intensidad admisible (A)": "7,2" },
      { "Sección nominal (mm²)": "1", "Espesor aislación (mm)": "0,70", "Diámetro exterior (mm)": "2,7", "Peso (kg/km)": "14,4", "Resistencia eléctrica (Ohm/km)": "19,5", "Intensidad admisible (A)": "9,6" },
      { "Sección nominal (mm²)": "1,5", "Espesor aislación (mm)": "0,70", "Diámetro exterior (mm)": "3,0", "Peso (kg/km)": "20", "Resistencia eléctrica (Ohm/km)": "13,3", "Intensidad admisible (A)": "13" },
      { "Sección nominal (mm²)": "2,5", "Espesor aislación (mm)": "0,80", "Diámetro exterior (mm)": "3,6", "Peso (kg/km)": "31", "Resistencia eléctrica (Ohm/km)": "7,98", "Intensidad admisible (A)": "18" },
      { "Sección nominal (mm²)": "4", "Espesor aislación (mm)": "0,80", "Diámetro exterior (mm)": "4,1", "Peso (kg/km)": "45", "Resistencia eléctrica (Ohm/km)": "4,95", "Intensidad admisible (A)": "24" },
      { "Sección nominal (mm²)": "6", "Espesor aislación (mm)": "0,80", "Diámetro exterior (mm)": "4,7", "Peso (kg/km)": "63", "Resistencia eléctrica (Ohm/km)": "3,3", "Intensidad admisible (A)": "31" },
      { "Sección nominal (mm²)": "10", "Espesor aislación (mm)": "1,00", "Diámetro exterior (mm)": "6,2", "Peso (kg/km)": "112", "Resistencia eléctrica (Ohm/km)": "1,91", "Intensidad admisible (A)": "43" },
      { "Sección nominal (mm²)": "16", "Espesor aislación (mm)": "1,00", "Diámetro exterior (mm)": "7,1", "Peso (kg/km)": "166", "Resistencia eléctrica (Ohm/km)": "1,21", "Intensidad admisible (A)": "59" },
      { "Sección nominal (mm²)": "25", "Espesor aislación (mm)": "1,20", "Diámetro exterior (mm)": "8,7", "Peso (kg/km)": "260", "Resistencia eléctrica (Ohm/km)": "0,78", "Intensidad admisible (A)": "77" },
      { "Sección nominal (mm²)": "35", "Espesor aislación (mm)": "1,20", "Diámetro exterior (mm)": "9,8", "Peso (kg/km)": "350", "Resistencia eléctrica (Ohm/km)": "0,55", "Intensidad admisible (A)": "96" },
      { "Sección nominal (mm²)": "50", "Espesor aislación (mm)": "1,40", "Diámetro exterior (mm)": "11,5", "Peso (kg/km)": "485", "Resistencia eléctrica (Ohm/km)": "0,38", "Intensidad admisible (A)": "117" },
      { "Sección nominal (mm²)": "70", "Espesor aislación (mm)": "1,40", "Diámetro exterior (mm)": "13,2", "Peso (kg/km)": "680", "Resistencia eléctrica (Ohm/km)": "0,27", "Intensidad admisible (A)": "148" },
      { "Sección nominal (mm²)": "95", "Espesor aislación (mm)": "1,60", "Diámetro exterior (mm)": "15,4", "Peso (kg/km)": "930", "Resistencia eléctrica (Ohm/km)": "0,20", "Intensidad admisible (A)": "180" },
      { "Sección nominal (mm²)": "120", "Espesor aislación (mm)": "1,60", "Diámetro exterior (mm)": "17,1", "Peso (kg/km)": "1160", "Resistencia eléctrica (Ohm/km)": "0,16", "Intensidad admisible (A)": "207" },
      { "Sección nominal (mm²)": "150", "Espesor aislación (mm)": "1,80", "Diámetro exterior (mm)": "19,1", "Peso (kg/km)": "1450", "Resistencia eléctrica (Ohm/km)": "0,12", "Intensidad admisible (A)": "237" },
      { "Sección nominal (mm²)": "185", "Espesor aislación (mm)": "2,00", "Diámetro exterior (mm)": "21,4", "Peso (kg/km)": "1810", "Resistencia eléctrica (Ohm/km)": "0,10", "Intensidad admisible (A)": "270" },
      { "Sección nominal (mm²)": "240", "Espesor aislación (mm)": "2,20", "Diámetro exterior (mm)": "24,3", "Peso (kg/km)": "2370", "Resistencia eléctrica (Ohm/km)": "0,08", "Intensidad admisible (A)": "318" }
    ]
  },
  {
    id: 'unipolar-lsoh',
    name: 'Cable Unipolar LSOH',
    category: 'Cables para Instalación Civil',
    subCategory: '1-CABLE UNIPOLAR',
    description: 'Conductores de cobre con aislación libre de halógenos (Baja emisión de humos).',
    detailedDescription: 'Cables unipolares con aislación de compuesto termoplástico libre de halógenos, con baja emisión de humos y gases corrosivos. Ideales para lugares con alta concentración de personas y locales de pública concurrencia.',
    image: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR LSOH/PORTADA.jpeg',
    gallery: [
      '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR LSOH/FICHA TECNICA UNIPOLAR LSOH/foto producto dentro de ficha tecnica.jpeg'
    ],
    technicalTable: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR LSOH/FICHA TECNICA UNIPOLAR LSOH/MARCAS DISPONIBLES UNIPOLAR LSOH.jpg',
    pdf: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR LSOH/FICHA TECNICA UNIPOLAR LSOH/FICHA TECNICA UNIP. LSOH (REEMPLAZAR FOTO).pdf',
    specs: ['1.1kV', 'Libre de Halógenos', 'Baja Emisión de Humos'],
    characteristics: [
      'Temperatura: Máxima de servicio 70°C',
      'Tensión: 450/750 Volt',
      'Normas: IRAM 62267, IEC 60332-3-24, IEC 60754-1/2, IEC 61034, NES 713',
      'Conductor: Cobre electrolítico recocido, clase 5'
    ],
    applications: 'Cableado en tableros, cañerías embutidas y a la vista. Se recomienda el uso de bandejas portantes.',
    installation: 'Radio de curvatura: Mínimo 7 veces el diámetro exterior. Tracción máxima: 5daN/mm² sobre conductores de cobre. Temperatura de montaje: ≥ 5°C.',
    specsTable: [
      { "Sección nominal (mm²)": "0,5", "Espesor aislación (mm)": "0,60", "Diámetro exterior (mm)": "2,1", "Peso (kg/km)": "8,2", "Resistencia eléctrica (Ohm/km)": "39", "Intensidad admisible (A)": "4,8" },
      { "Sección nominal (mm²)": "0,75", "Espesor aislación (mm)": "0,60", "Diámetro exterior (mm)": "2,3", "Peso (kg/km)": "10,8", "Resistencia eléctrica (Ohm/km)": "26", "Intensidad admisible (A)": "7,2" },
      { "Sección nominal (mm²)": "1", "Espesor aislación (mm)": "0,70", "Diámetro exterior (mm)": "2,7", "Peso (kg/km)": "14,4", "Resistencia eléctrica (Ohm/km)": "19,5", "Intensidad admisible (A)": "9,6" },
      { "Sección nominal (mm²)": "1,5", "Espesor aislación (mm)": "0,70", "Diámetro exterior (mm)": "3,0", "Peso (kg/km)": "20", "Resistencia eléctrica (Ohm/km)": "13,3", "Intensidad admisible (A)": "13" },
      { "Sección nominal (mm²)": "2,5", "Espesor aislación (mm)": "0,80", "Diámetro exterior (mm)": "3,6", "Peso (kg/km)": "31", "Resistencia eléctrica (Ohm/km)": "7,98", "Intensidad admisible (A)": "18" },
      { "Sección nominal (mm²)": "4", "Espesor aislación (mm)": "0,80", "Diámetro exterior (mm)": "4,1", "Peso (kg/km)": "45", "Resistencia eléctrica (Ohm/km)": "4,95", "Intensidad admisible (A)": "24" },
      { "Sección nominal (mm²)": "6", "Espesor aislación (mm)": "0,80", "Diámetro exterior (mm)": "4,7", "Peso (kg/km)": "63", "Resistencia eléctrica (Ohm/km)": "3,3", "Intensidad admisible (A)": "31" },
      { "Sección nominal (mm²)": "10", "Espesor aislación (mm)": "1,00", "Diámetro exterior (mm)": "6,2", "Peso (kg/km)": "112", "Resistencia eléctrica (Ohm/km)": "1,91", "Intensidad admisible (A)": "43" },
      { "Sección nominal (mm²)": "16", "Espesor aislación (mm)": "1,00", "Diámetro exterior (mm)": "7,1", "Peso (kg/km)": "166", "Resistencia eléctrica (Ohm/km)": "1,21", "Intensidad admisible (A)": "59" },
      { "Sección nominal (mm²)": "25", "Espesor aislación (mm)": "1,20", "Diámetro exterior (mm)": "8,7", "Peso (kg/km)": "260", "Resistencia eléctrica (Ohm/km)": "0,78", "Intensidad admisible (A)": "77" },
      { "Sección nominal (mm²)": "35", "Espesor aislación (mm)": "1,20", "Diámetro exterior (mm)": "9,8", "Peso (kg/km)": "350", "Resistencia eléctrica (Ohm/km)": "0,55", "Intensidad admisible (A)": "96" },
      { "Sección nominal (mm²)": "50", "Espesor aislación (mm)": "1,40", "Diámetro exterior (mm)": "11,5", "Peso (kg/km)": "485", "Resistencia eléctrica (Ohm/km)": "0,38", "Intensidad admisible (A)": "117" },
      { "Sección nominal (mm²)": "70", "Espesor aislación (mm)": "1,40", "Diámetro exterior (mm)": "13,2", "Peso (kg/km)": "680", "Resistencia eléctrica (Ohm/km)": "0,27", "Intensidad admisible (A)": "148" },
      { "Sección nominal (mm²)": "95", "Espesor aislación (mm)": "1,60", "Diámetro exterior (mm)": "15,4", "Peso (kg/km)": "930", "Resistencia eléctrica (Ohm/km)": "0,20", "Intensidad admisible (A)": "180" },
      { "Sección nominal (mm²)": "120", "Espesor aislación (mm)": "1,60", "Diámetro exterior (mm)": "17,1", "Peso (kg/km)": "1160", "Resistencia eléctrica (Ohm/km)": "0,16", "Intensidad admisible (A)": "207" },
      { "Sección nominal (mm²)": "150", "Espesor aislación (mm)": "1,80", "Diámetro exterior (mm)": "19,1", "Peso (kg/km)": "1450", "Resistencia eléctrica (Ohm/km)": "0,12", "Intensidad admisible (A)": "237" },
      { "Sección nominal (mm²)": "185", "Espesor aislación (mm)": "2,00", "Diámetro exterior (mm)": "21,4", "Peso (kg/km)": "1810", "Resistencia eléctrica (Ohm/km)": "0,10", "Intensidad admisible (A)": "270" },
      { "Sección nominal (mm²)": "240", "Espesor aislación (mm)": "2,20", "Diámetro exterior (mm)": "24,3", "Peso (kg/km)": "2370", "Resistencia eléctrica (Ohm/km)": "0,08", "Intensidad admisible (A)": "318" }
    ]
  },
  {
    id: 'bipolar-vaina-chata',
    name: 'Cable Envainado Chato',
    category: 'Cables para Instalación Civil',
    subCategory: '2-CABLE BIPOLAR',
    description: 'Cables bipolares o tripolares chatos para instalaciones superficiales o discretas.',
    detailedDescription: 'Conductores de cobre aislados y protegidos por una vaina exterior chata de PVC. Su forma compacta permite instalaciones más estéticas y seguras en paredes o bajo alfombras/canaletas pequeñas.',
    image: '/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE ENVAINADO CHATO/portada.jpg',
    gallery: [
      '/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE ENVAINADO CHATO/FICHA TECNICA VAINA CHATA/foto producto dentro de ficha tecnica.png'
    ],
    technicalTable: '/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE ENVAINADO CHATO/FICHA TECNICA VAINA CHATA/MARCAS DISPONIBLES VAINA CHATA.jpg',
    pdf: '/images/PRODUCTOS/2-CABLE BIPOLAR/CABLE ENVAINADO CHATO/FICHA TECNICA VAINA CHATA/FICHA TECNICA VAINA CHATA.pdf',
    specs: ['300/500V', 'Perfil chato', 'PVC de alta calidad'],
    characteristics: [
      'Temperatura: 70°C servicio, 160°C cortocircuito',
      'Tensión: 300/500 Volt',
      'Normas: IEC 60227-7, IRAM NM 60332-1',
      'Materiales: Aislación y cubierta de PVC negro (no propagante)'
    ],
    applications: 'Instalaciones móviles industriales y domésticas, aparatos portátiles (excepto calefacción) e interconexión de máquinas fabriles.',
    installation: 'Apto para uso industrial y domiciliario; incluye conductor de tierra verde/amarillo.',
    specsTable: [
      { "Formación (Nº x mm²)": "2x1", "Diám. máx. alambres (mm)": "0,21", "Espesor aislación nominal (mm)": "0,6", "Espesor envoltura nominal (mm)": "0,6", "Dimensiones exteriores aprox. (mm)": "4,1 x 6,6", "Masa aprox. (kg/km)": "44", "Resistencia eléctrica máx. 20°C (Ohm/km)": "19,5", "Intensidad continua (A)": "7" },
      { "Formación (Nº x mm²)": "2x1,5", "Diám. máx. alambres (mm)": "0,26", "Espesor aislación nominal (mm)": "0,7", "Espesor envoltura nominal (mm)": "0,6", "Dimensiones exteriores aprox. (mm)": "4,5 x 7,5", "Masa aprox. (kg/km)": "58", "Resistencia eléctrica máx. 20°C (Ohm/km)": "13,3", "Intensidad continua (A)": "10" },
      { "Formación (Nº x mm²)": "2x2,5", "Diám. máx. alambres (mm)": "0,26", "Espesor aislación nominal (mm)": "0,8", "Espesor envoltura nominal (mm)": "0,6", "Dimensiones exteriores aprox. (mm)": "5,1 x 8,8", "Masa aprox. (kg/km)": "85", "Resistencia eléctrica máx. 20°C (Ohm/km)": "7,98", "Intensidad continua (A)": "16" },
      { "Formación (Nº x mm²)": "3x1", "Diám. máx. alambres (mm)": "0,21", "Espesor aislación nominal (mm)": "0,6", "Espesor envoltura nominal (mm)": "0,6", "Dimensiones exteriores aprox. (mm)": "4,1 x 9,2", "Masa aprox. (kg/km)": "64", "Resistencia eléctrica máx. 20°C (Ohm/km)": "19,5", "Intensidad continua (A)": "7" },
      { "Formación (Nº x mm²)": "3x1,5", "Diám. máx. alambres (mm)": "0,26", "Espesor aislación nominal (mm)": "0,7", "Espesor envoltura nominal (mm)": "0,6", "Dimensiones exteriores aprox. (mm)": "4,5 x 10,6", "Masa aprox. (kg/km)": "86", "Resistencia eléctrica máx. 20°C (Ohm/km)": "13,3", "Intensidad continua (A)": "10" },
      { "Formación (Nº x mm²)": "3x2,5", "Diám. máx. alambres (mm)": "0,26", "Espesor aislación nominal (mm)": "0,8", "Espesor envoltura nominal (mm)": "0,6", "Dimensiones exteriores aprox. (mm)": "5,1 x 12,5", "Masa aprox. (kg/km)": "126", "Resistencia eléctrica máx. 20°C (Ohm/km)": "7,98", "Intensidad continua (A)": "16" }
    ]
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
      { "Formación (Nº x mm²)": "2x1", "Diám. máx. alambres (mm)": "0,21", "Esp. aislación nominal (mm)": "0,6", "Dimensiones exteriores aprox. (mm)": "2,7 x 5,4", "Masa aprox. (kg/km)": "32", "Resistencia eléctrica máx. 20°C (Ohm/km)": "19,5", "Intensidad continua (A)": "6" },
      { "Formación (Nº x mm²)": "2x1,5", "Diám. máx. alambres (mm)": "0,26", "Esp. aislación nominal (mm)": "0,7", "Dimensiones exteriores aprox. (mm)": "3,0 x 6,1", "Masa aprox. (kg/km)": "45", "Resistencia eléctrica máx. 20°C (Ohm/km)": "13,3", "Intensidad continua (A)": "10" },
      { "Formación (Nº x mm²)": "2x2,5", "Diám. máx. alambres (mm)": "0,26", "Esp. aislación nominal (mm)": "0,8", "Dimensiones exteriores aprox. (mm)": "3,6 x 7,4", "Masa aprox. (kg/km)": "72", "Resistencia eléctrica máx. 20°C (Ohm/km)": "7,98", "Intensidad continua (A)": "15" }
    ]
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
    applications: 'Interconexión de equipos y aparatos portátiles.',
    installation: 'Diseñado para flexibilidad en instalaciones móviles.',
    specsTable: [
      { "Formación (Nº x mm²)": "2x1", "Diám. máx. alambres (mm)": "0,21", "Espesor aislación nominal (mm)": "0,6", "Espesor envoltura nominal (mm)": "0,6", "Dimensiones exteriores aprox. (mm)": "4,1 x 6,6", "Masa aprox. (kg/km)": "44", "Intensidad continua (A)": "7" },
      { "Formación (Nº x mm²)": "2x1,5", "Diám. máx. alambres (mm)": "0,26", "Espesor aislación nominal (mm)": "0,7", "Espesor envoltura nominal (mm)": "0,6", "Dimensiones exteriores aprox. (mm)": "4,5 x 7,5", "Masa aprox. (kg/km)": "58", "Intensidad continua (A)": "10" }
    ]
  },
  {
    id: 'civil-03',
    name: 'Cable Tipo Taller (TT)',
    category: 'Cables para Instalación Civil',
    subCategory: '3-CABLE TIPO TALLER',
    description: 'Cables multipolares flexibles para uso en aparatos portátiles and máquinas.',
    detailedDescription: 'Conductores de cobre flexible con aislamiento de PVC and vaina exterior de PVC color negro o gris.',
    image: '/images/PRODUCTOS/3-CABLE TIPO TALLER/PORTADA.jpeg',
    gallery: [
      '/images/PRODUCTOS/3-CABLE TIPO TALLER/FICHA TECNICA TIPO TALLER/foto producto dentro de ficha tecnica.jpeg'
    ],
    technicalTable: '/images/PRODUCTOS/3-CABLE TIPO TALLER/FICHA TECNICA TIPO TALLER/MARCAS DISPONIBLES TIPO TALLER.jpg',
    pdf: '/images/PRODUCTOS/3-CABLE TIPO TALLER/FICHA TECNICA TIPO TALLER/FICHA TECNICA TIPO TALLER (REEMPLAZAR FOTO).pdf',
    specs: ['300/500V', 'Extra flexible', 'Vaina de protección'],
    characteristics: [
      'Temperatura: 70°C servicio, 160°C cortocircuito',
      'Tensión: 300/500 Volt',
      'Normas: IRAM NM-247-5, IRAM NM IEC 60332-1',
      'Conductor: Cobre electrolítico flexible clase 5',
      'Cubierta: PVC Negro, no propagante'
    ],
    applications: 'Instalaciones móviles industriales y domésticas, maquinaria de mano y aparatos portátiles en general.',
    installation: 'Radio de curvatura: Mínimo 7 veces el diámetro exterior. Tracción máxima: 5daN/mm². Temperatura de montaje: ≥ 5°C.',
    specsTable: [
      { "Sección nominal (mm²)": "2x0,75", "Espesor nominal (mm)": "0,6", "Espesor cubierta (mm)": "0,8", "Diámetro exterior (mm)": "6,2", "Peso (kg/km)": "52", "Resistencia eléctrica 20°C (Ohm/km)": "26" },
      { "Sección nominal (mm²)": "2x1,0", "Espesor nominal (mm)": "0,6", "Espesor cubierta (mm)": "0,8", "Diámetro exterior (mm)": "6,5", "Peso (kg/km)": "60", "Resistencia eléctrica 20°C (Ohm/km)": "19,5" },
      { "Sección nominal (mm²)": "2x1,5", "Espesor nominal (mm)": "0,7", "Espesor cubierta (mm)": "0,8", "Diámetro exterior (mm)": "7,4", "Peso (kg/km)": "80", "Resistencia eléctrica 20°C (Ohm/km)": "13,3" },
      { "Sección nominal (mm²)": "2x2,5", "Espesor nominal (mm)": "0,8", "Espesor cubierta (mm)": "1", "Diámetro exterior (mm)": "9,1", "Peso (kg/km)": "125", "Resistencia eléctrica 20°C (Ohm/km)": "7,98" },
      { "Sección nominal (mm²)": "2x4,0", "Espesor nominal (mm)": "0,8", "Espesor cubierta (mm)": "1,1", "Diámetro exterior (mm)": "10,5", "Peso (kg/km)": "185", "Resistencia eléctrica 20°C (Ohm/km)": "4,95" },
      { "Sección nominal (mm²)": "3x1,0", "Espesor nominal (mm)": "0,6", "Espesor cubierta (mm)": "0,8", "Diámetro exterior (mm)": "6,9", "Peso (kg/km)": "72", "Resistencia eléctrica 20°C (Ohm/km)": "19,5" },
      { "Sección nominal (mm²)": "3x1,5", "Espesor nominal (mm)": "0,7", "Espesor cubierta (mm)": "0,9", "Diámetro exterior (mm)": "8,1", "Peso (kg/km)": "101", "Resistencia eléctrica 20°C (Ohm/km)": "13,3" },
      { "Sección nominal (mm²)": "3x2,5", "Espesor nominal (mm)": "0,8", "Espesor cubierta (mm)": "1,1", "Diámetro exterior (mm)": "9,9", "Peso (kg/km)": "157", "Resistencia eléctrica 20°C (Ohm/km)": "7,98" },
      { "Sección nominal (mm²)": "3x4,0", "Espesor nominal (mm)": "0,8", "Espesor cubierta (mm)": "1,2", "Diámetro exterior (mm)": "11,4", "Peso (kg/km)": "235", "Resistencia eléctrica 20°C (Ohm/km)": "4,95" },
      { "Sección nominal (mm²)": "4x1,5", "Espesor nominal (mm)": "0,7", "Espesor cubierta (mm)": "1", "Diámetro exterior (mm)": "9,1", "Peso (kg/km)": "128", "Resistencia eléctrica 20°C (Ohm/km)": "13,3" },
      { "Sección nominal (mm²)": "4x2,5", "Espesor nominal (mm)": "0,8", "Espesor cubierta (mm)": "1,1", "Diámetro exterior (mm)": "10,8", "Peso (kg/km)": "191", "Resistencia eléctrica 20°C (Ohm/km)": "7,98" },
      { "Sección nominal (mm²)": "4x4,0", "Espesor nominal (mm)": "0,8", "Espesor cubierta (mm)": "1,2", "Diámetro exterior (mm)": "12,6", "Peso (kg/km)": "285", "Resistencia eléctrica 20°C (Ohm/km)": "4,95" },
      { "Sección nominal (mm²)": "4x6,0", "Espesor nominal (mm)": "0,8", "Espesor cubierta (mm)": "1,3", "Diámetro exterior (mm)": "14,5", "Peso (kg/km)": "410", "Resistencia eléctrica 20°C (Ohm/km)": "3,30" }
    ]
  },
  {
    id: 'aerea-preensamblado',
    name: 'Cable Preensamblado Aluminio',
    category: 'Cables Instalación Aérea',
    subCategory: 'CABLES AÉREOS',
    description: 'Conductores de aluminio para redes de distribución aérea de baja tensión.',
    detailedDescription: 'Cables formados por uno o más conductores de aluminio aislados con XLPE, trenzados alrededor de un elemento portante.',
    image: '/images/fotos-nuevas/Cables Instalación Aérea.jpg',
    specs: ['Baja Tensión', 'XLPE', 'Aluminio'],
    characteristics: ['Resistente a la intemperie', 'Larga vida útil', 'Fácil instalación'],
    specsTable: [
      { "Formación": "2x16", "Sección Fase": "16", "Neutro": "16", "Esp. Aisl.": "1,2", "Diámetro": "15,5", "Peso": "145", "Resist.": "1,91", "Amp (Aire)": "75" },
      { "Formación": "2x25", "Sección Fase": "25", "Neutro": "25", "Esp. Aisl.": "1,4", "Diámetro": "18,2", "Peso": "215", "Resist.": "1,20", "Amp (Aire)": "100" },
      { "Formación": "2x35", "Sección Fase": "35", "Neutro": "35", "Esp. Aisl.": "1,6", "Diámetro": "20,5", "Peso": "290", "Resist.": "0,86", "Amp (Aire)": "125" },
      { "Formación": "4x16", "Sección Fase": "16", "Neutro": "16", "Esp. Aisl.": "1,2", "Diámetro": "18,5", "Peso": "290", "Resist.": "1,91", "Amp (Aire)": "75" },
      { "Formación": "4x25", "Sección Fase": "25", "Neutro": "25", "Esp. Aisl.": "1,4", "Diámetro": "22,1", "Peso": "430", "Resist.": "1,20", "Amp (Aire)": "100" },
      { "Formación": "4x35", "Sección Fase": "35", "Neutro": "35", "Esp. Aisl.": "1,6", "Diámetro": "25,2", "Peso": "580", "Resist.": "0,86", "Amp (Aire)": "125" },
      { "Formación": "4x50", "Sección Fase": "50", "Neutro": "50", "Esp. Aisl.": "1,8", "Diámetro": "29,1", "Peso": "790", "Resist.": "0,64", "Amp (Aire)": "150" },
      { "Formación": "4x70", "Sección Fase": "70", "Neutro": "70", "Esp. Aisl.": "1,8", "Diámetro": "33,5", "Peso": "1120", "Resist.": "0,44", "Amp (Aire)": "190" },
      { "Formación": "4x95", "Sección Fase": "95", "Neutro": "95", "Esp. Aisl.": "2,0", "Diámetro": "38,8", "Peso": "1540", "Resist.": "0,32", "Amp (Aire)": "230" }
    ]
  },
  {
    id: 'potencia-sintenax',
    name: 'Cable de Potencia Sintenax',
    category: 'Cables de Potencia',
    subCategory: 'CABLES DE POTENCIA',
    description: 'Cables para distribución de energía en baja tensión, aptos para enterrar.',
    detailedDescription: 'Conductores de cobre con aislación de PVC y vaina de PVC. Gran resistencia mecánica y a agentes químicos.',
    image: '/images/fotos-nuevas/Cables de potencia.jpg',
    specs: ['1.1kV', 'IRAM 2178-1', 'Apto Subterráneo'],
    characteristics: ['Doble aislación', 'Gran flexibilidad', 'Resistente a la humedad'],
    specsTable: [
      { "Formación (Nº x mm²)": "2x1,5", "Espesor aislación nominal (mm)": "0,8", "Espesor envoltura nominal (mm)": "1,8", "Diámetro exterior aprox. (mm)": "10,5", "Masa aprox. (kg/km)": "165", "Resistencia eléctrica máx. 20°C (Ohm/km)": "13,3", "Intensidad admisible (A) Tierra": "32", "Intensidad admisible (A) Aire": "24" },
      { "Formación (Nº x mm²)": "2x2,5", "Espesor aislación nominal (mm)": "0,8", "Espesor envoltura nominal (mm)": "1,8", "Diámetro exterior aprox. (mm)": "11,5", "Masa aprox. (kg/km)": "205", "Resistencia eléctrica máx. 20°C (Ohm/km)": "7,98", "Intensidad admisible (A) Tierra": "42", "Intensidad admisible (A) Aire": "32" },
      { "Formación (Nº x mm²)": "2x4", "Espesor aislación nominal (mm)": "1,0", "Espesor envoltura nominal (mm)": "1,8", "Diámetro exterior aprox. (mm)": "12,8", "Masa aprox. (kg/km)": "270", "Resistencia eléctrica máx. 20°C (Ohm/km)": "4,95", "Intensidad admisible (A) Tierra": "54", "Intensidad admisible (A) Aire": "42" },
      { "Formación (Nº x mm²)": "2x6", "Espesor aislación nominal (mm)": "1,0", "Espesor envoltura nominal (mm)": "1,8", "Diámetro exterior aprox. (mm)": "14,0", "Masa aprox. (kg/km)": "340", "Resistencia eléctrica máx. 20°C (Ohm/km)": "3,30", "Intensidad admisible (A) Tierra": "68", "Intensidad admisible (A) Aire": "54" },
      { "Formación (Nº x mm²)": "3x1,5", "Espesor aislación nominal (mm)": "0,8", "Espesor envoltura nominal (mm)": "1,8", "Diámetro exterior aprox. (mm)": "11,2", "Masa aprox. (kg/km)": "195", "Resistencia eléctrica máx. 20°C (Ohm/km)": "13,3", "Intensidad admisible (A) Tierra": "27", "Intensidad admisible (A) Aire": "20" },
      { "Formación (Nº x mm²)": "3x2,5", "Espesor aislación nominal (mm)": "0,8", "Espesor envoltura nominal (mm)": "1,8", "Diámetro exterior aprox. (mm)": "12,2", "Masa aprox. (kg/km)": "250", "Resistencia eléctrica máx. 20°C (Ohm/km)": "7,98", "Intensidad admisible (A) Tierra": "36", "Intensidad admisible (A) Aire": "28" },
      { "Formación (Nº x mm²)": "3x4", "Espesor aislación nominal (mm)": "1,0", "Espesor envoltura nominal (mm)": "1,8", "Diámetro exterior aprox. (mm)": "13,6", "Masa aprox. (kg/km)": "320", "Resistencia eléctrica máx. 20°C (Ohm/km)": "4,95", "Intensidad admisible (A) Tierra": "46", "Intensidad admisible (A) Aire": "36" },
      { "Formación (Nº x mm²)": "4x1,5", "Espesor aislación nominal (mm)": "0,8", "Espesor envoltura nominal (mm)": "1,8", "Diámetro exterior aprox. (mm)": "12,1", "Masa aprox. (kg/km)": "225", "Resistencia eléctrica máx. 20°C (Ohm/km)": "13,3", "Intensidad admisible (A) Tierra": "27", "Intensidad admisible (A) Aire": "20" },
      { "Formación (Nº x mm²)": "4x2,5", "Espesor aislación nominal (mm)": "0,8", "Espesor envoltura nominal (mm)": "1,8", "Diámetro exterior aprox. (mm)": "13,3", "Masa aprox. (kg/km)": "295", "Resistencia eléctrica máx. 20°C (Ohm/km)": "7,98", "Intensidad admisible (A) Tierra": "36", "Intensidad admisible (A) Aire": "28" },
      { "Formación (Nº x mm²)": "4x4", "Espesor aislación nominal (mm)": "1,0", "Espesor envoltura nominal (mm)": "1,8", "Diámetro exterior aprox. (mm)": "14,8", "Masa aprox. (kg/km)": "395", "Resistencia eléctrica máx. 20°C (Ohm/km)": "4,95", "Intensidad admisible (A) Tierra": "46", "Intensidad admisible (A) Aire": "36" },
      { "Formación (Nº x mm²)": "4x6", "Espesor aislación nominal (mm)": "1,0", "Espesor envoltura nominal (mm)": "1,8", "Diámetro exterior aprox. (mm)": "16,2", "Masa aprox. (kg/km)": "510", "Resistencia eléctrica máx. 20°C (Ohm/km)": "3,30", "Intensidad admisible (A) Tierra": "58", "Intensidad admisible (A) Aire": "46" },
      { "Formación (Nº x mm²)": "4x10", "Espesor aislación nominal (mm)": "1,0", "Espesor envoltura nominal (mm)": "1,8", "Diámetro exterior aprox. (mm)": "18,8", "Masa aprox. (kg/km)": "750", "Resistencia eléctrica máx. 20°C (Ohm/km)": "1,91", "Intensidad admisible (A) Tierra": "77", "Intensidad admisible (A) Aire": "64" },
      { "Formación (Nº x mm²)": "4x16", "Espesor aislación nominal (mm)": "1,0", "Espesor envoltura nominal (mm)": "1,8", "Diámetro exterior aprox. (mm)": "21,5", "Masa aprox. (kg/km)": "1080", "Resistencia eléctrica máx. 20°C (Ohm/km)": "1,21", "Intensidad admisible (A) Tierra": "100", "Intensidad admisible (A) Aire": "85" },
      { "Formación (Nº x mm²)": "4x25", "Espesor aislación nominal (mm)": "1,2", "Espesor envoltura nominal (mm)": "1,8", "Diámetro exterior aprox. (mm)": "25,8", "Masa aprox. (kg/km)": "1620", "Resistencia eléctrica máx. 20°C (Ohm/km)": "0,78", "Intensidad admisible (A) Tierra": "130", "Intensidad admisible (A) Aire": "112" },
      { "Formación (Nº x mm²)": "4x35", "Espesor aislación nominal (mm)": "1,2", "Espesor envoltura nominal (mm)": "2,0", "Diámetro exterior aprox. (mm)": "28,5", "Masa aprox. (kg/km)": "2150", "Resistencia eléctrica máx. 20°C (Ohm/km)": "0,55", "Intensidad admisible (A) Tierra": "155", "Intensidad admisible (A) Aire": "137" }
    ]
  },
  {
    id: 'media-tension-xlp',
    name: 'Cable Media Tensión XLP',
    category: 'Cables Media Tensión',
    subCategory: 'MEDIA TENSIÓN',
    description: 'Cables de potencia para media tensión de 13.2kV a 33kV.',
    detailedDescription: 'Aislación de polietileno reticulado (XLPE) con pantalla metálica de cintas o alambres de cobre.',
    image: '/images/fotos-nuevas/Cables-media-tension.jpg',
    specs: ['13.2kV / 33kV', 'XLPE', 'IRAM 2178-2'],
    specsTable: [
      { "Sección nominal (mm²)": "35", "Espesor aislación nominal (mm)": "3,4", "Diámetro exterior aprox. (mm)": "24,5", "Masa aprox. (kg/km)": "980", "Resistencia eléctrica máx. 20°C (Ohm/km)": "0,52", "Intensidad admisible (A) Tierra": "165" },
      { "Sección nominal (mm²)": "50", "Espesor aislación nominal (mm)": "3,4", "Diámetro exterior aprox. (mm)": "26,1", "Masa aprox. (kg/km)": "1150", "Resistencia eléctrica máx. 20°C (Ohm/km)": "0,38", "Intensidad admisible (A) Tierra": "195" },
      { "Sección nominal (mm²)": "70", "Espesor aislación nominal (mm)": "3,4", "Diámetro exterior aprox. (mm)": "28,2", "Masa aprox. (kg/km)": "1420", "Resistencia eléctrica máx. 20°C (Ohm/km)": "0,26", "Intensidad admisible (A) Tierra": "240" },
      { "Sección nominal (mm²)": "95", "Espesor aislación nominal (mm)": "3,4", "Diámetro exterior aprox. (mm)": "30,5", "Masa aprox. (kg/km)": "1750", "Resistencia eléctrica máx. 20°C (Ohm/km)": "0,19", "Intensidad admisible (A) Tierra": "285" },
      { "Sección nominal (mm²)": "120", "Espesor aislación nominal (mm)": "3,4", "Diámetro exterior aprox. (mm)": "32,4", "Masa aprox. (kg/km)": "2100", "Resistencia eléctrica máx. 20°C (Ohm/km)": "0,15", "Intensidad admisible (A) Tierra": "325" },
      { "Sección nominal (mm²)": "150", "Espesor aislación nominal (mm)": "3,4", "Diámetro exterior aprox. (mm)": "34,8", "Masa aprox. (kg/km)": "2450", "Resistencia eléctrica máx. 20°C (Ohm/km)": "0,12", "Intensidad admisible (A) Tierra": "365" },
      { "Sección nominal (mm²)": "185", "Espesor aislación nominal (mm)": "3,4", "Diámetro exterior aprox. (mm)": "37,2", "Masa aprox. (kg/km)": "2900", "Resistencia eléctrica máx. 20°C (Ohm/km)": "0,09", "Intensidad admisible (A) Tierra": "415" },
      { "Sección nominal (mm²)": "240", "Espesor aislación nominal (mm)": "3,4", "Diámetro exterior aprox. (mm)": "41,5", "Masa aprox. (kg/km)": "3650", "Resistencia eléctrica máx. 20°C (Ohm/km)": "0,07", "Intensidad admisible (A) Tierra": "480" },
      { "Sección nominal (mm²)": "300", "Espesor aislación nominal (mm)": "3,4", "Diámetro exterior aprox. (mm)": "45,2", "Masa aprox. (kg/km)": "4400", "Resistencia eléctrica máx. 20°C (Ohm/km)": "0,06", "Intensidad admisible (A) Tierra": "540" }
    ]
  },
  {
    id: 'industrial-control',
    name: 'Cable de Control Apantallado',
    category: 'Cables Industriales',
    subCategory: 'CONTROL',
    description: 'Cables para circuitos de control y comando con protección contra interferencias.',
    detailedDescription: 'Conductores de cobre flexible con pantalla de cinta de aluminio o malla de cobre para protección electromagnética.',
    image: '/images/fotos-nuevas/Cables industriales.jpg',
    specs: ['300/500V', 'Blindado', 'Flexible'],
    specsTable: [
      { "Formación": "7x1,5", "Diámetro": "13,5", "Peso": "280" },
      { "Formación": "12x1,5", "Diámetro": "16,2", "Peso": "420" },
      { "Formación": "19x1,5", "Diámetro": "19,5", "Peso": "610" }
    ]
  },
  {
    id: 'alta-temperatura-silicona',
    name: 'Cable Siliconado (Alta Temperatura)',
    category: 'Cables Alta Temperatura',
    subCategory: 'ALTA TEMPERATURA',
    description: 'Conductores con aislación de silicona para temperaturas de hasta 180°C.',
    detailedDescription: 'Cables diseñados para soportar condiciones térmicas extremas sin perder flexibilidad ni propiedades eléctricas.',
    image: '/images/fotos-nuevas/Cables-alta-temperatura.jpg',
    specs: ['180°C', 'Extra Flexible', 'Clase H'],
    specsTable: [
      { "Sección": "1,5", "Diámetro": "3,2", "Peso": "22" },
      { "Sección": "2,5", "Diámetro": "4,0", "Peso": "34" },
      { "Sección": "4", "Diámetro": "4,8", "Peso": "52" }
    ]
  },
  {
    id: 'armados-acero',
    name: 'Cable Armado (Protección Mecánica)',
    category: 'Cables Armados',
    subCategory: 'ARMADOS',
    description: 'Cables con armadura de hilos o fleje de acero para máxima protección mecánica.',
    detailedDescription: 'Diseñados para instalaciones donde se requiere resistencia a impactos, aplastamiento o ataques de roedores.',
    image: '/images/fotos-nuevas/Cables-armados.jpg',
    specs: ['1.1kV', 'Armadura de Acero', 'Subterráneo'],
    specsTable: [
      { "Formación (Nº x mm²)": "4x16", "Espesor aislación nominal (mm)": "1,0", "Espesor envoltura nominal (mm)": "1,8", "Diámetro exterior aprox. (mm)": "24,5", "Masa aprox. (kg/km)": "1150", "Resistencia eléctrica máx. 20°C (Ohm/km)": "1,21", "Intensidad admisible (A)": "100" },
      { "Formación (Nº x mm²)": "4x25", "Espesor aislación nominal (mm)": "1,2", "Espesor envoltura nominal (mm)": "1,8", "Diámetro exterior aprox. (mm)": "28,2", "Masa aprox. (kg/km)": "1680", "Resistencia eléctrica máx. 20°C (Ohm/km)": "0,78", "Intensidad admisible (A)": "130" },
      { "Formación (Nº x mm²)": "4x35", "Espesor aislación nominal (mm)": "1,2", "Espesor envoltura nominal (mm)": "2,0", "Diámetro exterior aprox. (mm)": "31,5", "Masa aprox. (kg/km)": "2150", "Resistencia eléctrica máx. 20°C (Ohm/km)": "0,55", "Intensidad admisible (A)": "155" },
      { "Formación (Nº x mm²)": "4x50", "Espesor aislación nominal (mm)": "1,4", "Espesor envoltura nominal (mm)": "2,2", "Diámetro exterior aprox. (mm)": "34,1", "Masa aprox. (kg/km)": "2850", "Resistencia eléctrica máx. 20°C (Ohm/km)": "0,38", "Intensidad admisible (A)": "185" },
      { "Formación (Nº x mm²)": "4x70", "Espesor aislación nominal (mm)": "1,4", "Espesor envoltura nominal (mm)": "2,4", "Diámetro exterior aprox. (mm)": "38,5", "Masa aprox. (kg/km)": "3850", "Resistencia eléctrica máx. 20°C (Ohm/km)": "0,27", "Intensidad admisible (A)": "230" },
      { "Formación (Nº x mm²)": "4x95", "Espesor aislación nominal (mm)": "1,6", "Espesor envoltura nominal (mm)": "2,6", "Diámetro exterior aprox. (mm)": "43,2", "Masa aprox. (kg/km)": "5100", "Resistencia eléctrica máx. 20°C (Ohm/km)": "0,20", "Intensidad admisible (A)": "280" }
    ]
  },
  {
    id: 'cobre-desnudo',
    name: 'Cobre Desnudo',
    category: 'Cables para Instalación Civil',
    subCategory: 'CONDUCTORES DESNUDOS',
    description: 'Cables de cobre sin aislación para puesta a tierra y redes aéreas.',
    detailedDescription: 'Conductores de cobre electrolítico recocido o duro, cableados en capas concéntricas. Alta conductividad y resistencia a la corrosión.',
    image: '/images/PRODUCTOS/PORTADA.png',
    specs: ['Cobre Electrolítico', 'Norma IRAM 2004', 'Alta Conductividad'],
    specsTable: [
      { "Sección nominal (mm²)": "16", "Formación (Nº x mm)": "7x1,70", "Diámetro exterior (mm)": "5,1", "Masa aprox. (kg/km)": "142", "Resistencia eléctrica máx. 20°C (Ohm/km)": "1,15" },
      { "Sección nominal (mm²)": "25", "Formación (Nº x mm)": "7x2,14", "Diámetro exterior (mm)": "6,4", "Masa aprox. (kg/km)": "225", "Resistencia eléctrica máx. 20°C (Ohm/km)": "0,72" },
      { "Sección nominal (mm²)": "35", "Formación (Nº x mm)": "7x2,52", "Diámetro exterior (mm)": "7,6", "Masa aprox. (kg/km)": "312", "Resistencia eléctrica máx. 20°C (Ohm/km)": "0,52" },
      { "Sección nominal (mm²)": "50", "Formación (Nº x mm)": "19x1,78", "Diámetro exterior (mm)": "8,9", "Masa aprox. (kg/km)": "438", "Resistencia eléctrica máx. 20°C (Ohm/km)": "0,38" },
      { "Sección nominal (mm²)": "70", "Formación (Nº x mm)": "19x2,14", "Diámetro exterior (mm)": "10,7", "Masa aprox. (kg/km)": "635", "Resistencia eléctrica máx. 20°C (Ohm/km)": "0,26" },
      { "Sección nominal (mm²)": "95", "Formación (Nº x mm)": "19x2,52", "Diámetro exterior (mm)": "12,6", "Masa aprox. (kg/km)": "882", "Resistencia eléctrica máx. 20°C (Ohm/km)": "0,19" },
      { "Sección nominal (mm²)": "120", "Formación (Nº x mm)": "37x2,03", "Diámetro exterior (mm)": "14,2", "Masa aprox. (kg/km)": "1120", "Resistencia eléctrica máx. 20°C (Ohm/km)": "0,15" }
    ]
  },
  {
    id: 'redes-utp',
    name: 'Cables de Red UTP/FTP',
    category: 'Resto de Materiales Eléctricos',
    subCategory: 'DATOS Y REDES',
    description: 'Cables de par trenzado para transmisión de datos y redes informáticas.',
    detailedDescription: 'Conductores de cobre sólido de 24AWG o 23AWG, aislados con polietileno y reunidos en 4 pares.',
    image: '/images/fotos-nuevas/Materiales electricos.jpg',
    specs: ['Cat 5e / Cat 6', '100% Cobre', 'Interior/Exterior'],
    specsTable: [
      { "Tipo": "UTP Cat 5e", "AWG": "24", "Pares": "4", "Diámetro": "5,2", "Uso": "Interior" },
      { "Tipo": "UTP Cat 6", "AWG": "23", "Pares": "4", "Diámetro": "6,1", "Uso": "Gigabit" },
      { "Tipo": "FTP Cat 6", "AWG": "23", "Pares": "4", "Diámetro": "6,5", "Uso": "Blindado" }
    ]
  }
];

export const brands = [
  { name: 'Logo 1', logo: '/images/logos/Logos_-1.png' },
  { name: 'Logo 2', logo: '/images/logos/Logos_-2.png' },
  { name: 'Logo 3', logo: '/images/logos/Logos_-3.png' },
  { name: 'Logo 4', logo: '/images/logos/Logos_-4.png' },
  { name: 'Logo 5', logo: '/images/logos/Logos_-5.png' }
];