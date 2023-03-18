//componente navbar

//importar componente searchbar

// Crear Nav
// Crear el componente Nav.
// Escribir el código correspondiente en components/Nav.jsx.
// Hint: Este componente debe incluir el componente SearchBar.

import SearchBar from '../SearchBar/SearchBar';
import style from './Nav.module.css';
import logo from './Group.png';

export default function Nav(props){
    return (
        <nav className={style.nav}>
            <img className={style.img} src={logo} alt="imagen PNG" />          
            <SearchBar onSearch={props.onSearch} />
        </nav>
    )


}
