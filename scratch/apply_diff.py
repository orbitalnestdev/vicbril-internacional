import re
import sys
sys.stdout.reconfigure(encoding='utf-8')

def apply_unified_diff(original_text, diff_text):
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
                orig_start = int(m.group(1))
                orig_len = int(m.group(2)) if m.group(2) else 1
                new_start = int(m.group(3))
                new_len = int(m.group(4)) if m.group(4) else 1
                current_hunk = {
                    'orig_start': orig_start,
                    'orig_len': orig_len,
                    'new_start': new_start,
                    'new_len': new_len,
                    'lines': []
                }
        elif current_hunk is not None:
            if line.startswith('+') or line.startswith('-') or line.startswith(' '):
                current_hunk['lines'].append(line)
        i += 1
        
    if current_hunk:
        hunks.append(current_hunk)
        
    # Sort in reverse order of orig_start to apply bottom-up
    hunks.sort(key=lambda h: h['orig_start'], reverse=True)
    
    print(f"Total hunks to apply: {len(hunks)}")
    
    applied_count = 0
    for hunk in hunks:
        orig_idx = hunk['orig_start'] - 1
        orig_len = hunk['orig_len']
        
        expected_orig = []
        for hl in hunk['lines']:
            if hl.startswith(' ') or hl.startswith('-'):
                expected_orig.append(hl[1:])
                
        actual_orig = lines[orig_idx : orig_idx + orig_len]
        
        # Fuzzy compare
        actual_stripped = [l.strip() for l in actual_orig]
        expected_stripped = [l.strip() for l in expected_orig]
        
        def clean_str(s):
            return s.replace('á','a').replace('é','e').replace('í','i').replace('ó','o').replace('ú','u').replace('ñ','n').replace('º','').replace('°','').replace('├│','o').replace('├í','a').replace('├®','e').replace('├║','u').replace('├▒','n').replace('┬','').replace('├','').replace('│','').replace('®','').replace('º','').replace('°','')

        match = True
        if len(actual_stripped) != len(expected_stripped):
            match = False
            print(f"Length mismatch for hunk at line {hunk['orig_start']}: actual={len(actual_stripped)}, expected={len(expected_stripped)}")
        else:
            for idx_p, (al, el) in enumerate(zip(actual_stripped, expected_stripped)):
                if clean_str(al) != clean_str(el):
                    match = False
                    print(f"Mismatch at index {idx_p} for hunk {hunk['orig_start']}:")
                    print(f"  Actual   (len={len(al)}): {repr(al)}")
                    print(f"  Expected (len={len(el)}): {repr(el)}")
                    print(f"  Actual clean:   {repr(clean_str(al))}")
                    print(f"  Expected clean: {repr(clean_str(el))}")
                    break
                    
        if not match:
            # Try to search nearby
            found_idx = -1
            for search_idx in range(max(0, orig_idx - 100), min(len(lines) - len(expected_stripped) + 1, orig_idx + 100)):
                window = lines[search_idx : search_idx + len(expected_stripped)]
                win_stripped = [l.strip() for l in window]
                win_match = True
                for al, el in zip(win_stripped, expected_stripped):
                    if clean_str(al) != clean_str(el):
                        win_match = False
                        break
                if win_match:
                    found_idx = search_idx
                    break
            if found_idx != -1:
                orig_idx = found_idx
                orig_len = len(expected_stripped)
            else:
                print(f"Hunk at line {hunk['orig_start']} failed to apply!")
                print(f"Expected: {expected_stripped[:3]}")
                print(f"Actual:   {actual_stripped[:3]}")
                continue
                
        new_hunk_lines = []
        for hl in hunk['lines']:
            if hl.startswith(' ') or hl.startswith('+'):
                new_hunk_lines.append(hl[1:])
                
        lines[orig_idx : orig_idx + orig_len] = new_hunk_lines
        applied_count += 1
        
    print(f"Successfully applied {applied_count} / {len(hunks)} hunks.")
    return "".join(lines)

# Load files
with open('services/data.ts', 'r', encoding='utf-8') as f:
    orig = f.read()

with open('scratch/tmp_diff_utf8.txt', 'r', encoding='utf-8') as f:
    diff = f.read()

new_text = apply_unified_diff(orig, diff)

with open('services/data.ts', 'w', encoding='utf-8') as f:
    f.write(new_text)

print("Done patching services/data.ts")
