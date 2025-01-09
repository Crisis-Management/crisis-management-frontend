import React from 'react';
import { useRoles } from '../../hooks/useRoles';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Edit, Trash2 } from 'lucide-react';

export const RoleList = () => {
  const { roles, deleteRole, loading } = useRoles();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Permissions</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {roles.map((role) => (
            <tr key={role.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {role.name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {role.description}
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-wrap gap-1">
                  {role.permissions.map((permission) => (
                    <Badge key={permission.id} variant="info">
                      {permission.name}
                    </Badge>
                  ))}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Button variant="ghost" size="sm" className="mr-2">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteRole(role.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};