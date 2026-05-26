import glob
import os

def analyze():
    files = glob.glob('scratch/*aerea*.txt') + glob.glob('scratch/*desnudos*.txt') + glob.glob('scratch/*envainados*.txt')
    files = list(set(files)) # unique
    
    print(f"Analyzing {len(files)} files:")
    for f in sorted(files):
        print(f"\n==================================================")
        print(f"File: {os.path.basename(f)}")
        with open(f, 'r', encoding='utf-8') as file:
            lines = file.readlines()
            
        print(f"Total lines: {len(lines)}")
        # Let's search for potential table headers
        headers = []
        for line in lines:
            if 'tabla' in line.lower() or 'dimensiones' in line.lower() or 'especificaciones' in line.lower() or 'parámetros' in line.lower() or 'coeficientes' in line.lower():
                headers.append(line.strip())
        print(f"Found {len(headers)} potential headers:")
        for h in headers[:20]:
            print(f"  - {h}")

if __name__ == '__main__':
    analyze()
