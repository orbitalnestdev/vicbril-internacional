import re

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

def process_block(block):
    if 'characteristics: []' not in block:
        return block
    
    tech_match = re.search(r"technicalIntro:\s*`([^`]+)`", block)
    if not tech_match:
        return block
    
    tech_text = tech_match.group(1)
    
    lines = tech_text.strip().split('\n')
    chars = []
    installation = []
    construccion = []
    
    current_section = None
    for line in lines:
        line_strip = line.strip()
        if not line_strip:
            continue
        if 'CARACTER' in line_strip and 'STICAS' in line_strip:
            current_section = 'chars'
            continue
        elif 'INSTALACI' in line_strip and 'N' in line_strip:
            current_section = 'inst'
            continue
        elif 'CONSTRUCCI' in line_strip and 'N' in line_strip:
            current_section = 'const'
            continue
            
        if current_section == 'chars':
            chars.append(line_strip)
        elif current_section == 'inst':
            installation.append(line_strip)
        elif current_section == 'const':
            construccion.append(line_strip)
        else:
            construccion.append(line_strip)
            
    if chars:
        chars_str = 'characteristics: [\n' + ',\n'.join(f"      '{c.replace(chr(39), chr(92)+chr(39))}'" for c in chars) + '\n    ]'
        block = re.sub(r'characteristics:\s*\[\s*\]', chars_str, block)
        
    if installation:
        inst_str = 'installation: `' + '\n'.join(installation) + '`,'
        block = re.sub(r'(characteristics:\s*\[)', inst_str + r'\n    \1', block)
        
    if construccion:
        new_tech = 'CONSTRUCCIÓN\n' + '\n'.join(construccion) if 'CONSTRUCCI' not in '\n'.join(construccion) else '\n'.join(construccion)
        block = re.sub(r"technicalIntro:\s*`[^`]+`", f"technicalIntro: `{new_tech}`", block)
    else:
        block = re.sub(r"technicalIntro:\s*`[^`]+`,\s*", "", block)
        
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
