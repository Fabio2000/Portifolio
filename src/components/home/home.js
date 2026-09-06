import React from 'react';
import './home.css'
import ReactTypingEffect from 'react-typing-effect';
import { useLanguage } from '../../i18n/LanguageContext';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

function Home() {
    const title = '< Hello World />'
    const { lang, t } = useLanguage();
    const prefersReducedMotion = usePrefersReducedMotion();
    const roles = t('home.roles');

    return (
        <section className="wrapper">
            <div className="stars"></div>
            <div className="stars2"></div>
            <div className="stars3"></div>
            <div id="title">
                <h1>{title}</h1>
                <h2>{t('home.greeting')}</h2>
                <h3>
                    {prefersReducedMotion ? (
                        /* Quem pediu menos movimento no sistema vê os cargos de
                           uma vez, sem a digitação em loop. */
                        roles.join(' • ')
                    ) : (
                        /* A key força o efeito de digitação a reiniciar ao trocar de idioma */
                        <ReactTypingEffect
                            key={lang}
                            text={roles}
                            speed={80}
                            eraseSpeed={40}
                            eraseDelay={2000}
                            typingDelay={1000}
                        />
                    )}
                </h3>
            </div>
        </section>
    )
}

export default Home;
