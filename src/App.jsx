/* eslint-disable react/no-unescaped-entities */

import style from "./App.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Nav from "./componentes/navBar/Nav.jsx";
import mifoto from "./imgs/mifotopng.png";
import backendpik from "./imgs/backend.png";
import DBpik from "./imgs/database.png";
import csspik from "./imgs/css.png";
import frontendpik from "./imgs/uxui.png";
import reactLogo from "./imgs/react-logo.png";
import nodeLogo from "./imgs/nodejs-logo.png";
import psgLogo from "./imgs/Postgres-logo.png";
import jsLogo from "./imgs/javascript-logo.png";
import gitLogo from "./imgs/github-png.png";
import dockerLogo from "./imgs/docker-logo.png";
import expressLogo from "./imgs/express-logo.png";
import htmlCssLogo from "./imgs/html-css-logo.png";
import reduxLogo from "./imgs/redux-logo.png";
import seqLogo from "./imgs/sequelize-logo.png";
import instaLogo from "./imgs/instagram-logo.png";
import linkedinLogo from "./imgs/linkedin-logo.png";
import whatsappLogo from "./imgs/whatsapp-logo.png";
import gmailLogo from "./imgs/gmail-logo.png";

function App() {
  return (
    <>
      <div className="app">
        <Nav />
        <section className={style.Landing} id="Landing">
          <div className={style.welcometxt}>
            <h1 className={style.h1_1}>Pablo perez</h1>
            <h2>joven desarrollador web junior</h2>
          </div>
          <img className={style.mifoto} src={mifoto} />
          <div className={style.loremcontainer}>
            <h1 className={style.h1_1}>Introduccion</h1>
            <h2>
              programador full stack junior, constantemente invenstigando y
              aprendiendo diferentes herramientas, frameworks y lenguajes para
              crecer en este rubro.
            </h2>
          </div>

          <h2 className={style.scrolltxt}>⌄</h2>
        </section>
        <section className={style.About} id="About">
          <div className={style.aboutcontainer}>
            <h3>
              graduado como tecnico electromecaniuco en la E.E.S.T N°2. tambien
              eh completado un intenso bootcamp de programacion con el cual he
              aprendido a desarrollar aplicaciones web utilizando varias de las
              las tecnologias mas modernas y demandadas en la industria.
            </h3>
            <h1>En que puedo ayudarte?</h1>
            <div className={style.apsimgscontainer}>
              <img className={style.apsimgs} src={csspik} />
              <img className={style.apsimgs} src={frontendpik} />
              <img className={style.apsimgs} src={backendpik} />
              <img className={style.apsimgs} src={DBpik} />
            </div>
            <div className={style.h3imgs}>
              <h3>Diseñar</h3>
              <h3>Front-End</h3>
              <h3>Back-End</h3>
              <h3>Bases de Datos</h3>
            </div>
          </div>
        </section>
        <section className={style.Technologies} id="Technologies">
          <h1>Tecnologias</h1>
          <div className={style.Technologiescontainer}>
            <img className={style.Technologiesimgs} src={reactLogo} />
            <img className={style.Technologiesimgs} src={nodeLogo} />
            <img className={style.Technologiesimgs} src={psgLogo} />
            <img className={style.Technologiesimgs} src={jsLogo} />
            <img className={style.Technologiesimgs} src={gitLogo} />
          </div>
          <div className={style.Technologies2container}>
            <img className={style.Technologiesimgs2} src={reduxLogo} />
            <img className={style.Technologiesimgs2} src={expressLogo} />
            <img className={style.Technologiesimgs2} src={seqLogo} />
            <img className={style.Technologiesimgs2} src={htmlCssLogo} />
            <img className={style.Technologiesimgs2} src={dockerLogo} />
          </div>
        </section>
        <section className={style.Proyects} id="Proyects">
          <h1>Proyectos</h1>
          <Carousel showArrows={true} infiniteLoop={true} autoPlay={true}>
            <div className={style.slidecontainer}>
              <div className={style.imgContainer}>
                <img src="https://wallpapercave.com/wp/V2Z7Bes.jpg" />
                <a href="https://wallpapercave.com/wp/V2Z7Bes.jpg">
                  Descripción breve del Proyecto 2
                </a>
              </div>
              <div className={style.textContainer}>
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  ipsam, eligendi voluptatem modi quis maiores porro excepturi
                  facere consectetur? Perferendis sed consequuntur obcaecati
                  quaerat excepturi! Sapiente aut quam iure esse.
                </h3>
              </div>
            </div>
            <div className={style.slidecontainer}>
              <div className={style.imgContainer}>
                <img src="https://wallpapercave.com/wp/wp1882781.jpg" />
                <a href="https://wallpapercave.com/wp/wp1882781.jpg">
                  Descripción breve del Proyecto 2
                </a>
              </div>
              <div className={style.textContainer}>
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  ipsam, eligendi voluptatem modi quis maiores porro excepturi
                  facere consectetur? Perferendis sed consequuntur obcaecati
                  quaerat excepturi! Sapiente aut quam iure esse.
                </h3>
              </div>
            </div>
          </Carousel>
        </section>
        <section className={style.Contacts} id="Contacts">
          <h3>contact me</h3>
          <h1>Maneras de Contactarme</h1>
          <div className={style.redescont}>
            <div className={style.redesitem}>
              <img src={linkedinLogo} />
              <a href="https://www.linkedin.com/in/pablo-perezzz">Linkedin</a>
            </div>
            <div className={style.redesitem}>
              <img src={gitLogo} />
              <a href="https://github.com/pablo-prz">GitHub</a>
            </div>
            <div className={style.redesitem}>
              <img src={instaLogo} />
              <a href="https://www.instagram.com/pavlo_prz/">Instagram</a>
            </div>
          </div>

          <div className={style.numMail}>
            <div className={style.numMailItem}>
              <img src={whatsappLogo} />
              <a href="https://wa.me/541166411133">Whatsapp</a>
            </div>
            <div className={style.numMailItem}>
              <img src={gmailLogo} />
              <a href="mailto:perezpablo0903@gmail.com">
                perezpablo0903@gmail.com
              </a>
            </div>
          </div>
          <button className={style.buttonUp}>up</button>
        </section>
      </div>
    </>
  );
}

export default App;
