import axios from '../axios';
import { Role, Permission } from '../../types/roles';

export const roleApi = {
  async getRoles() {
    const { data } = await axios.get('/api/roles');
    return data;
  },

  async createRole(roleData: Partial<Role>) {
    const { data } = await axios.post('/api/roles', roleData);
    return data;
  },

  async updateRole(id: string, roleData: Partial<Role>) {
    const { data } = await axios.put(`/api/roles/${id}`, roleData);
    return data;
  },

  async deleteRole(id: string) {
    await axios.delete(`/api/roles/${id}`);
  },

  async assignRoleToUser(userId: string, roleId: string) {
    await axios.post(`/api/users/${userId}/roles`, { roleId });
  },

  async removeRoleFromUser(userId: string, roleId: string) {
    await axios.delete(`/api/users/${userId}/roles/${roleId}`);
  }
};