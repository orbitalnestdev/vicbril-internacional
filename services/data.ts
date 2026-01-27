import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Baja y Media Tensión',
    slug: 'baja-media-tension',
    image: '/images/category-low-voltage.png',
    banner: 'https://images.unsplash.com/photo-1544724569-5f546fd6dd2d?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Cables Especiales',
    slug: 'cables-especiales',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800&auto=format&fit=crop',
    banner: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Fibra Óptica',
    slug: 'fibra-optica',
    image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=800&auto=format&fit=crop', // Fiber optics
    banner: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Cables Subterráneos',
    slug: 'cables-subterraneos',
    image: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=800&auto=format&fit=crop', // Underground/Tunnel
    banner: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'Libres de Halógenos',
    slug: 'libres-halogenos',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop', // Clean/Safe conceptual
    banner: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop'
  }
];

export const products: Product[] = [
  {
    id: 'bt-01',
    name: 'Cable THW-LS / THHW-LS',
    category: 'Baja y Media Tensión',
    description: 'Conductor de cobre suave con aislamiento termoplástico de PVC. Ideal para instalaciones industriales y comerciales.',
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
    description: 'Multiconductor para sistemas de control y señalización. Blindaje de cinta de aluminio para evitar interferencias.',
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