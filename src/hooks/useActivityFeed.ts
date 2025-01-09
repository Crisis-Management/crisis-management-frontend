import { useState, useEffect } from 'react';
import { activityApi } from '../lib/api/activity';
import { Activity } from '../types/activity';

export const useActivityFeed = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        setLoading(true);
        const data = await activityApi.getRecentActivity();
        setActivities(data);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
    const interval = setInterval(fetchActivities, 10000); // Refresh every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return { activities, loading };
};