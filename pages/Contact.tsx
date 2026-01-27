import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
   return (
      <div className="pt-20 min-h-screen flex flex-col">
         <div className="flex-1 flex flex-col lg:flex-row">

            {/* Left Panel: Dark Info */}
            <div className="lg:w-5/12 bg-slate-900 text-white p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden">
               <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>

               <div className="relative z-10">
                  <span className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-4 block">Hablemos de Negocios</span>
                  <h1 className="text-4xl lg:text-5xl font-oswald font-bold mb-8 leading-tight">CONTACTO <br /> CORPORATIVO</h1>
                  <p className="text-slate-400 mb-12 leading-relaxed text-lg">
                     Estamos listos para atender requerimientos de alto volumen y especificaciones técnicas complejas.
                  </p>

                  <div className="space-y-8">
                     <div className="flex items-start group">
                        <MapPin className="text-orange-600 mr-4 mt-1 group-hover:text-white transition-colors" size={24} />
                        <div>
                           <h3 className="font-oswald font-bold text-lg">OFICINAS Y CEDIS</h3>
                           <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                              Calle 6 N° 2185, Parque Industrial Spegazzini<br />
                              Ezeiza, Buenos Aires
                           </p>
                        </div>
                     </div>

                     <div className="flex items-start group">
                        <Phone className="text-orange-600 mr-4 mt-1 group-hover:text-white transition-colors" size={24} />
                        <div>
                           <h3 className="font-oswald font-bold text-lg">TELÉFONOS</h3>
                           <p className="text-slate-400 text-sm mt-1">
                              +54 9 11 3124-0403 (WhatsApp Comercial)<br />
                           </p>
                        </div>
                     </div>

                     <div className="flex items-start group">
                        <Mail className="text-orange-600 mr-4 mt-1 group-hover:text-white transition-colors" size={24} />
                        <div>
                           <h3 className="font-oswald font-bold text-lg">CORREO</h3>
                           <p className="text-slate-400 text-sm mt-1">
                              info@vicbrilinternacional.com<br />
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right Panel: Light Form */}
            <div className="lg:w-7/12 bg-white p-12 lg:p-24 flex flex-col justify-center">
               <h2 className="text-3xl font-oswald font-bold text-slate-900 mb-8">ENVIAR MENSAJE</h2>

               <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="group">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-orange-600 transition-colors">Nombre Completo</label>
                        <input type="text" className="w-full border-b border-gray-300 py-3 focus:border-orange-600 focus:outline-none transition-colors bg-transparent text-slate-900 placeholder-slate-300" placeholder="Ej. Juan Pérez" />
                     </div>
                     <div className="group">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-orange-600 transition-colors">Empresa</label>
                        <input type="text" className="w-full border-b border-gray-300 py-3 focus:border-orange-600 focus:outline-none transition-colors bg-transparent text-slate-900 placeholder-slate-300" placeholder="Ej. Constructora SA" />
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="group">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-orange-600 transition-colors">Email Corporativo</label>
                        <input type="email" className="w-full border-b border-gray-300 py-3 focus:border-orange-600 focus:outline-none transition-colors bg-transparent text-slate-900 placeholder-slate-300" placeholder="juan@empresa.com" />
                     </div>
                     <div className="group">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-orange-600 transition-colors">Teléfono</label>
                        <input type="tel" className="w-full border-b border-gray-300 py-3 focus:border-orange-600 focus:outline-none transition-colors bg-transparent text-slate-900 placeholder-slate-300" placeholder="+54 9 11 0000 0000" />
                     </div>
                  </div>

                  <div className="group pt-4">
                     <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-orange-600 transition-colors">Mensaje / Requerimiento</label>
                     <textarea rows={4} className="w-full border-b border-gray-300 py-3 focus:border-orange-600 focus:outline-none transition-colors bg-transparent text-slate-900 placeholder-slate-300 resize-none" placeholder="Describe los materiales que necesitas..."></textarea>
                  </div>

                  <div className="pt-6">
                     <button className="bg-slate-900 text-white font-bold text-sm uppercase tracking-widest px-10 py-4 hover:bg-orange-600 transition-colors flex items-center group">
                        Enviar Solicitud <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                     </button>
                  </div>
               </form>
            </div>

         </div>
      </div>
   );
};

export default Contact;
