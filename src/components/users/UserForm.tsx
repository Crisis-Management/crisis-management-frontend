import React, { useState } from 'react';
import { User, UserType, Status } from '../../types/api';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

interface UserFormProps {
  user?: Partial<User>;
  onSubmit: (data: Partial<User>) => Promise<void>;
  onCancel: () => void;
}

export const UserForm = ({ user, onSubmit, onCancel }: UserFormProps) => {
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phoneNumber: user?.phoneNumber || '',
    userType: user?.userType || 'customer' as UserType,
    status: user?.status || 'active' as Status,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <Input
        label="Phone Number"
        value={formData.phoneNumber}
        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
      />
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Role</label>
        <select
          value={formData.userType}
          onChange={(e) => setFormData({ ...formData, userType: e.target.value as UserType })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="customer">Customer</option>
          <option value="provider">Provider</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Status</label>
        <select
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value as Status })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {user ? 'Update User' : 'Create User'}
        </Button>
      </div>
    </form>
  );
};