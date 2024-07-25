import React from "react";
import { FaCode } from "react-icons/fa";
import './project.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import tiringaStore from '../../imgs/tiringaStore.png';

export default function Project() {
    return (
        <div className="project" id="projectContainer">
            <section>
                <h1><FaCode size={50} /> Projetos</h1>
            </section>
            <div className="container text-center">
                <div className="row justify-content-around" id="cardsContainer">
                    <div className="col-sm-12 col-lg-6 card-container">
                        <div className="card">
                            <div className="card-front">
                                <img src={tiringaStore} className="img-fluid" alt="E-commerce TiringaStore" />
                            </div>
                            <div className="card-back text-bg-dark">
                                <h2>TiringaStore E-commerce</h2>
                                <h5>Projeto da faculdade</h5>
                                <p>Projeto desenvolvido com as tecnologias Next.js, <br/>Bootstrap, MongoDB, Node.js</p>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button class="btn btn-outline-primary" type="button">Deploy</button>
                                    <button class="btn btn-outline-secondary" type="button">Código</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6 card-container">
                        <div className="card">
                            <div className="card-front">
                                <img src={tiringaStore} className="img-fluid" alt="..." />
                            </div>
                            <div className="card-back text-bg-dark">
                                <h2>Outro Projeto</h2>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button class="btn btn-outline-primary" type="button">Deploy</button>
                                    <button class="btn btn-outline-secondary" type="button">Código</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Adicione mais cards conforme necessário */}
                </div>
            </div>
        </div>
    );
}
