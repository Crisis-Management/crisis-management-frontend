import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { Incident } from '../../../types/incidents';
import { LocationInput } from '../shared/LocationInput';
import { Select } from '../../ui/Select';

interface IncidentFormProps {
  initialData?: Partial<Incident>;
  onSubmit: (data: Partial<Incident>) => Promise<void>;
  onCancel: () => void;
}

export const IncidentForm = ({ initialData, onSubmit, onCancel }: IncidentFormProps) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: initialData || {}
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Type"
        {...register('type', { required: 'Type is required' })}
        error={errors.type?.message}
      />

      <div className="grid grid-cols-2 gap-4">
        <Select
          label="Severity"
          {...register('severity', { required: 'Severity is required' })}
          error={errors.severity?.message}
          options={[
            { value: 'low', label: 'Low' },
            { value: 'medium', label: 'Medium' },
            { value: 'high', label: 'High' }
          ]}
        />
        
        <Select
          label="Status"
          {...register('status', { required: 'Status is required' })}
          error={errors.status?.message}
          options={[
            { value: 'active', label: 'Active' },
            { value: 'resolved', label: 'Resolved' },
            { value: 'pending', label: 'Pending' }
          ]}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          {...register('description', { required: 'Description is required' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          rows={3}
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
        )}
      </div>

      <LocationInput
        initialLocation={initialData?.location}
        onLocationChange={(location) => setValue('location', location)}
      />

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {initialData ? 'Update Incident' : 'Create Incident'}
        </Button>
      </div>
    </form>
  );
};