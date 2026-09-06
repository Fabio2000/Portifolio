import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import { FaRegPaperPlane, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { useLanguage } from '../../i18n/LanguageContext';
import { ThemeToggle, LanguageSwitcher } from '../toggle/toggle';
import './navBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('/');
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const toggle = () => setIsOpen(!isOpen);

  const handleItemClick = (path) => {
    setActiveItem(path);
    setIsOpen(false);

    const element = document.getElementById(path.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // A casinha fica sozinha na esquerda; as seções vão centralizadas no desktop.
  const home = { path: '/home', label: t('nav.home'), icon: <FaHouse size={25} /> };

  const secoes = [
    { path: '/resumo', label: t('nav.resumo') },
    { path: '/Historico', label: t('nav.historico') },
    { path: '/Skills', label: t('nav.skills') },
    { path: '/Carrossel', label: t('nav.formacao') },
    { path: '/Projects', label: t('nav.projetos') },
  ];

  const social = [
    { href: 'https://drive.google.com/file/d/1Lcohf6x8pifMrrRllkQgB40GPW_h7nn0/view?usp=sharing', title: t('nav.curriculo'), icon: <FaRegPaperPlane size={25} /> },
    { href: 'https://www.linkedin.com/in/fabio-rodrigues-da-silva-308a53185/', title: 'LinkedIn', icon: <FaLinkedin size={25} /> },
    { href: 'https://github.com/Fabio2000/', title: 'GitHub', icon: <FaGithub size={25} /> },
    { href: 'mailto:frsilva2101@gmail.com', title: t('nav.email'), icon: <FaEnvelope size={25} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <Navbar color="dark" dark expand="lg" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          {/* Fora do Collapse: no celular idioma e tema ficam sempre à vista,
              sem precisar abrir o hambúrguer. */}
          <div className="nav-controls">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
          <NavbarToggler className='toggle' onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="nav-home" navbar>
              <NavItem>
                {/* <button> no lugar de um <a> sem href: assim o item recebe
                    foco por teclado e é anunciado corretamente. */}
                <button
                  type="button"
                  className={`nav-link nav-item-link ${activeItem === home.path ? 'active' : ''}`}
                  onClick={() => handleItemClick(home.path)}
                  aria-current={activeItem === home.path ? 'true' : undefined}
                  aria-label={home.label}
                >
                  {!isOpen && home.icon}
                </button>
              </NavItem>
            </Nav>
            <Nav className="nav-secoes" navbar>
              {secoes.map((item) => (
                <NavItem key={item.path}>
                  <button
                    type="button"
                    className={`nav-link nav-item-link ${activeItem === item.path ? 'active' : ''}`}
                    onClick={() => handleItemClick(item.path)}
                    aria-current={activeItem === item.path ? 'true' : undefined}
                  >
                    {item.label}
                    <span className="nav-item-bar"></span>
                  </button>
                </NavItem>
              ))}
            </Nav>
            <Nav className="icons">
              {social.map((item) => (
                <NavItem key={item.href}>
                  {/* Um <a> só, sem o NavLink por fora, que também renderiza <a> */}
                  <a
                    className="nav-link"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.title}
                    aria-label={item.title}
                  >
                    {item.icon}
                  </a>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default NavBar;
