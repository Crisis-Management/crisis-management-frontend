import React from 'react';
import { PhoneCall, Bell, Settings } from 'lucide-react';
import { useAuth } from '../../../hooks/useAuth';

export const AdminHeader = () => {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <PhoneCall className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-semibold">Admin Dashboard</span>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="h-5 w-5 text-gray-500 cursor-pointer" />
            <Settings className="h-5 w-5 text-gray-500 cursor-pointer" />
            <span className="text-sm font-medium">
              {user?.firstName} {user?.lastName}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};