import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200",
    "/images/foto.jpg"
];

const AboutSection: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const [loaded, setLoaded] = useState<{ [key: number]: boolean }>({});

    const prev = () => setCurrent((curr) => (curr === 0 ? images.length - 1 : curr - 1));
    const next = () => setCurrent((curr) => (curr === images.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        const slideInterval = setInterval(next, 5000);
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <section className="bg-white overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[600px]">
                {/* Left: Image Slider */}
                <div className="lg:w-1/2 relative h-[500px] lg:h-auto overflow-hidden bg-slate-200">
                    <div
                        className="flex transition-transform duration-700 ease-in-out h-full w-full"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {images.map((img, i) => (
                            <div key={i} className="w-full h-full flex-shrink-0 relative">
                                {!loaded[i] && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400 font-oswald animate-pulse">
                                        CARGANDO IMAGEN...
                                    </div>
                                )}
                                <img
                                    src={img}
                                    alt={`Industrial infrastructure ${i + 1}`}
                                    className={`w-full h-full object-cover transition-opacity duration-500 ${loaded[i] ? 'opacity-100' : 'opacity-0'}`}
                                    onLoad={() => setLoaded(prev => ({ ...prev, [i]: true }))}
                                    loading="eager"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-colors z-10"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-colors z-10"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {images.map((_, i) => (
                            <div
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all ${current === i ? 'bg-white w-6' : 'bg-white/50'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right: Text Area */}
                <div className="lg:w-1/2 bg-slate-900 flex items-center p-12 lg:p-24">
                    <div className="max-w-xl">
                        <h2 className="text-white text-4xl lg:text-5xl font-bold font-oswald mb-8 uppercase tracking-tight">
                            Sobre Nosotros
                        </h2>

                        <div className="space-y-6 text-slate-100 text-lg leading-relaxed font-light">
                            <p>
                                Vicbril Internacional S.A. es una organización con más de 25 años de trayectoria en el mercado eléctrico nacional, especializándose en la distribución mayorista de conductores de energía de hasta 33kV.
                            </p>
                            <p>
                                Nuestra actividad se basa en brindar soluciones integrales mediante el asesoramiento técnico especializado y la provisión de materiales de la más alta calidad. Profundizamos en las necesidades de cada proyecto para lograr una integración total con las exigencias del sector OIL & GAS, energía e infraestructura.
                            </p>
                        </div>

                        <div className="mt-12">
                            <a
                                href="#/nosotros"
                                className="inline-block border border-white/30 hover:border-white text-white px-8 py-3 rounded-full transition-all text-sm font-bold tracking-widest uppercase"
                            >
                                Más información
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
