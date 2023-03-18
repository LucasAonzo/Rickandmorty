import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/NavBar/Nav.jsx";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const onSearch = (characterId) => {
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          // Verificar si el personaje ya existe en la lista de personajes
          const isDuplicate = characters.some((char) => char.id === data.id);

          if (isDuplicate) {
            window.alert("Este personaje ya fue agregado anteriormente");
          } else {
            // Agregar el personaje a la lista de personajes si no es un duplicado
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (characterId) => {
    setCharacters((oldChars) => oldChars.filter((c) => c.id !== characterId));
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
