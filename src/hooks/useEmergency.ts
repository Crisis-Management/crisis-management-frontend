import { useState } from 'react';
import { useLocation } from '../hooks/useLocation';
import { emergencyApi } from '../lib/api/emergency';

export const useEmergency = () => {
  const [loading, setLoading] = useState(false);
  const { getCurrentLocation } = useLocation();

  const triggerSOS = async () => {
    try {
      setLoading(true);
      const location = await getCurrentLocation();
      await emergencyApi.triggerSOS({ location });
    } finally {
      setLoading(false);
    }
  };

  const cancelSOS = async () => {
    try {
      setLoading(true);
      await emergencyApi.cancelSOS();
    } finally {
      setLoading(false);
    }
  };

  return { triggerSOS, cancelSOS, loading };
};