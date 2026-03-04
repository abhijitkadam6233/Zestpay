import React, { useState } from 'react';
import { motion } from 'motion/react';
import { indianStatesAndDistricts } from '../data/indianStates';

const RegisterPage = () => {
  const [selectedState, setSelectedState] = useState('');
  const [districts, setDistricts] = useState<string[]>([]);

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const state = e.target.value;
    setSelectedState(state);
    setDistricts(indianStatesAndDistricts[state] || []);
  };

  return (
    <div className="min-h-screen bg-[#2563EB] pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Ready to Start Your Fintech Journey?
        </h1>
        <p className="text-base text-blue-100">
          Join thousands of successful partners and start earning from day one
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6"
      >
        <h2 className="text-xl font-bold text-slate-900 text-center mb-6">
          Become a Partner
        </h2>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-slate-700 mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                placeholder="Enter your mobile number"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-slate-700 mb-1">
                State
              </label>
              <div className="relative">
                <select
                  id="state"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white appearance-none text-slate-600"
                  value={selectedState}
                  onChange={handleStateChange}
                >
                  <option value="" disabled>Select State</option>
                  {Object.keys(indianStatesAndDistricts).sort().map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="district" className="block text-sm font-medium text-slate-700 mb-1">
                District
              </label>
              <div className="relative">
                <select
                  id="district"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white appearance-none text-slate-600"
                  defaultValue=""
                  disabled={!selectedState}
                >
                  <option value="" disabled>Select District</option>
                  {districts.sort().map((district) => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="pincode" className="block text-sm font-medium text-slate-700 mb-1">
                Pincode
              </label>
              <input
                type="text"
                id="pincode"
                placeholder="Enter pincode"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <label htmlFor="village" className="block text-sm font-medium text-slate-700 mb-1">
              Village/Town/City
            </label>
            <input
              type="text"
              id="village"
              placeholder="Enter your village, town or city"
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
            />
          </div>

          <div>
            <label htmlFor="partnerType" className="block text-sm font-medium text-slate-700 mb-1">
              Partner Type
            </label>
            <div className="relative">
              <select
                id="partnerType"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white appearance-none text-slate-900"
                defaultValue="individual"
              >
                <option value="individual">Individual/Retailer</option>
                <option value="distributor">Distributor</option>
                <option value="master_distributor">Master Distributor</option>
                <option value="white_label">White Label Partner</option>
                <option value="api_partner">API Partner</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-start pt-2">
            <div className="flex items-center h-5">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-medium text-slate-600">
                I agree to the <a href="/terms" className="text-blue-600 hover:text-blue-500">Terms & Conditions</a> and <a href="/privacy" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Submit Application
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
