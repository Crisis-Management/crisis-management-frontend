import React from 'react';
import { useResources } from '../../hooks/useResources';
import { ResourceCard } from './ResourceCard';

export const ResourceGrid = () => {
  const { resources, loading } = useResources();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  );
};