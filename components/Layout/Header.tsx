import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronRight, Download } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-white/95 backdrop-blur-sm border-gray-200 shadow-sm py-2' : 'bg-transparent border-transparent py-4'}`}>

      {/* Top Bar - Premium Industrial Look */}
      <div className={`hidden md:block absolute top-0 right-0 left-0 bg-slate-950 text-slate-400 text-[10px] tracking-widest uppercase transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'}`}>
        <div className="container mx-auto px-6 h-full flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <span className="flex items-center hover:text-white transition cursor-pointer">
              <Phone size={12} className="mr-2 text-orange-600" /> +54 9 11 3124-0403
            </span>
            <span className="flex items-center hover:text-white transition cursor-pointer">
              <Mail size={12} className="mr-2 text-orange-600" /> INFO@VICBRILINTERNACIONAL.COM
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition flex items-center"><Download size={12} className="mr-2" /> CATÁLOGO PDF 2024</a>
            <span className="text-orange-600 font-bold">LÍDERES EN DISTRIBUCIÓN ELÉCTRICA</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`container mx-auto px-6 transition-all duration-300 ${isScrolled ? 'mt-0' : 'mt-8'}`}>
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center group relative z-50">
            <img src="/images/vicbril-logo.jpg" alt="Vicbril Internacional" className="h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-10">
            {[
              { path: '/', label: 'Inicio' },
              { path: '/nosotros', label: 'Nosotros' },
              { label: 'Catálogo', isStatic: true },
              { label: 'Ayuda', isStatic: true },
            ].map((link) => (
              link.isStatic ? (
                <span
                  key={link.label}
                  className="text-sm font-semibold tracking-wide uppercase relative py-2 text-slate-400 cursor-default"
                >
                  {link.label}
                </span>
              ) : (
                <Link
                  key={link.path}
                  to={link.path!}
                  className={`text-sm font-semibold tracking-wide uppercase relative py-2 group transition-colors ${location.pathname === link.path ? 'text-orange-600' : 'text-slate-600 hover:text-slate-900'
                    }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform origin-left transition-transform duration-300 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              )
            ))}

            <Link to="/contacto" className="bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 hover:bg-orange-600 transition-colors duration-300 flex items-center">
              Cotizar Proyecto <ChevronRight size={14} className="ml-1" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-900 focus:outline-none relative z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col h-full justify-center px-8 space-y-8">
          <Link to="/" className="text-3xl font-oswald font-bold text-slate-900 border-b border-gray-100 pb-4">INICIO</Link>
          <Link to="/nosotros" className="text-3xl font-oswald font-bold text-slate-900 border-b border-gray-100 pb-4">NOSOTROS</Link>
          <span className="text-3xl font-oswald font-bold text-slate-300 border-b border-gray-100 pb-4">CATÁLOGO</span>
          <span className="text-3xl font-oswald font-bold text-slate-300 border-b border-gray-100 pb-4">AYUDA</span>
          <Link to="/contacto" className="text-orange-600 text-2xl font-oswald font-bold pt-4 flex items-center">
            SOLICITAR COTIZACIÓN <ChevronRight className="ml-2" />
          </Link>

          <div className="mt-auto pb-12 text-slate-500 text-sm">
            <p className="mb-2">Buenos Aires, Argentina</p>
            <p className="font-mono text-slate-900">+54 9 11 3124-0403</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
