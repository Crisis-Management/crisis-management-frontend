import React, { useState, useEffect } from 'react';
import { useUsers } from '../../../hooks/useUsers';
import { useRoles } from '../../../hooks/useRoles';
import { Button } from '../../ui/Button';
import { User } from '../../../types/api';
import { Role } from '../../../types/roles';

export const RoleAssignment = () => {
  const { users, loading: usersLoading } = useUsers();
  const { roles, assignRoleToUser, removeRoleFromUser, loading: rolesLoading } = useRoles();
  const [selectedUser, setSelectedUser] = useState<string>('');
  const [selectedRole, setSelectedRole] = useState<string>('');

  const handleAssignRole = async () => {
    if (selectedUser && selectedRole) {
      await assignRoleToUser(selectedUser, selectedRole);
      // Reset selections
      setSelectedUser('');
      setSelectedRole('');
    }
  };

  if (usersLoading || rolesLoading) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Role Assignment</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Select User</label>
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          >
            <option value="">Select a user...</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.firstName} {user.lastName} ({user.email})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Select Role</label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          >
            <option value="">Select a role...</option>
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Button
        onClick={handleAssignRole}
        disabled={!selectedUser || !selectedRole}
      >
        Assign Role
      </Button>
    </div>
  );
};