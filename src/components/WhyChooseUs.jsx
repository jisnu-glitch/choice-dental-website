import React from 'react';
import { CheckCircle } from 'lucide-react';
import AnimatedContent from './AnimatedContent';

export default function WhyChooseUs() {
  const highlights = [
    "Experienced dentists",
    "Modern and clean clinic environment",
    "Friendly and caring staff",
    "Affordable treatment options",
    "Excellent patient satisfaction (5 star reviews)",
    "Comfortable care for children"
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedContent distance={40} direction="vertical" duration={0.8}>
          <h2 className="text-3xl font-bold text-blue-900 mb-12">Why Choose Us</h2>
        </AnimatedContent>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((highlight, index) => (
            <AnimatedContent 
              key={index} 
              distance={40} 
              direction="vertical" 
              duration={0.5} 
              delay={index * 0.1}
            >
              <div className="flex items-start gap-4 p-4 rounded-lg bg-blue-50 border border-blue-100 text-left hover:shadow-md transition-shadow">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <span className="text-gray-800 font-medium text-lg">{highlight}</span>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}