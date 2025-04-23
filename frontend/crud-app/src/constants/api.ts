// API Base URL
export const API_BASE_URL = 'http://localhost:5252/api';

// API Endpoints
export const API_ENDPOINTS = {
  EMPLOYEES: `${API_BASE_URL}/employees`,
  DEPARTMENTS: `${API_BASE_URL}/departments`,
  // Add more endpoints as needed
};

// API Configuration
export const API_CONFIG = {
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3,
};

// HTTP Methods
export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
}; 