import os

file_path = 'services/data.ts'

if not os.path.exists(file_path):
    print(f"Error: {file_path} not found.")
    exit(1)

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Fix escaped quotes
content = content.replace("\\'", "'")

# 2. Fix encoding artifacts
replacements = {
    '├®': 'é',
    '├ô': 'Ó',
    '├║': 'ú',
    '├í': 'á',
    '├▒': 'ñ',
    '├│': 'ó',
}

for src, dst in replacements.items():
    content = content.replace(src, dst)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully cleaned up services/data.ts")
