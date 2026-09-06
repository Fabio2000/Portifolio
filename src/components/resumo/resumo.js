import React from "react";
import './resumo.css'
import { FaCode } from "react-icons/fa6"; // Padronizando para react-icons
import { useLanguage } from '../../i18n/LanguageContext';

function Resumo() {
    const { t } = useLanguage();

    return (
        <section className="geral" id="resumo">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>

            <div className="resumo-content">
                <h1><FaCode size={45} style={{ marginRight: '10px' }} /> {t('resumo.title')}</h1>

                <div className="resumo-text">
                    <p>{t('resumo.p1')}</p>
                    <p>{t('resumo.p2')}</p>
                    <p>{t('resumo.p3')}</p>
                    <p>{t('resumo.p4')}</p>
                </div>
            </div>
        </section>
    )
}

export default Resumo;
