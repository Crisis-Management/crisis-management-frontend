import React, { useState } from 'react';
import { useRequests } from '../../hooks/useRequests';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { RequestPriority } from '../../types/request';
import { useLocation } from '../../hooks/useLocation';

export const RequestForm = () => {
  const { createRequest, loading } = useRequests();
  const { getCurrentLocation } = useLocation();
  const [formData, setFormData] = useState({
    type: '',
    description: '',
    priority: 'medium' as RequestPriority,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const location = await getCurrentLocation();
      await createRequest({
        ...formData,
        location,
      });
    } catch (error) {
      console.error('Failed to create request:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Emergency Type"
        value={formData.type}
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        required
      />

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={4}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Priority</label>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          value={formData.priority}
          onChange={(e) => setFormData({ ...formData, priority: e.target.value as RequestPriority })}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="critical">Critical</option>
        </select>
      </div>

      <Button type="submit" loading={loading}>
        Submit Request
      </Button>
    </form>
  );
};