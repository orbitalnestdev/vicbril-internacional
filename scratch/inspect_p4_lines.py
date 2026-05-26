with open('scratch/instrument_blocks.txt', 'r', encoding='utf-8') as f:
    content = f.read()
    
pages = content.split('================ PAGE ')
p4 = [p for p in pages if p.startswith('4')][0]
lines = [l.strip() for l in p4.split('\n') if l.strip()]
for idx, line in enumerate(lines[100:300]):
    print(f"{idx+100}: {line}")
