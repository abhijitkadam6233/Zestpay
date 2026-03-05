import React from 'react';
import { motion } from 'motion/react';
import { Store, CheckCircle, TrendingUp, Shield } from 'lucide-react';

const RetailerPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 pb-24 bg-slate-50 min-h-screen"
    >
      <div className="bg-slate-900 py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Become a Zestpay Retailer</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Transform your shop into a digital banking hub and increase your daily income.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Partner with Zestpay?</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              As a Zestpay Retailer, you can offer a wide range of digital financial services to your customers, including AEPS, Money Transfer, Bill Payments, and more. Enhance your business offerings, attract more footfall, and earn attractive commissions on every transaction.
            </p>
            
            <ul className="space-y-4">
              {[
                'Zero setup cost and instant onboarding',
                'Highest commission rates in the industry',
                'Real-time settlement of funds',
                '24/7 dedicated customer support',
                'Secure and reliable platform'
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
              <Store className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-slate-900 mb-2">More Footfall</h3>
              <p className="text-sm text-slate-600">Attract new customers by offering essential services.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mt-8">
              <TrendingUp className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-slate-900 mb-2">Extra Income</h3>
              <p className="text-sm text-slate-600">Earn high margins on every successful transaction.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <Shield className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-slate-900 mb-2">Secure Platform</h3>
              <p className="text-sm text-slate-600">Bank-grade security for all your transactions.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RetailerPage;
