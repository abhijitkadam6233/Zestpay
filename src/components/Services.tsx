import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Fingerprint, 
  CreditCard, 
  Smartphone, 
  ShieldCheck, 
  Plane, 
  Train, 
  Receipt, 
  Wallet, 
  Building2,
  Umbrella,
  Bus,
  Zap,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    title: 'AEPS Registration',
    id: 'aeps-registration',
    description: 'Transform your shop into a mini-bank with Aadhaar Enabled Payment System.',
    icon: <Fingerprint className="text-blue-600" />,
    color: 'bg-blue-50'
  },
  {
    title: 'Micro ATM Machine Services',
    id: 'micro-atm-machine-services',
    description: 'Accept debit card transactions for cash withdrawals and balance inquiries.',
    icon: <CreditCard className="text-purple-600" />,
    color: 'bg-purple-50'
  },
  {
    title: 'Money Transfer Services',
    id: 'money-transfer-services',
    description: 'Secure, fast, and reliable way to send money across India instantly.',
    icon: <Wallet className="text-green-600" />,
    color: 'bg-green-50'
  },
  {
    title: 'Utility Bill Payments',
    id: 'utility-bill-payments',
    description: 'One-stop solution for all utility bill payments including electricity and water.',
    icon: <Receipt className="text-orange-600" />,
    color: 'bg-orange-50'
  },
  {
    title: 'Mobile & DTH Recharge',
    id: 'mobile-dth-recharge',
    description: 'Fast and reliable platform for prepaid mobile and DTH recharges.',
    icon: <Smartphone className="text-indigo-600" />,
    color: 'bg-indigo-50'
  },
  {
    title: 'IRCTC Agent Registration',
    id: 'irctc-agent-registration',
    description: 'Become an authorized IRCTC agent and offer official railway ticket booking.',
    icon: <Train className="text-sky-600" />,
    color: 'bg-sky-50'
  },
  {
    title: 'Insurance Agent Registration',
    id: 'insurance-agent-registration',
    description: 'Become a certified Point of Sales Person (POSP) for insurance.',
    icon: <Umbrella className="text-amber-600" />,
    color: 'bg-amber-50'
  },
  {
    title: 'PAN Card Agent Registration',
    id: 'pan-card-agent-registration',
    description: 'Assist customers in applying for new PAN cards or making corrections.',
    icon: <Building2 className="text-red-600" />,
    color: 'bg-red-50'
  }
];

const Services = () => {
  return (
    <section id="services" className="pt-24 pb-12 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand font-bold text-sm uppercase tracking-widest mb-4"
          >
            Our Ecosystem
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            Dual Wallet – Multiple Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            Empower your business with our comprehensive suite of digital financial services. Everything you need in one dual wallet platform.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={`/services/${service.id}`}
                className="group block bg-white p-8 rounded-[2rem] shadow-premium border border-slate-100 hover:shadow-hover hover:-translate-y-2 transition-all duration-300 h-full"
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {React.cloneElement(service.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-brand transition-colors">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="flex items-center text-brand font-bold text-xs uppercase tracking-widest group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={14} className="ml-2" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/10"
          >
            View All 25+ Services <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
