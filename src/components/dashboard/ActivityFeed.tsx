import React from 'react';
import { useActivityFeed } from '../../hooks/useActivityFeed';
import { formatDistanceToNow } from 'date-fns';

export const ActivityFeed = () => {
  const { activities, loading } = useActivityFeed();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">Recent Activity</h3>
      </div>
      <div className="divide-y">
        {activities.map((activity) => (
          <div key={activity.id} className="p-4 flex items-start space-x-3">
            <div className={`
              w-2 h-2 rounded-full mt-2
              ${activity.type === 'incident' ? 'bg-red-500' : ''}
              ${activity.type === 'resource' ? 'bg-blue-500' : ''}
              ${activity.type === 'task' ? 'bg-green-500' : ''}
            `} />
            <div className="flex-1">
              <p className="text-sm text-gray-900">{activity.description}</p>
              <p className="text-xs text-gray-500">
                {formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};