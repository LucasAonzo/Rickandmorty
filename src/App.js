import "./App.css";
import Pagination from "./components/Pagination/Pagination.jsx";
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
  const [searchText, setSearchText] = useState("");
  const [access, setAccess] = useState(false);
  const username = "lucasaonzo@gmail.com";
  const password = "lucas123";
  const navigate = useNavigate();

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

  const onClose = (characterId) => {
    toast.success(`El personaje fue eliminado`);
  };

  const handleSearch = (text) => {
    setSearchText(text);
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
      {showNav && <Nav onSearch={handleSearch} onLogout={logout} />}
      <Routes>
        <Route path="/" element={<Form1 onSubmit={login} />} />

        {access && (
          <>
            <Route
              path="/home"
              element={<Pagination searchText={searchText} onClose={onClose} />}
            />
            <Route
              path="/home/page/:pageNum"
              element={<Pagination searchText={searchText} onClose={onClose} />}
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
