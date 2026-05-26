import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/tmp_diff_utf8.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# Find non-ASCII/non-standard characters
non_ascii = set()
for char in content:
    if ord(char) > 127:
        non_ascii.add(char)

print("Non-ASCII characters found:")
for char in sorted(non_ascii):
    print(f"  {repr(char)} (code: {ord(char)})")
