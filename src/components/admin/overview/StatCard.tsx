import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  trend?: number;
}

export const StatCard = ({ title, value, icon: Icon, trend }: StatCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
          {trend !== undefined && (
            <p className={`text-sm ${trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {trend > 0 ? '+' : ''}{trend}%
            </p>
          )}
        </div>
        <div className="bg-primary/10 p-3 rounded-full">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </div>
  );
};