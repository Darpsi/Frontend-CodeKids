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

// Función para obtener el nombre del usuario
export const getName = async (email) => {
  try {
    const response = await axios.get(`${API_URL}/users/name/${email}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error al obtener el nombre');
  }
};

// Función para obtener el nombre de la institución
export const getNameInstitution = async (email) => {
  try {
    const response = await axios.get(`${API_URL}/users/institution/${email}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error al obtener el nombre de la institución');
  }
};

// Función para obtener el progreso del usuario (Modulo actual)
export const getProgreso = async (correo) => {
  try {
    const response = await axios.get(`${API_URL}/progreso/${correo}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error al obtener el progreso');
  }
};

// Función para obtener los estudiantes de una institución
export const getStudentsInInstitution = async (email) => {
  try {
    const response = await axios.get(`${API_URL}/users/in-institution/${email}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error al obtener los estudiantes de la institución');
  }
}

export const addUserInstitution = async (pk_correo, correo_institucion) => {
  try {
    const response = await axios.post(`${API_URL}/users/update-institution`, {
      pk_correo,
      correo_institucion
    });
    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error al agregar el usuario a la institución');
  }
}

export const deleteUserInstitution = async (pk_correo, email_inst) => {
  try {
    const response = await axios.post(`${API_URL}/users/delete-institution`, {
      pk_correo,
      email_inst
    });
    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error al eliminar el usuario de la institución');
  }
}

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

