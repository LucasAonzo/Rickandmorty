import React, { useState } from "react";
import validate from "./validation.js";
import style from "./Form1.module.css";
import { BsFacebook, BsGoogle, BsApple } from "react-icons/bs";

const Form1 = (props) => {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    const newErrors = validate({ ...userData, [name]: value });
    setErrors(newErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(userData);
  };

  return (
    <div className={style.contenedorform}>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.titulos}>
          <h1>Bienvenido</h1>
          <span>
            <p className={style.cuenta}>No tienes cuenta?</p>
            <p className={style.reg}>Registrate</p>
          </span>
        </div>
        <div className={style.iniciar}>
          <h1>Iniciar Sesion</h1>
        </div>
        <div className={style.listaiconos}>
          <div className={style.iconosG}>
            <BsGoogle />
          </div>
          <div className={style.iconosF}>
            <BsFacebook />
          </div>
          <div className={style.iconosA}>
            <BsApple />
          </div>
        </div>
        <div className={style.contenedorinput}>
          <label htmlFor="username">Email:</label>
          <input
            type="email"
            name="username"
            id="username"
            onChange={handleInputChange}
            value={userData.username}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className={style.contenedorinput}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleInputChange}
            value={userData.password}
          />
          {errors.password && <p>{errors.password}</p>}
          <h5>Olvidaste tu contraseña?</h5>
        </div>

        <button className={style.boton} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Form1;
