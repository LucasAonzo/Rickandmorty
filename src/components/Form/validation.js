const validate = (userData) => {
  const errors = {};

  // Validate username
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!userData.username) {
    errors.username = "El Email no puede estar vacío";
  } else if (userData.username.length > 35) {
    errors.username =
      "El nombre de usuario no puede tener más de 35 caracteres";
  } else if (!emailRegex.test(userData.username)) {
    errors.username = "El Email tiene que ser un email válido";
  }

  // Validate password
  const passwordRegex = /^(?=.*\d).{6,10}$/;
  if (!userData.password) {
    errors.password = "La contraseña no puede estar vacía";
  } else if (!passwordRegex.test(userData.password)) {
    errors.password =
      "La contraseña tiene que tener al menos un número y una longitud entre 6 y 10 caracteres";
  }

  return errors;
};

export default validate;
