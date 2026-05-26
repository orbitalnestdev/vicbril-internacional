# Python script to update the aerial cables section of services/data.ts

new_block = """  {
    id: 'aerea-preensamblado-aluminio',
    name: 'Preensamblado de Aluminio (cePRET)',
    categoryPath: ['Cables Instalación Aérea', 'Envainados'],
    description: 'Conductores de aluminio para redes de distribución aérea de baja tensión de hasta 1 kV.',
    detailedDescription: `DESCRIPCIÓN
Cable preensamblado para líneas aéreas de distribución de energía eléctrica en baja tensión, constituido por tres fases aisladas cableadas a espiral visible con un neutro portante (mensajero), aislado o desnudo; para tensiones nominales de servicio de hasta 1 kV entre fases. El conjunto básico descripto puede suministrarse con una o dos fases adicionales para alumbrado público.

USO
Estos cables se utilizan en líneas aéreas de distribución en baja tensión, instalados sobre postes, fachadas y en zonas arboladas.

NORMAS
La construcción y ensayo de los cables contemplados en el presente folleto responden a las normas IRAM 2263, NBR 8182, ICEA S-76-474 y NFC 33209.`,
    image: '/images/ProductosNuevos/2-LINEAS AEREAS/1-ENVAINADOS/1-PREENSAMBLADOS DE ALUMINIO/PORTADA (ELIMINAR SIMBOLO GEMINI).jpeg',
    gallery: [
      '/images/ProductosNuevos/2-LINEAS AEREAS/1-ENVAINADOS/1-PREENSAMBLADOS DE ALUMINIO/FICHA TECNICA/foto dentro de ficha tecnica.jpeg'
    ],
    pdf: '/images/ProductosNuevos/2-LINEAS AEREAS/1-ENVAINADOS/1-PREENSAMBLADOS DE ALUMINIO/FICHA TECNICA/ficha tecnica a modificar.pdf',
    specs: ['0,6 / 1 kV', '90° C', 'IRAM 2263'],
    technicalIntro: `ELECCIÓN DE LOS CABLES
La sección de los cables se determina en función de la corriente a transmitir, caída de tensión e intensidad de cortocircuito admisible.

Caída de tensión: Se determina mediante la siguiente expresión:
ΔU = K · I · L · (Rca cosφ + X senφ)
ΔU: caída de tensión, en V
K: 1.73 para líneas trifásicas
I: corriente a transmitir, en A
L: longitud de la línea, en km.
cosφ: factor de potencia
Rca, X: resistencia eléctrica de los conductores a la temperatura de servicio y reactancia inductiva por fase a 50 Hz según tabla adjunta, en ohm / km.

Intensidad de cortocircuito admisible: Se verifica con la siguiente expresión:
I = (k · S) / √t
I: intensidad de corriente de cortocircuito admisible, en A
k: 92 (para cables aislados con XLPE)
S: sección del conductor, en mm2
t: duración del cortocircuito, en segundos.`,
    characteristics: [
      'CONSTRUCCIÓN',
      'Fases: aluminio puro 1350 (AAC), clase 2, compactadas (a pedido se pueden fabricar sin compactar).',
      'Neutro portante: aleación de aluminio (AAAC), aluminio con alma de acero (ACSR) o aluminio puro 1350 H-19 (AAC).',
      'Alumbrado: aluminio puro 1350 (AAC), clase 2, compactadas (a pedido se pueden fabricar sin compactar).',
      'Aislación XLPE: Polietileno reticulado color negro, resistente UV (90°C servicio / 130°C emergencia / 250°C cortocircuito).',
      'Aislación PEBD: Polietileno termoplástico color negro, resistente UV (75°C servicio / 95°C emergencia / 150°C cortocircuito).',
      'Identificación: Mediante números o bien con nervaduras.',
      'Reunión: Conductores reunidos en espiral visible, con una relación de cableado de 20 a 25 veces el diámetro del conjunto o 60 veces el diámetro de un conductor de fase aislado.'
    ],
    specsTables: [
      {
        title: "Conductores de fase aislados con XLPE",
        headers: ["Sección (mm²/AWG)", "Nº hilos", "Espesor aisl. (mm)", "Diámetro ext. (mm)", "Peso (kg/km)", "Intens. adm. (A)", "Resist. 90°C (Ω/km)", "React. 50Hz (Ω/km)"],
        rows: [
          { isSubtitle: true, content: "Secciones en mm²" },
          ["10", "7", "1,2", "6,0", "45", "55", "3,949", "0,105"],
          ["16", "7", "1,2", "7,2", "63", "65", "2,449", "0,098"],
          ["25", "7", "1,2", "9,0", "98", "75", "1,539", "0,097"],
          ["35", "7", "1,6", "10,5", "135", "100", "1,113", "0,097"],
          ["50", "7", "1,6", "11,4", "173", "120", "0,822", "0,093"],
          ["70", "14", "1,8", "13,6", "244", "155", "0,568", "0,092"],
          ["95", "19", "2,0", "15,8", "332", "190", "0,410", "0,089"],
          ["120", "19", "2,0", "17,0", "400", "230", "0,324", "0,088"],
          ["150", "19", "2,2", "19,2", "502", "270", "0,264", "0,085"],
          { isSubtitle: true, content: "Secciones en AWG" },
          ["6", "7", "1,2", "7,0", "56", "70", "2,782", "0,098"],
          ["4", "7", "1,2", "8,0", "113", "85", "1,744", "0,094"],
          ["2", "7", "1,2", "9,7", "124", "120", "1,097", "0,087"],
          ["1/0", "7 ó 19", "1,5", "11,7", "176", "150", "0,690", "0,090"],
          ["2/0", "19", "1,5", "13,0", "232", "190", "0,547", "0,087"],
          ["4/0", "19", "1,5", "15,5", "352", "250", "0,345", "0,084"]
        ],
        note: "(1) Valores válidos para conjuntos trifásicos, expuestos al sol con una temperatura ambiente de 40° C y de 90° C en los conductores."
      },
      {
        title: "Conductor neutro portante aislado con XLPE",
        headers: ["Sección", "Formación (Nº x mm)", "Diám. Desnudo (mm)", "Diám. Aislado (mm)", "Peso (kg/km)", "Resist. 90°C (Ω/km)", "Tracción (daN)"],
        rows: [
          { isSubtitle: true, content: "Secciones en mm²" },
          ["16 - AAAC", "7 x 1,70", "5,1", "7,5", "70", "2,598", "444"],
          ["25 - AAAC", "7 x 2,15", "6,5", "9,3", "109", "1,628", "710"],
          ["35 - AAAC", "7 x 2,52", "7,6", "10,8", "149", "1,183", "976"],
          ["50 - AAAC", "7 x 3,02", "9,1", "12,3", "202", "0,824", "1401"],
          ["54.6 - AAAC", "7 x 3,15", "9,5", "12,7", "217", "0,757", "1577"],
          ["70 - AAAC", "7 x 3,50", "10,6", "14,2", "274", "0,602", "1928"],
          { isSubtitle: true, content: "Secciones en AWG" },
          ["6 - AAC", "7 x 1,55", "4,7", "7,0", "57", "2,782", "250"],
          ["4 - AAC", "7 x 1,96", "5,9", "8,2", "82", "1,744", "392"],
          ["2 - AAC", "7 x 2,47", "7,4", "9,7", "122", "1,097", "601"],
          ["1/0 - AAC", "7 x 3,12", "9,4", "12,5", "191", "0,690", "884"],
          ["2/0 - AAC", "7 x 3,50", "10,5", "13,6", "233", "0,547", "1117"],
          ["4/0 - AAC", "7 x 4,42", "11,8", "14,9", "359", "0,345", "1705"],
          { isSubtitle: true, content: "Otras Secciones AAAC" },
          ["30.58 - AAAC", "7 x 1,68", "5,0", "7,5", "76", "2,685", "492"],
          ["48.89 - AAAC", "7 x 2,12", "6,4", "9,0", "119", "1,690", "784"],
          ["77.47 - AAAC", "7 x 2,67", "8,0", "10,5", "179", "1,060", "1250"],
          ["123.3 - AAAC", "7 x 3,37", "10,1", "13,5", "289", "0,666", "1900"],
          ["155.4 - AAAC", "7 x 3,78", "11,4", "14,5", "355", "0,528", "2400"],
          ["246.9 - AAAC", "7 x 4,77", "14,3", "17,5", "544", "0,333", "3810"],
          { isSubtitle: true, content: "Secciones ACSR" },
          ["6 - ACSR", "6 + 1 x 1,68", "5,0", "7,4", "76", "2,769", "528"],
          ["4 - ACSR", "6 + 1 x 2,12", "6,4", "8,7", "119", "1,744", "827"],
          ["2 - ACSR", "6 + 1 x 2,67", "8,0", "10,3", "179", "1,092", "1264"],
          ["1/0 - ACSR", "6 + 1 x 3,37", "10,1", "13,2", "289", "0,687", "1950"],
          ["2/0 - ACSR", "6 + 1 x 3,78", "11,3", "14,4", "355", "0,546", "2352"],
          ["4/0 - ACSR", "6 + 1 x 4,77", "14,3", "17,4", "544", "0,344", "3714"]
        ]
      },
      {
        title: "Coeficientes de Corrección de la Intensidad Admisible",
        isHorizontal: true,
        headers: [],
        rows: [
          ["Temperatura en °C", "10", "15", "20", "25", "30", "35", "40", "45", "50"],
          ["Factor de corrección", "1,26", "1,22", "1,18", "1,14", "1,10", "1,05", "1,00", "0,95", "0,90"]
        ],
        note: "Cables instalados con temperatura distinta a 40° C."
      }
    ],
    certifications: ['iram', 'seguridad', 'marcacion-secuencial', 'resistente-uv'],
    availableBrands: []
  },
  {
    id: 'aerea-acometida-cobre',
    name: 'Acometidas de Cobre (CENTRALFLEX VC-30)',
    categoryPath: ['Cables Instalación Aérea', 'Envainados'],
    description: 'Cables preensamblados de cobre para conexiones domiciliarias y baja tensión.',
    detailedDescription: `DESCRIPCIÓN
Especialmente adecuado para acometidas desde líneas aéreas de baja tensión, monofásicas o trifásicas, hasta 0,6 / 1,1 kV.
Fabricados con cobre electrolítico de alta conductividad semirrígido clase 2, los mismos están aislados y reunidos en espiral visible con relación de cableado de 14 a 16 veces el diámetro del conjunto o 60 veces el diámetro de una fase.
Apto para intemperie. El compuesto aislante XLPE tiene excelentes características aislantes y mecánicas, sumado a su contenido de negro de humo, que aporta resistencia a la radiación solar.

USO
Los cables acometida se utilizan primordialmente para la conexión y la alimentación de usuarios particulares desde la red de distribución de energía eléctrica, aunque también son aptos para la aplicación de iluminación, alimentación de motores, etc.
Sistemas de distribución de energía en baja tensión. Acometidas monofásicas y trifásicas.

NORMAS
IRAM 2164 - IRAM NM 280 (Clase 2).`,
    image: '/images/ProductosNuevos/2-LINEAS AEREAS/1-ENVAINADOS/2-ACOMETIDAS DE COBRE/PORTADA (ELIMINAR SIMBOLO GEMINI).jpeg',
    gallery: [
      '/images/ProductosNuevos/2-LINEAS AEREAS/1-ENVAINADOS/2-ACOMETIDAS DE COBRE/FICHA TECNICA/foto producto dentro de ficha tecnica.jpeg'
    ],
    pdf: '/images/ProductosNuevos/2-LINEAS AEREAS/1-ENVAINADOS/2-ACOMETIDAS DE COBRE/FICHA TECNICA/ficha tecnica a modificar.pdf',
    specs: ['0,6 / 1,1 kV', 'Cobre Clase 2', 'IRAM 2164'],
    technicalIntro: `CONSTRUCCIÓN
Conductores: Cuerda rígida de cobre electrolítico recocido (Norma IRAM NM 280, clase 2).
Aislación: Polietileno reticulado (XLPE).
Reunión: Los conductores se cablean entre sí (sin conductor portante).

PARÁMETROS TÉCNICOS
• Material del Conductor: Cobre duro
• Material de Aislación: Polietileno reticulado XLPE
• Clase (Flexibilidad): 2
• Temp. de Servicio: 90 °C
• Temp. Máx. de Servicio: 130 °C
• Cortocircuito: 250 °C
• Tensión de servicio (Uo/U): 0.6 / 1 kV
• Rango de fabricación: 4 a 16 mm²`,
    characteristics: [
      'CONSTRUCCIÓN',
      'Conductores: Cuerda rígida de cobre electrolítico recocido (Norma IRAM NM 280, clase 2).',
      'Aislación: Polietileno reticulado (XLPE).',
      'Reunión: Los conductores se cablean entre sí (sin conductor portante).',
      'Apto para intemperie con resistencia a la radiación solar.',
      'Excelente resistencia mecánica y aislante.'
    ],
    specsTables: [
      {
        title: "Tabla de Especificaciones",
        headers: ["Sección nominal (mm²)", "Cant. Alambres", "Clase conductor", "Diámetro del Haz (mm²)", "Corriente Admisible (A)", "Temple del Cu", "Peso Aproximado (Kg/Km)"],
        rows: [
          ["2x4", "7", "2", "10", "45", "Rec.", "100"],
          ["2x6", "7", "2", "11", "55", "Rec.", "143"],
          ["2x10", "7", "2", "13", "70", "Rec.", "222"],
          ["2x16", "7", "2", "15", "90", "Rec.", "343"],
          ["4x4", "7", "2", "12", "35", "Rec.", "200"],
          ["4x6", "7", "2", "14", "45", "Rec.", "286"],
          ["4x10", "7", "2", "16", "55", "Rec.", "446"],
          ["4x16", "7", "2", "19", "75", "Rec.", "694"]
        ],
        note: "(1) Valor aproximado. (2) Cables expuestos al sol, temp. amb. 40°C y 90°C en los conductores. (3) Cuando no se especifica el temple, corresponderá duro."
      }
    ],
    certifications: ['iram', 'seguridad', 'marcacion-secuencial', 'resistente-uv']
  },
  {
    id: 'aerea-concentrico-antihurto',
    name: 'Concéntricos Anti-hurto (ceCONEX)',
    categoryPath: ['Cables Instalación Aérea', 'Envainados'],
    description: 'Cables de seguridad diseñados para prevenir conexiones clandestinas y asegurar la medición.',
    detailedDescription: `DESCRIPCIÓN
Cables con conductor central de fase (Aluminio o Cobre) y conductor neutro formado por una corona de alambres que rodea la aislación central. Esta configuración impide el pelado del cable para hurtar energía sin afectar el neutro, provocando un cortocircuito que protege la red.

USO
Acometidas desde líneas aéreas preensambladas y transformadores hacia medidores. Especialmente diseñado para imposibilitar conexiones clandestinas (antihurto).

NORMAS
IRAM 63001, IRAM-NM 280, ICEA S-95-658, IEC 60502-1.`,
    image: '/images/ProductosNuevos/2-LINEAS AEREAS/1-ENVAINADOS/3-CONCENTRICOS (ANTIHURTO)/PORTADA.jpeg',
    pdf: '/images/ProductosNuevos/2-LINEAS AEREAS/1-ENVAINADOS/3-CONCENTRICOS (ANTIHURTO)/2-CONCENTRICOS COBRE/FICHA TECNICA/ficha tecnica a modificar.pdf',
    specs: ['0,6 / 1,1 kV', 'Antihurto', 'XLPE'],
    technicalIntro: `CONSTRUCCIÓN
Conductor Central (Fase): Cuerda de aluminio puro o cobre recocido (Clase 2).
Aislación: Polietileno reticulado (XLPE) resistente a la intemperie.
Conductor Periférico (Neutro): Corona de alambres de aleación de aluminio o cobre dispuesto helicoidalmente.
Vaina Exterior: Polietileno reticulado (XLPE) o PVC de alta resistencia mecánica y UV.`,
    characteristics: [
      'CONSTRUCCIÓN',
      'Configuración concéntrica que impide el fraude eléctrico.',
      'Conductor de fase central protegido por el neutro periférico.',
      'Aislación y vaina en XLPE de alta resistencia térmica (90°C).',
      'Excelente resistencia a la intemperie y radiación UV.',
      'Marcación secuencial metro a metro para control de stock.'
    ],
    specsTables: [
      {
        title: "Aluminio Monofásico (1xAl + Al) - Norma IEC 60502-1",
        headers: ["Sección Nominal (mm²)", "Formación (Cuerda N° x Ømm)", "Espesor de aislación nominal (mm)", "Diámetro exterior aprox. (mm)", "Espesor de vaina promedio (mm)", "Resistencia eléctrica a 20°C (Ohm/km)", "Peso aproximado (kg/km)", "Corriente admisible a 40°C (A)"],
        rows: [
          ["1x6 + 6", "1 x 7 x 1,05", "0,7", "9", "1,24", "4,61", "80", "42"],
          ["1x10 + 10", "1 x 7 x 1,35", "0,7", "10", "1,24", "3,08", "106", "51"],
          ["1x16 + 16", "1 x 7 x 1,70", "0,7", "12", "1,24", "1,91", "150", "72"],
          ["1x25 + 25", "1 x 7 x 2,15", "0,9", "14", "1,24", "1,2", "225", "94"]
        ]
      },
      {
        title: "Aluminio Trifásico (3xAl + Al) - Norma IEC 60502-1 (Métrico)",
        headers: ["Sección Nominal (mm²)", "Espesor de aislación nominal (mm)", "Espesor de la cubierta mínimo (mm)", "Diámetro exterior aprox. (mm)", "Peso aproximado (kg/km)", "Resistencia eléctrica en CC a 20°C (Ohm/km)", "Reactancia inductiva a 50 Hz (Ohm/km)", "Corriente admisible a 40°C (A)"],
        rows: [
          ["3x6 + 6", "0,7", "1,24", "17", "339", "4,61", "0,082", "34"],
          ["3x10 + 10", "0,7", "1,24", "19", "408", "3,08", "0,078", "44"],
          ["3x16 + 16", "0,7", "1,24", "21", "515", "1,91", "0,075", "62"],
          ["3x25 + 25", "0,9", "1,24", "24", "698", "1,2", "0,072", "77"]
        ]
      },
      {
        title: "Aluminio Trifásico (3xAl + Al) - Norma ICEA S-66-524 (AWG)",
        headers: ["Sección AWG", "Espesor de aislación (mm)", "Espesor de la cubierta mínimo (mm)", "Diámetro exterior aprox. (mm)", "Peso aproximado (kg/km)", "Resistencia eléctrica en CC a 20°C (Ohm/km)", "Reactancia inductiva a 50 Hz (Ohm/km)", "Corriente admisible a 40°C (A)"],
        rows: [
          ["3x6 + 6", "1,14", "1,52", "21", "432", "2,214", "0,101", "52"],
          ["3x4 + 4", "1,14", "2,03", "25", "622", "1,390", "0,095", "73"],
          ["3x2 + 2", "1,14", "2,03", "28", "871", "0,872", "0,091", "90"]
        ]
      },
      {
        title: "Cobre Monofásico (1xCu + Cu)",
        headers: ["Sección Nominal (mm²)", "Formación (N° x Ømm)", "Espesor de aislación promedio (mm)", "Diámetro exterior aprox. (mm)", "Espesor de vaina promedio (mm)", "Resistencia eléctrica a 20°C (Ohm/km)", "Carga de rotura aprox. (daN)", "Peso aproximado (kg/km)", "Corriente admisible máxima (A)"],
        rows: [
          ["1x4 + 4", "1 x 7 x 0,85", "1,0", "9", "1,2", "4,61", "80", "115", "42"],
          ["1x6 + 6", "1 x 7 x 1,05", "1,0", "10", "1,2", "3,08", "120", "159", "54"],
          ["1x10 + 10", "1 x 7 x 1,35", "1,0", "11", "1,2", "1,83", "200", "241", "71"],
          ["1x16 + 16", "1 x 7 x 1,70", "1,0", "13", "1,2", "1,15", "320", "385", "96"]
        ],
        note: "(1) Corriente máxima para cables expuestos al sol, con temperatura ambiente de 40ºC, 90ºC en el conductor, sin viento. (2) La carga de rotura es orientativa."
      }
    ],
    certifications: ['iram', 'seguridad', 'resistente-uv', 'antihurto']
  },
  {
    id: 'aerea-desnudo-aluminio',
    name: 'Cables Desnudos de Aleación de Aluminio',
    categoryPath: ['Cables Instalación Aérea', 'Desnudos'],
    description: 'Conductores de aleación de aluminio para líneas aéreas de transporte y distribución.',
    detailedDescription: `DESCRIPCIÓN
Conductor de cuerda desnuda rígida de aleación de aluminio tratada térmicamente (6101 / 6201-T81). Ofrecen una excelente relación conductividad-peso y alta resistencia mecánica.

USO
Transmisión aérea de energía en media y baja tensión (hasta 33 kV).

NORMAS
IRAM 2212, ASTM B-399.`,
    image: '/images/ProductosNuevos/2-LINEAS AEREAS/2-DESNUDOS/1-CABLE DESNUDO DE ALUMINIO/PORTADA(ELIMINAR LOGO GEMINI).jpeg',
    gallery: [
      '/images/ProductosNuevos/2-LINEAS AEREAS/2-DESNUDOS/1-CABLE DESNUDO DE ALUMINIO/FICHA TECNICA/foto producto dentro de ficha tecnica.jpeg'
    ],
    pdf: '/images/ProductosNuevos/2-LINEAS AEREAS/2-DESNUDOS/1-CABLE DESNUDO DE ALUMINIO/FICHA TECNICA/ficha tecnica a modificar.pdf',
    specs: ['Aleación 6101/6201', 'Temple Duro', 'IRAM 2212'],
    technicalIntro: `CONSTRUCCIÓN
Conductor: Cuerda concéntrica de alambres de aleación de aluminio 6201-T81.
Acabado: Desnudo, sin aislación.`,
    characteristics: [
      'CONSTRUCCIÓN',
      'Material: Aleación de aluminio 6101 / 6201-T81.',
      'Alta resistencia mecánica y bajo peso.',
      'Excelente resistencia a la corrosión ambiental.',
      'Ideal para vanos de media y larga distancia.'
    ],
    specsTables: [
      {
        title: "Tabla de Datos Técnicos",
        headers: ["Sección nominal (mm²)", "Formación (N° x mm)", "Peso aproximado (kg/km)", "Diámetro exterior máximo (mm)", "Resistencia óhmica máxima a 20°C (Ohm/km)", "Carga de rotura mínima (daN)", "Corriente admisible máxima (A)"],
        rows: [
          ["16", "7 x 1,70", "43,5", "5,1", "2,07", "445", "100"],
          ["25", "7 x 2,15", "69,6", "6,5", "1,3", "712", "125"],
          ["35", "7 x 2,52", "95,6", "7,6", "0,944", "978", "160"],
          ["50 (7 hilos)", "7 x 3,02", "137,5", "9,1", "0,657", "1405", "195"],
          ["50 (19 hilos)", "19 x 1,85", "140,5", "9,3", "0,648", "1431", "195"],
          ["70", "19 x 2,15", "189,8", "10,8", "0,48", "1933", "235"],
          ["95", "19 x 2,52", "260,7", "12,6", "0,349", "2656", "300"],
          ["120 (19 hilos)", "19 x 2,85", "333,5", "14,3", "0,273", "3397", "340"],
          ["120 (37 hilos)", "37 x 2,15", "370,4", "15,1", "0,247", "3765", "340"],
          ["150", "37 x 2,25", "405,6", "15,8", "0,226", "4123", "395"],
          ["185", "37 x 2,52", "508,8", "17,6", "0,18", "5172", "455"],
          ["240", "37 x 2,85", "650,8", "20,0", "0,141", "6615", "545"],
          ["300", "61 x 2,52", "840,6", "22,7", "0,109", "8526", "615"],
          ["400", "61 x 2,85", "1075,1", "25,7", "0,0855", "10906", "725"]
        ],
        note: "(1) A temperatura ambiente de 40 °C, no expuesto al sol, con viento 0.6 m/seg, temperatura en el conductor 80 °C y factor de carga 100 %. (2) Resistencia óhmica a 20 °C, en corriente continua."
      }
    ],
    certifications: ['iram', 'seguridad']
  },
  {
    id: 'aerea-desnudo-cobre',
    name: 'Cables Desnudos de Cobre Duro',
    categoryPath: ['Cables Instalación Aérea', 'Desnudos'],
    description: 'Conductores de cobre electrolítico de alta pureza para redes aéreas y puestas a tierra.',
    detailedDescription: `DESCRIPCIÓN
Cables de cobre duro desnudos, fabricados con cobre electrolítico de alta pureza. Ofrecen la máxima conductividad eléctrica y excelente resistencia a la corrosión.

USO
Redes aéreas de distribución de energía, líneas de transmisión y sistemas de protección contra descargas atmosféricas (puestas a tierra).

NORMAS
IRAM 2004.`,
    image: '/images/ProductosNuevos/2-LINEAS AEREAS/2-DESNUDOS/2-CABLE DESNUDO DE COBRE DURO/PORTADA(ELIMINAR LOGO GEMINI).jpeg',
    gallery: [
      '/images/ProductosNuevos/2-LINEAS AEREAS/2-DESNUDOS/2-CABLE DESNUDO DE COBRE DURO/FICHA TECNICA/foto producto dentro de ficha tecnica.jpeg'
    ],
    pdf: '/images/ProductosNuevos/2-LINEAS AEREAS/2-DESNUDOS/2-CABLE DESNUDO DE COBRE DURO/FICHA TECNICA/ficha tecnica a modificar.pdf',
    specs: ['Cobre Electrolítico', 'Temple Duro', 'IRAM 2004'],
    technicalIntro: `CONSTRUCCIÓN
Conductor: Cuerda concéntrica de alambres de cobre electrolítico recocido o duro.
Acabado: Desnudo, sin aislación.`,
    characteristics: [
      'CONSTRUCCIÓN',
      'Material: Cobre electrolítico de alta pureza (99.9%).',
      'Temple: Duro (para líneas aéreas) o Recocido (para puestas a tierra).',
      'Alta conductividad eléctrica y térmica.',
      'Gran resistencia a la tracción y fatiga.'
    ],
    specsTables: [
      {
        title: "Tabla de Datos Técnicos",
        headers: ["Sección nominal (mm²)", "Formación (N° x mm)", "Peso aproximado (kg/km)", "Diámetro exterior (mm)", "Resistencia a 20°C en CC (Ohm/km)", "Carga de rotura aprox. (daN)", "Corriente admisible máxima (A)"],
        rows: [
          ["10", "7 x 1,35", "90", "4,05", "1,81", "389", "82"],
          ["16", "7 x 1,70", "143", "5,1", "1,14", "614", "115"],
          ["25", "7 x 2,15", "225", "6,45", "0,712", "975", "143"],
          ["35", "7 x 2,52", "314", "7,56", "0,518", "1326", "180"],
          ["50 (7 hilos)", "7 x 3,02", "450", "9,06", "0,361", "1869", "215"],
          ["50 (19 hilos)", "19 x 1,85", "462", "9,25", "0,356", "1967", "215"],
          ["70", "19 x 2,15", "621", "10,75", "0,264", "2645", "280"],
          ["95", "19 x 2,52", "854", "12,6", "0,192", "3600", "345"],
          ["120", "19 x 2,85", "1090", "14,25", "0,15", "4549", "400"],
          ["150 (19 hilos)", "19 x 3,20", "1377", "16,0", "0,119", "5667", "465"],
          ["150 (37 hilos)", "37 x 2,25", "1326", "15,75", "0,124", "5628", "465"],
          ["185", "37 x 2,52", "1665", "17,64", "0,0988", "8010", "530"],
          ["240", "37 x 2,85", "2129", "19,95", "0,0772", "8858", "635"],
          ["300", "37 x 3,20", "2682", "22,4", "0,0612", "11040", "730"]
        ],
        note: "(1) Cables expuestos al sol con viento transversal de 0.6 m/s, temperatura ambiente de 40°C, sobreelevación de temperatura de 40°C (temperatura en el conductor 80°C). (2) Resistencia óhmica a 20°C en corriente continua."
      }
    ],
    certifications: ['iram', 'seguridad']
  },
  {
    id: 'aerea-aluminio-acero',
    name: 'Aluminio con Alma de Acero (ACSR)',
    categoryPath: ['Cables Instalación Aérea', 'Desnudos'],
    description: 'Conductores reforzados con alma de acero para grandes vanos y alta resistencia mecánica.',
    detailedDescription: `DESCRIPCIÓN
Conductores formados por alambres de aluminio grado 1350-H19 cableados alrededor de un núcleo central de acero galvanizado (ACSR). Combina la alta conductividad del aluminio con la excelente resistencia mecánica del acero.

USO
Líneas aéreas de transmisión y distribución de energía eléctrica, especialmente donde se requieren grandes vanos (distancia entre postes).

NORMAS
IRAM 2187, ASTM B-232.`,
    image: '/images/ProductosNuevos/2-LINEAS AEREAS/2-DESNUDOS/3-CABLE ALUMINIO-ACERO/portada (eliminar logo de gemini).png',
    gallery: [
      '/images/ProductosNuevos/2-LINEAS AEREAS/2-DESNUDOS/3-CABLE ALUMINIO-ACERO/FICHA TECNICA/foto producto dentro de ficha tecnica.jpeg'
    ],
    pdf: '/images/ProductosNuevos/2-LINEAS AEREAS/2-DESNUDOS/3-CABLE ALUMINIO-ACERO/FICHA TECNICA/ficha tecnica a modificar.pdf',
    specs: ['ACSR', 'Reforzado', 'IRAM 2187'],
    technicalIntro: `CONSTRUCCIÓN
Conductor: Alambres de aluminio 1350-H19.
Núcleo: Alambres de acero galvanizado (clase A).
Formación: Cableado concéntrico.`,
    characteristics: [
      'CONSTRUCCIÓN',
      'Material: Aluminio 1350 y Acero Galvanizado.',
      'Alta resistencia a la rotura por tracción.',
      'Permite mayores distancias entre estructuras portantes.',
      'Excelente desempeño en condiciones climáticas adversas.'
    ],
    specsTables: [
      {
        title: "Tabla de Datos Técnicos",
        headers: ["Sección nominal Al/Ac (mm²)", "Formación Al/Aleación (N° x mm)", "Formación Alma de Acero (N° x mm)", "Diámetro exterior máximo (mm)", "Peso aproximado (kg/km)", "Resistencia máx. 20°C - Al Puro (Ohm/km)", "Resistencia máx. 20°C - Aleación Al (Ohm/km)", "Carga rotura mín. - Al Puro (daN)", "Carga rotura mín. - Aleación Al (daN)", "Corriente admisible máxima (A)"],
        rows: [
          ["16/2.5", "6 x 1,80", "1 x 1,80", "5,4", "62", "1,88", "2,16", "580", "760", "90"],
          ["25/4", "6 x 2,25", "1 x 2,25", "6,75", "97", "1,2", "1,38", "900", "1180", "125"],
          ["35/6", "6 x 2,70", "1 x 2,70", "8,1", "139", "0,835", "0,961", "1230", "1680", "145"],
          ["50/8", "6 x 3,20", "1 x 3,20", "9,6", "195", "0,595", "0,684", "1680", "2350", "170"],
          ["70/12", "26 x 1,85", "7 x 1,44", "11,7", "282", "0,413", "0,475", "2630", "3440", "280"],
          ["95/15", "26 x 2,15", "7 x 1,67", "13,6", "380", "0,306", "0,352", "3490", "4630", "340"],
          ["120/20", "26 x 2,44", "7 x 1,90", "15,5", "490", "0,237", "0,273", "4440", "5980", "400"],
          ["150/25", "26 x 2,70", "7 x 2,10", "17,1", "600", "0,194", "0,223", "5360", "7310", "460"],
          ["185/30", "26 x 3,00", "7 x 2,33", "18,9", "741", "0,157", "0,181", "6520", "8940", "520"],
          ["210/35", "26 x 3,20", "7 x 2,49", "20,3", "844", "0,138", "0,159", "7340", "10200", "580"],
          ["240/40", "26 x 3,45", "7 x 2,68", "21,8", "979", "0,119", "0,137", "8510", "11800", "625"],
          ["300/50", "26 x 3,86", "7 x 3,00", "24,4", "1227", "0,0949", "0,109", "10500", "14800", "710"]
        ],
        note: "(1) A temperatura ambiente de 35°C, expuesto al sol, viento 0.6 m/seg, temperatura en el conductor 80 °C y factor de carga 100 %. (2) Resistencia óhmica a 20 °C – corriente continua."
      }
    ],
    certifications: ['iram', 'seguridad']
  },"""

# Let's perform the replacement in services/data.ts
with open('services/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's locate where the aerial products start and end.
# We know the block starts with `    id: 'aerea-preensamblado-aluminio',`
# and ends right before `  {` of `subterraneo-lsoh-aluminio`

start_marker = "    id: 'aerea-preensamblado-aluminio',"
end_marker = "    id: 'subterraneo-lsoh-aluminio',"

# Let's find the brace starting the first product of aerea
start_pos = content.find(start_marker)
if start_pos == -1:
    print("Error: start marker not found!")
    exit(1)

# Find '{' before this start marker
open_brace_idx = content.rfind('{', 0, start_pos)

# Find the start of the next product
next_prod_pos = content.find(end_marker)
if next_prod_pos == -1:
    print("Error: end marker not found!")
    exit(1)

# Find '{' before next product
next_open_brace_idx = content.rfind('{', 0, next_prod_pos)

# Replace the text from open_brace_idx to next_open_brace_idx
replaced_content = content[:open_brace_idx] + new_block + "\n" + content[next_open_brace_idx:]

with open('services/data.ts', 'w', encoding='utf-8') as f:
    f.write(replaced_content)

print("SUCCESSFULLY UPDATED services/data.ts")
