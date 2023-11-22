import style from "./Home.module.css";
import { useLanguage } from "../../translator/languageContext";
import translations from "../../translator/translations";
import mifoto from "../../../imgs/mifotopng.png";

const Home = () => {
  const { language, toggleLanguage } = useLanguage();
  const translatedTexts = translations[language];

  return (
    <div className={style.homeContainer}>
      <div className={style.welcometxt}>
        <h1>Pablo Perez</h1>
        <h2>{translatedTexts.welcomeText2}</h2>
        <button className={style.languagebtn} onClick={toggleLanguage}>
          {translatedTexts.languagebtn}
        </button>
      </div>
      <img className={style.mifoto} src={mifoto} />
      <div className={style.introcontainer}>
        <h1>{translatedTexts.introduction}</h1>
        <h2>{translatedTexts.introduction2}</h2>
      </div>
    </div>
  );
};

export default Home;
