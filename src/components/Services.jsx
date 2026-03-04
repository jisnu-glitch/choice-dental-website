import React from 'react';
import { Shield, Smile, Activity, Stethoscope, Heart, Star } from 'lucide-react';
import AnimatedContent from './AnimatedContent'; 

export default function Services() {
  const services = [
    { name: "Smile Correction", icon: <Smile className="text-blue-600" size={32} />, desc: "Expert orthodontic and cosmetic solutions for a confident smile." },
    { name: "Teeth Cleaning", icon: <Shield className="text-blue-600" size={32} />, desc: "Professional scaling and polishing for optimal oral hygiene." },
    { name: "Cavity Treatment", icon: <Activity className="text-blue-600" size={32} />, desc: "Painless fillings to restore damaged teeth and prevent decay." },
    { name: "Dental Crowns", icon: <Shield className="text-blue-600" size={32} />, desc: "Durable and natural-looking caps for weakened teeth." },
    { name: "Root Canal Treatment", icon: <Activity className="text-blue-600" size={32} />, desc: "Advanced endodontic therapy to save infected teeth." },
    { name: "Cosmetic Dentistry", icon: <Star className="text-blue-600" size={32} />, desc: "Veneers, whitening, and aesthetic enhancements." },
    { name: "Pediatric Dental Care", icon: <Heart className="text-blue-600" size={32} />, desc: "Gentle and friendly dental care specifically for children." },
    { name: "General Checkups", icon: <Stethoscope className="text-blue-600" size={32} />, desc: "Comprehensive exams to maintain your long-term dental health." },
  ];

  return (
    <section id="services" className="py-20 bg-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animate the Section Header */}
        <AnimatedContent distance={40} direction="vertical" duration={0.8}>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Providing the best dental treatment in Kidangoor, Kerala for all your oral health needs.</p>
          </div>
        </AnimatedContent>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
              <AnimatedContent 
                key={index}
                distance={50}
                direction="vertical"
                duration={0.6}
                delay={index * 0.1}
              >
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center h-full group">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
              </AnimatedContent>

          ))}
        </div>
      </div>
    </section>
  );
}