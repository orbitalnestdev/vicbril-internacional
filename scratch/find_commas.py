import re

def find_commas():
    with open('services/data.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    matches = list(re.finditer(r',[\s\n\r]*,', content))
    for m in matches:
        start_idx = m.start()
        line_num = content[:start_idx].count('\n') + 1
        snippet = content[max(0, start_idx-50):min(len(content), start_idx+50)]
        print(f"Match at line {line_num}: ... {repr(snippet)} ...")

if __name__ == '__main__':
    find_commas()
