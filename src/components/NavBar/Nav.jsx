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
import React, { useState } from "react";

export default function Nav(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={style.nav}>
      <Link to="/">
        <img className={style.img} src={logo} alt="imagen PNG" />
      </Link>
      <div className={style.links}>
        <Link to="/" className={style.url}>
          Home
        </Link>
        <Link className={style.url} to="/about">
          About
        </Link>
      </div>
      <div className={style.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        <i className="fa fa-bars"></i>
      </div>
      <SearchBar onSearch={props.onSearch} />
    </nav>
  );
}
