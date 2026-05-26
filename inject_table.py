import re

with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

table_str = """specsTables: [
      {
        title: "DIMENSIONES Y PESOS APROXIMADOS",
        headers: [
          "Sección",
          "Diám. cond.",
          "Diám. ext s/arm",
          "Diám. ext arm",
          "Peso s/arm",
          "Peso arm"
        ],
        rows: [
          [
            "35",
            "7,05",
            "19,65",
            "24,55",
            "-",
            "-"
          ],
          [
            "50",
            "8,1",
            "20,7",
            "25,6",
            "-",
            "-"
          ],
          [
            "70",
            "9,9",
            "22,5",
            "27,4",
            "679",
            "1027"
          ],
          [
            "95",
            "11,5",
            "24,1",
            "29,2",
            "783",
            "1166"
          ],
          [
            "120",
            "13,05",
            "25,65",
            "30,75",
            "893",
            "1296"
          ],
          [
            "150",
            "14,4",
            "27",
            "32,3",
            "1009",
            "1417"
          ],
          [
            "185",
            "15,95",
            "28,8",
            "33,85",
            "1136",
            "1565"
          ],
          [
            "240",
            "18,65",
            "31,7",
            "36,75",
            "1396",
            "1861"
          ],
          [
            "300",
            "20,4",
            "34,2",
            "39,1",
            "1569",
            "2075"
          ],
          [
            "400",
            "23,65",
            "37,65",
            "42,95",
            "1944",
            "2516"
          ],
          [
            "500",
            "26.1",
            "42,3",
            "47,8",
            "2294",
            "2901"
          ],
          [
            "630",
            "29,6",
            "46",
            "51,5",
            "3424",
            "1.  Temperatura del terreno: 20 C. "
          ]
        ]
      }
    ],"""

match = re.search(r'(id:\s*\'13-2-kv-aluminio\'.*?)(specsTables:\s*\[\s*\],)', content, re.DOTALL)
if match:
    new_str = match.group(1) + table_str
    content = content.replace(match.group(0), new_str)
    
    with open('services/data.ts', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Injected table")
