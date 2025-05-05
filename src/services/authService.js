// src/services/authService.js
// Aqui se encuentran las funciones para hacer peticiones al backend.

// src/services/authService.js

import axios from 'axios';

const API_URL = 'http://localhost:4000';

// Función para iniciar sesión
export const login = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      pk_correo: formData.email,
      password: formData.password
    });

    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error al iniciar sesión');
  }
};

// Función para registrar un usuario
export const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/users`, formData);
    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error al registrar usuario');
  }
};

// Función para solicitar recuperación de contraseña
export const recoverPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/request-reset`, { email });
    return response.data;
  } catch (error) {
    throw handleAxiosError(error, 'Error al recuperar contraseña');
  }
};

// Función para verificar el token recibido por email
export const verifyToken = async (token) => {
  try {
    const response = await axios.post(`${API_URL}/verify-token`, { token });
    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error al verificar el token');
  }
};

// Función para cambiar la contraseña con el token
export const resetPassword = async (token, newPassword) => {
  try {
    const response = await axios.post(`${API_URL}/reset-password`, {
      token,
      newPassword
    });
    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error al restablecer la contraseña');
  }
};

//Funcion para cambiar la contraseña desde el perfil
export const changePasword = async (email, password, newPassword) => {
  try {

    const response = await axios.post(`${API_URL}/users/change-password`, {
      email,
      password,
      newPassword
    });
    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error al cambiar la contraseña');
  }
}

export const getName = async (email) => {
  try {
    const response = await axios.get(`${API_URL}/users/name/${email}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error al obtener el nombre');
  }
};

export const getNameInstitution = async (email) => {
  try {
    const response = await axios.get(`${API_URL}/users/institution/${email}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error al obtener el nombre de la institución');
  }
};


// Función reutilizable para manejar errores de axios
const handleAxiosError = (error, defaultMessage) => {
  if (error.response && error.response.data) {
    const data = error.response.data;
    const message = data.message || data.error; // ← aquí se considera ambos casos
    if (message) {
      throw new Error(message);
    }
  }
  console.error(defaultMessage, error);
  throw new Error(defaultMessage);
};

