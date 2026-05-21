/* eslint-disable react-refresh/only-export-components -- context exports provider + hook */
import React, { createContext, useContext } from 'react';
import { translations } from '../translations/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const language = 'id';
  const changeLanguage = () => {};

  const t = (key, params = {}) => {
    const keys = key.split('.');
    let value = translations.id;
    for (const k of keys) {
      value = value?.[k];
    }
    if (typeof value !== 'string') return value || key;
    return Object.keys(params).reduce((str, param) => 
      str.replace(new RegExp(`\\{${param}\\}`, 'g'), params[param]), value) || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
