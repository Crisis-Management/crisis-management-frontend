import React from 'react';
import { Bell, Settings } from 'lucide-react';
import { useAuth } from '../../../hooks/useAuth';

const AdminHeader = () => {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-semibold text-gray-900">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <Bell className="h-6 w-6" />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <Settings className="h-6 w-6" />
            </button>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-700">
                {user?.firstName} {user?.lastName}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;