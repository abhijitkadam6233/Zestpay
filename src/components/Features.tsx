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
    sublabel: 'Years of Excellence',
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  { 
    icon: <Users />, 
    label: 'Active Users', 
    value: '50,000+', 
    sublabel: 'Trusted Partners',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  },
  { 
    icon: <TrendingUp />, 
    label: 'Highest Commission', 
    value: '₹12', 
    sublabel: 'Per Transaction',
    color: 'text-orange-600',
    bg: 'bg-orange-50'
  },
  { 
    icon: <ShieldCheck />, 
    label: 'Secure Platform', 
    value: '100%', 
    sublabel: 'Bank-Grade Security',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50'
  },
];

const features = [
  {
    title: '0 Joining Fee',
    description: 'Start your digital banking business with zero upfront investment. Free registration for retailers.',
    icon: <Wallet className="text-blue-600" />
  },
  {
    title: 'Dual Wallet',
    description: 'Manage all services from a dual wallet. No need to maintain multiple balances.',
    icon: <Zap className="text-yellow-600" />
  },
  {
    title: '24/7 Support',
    description: 'Dedicated support team to help you with any queries or technical issues anytime.',
    icon: <Headphones className="text-green-600" />
  },
  {
    title: 'User-Friendly App',
    description: 'Easy to use mobile application and web portal for seamless transactions.',
    icon: <Smartphone className="text-purple-600" />
  }
];

const Features = () => {
  return (
    <section className="pt-12 pb-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-brand font-bold text-sm uppercase tracking-widest mb-4">Why Zestpay</div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
              Empowering Local <br />
              <span className="text-brand">Entrepreneurs</span>
            </h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Zestpay is India's leading digital banking and bill payment platform, helping local retail stores transform into digital hubs. With over 14 years of experience, we provide a secure and reliable ecosystem for financial services.
            </p>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-brand/10 transition-colors">
                    {React.cloneElement(feature.icon as React.ReactElement, { size: 28, className: "group-hover:scale-110 transition-transform" })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                    <p className="text-slate-500 leading-relaxed">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ y: -12, scale: 1.03 }}
                  className={`relative p-10 rounded-[3rem] border border-slate-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 bg-white group overflow-hidden ${
                    index % 2 === 1 ? 'lg:mt-16' : ''
                  }`}
                >
                  {/* Decorative background gradient */}
                  <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-3xl ${stat.bg}`}></div>
                  
                  {/* Icon Container */}
                  <div className={`w-20 h-20 ${stat.bg} rounded-3xl flex items-center justify-center ${stat.color} mb-10 group-hover:rotate-[10deg] transition-all duration-500 shadow-sm border border-white/50`}>
                    {React.cloneElement(stat.icon as React.ReactElement, { size: 36, strokeWidth: 1.5 })}
                  </div>
                  
                  <div className="relative">
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-none">
                        {stat.value}
                      </span>
                    </div>
                    <div className="text-slate-900 font-bold text-lg mb-2 tracking-tight">{stat.label}</div>
                    <div className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">{stat.sublabel}</div>
                  </div>

                  {/* Bottom accent line - more subtle and elegant */}
                  <div className={`absolute bottom-0 left-0 h-2 w-0 group-hover:w-full transition-all duration-700 ${stat.bg.replace('bg-', 'bg-')}`}></div>
                </motion.div>
              ))}
            </div>
            
            {/* Background decorative elements - enhanced blur */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand/5 rounded-full blur-[150px] opacity-40"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
