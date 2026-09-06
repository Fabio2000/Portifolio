import React from 'react';
import './home.css'
import ReactTypingEffect from 'react-typing-effect';
import { useLanguage } from '../../i18n/LanguageContext';

function Home() {
    const title = '< Hello World />'
    const { lang, t } = useLanguage();

    return (
        <section className="wrapper" id="home">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="title">
                <h1>{title}</h1>
                <h2>{t('home.greeting')}</h2>
                <h3>
                    {/* A key força o efeito de digitação a reiniciar ao trocar de idioma */}
                    <ReactTypingEffect
                        key={lang}
                        text={t('home.roles')}
                        speed={80}
                        eraseSpeed={40}
                        eraseDelay={2000}
                        typingDelay={1000}
                    />
                </h3>
            </div>
        </section>
    )
}

export default Home;
