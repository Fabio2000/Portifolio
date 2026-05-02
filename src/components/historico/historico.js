import React from "react";
import { FaBriefcase } from "react-icons/fa6";
import "./historico.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Historico() {
    return (
        <section id="HistoricoContainer" className="container pt-5 pb-5">
            <div className="title-section text-center mb-5">
                <h1>
                    <FaBriefcase size={50} style={{ marginRight: '15px', color: '#00f2fe' }} />
                    Histórico Profissional
                </h1>
            </div>
            
            <div className="accordion custom-accordion" id="accordionHistorico">
                
                {/* EXPERIÊNCIA 1 - RAINFLOW (SaaS Atual) */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseRainflow"
                            aria-expanded="true" /* Aberto por padrão para dar destaque */
                            aria-controls="collapseRainflow"
                        >
                            <div className="d-flex flex-column w-100">
                                <strong>Fundador & Desenvolvedor Full Stack</strong>
                                <span className="date-badge">Julho 2025 - Presente</span>
                            </div>
                        </button>
                    </h2>
                    <div id="collapseRainflow" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                            <h5>RainFlow SaaS (agendamento.rainflow.net)</h5>
                            <p>Idealização, desenvolvimento e gestão completa de um software SaaS de agendamento de elite. Atuação autônoma cobrindo todo o ciclo de vida do produto: configuração de infraestrutura web, desenvolvimento Front-end (React.js) e Back-end (PHP), integrações com APIs externas (pagamentos via Stripe, notificações automatizadas via WhatsApp Business) e otimização contínua da experiência do usuário (UX/UI).</p>
                        </div>
                    </div>
                </div>

                {/* EXPERIÊNCIA 2 - TM INFORMÁTICA */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTM"
                            aria-expanded="false"
                            aria-controls="collapseTM"
                        >
                            <div className="d-flex flex-column w-100">
                                <strong>Analista de Suporte e Desenvolvimento</strong>
                                <span className="date-badge">Abril 2021 - Julho 2025</span>
                            </div>
                        </button>
                    </h2>
                    <div id="collapseTM" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <h5>TM Informática</h5>
                            <p>Suporte técnico avançado a Sistemas de Informação Laboratorial (LIS) e Sistemas Informatizados de Gestão Hospitalar (HIS/ERP). Atuação direta na resolução de incidentes e evolução das plataformas utilizando Node.js, Pascal (Delphi), Oracle SQL, MongoDB e Redis. Realização de análises de integração e testes de APIs (REST/RESTful e SOAP) utilizando ferramentas como Postman e SOAP UI.</p>
                        </div>
                    </div>
                </div>

                {/* EXPERIÊNCIA 3 - REDBLOCK */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseRedBlock"
                            aria-expanded="false"
                            aria-controls="collapseRedBlock"
                        >
                            <div className="d-flex flex-column w-100">
                                <strong>Desenvolvedor Front-end & Mobile</strong>
                                <span className="date-badge">Setembro 2020 – Dezembro 2020</span>
                            </div>
                        </button>
                    </h2>
                    <div id="collapseRedBlock" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <h5>RedBlock Solution</h5>
                            <p>Desenvolvimento de aplicações e interfaces digitais. Atuação na criação de aplicativos mobile utilizando React Native e desenvolvimento de plataformas web corporativas com WordPress, HTML5, CSS3, Bootstrap e JavaScript.</p>
                        </div>
                    </div>
                </div>

                {/* EXPERIÊNCIA 4 - WOLF COMPANY */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseWolf"
                            aria-expanded="false"
                            aria-controls="collapseWolf"
                        >
                            <div className="d-flex flex-column w-100">
                                <strong>Desenvolvedor Web Front-end</strong>
                                <span className="date-badge">Outubro 2019 – Janeiro 2020</span>
                            </div>
                        </button>
                    </h2>
                    <div id="collapseWolf" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <h5>Wolf Company</h5>
                            <p>Criação e prototipação de interfaces de usuário (UI). Desenvolvimento de layouts responsivos focados na experiência do usuário utilizando HTML, CSS, JavaScript, Bootstrap e bibliotecas de ícones como FontAwesome.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Historico;