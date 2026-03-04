import React, { useState } from 'react';
import { Activity, Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-800 flex items-center gap-2">
              <img src="/logo2.png" alt="logo" className='w-10 h-10'/>
              Choice Dental Clinic
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition">Services</a>
            <a href="#doctors" className="text-gray-600 hover:text-blue-600 transition">Doctors</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
            <a href="tel:+918078012553" className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition flex items-center gap-2">
              <Phone size={18} /> Call Now
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
            <a href="#doctors" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Doctors</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}