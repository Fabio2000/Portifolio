import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carrossel.css';
import { PiCertificateDuotone } from "react-icons/pi";
import cert1 from '../../certificados/Linux.jpg';
import cert2 from '../../certificados/MySQLPython.jpg';
import cert3 from '../../certificados/OracleSQL.jpg';
import cert4 from '../../certificados/photoshop.jpg';
import cert5 from '../../certificados/python.jpg';
import cert6 from '../../certificados/ReactNative.jpg';

function Carrossel() {
    const [isPaused, setIsPaused] = useState(false);

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    const handleClick = () => {
        setIsPaused(!isPaused);
    };

    return (
        <div className="" id="containerCarrossel">
            <article>
                <h1><PiCertificateDuotone size={70}/>Certificações</h1>
            </article>
            <section className="col-12 slider" id="carrossel">
                <div className={`slide-track ${isPaused ? 'paused' : ''}`}>
                    <div className='slide' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
                        <img src={cert1} className="img-fluid" alt="..." />
                    </div>
                    <div className='slide' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
                        <img src={cert2} className="img-fluid" alt="..." />
                    </div>
                    <div className='slide' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
                        <img src={cert3} className="img-fluid" alt="..." />
                    </div>
                    <div className='slide' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
                        <img src={cert4} className="img-fluid" alt="..." />
                    </div>
                    <div className='slide' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
                        <img src={cert5} className="img-fluid" alt="..." />
                    </div>
                    <div className='slide' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
                        <img src={cert6} className="img-fluid" alt="..." />
                    </div>
                    <div className='slide' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
                        <img src={cert1} className="img-fluid" alt="..." />
                    </div>
                    <div className='slide' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
                        <img src={cert2} className="img-fluid" alt="..." />
                    </div>
                    <div className='slide' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
                        <img src={cert3} className="img-fluid" alt="..." />
                    </div>
                    <div className='slide' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
                        <img src={cert4} className="img-fluid" alt="..." />
                    </div>
                    <div className='slide' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
                        <img src={cert5} className="img-fluid" alt="..." />
                    </div>
                    <div className='slide' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
                        <img src={cert6} className="img-fluid" alt="..." />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Carrossel;
