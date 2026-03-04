import React from 'react';
import { Activity, Star, MapPin, Phone, Clock } from 'lucide-react';
import AnimatedContent from './AnimatedContent';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-100 py-12 border-t border-blue-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        
        <AnimatedContent distance={30} direction="vertical" duration={0.6}>
          <div>
            <h4 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
              <img src="/logo2.png" alt="logo" className='w-10 h-10'/>
              Choice Dental
            </h4>
            <p className="text-blue-200 text-sm mb-4 leading-relaxed">
              Providing professional, gentle, and affordable dental care for families and children in Kidangoor, Kerala.
            </p>
            <div className="flex items-center text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
            </div>
            <p className="text-sm font-medium text-blue-300">5.0 Rating on Google Reviews</p>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={30} direction="vertical" duration={0.6} delay={0.15}>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-400 sshrink-0 mt-1" />
                <span className="text-sm leading-relaxed">Ayarkunnam - Kidangoor Rd,<br/>opposite LLM Nursery School,<br/>Kidangoor, Kerala 686572</span>
              </li>
              <li className="flex items-center gap-3 mt-4">
                <Phone size={20} className="text-blue-400" />
                <span className="text-sm">+91 80780 12553</span>
              </li>
            </ul>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={30} direction="vertical" duration={0.6} delay={0.3}>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Clock size={20} className="text-blue-400" />
                <span className="text-sm font-medium text-white">Monday - Saturday</span>
              </li>
              <li className="pl-8 text-sm text-blue-300">
                9:00 AM - 7:00 PM
              </li>
              <li className="flex items-center gap-3 mt-4">
                <Clock size={20} className="text-blue-900/50" />
                <span className="text-sm text-blue-400/70 font-medium">Sunday: Closed</span>
              </li>
            </ul>
          </div>
        </AnimatedContent>

      </div>
      
      <AnimatedContent distance={20} direction="vertical" duration={0.6} delay={0.4}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-blue-900/50 text-center text-sm text-blue-400/80">
          <p>© {new Date().getFullYear()} Choice Dental Clinic. All rights reserved.</p>
        </div>
      </AnimatedContent>
    </footer>
  );
}