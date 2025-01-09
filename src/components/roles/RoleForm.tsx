import React, { useState, useEffect } from 'react';
import { Role, Permission } from '../../types/roles';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { useRoles } from '../../hooks/useRoles';

interface RoleFormProps {
  role?: Partial<Role>;
  onSubmit: (data: Partial<Role>) => Promise<void>;
  onCancel: () => void;
}

export const RoleForm = ({ role, onSubmit, onCancel }: RoleFormProps) => {
  const { permissions, fetchPermissions } = useRoles();
  const [formData, setFormData] = useState({
    name: role?.name || '',
    description: role?.description || '',
    permissions: role?.permissions?.map(p => p.id) || []
  });

  useEffect(() => {
    fetchPermissions();
  }, [fetchPermissions]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  const handlePermissionChange = (permissionId: string) => {
    setFormData(prev => ({
      ...prev,
      permissions: prev.permissions.includes(permissionId)
        ? prev.permissions.filter(id => id !== permissionId)
        : [...prev.permissions, permissionId]
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Role Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Permissions
        </label>
        <div className="space-y-2 max-h-60 overflow-y-auto p-4 border rounded-md">
          {permissions.map((permission) => (
            <label key={permission.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.permissions.includes(permission.id)}
                onChange={() => handlePermissionChange(permission.id)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">
                {permission.name} - {permission.description}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {role ? 'Update Role' : 'Create Role'}
        </Button>
      </div>
    </form>
  );
};