import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Modern Dental Facility in Kerala" 
            className="rounded-2xl shadow-xl"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-6">About Choice Dental Clinic</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Choice Dental Clinic is a modern dental facility located in the heart of Kidangoor, Kerala. 
            We are dedicated to providing high-quality, comprehensive dental treatments with a team of highly 
            experienced doctors and friendly staff.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="flex items-center gap-2 text-blue-800 font-semibold">
              <CheckCircle className="text-green-500" size={20} /> Experienced Doctors
            </div>
            <div className="flex items-center gap-2 text-blue-800 font-semibold">
              <CheckCircle className="text-green-500" size={20} /> Patient Comfort
            </div>
            <div className="flex items-center gap-2 text-blue-800 font-semibold">
              <CheckCircle className="text-green-500" size={20} /> Affordable Treatments
            </div>
            <div className="flex items-center gap-2 text-blue-800 font-semibold">
              <CheckCircle className="text-green-500" size={20} /> Modern Equipment
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}