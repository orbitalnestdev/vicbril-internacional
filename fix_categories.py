import re

with open('services/data.ts', 'r', encoding='utf-8') as f:
    data = f.read()

categories_replacement = """export const categories: Category[] = [
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
    image: '/images/ProductosNuevos/3-CABLES DE POTENCIA/PORTADA.jpeg',
    banner: '/images/ProductosNuevos/3-CABLES DE POTENCIA/PORTADA.jpeg'
  },
  {
    id: 'media-tension',
    name: 'Cables de Media Tensión',
    slug: 'cables-media-tension',
    image: '/images/ProductosNuevos/4- CABLES DE MEDIA TENSION/PORTADA.jpeg',
    banner: '/images/ProductosNuevos/4- CABLES DE MEDIA TENSION/PORTADA.jpeg'
  },
  {
    id: 'industriales',
    name: 'Cables Industriales',
    slug: 'cables-industriales',
    image: '/images/ProductosNuevos/5-CABLES INDUSTRIALES/portada.jpeg',
    banner: '/images/ProductosNuevos/5-CABLES INDUSTRIALES/portada.jpeg'
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
    id: 'materiales',
    name: 'Materiales Eléctricos',
    slug: 'materiales-electricos',
    image: '/images/vicbril-hero-1.jpg',
    banner: '/images/vicbril-hero-1.jpg'
  }
];"""

data = re.sub(r'export const categories: Category\[\] = \[.*?\];', categories_replacement, data, flags=re.DOTALL)

replacements = {
    "'3-CABLES DE POTENCIA', '1-SUBTERRANEOS'": "'Cables de Potencia', 'Subterráneos'",
    "'3-CABLES DE POTENCIA', '2-PARA BOMBA SUMERGIBLE'": "'Cables de Potencia', 'Bomba Sumergible'",
    "'3-CABLES DE POTENCIA', '3-PARA VARIADOR DE FRECUENCIA'": "'Cables de Potencia', 'Variador de Frecuencia'",
    "'4- CABLES DE MEDIA TENSION', 'CABLES MEDIA TENSION ALUMINIO'": "'Cables de Media Tensión', 'Aluminio'",
    "'4- CABLES DE MEDIA TENSION', 'CABLES MEDIA TENSION COBRE'": "'Cables de Media Tensión', 'Cobre'",
    "'5-CABLES INDUSTRIALES', '1- INSTRUMENTACIÓN ELECTRONICA'": "'Cables Industriales', 'Instrumentación Electrónica'",
    "'5-CABLES INDUSTRIALES', '2-AUTOMATIZACIÓN'": "'Cables Industriales', 'Automatización'",
    "'5-CABLES INDUSTRIALES', '3-CABLE COMANDO'": "'Cables Industriales', 'Comando y Señalización'",
    
    "'1-CABLE UNIPOLAR'": "'Unipolar'",
    "'2-CABLE BIPOLAR'": "'Bipolar'",
    "'3-CABLE TIPO TALLER'": "'Tipo Taller'",
    "'1-ENVAINADOS'": "'Envainados'",
    "'2-DESNUDOS'": "'Desnudos'"
}

for old, new in replacements.items():
    data = data.replace(old, new)

with open('services/data.ts', 'w', encoding='utf-8') as f:
    f.write(data)

print('Replaced correctly!')
