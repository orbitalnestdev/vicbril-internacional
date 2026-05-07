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
      { "Sección (mm²)": "0,5", "Espesor (mm)": "0,60", "Diámetro (mm)": "2,1", "Peso (kg/km)": "8,2", "Resist. (Ohm/km)": "39", "Amp (*)": "4,8" },
      { "Sección (mm²)": "0,75", "Espesor (mm)": "0,60", "Diámetro (mm)": "2,3", "Peso (kg/km)": "10,8", "Resist. (Ohm/km)": "26", "Amp (*)": "7,2" },
      { "Sección (mm²)": "1", "Espesor (mm)": "0,70", "Diámetro (mm)": "2,7", "Peso (kg/km)": "14,4", "Resist. (Ohm/km)": "19,5", "Amp (*)": "9,6" },
      { "Sección (mm²)": "1,5", "Espesor (mm)": "0,70", "Diámetro (mm)": "3,0", "Peso (kg/km)": "20", "Resist. (Ohm/km)": "13,3", "Amp (*)": "13" },
      { "Sección (mm²)": "2,5", "Espesor (mm)": "0,80", "Diámetro (mm)": "3,6", "Peso (kg/km)": "31", "Resist. (Ohm/km)": "7,98", "Amp (*)": "18" },
      { "Sección (mm²)": "4", "Espesor (mm)": "0,80", "Diámetro (mm)": "4,1", "Peso (kg/km)": "45", "Resist. (Ohm/km)": "4,95", "Amp (*)": "24" },
      { "Sección (mm²)": "6", "Espesor (mm)": "0,80", "Diámetro (mm)": "4,7", "Peso (kg/km)": "63", "Resist. (Ohm/km)": "3,3", "Amp (*)": "31" },
      { "Sección (mm²)": "10", "Espesor (mm)": "1,00", "Diámetro (mm)": "6,2", "Peso (kg/km)": "112", "Resist. (Ohm/km)": "1,91", "Amp (*)": "43" },
      { "Sección (mm²)": "16", "Espesor (mm)": "1,00", "Diámetro (mm)": "7,1", "Peso (kg/km)": "166", "Resist. (Ohm/km)": "1,21", "Amp (*)": "59" }
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
      { "Sección (mm²)": "0,5", "Espesor (mm)": "0,60", "Diámetro (mm)": "2,1", "Peso (kg/km)": "8,2", "Resist. (Ohm/km)": "39", "Amp (*)": "4,8" },
      { "Sección (mm²)": "0,75", "Espesor (mm)": "0,60", "Diámetro (mm)": "2,3", "Peso (kg/km)": "10,8", "Resist. (Ohm/km)": "26", "Amp (*)": "7,2" },
      { "Sección (mm²)": "1", "Espesor (mm)": "0,70", "Diámetro (mm)": "2,7", "Peso (kg/km)": "14,4", "Resist. (Ohm/km)": "19,5", "Amp (*)": "9,6" },
      { "Sección (mm²)": "1,5", "Espesor (mm)": "0,70", "Diámetro (mm)": "3,0", "Peso (kg/km)": "20", "Resist. (Ohm/km)": "13,3", "Amp (*)": "13" },
      { "Sección (mm²)": "2,5", "Espesor (mm)": "0,80", "Diámetro (mm)": "3,6", "Peso (kg/km)": "31", "Resist. (Ohm/km)": "7,98", "Amp (*)": "18" },
      { "Sección (mm²)": "4", "Espesor (mm)": "0,80", "Diámetro (mm)": "4,1", "Peso (kg/km)": "45", "Resist. (Ohm/km)": "4,95", "Amp (*)": "24" },
      { "Sección (mm²)": "6", "Espesor (mm)": "0,80", "Diámetro (mm)": "4,7", "Peso (kg/km)": "63", "Resist. (Ohm/km)": "3,3", "Amp (*)": "31" },
      { "Sección (mm²)": "10", "Espesor (mm)": "1,00", "Diámetro (mm)": "6,2", "Peso (kg/km)": "112", "Resist. (Ohm/km)": "1,91", "Amp (*)": "43" },
      { "Sección (mm²)": "16", "Espesor (mm)": "1,00", "Diámetro (mm)": "7,1", "Peso (kg/km)": "166", "Resist. (Ohm/km)": "1,21", "Amp (*)": "59" }
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
      { "Formación": "2x1", "Diám. Alambre": "0,21", "Esp. Aisl.": "0,6", "Esp. Env.": "0,6", "Dimensiones": "4,1 x 6,6", "Peso": "44", "Amp": "7" },
      { "Formación": "2x1,5", "Diám. Alambre": "0,26", "Esp. Aisl.": "0,7", "Esp. Env.": "0,6", "Dimensiones": "4,5 x 7,5", "Peso": "58", "Amp": "10" },
      { "Formación": "2x2,5", "Diám. Alambre": "0,26", "Esp. Aisl.": "0,8", "Esp. Env.": "0,6", "Dimensiones": "5,1 x 8,8", "Peso": "85", "Amp": "16" },
      { "Formación": "3x1", "Diám. Alambre": "0,21", "Esp. Aisl.": "0,6", "Esp. Env.": "0,6", "Dimensiones": "4,1 x 9,2", "Peso": "64", "Amp": "7" },
      { "Formación": "3x1,5", "Diám. Alambre": "0,26", "Esp. Aisl.": "0,7", "Esp. Env.": "0,6", "Dimensiones": "4,5 x 10,6", "Peso": "86", "Amp": "10" },
      { "Formación": "3x2,5", "Diám. Alambre": "0,26", "Esp. Aisl.": "0,8", "Esp. Env.": "0,6", "Dimensiones": "5,1 x 12,5", "Peso": "126", "Amp": "16" }
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
      { "Formación": "2x1", "Diám. Alambre": "0,21", "Esp. Aisl.": "0,6", "Esp. Env.": "0,6", "Dimensiones": "4,1 x 6,6", "Peso": "44", "Amp": "7" },
      { "Formación": "2x1,5", "Diám. Alambre": "0,26", "Esp. Aisl.": "0,7", "Esp. Env.": "0,6", "Dimensiones": "4,5 x 7,5", "Peso": "58", "Amp": "10" },
      { "Formación": "2x2,5", "Diám. Alambre": "0,26", "Esp. Aisl.": "0,8", "Esp. Env.": "0,6", "Dimensiones": "5,1 x 8,8", "Peso": "85", "Amp": "16" }
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
      { "Formación": "2x1", "Diám. Alambre": "0,21", "Esp. Aisl.": "0,6", "Esp. Env.": "0,6", "Dimensiones": "4,1 x 6,6", "Peso": "44", "Amp": "7" },
      { "Formación": "2x1,5", "Diám. Alambre": "0,26", "Esp. Aisl.": "0,7", "Esp. Env.": "0,6", "Dimensiones": "4,5 x 7,5", "Peso": "58", "Amp": "10" }
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
      { "Formación": "2x0,75", "Espesor Nom.": "0,6", "Cubierta": "0,8", "Diámetro": "6,2", "Peso": "52", "Resist.": "26" },
      { "Formación": "2x1,0", "Espesor Nom.": "0,6", "Cubierta": "0,8", "Diámetro": "6,5", "Peso": "60", "Resist.": "19,5" },
      { "Formación": "2x1,5", "Espesor Nom.": "0,7", "Cubierta": "0,8", "Diámetro": "7,4", "Peso": "80", "Resist.": "13,3" },
      { "Formación": "2x2,5", "Espesor Nom.": "0,8", "Cubierta": "1", "Diámetro": "9,1", "Peso": "125", "Resist.": "7,98" },
      { "Formación": "3x1,0", "Espesor Nom.": "0,6", "Cubierta": "0,8", "Diámetro": "6,9", "Peso": "72", "Resist.": "19,5" },
      { "Formación": "3x1,5", "Espesor Nom.": "0,7", "Cubierta": "0,9", "Diámetro": "8,1", "Peso": "101", "Resist.": "13,3" },
      { "Formación": "3x2,5", "Espesor Nom.": "0,8", "Cubierta": "1,1", "Diámetro": "9,9", "Peso": "157", "Resist.": "7,98" },
      { "Formación": "4x1,5", "Espesor Nom.": "0,7", "Cubierta": "1", "Diámetro": "9,1", "Peso": "128", "Resist.": "13,3" },
      { "Formación": "4x2,5", "Espesor Nom.": "0,8", "Cubierta": "1,1", "Diámetro": "10,8", "Peso": "191", "Resist.": "7,98" }
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