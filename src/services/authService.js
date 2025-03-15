// src/services/authService.js
// Aqui se encuentran las funciones para hacer peticiones al backend.

import axios from 'axios';

const API_URL = 'http://localhost:4000/'; // Ruta del backend

export const login = async (formData) => {
  try {
    const result = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        pk_correo: formData.email, 
        password: formData.password 
      })
      
    });

    const data = await result.json();

    if (!result.ok) {
      throw new Error(data.message || 'Error al iniciar sesión');
    }

    return data;
    
  } catch (error) {
    console.error('Error en la petición:', error.message);
    throw error;
  }
};


// Función para registrar un usuario
export const registerUser = async (formData) => {
  try {
    const response = await fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message ||'Error al registrar usuario');
    }

    return data;
  } catch (error) {
    console.error('Error en la petición:', error.message);
    throw error; // Re-lanzar el error para que Register.jsx lo maneje
  }
};


export const recoverPassword = async (email) => {
  const result = await axios.post(`${API_URL}/recover-password`, { email });
  return result.data;
};
