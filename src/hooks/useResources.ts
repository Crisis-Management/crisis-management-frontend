import { useState, useCallback } from 'react';
import { resourceApi } from '../lib/api/resources';
import { Resource } from '../../types/resource';
import toast from 'react-hot-toast';

export const useResources = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchResources = useCallback(async () => {
    try {
      setLoading(true);
      const data = await resourceApi.getResources();
      setResources(data);
    } catch (error) {
      toast.error('Failed to fetch resources');
    } finally {
      setLoading(false);
    }
  }, []);

  const createResource = async (data: Partial<Resource>) => {
    try {
      setLoading(true);
      await resourceApi.createResource(data);
      toast.success('Resource created successfully');
      await fetchResources();
    } catch (error) {
      toast.error('Failed to create resource');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateResource = async (id: string, data: Partial<Resource>) => {
    try {
      setLoading(true);
      await resourceApi.updateResource(id, data);
      toast.success('Resource updated successfully');
      await fetchResources();
    } catch (error) {
      toast.error('Failed to update resource');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const deleteResource = async (id: string) => {
    try {
      setLoading(true);
      await resourceApi.deleteResource(id);
      toast.success('Resource deleted successfully');
      await fetchResources();
    } catch (error) {
      toast.error('Failed to delete resource');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    resources,
    loading,
    fetchResources,
    createResource,
    updateResource,
    deleteResource,
  };
};