import React from "react";
import './skills.css'
import { Progress } from 'reactstrap';
import { UserList } from "@phosphor-icons/react";
import { FaHtml5, FaCss3 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoPython } from "react-icons/io5";
import { SiMysql, SiNextdotjs, SiBootstrap, SiMongodb } from "react-icons/si";
import { FaNode, FaReact } from "react-icons/fa";





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
                    <div className="col-sm-12 col-md-6 mb-5">
                        <div className="card">
                            <div className="card-body">
                                <FaHtml5 size={75} />
                                <div className="card-title">
                                    <h5>HTML 5</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-5">
                        <div className="card">
                            <div className="card-body">
                                <FaCss3 size={75} />
                                <div className="card-title">
                                    <h5>CSS</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-5">
                        <div className="card">
                            <div className="card-body">
                                <RiJavascriptFill size={75} />
                                <div className="card-title">
                                    <h5>JavaScript</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-5">
                        <div className="card">
                            <div className="card-body">
                                <IoLogoPython size={75} />
                                <div className="card-title">
                                    <h5>Python</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-5">
                        <div className="card">
                            <div className="card-body">
                                <FaReact size={75} />
                                <div className="card-title">
                                    <h5>React.js</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-5">
                        <div className="card">
                            <div className="card-body">
                                <FaNode size={75} />
                                <div className="card-title">
                                    <h5>Node.js</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-5">
                        <div className="card">
                            <div className="card-body">
                                <SiNextdotjs size={75} />
                                <div className="card-title">
                                    <h5>Next.js</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-5">
                        <div className="card">
                            <div className="card-body">
                                <SiBootstrap size={75} />
                                <div className="card-title">
                                    <h5>Bootstrap</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-5">
                        <div className="card">
                            <div className="card-body">
                                <SiMongodb size={75} />
                                <div className="card-title">
                                    <h5>MongoDB</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-5">
                        <div className="card">
                            <div className="card-body">
                                <SiMysql size={75} />
                                <div className="card-title">
                                    <h5>SQL</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills