// import React from 'react';
import { X } from 'lucide-react';
import { Role } from '../../types/roles';
import { RoleForm } from './RoleForm';

interface RoleModalProps {
  isOpen: boolean;
  onClose: () => void;
  role?: Role;
  onSubmit: (data: Partial<Role>) => Promise<void>;
}

export const RoleModal = ({ isOpen, onClose, role, onSubmit }: RoleModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-2xl font-bold mb-6">
          {role ? 'Edit Role' : 'Create New Role'}
        </h2>

        <RoleForm
          role={role}
          onSubmit={onSubmit}
          onCancel={onClose}
        />
      </div>
    </div>
  );
};