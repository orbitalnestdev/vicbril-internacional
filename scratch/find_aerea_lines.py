with open('services/data.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

ids = [
    'aerea-preensamblado-aluminio',
    'aerea-acometida-cobre',
    'aerea-concentrico-antihurto',
    'aerea-desnudo-aluminio',
    'aerea-desnudo-cobre',
    'aerea-aluminio-acero'
]

for prod_id in ids:
    start = -1
    for idx, line in enumerate(lines):
        if f"id: '{prod_id}'" in line:
            start = idx + 1
            break
    if start != -1:
        # Find where this product block ends by looking for the next product or category end
        # We can scan forward for brace count matching
        brace_count = 0
        end = -1
        # Find the starting brace of this product object
        start_idx = -1
        for i in range(start - 1, -1, -1):
            if '{' in lines[i]:
                start_idx = i
                break
        
        if start_idx != -1:
            for idx in range(start_idx, len(lines)):
                line = lines[idx]
                brace_count += line.count('{')
                brace_count -= line.count('}')
                if brace_count == 0:
                    end = idx + 1
                    break
            print(f"ID: {prod_id} -> lines {start_idx+1} to {end}")
        else:
            print(f"ID: {prod_id} -> start line found at {start} but no starting brace found")
    else:
        print(f"ID: {prod_id} -> NOT FOUND")
