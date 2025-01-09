import React from 'react';
import { Permission } from '../../../types/roles';
import { Checkbox } from '../../ui/Checkbox';

interface PermissionSelectProps {
  permissions: Permission[];
  selectedPermissions: Permission[];
  onChange?: (permissions: Permission[]) => void;
}

export const PermissionSelect = ({ 
  permissions,
  selectedPermissions,
  onChange
}: PermissionSelectProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Permissions</label>
      <div className="mt-2 space-y-2 max-h-60 overflow-y-auto p-4 border rounded-md">
        {permissions.map((permission) => (
          <Checkbox
            key={permission.id}
            label={permission.name}
            description={permission.description}
            checked={selectedPermissions.some(p => p.id === permission.id)}
            onChange={(checked) => {
              const newPermissions = checked
                ? [...selectedPermissions, permission]
                : selectedPermissions.filter(p => p.id !== permission.id);
              onChange?.(newPermissions);
            }}
          />
        ))}
      </div>
    </div>
  );
};