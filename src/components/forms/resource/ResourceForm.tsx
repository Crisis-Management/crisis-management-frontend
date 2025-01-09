import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { Resource } from '../../../types/resources';
import { LocationInput } from '../shared/LocationInput';

interface ResourceFormProps {
  initialData?: Partial<Resource>;
  onSubmit: (data: Partial<Resource>) => Promise<void>;
  onCancel: () => void;
}

export const ResourceForm = ({ initialData, onSubmit, onCancel }: ResourceFormProps) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: initialData || {}
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Resource Name"
        {...register('name', { required: 'Name is required' })}
        error={errors.name?.message}
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Type"
          {...register('type', { required: 'Type is required' })}
          error={errors.type?.message}
        />
        
        <Input
          label="Quantity"
          type="number"
          {...register('quantity', { 
            required: 'Quantity is required',
            min: { value: 0, message: 'Quantity must be positive' }
          })}
          error={errors.quantity?.message}
        />
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
          {initialData ? 'Update Resource' : 'Create Resource'}
        </Button>
      </div>
    </form>
  );
};