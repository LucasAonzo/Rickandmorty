// Este componente nos permitirá buscar y agregar nuevos personajes a nuestra página.

// Recibe por props una función onSearch. Dicha función recibe un parámetro que por el momento no estará definido.

// La función onSearch se debe ejecutar cuando se haga click en el botón Agregar.
import style from "./SearchBar.module.css";
import React, { useState } from "react";

const SearchBar = (props) => {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.onSearch(id);
  };

  return (
    <div className={style.container}>
      <input
        className={style.search}
        type="text"
        onChange={handleChange}
        placeholder="Agregar personaje"
      />
      <button className={style.button} onClick={handleClick}>
        Agregar
      </button>
    </div>
  );
};

export default SearchBar;
