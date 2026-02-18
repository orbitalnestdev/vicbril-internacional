import React from 'react';

const GoogleMap: React.FC = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/3">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="h-[1px] w-12 bg-orange-600"></div>
                            <span className="text-orange-500 text-xl font-bold tracking-[0.3em] uppercase">Nuestra Ubicación</span>
                        </div>
                        <h2 className="text-6xl font-oswald font-bold text-slate-900 mb-6">ESTRATÉGICAMENTE UBICADOS</h2>
                        <p className="text-slate-500 leading-relaxed mb-8 text-xl">
                            Nuestro centro logístico se encuentra en el <strong>Polo Industrial Spegazzini</strong>, un punto neurálgico para la distribución en la Provincia de Buenos Aires y todo el país.
                        </p>
                        <div className="space-y-4 text-slate-700">
                            <div className="flex items-start space-x-3">
                                <div className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-orange-600"></div>
                                <p className="text-lg">Parque Industrial Spegazzini, Carlos Spegazzini</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-orange-600"></div>
                                <p className="text-lg">Provincia de Buenos Aires, Argentina</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 h-[450px] relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                        <iframe
                            title="Ubicación Polo Industrial Spegazzini"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13083.791552554652!2d-58.5973752!3d-34.9080556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bd2d207dca09c3%3A0x6a2ef74fada3f173!2sPolo+Industrial+Spegazzini!5e0!3m2!1ses-419!2sar!4v1707665432109!5m2!1ses-419!2sar"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1) brightness(1.05)' }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        {/* Overlay for premium feel */}
                        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-slate-900/10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GoogleMap;
