with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

import re
# Print the products desnudo-aluminio, desnudo-cobre, aluminio-acero
ids = ['aerea-desnudo-aluminio', 'aerea-desnudo-cobre', 'aerea-aluminio-acero']
for prod_id in ids:
    start_pos = content.find(f"id: '{prod_id}'")
    if start_pos == -1:
        print(f"Product {prod_id} not found!")
        continue
    open_brace = content.rfind('{', 0, start_pos)
    brace_count = 0
    close_brace = -1
    for i in range(open_brace, len(content)):
        if content[i] == '{':
            brace_count += 1
        elif content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                close_brace = i
                break
    print(f"\n================ ID: {prod_id} ================ ")
    print(content[open_brace : close_brace + 1])
