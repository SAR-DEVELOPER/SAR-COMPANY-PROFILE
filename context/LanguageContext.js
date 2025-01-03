'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const LanguageContext = createContext();

export const LanguageProvider = ({ children, initialLang }) => {
  const [language, setLanguage] = useState(initialLang || 'id');

  const changeLanguage = (lang) => {
    setLanguage(lang);
    Cookies.set('lang', lang, { path: '/' }); // This should set the cookie
    console.log(`Language changed to: ${lang}`);
  };

  useEffect(() => {
    const storedLang = Cookies.get('lang');
    if (storedLang && storedLang !== language) {
      setLanguage(storedLang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
