import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 pb-24 bg-slate-50 min-h-screen"
    >
      <div className="bg-[#0B1120] py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          We're here to help. Get in touch with our support team for any queries or assistance.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 h-full">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Get In Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Our Office</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">Bharat Mitra Innovations Pvt Ltd.</p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    No 8 Crs Chalapathi Raju Layout<br />
                    Doddabasapur K Puram<br />
                    Bengaluru Karnataka 560036
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Call Us</h3>
                  <p className="text-slate-600 text-sm font-medium">022 42123306</p>
                  <p className="text-slate-600 text-sm font-medium">022 42306306</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Email Us</h3>
                  <p className="text-slate-600 text-sm font-medium">info@Zestpay.co.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Working Hours</h3>
                  <p className="text-slate-600 text-sm">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-slate-600 text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Send Us a Message</h2>
            
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm" placeholder="john@example.com" />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm" placeholder="+91 98765 43210" />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Subject</label>
                <div className="relative">
                  <select id="subject" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white text-sm appearance-none">
                    <option>General Inquiry</option>
                    <option>Partnership</option>
                    <option>Support</option>
                    <option>Feedback</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none text-sm" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-[#0056D2] hover:bg-blue-700 text-white font-semibold py-3.5 rounded-lg transition-colors shadow-lg shadow-blue-900/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
