import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { usePermissions } from '../../hooks/usePermissions';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string;
  requiredPermissions?: string[];
}

export const ProtectedRoute = ({ 
  children, 
  requiredRole,
  requiredPermissions = [] 
}: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  const { checkPermissions } = usePermissions();
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  if (requiredPermissions.length > 0 && !checkPermissions(requiredPermissions)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};