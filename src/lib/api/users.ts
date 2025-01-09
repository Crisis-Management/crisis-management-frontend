import axios from 'axios';
import { User } from '../../types/api';

const API_URL = import.meta.env.VITE_API_URL;

export const userApi = {
  async getUsers(): Promise<User[]> {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  },

  async getUser(id: string): Promise<User> {
    const response = await axios.get(`${API_URL}/users/${id}`);
    return response.data;
  },

  async updateUser(id: string, data: Partial<User>): Promise<User> {
    const response = await axios.put(`${API_URL}/users/${id}`, data);
    return response.data;
  },

  async deleteUser(id: string): Promise<void> {
    await axios.delete(`${API_URL}/users/${id}`);
  },
};