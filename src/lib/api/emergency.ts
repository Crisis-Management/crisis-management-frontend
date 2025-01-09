// import axios from 'axios';
// import { SOSAlert } from '../../types/emergency';

// const API_URL = import.meta.env.VITE_API_URL;

// export const emergencyApi = {
//   async triggerSOS(data: Partial<SOSAlert>): Promise<SOSAlert> {
//     const response = await axios.post(`${API_URL}/emergency/sos`, data);
//     return response.data;
//   },

//   async cancelSOS(): Promise<void> {
//     await axios.post(`${API_URL}/emergency/sos/cancel`);
//   },

//   async getActiveAlerts(): Promise<SOSAlert[]> {
//     const response = await axios.get(`${API_URL}/emergency/alerts`);
//     return response.data;
//   },
// };