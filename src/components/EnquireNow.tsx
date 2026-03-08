import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const EnquireNow = () => {
  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] hidden md:block"
    >
      <Link
        to="/contact"
        className="flex items-center gap-2 bg-brand text-white px-4 py-8 rounded-l-2xl shadow-xl hover:bg-brand-dark transition-all duration-300 group"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        <MessageSquare size={20} className="rotate-90 group-hover:scale-110 transition-transform" />
        <span className="font-bold tracking-widest uppercase text-sm">Enquire Now</span>
      </Link>
    </motion.div>
  );
};

export default EnquireNow;
