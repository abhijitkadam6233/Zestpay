import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Fingerprint, 
  CreditCard, 
  Smartphone, 
  ShieldCheck, 
  Plane, 
  Receipt, 
  Wallet, 
  Building2,
  Umbrella,
  Zap,
  CreditCard as CardIcon,
  QrCode,
  FileText,
  Globe
} from 'lucide-react';

const allServices = [
  // Financial & Banking Solutions
  {
    title: 'AEPS Registration',
    id: 'aeps-registration',
    description: 'Transform your shop into a mini-bank with Aadhaar Enabled Payment System.',
    icon: <Fingerprint className="text-blue-600" />,
    color: 'bg-blue-50'
  },
  {
    title: 'Aadhaar ATM Services',
    id: 'aadhaar-atm-services',
    description: 'Offer basic banking functions to customers using their Aadhaar card.',
    icon: <CreditCard className="text-purple-600" />,
    color: 'bg-purple-50'
  },
  {
    title: 'Micro ATM Machine Services',
    id: 'micro-atm-machine-services',
    description: 'Accept debit card transactions for cash withdrawals and balance inquiries.',
    icon: <Smartphone className="text-green-600" />,
    color: 'bg-green-50'
  },
  {
    title: 'Money Transfer Services',
    id: 'money-transfer-services',
    description: 'Secure, fast, and reliable way to send money across India instantly.',
    icon: <Wallet className="text-orange-600" />,
    color: 'bg-orange-50'
  },
  {
    title: 'EMI & Cash Collection',
    id: 'emi-cash-collection',
    description: 'Act as a collection point for various financial institutions and NBFCs.',
    icon: <Receipt className="text-indigo-600" />,
    color: 'bg-indigo-50'
  },
  {
    title: 'Digital Gold Selling',
    id: 'digital-gold-selling',
    description: 'Offer Digital Gold to your customers in small denominations.',
    icon: <Zap className="text-yellow-600" />,
    color: 'bg-yellow-50'
  },
  // Recharge & Utility Services
  {
    title: 'Utility Bill Payments',
    id: 'utility-bill-payments',
    description: 'One-stop solution for all utility bill payments including electricity and water.',
    icon: <Receipt className="text-sky-600" />,
    color: 'bg-sky-50'
  },
  {
    title: 'Mobile & DTH Recharge',
    id: 'mobile-dth-recharge',
    description: 'Fast and reliable platform for prepaid mobile and DTH recharges.',
    icon: <Smartphone className="text-amber-600" />,
    color: 'bg-amber-50'
  },
  // Travel & Ticketing Services
  {
    title: 'IRCTC Agent Registration',
    id: 'irctc-agent-registration',
    description: 'Become an authorized IRCTC agent and offer official railway ticket booking.',
    icon: <Plane className="text-red-600" />,
    color: 'bg-red-50'
  },
  {
    title: 'Bus Ticketing Agent Services',
    id: 'bus-ticketing-agent-services',
    description: 'Book bus tickets for thousands of routes across India.',
    icon: <Globe className="text-cyan-600" />,
    color: 'bg-cyan-50'
  },
  // Business & Agency Opportunities
  {
    title: 'Insurance Agent Registration',
    id: 'insurance-agent-registration',
    description: 'Become a certified Point of Sales Person (POSP) for insurance.',
    icon: <Umbrella className="text-rose-600" />,
    color: 'bg-rose-50'
  },
  {
    title: 'Gift Card Selling',
    id: 'gift-card-selling',
    description: 'Sell digital gift cards and vouchers for popular e-commerce platforms.',
    icon: <CreditCard className="text-teal-600" />,
    color: 'bg-teal-50'
  },
  {
    title: 'PAN Card Agent Registration',
    id: 'pan-card-agent-registration',
    description: 'Assist customers in applying for new PAN cards or making corrections.',
    icon: <FileText className="text-blue-600" />,
    color: 'bg-blue-50'
  }
];

const AllServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            All Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Explore our comprehensive range of digital financial and utility services designed to empower your business.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={`/services/${service.id}`}
                className="block bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group h-full"
              >
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="mt-auto flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More <Zap size={16} className="ml-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
