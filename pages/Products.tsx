import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { categories, products } from '../services/data';
import { Filter, Download, Search, ChevronRight, Folder, ArrowLeft } from 'lucide-react';
import QuoteModal from '../components/UI/QuoteModal';
import { Product } from '../types';

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activePath, setActivePath] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  useEffect(() => {
    const pathParam = searchParams.get('path');
    const catParam = searchParams.get('cat');
    if (pathParam) {
      setActivePath(pathParam.split('||'));
    } else if (catParam) {
      const matchedCat = categories.find(c => c.id === catParam);
      if (matchedCat) {
        setActivePath([matchedCat.name]);
      } else {
        setActivePath([]);
      }
    } else {
      setActivePath([]);
    }
  }, [searchParams]);

  const handlePathChange = (newPath: string[]) => {
    setActivePath(newPath);
    if (newPath.length === 0) {
      setSearchParams({});
    } else {
      setSearchParams({ path: newPath.join('||') });
    }
  };

  const filteredProducts = activePath.length === 0
    ? products
    : products.filter(p => {
        return activePath.every((segment, index) => p.categoryPath[index] === segment);
      });

  const currentDepth = activePath.length;
  const rawNextLevelFolders = Array.from(new Set(
    filteredProducts
      .filter(p => p.categoryPath.length > currentDepth)
      .map(p => p.categoryPath[currentDepth])
  ));
  
  // Only keep folders (subcategories) that contain more than 1 product.
  // If a folder contains only 1 product, we bypass the folder and show the product card directly.
  const nextLevelFolders = rawNextLevelFolders.filter(folderName => {
    const productsInFolder = filteredProducts.filter(p => p.categoryPath[currentDepth] === folderName);
    return productsInFolder.length > 1;
  });
  
  const visibleProducts = filteredProducts.filter(p => {
    if (p.categoryPath.length > currentDepth) {
      const nextSegment = p.categoryPath[currentDepth];
      return !nextLevelFolders.includes(nextSegment);
    }
    return true;
  });

  const handleQuoteClick = (prodName: string) => {
    const phoneNumber = "5491131240403";
    const message = encodeURIComponent(`Hola Vicbril, quisiera consultar por el producto: ${prodName}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleProductClick = (product: Product) => {
    navigate(`/productos/${product.id}`);
  };

  const rootCategoryName = activePath.length > 0 ? activePath[0] : null;
  const currentCategoryInfo = categories.find(c => c.name === rootCategoryName);
  const bannerImage = currentCategoryInfo
    ? currentCategoryInfo.banner
    : '/images/vicbril-hero-1.jpg';

  const formatCategoryName = (name: string) => {
    if (!name) return '';
    return name.replace(/^\d+[-_]/, '');
  };

  const pageTitle = currentCategoryInfo ? formatCategoryName(currentCategoryInfo.name).toUpperCase() : 'CONDUCTORES ELÉCTRICOS';
  const pageSubtitle = 'Nuestro Catálogo';

  return (
    <div className="pt-44 pb-20 bg-gray-50 min-h-screen font-sans">
      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={selectedProduct}
      />

      {/* Dynamic Header Banner */}
      <div className="relative bg-slate-900 h-64 md:h-80 overflow-hidden mb-10 group">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerImage}
            alt={pageTitle}
            className="w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/70 to-transparent"></div>
          {/* Noise Texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.3em] mb-4 block border-l-2 border-orange-500 pl-4 animate-in fade-in slide-in-from-left-4 duration-500">
              {pageSubtitle}
            </span>
            <h1 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {pageTitle}
            </h1>

            {/* Header Actions */}
            <div className="flex flex-wrap gap-4">
              {activePath.length > 0 && (
                <button
                  onClick={() => handlePathChange([])}
                  className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white transition px-4 py-3"
                >
                  <ChevronRight className="rotate-180 mr-2" size={14} /> Ver Todo
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Sidebar Filter */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="sticky top-32">
              <div className="bg-white border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center mb-6 pb-4 border-b border-gray-100">
                  <Filter size={16} className="mr-2 text-slate-400" />
                  <h3 className="font-oswald font-bold text-slate-900 tracking-wide uppercase text-sm">Filtrar Por</h3>
                </div>

                <div className="space-y-1">
                  <button
                    onClick={() => handlePathChange([])}
                    className={`w-full text-left px-4 py-3 text-sm flex justify-between items-center transition-colors border-l-2 ${activePath.length === 0 ? 'bg-slate-50 border-orange-600 text-slate-900 font-bold' : 'border-transparent text-slate-500 hover:text-slate-900'}`}
                  >
                    Todos
                    {activePath.length === 0 && <ChevronRight size={14} />}
                  </button>
                  {categories.map(cat => {
                    const isExpanded = activePath.length > 0 && activePath[0] === cat.name;
                    return (
                      <div key={cat.id}>
                        <button
                          onClick={() => {
                            if (activePath.length > 0 && activePath[0] === cat.name) {
                              handlePathChange([]);
                            } else {
                              handlePathChange([cat.name]);
                            }
                          }}
                          className={`w-full text-left px-4 py-3 text-sm flex justify-between items-center transition-colors border-l-2 ${isExpanded ? 'bg-slate-50 border-orange-600 text-slate-900 font-bold' : 'border-transparent text-slate-500 hover:text-slate-900'}`}
                        >
                          {formatCategoryName(cat.name)}
                          {isExpanded && <ChevronRight size={14} className="rotate-90" />}
                        </button>
                        
                        {/* Nested Subcategories in Sidebar */}
                        {isExpanded && (
                          <div className="bg-slate-50/50 pb-2 animate-in slide-in-from-top-2 duration-300">
                            {Array.from(new Set(products.filter(p => p.categoryPath && p.categoryPath[0] === cat.name && p.categoryPath.length > 1).map(p => p.categoryPath[1]))).map((sub, j) => {
                              const isActiveSub = activePath.length > 1 && activePath[1] === sub;
                              return (
                                <button
                                  key={j}
                                  onClick={() => {
                                    if (isActiveSub) {
                                      handlePathChange([cat.name]);
                                    } else {
                                      handlePathChange([cat.name, sub]);
                                    }
                                  }}
                                  className={`w-full text-left pl-8 pr-4 py-2 text-[11px] font-bold uppercase tracking-widest transition-colors flex items-center ${isActiveSub ? 'text-orange-600' : 'text-slate-400 hover:text-slate-700'}`}
                                >
                                  <div className={`w-1.5 h-1.5 rounded-full mr-2 ${isActiveSub ? 'bg-orange-600' : 'bg-slate-300'}`}></div>
                                  {formatCategoryName(sub)}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Assistance Box */}
              <div className="mt-8 bg-slate-900 text-white p-6 text-center">
                <h4 className="font-oswald font-bold text-lg mb-2">¿AYUDA TÉCNICA?</h4>
                <p className="text-slate-400 text-xs mb-6 leading-relaxed">Nuestros ingenieros pueden ayudarte a especificar el cable correcto para tu proyecto.</p>
                <a href="/contacto" className="inline-block w-full bg-orange-600 py-3 text-xs font-bold uppercase tracking-widest hover:bg-orange-700 transition">Contactar</a>
              </div>
            </div>
          </aside>

          {/* Product Grid / Subcategory Folders */}
          <div className="flex-1">
            {/* Breadcrumbs / Back button */}
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                <Link to="/" className="hover:text-orange-600 transition-colors">Inicio</Link>
                <ChevronRight size={10} className="text-slate-300 flex-shrink-0" />
                {activePath.length === 0 ? (
                  <span className="text-orange-600">Catálogo</span>
                ) : (
                  <>
                    <Link to="/productos" className="hover:text-orange-600 transition-colors">Catálogo</Link>
                    {activePath.map((segment, index) => (
                      <React.Fragment key={index}>
                        <ChevronRight size={10} className="text-slate-300 flex-shrink-0" />
                        {index === activePath.length - 1 ? (
                          <span className="text-orange-600 break-words">{formatCategoryName(segment)}</span>
                        ) : (
                          <button 
                            onClick={() => handlePathChange(activePath.slice(0, index + 1))}
                            className="hover:text-orange-600 transition-colors truncate max-w-[150px]"
                            title={formatCategoryName(segment)}
                          >
                            {formatCategoryName(segment)}
                          </button>
                        )}
                      </React.Fragment>
                    ))}
                  </>
                )}
              </div>

              {activePath.length > 0 && (
                <button
                  onClick={() => handlePathChange(activePath.slice(0, -1))}
                  className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-orange-600 transition group flex-shrink-0"
                >
                  <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
                  Volver Atrás
                </button>
              )}
            </div>

            {/* Folders */}
            {nextLevelFolders.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {nextLevelFolders.map((sub, i) => {
                  const catInfo = categories.find(c => c.name === sub);
                  const categoryImage = catInfo?.image && !catInfo.image.includes('vicbril-hero-1.jpg') ? catInfo.image : null;

                  const productsInThisFolder = filteredProducts.filter(p => p.categoryPath[currentDepth] === sub);
                  const firstProductWithImage = productsInThisFolder.find(p => p.image && !p.image.includes('vicbril-hero-1.jpg'));
                  
                  // Dynamically resolve the subcategory's own cover image (PORTADA.jpeg/png) from its parent path
                  let parentCoverImage = null;
                  const referenceImage = firstProductWithImage?.image || productsInThisFolder[0]?.image;
                  if (referenceImage) {
                    const parts = referenceImage.split('/');
                    if (parts.length >= 3) {
                      const parentParts = parts.slice(0, -2);
                      const parentPath = parentParts.join('/');
                      
                      if (referenceImage.includes('1-CABLE UNIPOLAR')) {
                        parentCoverImage = `${parentPath}/PORTADA.png`;
                      } else if (referenceImage.includes('2-CABLE BIPOLAR')) {
                        parentCoverImage = `${parentPath}/portada.jpeg`;
                      } else if (referenceImage.includes('3-CABLE TIPO TALLER')) {
                        parentCoverImage = `${parentPath}/PORTADA.jpeg`;
                      } else if (referenceImage.includes('1-ENVAINADOS')) {
                        parentCoverImage = `${parentPath}/PORTADA (ELIMINAR SIMBOLO GEMINI).jpeg`;
                      } else if (referenceImage.includes('2-DESNUDOS')) {
                        parentCoverImage = `${parentPath}/PORTADA (ELIMINAR LOGO GEMINI).jpeg`;
                      } else {
                        parentCoverImage = `${parentPath}/PORTADA.jpeg`;
                      }
                    }
                  }

                  const folderImage = categoryImage || parentCoverImage || firstProductWithImage?.image || productsInThisFolder[0]?.image || '/images/vicbril-hero-1.jpg';

                  return (
                    <div
                      key={i}
                      onClick={() => handlePathChange([...activePath, sub])}
                      className="group cursor-pointer"
                    >
                      <div className="bg-white border border-gray-200 overflow-hidden shadow-sm group-hover:border-orange-500 transition-all duration-500">
                        <div className="aspect-[4/3] overflow-hidden relative">
                          <img
                            src={folderImage}
                            alt={sub}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors"></div>
                          <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 shadow-lg">
                            <Folder size={18} />
                          </div>
                        </div>
                        <div className="p-6 text-center">
                          <h3 className="font-oswald font-bold text-lg text-slate-900 uppercase tracking-tight mb-2 group-hover:text-orange-600 transition-colors">{formatCategoryName(sub)}</h3>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] flex items-center justify-center">
                            {productsInThisFolder.length} {productsInThisFolder.length === 1 ? 'Producto' : 'Productos'}
                            <ChevronRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}

            {/* Products */}
            {visibleProducts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleProducts.map(product => (
                  <div key={product.id} className="bg-white border border-gray-200 hover:border-orange-300 transition-colors duration-300 group flex flex-col h-full overflow-hidden">
                    <div
                      className="w-full aspect-[4/3] relative overflow-hidden bg-gray-100 cursor-pointer"
                      onClick={() => handleProductClick(product)}
                    >
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-4 left-4">
                        <span className="text-[10px] font-bold text-slate-900 bg-white/90 backdrop-blur uppercase tracking-widest px-3 py-1 shadow-sm">{formatCategoryName(product.categoryPath && product.categoryPath[0])}</span>
                      </div>
                      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white text-slate-900 text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-3">Ver Detalles</span>
                      </div>
                    </div>

                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-xl font-oswald font-bold text-slate-900 mb-4 leading-tight">{product.name}</h3>
                      <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-1">{product.description}</p>

                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {product.specs && product.specs.map((spec, i) => (
                            <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 font-medium">{spec}</span>
                          ))}
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            onClick={() => handleProductClick(product)}
                            className="bg-slate-100 text-slate-900 text-[10px] font-bold py-4 hover:bg-slate-200 transition uppercase tracking-widest"
                          >
                            Ver Detalles
                          </button>
                          <button
                            onClick={() => handleQuoteClick(product.name)}
                            className="bg-slate-900 text-white text-[10px] font-bold py-4 hover:bg-orange-600 transition uppercase tracking-widest"
                          >
                            Consultar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {nextLevelFolders.length === 0 && visibleProducts.length === 0 && (
              <div className="text-center py-20 bg-white border border-gray-200">
                <Folder size={48} className="mx-auto text-slate-200 mb-4" />
                <h3 className="text-xl font-oswald font-bold text-slate-900 mb-2">No hay elementos aquí</h3>
                <p className="text-slate-500">Intenta navegar hacia otra categoría.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;