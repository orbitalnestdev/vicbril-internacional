import React from 'react';

interface CertificationMapItem {
  image: string;
  label: string;
}

const certificationMap: Record<string, CertificationMapItem> = {
  'iram': { 
    image: '/images/cerficicaciones/SELLO IRAM.png', 
    label: 'IRAM' 
  },
  'seguridad': { 
    image: '/images/cerficicaciones/SELLO ARG.png', 
    label: 'Seguridad' 
  },
  'bajos-humos': { 
    image: '/images/cerficicaciones/BAJOS HUMOS.png', 
    label: 'Bajos humos' 
  },
  'libre-halogenos': { 
    image: '/images/cerficicaciones/LIBRE DE HALOGENOS.png', 
    label: 'Libre de halógenos' 
  },
  'marcacion-secuencial': { 
    image: '/images/cerficicaciones/MARCACION SECUENCIAL.png', 
    label: 'Marcación secuencial' 
  },
  'espacios-publicos': { 
    image: '/images/cerficicaciones/ESPACIOS PUBLICOS CERRADOS.png', 
    label: 'Espacios públicos cerrados' 
  },
  'instalacion-domiciliaria': { 
    image: '/images/cerficicaciones/INSTALACION DOMICILIARIA.png', 
    label: 'Instalación domiciliaria' 
  },
  'no-propagacion': { 
    image: '/images/cerficicaciones/NO PROPAGACION DE INCENDIOS.png', 
    label: 'No propagación de incendio' 
  },
  'temperatura-servicio': { 
    image: '/images/cerficicaciones/70 TEMPERATURA DE SERVICIO.png', 
    label: 'Temperatura de servicio' 
  },
  'cuerdas-flexibles': { 
    image: '/images/cerficicaciones/CUERDAS FLEXIBLES.png', 
    label: 'Cuerdas flexibles' 
  },
  'resistencia-abrasion': { 
    image: '/images/cerficicaciones/RESISTENCIA A LA ABRASION.png', 
    label: 'Resistencia a la abrasión' 
  },
  'resistencia-grasas': { 
    image: '/images/cerficicaciones/RESISTENCIAS A GRASAS Y ACEITES.png', 
    label: 'Resistencia a grasas' 
  },
  'conductor-tierra': { 
    image: '/images/cerficicaciones/CONDUCTOR DE TIERRA.png', 
    label: 'Conductor de tierra' 
  },
  'instalacion-industrial': { 
    image: '/images/cerficicaciones/INSTALACION INDUSTRIAL.png', 
    label: 'Instalación industrial' 
  }
};

interface CertificationIconsProps {
  certifications: string[];
}

const CertificationIcons: React.FC<CertificationIconsProps> = ({ certifications }) => {
  if (!certifications || certifications.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-6">
      {certifications.map((certId) => {
        const cert = certificationMap[certId];
        if (!cert) return null;
        
        return (
          <div key={certId} className="flex flex-col items-center group">
            <div className="w-28 h-28 p-2 bg-white rounded-sm shadow-sm border border-slate-50 group-hover:border-orange-200 transition-all flex items-center justify-center">
              <img 
                src={cert.image} 
                alt={cert.label}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CertificationIcons;
