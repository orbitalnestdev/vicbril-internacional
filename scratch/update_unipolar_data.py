data_path = r"c:\Users\azcur\OneDrive\Documentos\PROYECTOS\vicbril-internacional\services\data.ts"

with open(data_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update unipolar-pvc
unipolar_pvc_old = """    id: 'unipolar-pvc',
    name: 'Cable Unipolar PVC',
    category: 'Cables para Instalacin Civil',
    subCategory: '1-CABLE UNIPOLAR',
    description: 'Apto para instalaciones fijas en interiores de inmuebles civiles, comerciales e industriales.',
    detailedDescription: `DESCRIPCIN
Apto para instalaciones fijas en interiores de inmuebles civiles, comerciales e industriales.

APLICACIONES
Permite cableado en tableros, caeras embutidas y caeras a la vista recomendando el uso de bandejas portantes.`,
    image: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR PVC/PORTADA.jpg',
    gallery: [
      '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR PVC/FICHA TECNICA UNIPOLAR PVC/foto producto dentro de ficha tecnica.jpeg'
    ],
    technicalTable: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR PVC/FICHA TECNICA UNIPOLAR PVC/marcas disponibles unipolar pvc.jpg',
    pdf: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR PVC/FICHA TECNICA UNIPOLAR PVC/FICHA TECNICA UNIP PVC (REEMPLAZAR FOTO DE ABAJO).pdf',
    specs: ['450/750 V', '70', 'PVC'],
    technicalIntro: `CARACTERSTICAS
Temperatura mxima: 70 C de servicio
Tensin nominal: 450/750 Volt.
Norma constructiva: IEC 60227-3 - IRAM NM 247-3
Norma de fuego: IEC 60332-3-23 / IRAM NM IEC 60332-3-23 - No propagacin de incendio.
Norma de conductores: IEC 60228 / IRAM NM 280

INSTALACIN
Montaje: Radio mnimo de curvatura igual a 7 x dimetro exterior del cable
Traccin mxima: 5daN/mm aplicados sobre los conductores
Temperatura de montaje: igual o mayor a 5C`,
    characteristics: [],"""

# Note the encoding differences: let's match raw strings using find/replace in a more resilient way
# We'll search for the ID first, and extract/replace the block.

pvc_start = content.find("id: 'unipolar-pvc',")
pvc_end = content.find("specsTables:", pvc_start)

# Define the new PVC definition chunk up to specsTables:
new_pvc_block = """id: 'unipolar-pvc',
    name: 'Cable Unipolar PVC',
    category: 'Cables para Instalación Civil',
    subCategory: '1-CABLE UNIPOLAR',
    description: 'Apto para instalaciones fijas en interiores de inmuebles civiles, comerciales e industriales.',
    detailedDescription: 'Apto para instalaciones fijas en interiores de inmuebles civiles, comerciales e industriales.',
    applications: 'Permite cableado en tableros, cañerías embutidas y cañerías a la vista recomendando el uso de bandejas portantes.',
    image: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR PVC/PORTADA.jpg',
    gallery: [
      '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR PVC/FICHA TECNICA UNIPOLAR PVC/foto producto dentro de ficha tecnica.jpeg'
    ],
    technicalTable: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR PVC/FICHA TECNICA UNIPOLAR PVC/marcas disponibles unipolar pvc.jpg',
    pdf: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR PVC/FICHA TECNICA UNIPOLAR PVC/FICHA TECNICA UNIP PVC (REEMPLAZAR FOTO DE ABAJO).pdf',
    specs: ['450/750 V', '70°', 'PVC'],
    technicalIntro: 'UNIPOLAR FLEXIBLE - 450/750 Volt - 70° C',
    characteristics: [
      'Temperatura máxima: 70° C de servicio',
      'Tensión normal: 450/750 Volt.',
      'Norma constructiva: IEC 60227-3 - IRAM NM 247-3',
      'Norma de fuego: IEC 60332-3-23 / IRAM NM IEC 60332-3-23 - No propagación de incendio.',
      'Norma de conductores: IEC 60228 / IRAM NM 280',
      'Conductor: Cobre electrolítico recocido en formación clase 5.',
      'Flexibilidad: Clase 5; según IRAM NM-280 e IEC 60228'
    ],
    installation: `Montaje: Radio mínimo de curvatura igual a 7 x diámetro exterior del cable.
Tracción máxima: 5daN/mm² aplicados sobre los conductores.
Temperatura de montaje: igual o mayor a 5°C.`,
    """

# Replace in content:
content_updated = content[:pvc_start] + new_pvc_block + content[pvc_end:]

# 2. Update unipolar-lsoh
lsoh_start = content_updated.find("id: 'unipolar-lsoh',")
lsoh_end = content_updated.find("specsTables:", lsoh_start)

new_lsoh_block = """id: 'unipolar-lsoh',
    name: 'Cable Unipolar LSOH',
    category: 'Cables para Instalación Civil',
    subCategory: '1-CABLE UNIPOLAR',
    description: 'Conductores a instalar en lugares cerrados con alto tránsito de personas donde la evacuación por incendio resulta difícil de resolver.',
    detailedDescription: 'Conductores a instalar en lugares cerrados con alto tránsito de personas, por ejemplo cines, sanatorios, teatros, estaciones de trenes subterráneos, universidades, centros comerciales, escuelas, túneles de minas, etc; es decir todo lugar dónde la evacuación por incendio resulta difícil de resolver.',
    applications: 'Permite cableado en tableros, cañerías embutidas y cañerías a la vista recomendando el uso de bandejas portantes.',
    image: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR LSOH/PORTADA.jpeg',
    gallery: [
      '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR LSOH/FICHA TECNICA UNIPOLAR LSOH/foto producto dentro de ficha tecnica.jpeg'
    ],
    technicalTable: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR LSOH/FICHA TECNICA UNIPOLAR LSOH/MARCAS DISPONIBLES UNIPOLAR LSOH.jpg',
    pdf: '/images/PRODUCTOS/1-CABLE UNIPOLAR/UNIPOLAR LSOH/FICHA TECNICA UNIPOLAR LSOH/FICHA TECNICA UNIP. LSOH (REEMPLAZAR FOTO).pdf',
    specs: ['450/750 Volt', '70° C', 'IRAM 62267'],
    technicalIntro: 'LIBRE DE HALÓGENOS (LSZH - HFFR)\\nUNIPOLAR FLEXIBLE - 450/750 Volt - 70° C - IRAM 62267',
    characteristics: [
      'Temperatura máxima: 70° C de servicio',
      'Tensión normal: 450/750 Volt.',
      'Norma constructiva: IRAM 62267',
      'Norma de fuego: IEC 60332-3-24 / IRAM NM IEC 60332-3-24 - No propagación de incendio.',
      'Norma de halógenos: IEC 60754 - 1/2 - Ausencia de halógenos.',
      'Norma de humos: IEC 61034 - Transparencia de humos.',
      'Norma de toxicidad: NES 713 / CEI 20-37 - Ausencia de tóxicos.',
      'Norma de conductores: IEC 60228 / IRAM NM 280.',
      'Conductor: Metal cobre electrolítico recocido en formación clase 5.',
      'Flexibilidad: Clase 5; según IRAM NM-280 e IEC 60228'
    ],
    installation: `Montaje: Radio mínimo de curvatura a 7 x diámetro exterior del cable.
Tracción máxima: 5daN/mm² aplicados sobre los conductores de cobre.
Temperatura de montaje: igual o mayor a 5°C.`,
    """

# Replace in content_updated:
content_updated2 = content_updated[:lsoh_start] + new_lsoh_block + content_updated[lsoh_end:]

# Now let's update certifications for unipolar-lsoh:
# We need to find the certifications block of unipolar-lsoh:
lsoh_cert_start = content_updated2.find("certifications:", lsoh_start)
lsoh_cert_end = content_updated2.find("]", lsoh_cert_start) + 1

new_certs = "certifications: ['iram', 'seguridad', 'bajos-humos', 'libre-halogenos', 'marcacion-secuencial', 'espacios-publicos', 'instalacion-domiciliaria', 'no-propagacion', 'temperatura-servicio', 'cuerdas-flexibles']"

content_updated3 = content_updated2[:lsoh_cert_start] + new_certs + content_updated2[lsoh_cert_end:]

with open(data_path, 'w', encoding='utf-8') as f:
    f.write(content_updated3)

print("unipolar-pvc and unipolar-lsoh products successfully updated in data.ts!")
