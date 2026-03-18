import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Eye } from 'lucide-react';

const VisionPage = () => {
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
            Our <span className="text-primary">Vision</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            Redefining how financial services are delivered and experienced across the nation.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-4">
              <Eye size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Vision – Zestpay</h3>
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
              <p>
                Our vision at Zestpay is to become one of India’s most trusted and impactful fintech platforms, redefining how financial services are delivered and experienced across the nation. We envision a future where every individual—regardless of geography, income level, or digital familiarity—has equal access to fast, affordable, and reliable financial solutions.
              </p>
              <p>
                Zestpay aspires to build a comprehensive digital financial ecosystem that seamlessly connects customers, retailers, distributors, and banking institutions. By leveraging innovation, data intelligence, and scalable technology infrastructure, we aim to set new standards in efficiency, transparency, and customer satisfaction within the fintech industry.
              </p>
              <p>
                We see ourselves playing a key role in advancing financial inclusion by empowering small retailers and entrepreneurs to participate actively in the digital economy. Our long-term goal is to create a strong nationwide network of partners who act as financial enablers within their communities, driving local economic growth.
              </p>
              <p>
                As India rapidly transitions toward a cashless and digitally connected economy, Zestpay intends to remain at the forefront of this transformation. We are committed to continuous innovation, regulatory compliance, and ethical business practices to build lasting trust among customers and stakeholders.
              </p>
              <p>
                Our vision is to make Zestpay synonymous with reliability, empowerment, and financial progress—helping shape a digitally inclusive India where financial services are not a privilege, but a right for all.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VisionPage;
