import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import "../../assets/styles/login/Login.css";
import loginImage from "../../assets/images/login-image.png";
import logo from "../../assets/images/codekids_logo_n.png";
import ToastInsignia, { intentarDesbloquearInsignia } from "../../components/insignia/Toast";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [insigniaDesbloqueada, setInsigniaDesbloqueada] = useState(null);


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
    const result = await login(formData);
    alert(result.message);
    localStorage.setItem("email", formData.email);

    if (result.tipo === "normal") {
      await intentarDesbloquearInsignia(
        formData.email,
        12,
        setInsigniaDesbloqueada
      );
      setTimeout(() => navigate("/modules"), 3000);
    } else if (result.tipo === "admin") {
      navigate("/admin");
    }
  } catch (error) {
    alert(error.message);
  }
};

  return (
    <div className="section-login">
      <div className="login-container">
        {/* Contenedor para la imagen a la izquierda */}
        <div className="login-image">
          <img src={loginImage} alt="Chico con setup gaming" />
        </div>

        {/* Formulario a la derecha */}
        <form className="login-formulario" onSubmit={handleSubmit}>
          <div className="logo-top">
            <img src={logo} alt="Logo Codekids" />
          </div>

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
          <a href="/Register">¿No tienes cuenta? Regístrate</a>
          <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
        </form>
      </div>
      <ToastInsignia info={insigniaDesbloqueada} />
    </div>
  );
};

export default Login;
