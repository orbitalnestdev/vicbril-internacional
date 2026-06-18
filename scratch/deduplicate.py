import re

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# We want to find the first occurrence of:
# id: 'alta-temp-solares'
# and the second occurrence of:
# id: 'alta-temp-solares'

matches = [m.start() for m in re.finditer(r"id:\s*'alta-temp-solares'", content)]
print(f"Found {len(matches)} occurrences of alta-temp-solares")

if len(matches) == 2:
    # The second occurrence starts a product block that is duplicated at the end of the products array.
    # We want to delete from the comma preceding this second block up to the closing ]; of the products array.
    second_start = matches[1]
    
    # Search backwards for the opening '{' of the block
    block_start = content.rfind('{', 0, second_start)
    # Search backwards for the comma ',' preceding it
    comma_pos = content.rfind(',', 0, block_start)
    
    # Search forwards for the closing '];' of the products array
    brands_start = content.find("export const brands", second_start)
    products_end = content.rfind("];", second_start, brands_start)
    
    if comma_pos != -1 and products_end != -1:
        # We delete from comma_pos to products_end
        new_content = content[:comma_pos] + "\n" + content[products_end:]
        with open('services/data.ts', 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Successfully removed duplicated Category 6 products from services/data.ts")
    else:
        print("Error: Could not find comma or products end index")
else:
    print("No duplicates found or wrong number of matches")
