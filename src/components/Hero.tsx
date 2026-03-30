import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const heroBanners = [
  { local: "hero-1.png.png" },
  { local: "hero-2.png.png" },
  { local: "hero-3.png.png" },
  { local: "hero-4.png.png" },
  { local: "hero-5.png.png" }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const getImageUrl = (path: string) => {
    const baseUrl = import.meta.env.BASE_URL || '/';
    if (path.startsWith('http')) return path;
    const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    return `${cleanBase}${cleanPath}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-white pt-20 md:pt-24">
      <div className="relative w-full overflow-hidden bg-white grid">
        <AnimatePresence initial={false}>
          <motion.img 
            key={currentSlide}
            src={getImageUrl(heroBanners[currentSlide].local)} 
            alt={`Zestpay Banner ${currentSlide + 1}`} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.8,
              ease: "linear"
            }}
            className="w-full h-auto col-start-1 row-start-1 object-contain"
          />
        </AnimatePresence>
        
        {/* Slider Indicators */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroBanners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'w-8 md:w-10 bg-brand' : 'w-2 md:w-2.5 bg-brand/30 hover:bg-brand/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
