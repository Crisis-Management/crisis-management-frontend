import axios from '../axios';
import { Resource } from '../../types/resource';

export const resourceApi = {
  async getResources(): Promise<Resource[]> {
    const response = await axios.get('/resources');
    return response.data;
  },

  async getResourceById(id: string): Promise<Resource> {
    const response = await axios.get(`/resources/${id}`);
    return response.data;
  },

  async createResource(data: Partial<Resource>): Promise<Resource> {
    const response = await axios.post('/resources', data);
    return response.data;
  },

  async updateResource(id: string, data: Partial<Resource>): Promise<Resource> {
    const response = await axios.put(`/resources/${id}`, data);
    return response.data;
  },

  async deleteResource(id: string): Promise<void> {
    await axios.delete(`/resources/${id}`);
  },
};