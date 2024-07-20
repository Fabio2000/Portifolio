import React from "react";
import './skills.css'
import { Progress } from 'reactstrap';
import { UserList } from "@phosphor-icons/react";
import { FaHtml5, FaCss3 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoPython } from "react-icons/io5";
import { SiMysql, SiNextdotjs, SiBootstrap, SiMongodb } from "react-icons/si";
import { FaNode, FaReact } from "react-icons/fa";
import { Button } from 'reactstrap';



const skills = [
    { name: 'CSS', color: '#264de4', icon: 'https://path/to/css-icon.png' },
    { name: 'HTML5', color: '#e34c26', icon: 'https://path/to/html-icon.png' },
    { name: 'npm', color: '#cb3837', icon: 'https://path/to/npm-icon.png' },
    { name: 'React', color: '#61dbfb', icon: 'https://path/to/react-icon.png' },
    { name: 'TypeScript', color: '#007acc', icon: 'https://path/to/typescript-icon.png' },
    { name: 'git', color: '#f05032', icon: 'https://path/to/git-icon.png' },
    { name: 'Redux', color: '#764abc', icon: 'https://path/to/redux-icon.png' },
    { name: 'JavaScript', color: '#f0db4f', icon: 'https://path/to/javascript-icon.png' }
  ];




function Skills() {
    return (
        <div id="SkillsContainer">
            <div>
                <h1>
                    <UserList size={70}
                        color="#203246"
                        weight="bold" />
                    Habilidades
                </h1>
            </div>
            <div className="container" id="SkillsCards">
                <div className="row">
                {skills.map((skill, index) => (
          <Button
            key={index}
            style={{
              backgroundColor: skill.color,
              borderColor: skill.color,
              margin: '10px'
            }}
          >
            <img src={skill.icon} alt={skill.name} style={{ width: '24px', marginRight: '8px' }} />
            {skill.name}
          </Button>
        ))}
                </div>
            </div>

        </div>
    )
}

export default Skills