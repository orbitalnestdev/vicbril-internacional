import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Venden a particulares o solo a empresas?",
      a: "Nuestro enfoque principal es B2B (empresas, contratistas, distribuidores). Sin embargo, atendemos proyectos particulares si cumplen con los volúmenes mínimos de compra (rollos completos o carretes)."
    },
    {
      q: "¿Realizan envíos a todo México?",
      a: "Sí. Contamos con una red logística propia para la zona metropolitana y alianzas con transportistas de carga consolidada para envíos a cualquier estado de la República Mexicana."
    },
    {
      q: "¿Los conductores cuentan con certificación?",
      a: "Absolutamente. Todos nuestros productos cumplen con las normas oficiales mexicanas (NOM) y certificaciones ANCE. Entregamos carta de garantía y certificado de calidad en cada pedido."
    },
    {
      q: "¿Cuál es el tiempo de entrega promedio?",
      a: "Para material en stock, entregamos en 24-48 horas en zona metropolitana. Para pedidos foráneos, el tiempo promedio es de 3 a 5 días hábiles dependiendo del destino."
    },
    {
      q: "¿Manejan crédito?",
      a: "Ofrecemos condiciones de crédito a clientes recurrentes tras un proceso de validación comercial y financiera. Para primeras compras, el pago es de contado."
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
           <div className="inline-block p-3 rounded-full bg-blue-100 text-blue-900 mb-4">
              <HelpCircle size={32} />
           </div>
           <h1 className="text-4xl font-oswald font-bold text-slate-900 mb-4">PREGUNTAS FRECUENTES</h1>
           <p className="text-gray-600">Resolvemos tus dudas principales sobre nuestros procesos comerciales y logísticos.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-gray-50 transition"
              >
                <span className="font-bold text-slate-800 text-lg">{faq.q}</span>
                {openIndex === idx ? <Minus className="text-orange-500" /> : <Plus className="text-gray-400" />}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                   {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 rounded-lg p-8 text-center text-white">
           <h3 className="text-xl font-bold font-oswald mb-2">¿TIENES OTRA PREGUNTA?</h3>
           <p className="text-blue-200 mb-6">Nuestro equipo técnico está listo para ayudarte con especificaciones más complejas.</p>
           <a href="/contacto" className="inline-block bg-orange-600 text-white font-bold px-6 py-3 rounded hover:bg-orange-700 transition">
              CONTACTAR AHORA
           </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
