import React from 'react';
import { motion } from 'motion/react';
import { Store, Users, Code, ArrowRight } from 'lucide-react';

const opportunities = [
  {
    title: 'Become A Zest Pay Retailer',
    description: 'Transform your shop into a mini bank. Offer 25+ services and earn up to ₹50,000 per month.',
    icon: <Store className="text-blue-600" />,
    cta: 'Register as Retailer',
    color: 'bg-blue-50'
  },
  {
    title: 'Become A Zest Pay Distributor',
    description: 'Build your own network of retailers. Earn commissions on every transaction made by your network.',
    icon: <Users className="text-green-600" />,
    cta: 'Register as Distributor',
    color: 'bg-green-50'
  },
  {
    title: 'API & Whitelabel Partners',
    description: 'Integrate our services into your own platform or launch your own branded portal with our API.',
    icon: <Code className="text-purple-600" />,
    cta: 'Register as API Partner',
    color: 'bg-purple-50'
  }
];

const Opportunities = () => {
  return (
    <section id="opportunities" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '60px 60px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Zest Pay Business Opportunities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Choose the right partnership model and start your journey towards financial independence today.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {opportunities.map((opp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all group"
            >
              <div className={`w-16 h-16 ${opp.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {React.cloneElement(opp.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-2xl font-bold mb-4">{opp.title}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                {opp.description}
              </p>
              <button className="w-full py-4 px-6 rounded-xl bg-white text-slate-900 font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2 group/btn">
                {opp.cta} <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
