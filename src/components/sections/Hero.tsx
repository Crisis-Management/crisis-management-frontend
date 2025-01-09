import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Healthcare Background"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Heart className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Emergency Response</span>
              <span className="block text-primary">When Every Second Counts</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Connecting you with emergency services, first responders, and community resources during critical situations. Fast, reliable, and always available.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="#services" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-light md:py-4 md:text-lg md:px-10">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;