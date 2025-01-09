import axios from '../axios';
import { Incident } from '../../types/incidents';

export const incidentApi = {
  async getIncidents() {
    const { data } = await axios.get('/api/incidents');
    return data;
  },

  async createIncident(incidentData: Partial<Incident>) {
    const { data } = await axios.post('/api/incidents', incidentData);
    return data;
  },

  async updateIncident(id: string, incidentData: Partial<Incident>) {
    const { data } = await axios.put(`/api/incidents/${id}`, incidentData);
    return data;
  },

  async deleteIncident(id: string) {
    await axios.delete(`/api/incidents/${id}`);
  }
};