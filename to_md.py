import os
import pymupdf4llm

pdf_files = [
    "public/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO ALUMINIO/SUBTERRANEO LSOH/FICHA TECNICA/ficha tecnica subte aluminio lsoh.pdf",
    "public/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO ALUMINIO/SUBTERRANEO PVC/FICHA TECNICA/ficha tecnica subte aluminio pvc.pdf",
    "public/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO ALUMINIO/SUBTERRANEO XLPE/FICHA TECNICA/ficha tecnica subte aluminio xlpe.pdf",
    "public/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO COBRE/SUBTERRANEO LSOH/FICHA TECNICA/ficha tecnica subte cobre lsoh.pdf",
    "public/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO COBRE/SUBTERRANEO PVC/FICHA TECNICA/ficha tecnica subte cobre pvc.pdf",
    "public/images/ProductosNuevos/3-CABLES DE POTENCIA/1-SUBTERRANEOS/SUBTERRANEO COBRE/SUBTERRANEO XLPE/FICHA TECNICA/ficha tecnica subte cobre xlpe.pdf",
    "public/images/ProductosNuevos/3-CABLES DE POTENCIA/2-PARA BOMBA SUMERGIBLE/FICHA TECNICA BOMBA SUMERGIBLE.pdf",
    "public/images/ProductosNuevos/3-CABLES DE POTENCIA/3-PARA VARIADOR DE FRECUENCIA/FICHA TECNICA VDF.pdf",
    "public/images/ProductosNuevos/4- CABLES DE MEDIA TENSION/CABLES MEDIA TENSION ALUMINIO/13,2 KV/FICHA TECNICA MT 13.2KV ALUMINIO.pdf",
    "public/images/ProductosNuevos/4- CABLES DE MEDIA TENSION/CABLES MEDIA TENSION ALUMINIO/33 KV/FICHA TECNICA MT 33KV ALUMINIO.pdf",
    "public/images/ProductosNuevos/4- CABLES DE MEDIA TENSION/CABLES MEDIA TENSION COBRE/13,2 KV/FICHA TECNICA MT 13.2KV COBRE.pdf",
    "public/images/ProductosNuevos/4- CABLES DE MEDIA TENSION/CABLES MEDIA TENSION COBRE/33 KV/FICHA TECNICA MT 33KV COBRE.pdf",
    "public/images/ProductosNuevos/5-CABLES INDUSTRIALES/1- INSTRUMENTACI\u00d3N ELECTRONICA/FICHA TECNICA/FICHA TECNICA INSTRUMENTAR.pdf",
    "public/images/ProductosNuevos/5-CABLES INDUSTRIALES/2-AUTOMATIZACI\u00d3N/FICHA TECNICA/FICHA TECNICA AUTOMATIZAR.pdf",
    "public/images/ProductosNuevos/5-CABLES INDUSTRIALES/3-CABLE COMANDO/FICHA TECNICA/FICHA TECNICA COMANDO.pdf"
]

os.makedirs("pdf_markdowns", exist_ok=True)

for i, pdf_path in enumerate(pdf_files):
    if not os.path.exists(pdf_path):
        print(f"Skipping {pdf_path} (not found)")
        continue
    
    try:
        md_text = pymupdf4llm.to_markdown(pdf_path)
        out_path = f"pdf_markdowns/pdf_{i}.md"
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(f"<!-- Source: {pdf_path} -->\n\n")
            f.write(md_text)
        print(f"Saved {out_path}")
    except Exception as e:
        print(f"Error on {pdf_path}: {e}")

print("All done!")
