with open('services/data.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if 'id:' in line:
        # check if it is related to media tension
        if 'kv' in line.lower() or 'tension' in line.lower() or 'tensión' in line.lower() or '33' in line:
            print(f"Line {idx+1}: {line.strip()}")
