import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './useAuth';

export const useAuthGuard = (requiredRole?: string) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate('/login', { state: { from: location } });
      } else if (requiredRole && user.role !== requiredRole) {
        navigate('/unauthorized');
      }
    }
  }, [user, loading, navigate, location, requiredRole]);

  return { isAuthenticated: !!user, loading };
};