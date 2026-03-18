import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Target } from 'lucide-react';

const MissionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Our <span className="text-primary">Mission</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            Empowering India through secure, seamless, and technology-driven digital financial services.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Mission Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-4">
              <Target size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Mission – Zestpay</h3>
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
              <p>
                At Zestpay, our mission is to transform the financial landscape of India by delivering secure, seamless, and technology-driven digital financial services that empower individuals, retailers, and small businesses. We are committed to bridging the gap between traditional banking and modern fintech innovation by making essential financial services accessible to every corner of the country, including rural and underserved communities.
              </p>
              <p>
                We aim to simplify complex financial processes through an intuitive and reliable platform that offers services such as digital payments, money transfer, AEPS, bill payments, micro-ATM solutions, recharges, and other value-added financial products. By equipping retailers and distribution partners with robust tools and infrastructure, we enable them to become local financial service hubs within their communities.
              </p>
              <p>
                Security, transparency, and trust form the foundation of our operations. We continuously invest in advanced technology, compliance standards, and customer support systems to ensure safe and uninterrupted transactions. Our focus is not only on financial transactions but also on creating economic opportunities, generating sustainable income for our partners, and enhancing digital literacy.
              </p>
              <p>
                Through innovation, strong partnerships, and customer-centric solutions, Zestpay strives to contribute to India’s vision of a digitally empowered and financially inclusive nation. Our mission is to make digital finance simple, accessible, and beneficial for everyone.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MissionPage;
