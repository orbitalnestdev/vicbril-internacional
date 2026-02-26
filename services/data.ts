import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Cables Unipolares',
    slug: 'cables-unipolares',
    image: '/images/cables/Cables unipolares.jpg',
    banner: '/images/cables/Cables unipolares.jpg'
  },
  {
    id: '2',
    name: 'Media Tensión',
    slug: 'media-tension',
    image: '/images/cables/Cables media tension.jpg',
    banner: '/images/cables/Cables media tension.jpg'
  },
  {
    id: '3',
    name: 'Cables de Comando',
    slug: 'cables-comando',
    image: '/images/cables/Cables-comando.jpg',
    banner: '/images/cables/Cables-comando.jpg'
  },
  {
    id: '4',
    name: 'Cables Subterráneos',
    slug: 'cables-subterraneos',
    image: '/images/cables/Cables-subterraneos.jpg',
    banner: '/images/cables/Cables-subterraneos.jpg'
  },
  {
    id: '5',
    name: 'Cables de Instrumentación',
    slug: 'cables-instrumentacion',
    image: '/images/cables/Cables de instrumentación.jpg',
    banner: '/images/cables/Cables de instrumentación.jpg'
  },
  {
    id: '6',
    name: 'Cables Tipo Taller',
    slug: 'cables-tipo-taller',
    image: '/images/cables/Cables-tipo-taller.jpg',
    banner: '/images/cables/Cables-tipo-taller.jpg'
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