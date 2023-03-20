import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

export default function Detail(props) {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={style.container}>
      <img className={style.img} src={character.image} alt={character.name} />
      <div className={style.contenidotexto}>
        <h2 className={style.h2}>{character.name}</h2>
        <hr className={style.separator} />
        <h3 className={style.h3}>
          <span className={style.label}>Status:</span>{" "}
          <span className={style.carac}>{character.status}</span>
        </h3>
        <h3 className={style.h3}>
          <span className={style.label}>Specie:</span>{" "}
          <span className={style.carac}>{character.species}</span>
        </h3>
        <h3 className={style.h3}>
          <span className={style.label}>Genero:</span>{" "}
          <span className={style.carac}>{character.gender}</span>
        </h3>
        <h3 className={style.h3}>
          <span className={style.label}>Origen:</span>{" "}
          <span className={style.carac}>
            {character.origin && character.origin.name}
          </span>
        </h3>
      </div>
    </div>
  );
}
