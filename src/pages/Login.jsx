import { useState } from 'react';
import { login } from '../services/authService';
import '../assets/styles/Login.css';

const Login =  () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const result = await login(formData);
      console.log('Usuario logueado:', result);
      alert('Usuario logueado con éxito ✅');
    } catch (error) {
      alert(error.message);
    }
  } 

  return (
    <div className="login-container">
      <form className="login-formulario" onSubmit={handleSubmit}>
        <h2 className="login-title">Iniciar Sesión</h2>

        <input class="login-input" 
        type="email" 
        name="email"
        value={formData.email} 
        onChange={handleChange} 
        placeholder="Email" required />


        <input class="login-input" 
        type="password"
        name="password" 
        value={formData.password} 
        onChange={handleChange} 
        placeholder="Contraseña" required />

        <button class="login-button" type="submit">Entrar</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default Login; 
