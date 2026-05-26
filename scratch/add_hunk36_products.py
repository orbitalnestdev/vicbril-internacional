import re
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

diff_path = 'scratch/tmp_diff_utf8.txt'
data_path = 'services/data.ts'

if not os.path.exists(diff_path):
    print("Error: diff file not found.")
    exit(1)

with open(diff_path, 'r', encoding='utf-8') as f:
    diff_text = f.read()

diff_lines = diff_text.splitlines(keepends=True)
hunks = []
current_hunk = None

for line in diff_lines:
    if line.startswith('@@'):
        if current_hunk:
            hunks.append(current_hunk)
        current_hunk = {'header': line, 'lines': []}
    elif current_hunk is not None:
        if line.startswith('+') or line.startswith('-') or line.startswith(' '):
            current_hunk['lines'].append(line)
if current_hunk:
    hunks.append(current_hunk)

# Find the hunk with orig_start around 762 (the one that adds products)
hunk_36 = None
for hunk in hunks:
    if '@@ -762,' in hunk['header']:
        hunk_36 = hunk
        break

if not hunk_36:
    print("Error: Could not find Hunk 36 (adding products) in diff.")
    exit(1)

print(f"Found Hunk 36: {hunk_36['header']}")

# Extract all '+' lines
new_lines = []
for line in hunk_36['lines']:
    if line.startswith('+'):
        # Strip the leading '+' but keep other whitespace
        new_lines.append(line[1:])

new_products_str = "".join(new_lines).strip()

# Now load services/data.ts
with open(data_path, 'r', encoding='utf-8') as f:
    data_content = f.read()

# We want to insert this at the end of the products array in data_content.
# In the clean services/data.ts, the products array ends at:
#     certifications: ['iram', 'seguridad']
#   }
# ];
# export const brands = [

target_pattern = """    certifications: ['iram', 'seguridad']
  }
];"""

replacement = """    certifications: ['iram', 'seguridad']
  },
  """ + new_products_str + """
];"""

if target_pattern in data_content:
    data_content = data_content.replace(target_pattern, replacement)
    print("Successfully appended Hunk 36 products to services/data.ts")
else:
    # Try another pattern with trailing comma or different indentation
    target_pattern2 = """    certifications: ['iram', 'seguridad']
  }
];\r\n\r\nexport const brands = ["""
    replacement2 = """    certifications: ['iram', 'seguridad']
  },
  """ + new_products_str + """
];\r\n\r\nexport const brands = ["""
    if target_pattern2 in data_content:
        data_content = data_content.replace(target_pattern2, replacement2)
        print("Successfully appended Hunk 36 products to services/data.ts (pattern 2)")
    else:
        # Try a more general regex replacement
        # Find the last '}' and '];' before 'export const brands'
        brands_idx = data_content.find("export const brands = [")
        if brands_idx != -1:
            prod_end_idx = data_content.rfind("];", 0, brands_idx)
            if prod_end_idx != -1:
                # Find the last '}' before '];'
                last_brace_idx = data_content.rfind("}", 0, prod_end_idx)
                if last_brace_idx != -1:
                    data_content = data_content[:last_brace_idx+1] + ",\n  " + new_products_str + "\n" + data_content[prod_end_idx:]
                    print("Successfully appended Hunk 36 products to services/data.ts (regex fallback)")
                else:
                    print("Error: Could not find last brace before ];")
                    exit(1)
            else:
                print("Error: Could not find ]; before brands")
                exit(1)
        else:
            print("Error: Could not find export const brands")
            exit(1)

with open(data_path, 'w', encoding='utf-8') as f:
    f.write(data_content)
