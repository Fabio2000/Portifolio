import React, { useState } from "react";
import { FaCode, FaCalendarAlt, FaBolt, FaWallet, FaHandPointer } from "react-icons/fa"; // Importei o calendário para o SaaS
import './project.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import tiringaStore from '../../imgs/tiringaStore.webp';
import vitalizeLogo from '../../imgs/vitalizeLogo.webp';
import { useLanguage } from '../../i18n/LanguageContext';

/**
 * Card com efeito de virar.
 * No desktop vira no hover; no celular (onde não existe hover) vira no toque,
 * senão os links do verso ficariam inalcançáveis. Enter/Espaço também viram.
 */
function ProjectCard({ frontClassName, front, title, subtitle, body, stack, links }) {
    const { t } = useLanguage();
    const [isFlipped, setIsFlipped] = useState(false);

    const flip = (event) => {
        // Clicar num link do verso não deve desvirar o card
        if (event.target.closest('a')) return;
        setIsFlipped((flipped) => !flipped);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setIsFlipped((flipped) => !flipped);
        }
    };

    return (
        <div className="col-sm-12 col-md-6 col-lg-5 mb-4">
            <div
                className={`card-container ${isFlipped ? 'is-flipped' : ''}`}
                onClick={flip}
                onKeyDown={handleKeyDown}
                role="button"
                tabIndex={0}
                aria-pressed={isFlipped}
                aria-label={`${title} — ${subtitle}`}
            >
                <div className="card">
                    <div className={`card-front ${frontClassName || ''}`}>
                        {front}
                        <span className="card-hint" aria-hidden="true">
                            <FaHandPointer size={11} /> {t('projetos.hint')}
                        </span>
                    </div>
                    <div className="card-back text-bg-dark" aria-hidden={!isFlipped}>
                        <h2>{title}</h2>
                        <h5>{subtitle}</h5>
                        <p>{body}</p>
                        <p className="tech-stack">{stack}</p>
                        <div className="d-grid gap-2 col-8 mx-auto mt-3">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={link.className}
                                    /* Enquanto o verso está escondido, o link sai da ordem de tabulação */
                                    tabIndex={isFlipped ? 0 : -1}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Project() {
    const { t } = useLanguage();

    return (
        <section className="project container pt-5 pb-5" id="projectContainer">
            <div className="text-center mb-5">
                <h1><FaCode size={50} style={{ marginRight: '15px', color: 'var(--heading)' }} /> {t('projetos.title')}</h1>
            </div>

            <div className="row justify-content-center" id="cardsContainer">

                {/* PROJETO 1: RAINFLOW (SaaS Autoral) */}
                <ProjectCard
                    frontClassName="no-image-front"
                    front={
                        /* RECRIANDO SUA LOGO AQUI */
                        <div className="rainflow-logo-container">
                            <div className="rainflow-icon-wrapper">
                                <FaCalendarAlt className="rainflow-main-icon" />
                                <div className="rainflow-zap-badge">
                                    <FaBolt className="rainflow-zap-icon" />
                                </div>
                            </div>
                            <h1 className="rainflow-title">
                                RAIN<span className="rainflow-highlight">FLOW</span>
                            </h1>
                            <div className="rainflow-subtitle">
                                <div className="rainflow-line"></div>
                                <p>BUSINESS SUITE</p>
                                <div className="rainflow-line"></div>
                            </div>
                        </div>
                    }
                    title="RainFlow SaaS"
                    subtitle={t('projetos.rainflow.subtitle')}
                    body={t('projetos.rainflow.body')}
                    stack="React.js • PHP • Stripe • MySQL"
                    links={[
                        { href: 'https://agendamento.rainstore.net', label: t('projetos.rainflow.cta'), className: 'btn btn-outline-warning' },
                    ]}
                />

                {/* PROJETO 2: TIRINGA STORE */}
                <ProjectCard
                    front={<img src={tiringaStore} className="img-fluid" alt="E-commerce TiringaStore" loading="lazy" decoding="async" />}
                    title="TiringaStore"
                    subtitle={t('projetos.tiringa.subtitle')}
                    body={t('projetos.tiringa.body')}
                    stack="Next.js • Bootstrap • MongoDB • Node.js"
                    links={[
                        { href: 'https://tiringastore.vercel.app/', label: t('projetos.tiringa.cta'), className: 'btn btn-outline-info' },
                        { href: 'https://github.com/Fabio2000/tiringa-store', label: t('projetos.tiringa.code'), className: 'btn btn-outline-light' },
                    ]}
                />

                {/* PROJETO 3: FINANÇASFLOW (Blog Autoral) */}
                <ProjectCard
                    frontClassName="no-image-front financas-front"
                    front={
                        <div className="financas-logo-container">
                            <div className="financas-icon-wrapper">
                                <FaWallet className="financas-main-icon" />
                            </div>
                            <h1 className="financas-title">
                                Finanças<span className="financas-highlight">Flow</span>
                            </h1>
                            <div className="financas-subtitle">
                                <div className="financas-line"></div>
                                <p>BLOG FINANCEIRO</p>
                                <div className="financas-line"></div>
                            </div>
                        </div>
                    }
                    title="FinançasFlow"
                    subtitle={t('projetos.financas.subtitle')}
                    body={t('projetos.financas.body')}
                    stack="React • TypeScript • Tailwind • Node.js"
                    links={[
                        { href: 'https://blog.rainflow.com.br/', label: t('projetos.financas.cta'), className: 'btn btn-emerald' },
                    ]}
                />

                {/* PROJETO 4: VITALIZE CONSULTA (Freelancer) */}
                <ProjectCard
                    frontClassName="no-image-front vitalize-front"
                    front={
                        <div className="vitalize-logo-container">
                            <img src={vitalizeLogo} className="vitalize-logo" alt="Logo Vitalize Consulta" loading="lazy" decoding="async" />
                            <div className="vitalize-gold-line"></div>
                            <div className="vitalize-subtitle">
                                <p>ODONTOLOGIA</p>
                            </div>
                        </div>
                    }
                    title="Vitalize Consulta"
                    subtitle={t('projetos.vitalize.subtitle')}
                    body={t('projetos.vitalize.body')}
                    stack="HTML5 • CSS3 • JavaScript • Cloudflare"
                    links={[
                        { href: 'https://vitalizeconsulta.com.br/', label: t('projetos.vitalize.cta'), className: 'btn btn-gold' },
                    ]}
                />

            </div>
        </section>
    );
}
