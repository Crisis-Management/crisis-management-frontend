import React from 'react';
import { EmergencyRequest } from '../../types/request';
import { Badge } from '../ui/Badge';
import { formatDistanceToNow } from 'date-fns';

interface RequestListItemProps {
  request: EmergencyRequest;
}

export const RequestListItem = ({ request }: RequestListItemProps) => {
  const priorityColors = {
    low: 'bg-gray-100 text-gray-800',
    medium: 'bg-blue-100 text-blue-800',
    high: 'bg-yellow-100 text-yellow-800',
    critical: 'bg-red-100 text-red-800',
  };

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    assigned: 'bg-blue-100 text-blue-800',
    in_progress: 'bg-purple-100 text-purple-800',
    completed: 'bg-green-100 text-green-800',
    cancelled: 'bg-gray-100 text-gray-800',
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium">{request.type}</h3>
          <p className="text-sm text-gray-600 mt-1">{request.description}</p>
        </div>
        <div className="flex space-x-2">
          <Badge className={priorityColors[request.priority]}>
            {request.priority}
          </Badge>
          <Badge className={statusColors[request.status]}>
            {request.status.replace('_', ' ')}
          </Badge>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        Requested {formatDistanceToNow(new Date(request.createdAt))} ago
      </div>
    </div>
  );
};