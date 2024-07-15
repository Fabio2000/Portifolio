import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carrossel.css'
import cert1 from '../../certificados/Linux.jpg';
import cert2 from '../../certificados/MySQLPython.jpg';
import cert3 from '../../certificados/OracleSQL.jpg';
import cert4 from '../../certificados/photoshop.jpg';
import cert5 from '../../certificados/python.jpg';
import cert6 from '../../certificados/ReactNative.jpg';



const items = [
    { src: cert1, alt: 'Certificado 1' },
    { src: cert2, alt: 'Certificado 2' },
    { src: cert3, alt: 'Certificado 3' },
    { src: cert4, alt: 'Certificado 4' },
    { src: cert5, alt: 'Certificado 5' },
    { src: cert6, alt: 'Certificado 6' },
]

function Carrossel() {
    return (
        <div className="" id="containerCarrossel">
            <article>
                <h1>Certificações</h1>
            </article>
            <section className="col-12 slider" id="carrossel">
                <div className='slide-track'>
                    <div className='slide'>
                    <img src={cert1} class="img-fluid" alt="..."/>
                    </div>
                    <div className='slide'>
                    <img src={cert2} class="img-fluid" alt="..."/>
                    </div>
                    <div className='slide'>
                    <img src={cert3} class="img-fluid" alt="..."/>
                    </div>
                    <div className='slide'>
                    <img src={cert4} class="img-fluid" alt="..."/>
                    </div>
                    <div className='slide'>
                    <img src={cert5} class="img-fluid" alt="..."/>
                    </div>
                    <div className='slide'>
                    <img src={cert6} class="img-fluid" alt="..."/>
                    </div>
                </div>
            </section >
        </div >
    )

}

export default Carrossel
