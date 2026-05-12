import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { MessageSquare, Info, ArrowLeft, Download, ChevronRight } from 'lucide-react';
import { products, categories } from '../services/data';
import { Product } from '../types';
import CertificationIcons from '../components/CertificationIcons';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = React.useState<Product | null>(null);

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

  const categoryInfo = categories.find(c => c.name === product.category);

  return (
    <div className="pt-32 md:pt-40 pb-12 bg-white min-h-screen font-sans">
      {/* Category Header Bar */}
      <div className="bg-orange-600 mb-8 py-3 shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
            <Link to="/" className="hover:text-orange-200 transition-colors">Inicio</Link>
            <ChevronRight size={10} className="opacity-50" />
            <Link to="/productos" className="hover:text-orange-200 transition-colors">Catálogo</Link>
            <ChevronRight size={10} className="opacity-50" />
            {categoryInfo && (
              <>
                <Link to={`/productos?cat=${categoryInfo.id}`} className="hover:text-orange-200 transition-colors">
                  {product.category}
                </Link>
                <ChevronRight size={10} className="opacity-50" />
              </>
            )}
            <span className="opacity-80 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Product Title Area */}
        <div className="mb-10 border-b border-slate-100 pb-8">
          <div className="text-center md:text-left">
            <span className="text-[11px] font-bold text-orange-600 uppercase tracking-[0.4em] mb-2 block">
              {product.subCategory || product.category}
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
            
            {product.gallery && product.gallery.length > 0 && (
              <div className="flex gap-4 mt-4 justify-center">
                {product.gallery.map((img, i) => (
                  <div key={i} className="w-24 h-24 bg-white border border-slate-100 overflow-hidden cursor-zoom-in group shadow-sm rounded-sm">
                    <img
                      src={img}
                      alt={`${product.name} gallery ${i}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            )}
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
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="md:sticky md:top-28 z-40 bg-slate-50 border-y border-slate-200 mb-12 shadow-sm">
          <div className="flex flex-col md:flex-row justify-center container mx-auto px-0 md:px-6">
            {['DESCRIPCIÓN', 'APLICACIONES', 'CARACTERÍSTICAS', 'INSTALACIÓN', 'CERTIFICACIONES', 'TABLA'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  let targetId = tab.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                  if (targetId === 'aplicaciones') targetId = 'usos';
                  if (targetId === 'caracteristicas') targetId = 'construccion';
                  if (targetId === 'certificaciones') targetId = 'normas';
                  if (targetId === 'tabla') targetId = 'formaciones';
                  
                  const element = document.getElementById(targetId);
                  if (element) {
                    const offset = window.innerWidth < 768 ? 100 : 180;
                    window.scrollTo({
                      top: element.offsetTop - offset,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="px-8 py-4 md:py-5 text-[12px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-orange-600 hover:bg-white transition-all border-b md:border-b-0 md:border-r border-slate-200 last:border-b-0 md:last:border-r-0 whitespace-nowrap text-left md:text-center"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Content sections */}
        <div className="space-y-24 pb-32 max-w-5xl">
          {/* Descripción */}
          <section id="descripcion" className="scroll-mt-40">
            <div className="border-l-2 border-slate-100 pl-8">
              <p className="text-slate-600 leading-relaxed text-xl font-medium">
                {product.detailedDescription || product.description}
              </p>
            </div>
          </section>

          {/* Aplicaciones */}
          {product.applications && (
            <section id="usos" className="scroll-mt-40">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-oswald font-bold text-slate-900 uppercase tracking-wider">Aplicaciones</h2>
              </div>
              <div className="border-l-2 border-slate-100 pl-8">
                <p className="text-slate-600 leading-relaxed text-base font-medium">
                  {product.applications}
                </p>
              </div>
            </section>
          )}

          {/* Características */}
          {product.characteristics && (
            <section id="construccion" className="scroll-mt-40">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-oswald font-bold text-slate-900 uppercase tracking-wider">Características</h2>
              </div>
              <div className="space-y-1">
                {product.characteristics.map((char, i) => (
                  <div key={i} className="flex items-start gap-4 py-1.5 border-b border-slate-50 group hover:border-orange-200 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-[9px] shrink-0"></span>
                    <span className="text-slate-600 text-base leading-tight font-medium">{char}</span>
                  </div>
                ))}
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

          <section id="normas" className="scroll-mt-40 -mt-16">
            <CertificationIcons certifications={product.certifications || []} />
          </section>

          {/* Instalación */}
          {product.installation && (
            <section id="instalacion" className="scroll-mt-40">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-oswald font-bold text-slate-900 uppercase tracking-wider">Instalación</h2>
              </div>
              <div className="border-l-2 border-slate-100 pl-8">
                <p className="text-slate-600 leading-relaxed text-base font-medium">
                  {product.installation}
                </p>
              </div>
            </section>
          )}

          {/* Technical Table */}
          {product.specsTable && product.specsTable.length > 0 && (
            <section id="formaciones" className="scroll-mt-40 pt-10 border-t border-slate-100">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-oswald font-bold text-slate-900 uppercase tracking-wider">Tabla de Especificaciones</h2>
              </div>
              <div className="bg-white border border-slate-200 overflow-hidden shadow-2xl rounded-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-[12px] md:text-[13px] text-left border-collapse table-auto">
                    <thead>
                      <tr className="bg-slate-900 text-white border-b border-slate-800">
                        {Object.keys(product.specsTable[0]).map((header) => (
                          <th key={header} className="px-4 py-5 font-bold uppercase tracking-wider border-x border-slate-800 first:border-l-0 last:border-r-0 text-center leading-tight">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {product.specsTable.map((row, i) => (
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
              <p className="mt-6 text-[9px] text-slate-400 uppercase tracking-[0.2em] font-bold border-l-2 border-orange-600 pl-4 leading-relaxed">
                (*) Los valores expresados en esta tabla son aproximados y están sujetos a variaciones de fabricación según normas vigentes.
              </p>
            </section>
          )}

          {/* Marcas Disponibles */}
          <section className="pt-10 border-t border-slate-100">
            <div className="mb-6">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pb-2">Marcas Disponibles</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.availableBrands?.map((brand, i) => (
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
