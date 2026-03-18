import React, { useState } from 'react';
import { motion } from 'motion/react';
import { indianStatesAndDistricts } from '../data/indianStates';
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp
} from 'lucide-react';

const RegisterPage = () => {
  const [selectedState, setSelectedState] = useState('');
  const [districts, setDistricts] = useState<string[]>([]);

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const state = e.target.value;
    setSelectedState(state);
    setDistricts(indianStatesAndDistricts[state] || []);
  };

  const benefits = [
    { icon: <ShieldCheck size={20} />, title: "Secure", text: "Bank-grade security" },
    { icon: <Zap size={20} />, title: "Fast", text: "Instant settlements" },
    { icon: <TrendingUp size={20} />, title: "Profitable", text: "Highest commission" },
    { icon: <CheckCircle2 size={20} />, title: "Reliable", text: "24/7 support" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-5xl w-full bg-white rounded-[2rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col lg:flex-row relative z-10 border border-slate-100">
        {/* Left Side: Marketing & Branding */}
        <div className="lg:w-5/12 bg-brand p-8 lg:p-10 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Abstract background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-6 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Join 50,000+ Partners
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-[1.1] tracking-tight">
                Ready to Start Your <span className="text-brand-light">Fintech</span> Journey?
              </h1>
              <p className="text-base text-white/80 mb-8 leading-relaxed font-medium">
                Empower your business with India's most trusted digital banking platform.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    className="flex items-start gap-2"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                      {React.cloneElement(benefit.icon as React.ReactElement, { size: 16 })}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{benefit.title}</div>
                      <div className="text-[10px] text-white/60">{benefit.text}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-8 relative z-10 pt-6 border-t border-white/10">
            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3">Trusted by industry leaders</div>
            <div className="flex gap-4 opacity-50 grayscale brightness-200">
              {/* Placeholder for partner logos */}
              <div className="h-4 w-16 bg-white/20 rounded"></div>
              <div className="h-4 w-16 bg-white/20 rounded"></div>
              <div className="h-4 w-16 bg-white/20 rounded"></div>
            </div>
          </div>
        </div>

        {/* Right Side: Registration Form */}
        <div className="lg:w-7/12 p-6 lg:p-10 bg-white">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">Become a Partner</h2>
            <p className="text-slate-500 text-sm font-medium">Complete the form below to get started</p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="fullName" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <User size={12} /> Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Rahul Sharma"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all text-sm font-medium placeholder:text-slate-300 bg-slate-50/50"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="mobile" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <Phone size={12} /> Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  placeholder="98765 43210"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all text-sm font-medium placeholder:text-slate-300 bg-slate-50/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <Mail size={12} /> Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="rahul@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all text-sm font-medium placeholder:text-slate-300 bg-slate-50/50"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="state" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <MapPin size={12} /> State
                </label>
                <div className="relative">
                  <select
                    id="state"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all bg-slate-50/50 appearance-none text-slate-900 text-sm font-medium"
                    value={selectedState}
                    onChange={handleStateChange}
                  >
                    <option value="" disabled>Select State</option>
                    {Object.keys(indianStatesAndDistricts).sort().map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="district" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <MapPin size={12} /> District
                </label>
                <div className="relative">
                  <select
                    id="district"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all bg-slate-50/50 appearance-none text-slate-900 text-sm font-medium disabled:opacity-50"
                    defaultValue=""
                    disabled={!selectedState}
                  >
                    <option value="" disabled>Select District</option>
                    {districts.sort().map((district) => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="pincode" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <MapPin size={12} /> Pincode
                </label>
                <input
                  type="text"
                  id="pincode"
                  placeholder="110001"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all text-sm font-medium placeholder:text-slate-300 bg-slate-50/50"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="partnerType" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <Briefcase size={12} /> Partner Type
              </label>
              <div className="relative">
                <select
                  id="partnerType"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all bg-slate-50/50 appearance-none text-slate-900 text-sm font-medium"
                  defaultValue="individual"
                >
                  <option value="individual">Individual/Retailer</option>
                  <option value="distributor">Distributor</option>
                  <option value="master_distributor">Master Distributor</option>
                  <option value="white_label">White Label Partner</option>
                  <option value="api_partner">API Partner</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-brand focus:ring-brand cursor-pointer"
              />
              <label htmlFor="terms" className="text-xs font-medium text-slate-600 cursor-pointer">
                I agree to the <a href="/terms" className="text-brand font-bold hover:underline">Terms</a> and <a href="/privacy" className="text-brand font-bold hover:underline">Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              className="group w-full flex justify-center items-center gap-3 py-3 px-6 border border-transparent rounded-xl shadow-[0_15px_30px_-10px_rgba(37,99,235,0.3)] text-base font-bold text-white bg-brand hover:bg-brand-dark focus:outline-none focus:ring-4 focus:ring-brand/20 transition-all active:scale-[0.98]"
            >
              Submit Application <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-slate-500 font-medium">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => {
                  window.location.href = '/';
                }}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-100 transition-all text-sm font-bold text-slate-700 shadow-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Google
              </button>
              <button
                type="button"
                onClick={() => {
                  window.location.href = '/';
                }}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-100 transition-all text-sm font-bold text-slate-700 shadow-sm"
              >
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
