import React from 'react';
import { brands } from '../../services/data';

const BrandCarousel: React.FC = () => {
    // Triple the brands to ensure seamless loop
    const displayBrands = [...brands, ...brands, ...brands];

    return (
        <section className="py-16 md:py-24 bg-slate-900 relative overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <div className="flex items-center justify-between">
                    <h3 className="text-white font-oswald font-bold text-2xl tracking-widest uppercase">Marcas que confían en nosotros</h3>
                    <div className="h-px flex-grow mx-8 bg-gradient-to-r from-orange-600/50 to-transparent"></div>
                </div>
            </div>

            <div className="relative flex overflow-hidden pause-marquee">
                <div className="animate-marquee flex items-center space-x-12 py-8">
                    {displayBrands.map((brand, idx) => (
                        <div
                            key={`${brand.name}-${idx}`}
                            className="flex-shrink-0 flex items-center justify-center h-20 md:h-28 px-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="h-full w-auto max-w-[150px] md:max-w-[200px] object-contain transition-all duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0 brightness-200 group-hover:brightness-100"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative pulse element to match project vibe */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-600/30 to-transparent"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-600/30 to-transparent"></div>
        </section>
    );
};

export default BrandCarousel;

