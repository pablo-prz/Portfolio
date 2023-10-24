import style from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={style.bar}>
      <a href="#Landing" className={style.buttons}>
        Inicio
      </a>
      <a href="#About" className={style.buttons}>
        Sobre mi
      </a>
      <a href="#Technologies" className={style.buttons}>
        Tecnologias
      </a>
      <a href="#Proyects" className={style.buttons}>
        Proyectos
      </a>
      <a href="#Contacts" className={style.buttons}>
        Contacto
      </a>
    </div>
  );
};
export default Nav;
