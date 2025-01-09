import React from 'react';
import { usePermissions } from '../../../hooks/usePermissions';

interface PermissionGuardProps {
  children: React.ReactNode;
  requiredPermissions: string[];
  fallback?: React.ReactNode;
}

export const PermissionGuard = ({ 
  children, 
  requiredPermissions,
  fallback = null 
}: PermissionGuardProps) => {
  const { checkPermissions } = usePermissions();

  if (!checkPermissions(requiredPermissions)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};