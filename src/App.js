import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/NavBar/Nav.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

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
            toast.error(`El personaje ${data.name} ya fue agregado`);
          } else {
            // Agregar el personaje a la lista de personajes si no es un duplicado
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          toast.error(`El personaje con id ${characterId} no existe`);
        }
      });
  };

  // const onClose = (characterId) => {
  //   setCharacters((oldChars) => oldChars.filter((c) => c.id !== characterId));
  // };

  const onClose = (characterId) => {
    setCharacters((oldChars) =>
      oldChars.filter((c) => {
        if (c.id === characterId) {
          toast.success(`El personaje ${c.name} fue eliminado`);
        }
        return c.id !== characterId;
      })
    );
  };

  //   return (
  //     <div className="App">
  //       <Nav onSearch={onSearch} />

  //       <Cards characters={characters} onClose={onClose} />
  //       <ToastContainer position="bottom-right" autoClose={3000} />
  //     </div>
  //   );
  // }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="/"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/About" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}

export default App;
