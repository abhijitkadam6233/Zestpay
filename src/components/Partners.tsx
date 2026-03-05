import React from 'react';
import { motion } from 'motion/react';

const partners = [
  {
    name: "Fino Payments Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Fino_Payments_Bank_Logo.svg/1200px-Fino_Payments_Bank_Logo.svg.png"
  },
  {
    name: "Bank of Baroda",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Bank_of_Baroda_Logo.svg/1200px-Bank_of_Baroda_Logo.svg.png"
  },
  {
    name: "Airtel Payments Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Airtel_Payments_Bank_logo.svg/1200px-Airtel_Payments_Bank_logo.svg.png"
  },
  {
    name: "ICICI Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/1200px-ICICI_Bank_Logo.svg.png"
  },
  {
    name: "State Bank of India",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/1200px-State_Bank_of_India_logo.svg.png"
  },
  {
    name: "HDFC Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/1200px-HDFC_Bank_Logo.svg.png"
  }
];

const Partners = () => {
  return (
    <section className="pt-8 pb-4 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="text-2xl font-bold text-slate-900 text-center">Our Trusted Partners</h2>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 py-4">
          {partners.concat(partners).map((partner, index) => (
            <div key={index} className="flex items-center justify-center px-8">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-12 py-4">
          {partners.concat(partners).map((partner, index) => (
            <div key={index} className="flex items-center justify-center px-8">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
