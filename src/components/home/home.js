import react from 'react';
import './home.css'
import ReactTypingEffect from 'react-typing-effect';


function Home() {

    const title = '< Hello World />'

    return (
        <section class="wrapper">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="title">
                <h1>{title}</h1>
                <h2>Sou o Fabio Silva</h2>
                <h3>
                    <ReactTypingEffect
                        text={['Analista de sistemas.', 'Desenvolvedor web.']}
                        speed={80}           // Velocidade de digitação
                        eraseSpeed={40}       // Velocidade de apagamento
                        eraseDelay={2000}     // Atraso antes de apagar
                        typingDelay={1000}    // Atraso antes de começar a digitar
                    />
                </h3>
            </div>
        </section>
    )
}

export default Home;