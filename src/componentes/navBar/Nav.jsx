import styles from "./Nav.module.css";
import { useLanguage } from "../translator/languageContext";
import translations from "../translator/translations";
import { useState } from "react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const translatedTexts = translations[language];
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={styles.navContainer}>
        <button onClick={handleOpen} className={styles.BurguerButton}>
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <div className={`${styles.bar}  ${isOpen ? styles.isactive : ""}`}>
          <a href="#Home" className={styles.buttons}>
            {translatedTexts.navHome}
          </a>
          <a href="#About" className={styles.buttons}>
            {translatedTexts.navAbout}
          </a>
          <a href="#Technologies" className={styles.buttons}>
            {translatedTexts.navTech}
          </a>
          <a href="#Proyects" className={styles.buttons}>
            {translatedTexts.navProjects}
          </a>
          <a href="#Contacts" className={styles.buttons}>
            {translatedTexts.navContact}
          </a>
        </div>
      </div>
    </>
  );
};
export default Nav;
