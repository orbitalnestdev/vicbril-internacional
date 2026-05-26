import re

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

new_table = '''    specsTables: [
      {
        title: "Tabla de Datos Tcnicos",
        headers: ["Formacin (mm)", "Dim. mx. alambres (mm)", "Espesor Aisl. (mm)", "Espesor Env. (mm)", "Dimensiones Ext. (mm)", "Masa (kg/km)", "Intensidad (A)", "Resistencia (Ohm/km)"],
        rows: [
          ["2x1", "0,21", "0,6", "0,6", "4,1 x 6,6", "44", "7", "19,5"],
          ["2x1,5", "0,26", "0,7", "0,6", "4,5 x 7,5", "58", "10", "13,3"],
          ["2x2,5", "0,26", "0,8", "0,6", "5,1 x 8,8", "85", "16", "7,98"]
        ]
      }
    ]'''

# Regex to find the specsTables block in bipolar-paralelo-parlante
match = re.search(r'(id:\s*\'bipolar-paralelo-parlante\'.*?)(specsTables:\s*\[.*?\])', content, re.DOTALL)
if match:
    new_block = match.group(1) + new_table
    content = content[:match.start()] + new_block + content[match.end():]
    with open('services/data.ts', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Updated table successfully.")
else:
    print("Could not find block.")
