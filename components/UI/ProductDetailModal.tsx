import React from 'react';
import { X, Download, MessageSquare, Info } from 'lucide-react';
import { Product } from '../../types';

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onQuote: (productName: string) => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ isOpen, onClose, product, onQuote }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative z-10 animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="sticky top-0 bg-white z-20 border-b border-gray-100 px-6 py-4 flex justify-between items-center">
          <h2 className="font-oswald font-bold text-xl md:text-2xl text-slate-900 uppercase tracking-tight">
            {product.name}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-slate-400 hover:text-slate-900"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Images */}
            <div className="space-y-6">
              <div className="aspect-square bg-gray-50 border border-gray-100 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain p-4"
                />
              </div>
              
              {product.gallery && product.gallery.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Fotos de Producto / Rollos</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {product.gallery.map((img, i) => (
                      <div key={i} className="aspect-square bg-gray-50 border border-gray-100 overflow-hidden cursor-zoom-in group">
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
            </div>

            {/* Right Column: Info */}
            <div className="space-y-8">
              <div>
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-[10px] font-bold uppercase tracking-widest mb-4">
                  {product.category}
                </span>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {product.detailedDescription || product.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 border border-slate-100">
                    <Info size={16} className="text-orange-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{spec}</span>
                  </div>
                ))}
              </div>

              {product.technicalTable && (
                <div className="border border-slate-200 p-6 bg-slate-50">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-200 pb-2">Tabla Técnica / Marcas</h4>
                  <img 
                    src={product.technicalTable} 
                    alt="Tabla Técnica" 
                    className="w-full h-auto shadow-sm"
                  />
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {product.pdf && (
                  <a 
                    href={product.pdf} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-100 text-slate-900 font-bold py-4 px-6 flex items-center justify-center gap-3 hover:bg-slate-200 transition uppercase tracking-widest text-xs"
                  >
                    <Download size={18} />
                    Ficha Técnica PDF
                  </a>
                )}
                <button 
                  onClick={() => {
                    onQuote(product.name);
                    onClose();
                  }}
                  className="flex-1 bg-orange-600 text-white font-bold py-4 px-6 flex items-center justify-center gap-3 hover:bg-orange-700 transition shadow-lg shadow-orange-600/20 uppercase tracking-widest text-xs"
                >
                  <MessageSquare size={18} />
                  Consultar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
