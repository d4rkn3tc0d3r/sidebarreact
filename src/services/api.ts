import axios from "axios";

// URL base del backend
const API_URL = "http://localhost:5032";

// Función para obtener la lista de OLTs
export const getOLTs = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/system/get_olts`);
    
    if (response.data.status) {
      return response.data.response;
    } else {
      throw new Error('Error en la respuesta del servidor');
    }
  } catch (error) {
    console.error('Error fetching OLTs:', error);
    throw error;
  }
};

// Función para crear una nueva OLT
export const createOLT = async (oltData) => {
  try {
    const response = await axios.post(`${API_URL}/api/olts`, oltData);
    return response.data;
  } catch (error) {
    console.error("Error creating OLT:", error);
    throw error;
  }
};
