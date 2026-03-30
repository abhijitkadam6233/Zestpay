import React from 'react';
import { motion } from 'motion/react';
import About from '../components/About';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <SEO 
        title="About Us" 
        description="Learn about Zestpay's mission to empower local retailers and our vision for financial inclusion across India."
        keywords="Zestpay about, mission, vision, fintech team, financial inclusion India"
      />
      <div className="bg-slate-900 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto px-4">
          Learn more about our mission, vision, and the team behind Zestpay.
        </p>
      </div>
      <About />
      <FAQ />
    </motion.div>
  );
};

export default AboutPage;
