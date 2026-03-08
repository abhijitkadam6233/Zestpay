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
    <div className="min-h-screen bg-slate-50 pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl w-full bg-white rounded-[2.5rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col lg:flex-row relative z-10 border border-slate-100">
        {/* Left Side: Marketing & Branding */}
        <div className="lg:w-5/12 bg-brand p-10 lg:p-14 text-white flex flex-col justify-between relative overflow-hidden">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-8 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Join 50,000+ Partners
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-[1.1] tracking-tight">
                Ready to Start Your <span className="text-brand-light">Fintech</span> Journey?
              </h1>
              <p className="text-lg text-white/80 mb-10 leading-relaxed font-medium">
                Empower your business with India's most trusted digital banking platform.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{benefit.title}</div>
                      <div className="text-xs text-white/60">{benefit.text}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-12 relative z-10 pt-10 border-t border-white/10">
            <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Trusted by industry leaders</div>
            <div className="flex gap-6 opacity-50 grayscale brightness-200">
              {/* Placeholder for partner logos */}
              <div className="h-6 w-20 bg-white/20 rounded"></div>
              <div className="h-6 w-20 bg-white/20 rounded"></div>
              <div className="h-6 w-20 bg-white/20 rounded"></div>
            </div>
          </div>
        </div>

        {/* Right Side: Registration Form */}
        <div className="lg:w-7/12 p-8 lg:p-14 bg-white">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Become a Partner</h2>
            <p className="text-slate-500 font-medium">Complete the form below to get started</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <User size={14} /> Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Rahul Sharma"
                  className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all text-sm font-medium placeholder:text-slate-300 bg-slate-50/50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="mobile" className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <Phone size={14} /> Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  placeholder="98765 43210"
                  className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all text-sm font-medium placeholder:text-slate-300 bg-slate-50/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <Mail size={14} /> Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="rahul@example.com"
                  className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all text-sm font-medium placeholder:text-slate-300 bg-slate-50/50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="state" className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <MapPin size={14} /> State
                </label>
                <div className="relative">
                  <select
                    id="state"
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all bg-slate-50/50 appearance-none text-slate-900 text-sm font-medium"
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="district" className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <MapPin size={14} /> District
                </label>
                <div className="relative">
                  <select
                    id="district"
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all bg-slate-50/50 appearance-none text-slate-900 text-sm font-medium disabled:opacity-50"
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
              <div className="space-y-2">
                <label htmlFor="pincode" className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <MapPin size={14} /> Pincode
                </label>
                <input
                  type="text"
                  id="pincode"
                  placeholder="110001"
                  className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all text-sm font-medium placeholder:text-slate-300 bg-slate-50/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="partnerType" className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <Briefcase size={14} /> Partner Type
              </label>
              <div className="relative">
                <select
                  id="partnerType"
                  className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all bg-slate-50/50 appearance-none text-slate-900 text-sm font-medium"
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

            <div className="flex items-center gap-3 pt-2">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-5 w-5 rounded-lg border-slate-300 text-brand focus:ring-brand cursor-pointer"
              />
              <label htmlFor="terms" className="text-sm font-medium text-slate-600 cursor-pointer">
                I agree to the <a href="/terms" className="text-brand font-bold hover:underline">Terms</a> and <a href="/privacy" className="text-brand font-bold hover:underline">Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              className="group w-full flex justify-center items-center gap-3 py-4 px-6 border border-transparent rounded-2xl shadow-[0_20px_40px_-10px_rgba(37,99,235,0.3)] text-base font-bold text-white bg-brand hover:bg-brand-dark focus:outline-none focus:ring-4 focus:ring-brand/20 transition-all active:scale-[0.98]"
            >
              Submit Application <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
