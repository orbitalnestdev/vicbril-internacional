import React from 'react';
import { brands } from '../../services/data';

const BrandCarousel: React.FC = () => {
    // Triple the brands to ensure seamless loop
    const displayBrands = [...brands, ...brands, ...brands];

    return (
        <section className="py-16 md:py-24 bg-slate-900 relative overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Refined "Capsule" container: Minimal padding, maximum logo size */}
                <div className="bg-white rounded-[4rem] py-6 md:py-8 px-4 md:px-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8 w-full place-items-center">
                        {brands.map((brand, idx) => (
                            <div
                                key={`${brand.name}-${idx}`}
                                className="flex items-center justify-center h-24 md:h-36 lg:h-44 w-full transition-all duration-500 hover:scale-110 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="h-full w-auto max-w-[92%] object-contain pointer-events-none drop-shadow-sm"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative pulse element to match project vibe */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-600/30 to-transparent"></div>
        </section>
    );
};

export default BrandCarousel;
