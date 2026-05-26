import re

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = r'\{\s*id:\s*\'[^\']+\'.*?categoryPath:\s*\[[^\']*(?:\'Cables Industriales\'|\"Cables Industriales\")[^\]]*\].*?\}'
# Find matches, being careful to match balanced braces or a reasonable length
# Let's write a parser that grabs the whole product block
products = []
matches = re.finditer(r'id:\s*\'([^\'\n]+)\'', content)
for m in matches:
    start_pos = m.start()
    # Find matching closing brace for this object or look ahead for the next id: or the end of array
    # A simple way is to find the next "id:" or the end of the file/array
    # Let's search from start_pos
    sub = content[start_pos:start_pos+6000]
    # Find index of the next "id: '" but skip the current one
    next_id = re.search(r'id:\s*\'', sub[10:])
    if next_id:
        prod_block = sub[:10+next_id.start()]
    else:
        prod_block = sub
        
    # Check if categoryPath contains 'Cables Industriales'
    if 'Cables Industriales' in prod_block:
        products.append(prod_block)

print(f"Found {len(products)} industrial products:")
with open('scratch/industrial_products.txt', 'w', encoding='utf-8') as out:
    for idx, p in enumerate(products):
        out.write(f"--- PRODUCT {idx+1} ---\n{p}\n\n")
print("Wrote output to scratch/industrial_products.txt")
