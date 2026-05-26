import re

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

old_cert = "'iram', 'seguridad', 'bajos-humos', 'libre-halogenos', 'marcacion-secuencial', 'espacios-publicos', 'instalacion-domiciliaria'"
new_cert = "'iram', 'seguridad', 'bajos-humos', 'libre-halogenos', 'marcacion-secuencial', 'espacios-publicos', 'instalacion-domiciliaria', 'cuerdas-flexibles', 'no-propagacion', 'temperatura-servicio'"

match = re.search(r"(id:\s*'unipolar-lsoh'.*?certifications:\s*\[)([^\]]+)(\])", content, re.DOTALL)
if match:
    # replace only in unipolar-lsoh block
    new_block = match.group(1) + new_cert + match.group(3)
    content = content[:match.start()] + new_block + content[match.end():]
    with open('services/data.ts', 'w', encoding='utf-8') as f:
        f.write(content)
    print('Certifications updated.')
else:
    print('Block not found.')
