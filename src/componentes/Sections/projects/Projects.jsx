import style from "./Projects.module.css";
import { useLanguage } from "../../translator/languageContext";
import translations from "../../translator/translations";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pcuni from "../../../imgs/pc-universe.png";
import pcuni2 from "../../../imgs/pc-universe-2.png";
import pcuni3 from "../../../imgs/pc-universe-3.png";
import countries1 from "../../../imgs/countries-1.png";
import countries2 from "../../../imgs/countries-2.png";
import countries3 from "../../../imgs/countries-3.png";

const Projects = () => {
  const { language } = useLanguage();
  const translatedTexts = translations[language];
  return (
    <div>
      <h1>{translatedTexts.proyects}</h1>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={9000}
      >
        <div className={style.slidecontainer}>
          <div className={style.imgContainer}>
            <a href="https://pc-universe.vercel.app/">
              <h2>PC-Universe</h2>
            </a>

            <Carousel
              className={style.imgslide}
              showThumbs={false}
              interval={3000}
              showArrows={false}
              infiniteLoop={true}
              autoPlay={true}
            >
              <div>
                <img src={pcuni} />
              </div>
              <div>
                <img src={pcuni2} />
              </div>
              <div>
                <img src={pcuni3} />
              </div>
            </Carousel>
            <div className={style.repos}>
              <a href="https://github.com/Auri08V/PC-Universe-Back.git">
                <p> Repo Back</p>
              </a>
              <a href="https://github.com/jorgePz-tj1904/PCUniverse.git">
                <p> Repo Front</p>
              </a>
            </div>
          </div>
          <div className={style.textContainer}>
            <h3>{translatedTexts.description}</h3>
          </div>
        </div>
        <div className={style.slidecontainer}>
          <div className={style.imgContainer}>
            <h2>Countries</h2>
            <Carousel
              className={style.imgslide}
              showThumbs={false}
              interval={3000}
              showArrows={false}
              infiniteLoop={true}
              autoPlay={true}
            >
              <div>
                <img src={countries1} />
              </div>
              <div>
                <img src={countries2} />
              </div>
              <div>
                <img src={countries3} />
              </div>
            </Carousel>
            <a href="https://github.com/pablo-prz/proyecto_individual_countries.git">
              <p>{translatedTexts.repository}</p>
            </a>
          </div>
          <div className={style.textContainer}>
            <h3>{translatedTexts.description2}</h3>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Projects;
