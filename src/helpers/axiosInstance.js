import axios from "axios";
import { backendApiUrl } from "./apiUrl";

const axiosInstance = axios.create({
  baseURL: backendApiUrl,
  headers: {},
});

export default axiosInstance;
