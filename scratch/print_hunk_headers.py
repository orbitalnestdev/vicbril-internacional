import sys
sys.stdout.reconfigure(encoding='utf-8')
with open('scratch/tmp_diff_utf8.txt', 'r', encoding='utf-8') as f:
    for line in f:
        if line.startswith('@@') or line.startswith('diff') or line.startswith('---') or line.startswith('+++'):
            print(line.strip())
