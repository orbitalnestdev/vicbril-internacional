import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

def clean_line(line):
    # Normalize whitespace and encoding characters
    s = line.strip()
    # Replace multi-character encoding artifacts first
    multi_replacements = {
        '├│': 'o', '├í': 'a', '├®': 'e', '├║': 'u', '├▒': 'n', '├ô': 'O'
    }
    for k, v in multi_replacements.items():
        s = s.replace(k, v)
    # Then normalize standard accents and remove single-character artifacts
    single_replacements = {
        'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ñ': 'n',
        'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U', 'Ñ': 'N',
        '°': '', 'º': '', '┬': '', '├': '', '│': '', '®': ''
    }
    for k, v in single_replacements.items():
        s = s.replace(k, v)
    # Remove all non-alphanumeric characters for fuzzy matching
    s = re.sub(r'[^a-zA-Z0-9]', '', s)
    return s.lower()

def apply_fuzzy_patch(original_text, diff_text):
    lines = original_text.splitlines(keepends=True)
    diff_lines = diff_text.splitlines(keepends=True)
    
    hunks = []
    current_hunk = None
    
    i = 0
    while i < len(diff_lines):
        line = diff_lines[i]
        if line.startswith('@@'):
            m = re.match(r'@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@', line)
            if m:
                if current_hunk:
                    hunks.append(current_hunk)
                current_hunk = {
                    'lines': []
                }
        elif current_hunk is not None:
            if line.startswith('+') or line.startswith('-') or line.startswith(' '):
                current_hunk['lines'].append(line)
        i += 1
    if current_hunk:
        hunks.append(current_hunk)
        
    print(f"Total hunks found in diff: {len(hunks)}")
    
    applied_count = 0
    for h_idx, hunk in enumerate(hunks):
        # Separate expected original lines and replacement lines
        expected_orig = []
        replacement_lines = []
        
        for hl in hunk['lines']:
            if hl.startswith(' ') or hl.startswith('-'):
                expected_orig.append(hl[1:])
            if hl.startswith(' ') or hl.startswith('+'):
                replacement_lines.append(hl[1:])
                
        # If expected_orig is empty, it's a pure addition at some location (which we need to handle or skip)
        if not expected_orig:
            print(f"Hunk {h_idx} has no context. Skipping.")
            continue
            
        # Clean expected original lines
        expected_clean = [clean_line(l) for l in expected_orig]
        
        # Search for a matching sequence of lines in the file
        found_idx = -1
        # Clean all lines of the target file
        lines_clean = [clean_line(l) for l in lines]
        
        # Look for expected_clean in lines_clean
        n_expect = len(expected_clean)
        for start_idx in range(len(lines) - n_expect + 1):
            window = lines_clean[start_idx : start_idx + n_expect]
            # Compare
            match = True
            for al, el in zip(window, expected_clean):
                if al != el:
                    # Allow matching if one is a substring of the other due to extreme cleaning differences
                    if el not in al and al not in el:
                        match = False
                        break
            if match:
                found_idx = start_idx
                break
                
        if found_idx != -1:
            # Check if there is another match (ambiguity check)
            double_match = False
            for start_idx in range(found_idx + 1, len(lines) - n_expect + 1):
                window = lines_clean[start_idx : start_idx + n_expect]
                match = True
                for al, el in zip(window, expected_clean):
                    if al != el and el not in al and al not in el:
                        match = False
                        break
                if match:
                    double_match = True
                    break
            
            # Apply replacement
            lines[found_idx : found_idx + n_expect] = replacement_lines
            applied_count += 1
        else:
            print(f"Hunk {h_idx} failed to find a match in the target file.")
            print(f"  First 3 expected lines: {expected_orig[:3]}")
            
    print(f"Successfully applied {applied_count} / {len(hunks)} hunks.")
    return "".join(lines)

# Run
with open('services/data.ts', 'r', encoding='utf-8') as f:
    orig = f.read()

with open('scratch/tmp_diff_utf8.txt', 'r', encoding='utf-8') as f:
    diff = f.read()

new_text = apply_fuzzy_patch(orig, diff)

with open('services/data.ts', 'w', encoding='utf-8') as f:
    f.write(new_text)

print("Done fuzzy patching.")
