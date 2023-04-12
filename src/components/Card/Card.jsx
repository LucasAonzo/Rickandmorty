import { useEffect, useState } from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorites, removeFavorites } from "../../redux/actions";

function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const { character, myFavorites, onClose } = props;

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      if (character && character.id) {
        // Verificar si character tiene la propiedad id
        props.removeFavorites(character.id);
      }
    } else {
      setIsFav(true);
      props.addFavorites(character);
    }
  };

  useEffect(() => {
    if (myFavorites) {
      myFavorites.forEach((fav) => {
        if (fav.id === character.id) {
          setIsFav(true);
        }
      });
    }
  }, [myFavorites, character.id]);

  return (
    <div data-aos="fade-up" className={style.container}>
      {isFav ? (
        <button className={style.fav} onClick={handleFavorite}>
          ❤️
        </button>
      ) : (
        <button className={style.fav} onClick={handleFavorite}>
          🤍
        </button>
      )}
      <button className={style.button} onClick={props.onClose}>
        X
      </button>
      <Link to={`/detail/${props.id}`}>
        <img className={style.img} src={props.image} alt={props.name} />
        <h1 className={style.h1}>Nombre:</h1>
        <h2 className={style.h2}>{props.name}</h2>
        <h1 className={style.h1}>Especie:</h1>
        <h3 className={style.h2}>{props.species}</h3>
        <h1 className={style.h1}>Genero:</h1>
        <h3 className={style.h2}>{props.gender}</h3>
      </Link>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorites: (character) => dispatch(addFavorites(character)),
    removeFavorites: (characterId) => dispatch(removeFavorites(characterId)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
