import React from "react";
import { Briefcase } from "@phosphor-icons/react";
import "./historico.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Historico() {
    return (
        <div class="container text-center" id="historico">
            <div class="row">
                <div class="col-12">
                    <h1>
                        <Briefcase
                            size={70}
                            color="#203246"
                            weight="bold" />
                        Histórico
                    </h1>
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseOne"
                                    aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseOne"
                                >
                                    Suporte analista <a> - Abril 2021 - Present</a>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <h5>TM Tecnologia</h5>
                                    <p>Análista suporte técnico de sistema em informação de laboratórial e sistema informatizado de gestão hospitalar com as tecnologias Node.js, Pascal(Delphi), OracleSQL, MongoDB, Redis, analise de API REST e RESTFULL usando SOAP UI e Postaman para teste das API`s</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseTwo"
                                >
                                    Desenvolvimento mobile e web front-end
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <h5>RedBlock Solution</h5>
                                    <p>Desenvolvimento mobile com react-native, WordPress, HTML, CSS, Botstrap e JavaScript
                                    </p>
                                    <a>Setembro 2020 – Dezembro 2020</a><br />
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseThree"
                                    aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseThree"
                                >
                                    Desenvolvimento web front-end
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <h5>Wolf Company</h5>
                                    <p>
                                        Desenvolvimento usando HTML, JavaScript, CSS, Bootstrap e FontAwersome
                                    </p>
                                    <a>Outubro 2019 – Janeiro 2020</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Historico;