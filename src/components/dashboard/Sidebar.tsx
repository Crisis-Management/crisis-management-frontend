import React from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  AlertTriangle,
  Truck,
  Users,
  FileText,
  Settings,
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: AlertTriangle, label: 'Incidents', path: '/incidents' },
  { icon: Truck, label: 'Resources', path: '/resources' },
  { icon: Users, label: 'Personnel', path: '/personnel' },
  { icon: FileText, label: 'Reports', path: '/reports' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const Sidebar = () => {
  return (
    <div className="bg-primary h-screen w-64 fixed left-0 top-0 text-white">
      <div className="p-4">
        <img 
          src="https://img.freepik.com/premium-vector/home-care-logo_590037-186.jpg?w=2000"
          alt="Logo"
          className="h-12 w-12 rounded-full mx-auto"
        />
      </div>
      
      <nav className="mt-8">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center px-6 py-3 text-gray-300 hover:bg-primary-light hover:text-white"
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;