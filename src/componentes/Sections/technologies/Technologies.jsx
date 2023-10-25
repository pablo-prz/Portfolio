import style from "./Technologies.module.css";
import { useLanguage } from "../../translator/languageContext";
import translations from "../../translator/translations";
import reactLogo from "../../../imgs/react-logo.png";
import nodeLogo from "../../../imgs/nodejs-logo.png";
import psgLogo from "../../../imgs/Postgres-logo.png";
import jsLogo from "../../../imgs/javascript-logo.png";
import gitLogo from "../../../imgs/github-png.png";
import dockerLogo from "../../../imgs/docker-logo.png";
import expressLogo from "../../../imgs/express-logo.png";
import htmlCssLogo from "../../../imgs/html-css-logo.png";
import reduxLogo from "../../../imgs/redux-logo.png";
import seqLogo from "../../../imgs/sequelize-logo.png";

const Technologies = () => {
  const { language } = useLanguage();
  const translatedTexts = translations[language];

  return (
    <div>
      <h1>{translatedTexts.technologies}</h1>
      <div className={style.Technologiescontainer}>
        <img src={reactLogo} />
        <img src={nodeLogo} />
        <img src={psgLogo} />
        <img src={jsLogo} />
        <img src={gitLogo} />
      </div>
      <div className={style.Technologies2container}>
        <img src={reduxLogo} />
        <img src={expressLogo} />
        <img src={seqLogo} />
        <img src={htmlCssLogo} />
        <img src={dockerLogo} />
      </div>
    </div>
  );
};

export default Technologies;
