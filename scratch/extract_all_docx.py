import os
import zipfile
import xml.etree.ElementTree as ET

def extract_docx_text(docx_path):
    namespaces = {
        'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
    }
    texts = []
    try:
        with zipfile.ZipFile(docx_path) as docx:
            xml_content = docx.read('word/document.xml')
            root = ET.fromstring(xml_content)
            
            def get_elem_text(el):
                return ''.join(t.text for t in el.findall('.//w:t', namespaces) if t.text)

            for child in root.iter():
                if child.tag.endswith('p'):
                    txt = get_elem_text(child)
                    if txt:
                        texts.append(txt)
                elif child.tag.endswith('tbl'):
                    table_rows = []
                    for row in child.findall('.//w:tr', namespaces):
                        row_cells = []
                        for cell in row.findall('.//w:tc', namespaces):
                            cell_text = ' '.join(get_elem_text(p).strip() for p in cell.findall('.//w:p', namespaces))
                            row_cells.append(cell_text.strip())
                        table_rows.append(row_cells)
                    if table_rows:
                        texts.append('TABLE: ' + str(table_rows))
    except Exception as e:
        return f'Error: {e}'
    return '\n'.join(texts)

docx_files = []
folder = 'public/images/ProductosNuevos/7-CABLES ARMADOS'
for root, dirs, files in os.walk(folder):
    for file in files:
        if file.lower().endswith('.docx'):
            docx_files.append(os.path.join(root, file))

with open('scratch/docx_extracted.txt', 'w', encoding='utf-8') as out:
    for docx_path in docx_files:
        out.write(f'=== FILE: {docx_path} ===\n')
        out.write(extract_docx_text(docx_path))
        out.write('\n\n' + '='*80 + '\n\n')

print(f'Extracted {len(docx_files)} files into scratch/docx_extracted.txt')
