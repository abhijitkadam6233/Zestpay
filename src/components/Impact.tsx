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
    <section className="py-12 bg-slate-50 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
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
            className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight"
          >
            Making a Real <span className="text-primary">Impact</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
          >
            We are committed to bridging the financial gap and empowering communities across the nation.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-2 tracking-tighter">
                  <Counter value={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-slate-500 font-bold text-[10px] md:text-xs uppercase tracking-[0.25em] group-hover:text-primary transition-colors">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
