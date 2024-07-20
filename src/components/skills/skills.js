import React from "react";
import './skills.css';
import { FaHtml5, FaCss3, FaReact, FaNode } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoPython } from "react-icons/io5";
import { SiMysql, SiNextdotjs, SiBootstrap, SiMongodb } from "react-icons/si";
import { UserList } from "@phosphor-icons/react";
import { Button } from 'reactstrap';

const skills = [
  { name: 'HTML 5', icon: <FaHtml5 size={45} color="white" />, color: '#e34c26' },
  { name: 'CSS 3', icon: <FaCss3 size={45} color="white" />, color: '#264de4' },
  { name: 'JavaScript', icon: <RiJavascriptFill size={45} color="white" />, color: '#f0db4f' },
  { name: 'Python', icon: <IoLogoPython size={45} color="white" />, color: '#3776ab' },
  { name: 'MySQL', icon: <SiMysql size={45} color="white" />, color: '#4479a1' },
  { name: 'Next.js', icon: <SiNextdotjs size={45} color="white" />, color: '#000000' },
  { name: 'Bootstrap', icon: <SiBootstrap size={45} color="white" />, color: '#563d7c' },
  { name: 'MongoDB', icon: <SiMongodb size={45} color="white" />, color: '#47a248' },
  { name: 'Node.js', icon: <FaNode size={45} color="white" />, color: '#68a063' },
  { name: 'React', icon: <FaReact size={45} color="white" />, color: '#61dbfb' },
];

function Skills() {
  return (
    <div className="container" id="SkillsContainer">
      <div className="text-center">
        <h1>
          <UserList size={70} color="#203246" weight="bold" />
          Habilidades
        </h1>
      </div>
      <div className="row" id="SkillsButtons">
        {skills.map((skill, index) => (
          <div className="col-md-6 mb-3" key={index}>
            <Button
              style={{
                backgroundColor: skill.color,
                borderColor: skill.color,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                padding: '15px'
              }}
              className="skill-button"
            >
              {skill.icon}
              <strong className="ml-2">{skill.name}</strong>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
