with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

import re
ids = [
    'aerea-preensamblado-aluminio',
    'aerea-acometida-cobre',
    'aerea-concentrico-antihurto',
    'aerea-desnudo-aluminio',
    'aerea-desnudo-cobre',
    'aerea-aluminio-acero'
]
output = []
for prod_id in ids:
    start_pos = content.find(f"id: '{prod_id}'")
    if start_pos == -1:
        output.append(f"Product {prod_id} not found!\n")
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
    output.append(f"\n================ ID: {prod_id} ================ \n")
    output.append(content[open_brace : close_brace + 1])
    output.append("\n")

with open('scratch/aerea_all_dump.txt', 'w', encoding='utf-8') as f_out:
    f_out.write("".join(output))
print("Wrote dump to scratch/aerea_all_dump.txt")
