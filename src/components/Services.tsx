import React from 'react';
import { Activity, Heart, Brain, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Activity,
      title: "Personal Training",
      description: "One-on-one customized workout programs designed to help you achieve your fitness goals efficiently."
    },
    {
      icon: Heart,
      title: "Nutrition Coaching",
      description: "Expert guidance on nutrition to complement your fitness journey and maximize results."
    },
    {
      icon: Brain,
      title: "Corrective Exercise",
      description: "Specialized programs to address postural issues and movement dysfunctions."
    },
    {
      icon: Users,
      title: "Group Classes",
      description: "Energetic group sessions including STRONG by Zumba, TRX, and traditional Zumba classes."
    }
  ];

  return (
    <div id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Services Offered
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive fitness solutions for all levels
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="relative p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <div className="flex justify-center">
                    <service.icon className="h-12 w-12 text-purple-500" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{service.title}</h3>
                  <p className="mt-4 text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}