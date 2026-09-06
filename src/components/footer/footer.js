import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaRegPaperPlane } from 'react-icons/fa';
import './footer.css';
import { useLanguage } from '../../i18n/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (  
        <footer data-aos="fade-up" className="custom-footer pt-5 pb-4">
            <Container id='containerFooter'>
                <Row>
                    <Col className="col-lg-12 col-sm-12 text-center">
                        <h2 className='footer-title'>{t('footer.title')}</h2>
                        <p className="footer-subtitle">{t('footer.subtitle')}</p>
                    </Col>
                </Row>
                
                <Row className="mt-4">
                    <Col className="text-center">
                        <div className="social-links mb-4">
                            <a href='https://drive.google.com/file/d/1Lcohf6x8pifMrrRllkQgB40GPW_h7nn0/view?usp=sharing' target='_blank' rel="noopener noreferrer" title={t('nav.curriculo')}>
                                <FaRegPaperPlane className="social-icon resume-icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/fabio-rodrigues-da-silva-308a53185/" target='_blank' rel="noopener noreferrer" title="LinkedIn">
                                <FaLinkedinIn className="social-icon linkedin-icon" />
                            </a>
                            <a href="https://github.com/Fabio2000/" target='_blank' rel="noopener noreferrer" title="GitHub">
                                <FaGithub className="social-icon github-icon" />
                            </a>
                            <a href="mailto:frsilva2101@gmail.com" target='_blank' rel="noopener noreferrer" title={t('nav.email')}>
                                <FaEnvelope className="social-icon email-icon" />
                            </a>
                        </div>
                        
                        <div className="footer-divider"></div>
                        
                        <p className="copyright-text mb-0">
                            © {new Date().getFullYear()} Fabio Silva. {t('footer.rights')}
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}