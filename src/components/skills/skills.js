import React from "react";
import './skills.css'
import { Progress } from 'reactstrap';
import { UserList } from "@phosphor-icons/react";
import { FaHtml5, FaCss3 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoPython } from "react-icons/io5";
import { SiMysql, SiNextdotjs, SiBootstrap, SiMongodb } from "react-icons/si";
import { FaNode, FaReact } from "react-icons/fa";
import {Button} from 'reactstrap';

const seila = [{color: '#264de4'}]


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
            <div className="container" id="SkillsButtons">
                <div className="row">
                    <div className="col-md-4">
                    <Button
                    color="primary"
                    disabled
                  >
                    <FaHtml5 size={40} color="red"/>
                    <strong>HTML 5</strong>
                  </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills