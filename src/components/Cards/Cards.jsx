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
          character={character} // Añade esta línea para pasar la propiedad 'character'
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
