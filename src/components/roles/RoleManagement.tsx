import React, { useState } from 'react';
import { RoleList } from './RoleList';
import { RoleModal } from './RoleModal';
import { Button } from '../ui/Button';
import { Plus } from 'lucide-react';
import { useRoles } from '../../hooks/useRoles';
import { Role } from '../../types/roles';

export const RoleManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | undefined>();
  const { createRole, updateRole } = useRoles();

  const handleSubmit = async (data: Partial<Role>) => {
    if (selectedRole) {
      await updateRole(selectedRole.id, data);
    } else {
      await createRole(data);
    }
    setIsModalOpen(false);
    setSelectedRole(undefined);
  };

  const handleEdit = (role: Role) => {
    setSelectedRole(role);
    setIsModalOpen(true);
  };

  const handleCreate = () => {
    setSelectedRole(undefined);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Role Management</h2>
        <Button onClick={handleCreate}>
          <Plus className="h-4 w-4 mr-2" />
          Create Role
        </Button>
      </div>

      <RoleList onEdit={handleEdit} />

      <RoleModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedRole(undefined);
        }}
        role={selectedRole}
        onSubmit={handleSubmit}
      />
    </div>
  );
};