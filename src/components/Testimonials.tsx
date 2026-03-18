import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Retailer, Bihar",
    initial: "R",
    content: "ZestPay has transformed my small shop into a digital service center. My monthly income has doubled since I started offering AEPS and money transfer services.",
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
    content: "Instant settlements and zero downtime — that's what sets ZestPay apart. I've tried other platforms but nothing comes close to this reliability.",
    rating: 4
  },
  {
    name: "Sunita Devi",
    role: "Retailer, Uttar Pradesh",
    initial: "S",
    content: "Being a woman entrepreneur in a small town, ZestPay gave me the tools to build a successful business. The app is simple and works perfectly.",
    rating: 5
  },
  {
    name: "Vikram Singh",
    role: "Retailer, Madhya Pradesh",
    initial: "V",
    content: "ZestPay's AEPS service has been a game changer for my village. People no longer need to travel 20 km to withdraw cash. My shop is now the go-to spot.",
    rating: 5
  },
  {
    name: "Meena Kumari",
    role: "Retailer, Jharkhand",
    initial: "M",
    content: "I started with just recharges and bill payments. Now I offer money transfers, PAN services, and more. ZestPay helped me grow step by step.",
    rating: 5
  },
  {
    name: "Arjun Reddy",
    role: "Retailer, Telangana",
    initial: "A",
    content: "The commission structure is very transparent. I know exactly what I earn on every transaction. No hidden charges, no surprises.",
    rating: 4
  },
  {
    name: "Fatima Begum",
    role: "Retailer, West Bengal",
    initial: "F",
    content: "Even during peak hours, the app never slows down. My customers are happy and keep coming back. ZestPay has earned their trust and mine.",
    rating: 5
  },
  {
    name: "Deepak Yadav",
    role: "Retailer, Chhattisgarh",
    initial: "D",
    content: "I was skeptical at first, but ZestPay proved me wrong. The onboarding was smooth and I started earning from day one. Best decision I ever made.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="pt-4 pb-4 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight"
          >
            Voices of <span className="text-brand">Success</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-xl mx-auto text-xs md:text-sm"
          >
            Real stories from real entrepreneurs who have transformed their local businesses with ZestPay's digital ecosystem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-white p-6 rounded-xl border border-slate-200 relative flex flex-col shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Stars and Quote Mark */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={`${i < testimonial.rating ? 'text-orange-500 fill-orange-500' : 'text-slate-200'}`} 
                    />
                  ))}
                </div>
                <Quote size={32} className="text-slate-100 absolute top-3 right-3 rotate-180 opacity-60" />
              </div>

              {/* Content */}
              <p className="text-slate-600 text-[13px] leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* User Info */}
              <div className="mt-auto flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-base shrink-0">
                  {testimonial.initial}
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-slate-900 text-sm leading-tight truncate">{testimonial.name}</h4>
                  <p className="text-slate-500 text-[11px] truncate">{testimonial.role}</p>
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
