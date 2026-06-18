import re

# Read data.ts
with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

subterraneo_pvc_aluminio_block = """    id: 'subterraneo-pvc-aluminio',
    name: 'Cable de Potencia Aluminio PVC/PVC',
    categoryPath: ['Cables de Potencia','Subterráneos','Subterráneo Aluminio'],
    description: 'Cable de potencia con conductor de aluminio y aislación de PVC, para instalaciones fijas en sistemas de distribución de 1 kV.',
    detailedDescription: `DESCRIPCIÓN
Cable de Potencia. Norma: IRAM 2178-1. Tensión: 1 kV.

APLICACIONES
Cables de energía, aislados con dieléctricos sólidos para una tensión nominal U0/U/Um de 0,6/1(1,2) kV, para instalaciones fijas, con o sin protecciones contra perturbaciones electromagnéticas. Apto para tendidos directamente enterrados, en canaletas, bandejas o ductos.`,
    image: '/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO ALUMINIO/SUBTERRANEO PVC/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO ALUMINIO/SUBTERRANEO PVC/FICHA TECNICA/ficha tecnica subte aluminio pvc.pdf',
    specs: ['1 kV', '70°C', 'IRAM 2178-1'],
    characteristics: [
      'CONDUCTOR',
      'Material: Aluminio.',
      'Norma: IRAM NM 280. Conductores Clase 2.',
      'Temperatura máxima en carga permanente: 70°C.',
      'Temperatura máxima en cortocircuito: 160°C (S ≤ 300 mm²) / 140°C (S > 300 mm²).',
      'Duración de cortocircuito: 5 s.',
      'AISLANTE',
      'Material: PVC.',
      'Colores — Unipolar: Marrón. Dos conductores: Marrón y Celeste. Tres conductores: Marrón, Negro y Rojo. Cuatro conductores: Marrón, Negro, Rojo y Celeste.',
      'Ensayos de fuego: No propagación de la llama (IRAM NM IEC 60332-1) / No propagación del incendio (IRAM NM IEC 60332-3-24).'
    ],"""

subterraneo_lsoh_cobre_block = """    id: 'subterraneo-lsoh-cobre',
    name: 'Cable de Potencia Cobre LSOH/LSOH',
    categoryPath: ['Cables de Potencia','Subterráneos','Subterráneo Cobre'],
    description: 'Cable de potencia con conductor de cobre y aislación LSOH, libre de halógenos, para instalaciones fijas en sistemas de distribución de 1 kV.',
    detailedDescription: `DESCRIPCIÓN
Cable de Potencia. Norma: IRAM 62266. Tensión: 1 kV.

APLICACIONES
Cables de potencia y cables de control y comando, con aislación y envolturas extruidas, de baja emisión de humos, toxicidad y libres de halógeno, para una tensión de 1 kV, para instalaciones fijas, tales como sistemas (redes) de distribución o instalaciones industriales. Especialmente diseñados para ser utilizados en inmuebles de alta densidad de ocupación y/o con condiciones de evacuación difíciles.`,
    image: '/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO COBRE/SUBTERRANEO LSOH/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO COBRE/SUBTERRANEO LSOH/FICHA TECNICA/ficha tecnica subte cobre lsoh.pdf',
    specs: ['1 kV', '70°C / 90°C', 'IRAM 62266'],
    characteristics: [
      'CONDUCTOR',
      'Material: Cobre recocido.',
      'Norma: IRAM NM 280. Conductores Clase 4 / Clase 5.',
      'Temperatura máxima en carga permanente: 70°C / 90°C.',
      'Temperatura máxima en cortocircuito: 160°C (S ≤ 300 mm²) / 140°C (S > 300 mm²).',
      'Duración de cortocircuito: 5 s.',
      'AISLANTE',
      'Material: LSOH.',
      'Colores — Unipolar: Marrón. Dos conductores: Marrón y Celeste. Tres conductores: Marrón, Negro y Rojo. Cuatro conductores: Marrón, Negro, Rojo y Celeste.',
      'No propaga el incendio: IRAM 2289 - Cat. C.'
    ],"""

subterraneo_pvc_cobre_block = """    id: 'subterraneo-pvc-cobre',
    name: 'Cable de Potencia Cobre PVC/PVC',
    categoryPath: ['Cables de Potencia','Subterráneos','Subterráneo Cobre'],
    description: 'Cable de potencia con conductor de cobre y aislación de PVC, para instalaciones fijas en sistemas de distribución de 1 kV.',
    detailedDescription: `DESCRIPCIÓN
Cable de Potencia. Norma: IRAM 2178-1. Tensión: 1 kV.

APLICACIONES
Cables de energía, aislados con dieléctricos sólidos para una tensión nominal U0/U/Um de 0,6/1(1,2) kV, para instalaciones fijas, con o sin protecciones contra perturbaciones electromagnéticas. Apto para tendidos directamente enterrados, en canaletas, bandejas o ductos.`,
    image: '/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO COBRE/SUBTERRANEO PVC/PORTADA.jpeg',
    gallery: [],
    pdf: '/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO COBRE/SUBTERRANEO PVC/FICHA TECNICA/ficha tecnica subte cobre pvc.pdf',
    specs: ['1 kV', '70°C', 'IRAM 2178-1'],
    characteristics: [
      'CONDUCTOR',
      'Material: Cobre recocido.',
      'Norma: IRAM NM 280. Conductores Clase 4 o Clase 2.',
      'Temperatura máxima en carga permanente: 70°C.',
      'Temperatura máxima en cortocircuito: 160°C (S ≤ 300 mm²) / 140°C (S > 300 mm²).',
      'Duración de cortocircuito: 5 s.',
      'AISLANTE',
      'Material: PVC.',
      'Colores — Unipolar: Marrón. Dos conductores: Marrón y Celeste. Tres conductores: Marrón, Negro y Rojo. Cuatro conductores: Marrón, Negro, Rojo y Celeste.',
      'Ensayos de fuego: No propagación de la llama (IRAM NM IEC 60332-1) / No propagación del incendio (IRAM NM IEC 60332-3-24).'
    ],"""

replacements = [
    ('subterraneo-pvc-aluminio', subterraneo_pvc_aluminio_block),
    ('subterraneo-lsoh-cobre', subterraneo_lsoh_cobre_block),
    ('subterraneo-pvc-cobre', subterraneo_pvc_cobre_block)
]

new_content = content
for pid, replacement in replacements:
    # Match starting with id: 'pid' up to specsTables:
    pattern = rf"(id:\s*'{pid}'.*?)specsTables:"
    match = re.search(pattern, new_content, re.DOTALL)
    if match:
        old_part = match.group(0)
        new_part = replacement + "\n    specsTables:"
        new_content = new_content.replace(old_part, new_part)
        print(f"Injected details for {pid}")
    else:
        print(f"Failed to find block for {pid}")

with open('services/data.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Done!")
