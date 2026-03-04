import React from 'react';
import { Calendar, Phone, MessageCircle, MapPin, Navigation } from 'lucide-react';
import AnimatedContent from './AnimatedContent';
import { useState } from 'react';
export default function Contact() {

    const [formData,setFormData] = useState({
        name:"",
        phone:"",
        date:"",
        message:""
    })

    const handleChange =(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(formData);
        
        const message = 
        `*New Appointment Request*

Hello *Choice Dental Clinic*,
I would like to request an appointment. Here are my details:

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Preferred Date:* ${formData.date}
*Reason/Message:* ${formData.message ? formData.message : "General Checkup"}

Please let me know if this date works or suggest an available time. Thank you!`;

            const whatsappNumber = "917907189584";

            const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

            window.open(url, "_blank")
  };


  return (
    <section id="contact" className="py-20 bg-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* Appointment Form Animated Container */}
          <AnimatedContent distance={40} direction="vertical" duration={0.8} className="p-8 md:p-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Book an Appointment</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="John Doe"
                  value={formData.name} onChange={handleChange} required/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="+91 00000 00000" 
                  value={formData.phone} name="phone" onChange={handleChange} required/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-2.5 text-gray-400" size={20} />
                    <input type="date" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                    value={formData.date} name="date" onChange={handleChange} required/>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                  <textarea rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="How can we help you?"
                  value={formData.message}name="message" onChange={handleChange} required></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg">
                  Request Appointment
                </button>
              </form>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="tel:+918078012553" className="flex-1 border-2 border-blue-600 text-blue-600 py-2 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition">
                  <Phone size={18} /> Call Us
                </a>
                <a href="https://wa.me/918078012553" target="_blank" rel="noreferrer" className="flex-1 bg-green-500 text-white py-2 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition shadow-md">
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
            </div>
          </AnimatedContent>

          {/* Location & Map Animated Container */}
          <AnimatedContent distance={40} direction="vertical" duration={0.8} delay={0.2} className="bg-gray-100 relative min-h-[400px] h-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.328325608779!2d76.621531!3d9.696541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07cd0003b5b5c5%3A0xc3f7a1f8b4181057!2sChoice%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full border-0" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Choice Dental Clinic Location"
            ></iframe>
            <div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-2">Choice Dental Clinic</h3>
              <p className="text-gray-600 text-sm flex items-start gap-2 mb-4">
                <MapPin size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                Ayarkunnam - Kidangoor Rd, opposite LLM Nursery School, Kidangoor, Kerala 686572, India
              </p>
              <a 
                href="https://maps.google.com/?q=Choice+Dental+Clinic+Kidangoor" 
                target="_blank" rel="noreferrer"
                className="text-blue-600 font-semibold flex items-center gap-1 hover:text-blue-800 transition-colors"
              >
                <Navigation size={16} /> Get Directions
              </a>
            </div>
          </AnimatedContent>

        </div>
      </div>
    </section>
  );
}