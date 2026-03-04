import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              Join 5,00,000+ Trusted Partners of Zest Pay
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Become A Digital Banker <br />
              <span className="text-accent">Offer 25+ Services</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-lg">
              Convert your shop into a mini bank and offer banking, utility, and insurance services. Earn up to ₹50,000 per month with India's most trusted platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-xl">
                Get Started Free <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 bg-blue-600/30 text-white border border-white/30 rounded-full font-bold text-lg hover:bg-blue-600/50 transition-all backdrop-blur-sm">
                Explore Services
              </button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[
                { icon: <ShieldCheck className="text-green-400" />, text: '100% Secure' },
                { icon: <Zap className="text-yellow-400" />, text: 'Instant Settlement' },
                { icon: <CheckCircle2 className="text-blue-300" />, text: 'Highest Commission' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/80 text-sm font-medium">
                  {item.icon}
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl">
              <img 
                src="https://picsum.photos/seed/banking/800/600" 
                alt="Digital Banking" 
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Zap size={24} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Monthly Earnings</p>
                    <p className="text-2xl font-bold text-slate-900">₹50,000+</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-400/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
