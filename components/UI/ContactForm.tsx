import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContactForm: React.FC = () => {
    return (
        <div className="bg-white p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl font-oswald font-bold text-slate-900 mb-8 border-l-4 border-orange-600 pl-4 uppercase">Enviar Mensaje</h2>

            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-orange-600 transition-colors">Nombre Completo</label>
                        <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-orange-600 focus:outline-none transition-colors bg-transparent text-slate-900 placeholder-slate-300 text-base" placeholder="Ej. Juan Pérez" />
                    </div>
                    <div className="group">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-orange-600 transition-colors">Empresa</label>
                        <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-orange-600 focus:outline-none transition-colors bg-transparent text-slate-900 placeholder-slate-300 text-base" placeholder="Ej. Constructora SA" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-orange-600 transition-colors">Email Corporativo</label>
                        <input type="email" className="w-full border-b border-gray-300 py-2 focus:border-orange-600 focus:outline-none transition-colors bg-transparent text-slate-900 placeholder-slate-300 text-base" placeholder="juan@empresa.com" />
                    </div>
                    <div className="group">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-orange-600 transition-colors">Teléfono</label>
                        <input type="tel" className="w-full border-b border-gray-300 py-2 focus:border-orange-600 focus:outline-none transition-colors bg-transparent text-slate-900 placeholder-slate-300 text-base" placeholder="+54 9 11 0000 0000" />
                    </div>
                </div>

                <div className="group pt-4">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-orange-600 transition-colors">Mensaje / Requerimiento</label>
                    <textarea rows={4} className="w-full border-b border-gray-300 py-2 focus:border-orange-600 focus:outline-none transition-colors bg-transparent text-slate-900 placeholder-slate-300 resize-none text-base" placeholder="Describe los materiales que necesitas..."></textarea>
                </div>

                <div className="pt-6">
                    <button className="w-full bg-slate-900 text-white font-bold text-sm uppercase tracking-widest px-10 py-5 hover:bg-orange-600 transition-colors flex items-center justify-center group shadow-lg">
                        Enviar Solicitud <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
