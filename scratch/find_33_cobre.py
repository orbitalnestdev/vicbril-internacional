with open('services/data.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if '33-kv' in line or '33-KV' in line:
        print(f"Line {idx+1}: {line.strip()}")
        # print next 20 lines
        for offset in range(1, 20):
            if idx + offset < len(lines):
                print(f"  Line {idx+1+offset}: {lines[idx+offset].strip()}")
        print("-" * 40)
