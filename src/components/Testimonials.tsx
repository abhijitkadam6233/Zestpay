import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Retailer, Bihar",
    initial: "R",
    content: "Zest Pay has transformed my small shop into a digital service center. My monthly income has doubled since I started offering AEPS and money transfer services.",
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
    content: "Instant settlements and zero downtime — that's what sets Zest Pay apart. I've tried other platforms but nothing comes close to this reliability.",
    rating: 4
  },
  {
    name: "Sunita Devi",
    role: "Retailer, Uttar Pradesh",
    initial: "S",
    content: "Being a woman entrepreneur in a small town, Zest Pay gave me the tools to build a successful business. The app is simple and works perfectly.",
    rating: 5
  },
  {
    name: "Vikram Singh",
    role: "Retailer, Madhya Pradesh",
    initial: "V",
    content: "Zest Pay's AEPS service has been a game changer for my village. People no longer need to travel 20 km to withdraw cash. My shop is now the go-to spot.",
    rating: 5
  },
  {
    name: "Meena Kumari",
    role: "Retailer, Jharkhand",
    initial: "M",
    content: "I started with just recharges and bill payments. Now I offer money transfers, PAN services, and more. Zest Pay helped me grow step by step.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            What Our Clients Say About <span className="text-primary">Zest Pay</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Hear from our network of 50,000+ successful partners who are growing their business with our digital banking solutions.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 relative group hover:shadow-md transition-all"
            >
              {/* Top Row: Stars and Quote */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={`${i < testimonial.rating ? 'text-orange-500 fill-orange-500' : 'text-slate-200'}`} 
                    />
                  ))}
                </div>
                <Quote size={48} className="text-slate-50 opacity-10 absolute top-6 right-6" />
                <div className="text-slate-100">
                   <Quote size={32} />
                </div>
              </div>

              {/* Content */}
              <p className="text-slate-600 text-[15px] leading-relaxed mb-10 min-h-[80px]">
                "{testimonial.content}"
              </p>

              {/* Footer: Avatar and Name */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{testimonial.name}</h4>
                  <p className="text-slate-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
