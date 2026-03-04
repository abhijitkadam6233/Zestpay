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
  { icon: <History />, label: '10 years industry experience', value: '10+' },
  { icon: <Users />, label: 'Active Users', value: '50000' },
  { icon: <TrendingUp />, label: 'Highest Commission', value: 'Up to ₹12' },
  { icon: <ShieldCheck />, label: 'Secure Platform', value: '100%' },
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
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Why Choose <span className="text-primary">Zest Pay?</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Zest Pay is India's leading digital banking and bill payment platform, helping local retail stores transform into digital hubs. With over 14 years of experience, we provide a secure and reliable ecosystem for financial services.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center">
                    {React.cloneElement(feature.icon as React.ReactElement, { size: 24 })}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
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
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all ${
                    index % 2 === 1 ? 'mt-8' : ''
                  } ${index === 0 ? 'bg-blue-50' : 'bg-white'}`}
                >
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6">
                    {React.cloneElement(stat.icon as React.ReactElement, { size: 24 })}
                  </div>
                  <p className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</p>
                  <p className="text-slate-500 font-medium text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
            
            {/* Background decorative circle */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
