import re

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

products_to_find = [
    'subterraneo-xlpe-aluminio',
    'subterraneo-xlpe-cobre',
    '2-para-bomba-sumergible',
    '3-para-variador-de-frecuencia',
    '13-2-kv-aluminio',
    '33-kv-aluminio',
    '13-2-kv-cobre',
    '33-kv-cobre'
]

with open('scratch/product_blocks.txt', 'w', encoding='utf-8') as out:
    for pid in products_to_find:
        m = re.search(r'id:\s*\'' + pid + r'\'', content)
        if m:
            start_pos = m.start()
            # find matching end of object (we can look for next id: or the end of products array)
            sub = content[start_pos:start_pos+10000]
            next_id = re.search(r'id:\s*\'', sub[10:])
            if next_id:
                block = sub[:10+next_id.start()]
            else:
                end_match = re.search(r'\]\s*;', sub)
                if end_match:
                    block = sub[:end_match.start()]
                else:
                    block = sub
            
            # Backtrack to the opening brace of the object
            # Let's find '{' before id:
            open_brace_idx = content.rfind('{', 0, start_pos)
            full_block = content[open_brace_idx:open_brace_idx + len(block) + (start_pos - open_brace_idx)]
            # Clean up the end of block (it might contain the comma and next open brace '{')
            # Let's truncate at the last '}'
            last_brace = full_block.rfind('}')
            if last_brace != -1:
                full_block = full_block[:last_brace+1]
                
            out.write(f"=== {pid} ===\n{full_block}\n\n")
        else:
            out.write(f"=== {pid} ===\nNOT FOUND\n\n")

print("Wrote blocks to scratch/product_blocks.txt")
