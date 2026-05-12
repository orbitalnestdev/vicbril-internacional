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
    <div className="pt-44 pb-20 bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em]">
            <Link to="/" className="text-slate-400 hover:text-orange-600 transition-colors">Inicio</Link>
            <ChevronRight size={10} className="text-slate-300" />
            <Link to="/productos" className="text-slate-400 hover:text-orange-600 transition-colors">Catálogo</Link>
            <ChevronRight size={10} className="text-slate-300" />
            {categoryInfo && (
              <>
                <Link to={`/productos?cat=${categoryInfo.id}`} className="text-slate-400 hover:text-orange-600 transition-colors">
                  {product.category}
                </Link>
                <ChevronRight size={10} className="text-slate-300" />
              </>
            )}
            <span className="text-orange-600">{product.name}</span>
          </div>

          <Link
            to="/productos"
            className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-900 group"
          >
            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center mr-3 group-hover:bg-slate-900 group-hover:text-white transition-all">
              <ArrowLeft size={14} />
            </div>
            Volver al Catálogo
          </Link>
        </div>

        <div className="bg-white shadow-xl border border-gray-100 overflow-hidden">
          {/* Main Product Info */}
          <div className="p-6 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Column: Images */}
              <div className="space-y-8">
                <div className="bg-white border border-gray-100 overflow-hidden shadow-inner flex items-center justify-center p-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto max-h-[500px] object-contain"
                  />
                </div>

                {product.gallery && product.gallery.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                      <span className="w-8 h-px bg-slate-200"></span> Galería de Producto
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      {product.gallery.map((img, i) => (
                        <div key={i} className="aspect-square bg-white border border-gray-100 overflow-hidden cursor-zoom-in group shadow-sm">
                          <img
                            src={img}
                            alt={`${product.name} gallery ${i}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Certification Icons */}
                {product.certifications && product.certifications.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                      <span className="w-8 h-px bg-slate-200"></span> Certificaciones y Normas
                    </h4>
                    <div className="bg-slate-50 border border-slate-100 p-6 shadow-sm">
                      <CertificationIcons certifications={product.certifications} />
                    </div>
                  </div>
                )}

                {/* Marcas Disponibles */}
                {product.availableBrands && product.availableBrands.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-8 h-px bg-slate-200"></span> Marcas Disponibles
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.availableBrands.map((brand, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-xs font-semibold tracking-wide rounded-sm shadow-sm hover:border-orange-400 hover:text-orange-700 hover:bg-orange-50 transition-all duration-200"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Info */}
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                    {product.category}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-oswald font-bold text-slate-900 uppercase tracking-tight mb-8">
                    {product.name}
                  </h1>
                  <div className="w-20 h-1.5 bg-orange-600 mb-8"></div>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {product.detailedDescription || product.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-4 bg-slate-50 p-5 border border-slate-100 hover:bg-white hover:border-orange-200 transition-colors shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <Info size={16} className="text-orange-500" />
                      </div>
                      <span className="text-sm font-bold text-slate-700 uppercase tracking-wide">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Technical Details */}
                <div className="space-y-10 pt-10 border-t border-gray-100 mb-12">
                  {product.characteristics && (
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                        <span className="w-1.5 h-6 bg-orange-600"></span> Características Técnicas
                      </h4>
                      <ul className="grid grid-cols-1 gap-3 text-sm text-slate-600 pl-4">
                        {product.characteristics.map((char, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-orange-600 font-bold">•</span>
                            <span className="leading-relaxed">{char}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {product.applications && (
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                        <span className="w-1.5 h-6 bg-orange-600"></span> Aplicaciones
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed pl-4 border-l border-slate-100">
                        {product.applications}
                      </p>
                    </div>
                  )}

                  {product.installation && (
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                        <span className="w-1.5 h-6 bg-orange-600"></span> Instalación y Montaje
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed pl-4 border-l border-slate-100">
                        {product.installation}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-auto pt-8">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={handleQuoteClick}
                      className="flex-1 bg-orange-600 text-white font-bold py-5 px-8 flex items-center justify-center gap-4 hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 uppercase tracking-[0.2em] text-xs glass-shine group"
                    >
                      <MessageSquare size={18} className="group-hover:scale-110 transition-transform" />
                      Consultar Ahora
                    </button>
                    

                  </div>
                </div>
              </div>
            </div>

            {/* Technical Specifications Table */}
            {product.specsTable && product.specsTable.length > 0 && (
              <div className="mt-24">
                <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-slate-900">
                  <h4 className="text-2xl font-oswald font-bold text-slate-900 uppercase tracking-tight flex items-center gap-4">
                    <span className="w-3 h-8 bg-orange-600"></span> Especificaciones Técnicas
                  </h4>
                </div>
                <div className="border border-slate-200 bg-white overflow-hidden shadow-2xl">
                  <div className="overflow-x-auto lg:overflow-x-visible">
                    <table className="w-full text-[10px] md:text-[11px] text-left border-collapse table-auto lg:table-fixed">
                      <thead>
                        <tr className="bg-slate-900 border-b border-slate-800">
                          {Object.keys(product.specsTable[0]).map((header) => (
                            <th key={header} className="px-2 md:px-4 py-4 font-bold text-white uppercase tracking-wider whitespace-normal leading-tight break-words align-middle border-x border-slate-800 first:border-l-0 last:border-r-0">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {product.specsTable.map((row, i) => (
                          <tr key={i} className="hover:bg-orange-50/50 transition-colors group">
                            {Object.values(row).map((val, j) => (
                              <td key={j} className="px-2 md:px-4 py-4 text-slate-600 font-medium break-words group-hover:text-slate-900 transition-colors border-x border-slate-50 first:border-l-0 last:border-r-0">
                                {val}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="mt-4 text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                  (*) Intensidad de corriente admisible según norma correspondiente.
                </p>
              </div>
            )}


          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
