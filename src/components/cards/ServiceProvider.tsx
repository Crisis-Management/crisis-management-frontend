import React from 'react';
import { Phone } from 'lucide-react';

interface ServiceProviderProps {
  name: string;
  phone: string;
  description: string;
}

const ServiceProvider = ({ name, phone, description }: ServiceProviderProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <div className="flex items-center text-green-600 mb-2">
        <Phone className="h-5 w-5 mr-2" />
        <span className="text-lg font-bold">{phone}</span>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceProvider;