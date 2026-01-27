import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, ShieldCheck, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 font-sans border-t-4 border-orange-600">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div className="space-y-6">
            <img src="/images/vicbril-logo.jpg" alt="Vicbril Internacional" className="h-20 w-auto object-contain bg-white p-2 rounded" />
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Soluciones en conductores eléctricos para la industria y la energía.
            </p>
            <div className="flex space-x-2 pt-2">
              {/* Social placeholders */}
              <a href="#" className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center hover:bg-orange-600 hover:text-white transition"><Facebook size={16} /></a>
              <a href="#" className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center hover:bg-orange-600 hover:text-white transition"><Linkedin size={16} /></a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-oswald font-bold tracking-wider mb-6">EXPLORAR</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/nosotros" className="hover:text-orange-500 transition flex items-center group"><ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> Nuestra Empresa</Link></li>
              <li><Link to="/productos" className="hover:text-orange-500 transition flex items-center group"><ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> Catálogo General</Link></li>
              <li><Link to="/faq" className="hover:text-orange-500 transition flex items-center group"><ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> Preguntas Frecuentes</Link></li>
              <li><Link to="/contacto" className="hover:text-orange-500 transition flex items-center group"><ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> Contacto Comercial</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-oswald font-bold tracking-wider mb-6">PRODUCTOS</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/productos?cat=1" className="hover:text-orange-500 transition">Baja y Media Tensión</Link></li>
              <li><Link to="/productos?cat=2" className="hover:text-orange-500 transition">Cables Especiales</Link></li>
              <li><Link to="/productos?cat=3" className="hover:text-orange-500 transition">Fibra Óptica</Link></li>
              <li><Link to="/productos?cat=4" className="hover:text-orange-500 transition">Cables Subterráneos</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-oswald font-bold tracking-wider mb-6">CORPORATIVO</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start group">
                <MapPin size={18} className="mr-3 text-orange-600 flex-shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                <span>Calle 6 N° 2185, Parque Industrial Spegazzini,<br />Ezeiza, Buenos Aires</span>
              </li>
              <li className="flex items-center group">
                <Phone size={18} className="mr-3 text-orange-600 flex-shrink-0 group-hover:text-white transition-colors" />
                <span className="font-mono">11 3124-0403</span>
              </li>
              <li className="flex items-center group">
                <Mail size={18} className="mr-3 text-orange-600 flex-shrink-0 group-hover:text-white transition-colors" />
                <span>info@vicbrilinternacional.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications Strip */}
        <div className="border-t border-slate-900 pt-10 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center opacity-60">
            <span className="text-xs uppercase tracking-widest mb-4 md:mb-0">Calidad Certificada</span>
            <div className="flex space-x-6">
              {/* Badges Mockup */}
              <div className="flex items-center space-x-2 border border-slate-800 px-3 py-1 rounded">
                <ShieldCheck size={16} /> <span className="text-xs font-bold">NOM-ANCE</span>
              </div>
              <div className="flex items-center space-x-2 border border-slate-800 px-3 py-1 rounded">
                <ShieldCheck size={16} /> <span className="text-xs font-bold">ISO 9001</span>
              </div>
              <div className="flex items-center space-x-2 border border-slate-800 px-3 py-1 rounded">
                <ShieldCheck size={16} /> <span className="text-xs font-bold">CFE LAPEM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 mt-4 pt-8 text-center text-[10px] text-slate-600 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Vicbril Internacional S.A. | Privacidad | Términos y Condiciones | Creado con ❤ por Ely de Adamas</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
