import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Zap, ClipboardList, CheckCircle } from 'lucide-react';
import { categories, products, brands } from '../services/data';
import BrandCarousel from '../components/UI/BrandCarousel';
import GoogleMap from '../components/UI/GoogleMap';
import AboutSection from '../components/UI/AboutSection';
import WhyChooseUs from '../components/UI/WhyChooseUs';
import ContactForm from '../components/UI/ContactForm';
import { useScrollReveal } from '../services/hooks';

const CategoryCard: React.FC<{ cat: any; idx: number }> = ({ cat, idx }) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <Link 
      ref={ref}
      to={`/productos?cat=${cat.id}`}
      className={`group relative h-80 overflow-hidden bg-slate-900 block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${idx * 100}ms` }}
    >
      <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-50" />
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <div className="border-l-4 border-orange-600 pl-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-3xl md:text-4xl font-oswald font-bold text-white mb-1 uppercase tracking-tight">{cat.name}</h3>
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">Ver Catálogo</p>
        </div>
      </div>
    </Link>
  );
};

const Home: React.FC = () => {
  const valuePropReveal = useScrollReveal(0.1);
  const headlineReveal = useScrollReveal(0.1);
  const ctaTextReveal = useScrollReveal(0.1);
  const ctaFormReveal = useScrollReveal(0.1);
  const productSectionReveal = useScrollReveal(0.1);
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderAnimatedText = (text: string, baseDelay: number = 0) => {
    return text.split('').map((char, i) => (
      <span 
        key={i} 
        className="animate-letter" 
        style={{ animationDelay: `${baseDelay + (i * 0.03)}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* Hero Section - Industrial Impact */}
      <section className="relative min-h-screen flex flex-col bg-white overflow-hidden">
        {/* Background Layer with Parallax */}
        <div 
          className="absolute inset-x-0 bottom-0 top-[120px] z-0 bg-white flex items-center justify-end parallax-bg"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <img
            src="/images/banner-principal.png"
            alt="Vicbril Banner"
            className="w-full h-full object-contain object-right animate-scale-in"
          />
        </div>

        {/* Content Area */}
        <div className="flex-grow flex items-center relative z-10 pt-44">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <span className="text-orange-600 text-6xl font-bold uppercase mb-6 block animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
                somos vicbril
              </span>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-oswald text-slate-900 leading-[0.9] mb-10 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
                <span className="text-orange-600">CABLES</span> DE BAJA, MEDIA <br />
                Y ALTA TENSIÓN PARA <br />
                ENTREGA INMEDIATA
              </h1>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
                <Link to="/contacto" className="bg-orange-600 text-white text-sm font-bold uppercase tracking-[0.2em] px-12 py-6 hover:bg-orange-700 transition-all duration-300 flex items-center justify-center shadow-xl shadow-orange-600/20 glass-shine">
                  Cotizar Proyecto
                </Link>
                <Link to="/productos" className="group bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-900 text-sm font-bold uppercase tracking-[0.2em] px-12 py-6 hover:bg-white transition-all duration-300 flex items-center justify-center">
                  Ver Catálogo <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition - Technical Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-8">
            <div className="max-w-3xl">
              <h2 className={`text-5xl md:text-6xl font-oswald font-bold text-slate-900 mb-6 transition-all duration-1000 ${headlineReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} ref={headlineReveal.ref}>
                DISTRIBUIDORES MAYORISTAS
              </h2>
              <div className="text-slate-500 text-lg leading-relaxed space-y-5">
                <p>De conductores eléctricos y cables especiales, trabajando con más de 25 fábricas líderes del mercado. Más de 25 años de experiencia abasteciendo proyectos de energía, OIL &amp; GAS y redes eléctricas.</p>
                <p>Contamos con un centro logístico propio en el Nuevo Polo Spegazzini, con más de 5.000 m² de capacidad operativa, junto con flota propia de alta capacidad de carga, lo que nos permite garantizar disponibilidad permanente, respuesta rápida y entregas eficientes en todo el país.</p>
                <p>En Vicbril Internacional S.A. brindamos un servicio de excelencia en la provisión de conductores eléctricos, respaldados por trayectoria, infraestructura y un equipo técnico especializado.</p>
                <p>Comercializamos conductores eléctricos bajo normas internacionales IEC, destacándose IEC 60228, IEC 60502, IEC 60332, IEC 60754, entre otras.</p>
                <p>Cada conductor cuenta con su protocolo de ensayo correspondiente, y los ensayos pueden ser presenciados, garantizando trazabilidad, calidad y cumplimiento normativo en cada suministro.</p>
              </div>
            </div>
            <div className="hidden md:block relative w-2/5 animate-reveal-right">
              <video
                src="/images/VIDEO LOGO VICBRIL.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full ml-auto aspect-[16/10] object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200" ref={valuePropReveal.ref}>
            {[
              { icon: Truck, title: "LOGÍSTICA INTEGRAL", desc: "Coordinación precisa para entregas en obra o almacén." },
              { icon: ShieldCheck, title: "NORMATIVIDAD", desc: "Material 100% certificado bajo normas IEC e IRAM y estándares internacionales." },
              { icon: Zap, title: "STOCK PERMANENTE", desc: "Inventario robusto en calibres de alta rotación y especialidades." },
              { icon: ClipboardList, title: "SOPORTE TÉCNICO", desc: "Asesoría de ingenieros para la correcta especificación de conductores." }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`bg-white p-10 hover:bg-gray-50 transition-all duration-700 group hover-lift ${valuePropReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <item.icon size={32} strokeWidth={1.5} className="text-slate-400 mb-6 group-hover:text-orange-600 transition-colors" />
                <h3 className="text-3xl font-oswald font-bold text-slate-900 mb-3 tracking-wide">{item.title}</h3>
                <p className="text-xl text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section >


      <AboutSection />
      {/* Product Lines - Visual Cards */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-oswald font-bold text-slate-900">LÍNEAS DE PRODUCTO</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" ref={productSectionReveal.ref}>
            {categories.map((cat, idx) => (
              <CategoryCard key={cat.id} cat={cat} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <GoogleMap />

      {/* Corporate CTA & Contact Form */}
      <section className="py-28 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/vicbril-warehouse-cta.jpg" alt="Centro Logístico Vicbril" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/10 skew-x-12 transform translate-x-20 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
            <div className={`max-w-2xl mt-10 transition-all duration-1000 ${ctaTextReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} ref={ctaTextReveal.ref}>
              <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.3em] mb-4 block border-l-2 border-orange-500 pl-4 animate-pulse">Hablemos de tu proyecto</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white mb-8 leading-tight">
                ¿TIENES UN PROYECTO <br /> EN PUERTA?
              </h2>
              <div className="space-y-6 text-slate-400 text-lg mb-10">
                <p>
                  Solicita una cotización formal para tu lista de materiales. Precios competitivos por volumen y atención dedicada a empresas.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                  <div className="bg-white/5 backdrop-blur-sm p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <h3 className="text-white font-oswald font-bold uppercase mb-2">Entrega Inmediata</h3>
                    <p className="text-sm">Stock permanente en los calibres de mayor rotación.</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <h3 className="text-white font-oswald font-bold uppercase mb-2">Precios Mayoristas</h3>
                    <p className="text-sm">Beneficios exclusivos para constructoras y gremio.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`w-full lg:w-[500px] xl:w-[600px] transition-all duration-1000 delay-300 ${ctaFormReveal.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} ref={ctaFormReveal.ref}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

    </div >
  );
};

export default Home;