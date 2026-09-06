import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import translations from './translations';

export const LANGUAGES = [
  { code: 'pt', label: 'Português', htmlLang: 'pt-BR' },
  { code: 'es', label: 'Español', htmlLang: 'es' },
  { code: 'en', label: 'English', htmlLang: 'en' },
];

const STORAGE_KEY = 'portifolio-lang';
const DEFAULT_LANG = 'pt';

const LanguageContext = createContext(null);

function readStoredLang() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) {
      return saved;
    }
  } catch (e) {
    /* localStorage bloqueado (aba anônima, etc): segue no idioma padrão */
  }
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readStoredLang);

  useEffect(() => {
    const current = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];
    document.documentElement.lang = current.htmlLang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* sem persistência, mas a troca continua funcionando na sessão */
    }
  }, [lang]);

  const value = useMemo(() => {
    // t('projetos.rainflow.cta') -> busca o texto pelo caminho, com fallback no português.
    const t = (path) => {
      const walk = (dict) =>
        path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), dict);
      const found = walk(translations[lang]);
      return found === undefined ? walk(translations[DEFAULT_LANG]) : found;
    };
    return { lang, setLang, t };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage precisa estar dentro de um LanguageProvider');
  }
  return context;
}
