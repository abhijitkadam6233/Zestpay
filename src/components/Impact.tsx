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
    <section className="pt-4 pb-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900"
          >
            Our Impact
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-bold text-blue-600 mb-2">
                <Counter value={stat.target} suffix={stat.suffix} />
              </div>
              <div className="text-slate-500 font-medium italic text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
