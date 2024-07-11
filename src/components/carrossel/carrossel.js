import React, { useState } from 'react';
import { Carousel, Modal } from 'react-bootstrap';
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
];

function Carrossel() {

    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handleMouseEnter = () => {
        setPaused(true);
    };

    const handleMouseLeave = () => {
        setPaused(false);
    };

    const handleImageClick = (src) => {
        setModalImage(src);
        setModalShow(true);
    };

    return (
        <div className="" id="containerCarrossel">
            <article>
                <h1>Certificações</h1>
            </article>
            <section className="col-12" id="carrossel">
                <Carousel activeIndex={index} onSelect={handleSelect} interval={paused ? null : 3000}>
                    {items.map((item, idx) => (
                        <Carousel.Item
                            key={idx}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                className="d-block w-100 cert-image"
                                src={item.src}
                                alt={item.alt}
                                onClick={() => handleImageClick(item.src)}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
                <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
                    <Modal.Body>
                        <img src={modalImage} alt="Expanded" className="expanded-image" />
                    </Modal.Body>
                </Modal>
            </section >
        </div >
    )

}

export default Carrossel
