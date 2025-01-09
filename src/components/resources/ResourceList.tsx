import React from 'react';
import { useResources } from '../../hooks/useResources';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Edit, Trash2 } from 'lucide-react';

export const ResourceList = () => {
  const { resources, deleteResource, loading } = useResources();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {resources.map((resource) => (
            <tr key={resource.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {resource.name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {resource.type}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {resource.quantity}
              </td>
              <td className="px-6 py-4">
                <Badge variant={resource.status === 'available' ? 'success' : 'warning'}>
                  {resource.status}
                </Badge>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Button variant="ghost" size="sm" className="mr-2">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteResource(resource.id)}
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