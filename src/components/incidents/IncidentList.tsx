import React from 'react';
import { useIncidents } from '../../hooks/useIncidents';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Edit, Trash2 } from 'lucide-react';

export const IncidentList = () => {
  const { incidents, deleteIncident, loading } = useIncidents();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Severity</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {incidents.map((incident) => (
            <tr key={incident.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {incident.type}
              </td>
              <td className="px-6 py-4">
                <Badge 
                  variant={
                    incident.severity === 'high' ? 'danger' :
                    incident.severity === 'medium' ? 'warning' : 'info'
                  }
                >
                  {incident.severity}
                </Badge>
              </td>
              <td className="px-6 py-4">
                <Badge variant={incident.status === 'active' ? 'danger' : 'success'}>
                  {incident.status}
                </Badge>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {incident.location.latitude}, {incident.location.longitude}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Button variant="ghost" size="sm" className="mr-2">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteIncident(incident.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};