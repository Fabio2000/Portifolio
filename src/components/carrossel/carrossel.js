import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carrossel.css';
import { PiCertificateDuotone } from "react-icons/pi";
import { useLanguage } from '../../i18n/LanguageContext';

// Importações das suas imagens
import cert1 from '../../certificados/Linux.jpg';
import cert2 from '../../certificados/MySQLPython.jpg';
import cert3 from '../../certificados/OracleSQL.jpg';
import cert4 from '../../certificados/photoshop.jpg';
import cert5 from '../../certificados/python.jpg';
import cert6 from '../../certificados/ReactNative.jpg';
import cert7 from '../../certificados/certificado_etec.jpeg';
import cert8 from '../../certificados/ensinoSuperior.png';
// import cert8 from '../../certificados/ensinoSuperior.png'

function Carrossel() {
    const [isPaused, setIsPaused] = useState(false);
    const { t } = useLanguage();

    // Colocamos todos os certificados em uma lista
    const certificates = [cert1, cert2, cert3, cert4, cert7, cert5, cert6, cert8];

    // Duplicamos a lista para o efeito infinito funcionar sem "pular"
    const duplicatedCertificates = [...certificates, ...certificates];

    return (
        <section className="container-fluid px-0 pt-5 pb-5" id="containerCarrossel">
            <div className="text-center mb-5">
                <h1>
                    <PiCertificateDuotone size={50} style={{ marginRight: '15px', color: 'var(--heading)' }} />
                    {t('certificados.title')}
                </h1>
            </div>

            <div className="col-12 slider" id="carrossel">
                <div className={`slide-track ${isPaused ? 'paused' : ''}`}>
                    {duplicatedCertificates.map((cert, index) => (
                        <div
                            className='slide'
                            key={index}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            onClick={() => setIsPaused(!isPaused)}
                        >
                            <div className="cert-card">
                                <img src={cert} className="img-fluid" alt={`${t('certificados.alt')} ${index + 1}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Carrossel;