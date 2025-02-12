import axios from "axios";
import { BACKEND_API_URL } from "./apiUrl";

const axiosInstance = axios.create({
  baseURL: BACKEND_API_URL,
  headers: {},
});

export default axiosInstance;
