import style from "./Nav.module.css";
import { useLanguage } from "../translator/languageContext";
import translations from "../translator/translations";

const Nav = () => {
  const { language } = useLanguage();
  const translatedTexts = translations[language];
  return (
    <div className={style.bar}>
      <a href="#Home" className={style.buttons}>
        {translatedTexts.navHome}
      </a>
      <a href="#About" className={style.buttons}>
        {translatedTexts.navAbout}
      </a>
      <a href="#Technologies" className={style.buttons}>
        {translatedTexts.navTech}
      </a>
      <a href="#Proyects" className={style.buttons}>
        {translatedTexts.navProjects}
      </a>
      <a href="#Contacts" className={style.buttons}>
        {translatedTexts.navContact}
      </a>
    </div>
  );
};
export default Nav;
