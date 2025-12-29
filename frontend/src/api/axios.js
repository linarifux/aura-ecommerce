import axios from 'axios';

// Logic: Use the environment variable if it exists, otherwise fallback to localhost
const BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: BASE_URL, 
});

export default api;