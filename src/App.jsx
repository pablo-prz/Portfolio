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
import cvlogo from "./imgs/cv.png";
import githublogo from "./imgs/github.png";
import pcuni from "./imgs/pc-universe.png";

function App() {
  return (
    <>
      <div className="app">
        <Nav />
        <section className={style.Landing} id="Landing">
          <div className={style.welcometxt}>
            <h1>Pablo Perez</h1>
            <h2>Desarrollador web junior</h2>
          </div>
          <img className={style.mifoto} src={mifoto} />
          <div className={style.loremcontainer}>
            <h1>Introducción</h1>
            <h2>
              Apasionado por el desarrollo web, mi compromiso es crecer
              constantemente y abrazar nuevos desafíos. Siempre buscando
              aprender y evolucionar en este emocionante campo.
            </h2>
          </div>

          <h2 className={style.scrolltxt}>⌄</h2>
        </section>
        <section className={style.About} id="About">
          <div className={style.aboutcontainer}>
            <h3>
              Graduado como tecnico electromecaniuco en la E.E.S.T N°2. Tambien
              eh completado un intenso bootcamp de programacion con el cual he
              aprendido a desarrollar aplicaciones web utilizando varias de las
              las tecnologias mas modernas y demandadas en la industria.
            </h3>
            <h1>¿En que puedo ayudarte?</h1>
            <div className={style.apsimgscontainer}>
              <img className={style.apsimgs} src={csspik} />
              <img className={style.apsimgs} src={frontendpik} />
              <img className={style.apsimgs} src={backendpik} />
              <img className={style.apsimgs} src={DBpik} />
            </div>
            <div className={style.h3imgs}>
              <h3>Diseño</h3>
              <h3>Front-End</h3>
              <h3>Back-End</h3>
              <h3>Bases de Datos</h3>
            </div>
          </div>
        </section>
        <section className={style.Technologies} id="Technologies">
          <h1>Tecnologias</h1>
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
        </section>
        <section className={style.Proyects} id="Proyects">
          <h1>Proyectos</h1>
          <Carousel showArrows={true} infiniteLoop={true} autoPlay={true}>
            <div className={style.slidecontainer}>
              <div className={style.imgContainer}>
                <a href="https://pc-universe.vercel.app/">
                  <h2>PC-Universe</h2>
                </a>
                <img src={pcuni} />
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
                <h3>
                  Proyecto académico desarrollado por un equipo de 6
                  integrantes, que se centra en la creación de un E-Commerce de
                  hardware con un diseño limpio y atractivo. Este proyecto está
                  diseñado para ser accesible para aquellos que no tienen
                  experiencia en el ensamblaje de computadoras. Incluye
                  autenticación de terceros, una pasarela de pagos y un panel de
                  administrador. Mi principal enfoque se centró en el desarrollo
                  del back-end y la gestión de la base de datos.
                </h3>
              </div>
            </div>
            <div className={style.slidecontainer}>
              <div className={style.imgContainer}>
                <a href="https://wallpapercave.com/wp/wp1882781.jpg">
                  <h2>Countries</h2>
                </a>
                <img src="https://wallpapercave.com/wp/wp1882781.jpg" />
                <a href="https://github.com/pablo-prz/proyecto_individual_countries.git">
                  <p>Repositorio</p>
                </a>
              </div>
              <div className={style.textContainer}>
                <h3>
                  Proyecto académico individual con el propósito de desarrollar
                  una "agenda de viajes". Permite la creación de actividades en
                  diversos países, mostrando información relevante de 250
                  destinos diferentes. Mi enfoque abarcó la creación y gestión
                  de la base de datos, el desarrollo del back-end y del
                  front-end de manera integral.
                </h3>
              </div>
            </div>
          </Carousel>
        </section>
        <section className={style.Contacts} id="Contacts">
          <h3>Contact me</h3>
          <h1>Maneras de Contactarme</h1>
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
            <p>&copy; 2023 Pablo Perez. Todos los derechos reservados.</p>
          </footer>
        </section>
      </div>
    </>
  );
}

export default App;
