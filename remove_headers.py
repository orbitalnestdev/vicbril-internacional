import re

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

def process_block(block):
    match = re.search(r"detailedDescription:\s*`([^`]+)`", block)
    if not match:
        return block
        
    old_text = match.group(1)
    
    # Check if 'DESCRIPCI' is in the text
    if 'DESCRIPCI' in old_text:
        # split by DESCRIPCIÓN and keep everything after it, including DESCRIPCIÓN
        # Need to handle encoding like DESCRIPCIN properly, just split by DESCRIPCI
        parts = re.split(r'(DESCRIPCI.*?\n)', old_text)
        if len(parts) > 1:
            # parts[1] is the DESCRIPCIÓN line, parts[2] is the rest
            new_text = parts[1] + parts[2]
            block = block.replace(old_text, new_text)
            
    return block

blocks = re.split(r'(\n  \{\n    id:)', content)
new_blocks = []
for i in range(len(blocks)):
    if i % 2 == 0 and i > 0:
        new_blocks.append(process_block(blocks[i]))
    else:
        new_blocks.append(blocks[i])

new_content = ''.join(new_blocks)

with open('services/data.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)
