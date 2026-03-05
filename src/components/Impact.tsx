import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'motion/react';

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={nodeRef}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const stats = [
  {
    target: 50000,
    suffix: "+",
    label: "Active retailers"
  },
  {
    target: 3000,
    suffix: "+",
    label: "Distributors"
  },
  {
    target: 24,
    suffix: "+",
    label: "States presence"
  },
  {
    target: 20,
    suffix: " Lakh+",
    label: "Monthly Transaction"
  }
];

const Impact = () => {
  return (
    <section className="pt-24 pb-12 bg-slate-900 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>
      <div className="absolute -top-48 -right-48 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4"
          >
            Our Global Reach
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            Making a Real <span className="text-primary">Impact</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto"
          >
            We are committed to bridging the financial gap and empowering communities across the nation.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tighter">
                  <Counter value={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.25em] group-hover:text-primary transition-colors">
                  {stat.label}
                </div>
              </div>
              {/* Decorative gradient line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
