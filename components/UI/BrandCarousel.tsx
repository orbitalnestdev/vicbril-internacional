import React from 'react';
import { brands } from '../../services/data';

const BrandCarousel: React.FC = () => {
    // Triple the brands to ensure seamless loop
    const displayBrands = [...brands, ...brands, ...brands];

    return (
        <section className="py-16 md:py-24 bg-slate-900 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="bg-white rounded-[4rem] py-12 md:py-16 px-6 md:px-12 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                    <div className="flex flex-col items-center gap-12 md:gap-16">
                        {/* Top row: 4 logos */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-6xl">
                            {brands.slice(0, 4).map((brand, idx) => (
                                <div
                                    key={`${brand.name}-${idx}`}
                                    className="flex items-center justify-center h-24 md:h-32 w-full transition-all duration-500 hover:scale-110 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
                                    style={{ animationDelay: `${idx * 100}ms` }}
                                >
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="h-full w-auto max-w-[85%] object-contain pointer-events-none drop-shadow-sm"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Bottom row: Center logo */}
                        <div className="flex justify-center w-full">
                            {brands.slice(4).map((brand, idx) => (
                                <div
                                    key={`${brand.name}-${idx}`}
                                    className="flex items-center justify-center h-24 md:h-32 w-full max-w-[250px] transition-all duration-500 hover:scale-110 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
                                    style={{ animationDelay: `${(idx + 4) * 100}ms` }}
                                >
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="h-full w-auto max-w-[90%] object-contain pointer-events-none drop-shadow-sm"
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
