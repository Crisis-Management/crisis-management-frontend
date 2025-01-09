import axios from '../axios';
import { EmergencyRequest } from '../../types/request';

export const requestApi = {
  async createRequest(data: Partial<EmergencyRequest>): Promise<EmergencyRequest> {
    const response = await axios.post('/emergency-requests', data);
    return response.data;
  },

  async getRequests(): Promise<EmergencyRequest[]> {
    const response = await axios.get('/emergency-requests');
    return response.data;
  },

  async updateRequest(id: string, data: Partial<EmergencyRequest>): Promise<EmergencyRequest> {
    const response = await axios.put(`/emergency-requests/${id}`, data);
    return response.data;
  },

  async deleteRequest(id: string): Promise<void> {
    await axios.delete(`/emergency-requests/${id}`);
  },
};