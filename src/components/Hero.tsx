import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-wider mb-8">
              <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse"></span>
              Trusted by 5,00,000+ Partners
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-primary leading-[1.1] mb-8">
              Your Gateway to <br />
              <span className="text-brand">Digital Banking</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
              Transform your retail shop into a modern financial hub. Offer 25+ essential banking and utility services to your community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-8 py-4 bg-brand text-white rounded-xl font-bold text-lg hover:bg-brand/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand/20">
                Get Started Now <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 bg-white text-primary border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-sm">
                Explore Services
              </button>
            </div>
            
            <div className="flex flex-wrap gap-8">
              {[
                { icon: <ShieldCheck className="text-brand" />, text: '100% Secure' },
                { icon: <Zap className="text-brand" />, text: 'Instant Settlement' },
                { icon: <CheckCircle2 className="text-brand" />, text: 'Highest Payouts' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-500 text-sm font-semibold">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 18 })}
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white p-4 rounded-[2.5rem] shadow-2xl border border-slate-100">
              <div className="overflow-hidden rounded-[2rem]">
                <img 
                  src="https://storage.googleapis.com/static-content-001/projects/nrtondb7m6n75u5pfqww2o/assets/zestpay-hero-v2.png" 
                  alt="Zestpay Digital Banking" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://picsum.photos/seed/fintech/1000/800';
                  }}
                />
              </div>
              
              {/* Floating Stats Card */}
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-10 -right-10 glass p-6 rounded-3xl shadow-premium max-w-[240px]"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-brand rounded-2xl flex items-center justify-center text-white">
                    <Zap size={20} />
                  </div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Growth</div>
                </div>
                <div className="text-3xl font-bold text-primary mb-1">₹50,000+</div>
                <div className="text-slate-500 text-xs font-medium">Potential Monthly Earnings</div>
              </motion.div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
