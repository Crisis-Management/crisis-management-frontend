import React from 'react';
import Container from '../layout/Container';
import ServiceCard from '../cards/ServiceCard';
import { Phone, AlertTriangle, Ambulance, Building2, Users } from 'lucide-react';

const services = [
  {
    title: 'Emergency Hotlines',
    description: 'Direct access to emergency services 24/7',
    icon: Phone,
  },
  {
    title: 'Disaster Response',
    description: 'Immediate assistance during natural disasters',
    icon: AlertTriangle,
  },
  {
    title: 'Medical Services',
    description: 'Connect with nearby hospitals and ambulances',
    icon: Ambulance,
  },
  {
    title: 'NGO Support',
    description: 'Coordination with humanitarian organizations',
    icon: Building2,
  },
  {
    title: 'Volunteer Network',
    description: 'Join or request volunteer assistance',
    icon: Users,
  },
];

const Services = () => {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;