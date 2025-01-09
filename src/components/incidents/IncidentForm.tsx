import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { useIncidents } from '../../hooks/useIncidents';

interface IncidentFormData {
  title: string;
  description: string;
  type: string;
  severity: 'low' | 'medium' | 'high';
  location: {
    latitude: number;
    longitude: number;
  };
}

export const IncidentForm = () => {
  const [formData, setFormData] = useState<IncidentFormData>({
    title: '',
    description: '',
    type: '',
    severity: 'medium',
    location: { latitude: 0, longitude: 0 },
  });

  const { createIncident, loading } = useIncidents();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createIncident(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={4}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Type"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          required
        />
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Severity</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={formData.severity}
            onChange={(e) => setFormData({ ...formData, severity: e.target.value as any })}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      <Button type="submit" loading={loading}>
        Report Incident
      </Button>
    </form>
  );
};