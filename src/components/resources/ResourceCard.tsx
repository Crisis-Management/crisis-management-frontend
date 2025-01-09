import React from 'react';
import { Resource } from '../../types/resource';
import { Badge } from '../ui/Badge';
import { Truck, Tool, FirstAid, Users } from 'lucide-react';

interface ResourceCardProps {
  resource: Resource;
}

export const ResourceCard = ({ resource }: ResourceCardProps) => {
  const icons = {
    vehicle: Truck,
    equipment: Tool,
    medical: FirstAid,
    personnel: Users,
  };

  const Icon = icons[resource.type];

  const statusColors = {
    available: 'bg-green-100 text-green-800',
    in_use: 'bg-blue-100 text-blue-800',
    maintenance: 'bg-yellow-100 text-yellow-800',
    unavailable: 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="bg-gray-100 p-2 rounded-lg">
            <Icon className="h-6 w-6 text-gray-600" />
          </div>
          <h3 className="ml-3 text-lg font-medium">{resource.name}</h3>
        </div>
        <Badge className={statusColors[resource.status]}>
          {resource.status.replace('_', ' ')}
        </Badge>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-gray-600">
          Type: {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
        </p>
        <p className="text-sm text-gray-600">
          Quantity: {resource.quantity}
        </p>
        {resource.notes && (
          <p className="text-sm text-gray-600">
            Notes: {resource.notes}
          </p>
        )}
      </div>
    </div>
  );
};