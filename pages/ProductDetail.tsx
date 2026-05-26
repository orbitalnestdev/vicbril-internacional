import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { MessageSquare, Info, ArrowLeft, Download, ChevronRight } from 'lucide-react';
import { products, categories } from '../services/data';
import { Product } from '../types';
import CertificationIcons from '../components/CertificationIcons';

const FormattedText: React.FC<{ 
  text: string, 
  defaultHeader?: string,
  ignoredHeaders?: string[],
  contentClassName?: string,
  wrapperClassName?: string
}> = ({ 
  text, 
  defaultHeader,
  ignoredHeaders = [],
  contentClassName = "text-slate-600 text-sm md:text-base leading-relaxed font-medium",
  wrapperClassName = "bg-slate-50 border-l-4 border-[#004b61] p-8 rounded-sm shadow-sm"
}) => {
  if (!text) return null;
  const lines = text.split('\n');
  
  const sections: { title: string | null, content: string[] }[] = [];
  
  let currentTitle: string | null = defaultHeader || null;
  let currentContent: string[] = [];

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (!trimmed) return;
    
    // Detect headers: all caps, reasonable length, no colons or dots at the end
    const isHeader = trimmed === trimmed.toUpperCase() && trimmed.length > 2 && trimmed.length < 50 && !trimmed.endsWith(':') && !trimmed.endsWith('.') && !trimmed.startsWith('•') && !trimmed.startsWith('-');
    
    if (isHeader) {
      if (ignoredHeaders.includes(trimmed)) {
        return; // skip this line entirely
      }

      if (i === 0) {
        currentTitle = trimmed;
      } else {
        if (currentContent.length > 0 || currentTitle) {
          sections.push({ title: currentTitle, content: currentContent });
        }
        currentTitle = trimmed;
        currentContent = [];
      }
    } else {
      currentContent.push(trimmed);
    }
  });

  if (currentContent.length > 0 || currentTitle) {
    sections.push({ title: currentTitle, content: currentContent });
  }

  return (
    <div className="space-y-24">
      {sections.map((sec, idx) => (
        <div key={idx}>
          {sec.title && (
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-oswald font-bold text-[#004b61] uppercase tracking-wider">{sec.title}</h2>
            </div>
          )}
          <div className={wrapperClassName}>
            <div className="space-y-4">
              {sec.content.map((p, i) => (
                <p key={i} className={contentClassName}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const formatCategoryName = (name: string) => {
  if (!name) return '';
  return name.replace(/^\d+[-_ ]*/, '');
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = React.useState<Product | null>(null);
  const [activeTab, setActiveTab] = React.useState('DESCRIPCIÓN');

  useEffect(() => {
    const foundProduct = products.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      window.scrollTo(0, 0);
    } else {
      navigate('/productos');
    }
  }, [id, navigate]);

  if (!product) return null;

  const handleQuoteClick = () => {
    const phoneNumber = "5491131240403";
    const message = encodeURIComponent(`Hola Vicbril, quisiera consultar por el producto: ${product.name}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="pt-32 md:pt-40 pb-12 bg-white min-h-screen font-sans">
      {/* Category Header Bar */}
      <div className="bg-orange-600 mb-8 py-3 shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white flex-wrap">
            <Link to="/" className="hover:text-orange-200 transition-colors">Inicio</Link>
            <ChevronRight size={10} className="opacity-50" />
            <Link to="/productos" className="hover:text-orange-200 transition-colors">Catálogo</Link>
            <ChevronRight size={10} className="opacity-50" />
            {product.categoryPath && product.categoryPath.map((segment, idx) => (
              <React.Fragment key={idx}>
                <Link 
                  to={`/productos?path=${encodeURIComponent(product.categoryPath.slice(0, idx + 1).join('||'))}`} 
                  className="hover:text-orange-200 transition-colors"
                >
                  {formatCategoryName(segment)}
                </Link>
                <ChevronRight size={10} className="opacity-50" />
              </React.Fragment>
            ))}
            <span className="opacity-80 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Product Title Area */}
        <div className="mb-10 border-b border-slate-100 pb-8">
          <div className="text-center md:text-left">
            <span className="text-[11px] font-bold text-orange-600 uppercase tracking-[0.4em] mb-2 block">
              {product.categoryPath && product.categoryPath.slice(-1)[0]}
            </span>
            <h1 className="text-5xl md:text-7xl font-oswald font-bold text-slate-900 uppercase tracking-tight">
              {product.name}
            </h1>
          </div>
        </div>

        {/* Hero Section: Image & Brief */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-center">
          <div className="lg:col-span-7">
            <div className="bg-white flex items-center justify-center p-2 border border-slate-100 shadow-sm rounded-sm overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-full h-auto max-h-[750px] object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 p-8 border-l-4 border-orange-600 shadow-sm">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-3">Resumen del Producto</h3>
              <p className="text-slate-700 leading-relaxed text-lg font-medium italic">
                "{product.description}"
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <button
                onClick={handleQuoteClick}
                className="w-full bg-slate-900 text-white font-bold py-5 px-8 flex items-center justify-center gap-4 hover:bg-orange-600 transition-all shadow-xl shadow-slate-900/10 uppercase tracking-[0.2em] text-xs group"
              >
                <MessageSquare size={18} className="group-hover:scale-110 transition-transform" />
                Consultar por WhatsApp
              </button>
              
              {product.pdf && (
                <a
                  href={product.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-slate-900 border-2 border-slate-900 font-bold py-4 px-8 flex items-center justify-center gap-4 hover:bg-slate-50 transition-all uppercase tracking-[0.2em] text-xs group"
                >
                  <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                  Descargar PDF
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="md:sticky md:top-28 z-40 bg-slate-50 border-y border-slate-200 mb-12 shadow-sm overflow-x-auto no-scrollbar">
          <div className="flex flex-col md:flex-row justify-center container mx-auto px-0 md:px-6 min-w-max md:min-w-0">
            {[
              { id: 'DESCRIPCIÓN', label: 'DESCRIPCIÓN', target: 'descripcion', hasContent: !!product.detailedDescription },
              { id: 'APLICACIONES', label: 'APLICACIONES', target: 'usos', hasContent: !!product.applications },
              { id: 'CARACTERÍSTICAS', label: 'CARACTERÍSTICAS', target: 'caracteristicas', hasContent: !!product.characteristics && product.characteristics.length > 0 },
              { id: 'INSTALACIÓN', label: 'INSTALACIÓN', target: 'instalacion', hasContent: !!product.installation },
              { id: 'CERTIFICACIONES', label: 'CERTIFICACIONES', target: 'certificaciones', hasContent: !!product.certifications && product.certifications.length > 0 },
              { id: 'TABLA', label: 'TABLA', target: 'formaciones', hasContent: (!!product.specsTable && product.specsTable.length > 0) || (!!product.specsTables && product.specsTables.length > 0) },
            ].filter(tab => tab.hasContent).map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  const element = document.getElementById(tab.target);
                  if (element) {
                    const offset = window.innerWidth < 768 ? 100 : 180;
                    window.scrollTo({
                      top: element.offsetTop - offset,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`px-8 py-4 md:py-5 text-[12px] font-bold uppercase tracking-[0.2em] transition-all border-b md:border-b-0 md:border-r border-slate-200 last:border-b-0 md:last:border-r-0 whitespace-nowrap text-left md:text-center ${
                  activeTab === tab.id 
                    ? 'bg-white text-orange-600' 
                    : 'text-slate-400 hover:text-orange-600 hover:bg-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Content sections */}
        <div className="space-y-24 pb-32 max-w-5xl">
          {/* Descripción */}
          <section id="descripcion" className="scroll-mt-40">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-oswald font-bold text-[#004b61] uppercase tracking-wider">DESCRIPCIÓN</h2>
            </div>
            <FormattedText 
              text={product.detailedDescription || product.description} 
              ignoredHeaders={['DESCRIPCIÓN']}
              contentClassName="text-slate-600 leading-relaxed text-lg md:text-xl font-medium"
              wrapperClassName="border-l-2 border-slate-100 pl-8"
            />
          </section>

          {/* Aplicaciones */}
          {product.applications && (
            <section id="usos" className="scroll-mt-40">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-oswald font-bold text-[#004b61] uppercase tracking-wider">APLICACIONES</h2>
              </div>
              <FormattedText 
                text={product.applications} 
                ignoredHeaders={['APLICACIONES', 'USO']}
              />
            </section>
          )}

          {/* Características */}
          {product.characteristics && product.characteristics.length > 0 && (
            <section id="caracteristicas" className="scroll-mt-40">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-oswald font-bold text-[#004b61] uppercase tracking-wider">CARACTERÍSTICAS</h2>
              </div>
              <div className="bg-slate-50 border-l-4 border-[#004b61] p-8 rounded-sm shadow-sm">
                <div className="space-y-2">
                  {product.characteristics.filter(char => char !== 'CONSTRUCCIÓN' && char !== 'CARACTERÍSTICAS').map((char, i) => (
                    <div key={i} className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                      {char}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Certificaciones (Puestas debajo de Características según el print) */}
          {product.colors && product.colors.length > 0 && (
            <section id="colores" className="scroll-mt-40 -mt-16">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-oswald font-bold text-slate-900 uppercase tracking-wider">Color</h2>
              </div>
              <div className="flex flex-col gap-8 bg-slate-50/50 p-8 rounded-sm border border-slate-100">
                {product.colors.map((colorSet, idx) => (
                  <div key={idx} className="flex flex-col md:grid md:grid-cols-[120px_1fr] items-start md:items-center gap-4 md:gap-12 pb-6 md:pb-0 border-b border-slate-100 last:border-0 md:border-0">
                    <span className="text-slate-900 font-bold uppercase tracking-[0.2em] text-sm border-l-4 border-orange-600 pl-4">
                      {colorSet.label}
                    </span>
                    <div className="flex flex-wrap gap-4 md:gap-8 pl-4 md:pl-0">
                      {colorSet.codes.map((code, cIdx) => (
                        <div key={cIdx} className="flex flex-col items-center gap-2 md:gap-3">
                          <div 
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-md ring-1 ring-slate-200"
                            style={{ background: code }}
                          />
                          <span className="text-[9px] md:text-[10px] text-slate-500 font-bold uppercase tracking-tighter whitespace-nowrap">
                            {colorSet.values[cIdx]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* NORMAS / Certificaciones */}
          {product.certifications && product.certifications.length > 0 && (
            <section id="certificaciones" className="scroll-mt-40 pt-10 border-t border-slate-100">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-oswald font-bold text-[#004b61] uppercase tracking-wider">NORMAS</h2>
              </div>
              <CertificationIcons certifications={product.certifications} />
            </section>
          )}

          {/* Instalación */}
          {product.installation && (
            <section id="instalacion" className="scroll-mt-40">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-oswald font-bold text-[#004b61] uppercase tracking-wider">INSTALACIÓN</h2>
              </div>
              <FormattedText 
                text={product.installation} 
                ignoredHeaders={['INSTALACIÓN']}
              />
            </section>
          )}

          {/* Technical Table */}
          {(product.specsTables || (product.specsTable && product.specsTable.length > 0)) && (
            <section id="formaciones" className="scroll-mt-40 pt-10 border-t border-slate-100">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-oswald font-bold text-[#004b61] uppercase tracking-wider">ESPECIFICACIONES TÉCNICAS</h2>
              </div>

              {product.technicalIntro && (
                <div className="mb-10">
                  <FormattedText text={product.technicalIntro} ignoredHeaders={['CONSTRUCCIÓN']} />
                </div>
              )}
              
              <div className="space-y-12">
                {product.specsTables ? (
                  product.specsTables.map((table, tIdx) => (
                    <div key={tIdx} className="space-y-4">
                      {table.title && (
                        <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide border-l-4 border-orange-600 pl-4">
                          {table.title}
                        </h3>
                      )}
                      <div className="bg-white border border-slate-200 overflow-hidden shadow-xl rounded-sm">
                        <div className="overflow-x-auto">
                          <table className="w-full text-[11px] md:text-[12px] text-left border-collapse table-auto">
                            {!table.isHorizontal && (
                              <thead>
                                <tr className="bg-slate-900 text-white border-b border-slate-800">
                                  {table.headers.map((header, hIdx) => (
                                    <th key={hIdx} className="px-3 py-4 font-bold uppercase tracking-wider border-x border-slate-800 first:border-l-0 last:border-r-0 text-center leading-tight">
                                      {header}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                            )}
                            <tbody className="divide-y divide-slate-100">
                              {table.rows.map((row, i) => {
                                if ('isSubtitle' in row && row.isSubtitle) {
                                  return (
                                    <tr key={i} className="bg-slate-100 border-y border-slate-200">
                                      <td colSpan={table.isHorizontal ? table.rows[0].length : table.headers.length} className="px-4 py-3 text-slate-800 font-extrabold italic uppercase tracking-wider text-xs">
                                        {row.content}
                                      </td>
                                    </tr>
                                  );
                                }
                                
                                const dataRow = row as string[];
                                return (
                                  <tr key={i} className={`hover:bg-slate-50 transition-colors group ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}>
                                    {dataRow.map((val, j) => {
                                      const isRowLabel = table.isHorizontal && j === 0;
                                      return (
                                        <td 
                                          key={j} 
                                          className={`px-3 py-4 text-center border-x border-slate-50 first:border-l-0 last:border-r-0 font-bold ${
                                            isRowLabel 
                                              ? 'bg-slate-900 text-white uppercase text-[10px] tracking-wider' 
                                              : 'text-slate-600'
                                          }`}
                                        >
                                          {val}
                                        </td>
                                      );
                                    })}
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {table.note && (
                        <p className="text-[10px] text-slate-400 font-medium italic">
                          {table.note}
                        </p>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="bg-white border border-slate-200 overflow-hidden shadow-2xl rounded-sm">
                    <div className="overflow-x-auto">
                      <table className="w-full text-[12px] md:text-[13px] text-left border-collapse table-auto">
                        <thead>
                          <tr className="bg-slate-900 text-white border-b border-slate-800">
                            {Object.keys(product.specsTable![0]).map((header) => (
                              <th key={header} className="px-4 py-5 font-bold uppercase tracking-wider border-x border-slate-800 first:border-l-0 last:border-r-0 text-center leading-tight">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {product.specsTable!.map((row, i) => (
                            <tr key={i} className={`hover:bg-slate-50 transition-colors group ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}>
                              {Object.values(row).map((val, j) => (
                                <td key={j} className="px-4 py-5 text-slate-600 font-bold text-center border-x border-slate-50 first:border-l-0 last:border-r-0">
                                  {val}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
              
              {!product.specsTables && (
                <p className="mt-6 text-[9px] text-slate-400 uppercase tracking-[0.2em] font-bold border-l-2 border-orange-600 pl-4 leading-relaxed">
                  (*) Los valores expresados en esta tabla son aproximados y están sujetos a variaciones de fabricación según normas vigentes.
                </p>
              )}
            </section>
          )}

          {/* Marcas Disponibles */}
          {product.availableBrands && product.availableBrands.length > 0 && (
            <section className="pt-10 border-t border-slate-100">
              <div className="mb-6">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pb-2">Marcas Disponibles</h4>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {product.availableBrands.map((brand, i) => (
                  <span
                    key={i}
                    className="px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 text-[11px] font-bold rounded-sm shadow-sm hover:border-orange-500 hover:bg-orange-50 transition-all flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
                    {brand}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
