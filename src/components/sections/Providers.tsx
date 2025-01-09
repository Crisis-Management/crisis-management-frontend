import React from 'react';
import Container from '../layout/Container';
import ServiceProvider from '../cards/ServiceProvider';

const providers = [
  {
    name: 'Emergency Medical Services',
    phone: '907',
    description: 'For medical emergencies and ambulance services',
  },
  {
    name: 'Fire Emergency',
    phone: '939',
    description: 'Fire brigade and rescue services',
  },
  {
    name: 'Police Emergency',
    phone: '991',
    description: 'Law enforcement and immediate police assistance',
  },
];

const Providers = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">Emergency Service Providers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {providers.map((provider, index) => (
            <ServiceProvider key={index} {...provider} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Providers;