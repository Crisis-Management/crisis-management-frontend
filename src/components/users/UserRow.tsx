import React from 'react';
import { User } from '../../types/api';
import { useUsers } from '../../hooks/useUsers';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Edit, Trash2 } from 'lucide-react';

interface UserRowProps {
  user: User;
}

export const UserRow = ({ user }: UserRowProps) => {
  const { deleteUser } = useUsers();

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          {user.profilePicture && (
            <img
              className="h-8 w-8 rounded-full mr-3"
              src={user.profilePicture}
              alt=""
            />
          )}
          <div>
            <div className="text-sm font-medium text-gray-900">
              {user.firstName} {user.lastName}
            </div>
            <div className="text-sm text-gray-500">{user.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <Badge variant={user.userType === 'admin' ? 'success' : 'info'}>
          {user.userType}
        </Badge>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <Badge variant={user.status === 'active' ? 'success' : 'warning'}>
          {user.status}
        </Badge>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Button variant="secondary" size="sm" className="mr-2">
          <Edit className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => deleteUser(user.id)}
          className="text-red-600 hover:text-red-900"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </td>
    </tr>
  );
};