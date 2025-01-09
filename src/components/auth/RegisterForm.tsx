import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { RegisterData, UserRole, ServiceType } from '../../types/auth';
import toast from 'react-hot-toast';

const serviceTypes: ServiceType[] = ['medical', 'fire', 'police', 'ambulance', 'rescue'];

export const RegisterForm = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<RegisterData>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    role: 'customer',
    phone: '',
    organizationName: '',
    serviceTypes: [],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await register(formData);
      toast.success('Registration successful!');
      // Redirect based on role
      navigate(formData.role === 'admin' ? '/admin' : 
              formData.role === 'provider' ? '/provider/dashboard' : '/dashboard');
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          required
        />
        <Input
          label="Last Name"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          required
        />
      </div>

      <Input
        type="email"
        label="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />

      <Input
        type="password"
        label="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />

      <Input
        type="tel"
        label="Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Role
        </label>
        <select
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value as UserRole })}
          required
        >
          <option value="customer">Customer</option>
          <option value="provider">Service Provider</option>
          <option value="admin">Administrator</option>
        </select>
      </div>

      {formData.role === 'provider' && (
        <>
          <Input
            label="Organization Name"
            value={formData.organizationName}
            onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
            required
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Service Types
            </label>
            <div className="space-y-2">
              {serviceTypes.map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.serviceTypes?.includes(type)}
                    onChange={(e) => {
                      const updatedTypes = e.target.checked
                        ? [...(formData.serviceTypes || []), type]
                        : formData.serviceTypes?.filter((t) => t !== type);
                      setFormData({ ...formData, serviceTypes: updatedTypes });
                    }}
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </>
      )}

      <Button type="submit" loading={loading} className="w-full">
        Register
      </Button>
    </form>
  );
};