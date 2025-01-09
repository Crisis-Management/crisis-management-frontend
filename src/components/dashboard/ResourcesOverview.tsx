import React from 'react';
import { useResources } from '../../hooks/useResources';
import { StatCard } from './StatCard';
import { Ambulance, Building2, Users } from 'lucide-react';

export const ResourcesOverview = () => {
  const { resources, loading } = useResources();

  if (loading) return <div>Loading...</div>;

  const stats = [
    {
      title: 'Available Ambulances',
      value: resources.filter(r => r.type === 'ambulance' && r.status === 'available').length,
      icon: Ambulance
    },
    {
      title: 'Active Shelters',
      value: resources.filter(r => r.type === 'shelter' && r.status === 'active').length,
      icon: Building2
    },
    {
      title: 'Personnel on Duty',
      value: resources.filter(r => r.type === 'personnel' && r.status === 'active').length,
      icon: Users
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};