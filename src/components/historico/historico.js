import React from "react";
import { FaBriefcase } from "react-icons/fa6";
import "./historico.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useLanguage } from '../../i18n/LanguageContext';

function Historico() {
    const { t } = useLanguage();

    // Cada experiência: chave da tradução, empresa (nome próprio, não traduz)
    // e o id do collapse do Bootstrap.
    const jobs = [
        { key: 'rainflow', company: 'RainFlow SaaS (agendamento.rainstore.net)', target: 'collapseRainflow', open: true },
        { key: 'tm', company: 'TM Informática', target: 'collapseTM', open: false },
        { key: 'redblock', company: 'RedBlock Solution', target: 'collapseRedBlock', open: false },
        { key: 'wolf', company: 'Wolf Company', target: 'collapseWolf', open: false },
    ];

    return (
        <section id="HistoricoContainer" className="container pt-5 pb-5">
            <div className="title-section text-center mb-5">
                <h1>
                    <FaBriefcase size={50} style={{ marginRight: '15px', color: '#00f2fe' }} />
                    {t('historico.title')}
                </h1>
            </div>

            <div className="accordion custom-accordion" id="accordionHistorico">
                {jobs.map((job) => (
                    <div className="accordion-item" key={job.key}>
                        <h2 className="accordion-header">
                            <button
                                className={`accordion-button ${job.open ? '' : 'collapsed'}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#${job.target}`}
                                aria-expanded={job.open}
                                aria-controls={job.target}
                            >
                                <div className="d-flex flex-column w-100">
                                    <strong>{t(`historico.${job.key}.role`)}</strong>
                                    <span className="date-badge">{t(`historico.${job.key}.date`)}</span>
                                </div>
                            </button>
                        </h2>
                        <div id={job.target} className={`accordion-collapse collapse ${job.open ? 'show' : ''}`}>
                            <div className="accordion-body">
                                <h5>{job.company}</h5>
                                <p>{t(`historico.${job.key}.body`)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Historico;
