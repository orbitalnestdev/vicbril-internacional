import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../../services/hooks';

const images = [
    {
        url: "/images/home-nosotros/d-suministro.jpeg",
        title: "Logística e Infraestructura",
        desc: "Centro de distribución y almacenamiento preparado para grandes volúmenes."
    },
    {
        url: "/images/home-nosotros/20260116_174205.jpg",
        title: "Stock Permanente",
        desc: "Disponibilidad garantizada de cables de baja, media y alta tensión."
    },
    {
        url: "/images/home-nosotros/20260116_174301.jpg",
        title: "Despacho Eficiente",
        desc: "Flota propia de alta capacidad lista para entregas en todo el país."
    }
];

const SuministroCarousel: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const [loaded, setLoaded] = useState<{ [key: number]: boolean }>({});
    const reveal = useScrollReveal(0.1);

    const prev = () => setCurrent((curr) => (curr === 0 ? images.length - 1 : curr - 1));
    const next = () => setCurrent((curr) => (curr === images.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        const slideInterval = setInterval(next, 6000);
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <section 
            className="py-12 bg-slate-900 overflow-hidden relative"
            ref={reveal.ref}
        >
            <div className={`container mx-auto px-6 relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] transition-all duration-1000 ${reveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="w-full h-full relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
                    <div
                        className="flex transition-transform duration-700 ease-in-out h-full w-full"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {images.map((slide, i) => (
                            <div key={i} className="w-full h-full flex-shrink-0 relative">
                                {!loaded[i] && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-slate-800 text-slate-400 font-oswald animate-pulse">
                                        CARGANDO IMAGEN...
                                    </div>
                                )}
                                <img
                                    src={slide.url}
                                    alt={slide.title}
                                    className={`w-full h-full object-cover transition-opacity duration-500 ${loaded[i] ? 'opacity-100' : 'opacity-0'}`}
                                    onLoad={() => setLoaded(prev => ({ ...prev, [i]: true }))}
                                    loading="eager"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
                                
                                {/* Info Box */}
                                <div className="absolute bottom-10 left-6 right-6 md:left-12 md:right-12 text-white max-w-xl z-20">
                                    <h3 className="text-2xl md:text-4xl font-oswald font-bold uppercase mb-2 md:mb-3 tracking-wide">{slide.title}</h3>
                                    <p className="text-sm md:text-lg text-slate-300 leading-relaxed font-light">{slide.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/45 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-sm transition-colors z-30"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/45 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-sm transition-colors z-30"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-6 right-6 md:right-12 flex gap-2 z-30">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${current === i ? 'bg-orange-500 w-8' : 'bg-white/40 w-3'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuministroCarousel;
