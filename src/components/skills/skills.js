import React from "react";
import './skills.css';
import { FaHtml5, FaReact, FaNodeJs, FaPhp, FaStripeS } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoPython } from "react-icons/io5";
import { SiMysql, SiNextdotjs, SiBootstrap, SiMongodb, SiWhatsapp } from "react-icons/si";

// Lista atualizada com as tecnologias do SaaS (RainFlow) e cores ajustadas.
// O Next.js nao recebe cor fixa: a logo e preta e precisa clarear no dark.
const skills = [
  { name: 'React.js', icon: <FaReact size={40} color="#61dbfb" />, color: '#61dbfb' },
  { name: 'PHP', icon: <FaPhp size={40} color="#777bb4" />, color: '#777bb4' },
  { name: 'Node.js', icon: <FaNodeJs size={40} color="#68a063" />, color: '#68a063' },
  { name: 'Next.js', icon: <SiNextdotjs size={40} className="adaptive-icon" />, color: 'var(--text-strong)' },
  { name: 'JavaScript', icon: <RiJavascriptFill size={40} color="#f0db4f" />, color: '#f0db4f' },
  { name: 'APIs (Stripe, etc)', icon: <FaStripeS size={40} color="#635bff" />, color: '#635bff' },
  { name: 'WhatsApp API', icon: <SiWhatsapp size={40} color="#25D366" />, color: '#25D366' },
  { name: 'MySQL', icon: <SiMysql size={40} color="#4479a1" />, color: '#4479a1' },
  { name: 'MongoDB', icon: <SiMongodb size={40} color="#47a248" />, color: '#47a248' },
  { name: 'Python', icon: <IoLogoPython size={40} color="#3776ab" />, color: '#3776ab' },
  { name: 'HTML5 & CSS3', icon: <FaHtml5 size={40} color="#e34c26" />, color: '#e34c26' },
  { name: 'Bootstrap', icon: <SiBootstrap size={40} color="#563d7c" />, color: '#563d7c' },
];

function Skills() {
  return (
    <section className="container pt-5 pb-5" id="SkillsContainer">
      <div className="text-center mb-5">
        <h1>
          <FaLaptopCode size={50} style={{ marginRight: '15px', color: 'var(--heading)' }} />
          Habilidades Técnicas
        </h1>
      </div>
      
      {/* Mudamos para um grid que exibe mais cards lado a lado */}
      <div className="row g-4" id="SkillsButtons">
        {skills.map((skill, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
            <div 
              className="skill-card"
              style={{ '--hover-color': skill.color }} /* Passa a cor da tecnologia para o CSS */
            >
              <div className="skill-icon">
                {skill.icon}
              </div>
              <strong>{skill.name}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;