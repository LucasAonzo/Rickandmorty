import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/NavBar/Nav.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Form1 from "./components/Form/Form1";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const username = "lucasaonzo@gmail.com";
  const password = "lucas123";
  const navigate = useNavigate();

  //App.js
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const location = useLocation();

  const showNav = location.pathname !== "/";

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

  function login(userData) {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      toast.success("Bienvenido");
      navigate("/home");
    } else {
      toast.error("Usuario o contraseña incorrectos");
    }
  }

  function logout() {
    setAccess(false);
    toast.success("Hasta luego");
    navigate("/");
  }

  return (
    <div className="App">
      {showNav && <Nav onSearch={onSearch} onLogout={logout} />}
      <Routes>
        <Route path="/" element={<Form1 onSubmit={login} />} />

        {access && (
          <>
            <Route
              path="/home"
              element={<Cards characters={characters} onClose={onClose} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:detailId" element={<Detail />} />
          </>
        )}
      </Routes>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}

export default App;
