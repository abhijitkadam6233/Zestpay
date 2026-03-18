import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  History, 
  ShieldCheck, 
  TrendingUp, 
  Wallet, 
  Headphones,
  Smartphone,
  Zap
} from 'lucide-react';

const stats = [
  { 
    icon: <History />, 
    label: 'Industry Experience', 
    value: '10+', 
    sublabel: 'YEARS OF EXCELLENCE',
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  { 
    icon: <Users />, 
    label: 'Active Users', 
    value: '50,000+', 
    sublabel: 'TRUSTED PARTNERS',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  },
  { 
    icon: <TrendingUp />, 
    label: 'Highest Commission', 
    value: '₹12', 
    sublabel: 'PER TRANSACTION',
    color: 'text-orange-600',
    bg: 'bg-orange-50'
  },
  { 
    icon: <ShieldCheck />, 
    label: 'Secure Platform', 
    value: '100%', 
    sublabel: 'BANK-GRADE SECURITY',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50'
  },
];

const features = [
  {
    title: '0 Joining Fee',
    description: 'Start your digital banking business with zero upfront investment. Free registration for retailers.',
    icon: <Wallet className="text-slate-900" />
  },
  {
    title: 'Dual Wallet',
    description: 'Manage all services from a dual wallet. No need to maintain multiple balances.',
    icon: <Zap className="text-slate-900" />
  },
  {
    title: '24/7 Support',
    description: 'Dedicated support team to help you with any queries or technical issues anytime.',
    icon: <Headphones className="text-slate-900" />
  },
  {
    title: 'User-Friendly App',
    description: 'Easy to use mobile application and web portal for seamless transactions.',
    icon: <Smartphone className="text-slate-900" />
  }
];

const Features = () => {
  return (
    <section className="pt-8 pb-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-brand font-bold text-xs uppercase tracking-[0.2em] mb-4">WHY ZESTPAY</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-[1.1]">
              Empowering Local <br />
              <span className="text-brand">Entrepreneurs</span>
            </h2>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed max-w-xl">
              Zestpay is India's leading digital banking and bill payment platform, helping local retail stores transform into digital hubs. With over 14 years of experience, we provide a secure and reliable ecosystem for financial services.
            </p>
            
            <div className="space-y-10">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-brand/10 transition-all duration-300">
                    {React.cloneElement(feature.icon as React.ReactElement, { size: 22, strokeWidth: 2, className: "group-hover:scale-110 transition-transform" })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="relative p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {/* Icon */}
                  <div className={`w-10 h-10 ${stat.bg} rounded-lg flex items-center justify-center ${stat.color} mb-6`}>
                    {React.cloneElement(stat.icon as React.ReactElement, { size: 20, strokeWidth: 2 })}
                  </div>
                  
                  <div>
                    <div className="text-3xl font-black text-slate-900 mb-2 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-slate-900 font-bold text-sm mb-1">{stat.label}</div>
                    <div className="text-slate-400 text-[9px] font-bold uppercase tracking-wider">{stat.sublabel}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
