import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, animate } from 'motion/react';

interface Stat {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

const Counter = ({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [value]);

  return (
    <span className="text-3xl md:text-4xl font-bold text-slate-900">
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
};

const LiveStats = () => {
  const stats: Stat[] = [
    { label: 'Transactions Processed Today', value: 150000, prefix: '₹' },
    { label: 'Active Retailers', value: 25000 },
    { label: 'Cities Covered', value: 500 },
  ];

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="mb-2">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
