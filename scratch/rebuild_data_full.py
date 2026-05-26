import subprocess
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

def run_script(script_name):
    print(f"--- Running {script_name} ---")
    result = subprocess.run([sys.executable, script_name], capture_output=True, text=True, encoding='utf-8')
    if result.returncode != 0:
        print(f"Error running {script_name}:")
        print(result.stderr)
        return False
    print(result.stdout)
    return True

# 1. Revert data.ts
print("Reverting services/data.ts to clean git index state...")
subprocess.run(["git", "restore", "services/data.ts"])

# 2. Add remaining products from hunk 36
if not run_script("scratch/add_hunk36_products.py"):
    sys.exit(1)

# 3. Convert categories
if not run_script("scratch/convert_categories.py"):
    sys.exit(1)

# 4. Run cleanup early to fix quotes and encoding artifacts before update scripts run
if not run_script("scratch/cleanup_data.py"):
    sys.exit(1)

# 5. Fix legacy characteristics/installations
if not run_script("fix_legacy.py"):
    sys.exit(1)

# 6. Update industrial products
if not run_script("scratch/update_data_ts.py"):
    sys.exit(1)

# 7. Update potencia & media tension products
if not run_script("scratch/update_potencia_mt.py"):
    sys.exit(1)

# 8. Update categories
if not run_script("update_categories.py"):
    sys.exit(1)

# 9. Update certs
if not run_script("update_certs.py"):
    sys.exit(1)

# 10. Extract and inject potencia tables
if not run_script("extract_potencia_tables.py"):
    sys.exit(1)

# 11. Fix potencia specs/characteristics
if not run_script("fix_potencia.py"):
    sys.exit(1)

print("All pipeline scripts completed successfully! services/data.ts is fully rebuilt.")
