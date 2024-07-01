// Toggle.js
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Sun, Moon } from '@phosphor-icons/react';
import { GlobalStyle, lightTheme, darkTheme, ToggleContainer, ToggleButton } from './theme';

function Toggle() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div className="Toggle">
        <ToggleContainer onClick={toggleTheme}>
          <ToggleButton>
            {theme === 'light' ? <Sun color='gold' size={22} weight="fill" /> : <Moon size={18} weight="fill" />}
          </ToggleButton>
        </ToggleContainer>
      </div>
    </ThemeProvider>
  );
}

export default Toggle;
