import { useState, useCallback } from 'react';
import { roleApi } from '../lib/api/roles';
import { Role, Permission } from '../types/roles';
import toast from 'react-hot-toast';

export const useRoles = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchRoles = useCallback(async () => {
    try {
      setLoading(true);
      const data = await roleApi.getRoles();
      setRoles(data);
    } catch (error) {
      toast.error('Failed to fetch roles');
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchPermissions = useCallback(async () => {
    try {
      setLoading(true);
      const data = await roleApi.getPermissions();
      setPermissions(data);
    } catch (error) {
      toast.error('Failed to fetch permissions');
    } finally {
      setLoading(false);
    }
  }, []);

  const createRole = async (data: Partial<Role>) => {
    try {
      setLoading(true);
      await roleApi.createRole(data);
      toast.success('Role created successfully');
      await fetchRoles();
    } catch (error) {
      toast.error('Failed to create role');
    } finally {
      setLoading(false);
    }
  };

  const updateRole = async (id: string, data: Partial<Role>) => {
    try {
      setLoading(true);
      await roleApi.updateRole(id, data);
      toast.success('Role updated successfully');
      await fetchRoles();
    } catch (error) {
      toast.error('Failed to update role');
    } finally {
      setLoading(false);
    }
  };

  const deleteRole = async (id: string) => {
    try {
      setLoading(true);
      await roleApi.deleteRole(id);
      toast.success('Role deleted successfully');
      await fetchRoles();
    } catch (error) {
      toast.error('Failed to delete role');
    } finally {
      setLoading(false);
    }
  };

  return {
    roles,
    permissions,
    loading,
    fetchRoles,
    fetchPermissions,
    createRole,
    updateRole,
    deleteRole,
  };
};