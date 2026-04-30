import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { categories, products } from '../services/data';
import { Filter, Download, Search, ChevronRight, Folder, ArrowLeft } from 'lucide-react';
import QuoteModal from '../components/UI/QuoteModal';
import ProductDetailModal from '../components/UI/ProductDetailModal';
import { Product } from '../types';

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeSubCategory, setActiveSubCategory] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

  useEffect(() => {
    const cat = searchParams.get('cat');
    const sub = searchParams.get('sub');
    if (cat) {
      setActiveCategory(cat);
      if (sub) {
        setActiveSubCategory(sub);
      } else {
        setActiveSubCategory('all');
      }
    } else {
      setActiveCategory('all');
      setActiveSubCategory('all');
    }
  }, [searchParams]);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setActiveSubCategory('all');
    if (catId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ cat: catId });
    }
  };

  const handleSubCategoryChange = (subName: string) => {
    setActiveSubCategory(subName);
    if (subName === 'all') {
      setSearchParams({ cat: activeCategory });
    } else {
      setSearchParams({ cat: activeCategory, sub: subName });
    }
  };

  const allProductsForCategory = activeCategory === 'all'
    ? products
    : products.filter(p => {
      const catName = categories.find(c => c.id === activeCategory)?.name;
      return p.category === catName;
    });

  const subCategories = Array.from(new Set(allProductsForCategory.map(p => p.subCategory).filter(Boolean))) as string[];

  const filteredProducts = activeSubCategory === 'all'
    ? allProductsForCategory
    : allProductsForCategory.filter(p => p.subCategory === activeSubCategory);

  const handleQuoteClick = (prodName: string) => {
    const phoneNumber = "5491131240403";
    const message = encodeURIComponent(`Hola Vicbril, quisiera consultar por el producto: ${prodName}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleProductClick = (product: Product) => {
    setCurrentProduct(product);
    setIsDetailOpen(true);
  };

  // Determine Banner Content
  const currentCategoryInfo = categories.find(c => c.id === activeCategory);
  const bannerImage = currentCategoryInfo
    ? currentCategoryInfo.banner
    : '/images/vicbril-hero-1.jpg'; // Default Industrial Warehouse

  const pageTitle = currentCategoryInfo ? currentCategoryInfo.name.toUpperCase() : 'CONDUCTORES ELÉCTRICOS';
  const pageSubtitle = 'Nuestro Catálogo';

  return (
    <div className="pt-20 pb-20 bg-gray-50 min-h-screen font-sans">
      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={selectedProduct}
      />

      <ProductDetailModal
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        product={currentProduct}
        onQuote={handleQuoteClick}
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
              <button className="flex items-center text-xs font-bold uppercase tracking-widest text-white bg-white/10 hover:bg-orange-600 transition border border-white/20 px-6 py-3 backdrop-blur-sm">
                <Download size={14} className="mr-2" /> Ficha Técnica PDF
              </button>
              {activeCategory !== 'all' && (
                <button
                  onClick={() => handleCategoryChange('all')}
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

          {/* Sidebar Filter - Technical Look */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="sticky top-32">
              <div className="bg-white border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center mb-6 pb-4 border-b border-gray-100">
                  <Filter size={16} className="mr-2 text-slate-400" />
                  <h3 className="font-oswald font-bold text-slate-900 tracking-wide uppercase text-sm">Filtrar Por</h3>
                </div>

                <div className="space-y-1">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`w-full text-left px-4 py-3 text-sm flex justify-between items-center transition-colors border-l-2 ${activeCategory === 'all' ? 'bg-slate-50 border-orange-600 text-slate-900 font-bold' : 'border-transparent text-slate-500 hover:text-slate-900'}`}
                  >
                    Todos
                    {activeCategory === 'all' && <ChevronRight size={14} />}
                  </button>
                  {categories.map(cat => (
                    <div key={cat.id}>
                      <button
                        onClick={() => handleCategoryChange(cat.id)}
                        className={`w-full text-left px-4 py-3 text-sm flex justify-between items-center transition-colors border-l-2 ${activeCategory === cat.id ? 'bg-slate-50 border-orange-600 text-slate-900 font-bold' : 'border-transparent text-slate-500 hover:text-slate-900'}`}
                      >
                        {cat.name}
                        {activeCategory === cat.id && <ChevronRight size={14} />}
                      </button>

                      {/* Nested Subcategories in Sidebar */}
                      {activeCategory === cat.id && subCategories.length > 0 && (
                        <div className="bg-slate-50/50 pb-2 animate-in slide-in-from-top-2 duration-300">
                          {subCategories.map((sub, j) => (
                            <button
                              key={j}
                              onClick={() => handleSubCategoryChange(sub)}
                              className={`w-full text-left pl-8 pr-4 py-2 text-[11px] font-bold uppercase tracking-widest transition-colors flex items-center ${activeSubCategory === sub ? 'text-orange-600' : 'text-slate-400 hover:text-slate-700'}`}
                            >
                              <div className={`w-1.5 h-1.5 rounded-full mr-2 ${activeSubCategory === sub ? 'bg-orange-600' : 'bg-slate-300'}`}></div>
                              {sub}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
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
            {activeCategory !== 'all' && (
              <div className="mb-8 flex items-center gap-4">
                <button
                  onClick={() => activeSubCategory !== 'all' ? handleSubCategoryChange('all') : handleCategoryChange('all')}
                  className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition"
                >
                  <ArrowLeft size={14} className="mr-2" /> {activeSubCategory !== 'all' ? 'Volver a Subcategorías' : 'Ver Todas las Líneas'}
                </button>
                <div className="h-4 w-px bg-gray-300"></div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  <span>Catálogo</span>
                  <ChevronRight size={10} />
                  <span className="text-slate-900">{currentCategoryInfo?.name}</span>
                  {activeSubCategory !== 'all' && (
                    <>
                      <ChevronRight size={10} />
                      <span className="text-orange-600">{activeSubCategory}</span>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* If Category has subcategories and none is selected, show Subcategory folders with IMAGES */}
            {activeCategory !== 'all' && subCategories.length > 0 && activeSubCategory === 'all' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {subCategories.map((sub, i) => {
                  const subCategoryImages: Record<string, string> = {
                    '1-CABLE UNIPOLAR': '/images/PRODUCTOS/1-CABLE UNIPOLAR/PORTADA.png',
                    '2-CABLE BIPOLAR': '/images/PRODUCTOS/2-CABLE BIPOLAR/portada.jpeg',
                    '3-CABLE TIPO TALLER': '/images/PRODUCTOS/3-CABLE TIPO TALLER/PORTADA.jpeg'
                  };

                  const folderImage = subCategoryImages[sub] || allProductsForCategory.find(p => p.subCategory === sub)?.image;

                  return (
                    <div
                      key={i}
                      onClick={() => handleSubCategoryChange(sub)}
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
                          <h3 className="font-oswald font-bold text-lg text-slate-900 uppercase tracking-tight mb-2 group-hover:text-orange-600 transition-colors">{sub}</h3>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] flex items-center justify-center">
                            {allProductsForCategory.filter(p => p.subCategory === sub).length} Productos
                            <ChevronRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-white border border-gray-200 hover:border-orange-300 transition-colors duration-300 group flex flex-col h-full overflow-hidden">
                    <div
                      className="w-full h-64 relative overflow-hidden bg-gray-100 cursor-pointer"
                      onClick={() => handleProductClick(product)}
                    >
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-4 left-4">
                        <span className="text-[10px] font-bold text-slate-900 bg-white/90 backdrop-blur uppercase tracking-widest px-3 py-1 shadow-sm">{product.category}</span>
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
                          {product.specs.map((spec, i) => (
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

            {filteredProducts.length === 0 && (
              <div className="text-center py-20 bg-white border border-dashed border-gray-300">
                <Search size={48} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500 font-medium">No se encontraron productos en esta categoría.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;