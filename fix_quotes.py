with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("\\'", "'")

with open('services/data.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print('Fixed quotes')
