import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GlobalContextProps {
  isDark: boolean;
  toggleTheme: () => void;
  isArabic: boolean;
  toggleLang: () => void;
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const theme = localStorage.getItem('theme');
    return theme !== null ? JSON.parse(theme) : true;
  });

  const [isArabic, setIsArabic] = useState<boolean>(() => {
    const lang = localStorage.getItem('lang');
    return lang !== null ? JSON.parse(lang) : false;
  });

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      localStorage.setItem('theme', JSON.stringify(newTheme));
      return newTheme;
    });
  };

  const toggleLang = () => {
    setIsArabic((prev) => {
      const newLang = !prev;
      localStorage.setItem('lang', JSON.stringify(newLang));
      return newLang;
    });
  };

  return (
    <GlobalContext.Provider
      value={{ isDark, toggleTheme, isArabic, toggleLang }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
