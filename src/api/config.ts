const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const API_ROUTES = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/auth/login`,
    REGISTER: `${API_BASE_URL}/auth/register`,
    LOGOUT: `${API_BASE_URL}/auth/logout`,
  },
  USERS: {
    BASE: `${API_BASE_URL}/users`,
    PROFILE: (id: string) => `${API_BASE_URL}/users/${id}`,
  },
  ORGANIZATIONS: {
    BASE: `${API_BASE_URL}/organizations`,
    DETAIL: (id: string) => `${API_BASE_URL}/organizations/${id}`,
  },
  REQUESTS: {
    BASE: `${API_BASE_URL}/requests`,
    DETAIL: (id: string) => `${API_BASE_URL}/requests/${id}`,
  },
  INCIDENTS: {
    BASE: `${API_BASE_URL}/incidents`,
    DETAIL: (id: string) => `${API_BASE_URL}/incidents/${id}`,
  },
};