import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Who We <span className="text-primary">Are</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            Zest Pay is dedicated to transforming the financial landscape of India through technology and innovation.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission Section */}
          <motion.div 
            id="mission"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-8">
              <Target size={32} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Mission – Zest Pay</h3>
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
              <p>
                At Zest Pay, our mission is to transform the financial landscape of India by delivering secure, seamless, and technology-driven digital financial services that empower individuals, retailers, and small businesses. We are committed to bridging the gap between traditional banking and modern fintech innovation by making essential financial services accessible to every corner of the country, including rural and underserved communities.
              </p>
              <p>
                We aim to simplify complex financial processes through an intuitive and reliable platform that offers services such as digital payments, money transfer, AEPS, bill payments, micro-ATM solutions, recharges, and other value-added financial products. By equipping retailers and distribution partners with robust tools and infrastructure, we enable them to become local financial service hubs within their communities.
              </p>
              <p>
                Security, transparency, and trust form the foundation of our operations. We continuously invest in advanced technology, compliance standards, and customer support systems to ensure safe and uninterrupted transactions. Our focus is not only on financial transactions but also on creating economic opportunities, generating sustainable income for our partners, and enhancing digital literacy.
              </p>
              <p>
                Through innovation, strong partnerships, and customer-centric solutions, Zest Pay strives to contribute to India’s vision of a digitally empowered and financially inclusive nation. Our mission is to make digital finance simple, accessible, and beneficial for everyone.
              </p>
            </div>
          </motion.div>

          {/* Vision Section */}
          <motion.div 
            id="vision"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-8">
              <Eye size={32} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Vision – Zest Pay</h3>
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
              <p>
                Our vision at Zest Pay is to become one of India’s most trusted and impactful fintech platforms, redefining how financial services are delivered and experienced across the nation. We envision a future where every individual—regardless of geography, income level, or digital familiarity—has equal access to fast, affordable, and reliable financial solutions.
              </p>
              <p>
                Zest Pay aspires to build a comprehensive digital financial ecosystem that seamlessly connects customers, retailers, distributors, and banking institutions. By leveraging innovation, data intelligence, and scalable technology infrastructure, we aim to set new standards in efficiency, transparency, and customer satisfaction within the fintech industry.
              </p>
              <p>
                We see ourselves playing a key role in advancing financial inclusion by empowering small retailers and entrepreneurs to participate actively in the digital economy. Our long-term goal is to create a strong nationwide network of partners who act as financial enablers within their communities, driving local economic growth.
              </p>
              <p>
                As India rapidly transitions toward a cashless and digitally connected economy, Zest Pay intends to remain at the forefront of this transformation. We are committed to continuous innovation, regulatory compliance, and ethical business practices to build lasting trust among customers and stakeholders.
              </p>
              <p>
                Our vision is to make Zest Pay synonymous with reliability, empowerment, and financial progress—helping shape a digitally inclusive India where financial services are not a privilege, but a right for all.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
