import React, { useEffect, useRef, useState } from 'react';
import { FaMoon, FaSun, FaChevronDown } from 'react-icons/fa';
import { useTheme } from './theme';
import { useLanguage, LANGUAGES } from '../../i18n/LanguageContext';
import { FLAG_BY_CODE } from './flags';
import './toggle.css';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const label = isDark ? t('toggle.light') : t('toggle.dark');

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

export function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const current = LANGUAGES.find((item) => item.code === lang) || LANGUAGES[0];
  const CurrentFlag = FLAG_BY_CODE[current.code];

  // Fecha ao clicar fora ou apertar Esc.
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const pick = (code) => {
    setLang(code);
    setIsOpen(false);
  };

  return (
    <div className="lang-switcher" ref={containerRef}>
      <button
        type="button"
        className="lang-current"
        onClick={() => setIsOpen((open) => !open)}
        title={t('toggle.language')}
        aria-label={t('toggle.language')}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <CurrentFlag />
        <span className="lang-code">{current.code.toUpperCase()}</span>
        <FaChevronDown size={10} className={`lang-caret ${isOpen ? 'open' : ''}`} />
      </button>

      {isOpen && (
        <ul className="lang-menu" role="listbox" aria-label={t('toggle.language')}>
          {LANGUAGES.map((item) => {
            const Flag = FLAG_BY_CODE[item.code];
            return (
              <li key={item.code}>
                <button
                  type="button"
                  className={`lang-option ${item.code === lang ? 'active' : ''}`}
                  onClick={() => pick(item.code)}
                  role="option"
                  aria-selected={item.code === lang}
                  lang={item.htmlLang}
                >
                  <Flag />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
