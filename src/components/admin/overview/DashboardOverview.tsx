import React from 'react';
import { StatCard } from './StatCard';
import { Users, AlertTriangle, Building2, Truck } from 'lucide-react';
import { useDashboardStats } from '../../../hooks/useDashboardStats';

export const DashboardOverview = () => {
  const { stats, loading } = useDashboardStats();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value={stats.totalUsers}
          icon={Users}
          trend={stats.usersTrend}
        />
        <StatCard
          title="Active Incidents"
          value={stats.activeIncidents}
          icon={AlertTriangle}
          trend={stats.incidentsTrend}
        />
        <StatCard
          title="Organizations"
          value={stats.totalOrganizations}
          icon={Building2}
        />
        <StatCard
          title="Available Resources"
          value={stats.availableResources}
          icon={Truck}
        />
      </div>
    </div>
  );
};