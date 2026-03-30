import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  User, 
  ArrowRight,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';
import Logo from '../components/Logo';

const banners = [
  {
    id: 0,
    image: "/auth-bg-1.png"
  },
  {
    id: 1,
    image: "/auth-bg-2.png"
  },
  {
    id: 2,
    image: "/auth-bg-3.png"
  },
  {
    id: 3,
    image: "/auth-bg-4.png"
  },
  {
    id: 4,
    image: "/auth-bg-5.png"
  }
];

const ForgotPasswordPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [identifier, setIdentifier] = useState('');
  const getImageUrl = (path: string) => {
    const baseUrl = import.meta.env.BASE_URL || '/';
    if (path.startsWith('http')) return path;
    const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    return `${cleanBase}${cleanPath}`;
  };

  // Auto-slide banners
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate sending reset link
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 30 } }
  };

  return (
    <div className="min-h-screen flex w-full bg-white font-sans selection:bg-brand/20 selection:text-brand">
      
      {/* Left Side: Banner Slider (Hidden on Mobile) */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-slate-50 px-12 pb-12 pt-6 xl:px-20 xl:pb-20 xl:pt-10">
        <div className="relative w-full h-full">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentBanner}
              src={getImageUrl(banners[currentBanner].image)}
              alt="Zestpay Banner"
              referrerPolicy="no-referrer"
              initial={{ opacity: 0, x: 20, scale: 1.02 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.98 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.4, 0, 0.2, 1] 
              }}
              className="absolute inset-0 w-full h-full object-contain object-top drop-shadow-2xl"
            />
          </AnimatePresence>
        </div>

        {/* Banner Content (Indicators only) */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end w-full h-full p-16 pb-12 pointer-events-none">
          {/* Slider Indicators */}
          <div className="flex gap-3 justify-center pointer-events-auto">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBanner(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentBanner === index ? 'w-8 bg-brand' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Side: Form Area */}
      <div className="w-full lg:w-1/2 flex flex-col px-6 py-12 sm:px-12 md:px-20 xl:px-32 relative z-10 overflow-y-auto bg-white">
        
        {/* Logo */}
        <div className="mb-12">
          <Link to="/" className="flex items-center">
            <Logo className="scale-90 origin-left" />
          </Link>
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-md w-full mx-auto lg:mx-0">
          
          <Link to="/login" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors mb-8 w-fit">
            <ArrowLeft size={16} /> Back to login
          </Link>

          {!isSuccess ? (
            <>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
                  Reset password
                </h1>
                <p className="text-slate-500 text-base mb-10">
                  Enter your Retailer ID or registered mobile number and we'll send you instructions to reset your password.
                </p>
              </motion.div>

              <motion.form 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="space-y-5" 
                onSubmit={handleSubmit}
              >
                <motion.div variants={itemVariants} className="space-y-2">
                  <label htmlFor="identifier" className="block text-sm font-medium text-slate-700">
                    Retailer ID / Mobile
                  </label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand transition-colors">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      id="identifier"
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      required
                      placeholder="Enter your ID or mobile number"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all text-sm font-medium placeholder:text-slate-400"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="pt-4">
                  <button
                    type="submit"
                    disabled={isLoading || !identifier.trim()}
                    className="group w-full flex justify-center items-center gap-2 py-3.5 px-6 rounded-xl text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-900/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-slate-900/20"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Send Reset Link <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.div>
              </motion.form>
            </>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} className="text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Check your messages</h2>
              <p className="text-slate-500 mb-8">
                We've sent password reset instructions to the contact details associated with <span className="font-semibold text-slate-700">{identifier}</span>.
              </p>
              <Link 
                to="/login"
                className="inline-flex justify-center items-center gap-2 py-3.5 px-6 rounded-xl text-base font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-slate-200 transition-all active:scale-[0.98] w-full"
              >
                Return to Login
              </Link>
            </motion.div>
          )}
        </div>
        
        {/* Footer Links */}
        <div className="mt-auto pt-12 flex items-center justify-between text-xs font-medium text-slate-400">
          <p>© 2026 Zestpay</p>
          <div className="flex gap-4">
            <Link to="/terms" className="hover:text-slate-600 transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-slate-600 transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
