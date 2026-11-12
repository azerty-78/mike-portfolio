import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { seo } from '../data/personalInfo';
import { translations } from './translations';

const LanguageContext = createContext(null);
const STORAGE_KEY = 'ml-portfolio-lang';

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') return 'fr';
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === 'en' || saved === 'fr' ? saved : 'fr';
  });

  const setLang = useCallback((next) => {
    setLangState(next === 'en' ? 'en' : 'fr');
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === 'fr' ? 'en' : 'fr'));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', seo[lang].description);
    document.title = seo[lang].title;
  }, [lang]);

  const t = useMemo(() => translations[lang], [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang,
      t,
    }),
    [lang, setLang, toggleLang, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}
