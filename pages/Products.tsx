import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { categories, products } from '../services/data';
import { Filter, Download, Search, ChevronRight } from 'lucide-react';
import QuoteModal from '../components/UI/QuoteModal';

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat) {
      setActiveCategory(cat);
    } else {
      setActiveCategory('all');
    }
  }, [searchParams]);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    if(catId === 'all') {
        searchParams.delete('cat');
        setSearchParams(searchParams);
    } else {
        setSearchParams({ cat: catId });
    }
  };

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => {
        const catName = categories.find(c => c.id === activeCategory)?.name;
        return p.category === catName;
    });

  const handleQuoteClick = (prodName: string) => {
    setSelectedProduct(prodName);
    setIsModalOpen(true);
  };

  // Determine Banner Content
  const currentCategoryInfo = categories.find(c => c.id === activeCategory);
  const bannerImage = currentCategoryInfo 
    ? currentCategoryInfo.banner 
    : 'https://images.unsplash.com/photo-1565514020176-886c87e45292?q=80&w=2000&auto=format&fit=crop'; // Default Industrial Warehouse
  
  const pageTitle = currentCategoryInfo ? currentCategoryInfo.name.toUpperCase() : 'CONDUCTORES ELÉCTRICOS';
  const pageSubtitle = currentCategoryInfo ? 'Catálogo Especializado' : 'Catálogo Digital';

  return (
    <div className="pt-20 pb-20 bg-gray-50 min-h-screen font-sans">
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
              <button className="flex items-center text-xs font-bold uppercase tracking-widest text-white bg-white/10 hover:bg-orange-600 transition border border-white/20 px-6 py-3 backdrop-blur-sm">
                 <Download size={14} className="mr-2" /> Ficha Técnica PDF
              </button>
              {activeCategory !== 'all' && (
                <button 
                  onClick={() => handleCategoryChange('all')} 
                  className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white transition px-4 py-3"
                >
                   <ChevronRight className="rotate-180 mr-2" size={14}/> Ver Todo
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
                    <button 
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`w-full text-left px-4 py-3 text-sm flex justify-between items-center transition-colors border-l-2 ${activeCategory === cat.id ? 'bg-slate-50 border-orange-600 text-slate-900 font-bold' : 'border-transparent text-slate-500 hover:text-slate-900'}`}
                    >
                      {cat.name}
                      {activeCategory === cat.id && <ChevronRight size={14} />}
                    </button>
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

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white border border-gray-200 hover:border-orange-300 transition-colors duration-300 group flex flex-col h-full overflow-hidden">
                  <div className="w-full h-64 relative overflow-hidden bg-gray-100">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4">
                       <span className="text-[10px] font-bold text-slate-900 bg-white/90 backdrop-blur uppercase tracking-widest px-3 py-1 shadow-sm">{product.category}</span>
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
                       <button 
                        onClick={() => handleQuoteClick(product.name)}
                        className="w-full bg-slate-900 text-white text-xs font-bold py-4 hover:bg-orange-600 transition uppercase tracking-widest flex items-center justify-center"
                       >
                         Solicitar Cotización
                       </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
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