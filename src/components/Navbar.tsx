import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="https://raw.githubusercontent.com/Crisis-Management/crisis-management/main/public/logo.png" 
              alt="EthioHotline" 
              className="h-8"
            />
            <span className="ml-2 text-xl font-semibold">EthioHotline</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Services</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Providers</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Contact</a>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Sign In
            </button>
          </div>

          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;