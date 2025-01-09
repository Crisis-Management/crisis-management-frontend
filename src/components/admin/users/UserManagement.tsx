import React, { useState } from 'react';
import { UserList } from './UserList';
import { UserForm } from './UserForm';
import { Button } from '../../ui/Button';
import { Plus } from 'lucide-react';

export const UserManagement = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">User Management</h2>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </div>

      {showForm && (
        <UserForm onClose={() => setShowForm(false)} />
      )}

      <UserList />
    </div>
  );
};