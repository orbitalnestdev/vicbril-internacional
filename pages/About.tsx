import React from 'react';
import { Target, Users, Award, Briefcase } from 'lucide-react';

const About: React.FC = () => {
   return (
      <div className="pt-20">
         {/* Header */}
         <div className="bg-slate-900 py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="container mx-auto px-6 relative z-10 text-center">
               <span className="text-orange-500 text-xl font-bold tracking-[0.4em] uppercase mb-4 block">Nuestra Esencia</span>
               <h1 className="text-6xl md:text-8xl font-oswald font-bold text-white mb-6">MÁS QUE DISTRIBUIDORES,<br />SOCIOS ESTRATÉGICOS</h1>
               <p className="text-slate-300 max-w-2xl mx-auto text-2xl font-light leading-relaxed">
                  Desde 1998, construyendo la red de energía más confiable para la industria mexicana.
               </p>
            </div>
         </div>

         {/* Main Narrative */}
         <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
               <div className="flex flex-col md:flex-row gap-16 items-center">
                  <div className="w-full md:w-1/2 relative">
                     <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-orange-600 -mt-4 -ml-4"></div>
                     <img
                        src="/images/vicbril-warehouse-2.jpg"
                        alt="Ingenieros en planta industrial"
                        className="shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full h-auto object-cover"
                     />
                     <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-orange-600 -mb-4 -mr-4"></div>
                  </div>

                  <div className="w-full md:w-1/2">
                     <h2 className="text-5xl font-oswald font-bold text-slate-900 mb-8">TRAYECTORIA Y COMPROMISO</h2>
                     <div className="space-y-6 text-slate-600 leading-loose text-lg">
                        <p>
                           <strong className="text-slate-900">Vicbril Internacional S.A.</strong> nace con una visión clara: profesionalizar el abasto de material eléctrico en un mercado que demandaba mayor rigor técnico y logístico.
                        </p>
                        <p>
                           A lo largo de 25 años, hemos evolucionado de ser un proveedor local a consolidarnos como un brazo logístico para grandes desarrolladoras, constructoras y la industria manufacturera. Entendemos que un retraso en la entrega de un conductor crítico puede detener una obra entera; por eso, nuestra promesa es la precisión.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Values Grid */}
         <section className="py-24 bg-slate-50 border-t border-gray-200">
            <div className="container mx-auto px-6">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                     { icon: Target, title: "MISIÓN", text: "Suministrar soluciones en conducción eléctrica que garanticen la seguridad y eficiencia energética de los proyectos de nuestros clientes, mediante un servicio técnico y logístico de excelencia." },
                     { icon: Award, title: "VISIÓN", text: "Ser reconocidos como la referencia de confianza y calidad técnica en el mercado de alta tensión en México, impulsando el crecimiento de nuestra industria." },
                     { icon: Briefcase, title: "VALORES", text: "Integridad en cada trato, Precisión en cada entrega, y Conocimiento Técnico como base de nuestra asesoría. Creemos en relaciones de largo plazo." }
                  ].map((item, idx) => (
                     <div key={idx} className="bg-white p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-slate-900 hover:border-t-orange-600 group">
                        <item.icon size={40} className="text-slate-300 mb-8 group-hover:text-orange-600 transition-colors" />
                        <h3 className="text-3xl font-oswald font-bold text-slate-900 mb-4">{item.title}</h3>
                        <p className="text-slate-500 leading-relaxed text-lg">{item.text}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Trust Strip */}
         <section className="py-20 bg-slate-900 text-white border-b-8 border-orange-600">
            <div className="container mx-auto px-6 text-center">
               <h3 className="text-xl font-bold tracking-[0.3em] uppercase mb-12 text-slate-500">Sectores Estratégicos</h3>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50">
                  <div className="border border-slate-700 p-6 flex items-center justify-center hover:bg-white hover:text-slate-900 hover:border-white transition-all cursor-default">
                     <span className="font-oswald text-3xl font-bold">MINERÍA</span>
                  </div>
                  <div className="border border-slate-700 p-6 flex items-center justify-center hover:bg-white hover:text-slate-900 hover:border-white transition-all cursor-default">
                     <span className="font-oswald text-3xl font-bold">ENERGÍA</span>
                  </div>
                  <div className="border border-slate-700 p-6 flex items-center justify-center hover:bg-white hover:text-slate-900 hover:border-white transition-all cursor-default">
                     <span className="font-oswald text-3xl font-bold">AUTOMOTRIZ</span>
                  </div>
                  <div className="border border-slate-700 p-6 flex items-center justify-center hover:bg-white hover:text-slate-900 hover:border-white transition-all cursor-default">
                     <span className="font-oswald text-3xl font-bold">CONSTRUCCIÓN</span>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default About;