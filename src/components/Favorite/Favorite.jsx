import { connect } from "react-redux";
import style from "./favorite.module.css";
import Card from "../Card/Card";
import Nav from "../NavBar/Nav";

const Favoritos = (props) => {
  const { myFavorites } = props;

  return (
    <div className={style.fav}>
      {myFavorites?.map((character) => {
        return (
          <Card
            key={character.id}
            id={character.id}
            character={character}
            name={character.name} // Añade esta línea
            species={character.species} // Añade esta línea
            gender={character.gender} // Añade esta línea
            image={character.image} // Añade esta línea
            onClose={() => {}} // Añade esta línea, aunque no se utilice en el componente de favoritos
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favoritos);
