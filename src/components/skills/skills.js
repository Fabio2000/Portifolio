import React from "react";
import './skills.css'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Progress
} from 'reactstrap';
import { UserList } from "@phosphor-icons/react";
import { FaHtml5, FaCss3 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoPython } from "react-icons/io5";
import { SiMysql, SiNextdotjs, SiBootstrap, SiMongodb } from "react-icons/si";
import { FaNode, FaReact } from "react-icons/fa";





function Skills() {
    return (
        <div class="container text-center" id="Habilidades">
            <div class="row">
                <div class="col-12">
                    <h1>
                        <UserList size={70}
                            color="#203246"
                            weight="bold" />
                        Habilidades
                    </h1>
                </div>

            </div>
            <section id="skills">
                <div class="container text-center">
                    <div class="row">
                        <div class="col-sm-6 col-md-5 col-lg-6">
                            <div class="container text-center">
                                <div class="row" id="cardHTML">
                                    <div class="col-md-4">
                                        <Card id="cardIcon"
                                            color="light"
                                            style={{
                                                width: '18rem'
                                            }}
                                        >
                                            <FaHtml5 size={90} />
                                            <CardBody>
                                                <CardTitle tag="h5">
                                                    HTML 5
                                                </CardTitle>
                                                <CardSubtitle>
                                                    <Progress
                                                        style={{ width: '10rem' }}
                                                        animated
                                                        className="my-3"
                                                        value={85}
                                                    />
                                                </CardSubtitle>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
                            <div class="container text-center">
                                <div class="row" id="cardCSS">
                                    <div class="col-md-4">
                                        <Card id="cardIcon"
                                            color="light"
                                            style={{
                                                width: '18rem'
                                            }}
                                        >
                                            <FaCss3 size={90} />
                                            <CardBody>
                                                <CardTitle tag="h5">
                                                    CSS
                                                </CardTitle>
                                                <CardSubtitle>
                                                    <Progress
                                                        style={{ width: '10rem' }}
                                                        animated
                                                        className="my-3"
                                                        value={50}
                                                    />
                                                </CardSubtitle>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container text-center">
                    <div class="row">
                        <div class="col-sm-6 col-md-5 col-lg-6">
                            <div class="container text-center">
                                <div class="row" id="cardHTML">
                                    <div class="col-md-4">
                                        <Card id="cardIcon"
                                            color="light"
                                            style={{
                                                width: '18rem'
                                            }}
                                        >
                                            <RiJavascriptFill size={90} />
                                            <CardBody>
                                                <CardTitle tag="h5">
                                                    JavaScript
                                                </CardTitle>
                                                <CardSubtitle>
                                                    <Progress
                                                        style={{ width: '10rem' }}
                                                        animated
                                                        className="my-3"
                                                        value={50}
                                                    />
                                                </CardSubtitle>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
                            <div class="container text-center">
                                <div class="row" id="cardHTML">
                                    <div class="col-md-4">
                                        <Card id="cardIcon"
                                            color="light"
                                            style={{
                                                width: '18rem'
                                            }}
                                        >
                                            <IoLogoPython size={90} />
                                            <CardBody>
                                                <CardTitle tag="h5">
                                                    Python
                                                </CardTitle>
                                                <CardSubtitle>
                                                    <Progress
                                                        style={{ width: '10rem' }}
                                                        animated
                                                        className="my-3"
                                                        value={50}
                                                    />
                                                </CardSubtitle>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container text-center">
                    <div class="row">
                        <div class="col-sm-6 col-md-5 col-lg-6">
                            <div class="container text-center">
                                <div class="row" id="cardHTML">
                                    <div class="col-md-4">
                                        <Card id="cardIcon"
                                            color="light"
                                            style={{
                                                width: '18rem'
                                            }}
                                        >
                                            <SiMysql size={80} />
                                            <CardBody>
                                                <CardTitle tag="h5">
                                                    SQL
                                                </CardTitle>
                                                <CardSubtitle>
                                                    <Progress
                                                        style={{ width: '10rem' }}
                                                        animated
                                                        className="my-3"
                                                        value={65}
                                                    />
                                                </CardSubtitle>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
                            <div class="container text-center">
                                <div class="row" id="cardNode">
                                    <div class="col-md-4">
                                        <Card id="cardIcon"
                                            color="light"
                                            style={{
                                                width: '18rem'
                                            }}
                                        >
                                            <FaNode size={80} />
                                            <CardBody>
                                                <CardTitle tag="h5">
                                                    Node.js
                                                </CardTitle>
                                                <CardSubtitle>
                                                    <Progress
                                                        style={{ width: '10rem' }}
                                                        animated
                                                        className="my-3"
                                                        value={85}
                                                    />
                                                </CardSubtitle>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container text-center">
                    <div class="row">
                        <div class="col-sm-6 col-md-5 col-lg-6">
                            <div class="container text-center">
                                <div class="row" id="cardNext">
                                    <div class="col-md-4">
                                        <Card id="cardIcon"
                                            color="light"
                                            style={{
                                                width: '18rem'
                                            }}
                                        >
                                            <SiNextdotjs size={80} />
                                            <CardBody>
                                                <CardTitle tag="h5">
                                                    Next.js
                                                </CardTitle>
                                                <CardSubtitle>
                                                    <Progress
                                                        style={{ width: '10rem' }}
                                                        animated
                                                        className="my-3"
                                                        value={60}
                                                    />
                                                </CardSubtitle>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
                            <div class="container text-center">
                                <div class="row" id="cardHTML">
                                    <div class="col-md-4">
                                        <Card id="cardIcon"
                                            color="light"
                                            style={{
                                                width: '18rem'
                                            }}
                                        >
                                            <SiBootstrap size={90} />
                                            <CardBody>
                                                <CardTitle tag="h5">
                                                    Bootstrap
                                                </CardTitle>
                                                <CardSubtitle>
                                                    <Progress
                                                        style={{ width: '10rem' }}
                                                        animated
                                                        className="my-3"
                                                        value={85}
                                                    />
                                                </CardSubtitle>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container text-center">
                    <div class="row">
                        <div class="col-sm-6 col-md-5 col-lg-6">
                            <div class="container text-center">
                                <div class="row" id="cardHTML">
                                    <div class="col-md-4">
                                        <Card id="cardIcon"
                                            color="light"
                                            style={{
                                                width: '18rem'
                                            }}
                                        >
                                            <SiMongodb size={90} />
                                            <CardBody>
                                                <CardTitle tag="h5">
                                                    MongoDB
                                                </CardTitle>
                                                <CardSubtitle>
                                                    <Progress
                                                        style={{ width: '10rem' }}
                                                        animated
                                                        className="my-3"
                                                        value={50}
                                                    />
                                                </CardSubtitle>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
                            <div class="container text-center">
                                <div class="row" id="cardHTML">
                                    <div class="col-md-4">
                                        <Card id="cardIcon"
                                            color="light"
                                            style={{
                                                width: '18rem'
                                            }}
                                        >
                                            <FaReact size={90}/>
                                            <CardBody>
                                                <CardTitle tag="h5">
                                                    React JS
                                                </CardTitle>
                                                <CardSubtitle>
                                                    <Progress
                                                        style={{ width: '10rem' }}
                                                        animated
                                                        className="my-3"
                                                        value={85}
                                                    />
                                                </CardSubtitle>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills