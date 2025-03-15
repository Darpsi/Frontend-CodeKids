import { useState } from 'react';
import { registerUser } from '../services/authService'; // ✅ Importas la función
import '../assets/styles/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    pk_correo: '',
    nombre: '',
    password: '',
    confirmPassword: ''
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

    // valido que las contraseñas coincidan
    if (formData.password !== formData.confirmPassword) {
      setMessage('⚠️ Las contraseñas no coinciden');
      return;
    }

    try {
      const result = await registerUser({
        pk_correo: formData.pk_correo,
        nombre: formData.nombre,
        password: formData.password
      });

      console.log('Usuario registrado:', result);
      setMessage('✅ Usuario registrado con éxito'); // Mensaje de éxito

      //Vacio los campos después del registro exitoso
      setFormData({
        pk_correo: '',
        nombre: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      setMessage(`⚠️ ${error.message}`); // Mensaje de error del backend
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
  );
};

export default Register;
