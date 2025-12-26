import React from 'react';
import { X, FileText } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, productName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-lg shadow-2xl animate-in fade-in zoom-in duration-200 overflow-hidden">
        {/* Decorative Top Border */}
        <div className="h-2 bg-orange-600 w-full"></div>
        
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
             <div>
                <h3 className="font-oswald text-2xl font-bold text-slate-900 uppercase">Solicitar Cotización</h3>
                <p className="text-slate-500 text-sm mt-1">Nuestros agentes comerciales responderán en menos de 24hrs.</p>
             </div>
             <button onClick={onClose} className="text-slate-400 hover:text-slate-900 transition">
               <X size={24} />
             </button>
          </div>
          
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Solicitud enviada (Demo)"); onClose(); }}>
            {productName && (
              <div className="bg-slate-50 p-4 border-l-4 border-orange-600 flex items-start">
                <FileText className="text-slate-400 mr-3 flex-shrink-0" size={20} />
                <div>
                   <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-1">Interesado en:</span>
                   <p className="font-bold text-slate-900 text-sm">{productName}</p>
                </div>
              </div>
            )}
            
            <div className="space-y-4">
               <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Razón Social</label>
                  <input type="text" className="w-full border border-gray-300 p-3 text-sm focus:border-orange-600 focus:ring-0 outline-none transition" required placeholder="Nombre de la empresa" />
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <div>
                     <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Contacto</label>
                     <input type="text" className="w-full border border-gray-300 p-3 text-sm focus:border-orange-600 focus:ring-0 outline-none transition" required placeholder="Su nombre" />
                  </div>
                  <div>
                     <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Teléfono</label>
                     <input type="tel" className="w-full border border-gray-300 p-3 text-sm focus:border-orange-600 focus:ring-0 outline-none transition" required placeholder="(55)..." />
                  </div>
               </div>

               <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Email</label>
                  <input type="email" className="w-full border border-gray-300 p-3 text-sm focus:border-orange-600 focus:ring-0 outline-none transition" required placeholder="correo@empresa.com" />
               </div>

               <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Detalles</label>
                  <textarea rows={3} className="w-full border border-gray-300 p-3 text-sm focus:border-orange-600 focus:ring-0 outline-none transition resize-none" placeholder="Especifique cantidades, destino y requerimientos especiales..."></textarea>
               </div>
            </div>

            <button type="submit" className="w-full bg-slate-900 text-white font-bold uppercase tracking-widest text-xs py-4 hover:bg-orange-600 transition shadow-lg mt-4">
              Enviar Solicitud
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
