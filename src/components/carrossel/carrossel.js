import React, { useState } from 'react';
import './carrossel.css';
import { PiCertificateDuotone } from "react-icons/pi";
import { useLanguage } from '../../i18n/LanguageContext';
import Lightbox from './lightbox';

// Importações das suas imagens (versão leve, a que aparece no carrossel)
import cert1 from '../../certificados/Linux.webp';
import cert2 from '../../certificados/MySQLPython.webp';
import cert3 from '../../certificados/OracleSQL.webp';
import cert4 from '../../certificados/photoshop.webp';
import cert5 from '../../certificados/python.webp';
import cert6 from '../../certificados/ReactNative.webp';
import cert7 from '../../certificados/certificado_etec.webp';
import cert8 from '../../certificados/ensinoSuperior.webp';

// Versão em alta, baixada só quando alguém abre o certificado
import full1 from '../../certificados/full/Linux.webp';
import full2 from '../../certificados/full/MySQLPython.webp';
import full3 from '../../certificados/full/OracleSQL.webp';
import full4 from '../../certificados/full/photoshop.webp';
import full5 from '../../certificados/full/python.webp';
import full6 from '../../certificados/full/ReactNative.webp';
import full7 from '../../certificados/full/certificado_etec.webp';
import full8 from '../../certificados/full/ensinoSuperior.webp';

function Carrossel() {
    const [isPaused, setIsPaused] = useState(false);
    const [aberto, setAberto] = useState(null); // índice do certificado aberto
    const { t } = useLanguage();

    // Colocamos todos os certificados em uma lista
    const certificates = [cert1, cert2, cert3, cert4, cert7, cert5, cert6, cert8];
    const emAlta = [full1, full2, full3, full4, full7, full5, full6, full8];

    // Duplicamos a lista para o efeito infinito funcionar sem "pular"
    const duplicatedCertificates = [...certificates, ...certificates];

    // A trilha tem a lista duplicada, então o índice volta para o original
    const abrir = (index) => setAberto(index % certificates.length);
    const fechar = () => setAberto(null);
    const anterior = () => setAberto((i) => (i - 1 + certificates.length) % certificates.length);
    const proximo = () => setAberto((i) => (i + 1) % certificates.length);

    return (
        <section className="container-fluid px-0 pt-5 pb-5" id="containerCarrossel">
            <div className="text-center mb-5">
                <h1>
                    <PiCertificateDuotone size={50} style={{ marginRight: '15px', color: 'var(--heading)' }} />
                    {t('certificados.title')}
                </h1>
            </div>

            <div className="col-12 slider" id="carrossel">
                {/* A trilha também para enquanto o certificado está aberto */}
                <div className={`slide-track ${isPaused || aberto !== null ? 'paused' : ''}`}>
                    {duplicatedCertificates.map((cert, index) => {
                        const numero = (index % certificates.length) + 1;
                        return (
                            <div
                                className='slide'
                                key={index}
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                            >
                                {/* <button> em vez de div com onClick: assim o
                                    certificado é alcançável por teclado */}
                                <button
                                    type="button"
                                    className="cert-card"
                                    onClick={() => abrir(index)}
                                    aria-label={`${t('certificados.abrir')} — ${t('certificados.alt')} ${numero}`}
                                >
                                    <img
                                        src={cert}
                                        className="img-fluid"
                                        loading="lazy"
                                        decoding="async"
                                        alt={`${t('certificados.alt')} ${numero}`}
                                    />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

            {aberto !== null && (
                <Lightbox
                    itens={emAlta}
                    indice={aberto}
                    onFechar={fechar}
                    onAnterior={anterior}
                    onProximo={proximo}
                />
            )}
        </section>
    )
}

export default Carrossel;
