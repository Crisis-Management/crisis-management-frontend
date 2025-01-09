import React from 'react';
import { Phone, Mail, MapPin, PhoneCall } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <PhoneCall className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-semibold">EthioHotline</span>
            </div>
            <p className="text-gray-400 mb-4">
              Providing emergency response and crisis management services across Ethiopia.
              Available 24/7 for your safety and security.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <PhoneCall className="h-5 w-5 mr-2 text-primary" />
                <span>Emergency: 907</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span>info@ethiohotline.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Emergency Numbers</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} EthioHotline. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};