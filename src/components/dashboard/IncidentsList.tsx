import React from 'react';
import { useIncidents } from '../../hooks/useIncidents';

export const IncidentsList = () => {
  const { incidents, loading } = useIncidents();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">Recent Incidents</h3>
      </div>
      <div className="divide-y">
        {incidents.map((incident) => (
          <div key={incident.id} className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{incident.title}</h4>
                <p className="text-sm text-gray-600">{incident.description}</p>
              </div>
              <span className={`
                px-2 py-1 text-xs rounded-full
                ${incident.severity === 'high' ? 'bg-red-100 text-red-800' : ''}
                ${incident.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' : ''}
                ${incident.severity === 'low' ? 'bg-green-100 text-green-800' : ''}
              `}>
                {incident.severity}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};