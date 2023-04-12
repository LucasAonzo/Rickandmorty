//componente navbar

//importar componente searchbar

// Crear Nav
// Crear el componente Nav.
// Escribir el código correspondiente en components/Nav.jsx.
// Hint: Este componente debe incluir el componente SearchBar.

import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import logo from "./Group.png";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav className={style.nav}>
      <Link to="/home">
        <img className={style.img} src={logo} alt="imagen PNG" />
      </Link>
      <div className={style.links}>
        <Link to="/home" className={style.url}>
          Home
        </Link>
        <Link className={style.url} to="/about">
          About
        </Link>
        <Link className={style.url} to="/favorites">
          Favorites
        </Link>
        <h3 onClick={props.onLogout} className={style.url}>
          Logout
        </h3>
      </div>

      <SearchBar onSearch={props.onSearch} />
    </nav>
  );
}
