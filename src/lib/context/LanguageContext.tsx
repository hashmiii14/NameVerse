'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { SupportedLanguage, LanguageMeta, TranslationDictionary } from '../translations/types';
import { LANGUAGES, getTranslation } from '../translations/index';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  langMeta: LanguageMeta;
  t: TranslationDictionary;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>('en');

  useEffect(() => {
    const saved = localStorage.getItem('nameverse_lang') as SupportedLanguage;
    if (saved && LANGUAGES.some(l => l.code === saved)) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('nameverse_lang', lang);
      const meta = LANGUAGES.find(l => l.code === lang);
      document.documentElement.dir = meta?.dir || 'ltr';
      document.documentElement.lang = lang;
    }
  };

  const langMeta = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];
  const t = getTranslation(language);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        langMeta,
        t,
        dir: langMeta.dir,
      }}
    >
      <div dir={langMeta.dir} className="min-h-screen">
        {children}
      </div>
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
