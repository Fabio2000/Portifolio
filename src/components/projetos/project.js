import React from "react";
import { FaCode, FaCalendarAlt, FaBolt, FaWallet } from "react-icons/fa"; // Importei o calendário para o SaaS
import './project.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import tiringaStore from '../../imgs/tiringaStore.png';
import vitalizeLogo from '../../imgs/vitalizeLogo.png';

export default function Project() {
    return (
        <section className="project container pt-5 pb-5" id="projectContainer">
            <div className="text-center mb-5">
                <h1><FaCode size={50} style={{ marginRight: '15px', color: 'var(--heading)' }} /> Projetos</h1>
            </div>

            <div className="row justify-content-center" id="cardsContainer">

                {/* PROJETO 1: RAINFLOW (SaaS Autoral) */}
                <div className="col-sm-12 col-md-6 col-lg-5 card-container mb-4">
                    <div className="card">
                        <div className="card-front no-image-front">
                            {/* RECRIANDO SUA LOGO AQUI */}
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
                        </div>
                        <div className="card-back text-bg-dark">
                            <h2>RainFlow SaaS</h2>
                            <h5>Software Autoral</h5>
                            <p>SaaS de agendamento de elite com faturamento automatizado e notificações via WhatsApp.</p>
                            <p className="tech-stack">React.js • PHP • Stripe • MySQL</p>
                            <div className="d-grid gap-2 col-8 mx-auto mt-3">
                                <a target='_blank' rel="noreferrer" href="https://agendamento.rainstore.net" className="btn btn-outline-warning">Acessar Plataforma</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PROJETO 2: TIRINGA STORE */}
                <div className="col-sm-12 col-md-6 col-lg-5 card-container mb-4">
                    <div className="card">
                        <div className="card-front">
                            <img src={tiringaStore} className="img-fluid" alt="E-commerce TiringaStore" />
                        </div>
                        <div className="card-back text-bg-dark">
                            <h2>TiringaStore</h2>
                            <h5>Projeto Acadêmico</h5>
                            <p>E-commerce completo desenvolvido para conclusão de curso de desenvolvimento web.</p>
                            <p className="tech-stack">Next.js • Bootstrap • MongoDB • Node.js</p>
                            <div className="d-grid gap-2 col-8 mx-auto mt-3">
                                <a target='_blank' rel="noreferrer" href="https://tiringastore.vercel.app/" className="btn btn-outline-info">Ver Deploy</a>
                                <a target='_blank' rel="noreferrer" href="https://github.com/Fabio2000/tiringa-store" className="btn btn-outline-light">Ver Código</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PROJETO 3: FINANÇASFLOW (Blog Autoral) */}
                <div className="col-sm-12 col-md-6 col-lg-5 card-container mb-4">
                    <div className="card">
                        <div className="card-front no-image-front financas-front">
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
                        </div>
                        <div className="card-back text-bg-dark">
                            <h2>FinançasFlow</h2>
                            <h5>Blog Autoral</h5>
                            <p>Blog de educação financeira com artigos sobre economia, investimentos e organização pessoal.</p>
                            <p className="tech-stack">React • TypeScript • Tailwind • Node.js</p>
                            <div className="d-grid gap-2 col-8 mx-auto mt-3">
                                <a target='_blank' rel="noreferrer" href="https://blog.rainflow.com.br/" className="btn btn-emerald">Acessar Blog</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PROJETO 4: VITALIZE CONSULTA (Freelancer) */}
                <div className="col-sm-12 col-md-6 col-lg-5 card-container mb-4">
                    <div className="card">
                        <div className="card-front no-image-front vitalize-front">
                            <div className="vitalize-logo-container">
                                <img src={vitalizeLogo} className="vitalize-logo" alt="Logo Vitalize Consulta" />
                                <div className="vitalize-gold-line"></div>
                                <div className="vitalize-subtitle">
                                    <p>ODONTOLOGIA</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-back text-bg-dark">
                            <h2>Vitalize Consulta</h2>
                            <h5>Projeto Freelancer</h5>
                            <p>Site institucional para clínica odontológica em Taguatinga Norte (DF), com foco em performance e SEO.</p>
                            <p className="tech-stack">HTML5 • CSS3 • JavaScript • Cloudflare</p>
                            <div className="d-grid gap-2 col-8 mx-auto mt-3">
                                <a target='_blank' rel="noreferrer" href="https://vitalizeconsulta.com.br/" className="btn btn-gold">Ver Site</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
