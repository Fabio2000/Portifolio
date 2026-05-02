import React from 'react';
import './home.css'
import ReactTypingEffect from 'react-typing-effect';

function Home() {
    const title = '< Hello World />'

    return (
        <section className="wrapper" id="home">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="title">
                <h1>{title}</h1>
                <h2>Sou o Fabio Silva</h2>
                <h3>
                    <ReactTypingEffect
                        text={[
                            'Analista Pleno.', 
                            'Desenvolvedor Full Stack.',
                            'Criador de Software SaaS.'
                        ]}
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