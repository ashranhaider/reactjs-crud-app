import axios from "axios";
import { API_BASE_URL } from "../constants/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL, // Adjust to your backend
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add interceptors for auth tokens, logging, etc.

export default apiClient;
