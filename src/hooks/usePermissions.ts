import { useCallback } from 'react';
import { useAuth } from './useAuth';
import { Permission } from '../types/roles';

export const usePermissions = () => {
  const { user } = useAuth();

  const hasPermission = useCallback((permission: string) => {
    if (!user) return false;
    return user.permissions?.includes(permission) || user.role === 'admin';
  }, [user]);

  const checkPermissions = useCallback((requiredPermissions: string[]) => {
    if (!user) return false;
    if (user.role === 'admin') return true;
    return requiredPermissions.every(permission => user.permissions?.includes(permission));
  }, [user]);

  return {
    hasPermission,
    checkPermissions
  };
};