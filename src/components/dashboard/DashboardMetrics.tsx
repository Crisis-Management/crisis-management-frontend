import React from 'react';
import { StatCard } from './StatCard';
import { AlertTriangle, Ambulance, Users, Building2 } from 'lucide-react';
import { useDashboardMetrics } from '../../hooks/useDashboardMetrics';

export const DashboardMetrics = () => {
  const { metrics, loading } = useDashboardMetrics();

  if (loading) return <div>Loading...</div>;

  const cards = [
    {
      title: 'Active Incidents',
      value: metrics.activeIncidents,
      icon: AlertTriangle,
      trend: metrics.incidentsTrend
    },
    {
      title: 'Available Ambulances',
      value: metrics.availableAmbulances,
      icon: Ambulance
    },
    {
      title: 'Active Personnel',
      value: metrics.activePersonnel,
      icon: Users
    },
    {
      title: 'Open Shelters',
      value: metrics.openShelters,
      icon: Building2
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <StatCard key={index} {...card} />
      ))}
    </div>
  );
};