import React from 'react';
import { Phone, Star } from 'lucide-react';
import SplitText from './SplitText'; // Make sure this path matches your file structure
import ShinyText from './ShinyText'; 
import TextType from './TextType';


export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          {/* Animated Headline */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 leading-tight mb-6">
            <TextType
            text={["Your Trusted Dental Care in Kidangoor."]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            texts={["Your Trusted Dental Care in Kidangoor."]}
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
            />
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 animate-fade-in-up">
            Providing professional, gentle, and affordable dental care for families and children. 
            Rated 5.0 stars by 90+ satisfied patients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-center hover:bg-blue-700 transition shadow-lg flex items-center justify-center">
              {/* Glossy Button Text */}
              <ShinyText text="Book Appointment" speed={3} className="text-white" />
            </a>
            <a href="tel:+918078012553" className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full font-semibold text-center hover:bg-blue-50 transition flex items-center justify-center gap-2">
              <Phone size={20} /> Call Now
            </a>
          </div>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Happy dental patient at Choice Dental Clinic Kidangoor" 
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
            </div>
            <span className="font-bold text-gray-800 text-sm">5.0 from 90+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}