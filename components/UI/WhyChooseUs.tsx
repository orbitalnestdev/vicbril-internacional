import React from 'react';
import { Target, Eye, Award } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
    const cards = [
        {
            title: 'Misión',
            description: 'Nuestra misión es suministrar las mejores soluciones en cables de energía para nuestros clientes, contribuyendo asimismo a optimizar su seguridad y también su productividad.',
            icon: Target,
        },
        {
            title: 'Visión',
            description: 'Nuestra visión es trabajar cerca de sus clientes brindando soluciones confiables de Punta a Punta basadas en su concepto de Valor Institucional, Productivo, Humano y Tecnológico.',
            icon: Eye,
        },
        {
            title: 'Calidad',
            description: 'Hemos incrementado su presencia internacional, constituyéndose en la empresa Argentina del sector eléctrico con más reconocimientos por su vocación exportadora.',
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
