import React from "react";
import './resumo.css'
import { FaCode } from "react-icons/fa6"; // Padronizando para react-icons

function Resumo() {
    return (
        <section className="geral" id="resumo">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>

            <div className="resumo-content">
                <h1><FaCode size={45} style={{ marginRight: '10px' }} /> Resumo Profissional</h1>

                <div className="resumo-text">
                    <p>Desenvolvedor Full Stack e Analista Pleno com experiência sólida na criação e manutenção de aplicações web. Com forte foco em resolução ágil de problemas, possuo domínio prático em ecossistemas baseados em JavaScript (React.js, Node.js, Angular) e PHP, além de sólida base em Python, HTML e CSS.</p>

                    <p>Construí uma base técnica robusta ao longo de 4 anos atuando como Analista de Suporte na TM Informática, onde fui responsável por garantir a estabilidade e a evolução contínua de sistemas. Hoje, como desenvolvedor autônomo, lidero projetos de ponta a ponta.</p>

                    <p>Como destaque da minha visão de produto, sou o fundador e desenvolvedor principal do RainFlow (agendamento.rainstore.net), um software SaaS de agendamento de elite. Neste projeto, gerencio todo o ciclo de vida da aplicação: desde a configuração de infraestrutura e domínios até a construção da arquitetura de backend, com disparos de notificações automatizadas e gestão de clientes.</p>

                    <p>Focado em entregar código limpo, escalável e centrado no usuário, possuo uma visão estratégica sobre arquitetura de software. Em constante evolução, busco sempre as melhores práticas do mercado, com um forte interesse e direcionamento de estudos voltados para a área de Segurança da Informação.</p>
                </div>
            </div>
        </section>
    )
}

export default Resumo;