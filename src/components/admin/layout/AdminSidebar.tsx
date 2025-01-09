import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Users, 
  Shield, 
  Settings,
  BarChart2,
  AlertTriangle,
  Truck
} from 'lucide-react';

const navItems = [
  { icon: BarChart2, label: 'Dashboard', path: '/admin' },
  { icon: Users, label: 'Users', path: '/admin/users' },
  { icon: Shield, label: 'Roles', path: '/admin/roles' },
  { icon: AlertTriangle, label: 'Incidents', path: '/admin/incidents' },
  { icon: Truck, label: 'Resources', path: '/admin/resources' },
  { icon: Settings, label: 'Settings', path: '/admin/settings' },
];

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-sm min-h-screen">
      <nav className="mt-8 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center px-6 py-3 text-sm font-medium
              ${isActive 
                ? 'text-primary bg-primary-light/10' 
                : 'text-gray-600 hover:text-primary hover:bg-gray-50'}
            `}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;