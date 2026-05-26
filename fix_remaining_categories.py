import re

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    '"6-CABLES ALTA TEMPERATURA"': "'Cables Alta Temperatura'",
    '"1-SOLARES"': "'Solares'",
    '"2-SILICONADOS"': "'Siliconados'",
    '"3-FIBRA DE VIDRIO Y-O AISLACIÓN DE MICA"': "'Fibra de Vidrio y/o Mica'",
    '"3-FIBRA DE VIDRIO Y-O AISLACIN DE MICA"': "'Fibra de Vidrio y/o Mica'",
    '"7-CABLES ARMADOS"': "'Cables Armados'",
    '"1-PARA PROTECCIÓN MECANICA"': "'Para Protección Mecánica'",
    '"1-PARA PROTECCIN MECANICA"': "'Para Protección Mecánica'",
    '"2-PARA EVITAR INTERFERENCIAS (INTERLOCK)"': "'Interlock (Antirrobo/Interferencias)'",
    '"8-RESTO DE CABLES ESPECIALES"': "'Cables Especiales'",
    '"1-DESARROLLOS A MEDIDA"': "'Desarrollos a Medida'",
    '"2-ASCENSOR"': "'Ascensor'",
    '"3-PUENTE GRUA"': "'Puente Grúa'",
    '"4-UTP-FTP-COAXIALES-FIBRA OPTICA"': "'UTP/FTP/Coaxiales/Fibra Óptica'",
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open('services/data.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed remaining category names")
