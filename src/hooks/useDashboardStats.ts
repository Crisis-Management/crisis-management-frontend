import { useState, useEffect } from 'react';
import axios from '../lib/axios';

interface DashboardStats {
  totalUsers: number;
  activeIncidents: number;
  totalOrganizations: number;
  availableResources: number;
  usersTrend: number;
  incidentsTrend: number;
}

export const useDashboardStats = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('/api/admin/dashboard/stats');
        setStats(response.data);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, loading };
};