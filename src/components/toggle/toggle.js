import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from './theme';
import './toggle.css';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  const label = isDark ? 'Ativar modo claro' : 'Ativar modo escuro';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      title={label}
      aria-label={label}
    >
      {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
}
