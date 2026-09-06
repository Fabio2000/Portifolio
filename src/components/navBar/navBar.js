import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { FaRegPaperPlane, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { ThemeToggle } from '../toggle/toggle';
import './navBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('/');
  const [scrolled, setScrolled] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);

  const handleItemClick = (path) => {
    setActiveItem(path);
    setIsOpen(false);
    
    const element = document.getElementById(path.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      <Navbar color="dark" dark expand="md" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <NavbarToggler className='toggle' onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink
                  to="/home"
                  className={`nav-item-link ${activeItem === '/home' ? 'active' : ''}`}
                  onClick={() => handleItemClick('/home')}
                >
                  {!isOpen && <FaHouse size={25} />}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/resumo"
                  className={`nav-item-link ${activeItem === '/resumo' ? 'active' : ''}`}
                  onClick={() => handleItemClick('/resumo')}
                >
                  Resumo
                  <span className="nav-item-bar"></span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/Historico"
                  className={`nav-item-link ${activeItem === '/Historico' ? 'active' : ''}`}
                  onClick={() => handleItemClick('/Historico')}
                >
                  Histórico
                  <span className="nav-item-bar"></span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/Skills"
                  className={`nav-item-link ${activeItem === '/Skills' ? 'active' : ''}`}
                  onClick={() => handleItemClick('/Skills')}
                >
                  Skills
                  <span className="nav-item-bar"></span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/Carrossel"
                  className={`nav-item-link ${activeItem === '/Carrossel' ? 'active' : ''}`}
                  onClick={() => handleItemClick('/Carrossel')}
                >
                  Formação
                  <span className="nav-item-bar"></span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/Projects"
                  className={`nav-item-link ${activeItem === '/Projects' ? 'active' : ''}`}
                  onClick={() => handleItemClick('/Projects')}
                >
                  Projetos
                  <span className="nav-item-bar"></span>
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ms-auto icons">
              <NavItem>
                <NavLink>
                  <a href='https://drive.google.com/file/d/1Lcohf6x8pifMrrRllkQgB40GPW_h7nn0/view?usp=sharing' target='_blank' rel="noopener noreferrer">
                    <FaRegPaperPlane size={25} />
                  </a>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <a href='https://www.linkedin.com/in/fabio-rodrigues-da-silva-308a53185/' target='_blank' rel="noopener noreferrer">
                    <FaLinkedin size={25} />
                  </a>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <a href='https://github.com/Fabio2000/' target='_blank' rel="noopener noreferrer">
                    <FaGithub size={25} />
                  </a>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <a href="mailto:frsilva2101@gmail.com" target='_blank' rel="noopener noreferrer">
                    <FaEnvelope size={25} />
                  </a>
                </NavLink>
              </NavItem>
            </Nav>
            <div className="nav-controls">
              <ThemeToggle />
            </div>
          </Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default NavBar;