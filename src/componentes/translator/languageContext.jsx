import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

// eslint-disable-next-line react/prop-types
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  return useContext(LanguageContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export { LanguageProvider, useLanguage };
