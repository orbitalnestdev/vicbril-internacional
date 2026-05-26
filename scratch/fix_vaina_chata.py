path = r'c:\Users\azcur\OneDrive\Documentos\PROYECTOS\vicbril-internacional\services\data.ts'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

old = "    detailedDescription: `MULTIPOLAR - PVC/PVC - 300/500 VOLT - 70°C\n\nDESCRIPCIÓN"
new = "    detailedDescription: `DESCRIPCIÓN"

if old in content:
    content = content.replace(old, new)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("OK - Encabezado eliminado")
else:
    # Try with \r\n
    old2 = "    detailedDescription: `MULTIPOLAR - PVC/PVC - 300/500 VOLT - 70°C\r\n\r\nDESCRIPCIÓN"
    if old2 in content:
        content = content.replace(old2, new)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("OK (\\r\\n) - Encabezado eliminado")
    else:
        idx = content.find("bipolar-vaina-chata")
        snippet = content[idx:idx+400]
        print("NO ENCONTRADO. Contexto:")
        print(repr(snippet))
