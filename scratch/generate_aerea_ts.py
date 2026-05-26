# Python script to parse the aerial bare cables data and generate typescript representation

def to_comma(val):
    return str(val).replace('.', ',')

# 1. Aluminum bare cable (aerea-desnudo-aluminio)
al_sections = ["16", "25", "35", "50 (7 hilos)", "50 (19 hilos)", "70", "95", "120 (19 hilos)", "120 (37 hilos)", "150", "185", "240", "300", "400"]
al_formations = ["7 x 1.70", "7 x 2.15", "7 x 2.52", "7 x 3.02", "19 x 1.85", "19 x 2.15", "19 x 2.52", "19 x 2.85", "37 x 2.15", "37 x 2.25", "37 x 2.52", "37 x 2.85", "61 x 2.52", "61 x 2.85"]
al_currents = [100, 125, 160, 195, 195, 235, 300, 340, 340, 395, 455, 545, 615, 725]
al_diameters = [5.1, 6.5, 7.6, 9.1, 9.3, 10.8, 12.6, 14.3, 15.1, 15.8, 17.6, 20.0, 22.7, 25.7]
al_resistances = [2.07, 1.30, 0.944, 0.657, 0.648, 0.480, 0.349, 0.273, 0.247, 0.226, 0.180, 0.141, 0.109, 0.0855]
al_loads = [445, 712, 978, 1405, 1431, 1933, 2656, 3397, 3765, 4123, 5172, 6615, 8526, 10906]
al_weights = [43.5, 69.6, 95.6, 137.5, 140.5, 189.8, 260.7, 333.5, 370.4, 405.6, 508.8, 650.8, 840.6, 1075.1]

al_rows = []
for i in range(len(al_sections)):
    row = [
        al_sections[i],
        to_comma(al_formations[i]),
        to_comma(al_weights[i]),
        to_comma(al_diameters[i]),
        to_comma(al_resistances[i]),
        str(al_loads[i]),
        str(al_currents[i])
    ]
    al_rows.append(row)

# 2. Copper bare cable (aerea-desnudo-cobre)
cu_sections = ["10", "16", "25", "35", "50 (7 hilos)", "50 (19 hilos)", "70", "95", "120", "150 (19 hilos)", "150 (37 hilos)", "185", "240", "300"]
cu_formations = ["7 x 1.35", "7 x 1.70", "7 x 2.15", "7 x 2.52", "7 x 3.02", "19 x 1.85", "19 x 2.15", "19 x 2.52", "19 x 2.85", "19 x 3.20", "37 x 2.25", "37 x 2.52", "37 x 2.85", "37 x 3.20"]
cu_diameters = [4.05, 5.1, 6.45, 7.56, 9.06, 9.25, 10.75, 12.6, 14.25, 16.0, 15.75, 17.64, 19.95, 22.4]
cu_resistances = [1.81, 1.14, 0.712, 0.518, 0.361, 0.356, 0.264, 0.192, 0.150, 0.119, 0.124, 0.0988, 0.0772, 0.0612] # corrected 120 from 1.150 to 0.150
cu_weights = [90, 143, 225, 314, 450, 462, 621, 854, 1090, 1377, 1326, 1665, 2129, 2682]
cu_loads = [389, 614, 975, 1326, 1869, 1967, 2645, 3600, 4549, 5667, 5628, 8010, 8858, 11040]
cu_currents = [82, 115, 143, 180, 215, 215, 280, 345, 400, 465, 465, 530, 635, 730]

cu_rows = []
for i in range(len(cu_sections)):
    row = [
        cu_sections[i],
        to_comma(cu_formations[i]),
        to_comma(cu_weights[i]),
        to_comma(cu_diameters[i]),
        to_comma(cu_resistances[i]),
        str(cu_loads[i]),
        str(cu_currents[i])
    ]
    cu_rows.append(row)

# 3. Aluminum steel reinforced cable (aerea-aluminio-acero)
acsr_sections = ["16/2.5", "25/4", "35/6", "50/8", "70/12", "95/15", "120/20", "150/25", "185/30", "210/35", "240/40", "300/50"]
acsr_form_al = ["6 x 1.80", "6 x 2.25", "6 x 2.70", "6 x 3.20", "26 x 1.85", "26 x 2.15", "26 x 2.44", "26 x 2.70", "26 x 3.00", "26 x 3.20", "26 x 3.45", "26 x 3.86"]
acsr_form_st = ["1 x 1.80", "1 x 2.25", "1 x 2.70", "1 x 3.20", "7 x 1.44", "7 x 1.67", "7 x 1.90", "7 x 2.10", "7 x 2.33", "7 x 2.49", "7 x 2.68", "7 x 3.00"]
acsr_currents = [90, 125, 145, 170, 280, 340, 400, 460, 520, 580, 625, 710]
acsr_diameters = [5.4, 6.75, 8.1, 9.6, 11.7, 13.6, 15.5, 17.1, 18.9, 20.3, 21.8, 24.4]
acsr_weights = [62, 97, 139, 195, 282, 380, 490, 600, 741, 844, 979, 1227]
acsr_res_pur = [1.88, 1.20, 0.835, 0.595, 0.413, 0.306, 0.237, 0.194, 0.157, 0.138, 0.119, 0.0949]
acsr_res_aly = [2.16, 1.38, 0.961, 0.684, 0.475, 0.352, 0.273, 0.223, 0.181, 0.159, 0.137, 0.109]
acsr_load_pur = [580, 900, 1230, 1680, 2630, 3490, 4440, 5360, 6520, 7340, 8510, 10500]
acsr_load_aly = [760, 1180, 1680, 2350, 3440, 4630, 5980, 7310, 8940, 10200, 11800, 14800]

acsr_rows = []
for i in range(len(acsr_sections)):
    row = [
        acsr_sections[i],
        to_comma(acsr_form_al[i]),
        to_comma(acsr_form_st[i]),
        to_comma(acsr_diameters[i]),
        to_comma(acsr_weights[i]),
        to_comma(acsr_res_pur[i]),
        to_comma(acsr_res_aly[i]),
        str(acsr_load_pur[i]),
        str(acsr_load_aly[i]),
        str(acsr_currents[i])
    ]
    acsr_rows.append(row)

import json
print("ALUMINUM BARE ROWS:")
print(json.dumps(al_rows, indent=2))
print("\nCOPPER BARE ROWS:")
print(json.dumps(cu_rows, indent=2))
print("\nACSR ROWS:")
print(json.dumps(acsr_rows, indent=2))
