import React from 'react';
import { BaseModal } from './BaseModal';
import { RoleForm } from '../forms/role/RoleForm';
import { Role, Permission } from '../../types/roles';

interface RoleModalProps {
  isOpen: boolean;
  onClose: () => void;
  role?: Role;
  permissions: Permission[];
  onSubmit: (data: Partial<Role>) => Promise<void>;
}

export const RoleModal = ({ isOpen, onClose, role, permissions, onSubmit }: RoleModalProps) => {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={role ? 'Edit Role' : 'Create Role'}
    >
      <RoleForm
        initialData={role}
        permissions={permissions}
        onSubmit={onSubmit}
        onCancel={onClose}
      />
    </BaseModal>
  );
};