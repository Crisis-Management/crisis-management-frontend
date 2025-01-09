import { useState, useEffect, useCallback } from 'react';
import { authApi } from '../lib/api/auth';
import { LoginCredentials, RegisterData, AuthResponse } from '../types/auth';
import toast from 'react-hot-toast';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (credentials: LoginCredentials) => {
    try {
      const response = await authApi.login(credentials);
      setUser(response.user);
      toast.success('Successfully logged in');
      return response;
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
      throw error;
    }
  };

  const register = async (data: RegisterData) => {
    try {
      const response = await authApi.register(data);
      setUser(response.user);
      toast.success('Successfully registered');
      return response;
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed');
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authApi.logout();
      setUser(null);
      toast.success('Successfully logged out');
    } catch (error) {
      toast.error('Logout failed');
    }
  };

  const checkAuth = useCallback(async () => {
    try {
      setLoading(true);
      const response = await authApi.getCurrentUser();
      setUser(response.user);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return {
    user,
    loading,
    login,
    register,
    logout,
    checkAuth
  };
};