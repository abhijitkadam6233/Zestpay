import React from 'react';
import { motion } from 'motion/react';
import { Star, ArrowRight, Download } from 'lucide-react';

const DownloadApp = () => {
  const getImageUrl = (path: string) => {
    const baseUrl = import.meta.env.BASE_URL || '/';
    if (path.startsWith('http')) return path;
    const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    return `${cleanBase}${cleanPath}`;
  };

  return (
    <section className="pt-20 pb-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/5 skew-x-12 translate-x-1/4 -z-0 hidden lg:block"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand/10 rounded-full blur-[100px] -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 text-brand font-bold text-sm mb-6"
            >
              <Download size={16} />
              <span>Available on Android</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-[1.1]"
            >
              Download <span className="text-brand">Zestpay</span> application from Google Play Store
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Signup and create your account. In 48 hours you can start your own business and increase your income. Join the digital revolution today!
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 sm:gap-10"
            >
              {/* Google Play Button */}
              <a 
                href="#" 
                className="group relative inline-block transition-transform hover:scale-105 active:scale-95"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-brand to-brand-dark rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" 
                  alt="Get it on Google Play" 
                  className="h-14 sm:h-16 w-auto relative"
                  referrerPolicy="no-referrer"
                />
              </a>

              {/* Social Proof & Rating Group */}
              <div className="flex flex-col xs:flex-row items-center gap-6 sm:gap-8 xs:divide-x divide-slate-200">
                {/* Retailers */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex -space-x-3">
                    {[
                      "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?auto=format&fit=crop&q=80&w=100&h=100",
                      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=100&h=100",
                      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100"
                    ].map((url, i) => (
                      <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                        <img 
                          src={url} 
                          alt="Happy Retailer" 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-slate-900 text-base sm:text-lg leading-none">1 Lakh+</div>
                    <div className="text-slate-500 text-[10px] sm:text-xs mt-1">Happy Retailers</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="xs:pl-6 sm:pl-8">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-slate-900 text-lg sm:text-xl">4.8/5</span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <div className="text-slate-500 text-[10px] sm:text-xs text-left">Trusted Rating</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visuals - Enhanced Mockups */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              {/* Main Phone - Front */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-30 w-64 md:w-72 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] rounded-[3rem]"
              >
                <div className="bg-slate-900 rounded-[3rem] p-3 border-4 border-slate-800">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19.5] relative p-4 flex items-center justify-center">
                    <img 
                      src={getImageUrl('app-screen-1.png')} 
                      alt="Zestpay App Dashboard" 
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Secondary Phone - Back */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute z-20 -right-4 lg:-right-8 top-12 w-56 md:w-64 transform rotate-12 opacity-90"
              >
                <div className="bg-slate-900 rounded-[2.5rem] p-2.5 shadow-2xl border-4 border-slate-800">
                  <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5] relative p-4 flex items-center justify-center">
                    <img 
                      src={getImageUrl('app-screen-2.jpeg')} 
                      alt="Zestpay Services" 
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;

