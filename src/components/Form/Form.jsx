import React, { useState } from "react";
import validate from "./validation.js";
import style from "./Form.module.css";

const Form = (props) => {
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
        <div className={style.divcontainer}>
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

        <div className={style.divcontainer}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleInputChange}
            value={userData.password}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Form;
