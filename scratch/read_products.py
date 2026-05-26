import re

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's find all product names and their categories
product_matches = re.findall(r'name:\s*\'([^\'\n]+)\'.*?categoryPath:\s*\[([^\]\n]+)\]', content, re.DOTALL)
print("Products in data.ts:")
for name, cat in product_matches:
    print(f"- {name} (Category: {cat.strip()})")
