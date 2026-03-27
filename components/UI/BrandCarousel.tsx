import React from 'react';
import { brands } from '../../services/data';

const BrandCarousel: React.FC = () => {
    // Triple the brands to ensure seamless loop
    const displayBrands = [...brands, ...brands, ...brands];

    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="bg-white rounded-[5rem] py-16 md:py-24 px-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">
                    <div className="flex flex-wrap justify-center gap-y-16 md:gap-y-24">
                        {/* First 4: Full row on desktop */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24 w-full place-items-center">
                            {brands.slice(0, 4).map((brand, idx) => (
                                <div
                                    key={`${brand.name}-${idx}`}
                                    className="flex items-center justify-center w-full transition-all duration-700 hover:scale-110 hover:rotate-2 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                                    style={{ animationDelay: `${idx * 150}ms` }}
                                >
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="w-full h-auto max-h-24 md:max-h-32 object-contain pointer-events-none transition-all duration-500 hover:brightness-110"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Remaining brands (1 or more): Centered row */}
                        <div className="flex flex-wrap justify-center gap-12 md:gap-24 w-full">
                            {brands.slice(4).map((brand, idx) => (
                                <div
                                    key={`${brand.name}-${idx}`}
                                    className="flex items-center justify-center w-52 md:w-64 lg:w-72 transition-all duration-700 hover:scale-110 hover:-rotate-2 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                                    style={{ animationDelay: `${(idx + 4) * 150}ms` }}
                                >
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="w-full h-auto max-h-24 md:max-h-32 object-contain pointer-events-none transition-all duration-500 hover:brightness-110"
                                        loading="lazy"
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
