import style from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={style.bar}>
      <a href="#Landing" className={style.buttons}>
        Home
      </a>
      <a href="#About" className={style.buttons}>
        About me
      </a>
      <a href="#Technologies" className={style.buttons}>
        Skills
      </a>
      <a href="#Proyects" className={style.buttons}>
        Proyects
      </a>
      <a href="#Contacts" className={style.buttons}>
        Contact
      </a>
    </div>
  );
};
export default Nav;
