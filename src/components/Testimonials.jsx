import React from 'react';
import { Star } from 'lucide-react';
import AnimatedContent from './AnimatedContent';

export default function Testimonials() {
  const reviews = [
    "The clinic is modern, clean and well organized. The doctor explained the procedure clearly.",
    "Very happy with the care provided to my child. Staff were kind and patient.",
    "Smile correction treatment was excellent. Now I can smile confidently.",
    "Highly professional service with affordable charges.",
    "Friendly doctors and excellent dental care."
  ];

  return (
    <section className="py-20 bg-blue-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent distance={40} direction="vertical" duration={0.8}>
          <h2 className="text-3xl font-bold text-center mb-12">What Our Patients Say</h2>
        </AnimatedContent>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.slice(0, 3).map((review, index) => (
            <AnimatedContent 
              key={index} 
              distance={50} 
              direction="vertical" 
              duration={0.6} 
              delay={index * 0.15}
            >
              <div className="bg-blue-800 p-8 rounded-xl shadow-lg relative hover:bg-blue-700 transition-colors duration-300 h-full">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                </div>
                <p className="text-blue-100 italic leading-relaxed">"{review}"</p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}