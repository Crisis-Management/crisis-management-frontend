import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { Role, Permission } from '../../../types/roles';
import { PermissionSelect } from './PermissionSelect';

interface RoleFormProps {
  initialData?: Partial<Role>;
  onSubmit: (data: Partial<Role>) => Promise<void>;
  onCancel: () => void;
  permissions: Permission[];
}

export const RoleForm = ({ initialData, onSubmit, onCancel, permissions }: RoleFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialData || {}
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Role Name"
        {...register('name', { required: 'Name is required' })}
        error={errors.name?.message}
      />
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          {...register('description')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          rows={3}
        />
      </div>

      <PermissionSelect
        permissions={permissions}
        selectedPermissions={initialData?.permissions || []}
      />

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {initialData ? 'Update Role' : 'Create Role'}
        </Button>
      </div>
    </form>
  );
};