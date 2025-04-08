import axios from "axios";

const API = "http://localhost:3000";

// REGISTER REQUEST
export const registerRequest = async (user) => {
  try {
    const response = await axios.post(`${API}/api/registro`, user);
    console.log("Respuesta register en auth:", response);
    if (response.status === 201) {
      // console.log("Response Data: ", response.data);
      return response.data;
    } else {
      throw new Error(
        `Error en la solicitud de registro. Estado: ${response.status}`
      );
    }
  } catch (error) {
    console.error("Error en la solicitud de registro", error);
    throw error;
  }
};

export const loginRequest = async (user) => {
  try {
    const response = await axios.post(`${API}/api/login`, user);
    console.log("Respuesta login en auth:", response);
    return response.data;
  } catch (error) {
    console.error("Error en la solicitud de login", error);
    throw error;
  }
};
