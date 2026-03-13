import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'civil',
    name: 'Cables para Instalación Civil',
    slug: 'instalacion-civil',
    image: '/images/home_productos/Cables para Instalación Civil.jpg',
    banner: '/images/home_productos/Cables para Instalación Civil.jpg'
  },
  {
    id: 'aerea',
    name: 'Cables Instalación Aérea',
    slug: 'instalacion-aerea',
    image: '/images/home_productos/Cables Instalación Aérea.jpg',
    banner: '/images/home_productos/Cables Instalación Aérea.jpg'
  },
  {
    id: 'potencia',
    name: 'Cables de Potencia',
    slug: 'potencia',
    image: '/images/home_productos/Cables de potencia.jpg',
    banner: '/images/home_productos/Cables de potencia.jpg'
  },
  {
    id: 'media-tension',
    name: 'Cables Media Tensión',
    slug: 'media-tension',
    image: '/images/home_productos/Cables-media-tension.jpg',
    banner: '/images/home_productos/Cables-media-tension.jpg'
  },
  {
    id: 'industriales',
    name: 'Cables Industriales',
    slug: 'industriales',
    image: '/images/home_productos/Cables industriales.jpg',
    banner: '/images/home_productos/Cables industriales.jpg'
  },
  {
    id: 'alta-temperatura',
    name: 'Cables Alta Temperatura',
    slug: 'alta-temperatura',
    image: '/images/home_productos/Cables-alta-temperatura.jpg',
    banner: '/images/home_productos/Cables-alta-temperatura.jpg'
  },
  {
    id: 'armados',
    name: 'Cables Armados',
    slug: 'armados',
    image: '/images/home_productos/Cables-armados.jpg',
    banner: '/images/home_productos/Cables-armados.jpg'
  },
  {
    id: 'especiales',
    name: 'Resto de Cables Especiales',
    slug: 'cables-especiales',
    image: '/images/home_productos/Resto-de-Cables-Especiales.jpg',
    banner: '/images/home_productos/Resto-de-Cables-Especiales.jpg'
  },
  {
    id: 'materiales-electricos',
    name: 'Resto de Materiales Eléctricos',
    slug: 'materiales-electricos',
    image: '/images/home_productos/Materiales electricos.jpg',
    banner: '/images/home_productos/Materiales electricos.jpg'
  }
];

export const products: Product[] = [
  {
    id: 'bt-01',
    name: 'Cable THW-LS / THHW-LS',
    category: 'Baja y Media Tensión',
    description: 'Conductor de cobre suave con aislamiento termoplástico de PVC. Ideal para instalaciones industriales and comerciales.',
    // Nueva imagen: Rollos industriales de cable con enfoque en el aislamiento y conductor
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop',
    specs: ['600V', '90°C', 'Antiflama', 'Baja emisión de humos']
  },
  {
    id: 'bt-02',
    name: 'Cable XHHW-2 Industrial',
    category: 'Baja y Media Tensión',
    description: 'Aislamiento de polietileno de cadena cruzada (XLPE). Resistente a la abrasión y humedad. Diseñado para entornos exigentes.',
    // Imagen actualizada: Enfoque técnico en cableado industrial robusto
    image: 'https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=1000&auto=format&fit=crop',
    specs: ['600V', '90°C', 'Resistente a la luz solar']
  },
  {
    id: 'mt-01',
    name: 'Cable Media Tensión XLP',
    category: 'Baja y Media Tensión',
    description: 'Para distribución aérea o subterránea. Aislamiento XLP con pantalla electrostática para máxima seguridad.',
    // Imagen actualizada: Infraestructura eléctrica de potencia
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop',
    specs: ['5kV - 35kV', 'Cobre o Aluminio', 'Pantalla de cinta de cobre']
  },
  {
    id: 'mt-02',
    name: 'Cable Energía EPR',
    category: 'Baja y Media Tensión',
    description: 'Aislamiento de etileno propileno (EPR). Alta flexibilidad y resistencia al efecto corona.',
    // Detalle técnico de cable grueso
    image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?q=80&w=1000&auto=format&fit=crop',
    specs: ['5kV - 35kV', '105°C', '133% Nivel de aislamiento']
  },
  {
    id: 'ctrl-01',
    name: 'Cable Control Blindado',
    category: 'Cables Especiales',
    description: 'Multiconductor para sistemas de control and señalización. Blindaje de cinta de aluminio para evitar interferencias.',
    // Múltiples cables/hilos (Networking/Control vibe)
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1000&auto=format&fit=crop',
    specs: ['600V', 'PVC/PVC', 'Blindaje Electrostático']
  },
  {
    id: 'cu-01',
    name: 'Cable Cobre Desnudo',
    category: 'Cables Especiales',
    description: 'Utilizado en sistemas de puesta a tierra y conexiones de equipos. Alta pureza garantizada.',
    // Primer plano brillante de textura de cobre
    image: 'https://images.unsplash.com/photo-1617757041766-3d71190479b3?q=80&w=1000&auto=format&fit=crop',
    specs: ['ASTM B-3', 'Alta pureza', 'Temple suave']
  }
];

export const brands = [
  { name: 'Logo 1', logo: '/images/logos/Logos_-1.png' },
  { name: 'Logo 2', logo: '/images/logos/Logos_-2.png' },
  { name: 'Logo 3', logo: '/images/logos/Logos_-3.png' },
  { name: 'Logo 4', logo: '/images/logos/Logos_-4.png' },
  { name: 'Logo 5', logo: '/images/logos/Logos_-5.png' }
];