import React, { useState } from 'react';
import { Menu, Bell, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="https://img.freepik.com/premium-vector/home-care-logo_590037-186.jpg?w=2000"
              alt="Crisis Management"
              className="h-10 w-10 rounded-full"
            />
            <span className="ml-2 text-xl font-semibold">Crisis Management</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Bell className="h-5 w-5 cursor-pointer" />
            <User className="h-5 w-5 cursor-pointer" />
          </div>

          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;