/* eslint-disable react/no-unescaped-entities */
import style from "./App.module.css";
import Home from "./componentes/Sections/home/Home";
import About from "./componentes/Sections/about/About";
import Technologies from "./componentes/Sections/technologies/Technologies";
import Projects from "./componentes/Sections/projects/Projects";
import Contacts from "./componentes/Sections/contacts/Contacts";
import Nav from "./componentes/navBar/Nav";

function App() {
  return (
    <>
      <div className="app">
        <Nav />
        <section className={style.Home} id="Home">
          <Home />
        </section>

        <section className={style.About} id="About">
          <About />
        </section>

        <section className={style.Technologies} id="Technologies">
          <Technologies />
        </section>
        <section className={style.Proyects} id="Proyects">
          <Projects />
        </section>
        <section className={style.Contacts} id="Contacts">
          <Contacts />
        </section>
      </div>
    </>
  );
}

export default App;
