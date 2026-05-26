import re

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r"specs:\s*\[\s*\{\s*label:\s*'Tensión',\s*value:\s*'1 kV'\s*\},\s*\{\s*label:\s*'Norma',\s*value:\s*'IRAM 62266'\s*\}\s*\],", "specs: ['Tensión: 1 kV', 'Norma: IRAM 62266'],", content)
content = re.sub(r"specs:\s*\[\s*\{\s*label:\s*'Tensión',\s*value:\s*'1 kV'\s*\},\s*\{\s*label:\s*'Norma',\s*value:\s*'IRAM 2178-1'\s*\}\s*\],", "specs: ['Tensión: 1 kV', 'Norma: IRAM 2178-1'],", content)

with open('services/data.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done")
