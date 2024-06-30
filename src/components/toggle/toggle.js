// App.js
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Sun, Moon } from '@phosphor-icons/react';
import { GlobalStyle, lightTheme, darkTheme, ToggleContainer, ToggleButton } from './theme';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div className="App">
        <ToggleContainer onClick={toggleTheme}>
          <ToggleButton>
            {theme === 'light' ? <Sun size={16} weight="fill" /> : <Moon size={16} weight="fill" />}
          </ToggleButton>
        </ToggleContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;
