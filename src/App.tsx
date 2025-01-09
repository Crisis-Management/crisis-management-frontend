// import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/navigation/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Providers from './components/sections/Providers';
import { Footer } from './components/layout/Footer';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-white">
        <Toaster position="top-right" />
        <Navbar />
        <Hero />
        <Services />
        <Providers />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;