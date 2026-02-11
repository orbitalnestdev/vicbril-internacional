import React from 'react';
import { brands } from '../../services/data';

const BrandCarousel: React.FC = () => {
    // Triple the brands to ensure seamless loop
    const displayBrands = [...brands, ...brands, ...brands];

    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            <div className="container mx-auto px-6">
                {/* The "Capsule" container from the reference, now on a dark background */}
                <div className="bg-white/95 backdrop-blur-sm rounded-[3rem] py-10 md:py-14 relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

                    <div className="relative flex whitespace-nowrap pause-marquee">
                        <div className="animate-marquee flex items-center gap-20 md:gap-40 px-6">
                            {displayBrands.map((brand, idx) => (
                                <div
                                    key={`${brand.name}-${idx}`}
                                    className="flex items-center justify-center min-w-[160px] md:min-w-[220px] transition-all duration-300 hover:scale-110"
                                >
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="h-10 md:h-16 w-auto object-contain pointer-events-none drop-shadow-sm"
                                        loading="lazy"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${brand.name}&background=f1f5f9&color=0f172a&bold=true&font-size=0.3`;
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative pulse element to match project vibe */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-600/30 to-transparent"></div>
        </section>
    );
};

export default BrandCarousel;
