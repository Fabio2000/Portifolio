import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FaRegPaperPlane } from "react-icons/fa";
import './footer.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Footer() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Duração da animação em milissegundos
          offset: 200, // Offset da animação em pixels
          once: false, // Se verdadeiro, a animação ocorre apenas uma vez
        });
      }, []);

    return (  
        <footer data-aos="fade-up" className="bg-dark text-white pt-5 pb-4">
            <Container id='containerFooter'>
                <Row>
                    <Col className="col-lg-12 col-sm-12">
                        <h1 className='text-center'><strong>Contato ✦ Redes Sociais</strong></h1>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col className="text-center">
                        <div className="mb-3">
                            <a href='https://drive.google.com/file/d/1TywNmCOI1wcMMNhLGTnwbMkSUOPaCJdf/view?usp=sharing' target='_blank' className="text-white me-3" rel="noopener noreferrer">
                                <FaRegPaperPlane size={45} />
                            </a>
                            <a href="https://www.linkedin.com/in/fabio-rodrigues-da-silva-308a53185/" className="text-white me-3">
                                <FaLinkedinIn size={45} />
                            </a>
                            <a href="https://github.com/Fabio2000/" className="text-white me-3">
                                <FaGithub size={45} />
                            </a>
                            <a href="mailto:frsilva2101@gmail.com" target='_blank' rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi text-white me-3 bi-envelope-at-fill" viewBox="0 0 16 16">
                                    <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                                    <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                                </svg>
                            </a>
                        </div>
                        <p className="mb-0">© {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
