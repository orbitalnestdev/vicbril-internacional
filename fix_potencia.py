import re

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

mh_products = ['subterraneo-lsoh-aluminio', 'subterraneo-pvc-aluminio', 'subterraneo-lsoh-cobre', 'subterraneo-pvc-cobre']

for prod in mh_products:
    match = re.search(f"(id:\\s*'{prod}'.*?)(specs:\\s*\\[\\],\\s*characteristics:\\s*\\[\\],)", content, re.DOTALL)
    if match:
        specs_str = ""
        if 'lsoh' in prod:
            specs_str = "specs: [\n      { label: 'Tensión', value: '1 kV' },\n      { label: 'Norma', value: 'IRAM 62266' }\n    ],\n    characteristics: [\n      'Material aislante: LSOH',\n      'No propaga el incendio (IRAM 2289)',\n      'Baja emisión de humos tóxicos',\n      'Libre de halógenos'\n    ],"
        else:
            specs_str = "specs: [\n      { label: 'Tensión', value: '1 kV' },\n      { label: 'Norma', value: 'IRAM 2178-1' }\n    ],\n    characteristics: [\n      'Material aislante: PVC',\n      'No propaga la llama',\n      'Apto para instalaciones subterráneas'\n    ],"
            
        new_str = match.group(1) + specs_str
        content = content.replace(match.group(0), new_str)
        print(f"Fixed specs and characteristics for {prod}")

with open('services/data.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done")
