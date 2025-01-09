import React, { useState } from 'react';
import { Menu, PhoneCall } from 'lucide-react';
import Container from '../layout/Container';
import NavLink from './NavLink';
import Button from '../ui/Button';
import AuthModal from '../auth/AuthModal';
import { useAuth } from '../../hooks/useAuth';
import toast from 'react-hot-toast';

export const Navbar = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleSignOut = async () => {
    try {
      await logout();
      toast.success('Signed out successfully');
    } catch (error) {
      toast.error('Error signing out');
    }
  };

  return (
    <nav className="bg-white shadow-sm">
      <Container>
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <PhoneCall className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-semibold">EthioHotline</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/providers">Providers</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            {user ? (
              <div className="flex items-center space-x-4">
                {user.role === 'admin' && (
                  <NavLink href="/admin">Admin Dashboard</NavLink>
                )}
                {user.role === 'provider' && (
                  <NavLink href="/provider/dashboard">Provider Dashboard</NavLink>
                )}
                <Button variant="outline" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button onClick={() => setIsAuthModalOpen(true)}>Sign In</Button>
            )}
          </div>

          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </Container>
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </nav>
  );
};