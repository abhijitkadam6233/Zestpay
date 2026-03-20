import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  User, 
  ArrowRight,
  ArrowLeft,
  Hexagon,
  CheckCircle2
} from 'lucide-react';

const banners = [
  {
    id: 0,
    title: "Secure Account Recovery",
    subtitle: "Quickly regain access to your Zestpay partner dashboard with our secure recovery process.",
    image: "/login-1.png"
  },
  {
    id: 1,
    title: "24/7 Dedicated Support",
    subtitle: "Our expert team is always here to help you succeed and resolve any issues.",
    image: "/login-2.png"
  }
];

const ForgotPasswordPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [identifier, setIdentifier] = useState('');

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
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentBanner}
            src={banners[currentBanner].image}
            alt={banners[currentBanner].title}
            referrerPolicy="no-referrer"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
        </AnimatePresence>

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-brand/10 mix-blend-overlay"></div>

        {/* Banner Content */}
        <div className="relative z-10 flex flex-col justify-end w-full h-full p-16 pb-24">
          <div className="mb-auto pt-8">
            <Link to="/" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity w-fit">
              <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center shadow-lg shadow-brand/20">
                <Hexagon size={24} strokeWidth={2.5} className="text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Zestpay</span>
            </Link>
          </div>

          <div className="max-w-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentBanner}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
                  {banners[currentBanner].title}
                </h2>
                <p className="text-lg text-slate-300 font-medium leading-relaxed">
                  {banners[currentBanner].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Indicators */}
          <div className="flex gap-3 mt-12">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBanner(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentBanner === index ? 'w-8 bg-brand' : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Side: Form Area */}
      <div className="w-full lg:w-1/2 flex flex-col px-6 py-12 sm:px-12 md:px-20 xl:px-32 relative z-10 overflow-y-auto bg-white">
        
        {/* Mobile Logo */}
        <div className="lg:hidden mb-12 flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center shadow-sm">
              <Hexagon size={24} strokeWidth={2.5} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900 tracking-tight">Zestpay</span>
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
