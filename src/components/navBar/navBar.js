import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { HouseLine } from '@phosphor-icons/react';
import './navBar.css';

const NavBar = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('/'); // Estado para controlar o item ativo

  const toggle = () => setIsOpen(!isOpen);

  // Função para lidar com o clique nos itens do menu
  const handleItemClick = (path) => {
    setActiveItem(path);
    setIsOpen(false); // Fecha o Collapse após clicar em um item (opcional)
  };

  return (
    <header>
      <Navbar color="dark" dark expand="md" {...args} className="fixed-top">
        <div className="container">
          <NavbarBrand className='home' href="/">Home</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink 
                  href="/" 
                  className={`nav-item-link ${activeItem === '/' ? 'active' : ''}`} 
                  onClick={() => handleItemClick('/')}
                >
                  {!isOpen && <HouseLine weight="duotone" size={25} />}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  href="/resumo" 
                  className={`nav-item-link ${activeItem === '/resumo' ? 'active' : ''}`} 
                  onClick={() => handleItemClick('/resumo')}
                >
                  Resumo
                  <span className="nav-item-bar"></span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  href="/historico" 
                  className={`nav-item-link ${activeItem === '/historico' ? 'active' : ''}`} 
                  onClick={() => handleItemClick('/historico')}
                >
                  Histórico
                  <span className="nav-item-bar"></span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  href="/skills" 
                  className={`nav-item-link ${activeItem === '/skills' ? 'active' : ''}`} 
                  onClick={() => handleItemClick('/skills')}
                >
                  Skills
                  <span className="nav-item-bar"></span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  href="/formacao" 
                  className={`nav-item-link ${activeItem === '/formacao' ? 'active' : ''}`} 
                  onClick={() => handleItemClick('/formacao')}
                >
                  Formação
                  <span className="nav-item-bar"></span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  href="/projetos" 
                  className={`nav-item-link ${activeItem === '/projetos' ? 'active' : ''}`} 
                  onClick={() => handleItemClick('/projetos')}
                >
                  Projetos
                  <span className="nav-item-bar"></span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default NavBar;