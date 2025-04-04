import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService"; // Asegúrate de que esta función existe
import "../assets/styles/Login.css";
import loginImage from "../assets/images/login-image.png"; // Importa la imagen arriba



const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(formData);
      navigate("/Modulos");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      {/* Contenedor para la imagen a la izquierda */}
      <div className="login-image">
        <img src={loginImage} alt="Chico con setup gaming" />
      </div>

      {/* Formulario a la derecha */}
      <form className="login-formulario" onSubmit={handleSubmit}>
        <h2 className="login-title">Iniciar Sesión</h2>

        <input
          className="login-input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Correo o usuario"
          required
        />

        <input
          className="login-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Contraseña"
          required
        />

        <button className="login-button" type="submit">
          Entrar
        </button>
        <a href="/Register">¿No tienes cuenta? Registrate</a>
      </form>
    </div>
  );
};

export default Login;
