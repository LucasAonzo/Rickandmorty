// Este componente nos va a servir para renderizar muchos componentes Card. Es decir, será el "contenedor" de las Card.

// Recibirá un arreglo de personajes (con todos sus datos), y va a utilizar un componente Card(reutilizando el mismo que ya hicimos en el punto anterior) por cada uno de ellos, pasándole las props correspondientes.

import Card from "../Card/Card";
import style from "./Cards.module.css";
import { Link } from "react-router-dom";

export default function Cards(props) {
  return (
    <div className={style.container}>
      {props.characters.map((character, index) => (
        <Card
          key={index}
          id={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          onClose={() => props.onClose(character.id)}
        />
      ))}
    </div>
  );
}
