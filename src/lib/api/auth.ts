import axios from '../axios';
import { LoginCredentials, RegisterData, AuthResponse } from '../../types/auth';

export const authApi = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await axios.post('/auth/login', credentials);
    return response.data;
  },

  async register(data: RegisterData): Promise<AuthResponse> {
    const response = await axios.post('/auth/register', data);
    return response.data;
  },

  async logout(): Promise<void> {
    await axios.post('/auth/logout');
    localStorage.removeItem('token');
  },

  async getCurrentUser(): Promise<AuthResponse> {
    const response = await axios.get('/auth/me');
    return response.data;
  },
};