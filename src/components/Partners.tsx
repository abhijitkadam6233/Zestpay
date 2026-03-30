import React from 'react';
import { motion } from 'motion/react';

const Partners = () => {
  const partners = [
    { name: "Airtel", logo: "/partner-1.svg" },
    { name: "Bharat BillPay", logo: "/partner-2.svg" },
    { name: "DishTV", logo: "/partner-3.svg" },
    { name: "ICICI Bank", logo: "/partner-4.svg" },
    { name: "NPCI", logo: "/partner-5.svg" },
    { name: "NSDL Payments Bank", logo: "/partner-6.svg" },
    { name: "SBI", logo: "/partner-7.svg" },
    { name: "Tata Play", logo: "/partner-8.svg" },
    { name: "UTIITSL", logo: "/partner-9.svg" },
    { name: "YES Bank", logo: "/partner-10.svg" }
  ];

  // Triple the list to ensure a long enough strip for the loop
  const allPartners = [...partners, ...partners, ...partners];
  const getImageUrl = (path: string) => {
    const baseUrl = import.meta.env.BASE_URL || '/';
    if (path.startsWith('http')) return path;
    const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    return `${cleanBase}${cleanPath}`;
  };

  return (
    <section className="relative pt-8 pb-16 bg-white overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Trusted Partners</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>
      </div>
      
      <div className="relative flex overflow-hidden h-32 md:h-48 items-center">
        <motion.div 
          className="flex whitespace-nowrap items-center"
          animate={{
            x: [0, "-33.33%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {allPartners.map((partner, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 flex items-center justify-center px-6 md:px-12"
            >
              <img 
                src={getImageUrl(partner.logo)} 
                alt={partner.name} 
                className="h-12 md:h-24 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-lg cursor-pointer"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Overlays for smooth edges */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
    </section>
  );
};

export default Partners;
