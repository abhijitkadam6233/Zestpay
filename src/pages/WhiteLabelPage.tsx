import React from 'react';
import { motion } from 'motion/react';
import { Settings, Code, Layout, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const WhiteLabelPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 pb-24 bg-slate-50 min-h-screen"
    >
      <SEO 
        title="White Label Partner" 
        description="Launch your own fintech brand with Zestpay's white label solution. Get a fully customizable platform with your branding and our technology."
        keywords="Zestpay white label, fintech branding, custom portal, B2B fintech solution, branded banking"
      />
      <div className="bg-slate-900 py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">White Label Partner</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Launch your own fintech brand with our ready-to-use, fully customizable platform.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Brand, Our Technology</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our White Label solution allows you to start your own B2B portal with your brand name, logo, and domain. We provide the complete technical infrastructure, backend support, and a wide range of services, so you can focus on building your brand and network.
            </p>
            
            <ul className="space-y-4">
              {[
                'Fully branded portal with your logo and colors',
                'Custom domain name integration',
                'Access to all Zestpay services',
                'Comprehensive admin panel for managing users',
                'Zero technical maintenance required'
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
              <Layout className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-slate-900 mb-2">Custom Branding</h3>
              <p className="text-sm text-slate-600">Your logo, your colors, your domain.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mt-8">
              <Settings className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-slate-900 mb-2">Admin Control</h3>
              <p className="text-sm text-slate-600">Manage your entire network from a single dashboard.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <Code className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-slate-900 mb-2">No Coding</h3>
              <p className="text-sm text-slate-600">We handle all the technical heavy lifting.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhiteLabelPage;
