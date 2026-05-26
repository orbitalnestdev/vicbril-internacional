with open('services/data.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

products_end_line = -1
brands_start_line = -1
brands_end_line = -1

for i, line in enumerate(lines):
    if line.strip() == '];' and brands_start_line == -1:
        products_end_line = i
    if line.startswith('export const brands = ['):
        brands_start_line = i
    if i == 799 and line.startswith('  { name: \'Logo 5\''):
        brands_end_line = i # Actually, line 799 is Logo 5. Then line 800 is `,`.

# We know products ends at line 792 (index 791).
# We know brands starts at line 794 (index 793).
# The new products start at line 800 (index 799 is `,`).
# Wait, let's just use string replacement!

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

import re

# Find the end of products array
# The old file ends products at:
#     availableBrands: []
#   }
# ];
# Then export const brands = [ ... ];

# The new products start after Logo 5.
brands_section = """export const brands = [
  { name: 'Logo 1', logo: '/images/logos/Logos_-1.png' },
  { name: 'Logo 2', logo: '/images/logos/Logos_-2.png' },
  { name: 'Logo 3', logo: '/images/logos/Logos_-3.png' },
  { name: 'Logo 4', logo: '/images/logos/Logos_-4.png' },
  { name: 'Logo 5', logo: '/images/logos/Logos_-5.png' }"""

# Find the start of the new products:
new_products_start = content.find(",\n  {\n    id: 'subterraneo-lsoh',")

if new_products_start != -1:
    new_products_str = content[new_products_start + 2:] # Skip the ",\n"
    
    # We want to insert `,\n` + new_products_str BEFORE the `];` of the products array.
    
    # Cut out the new products from the end
    content = content[:new_products_start] + "\n];\n" # This closes the brands array
    
    # Now find the end of the products array
    # It is right before `export const brands = [`
    products_end_idx = content.rfind("];\n\nexport const brands = [")
    
    # Inject the new products!
    if products_end_idx != -1:
        content = content[:products_end_idx] + ",\n" + new_products_str.rstrip() + "\n" + content[products_end_idx:]
    
    with open('services/data.ts', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed!")
else:
    print("Could not find new products start")
