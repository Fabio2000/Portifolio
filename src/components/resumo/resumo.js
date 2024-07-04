import React from "react";
import './resumo.css'
import { Code } from "@phosphor-icons/react";

function Resumo() {
    return (
        <section className="geral">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div>
                <h1><Code size={55} height="bold" /> Resumo Profissional</h1>
            </div>
            <div className="resumo">
                <h5>Sou um entusiasta da programação e estudo na área de desenvolvimento desde 2018. Durante esse período, tenho explorado várias linguagens de programação, adquirindo familiaridade especial com Python, JavaScript, React.js, HTML, CSS. Meu objetivo é, fazer pós graduação em segurança da informação.</h5>
                <h5>Tenho experiência prática em projetos profissionais, com as seguintes tecnologias: Node.js, HTML, CSS, JavaScript, Bootstrap, Angular e WordPress. Atualmente trabalho como Suporte Analista Júnior na TM Informática. Continuo aperfeiçoando minhas habilidades e sempre me esforço para resolver problemas em equipe de maneira pró-ativa.</h5>
                <h5>Além do desenvolvimento, tenho interesse em explorar outras áreas relacionadas à programação e estou constantemente buscando aprimorar minhas habilidades. Sou pró-ativo na resolução de problemas e valorizo o trabalho em equipe.
                    Estou entusiasmado com a perspectiva de ingressar na área de desenvolvimento e estou comprometido em continuar aprendendo e crescendo profissionalmente.</h5>
            </div>
        </section>
    )
}

export default Resumo