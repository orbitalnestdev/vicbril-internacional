path = r'c:\Users\azcur\OneDrive\Documentos\PROYECTOS\vicbril-internacional\services\data.ts'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

old = "    detailedDescription: `BAJA TENSIÓN 300/500 VOLT\r\nMULTIPOLAR - PVC/PVC - 70° C - IRAM 247-5\r\n\r\nDESCRIPCIÓN"
new = "    detailedDescription: `DESCRIPCIÓN"

if old in content:
    content = content.replace(old, new)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("OK - Títulos eliminados")
else:
    # Try without \r
    old2 = "    detailedDescription: `BAJA TENSIÓN 300/500 VOLT\nMULTIPOLAR - PVC/PVC - 70° C - IRAM 247-5\n\nDESCRIPCIÓN"
    if old2 in content:
        content = content.replace(old2, new)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("OK (sin \\r) - Títulos eliminados")
    else:
        # Show what's actually around line 339
        lines = content.split('\n')
        for i, line in enumerate(lines[335:345], start=336):
            print(f"{i}: {repr(line)}")
        print("ERROR - No se encontró el patrón")
