import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Database, Cpu, CheckCircle } from 'lucide-react';

const ApiPartnerPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 pb-24 bg-slate-50 min-h-screen"
    >
      <div className="bg-slate-900 py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">API Partner</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Integrate Zest Pay's powerful financial services directly into your existing applications.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Seamless API Integration</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our robust and well-documented APIs allow you to embed our services into your own software, mobile app, or website. Whether you need AEPS, Money Transfer, or Bill Payment APIs, we provide secure, scalable, and easy-to-integrate solutions.
            </p>
            
            <ul className="space-y-4">
              {[
                'Comprehensive API documentation and sandbox environment',
                'High success rate and low latency transactions',
                'Dedicated technical support for integration',
                'Secure RESTful APIs with advanced encryption',
                'Real-time webhooks and status updates'
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
              <Terminal className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-slate-900 mb-2">Developer Friendly</h3>
              <p className="text-sm text-slate-600">Clear documentation and easy-to-use endpoints.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mt-8">
              <Database className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-slate-900 mb-2">Scalable</h3>
              <p className="text-sm text-slate-600">Built to handle high volumes of transactions.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <Cpu className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-slate-900 mb-2">Reliable</h3>
              <p className="text-sm text-slate-600">High uptime and consistent performance.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ApiPartnerPage;
