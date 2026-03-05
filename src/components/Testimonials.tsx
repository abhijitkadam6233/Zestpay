import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Retailer, Bihar",
    initial: "R",
    content: "Zestpay has transformed my small shop into a digital service center. My monthly income has doubled since I started offering AEPS and money transfer services.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Distributor, Rajasthan",
    initial: "P",
    content: "The platform is incredibly easy to use. My entire network of retailers is onboarded and earning well. Customer support is always responsive.",
    rating: 5
  },
  {
    name: "Amit Patel",
    role: "Retailer, Gujarat",
    initial: "A",
    content: "Instant settlements and zero downtime — that's what sets Zestpay apart. I've tried other platforms but nothing comes close to this reliability.",
    rating: 4
  },
  {
    name: "Sunita Devi",
    role: "Retailer, Uttar Pradesh",
    initial: "S",
    content: "Being a woman entrepreneur in a small town, Zestpay gave me the tools to build a successful business. The app is simple and works perfectly.",
    rating: 5
  },
  {
    name: "Vikram Singh",
    role: "Retailer, Madhya Pradesh",
    initial: "V",
    content: "Zestpay's AEPS service has been a game changer for my village. People no longer need to travel 20 km to withdraw cash. My shop is now the go-to spot.",
    rating: 5
  },
  {
    name: "Meena Kumari",
    role: "Retailer, Jharkhand",
    initial: "M",
    content: "I started with just recharges and bill payments. Now I offer money transfers, PAN services, and more. Zestpay helped me grow step by step.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="pt-12 pb-12 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/5 border border-brand/10 text-brand text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Star size={12} className="fill-brand" />
            <span>Trusted by 50,000+ Partners</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight"
          >
            Voices of <span className="text-brand">Success</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-xl mx-auto text-sm md:text-base"
          >
            Real stories from real entrepreneurs who have transformed their local businesses with Zestpay's digital ecosystem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative group hover:shadow-xl hover:border-brand/20 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center text-white font-bold text-sm shadow-sm shrink-0">
                  {testimonial.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-900 text-sm truncate">{testimonial.name}</h4>
                  <p className="text-slate-400 text-[10px] uppercase tracking-wider font-medium truncate">{testimonial.role}</p>
                </div>
                <div className="flex gap-0.5 shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={10} 
                      className={`${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`} 
                    />
                  ))}
                </div>
              </div>

              <div className="relative">
                <Quote size={16} className="text-brand/10 absolute -top-2 -left-2" />
                <p className="text-slate-600 text-[13px] leading-relaxed italic relative z-10 pl-2">
                  "{testimonial.content}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
