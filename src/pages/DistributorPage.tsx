import React from 'react';
import { motion } from 'motion/react';
import { Users, Building, Briefcase, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const DistributorPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 pb-24 bg-slate-50 min-h-screen"
    >
      <SEO 
        title="Become a Distributor" 
        description="Build your own network of retailers with Zestpay and earn passive income on every transaction. Scalable business model with high earning potential."
        keywords="Zestpay distributor, business network, passive income, fintech distributor, retailer network"
      />
      <div className="bg-slate-900 py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Become a Zestpay Distributor</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Build your own network of retailers and earn passive income on every transaction.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Grow Your Business Network</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              As a Zestpay Distributor, you can build a robust network of retailers in your area. You earn a commission on every transaction performed by the retailers in your network. It's a scalable business model with high earning potential.
            </p>
            
            <ul className="space-y-4">
              {[
                'Create unlimited retailers under your network',
                'Earn attractive margins on retailer transactions',
                'Real-time tracking and reporting dashboard',
                'Dedicated account manager support',
                'Marketing and promotional materials provided'
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <Users className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-slate-900 mb-2">Build Network</h3>
              <p className="text-sm text-slate-600">Expand your reach by onboarding local retailers.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mt-8">
              <Building className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-slate-900 mb-2">Passive Income</h3>
              <p className="text-sm text-slate-600">Earn continuously from your network's transactions.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <Briefcase className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-slate-900 mb-2">Business Growth</h3>
              <p className="text-sm text-slate-600">Scale your operations with our robust platform.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DistributorPage;
