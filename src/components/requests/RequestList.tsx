import React from 'react';
import { useRequests } from '../../hooks/useRequests';
import { RequestListItem } from './RequestListItem';

export const RequestList = () => {
  const { requests, loading } = useRequests();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-4">
      {requests.map((request) => (
        <RequestListItem key={request.id} request={request} />
      ))}
    </div>
  );
};