// styles.js
import styled, { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#FFF',
  text: '#000',
  toggleBorder: '#434D57',
  background: '#999',
};

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transition: all 0.50s linear;
    padding-top: 2rem;
    
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.toggleBorder};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  width: 4rem;
  height: 2rem;
  position: relative;
  padding-top: 0.2rem;
`;

export const ToggleButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background};
  border-radius: 50%;
  height: 1.6rem;
  width: 1.6rem;
  transition: all 0.3s linear;
  position: absolute;
  top: 0.1rem;
  left: ${({ theme }) => (theme.body === '#FFF' ? '0.1rem' : 'calc(100% - 1.7rem)')};
`;
