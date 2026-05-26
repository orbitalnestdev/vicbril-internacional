with open('services/data.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

start = -1
for idx, line in enumerate(lines):
    if "id: '1-instrumentaci-n-electronica'" in line:
        start = idx
        break

if start != -1:
    print("Found product at lines:")
    for idx in range(start, min(start+50, len(lines))):
        print(f"{idx+1}: {lines[idx]}", end="")
else:
    print("Product not found")
