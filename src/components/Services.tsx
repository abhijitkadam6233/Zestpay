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
  Zap
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
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Dual Wallet – Multiple Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Empower your business with our comprehensive suite of digital financial services. Everything you need in one dual wallet platform.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/services/${service.id}`}
                className="block bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group h-full"
              >
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More <Zap size={16} className="ml-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/services"
            className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-primary/20"
          >
            View All 25+ Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
