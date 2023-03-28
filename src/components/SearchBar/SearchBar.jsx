// Este componente nos permitirá buscar y agregar nuevos personajes a nuestra página.

// Recibe por props una función onSearch. Dicha función recibe un parámetro que por el momento no estará definido.

// La función onSearch se debe ejecutar cuando se haga click en el botón Agregar.
import style from "./SearchBar.module.css";
import React, { useState } from "react";

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
    props.onSearch(e.target.value);
  };

  return (
    <div className={style.container}>
      <input
        className={style.search}
        type="text"
        onChange={handleChange}
        placeholder="Buscar personaje"
      />
    </div>
  );
};

export default SearchBar;
