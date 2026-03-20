import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { 
  User, 
  Lock, 
  QrCode,
  ArrowRight,
  Eye,
  EyeOff,
  Hexagon,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  X,
  DownloadCloud
} from 'lucide-react';

const banners = [
  {
    id: 0,
    title: "Highest Commissions",
    subtitle: "Earn industry-leading commission rates and grow your business with Zestpay.",
    image: "/login-1.png",
    fallback: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 1,
    title: "Lightning Fast Settlements",
    subtitle: "Get your money instantly with our real-time settlement infrastructure.",
    image: "/login-2.png",
    fallback: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Bank-Grade Security",
    subtitle: "Your transactions are protected by end-to-end AES-256 encryption.",
    image: "/login-3.png",
    fallback: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "24/7 Dedicated Support",
    subtitle: "Our expert team is always here to help you succeed and resolve any issues.",
    image: "/login-4.png",
    fallback: "https://images.unsplash.com/photo-1521791136364-798a7bc0d262?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Expand Your Reach",
    subtitle: "Join thousands of partners across the country and scale your business effortlessly.",
    image: "/login-5.png",
    fallback: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop"
  }
];

const LoginPage = () => {
  const [loginMethod, setLoginMethod] = useState<'credentials' | 'qr'>('credentials');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpLoading, setOtpLoading] = useState(false);

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
    // Simulate login check, then show OTP
    setTimeout(() => {
      setIsLoading(false);
      setShowOtpModal(true);
    }, 1500);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOtpLoading(true);
    // Simulate OTP verification
    setTimeout(() => {
      setOtpLoading(false);
      window.location.href = '/';
    }, 1500);
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
              src={banners[currentBanner].image}
              onError={(e) => {
                e.currentTarget.src = banners[currentBanner].fallback;
              }}
              alt={banners[currentBanner].title}
              referrerPolicy="no-referrer"
              initial={{ opacity: 0, x: 20, scale: 1.02 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.98 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.4, 0, 0.2, 1] // Custom cubic-bezier for smoother motion
              }}
              className="absolute inset-0 w-full h-full object-contain object-top drop-shadow-2xl"
            />
          </AnimatePresence>
        </div>

        {/* Banner Content */}
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

      {/* Right Side: Login Form Area */}
      <div className="w-full lg:w-1/2 flex flex-col px-6 py-12 sm:px-12 md:px-20 xl:px-32 relative z-10 overflow-y-auto bg-white">
        
        {/* Mobile Logo */}
        <div className="lg:hidden mb-12">
          <Link to="/" className="flex items-center">
            <Logo className="scale-90 origin-left" />
          </Link>
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-md w-full mx-auto lg:mx-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
              Welcome back
            </h1>
            <p className="text-slate-500 text-base mb-10">
              Enter your details to access your partner dashboard and manage your business.
            </p>
          </motion.div>

          {/* Segmented Control for Login Method */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex p-1 bg-slate-100/80 rounded-xl mb-8 border border-slate-200/60"
          >
            <button
              type="button"
              onClick={() => setLoginMethod('credentials')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
                loginMethod === 'credentials' 
                  ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-200/50' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <User size={16} className={loginMethod === 'credentials' ? 'text-brand' : ''} /> Credentials
            </button>
            <button
              type="button"
              onClick={() => setLoginMethod('qr')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
                loginMethod === 'qr' 
                  ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-200/50' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <QrCode size={16} className={loginMethod === 'qr' ? 'text-brand' : ''} /> QR Code
            </button>
          </motion.div>

          {loginMethod === 'credentials' ? (
            <motion.form 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="space-y-5" 
              onSubmit={handleSubmit}
            >
              <motion.div variants={itemVariants} className="space-y-2">
                <label htmlFor="retailerId" className="block text-sm font-medium text-slate-700">
                  Retailer ID / Mobile
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand transition-colors">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    id="retailerId"
                    required
                    placeholder="Enter your ID or mobile number"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all text-sm font-medium placeholder:text-slate-400"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <Link to="/forgot-password" className="text-sm font-semibold text-brand hover:text-brand-dark transition-colors">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand transition-colors">
                    <Lock size={18} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    required
                    placeholder="••••••••"
                    className="w-full pl-11 pr-12 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all text-sm font-medium placeholder:text-slate-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-brand focus:ring-brand/20 transition-colors cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600 cursor-pointer select-none">
                  Remember me
                </label>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group w-full flex justify-center items-center gap-2 py-3.5 px-6 rounded-xl text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-900/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-slate-900/20"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Login <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-6">
                <div className="relative flex items-center mb-8">
                  <div className="flex-grow border-t border-slate-100"></div>
                  <span className="flex-shrink mx-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Download Zestpay Application</span>
                  <div className="flex-grow border-t border-slate-100"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-3 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all cursor-pointer group">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-brand/10 transition-colors">
                      <DownloadCloud size={20} className="text-slate-600 group-hover:text-brand transition-colors" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider font-bold text-slate-400 leading-none mb-1">Current Version</p>
                      <p className="text-sm font-bold text-slate-900 leading-none">3.2.2</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all cursor-pointer group">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.60938 2.05151C3.41172 2.24917 3.2998 2.54565 3.2998 2.91455V21.0855C3.2998 21.4544 3.41172 21.7508 3.60938 21.9485L3.67529 22.0144L13.1118 12.5779V12.4221L3.67529 2.9856L3.60938 2.05151Z" fill="#EA4335"/>
                        <path d="M16.2541 15.7203L13.1118 12.5779V12.4221L16.2541 9.27972L16.3332 9.32583L20.0487 11.4339C21.1093 12.0334 21.1093 13.0139 20.0487 13.6134L16.3332 15.7215L16.2541 15.7203Z" fill="#FBBC04"/>
                        <path d="M16.3332 15.7215L13.1118 12.5779L3.67529 22.0144C4.02444 22.3833 4.59101 22.4294 5.23004 22.0671L16.3332 15.7215Z" fill="#34A853"/>
                        <path d="M16.3332 9.32583L5.23004 2.98022C4.59101 2.61793 4.02444 2.66404 3.67529 3.03294L13.1118 12.4694L16.3332 9.32583Z" fill="#4285F4"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider font-bold text-slate-400 leading-none mb-1">Download on the</p>
                      <p className="text-sm font-bold text-slate-900 leading-none">Google Play</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex justify-center gap-6 mt-8">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
                  <span className="sr-only">Facebook</span>
                  <Facebook size={20} fill="currentColor" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
                  <span className="sr-only">Twitter</span>
                  <Twitter size={20} fill="currentColor" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
                  <span className="sr-only">Instagram</span>
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin size={20} fill="currentColor" />
                </a>
              </motion.div>
            </motion.form>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center py-8"
            >
              <div className="relative p-2 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 mb-6">
                {/* Viewfinder corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-brand rounded-tl-2xl"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-brand rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-brand rounded-bl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-brand rounded-br-2xl"></div>
                
                <div className="w-48 h-48 bg-slate-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <QrCode size={80} className="text-slate-300" />
                  {/* Scanning animation line */}
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-brand/20 border-b border-brand/50 animate-[scan_2.5s_ease-in-out_infinite]"></div>
                </div>
              </div>
              <p className="text-sm text-slate-500 text-center font-medium max-w-[260px]">
                Open the Zestpay app and scan this QR code to sign in instantly.
              </p>
            </motion.div>
          )}

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <p className="text-sm text-slate-500">
              Don't have an account?{' '}
              <Link to="/register" className="text-slate-900 font-bold hover:underline decoration-2 underline-offset-4">
                Apply as a Partner
              </Link>
            </p>
          </motion.div>
        </div>
        
        {/* Footer Links */}
        <div className="mt-auto pt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
          <p className="text-sm font-semibold text-slate-500">
            © 2026 <span className="text-slate-900">Zestpay</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link to="/terms" className="text-sm font-bold text-slate-700 hover:text-brand transition-colors">Terms</Link>
            <Link to="/privacy" className="text-sm font-bold text-slate-700 hover:text-brand transition-colors">Privacy</Link>
          </div>
        </div>
      </div>

      {/* OTP Modal */}
      <AnimatePresence>
        {showOtpModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setShowOtpModal(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden"
            >
              <button 
                onClick={() => setShowOtpModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="text-brand" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Verify it's you</h3>
                <p className="text-slate-500 text-sm">
                  We've sent a 6-digit verification code to your registered mobile number.
                </p>
              </div>

              <form onSubmit={handleOtpSubmit}>
                <div className="mb-8">
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="\d*"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                    placeholder="Enter 6-digit OTP"
                    className="w-full h-14 text-center text-xl font-bold tracking-[0.5em] text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all placeholder:tracking-normal placeholder:font-medium placeholder:text-slate-400 placeholder:text-base"
                  />
                </div>

                <button
                  type="submit"
                  disabled={otpLoading || otp.length !== 6}
                  className="w-full flex justify-center items-center py-3.5 px-6 rounded-xl text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-900/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-slate-900/20 mb-4"
                >
                  {otpLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    'Verify & Proceed'
                  )}
                </button>

                <p className="text-center text-sm text-slate-500">
                  Didn't receive the code? <button type="button" className="text-brand font-semibold hover:text-brand-dark transition-colors">Resend OTP</button>
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes scan {
          0% { top: -50%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
