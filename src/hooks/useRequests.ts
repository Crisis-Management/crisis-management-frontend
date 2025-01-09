import { useState, useCallback } from 'react';
import { requestApi } from '../lib/api/requests';
import { EmergencyRequest } from '../types/request';
import toast from 'react-hot-toast';

export const useRequests = () => {
  const [requests, setRequests] = useState<EmergencyRequest[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchRequests = useCallback(async () => {
    try {
      setLoading(true);
      const data = await requestApi.getRequests();
      setRequests(data);
    } catch (error) {
      toast.error('Failed to fetch requests');
    } finally {
      setLoading(false);
    }
  }, []);

  const createRequest = async (data: Partial<EmergencyRequest>) => {
    try {
      setLoading(true);
      await requestApi.createRequest(data);
      toast.success('Request created successfully');
      await fetchRequests();
    } catch (error) {
      toast.error('Failed to create request');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateRequest = async (id: string, data: Partial<EmergencyRequest>) => {
    try {
      setLoading(true);
      await requestApi.updateRequest(id, data);
      toast.success('Request updated successfully');
      await fetchRequests();
    } catch (error) {
      toast.error('Failed to update request');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    requests,
    loading,
    fetchRequests,
    createRequest,
    updateRequest,
  };
};