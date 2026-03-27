import React from 'react';
import { Target, Eye, Award } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
    const cards = [
        {
            title: 'Misión',
            description: 'Brindar soluciones en cables y conductores eléctricos, garantizando disponibilidad de productos, asesoramiento técnico y una respuesta ágil que contribuya a la continuidad y eficiencia de cada proyecto.',
            icon: Target,
        },
        {
            title: 'Visión',
            description: 'Consolidarnos como líderes en la distribución de conductores eléctricos, destacándonos por el stock permanente, la entrega inmediata y una logística propia que asegure respuestas rápidas y confiables.',
            icon: Eye,
        },
        {
            title: 'Calidad',
            description: 'Trabajamos con fabricantes líderes del mercado y sostenemos altos estándares en cada etapa del proceso, desde la selección de productos hasta la entrega, asegurando confiabilidad y cumplimiento en cada operación.',
            icon: Award,
        },
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <h2 className="text-6xl font-oswald font-bold text-slate-900 mb-16 text-center">
                    ¿POR QUÉ ELEGIRNOS?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                        >
                            <div className="mb-8 p-4 bg-slate-50 w-fit rounded-xl group-hover:bg-orange-50 transition-colors">
                                <card.icon size={40} className="text-slate-400 group-hover:text-orange-600 transition-colors" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-4xl font-oswald font-bold text-slate-900 mb-4 uppercase tracking-wide">
                                {card.title}
                            </h3>
                            <p className="text-xl text-slate-500 leading-relaxed font-light">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
