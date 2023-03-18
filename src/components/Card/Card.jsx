// Este componente Card va a mostrar las propiedades:

// name: nombre.
// species: especie.
// genre: género.
// image: imagen.
// onClose: función que se va a ejecutar cuando el usuario haga click en el botón de cerrar.
// Además cuando el usuario haga click en la X de "cerrar", se invocará una función que también viene como props (onClose).

import style from './Card.module.css';

export default function Card(props) {
   return (
      <div data-aos="fade-up" className={style.container}>
         <button className={style.button} onClick={props.onClose}>X</button>  
         <img className={style.img} src={props.image} alt={props.name} />
         <h1 className={style.h1}>Nombre:</h1>
         <h2 className={style.h2}>{props.name}</h2>
         <h1 className={style.h1}>Especie:</h1>
         <h3 className={style.h2}>{props.species}</h3>
         <h1 className={style.h1}>Genero:</h1>
         <h3 className={style.h2}>{props.gender}</h3>                    
      </div>
   );
}
