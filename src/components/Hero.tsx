import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const heroBanners = [
  {
    local: "/hero-1.png",
    fallback: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1920&auto=format&fit=crop"
  },
  {
    local: "/hero-2.png",
    fallback: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1920&auto=format&fit=crop"
  },
  {
    local: "/hero-3.png",
    fallback: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1920&auto=format&fit=crop"
  },
  {
    local: "/hero-4.png",
    fallback: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1920&auto=format&fit=crop"
  },
  {
    local: "/hero-5.png",
    fallback: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1920&auto=format&fit=crop"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full pt-20 bg-slate-50">
      <div className="relative w-full overflow-hidden aspect-[1920/550] md:max-h-[550px] bg-slate-900">
        <AnimatePresence initial={false} mode="wait">
          <motion.img 
            key={currentSlide}
            src={heroBanners[currentSlide].local} 
            onError={(e) => {
              e.currentTarget.src = heroBanners[currentSlide].fallback;
            }}
            alt={`Zestpay Banner ${currentSlide + 1}`} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.8,
              ease: "linear"
            }}
            className="absolute top-0 left-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
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
