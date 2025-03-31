import { useState } from 'react';
import { registerUser } from '../services/authService';
import '../assets/styles/Register.css';
import registroImagen from '../assets/images/registro-imagen.jpg'; // Asegúrate de que la imagen está en la ruta correcta

const Register = () => {
  const [formData, setFormData] = useState({
    pk_correo: '',
    nombre: '',
    password: '',
    confirmPassword: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (formData.password !== formData.confirmPassword) {
      setMessage('⚠️ Las contraseñas no coinciden');
      return;
    }

    try {
      await registerUser({
        pk_correo: formData.pk_correo,
        nombre: formData.nombre,
        password: formData.password
      });

      setMessage('✅ Usuario registrado con éxito');

      setFormData({
        pk_correo: '',
        nombre: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      setMessage(`⚠️ ${error.message}`);
    }
  };

  return (
    <div className="register-container">
      {/* Formulario a la izquierda */}
      <div className="register-formulario">
        <h2 className="register-title">Registrarse</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="register-input"
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <input
            className="register-input"
            type="email"
            name="pk_correo"
            placeholder="Email"
            value={formData.pk_correo}
            onChange={handleChange}
            required
          />

          <input
            className="register-input"
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            className="register-input"
            type="password"
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button className="register-button" type="submit">Registrar Cuenta</button>

          {message && <p className="register-message">{message}</p>}
        </form>
      </div>

      {/* Imagen a la derecha */}
      <div className="register-image">
        <img src={registroImagen} alt="Niño con auriculares jugando" />
      </div>
    </div>
  );
};

export default Register;
