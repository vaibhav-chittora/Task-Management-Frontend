// export const backendApiUrl = "http://localhost:3000/api/v1";

export const backendApiUrl = import.meta.env.VITE_API_backendApiUrl;

console.log("Backend API URL - ", backendApiUrl);

export const BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL;
