import { createContext, useContext, useState } from 'react';
import { translations } from '../data/translations';
import { offer } from '../data/offer';

const LanguageContext = createContext();

// Remplace {clé} dans les chaînes (y compris dans les tableaux/objets de traduction)
const fill = (value, vars) => {
  if (typeof value === 'string') return value.replace(/\{(\w+)\}/g, (m, k) => vars[k] ?? m);
  if (Array.isArray(value)) return value.map((v) => fill(v, vars));
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, fill(v, vars)]));
  }
  return value;
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('FR');
  const t = (key, vars = {}) =>
    fill(translations[lang]?.[key] ?? translations.FR?.[key] ?? key, { delay: offer.mockupDelay, ...vars });
  const toggleLang = () => setLang((l) => (l === 'FR' ? 'EN' : 'FR'));
  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
