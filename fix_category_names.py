import re

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace category prefixes and double quotes if they contain "3-CABLES DE POTENCIA" etc
replacements = {
    '"3-CABLES DE POTENCIA"': "'Cables de Potencia'",
    '"1-SUBTERRANEOS"': "'Subterráneos'",
    '"2-PARA BOMBA SUMERGIBLE"': "'Bomba Sumergible'",
    '"3-PARA VARIADOR DE FRECUENCIA"': "'Variador de Frecuencia'",
    '"4- CABLES DE MEDIA TENSION"': "'Cables de Media Tensión'",
    '"CABLES MEDIA TENSION ALUMINIO"': "'Aluminio'",
    '"CABLES MEDIA TENSION COBRE"': "'Cobre'",
    '"5-CABLES INDUSTRIALES"': "'Cables Industriales'",
    '"1- INSTRUMENTACIÓN ELECTRONICA"': "'Instrumentación Electrónica'",
    '"1- INSTRUMENTACIN ELECTRONICA"': "'Instrumentación Electrónica'",
    '"2-AUTOMATIZACIÓN"': "'Automatización'",
    '"2-AUTOMATIZACIN"': "'Automatización'",
    '"3-CABLE COMANDO"': "'Comando y Señalización'",
    '"SUBTERRANEO ALUMINIO"': "'Subterráneo Aluminio'",
    '"SUBTERRANEO COBRE"': "'Subterráneo Cobre'",
    '"SUBTERRANEO LSOH"': "'Subterráneo LSOH'",
    '"SUBTERRANEO PVC"': "'Subterráneo PVC'",
    '"SUBTERRANEO XLPE"': "'Subterráneo XLPE'",
    '"13,2 KV"': "'13.2 kV'",
    '"33 KV"': "'33 kV'",
    '"OTRAS POTENCIAS"': "'Otras Potencias'"
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open('services/data.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed category names in categoryPath.")
