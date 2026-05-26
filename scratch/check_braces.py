import sys

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

idx = content.find('export const products: Product[] = [')
if idx == -1:
    print("Could not find start of products array.")
    sys.exit(1)

line_no = content[:idx].count('\n') + 1
scan = content[idx + len('export const products: Product[] = ['):]
stack = [('[', line_no, -1)]

for char_idx, char in enumerate(scan):
    if char == '\n':
        line_no += 1
    if char in '{[':
        stack.append((char, line_no, char_idx))
    elif char in ']}':
        if not stack:
            print(f"Extra closing {char} at line {line_no}")
            sys.exit(1)
        top, tline, tcidx = stack.pop()
        if (top == '{' and char != '}') or (top == '[' and char != ']'):
            print(f"Mismatched {top} at line {tline} with {char} at line {line_no}")
            # print surrounding of mismatched char
            surr_start = max(0, char_idx - 100)
            surr_end = min(len(scan), char_idx + 100)
            print("Context:")
            print(scan[surr_start:surr_end])
            sys.exit(1)
        if not stack:
            print(f"Reached end of products array successfully at line {line_no}")
            print("Scan remaining:", scan[char_idx:char_idx+50])
            break

if stack:
    print("Unclosed braces/brackets on stack:")
    for top, tline, tcidx in stack[-5:]:
        print(f"  {top} opened at line {tline}")
        # print some context
        idx_in_content = idx + len('export const products: Product[] = [') + tcidx
        print("  Context:", content[idx_in_content:idx_in_content+100])
