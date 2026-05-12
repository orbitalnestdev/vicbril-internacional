import React from 'react';

interface CertificationIconProps {
  size?: number;
  color?: string;
}

const iconColor = '#2d3a3a';

// IRAM certification
const IRAMIcon: React.FC<CertificationIconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" stroke={iconColor} strokeWidth="2.5" fill="none" />
    <circle cx="32" cy="32" r="25" stroke={iconColor} strokeWidth="1.5" fill="none" />
    {/* IRAM text */}
    <text x="32" y="30" textAnchor="middle" fontSize="11" fontWeight="900" fill={iconColor} fontFamily="Arial, sans-serif">IRAM</text>
    {/* Conformidad text curved at top */}
    <path id="topArc" d="M 10,32 A 22,22 0 0,1 54,32" fill="none" />
    <text fontSize="5" fill={iconColor} fontWeight="700" fontFamily="Arial, sans-serif">
      <textPath href="#topArc" startOffset="50%" textAnchor="middle">CONFORMIDAD</textPath>
    </text>
    {/* Number at bottom */}
    <path id="bottomArc" d="M 54,32 A 22,22 0 0,1 10,32" fill="none" />
    <text fontSize="5" fill={iconColor} fontWeight="600" fontFamily="Arial, sans-serif">
      <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">CERTIFICADO</textPath>
    </text>
    {/* Check symbol */}
    <path d="M 24,36 L 29,41 L 40,30" stroke={iconColor} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// S-Mark (Seguridad)
const SeguridadIcon: React.FC<CertificationIconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill={iconColor} />
    <circle cx="32" cy="32" r="24" stroke="white" strokeWidth="1.5" fill="none" />
    <text x="32" y="38" textAnchor="middle" fontSize="26" fontWeight="900" fill="white" fontFamily="Georgia, serif">S</text>
    <path id="segTop" d="M 12,32 A 20,20 0 0,1 52,32" fill="none" />
    <text fontSize="4.5" fill="white" fontWeight="700" fontFamily="Arial, sans-serif">
      <textPath href="#segTop" startOffset="50%" textAnchor="middle">SEGURIDAD</textPath>
    </text>
    <path id="segBot" d="M 52,32 A 20,20 0 0,1 12,32" fill="none" />
    <text fontSize="4.5" fill="white" fontWeight="700" fontFamily="Arial, sans-serif">
      <textPath href="#segBot" startOffset="50%" textAnchor="middle">CERTIFICADA</textPath>
    </text>
  </svg>
);

// Bajos Humos
const BajosHumosIcon: React.FC<CertificationIconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Smoke wisps */}
    <path d="M 22,42 C 22,38 18,36 18,30 C 18,24 24,22 24,16" stroke={iconColor} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M 32,42 C 32,38 28,36 28,30 C 28,24 34,22 34,16" stroke={iconColor} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M 42,42 C 42,38 38,36 38,30 C 38,24 44,22 44,16" stroke={iconColor} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    {/* Cross / prohibition */}
    <line x1="12" y1="12" x2="52" y2="52" stroke={iconColor} strokeWidth="3" strokeLinecap="round"/>
    <line x1="52" y1="12" x2="12" y2="52" stroke={iconColor} strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

// Libre de Halógenos
const LibreHalogenosIcon: React.FC<CertificationIconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Leaf / eco symbol */}
    <path d="M 32,52 C 32,52 16,44 16,28 C 16,16 28,10 38,12 C 48,14 50,24 48,32 C 46,40 32,52 32,52 Z" fill={iconColor} opacity="0.9"/>
    {/* Leaf vein */}
    <path d="M 32,52 C 32,52 32,38 24,24" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M 30,40 C 34,36 38,34 40,28" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round"/>
    <path d="M 28,44 C 22,38 20,34 22,30" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round"/>
  </svg>
);

// Marcación Secuencial
const MarcacionSecuencialIcon: React.FC<CertificationIconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cable/wire shape */}
    <rect x="6" y="20" width="52" height="24" rx="4" stroke={iconColor} strokeWidth="2.5" fill="none"/>
    {/* Sequential marks */}
    <text x="16" y="37" textAnchor="middle" fontSize="14" fontWeight="900" fill={iconColor} fontFamily="Arial, sans-serif">1</text>
    <line x1="24" y1="22" x2="24" y2="42" stroke={iconColor} strokeWidth="1.5"/>
    <text x="32" y="37" textAnchor="middle" fontSize="14" fontWeight="900" fill={iconColor} fontFamily="Arial, sans-serif">2</text>
    <line x1="40" y1="22" x2="40" y2="42" stroke={iconColor} strokeWidth="1.5"/>
    <text x="48" y="37" textAnchor="middle" fontSize="14" fontWeight="900" fill={iconColor} fontFamily="Arial, sans-serif">3</text>
  </svg>
);

// Espacios Públicos Cerrados
const EspaciosPublicosIcon: React.FC<CertificationIconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Building */}
    <rect x="14" y="18" width="36" height="34" stroke={iconColor} strokeWidth="2.5" fill="none"/>
    {/* Roof */}
    <path d="M 10,18 L 32,6 L 54,18" stroke={iconColor} strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
    {/* Door */}
    <rect x="26" y="36" width="12" height="16" stroke={iconColor} strokeWidth="2" fill={iconColor} opacity="0.3"/>
    {/* Windows */}
    <rect x="19" y="24" width="8" height="7" stroke={iconColor} strokeWidth="1.5" fill="none"/>
    <rect x="37" y="24" width="8" height="7" stroke={iconColor} strokeWidth="1.5" fill="none"/>
    {/* People symbols */}
    <circle cx="29" cy="41" r="1.5" fill="white"/>
    <circle cx="35" cy="41" r="1.5" fill="white"/>
  </svg>
);

// Instalación Domiciliaria
const InstalacionDomiciliariaIcon: React.FC<CertificationIconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* House */}
    <path d="M 12,30 L 32,10 L 52,30" stroke={iconColor} strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
    <rect x="16" y="30" width="32" height="24" stroke={iconColor} strokeWidth="2.5" fill="none"/>
    {/* Door */}
    <rect x="27" y="38" width="10" height="16" stroke={iconColor} strokeWidth="2" fill="none"/>
    <circle cx="35" cy="46" r="1" fill={iconColor}/>
    {/* Window */}
    <rect x="19" y="33" width="6" height="6" stroke={iconColor} strokeWidth="1.5" fill="none"/>
    <line x1="22" y1="33" x2="22" y2="39" stroke={iconColor} strokeWidth="1"/>
    <line x1="19" y1="36" x2="25" y2="36" stroke={iconColor} strokeWidth="1"/>
    <rect x="39" y="33" width="6" height="6" stroke={iconColor} strokeWidth="1.5" fill="none"/>
    <line x1="42" y1="33" x2="42" y2="39" stroke={iconColor} strokeWidth="1"/>
    <line x1="39" y1="36" x2="45" y2="36" stroke={iconColor} strokeWidth="1"/>
  </svg>
);

// No Propagación de Incendio
const NoPropagacionIcon: React.FC<CertificationIconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Flame */}
    <path d="M 32,8 C 32,8 44,20 44,34 C 44,42 38,50 32,50 C 26,50 20,42 20,34 C 20,20 32,8 32,8 Z" fill={iconColor} opacity="0.85"/>
    {/* Inner flame */}
    <path d="M 32,24 C 32,24 38,30 38,36 C 38,40 35,44 32,44 C 29,44 26,40 26,36 C 26,30 32,24 32,24 Z" fill="white" opacity="0.6"/>
    {/* Prohibition circle + line */}
    <circle cx="32" cy="32" r="26" stroke={iconColor} strokeWidth="2.5" fill="none"/>
    <line x1="14" y1="50" x2="50" y2="14" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

// Temperatura de Servicio
const TemperaturaIcon: React.FC<CertificationIconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Large temperature text */}
    <text x="32" y="38" textAnchor="middle" fontSize="26" fontWeight="900" fill={iconColor} fontFamily="Arial, sans-serif">70</text>
    {/* Degree symbol */}
    <circle cx="48" cy="18" r="4" stroke={iconColor} strokeWidth="2" fill="none"/>
    {/* C */}
    <text x="56" y="42" textAnchor="middle" fontSize="16" fontWeight="400" fill={iconColor} fontFamily="Arial, sans-serif" fontStyle="italic">c</text>
    {/* Underline */}
    <line x1="16" y1="48" x2="48" y2="48" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Cuerdas Flexibles
const CuerdasFlexiblesIcon: React.FC<CertificationIconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Flexible cable/cord wave */}
    <path d="M 16,16 C 16,16 48,16 48,32 C 48,48 16,48 16,48" stroke={iconColor} strokeWidth="3" fill="none" strokeLinecap="round"/>
    <path d="M 20,20 C 20,20 44,20 44,32 C 44,44 20,44 20,44" stroke={iconColor} strokeWidth="2" fill="none" strokeLinecap="round"/>
    {/* Arrow tips indicating flexibility */}
    <path d="M 14,14 L 16,16 L 18,14" stroke={iconColor} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 14,50 L 16,48 L 18,50" stroke={iconColor} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Map certification id to component and label
const certificationMap: Record<string, { icon: React.FC<CertificationIconProps>; label: string }> = {
  'iram': { icon: IRAMIcon, label: 'IRAM' },
  'seguridad': { icon: SeguridadIcon, label: 'Seguridad' },
  'bajos-humos': { icon: BajosHumosIcon, label: 'Bajos humos' },
  'libre-halogenos': { icon: LibreHalogenosIcon, label: 'Libre de\nhalógenos' },
  'marcacion-secuencial': { icon: MarcacionSecuencialIcon, label: 'Marcación\nsecuencial' },
  'espacios-publicos': { icon: EspaciosPublicosIcon, label: 'Espacios públicos\ncerrados' },
  'instalacion-domiciliaria': { icon: InstalacionDomiciliariaIcon, label: 'Instalación\ndomiciliaria' },
  'no-propagacion': { icon: NoPropagacionIcon, label: 'No propagación\nde incendio' },
  'temperatura-servicio': { icon: TemperaturaIcon, label: 'Temperatura\nde servicio' },
  'cuerdas-flexibles': { icon: CuerdasFlexiblesIcon, label: 'Cuerdas\nflexibles' },
};

interface CertificationIconsProps {
  certifications: string[];
}

const CertificationIcons: React.FC<CertificationIconsProps> = ({ certifications }) => {
  if (!certifications || certifications.length === 0) return null;

  return (
    <div className="certification-icons-grid">
      {certifications.map((certId) => {
        const cert = certificationMap[certId];
        if (!cert) return null;
        const IconComponent = cert.icon;
        return (
          <div key={certId} className="certification-icon-item">
            <div className="certification-icon-wrapper">
              <IconComponent size={56} />
            </div>
            <span className="certification-icon-label">
              {cert.label.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CertificationIcons;
