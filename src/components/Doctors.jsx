import React from 'react';
import AnimatedContent from './AnimatedContent';

export default function Doctors() {
  const doctors = [
    { name: "Dr. Neethu Philip", role: "Chief Dental Surgeon" },
    { name: "Dr. Vibu", role: "Dental Surgeon" },
    { name: "Dr. Sreeja", role: "Dental Surgeon" }
  ];

  return (
    <section id="doctors" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedContent distance={40} direction="vertical" duration={0.8}>
          <h2 className="text-3xl font-bold text-blue-900 mb-12">Meet Our Doctors</h2>
        </AnimatedContent>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {doctors.map((doc, index) => (
            <AnimatedContent 
              key={index} 
              distance={60} 
              direction="vertical" 
              duration={0.7} 
              delay={index * 0.2}
            >
              <div className="group cursor-pointer">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 border-4 border-blue-50 group-hover:border-blue-300 transition-all duration-300 group-hover:shadow-xl">
                  <img 
                    src={`https://i.pravatar.cc/300?img=${index + 10}`} 
                    alt={doc.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{doc.name}</h3>
                <p className="text-blue-600 font-medium">{doc.role}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}