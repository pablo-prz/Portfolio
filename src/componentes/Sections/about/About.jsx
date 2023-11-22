import style from "./About.module.css";
import { useLanguage } from "../../translator/languageContext";
import translations from "../../translator/translations";
import backendpik from "../../../imgs/backend.png";
import DBpik from "../../../imgs/database.png";
import csspik from "../../../imgs/css.png";
import frontendpik from "../../../imgs/uxui.png";
const About = () => {
  const { language } = useLanguage();
  const translatedTexts = translations[language];
  return (
    <div className={style.aboutcontainer}>
      <h3>{translatedTexts.aboutcontainer}</h3>
      <h1>{translatedTexts.aboutcontainer2}</h1>
      <div className={style.apsimgscontainer}>
        <div className={style.aptContain}>
          <img className={style.apsimgs} src={csspik} />
          <h3>{translatedTexts.design}</h3>
        </div>

        <div className={style.aptContain}>
          <img className={style.apsimgs} src={frontendpik} />
          <h3>{translatedTexts.frontEnd}</h3>
        </div>

        <div className={style.aptContain}>
          <img className={style.apsimgs} src={backendpik} />
          <h3>{translatedTexts.backEnd}</h3>
        </div>

        <div className={style.aptContain}>
          <img className={style.apsimgs} src={DBpik} />
          <h3>{translatedTexts.databases}</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
