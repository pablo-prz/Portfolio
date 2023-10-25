import style from "./Contacts.module.css";
import { useLanguage } from "../../translator/languageContext";
import translations from "../../translator/translations";
import instaLogo from "../../../imgs/instagram-logo.png";
import linkedinLogo from "../../../imgs/Linkedin-logo.png";
import whatsappLogo from "../../../imgs/whatsapp-logo.png";
import gmailLogo from "../../../imgs/gmail-logo.png";
import cvlogo from "../../../imgs/cv.png";
import githublogo from "../../../imgs/github.png";

const Contacts = () => {
  const { language } = useLanguage();
  const translatedTexts = translations[language];
  return (
    <div>
      <h3>Contact me</h3>
      <h1>{translatedTexts.contact}</h1>
      <div className={style.redescont}>
        <div className={style.redesitem}>
          <a href="https://www.linkedin.com/in/pablo-perezzz">
            <button>
              <img src={linkedinLogo} />
              <h4>Linkedin</h4>
            </button>
          </a>
        </div>

        <div className={style.redesitem}>
          <a href="https://github.com/pablo-prz">
            <button>
              <img src={githublogo} />
              <h4>GitHub</h4>
            </button>
          </a>
        </div>

        <div className={style.redesitem}>
          <a href="https://www.instagram.com/pavlo_prz/">
            <button>
              <img src={instaLogo} />
              <h4>Instagram</h4>
            </button>
          </a>
        </div>
      </div>

      <div className={style.numMail}>
        <div>
          <a href="https://wa.me/541166411133">
            <button>
              <img src={whatsappLogo} />
              <h4>Whatsapp</h4>
            </button>
          </a>
        </div>
        <div>
          <a href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:9bc85d15-129d-4def-ae4e-16e1c94107ed">
            <button>
              <img src={cvlogo} />
              <h4>CV</h4>
            </button>
          </a>
        </div>
        <div>
          <a href="mailto:perezpablo0903@gmail.com">
            <button>
              <img src={gmailLogo} />
              <h4>Email</h4>
            </button>
          </a>
        </div>
      </div>
      <footer className={style.footer}>
        <div className={style.divider}></div>
        <p>{translatedTexts.footer}</p>
      </footer>
    </div>
  );
};

export default Contacts;
