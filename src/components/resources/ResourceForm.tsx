import React, { useState } from 'react';
import { useResources } from '../../hooks/useResources';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { ResourceType, ResourceStatus } from '../../types/resource';
import { useLocation } from '../../hooks/useLocation';

export const ResourceForm = () => {
  const { createResource, loading } = useResources();
  const { getCurrentLocation } = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    type: 'equipment' as ResourceType,
    status: 'available' as ResourceStatus,
    quantity: 1,
    notes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const location = await getCurrentLocation();
      await createResource({
        ...formData,
        location,
      });
    } catch (error) {
      console.error('Failed to create resource:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Resource Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Type</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value as ResourceType })}
          >
            <option value="vehicle">Vehicle</option>
            <option value="equipment">Equipment</option>
            <option value="medical">Medical Supply</option>
            <option value="personnel">Personnel</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value as ResourceStatus })}
          >
            <option value="available">Available</option>
            <option value="in_use">In Use</option>
            <option value="maintenance">Maintenance</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>
      </div>

      <Input
        type="number"
        label="Quantity"
        min={1}
        value={formData.quantity}
        onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
        required
      />

      <div>
        <label className="block text-sm font-medium text-gray-700">Notes</label>
        <textarea
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          rows={3}
        />
      </div>

      <Button type="submit" loading={loading}>
        Add Resource
      </Button>
    </form>
  );
};