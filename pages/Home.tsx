import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Zap, ClipboardList, CheckCircle } from 'lucide-react';
import { categories, products } from '../services/data';
import BrandCarousel from '../components/UI/BrandCarousel';
import GoogleMap from '../components/UI/GoogleMap';
import AboutSection from '../components/UI/AboutSection';
import WhyChooseUs from '../components/UI/WhyChooseUs';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* Hero Section - Industrial Impact */}
      <section className="relative min-h-screen flex flex-col bg-slate-900 overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/vicbril-hero-3.jpg"
            className="w-full h-full object-cover opacity-60"
          >
            <source src="/images/videohero.mp4" type="video/mp4" />
          </video>
          {/* Heavy gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/70 to-transparent"></div>
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>

        {/* Content Area */}
        <div className="flex-grow flex items-center relative z-10 pt-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-[1px] w-12 bg-orange-600"></div>
                <span className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase">Distribución mayorista de cables eléctricos</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold font-oswald text-white leading-[0.9] mb-8 tracking-tight">
                CABLES DE BAJA Y MEDIA <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">TENSIÓN</span> PARA <br />
                PROYECTOS EXIGENTES
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-xl font-light border-l-2 border-slate-700 pl-6">
                Somos distribuidores mayoristas de conductores eléctricos y cables especiales, trabajando con más de 15 fábricas líderes del mercado. Más de 25 años de experiencia abasteciendo proyectos de energía, OIL & GAS y redes eléctricas.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contacto" className="bg-orange-600 text-white text-sm font-bold uppercase tracking-widest px-10 py-5 hover:bg-orange-700 transition shadow-lg hover:shadow-orange-900/20 flex items-center justify-center">
                  Solicitar Cotización
                </Link>
                <Link to="/contacto" className="group bg-transparent border border-slate-600 text-white text-sm font-bold uppercase tracking-widest px-10 py-5 hover:border-white transition flex items-center justify-center">
                  Solicitar Cotización <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip - Integrated in flow to prevent gaps */}
        <div className="relative w-full bg-[#003B4D] py-6 hidden md:block z-20">
          <div className="container mx-auto px-6 flex justify-between text-slate-200 font-mono text-xs tracking-wider">
            <div className="flex items-center space-x-2">
              <CheckCircle size={14} className="text-orange-500" /> <span>STOCK DISPONIBLE</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={14} className="text-orange-500" /> <span>CERTIFICACIÓN ANCE</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={14} className="text-orange-500" /> <span>ENVÍOS NACIONALES</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={14} className="text-orange-500" /> <span>ATENCIÓN ESPECIALIZADA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition - Technical Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-oswald font-bold text-slate-900 mb-4">LOGÍSTICA Y CALIDAD <br />SIN COMPROMISOS</h2>
              <div className="text-slate-500 leading-relaxed space-y-4">
                <p>Contamos con un centro logístico propio en el Nuevo Polo Spegazzini, con más de 5.000 m² de capacidad operativa, lo que nos permite garantizar disponibilidad, respuesta rápida y entregas eficientes en todo el país.</p>
                <p>En Vicbril Internacional S.A. brindamos un servicio de excelencia en la provisión de conductores eléctricos, respaldados por trayectoria, infraestructura y un equipo especializado.</p>
              </div>
            </div>
            <div className="hidden md:block relative w-1/3">
              <img
                src="/images/vicbril-cable-detail.png"
                alt="Detalle de cable técnico"
                className="w-full max-w-sm ml-auto object-contain transform hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
            {[
              { icon: Truck, title: "LOGÍSTICA INTEGRAL", desc: "Coordinación precisa para entregas en obra o almacén." },
              { icon: ShieldCheck, title: "NORMATIVIDAD", desc: "Material 100% certificado bajo normas NOM y estándares internacionales." },
              { icon: Zap, title: "STOCK PERMANENTE", desc: "Inventario robusto en calibres de alta rotación y especialidades." },
              { icon: ClipboardList, title: "SOPORTE TÉCNICO", desc: "Asesoría de ingenieros para la correcta especificación de conductores." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 hover:bg-gray-50 transition-colors group">
                <item.icon size={32} strokeWidth={1.5} className="text-slate-400 mb-6 group-hover:text-orange-600 transition-colors" />
                <h3 className="text-lg font-oswald font-bold text-slate-900 mb-3 tracking-wide">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />

      <BrandCarousel />

      {/* Product Lines - Visual Cards */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-oswald font-bold text-slate-900">LÍNEAS DE PRODUCTO</h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat, idx) => (
              <div key={cat.id} className="group relative h-80 overflow-hidden bg-slate-900">
                <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="border-l-4 border-orange-600 pl-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-oswald font-bold text-white mb-1">{cat.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Featured Products - Tech Spec Style
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-orange-600 text-xs font-bold tracking-widest uppercase mb-4 block">Especialistas en cables eléctricos de baja y media tensión</span>
            <h2 className="text-4xl font-oswald font-bold text-slate-900 mb-4">PRODUCTOS DESTACADOS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="group border border-gray-100 bg-white hover:border-orange-200 transition-colors duration-300">
                <div className="relative h-64 bg-white overflow-hidden border-b border-gray-50">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[10px] font-bold px-3 py-1 uppercase tracking-wider text-slate-900 shadow-sm">
                    {product.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-oswald font-bold text-slate-900 mb-3">{product.name}</h3>
                  <div className="h-px w-10 bg-orange-600 mb-4"></div>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-2">{product.description}</p>
                  <Link to="/contacto" className="inline-block text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-orange-600 transition border-b-2 border-transparent hover:border-orange-600 pb-1">
                    Consultar Disponibilidad
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      <GoogleMap />

      {/* Corporate CTA */}
      <section className="py-28 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/vicbril-warehouse-cta.jpg" alt="Centro Logístico Vicbril" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/10 skew-x-12 transform translate-x-20 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-2xl mb-10 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-6 leading-tight">
                ¿TIENES UN PROYECTO <br /> EN PUERTA?
              </h2>
              <p className="text-slate-400 text-lg">
                Solicita una cotización formal para tu lista de materiales. Precios competitivos por volumen y atención dedicada a empresas.
              </p>
            </div>
            <div>
              <Link to="/contacto" className="bg-white text-slate-900 font-bold font-oswald text-lg px-12 py-6 uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-colors shadow-2xl">
                Contactar Asesor
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;