import { useState } from 'react';
import { registerUser } from '../services/authService'; // ✅ Importas la función
import '../assets/styles/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    pk_correo: '',
    nombre: '',
    password: ''
  });

  const [message, setMessage] = useState(''); // ✅ Para mostrar mensajes de éxito o error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Limpiar mensaje anterior

    try {
      const result = await registerUser(formData);
      console.log('Usuario registrado:', result);
      alert('Usuario registrado con éxito ✅'); // Mensaje si se registró correctamente
    } catch (error) {
      alert(error.message); // Muestra el mensaje exacto del backend (como "El correo ya existe")
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <h2 className="register-title">Registrarse</h2>

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

        <button className="register-button" type="submit">Registrar Cuenta</button>
        {message && <p className="register-message">{message}</p>}
      </form>
    </div>
  );
};

export default Register;
