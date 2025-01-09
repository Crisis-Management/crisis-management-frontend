import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { LoginCredentials } from '../../types/auth';
import toast from 'react-hot-toast';

export const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { user } = await login(credentials);
      toast.success('Login successful!');
      // Redirect based on user role
      navigate(user.role === 'admin' ? '/admin' : 
              user.role === 'provider' ? '/provider/dashboard' : '/dashboard');
    } catch (error) {
      toast.error('Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="email"
        label="Email"
        value={credentials.email}
        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
        required
      />

      <Input
        type="password"
        label="Password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        required
      />

      <Button type="submit" loading={loading} className="w-full">
        Sign In
      </Button>
    </form>
  );
};