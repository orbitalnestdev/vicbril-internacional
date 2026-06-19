import React from 'react';
import { useScrollReveal } from '../services/hooks';

interface MarketItem {
  id: string;
  title: string;
  image: string;
  description: string;
  detailedText: string;
}

const markets: MarketItem[] = [
  {
    id: 'oil-gas',
    title: 'OIL & GAS',
    image: '/images/market-oil-gas.png',
    description: 'Conductores para refinerías, plantas petroquímicas y plataformas de exploración.',
    detailedText: 'Suministramos cables de control, instrumentación y potencia diseñados para soportar ambientes corrosivos, hidrocarburos y altas temperaturas, cumpliendo con las normas de seguridad más estrictas del sector petrolero y gasífero.'
  },
  {
    id: 'mineria',
    title: 'MINERÍA',
    image: '/images/market-mineria.png',
    description: 'Cables de alta resistencia mecánica y química para explotación minera extrema.',
    detailedText: 'Ofrecemos conductores especialmente robustecidos con blindajes metálicos y cubiertas altamente resistentes al arrastre, abrasión, humedad y agentes químicos en minas a cielo abierto y subterráneas.'
  },
  {
    id: 'energia',
    title: 'ENERGÍA',
    image: '/images/market-energia.png',
    description: 'Redes de distribución de alta, media y baja tensión, y generación de energía.',
    detailedText: 'Proporcionamos una amplia gama de conductores eléctricos para redes de transmisión, subestaciones eléctricas y proyectos de energías renovables (solar y eólica), asegurando una conducción eficiente y confiable.'
  },
  {
    id: 'infraestructura-transporte',
    title: 'INFRAESTRUCTURA Y TRANSPORTE',
    image: '/images/market-transporte.png',
    description: 'Suministro eléctrico seguro para redes ferroviarias, aeropuertos y obras civiles.',
    detailedText: 'Abastecemos proyectos de movilidad e infraestructura pública con conductores libres de halógenos y de baja emisión de humos (LSZH), garantizando la máxima seguridad para las personas y la preservación de equipos.'
  },
  {
    id: 'industria-construccion',
    title: 'INDUSTRIA Y CONSTRUCCIÓN',
    image: '/images/market-construccion.png',
    description: 'Conductores normalizados para plantas industriales y desarrollos inmobiliarios.',
    detailedText: 'Proveemos conductores para distribución interna de energía en complejos industriales, fábricas y desarrollos edilicios comerciales y residenciales, bajo las normas IRAM e internacionales vigentes.'
  }
];

const Markets: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header Banner */}
      <div className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-orange-500 text-base sm:text-lg md:text-xl font-bold tracking-[0.4em] uppercase mb-4 block animate-fade-in-up">Sectores</span>
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-oswald font-bold text-white mb-6 uppercase tracking-tight leading-none">
            Mercados que abastecemos
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
            Soluciones confiables y certificadas en conductores eléctricos para los sectores industriales y de infraestructura más exigentes del país.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          {/* 3 Columns Top Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {markets.slice(0, 3).map((market, idx) => (
              <MarketCard key={market.id} market={market} idx={idx} />
            ))}
          </div>

          {/* 2 Columns Bottom Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {markets.slice(3).map((market, idx) => (
              <MarketCard key={market.id} market={market} idx={idx + 3} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const MarketCard: React.FC<{ market: MarketItem; idx: number }> = ({ market, idx }) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`group relative h-96 md:h-[420px] overflow-hidden bg-slate-900 block transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${(idx % 3) * 100}ms` }}
    >
      {/* Background Image */}
      <img
        src={market.image}
        alt={market.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-90"
        loading="lazy"
      />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 xs:p-8 md:p-10 z-10">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-2xl xs:text-3xl md:text-4xl font-oswald font-bold text-white mb-3 uppercase tracking-tight leading-tight select-none">
            {market.title}
          </h3>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-lg">
            {market.detailedText}
          </p>
          <div className="w-12 h-1 bg-orange-600 mt-4 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Markets;
