import React from 'react';
import { motion } from 'motion/react';

const TermsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 pb-24 bg-slate-50 min-h-screen"
    >
      <div className="bg-slate-900 py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms & Conditions</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Please read these terms carefully before using our services.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 prose prose-slate max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Zestpay. These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you agree to be bound by these terms.
          </p>

          <h2>2. Use of Services</h2>
          <p>
            You must be at least 18 years old to use our services. You agree to use the platform only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials.
          </p>

          <h2>3. User Responsibilities</h2>
          <ul>
            <li>Provide accurate and complete information during registration.</li>
            <li>Do not engage in any fraudulent or illegal activities.</li>
            <li>Comply with all applicable laws and regulations.</li>
            <li>Do not attempt to disrupt or compromise the security of our platform.</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            All content, trademarks, logos, and intellectual property on the Zestpay platform are owned by Bharat Mitra Innovations Pvt Ltd. You may not use, reproduce, or distribute any content without our prior written consent.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            Zestpay shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services. We do not guarantee uninterrupted or error-free operation of the platform.
          </p>

          <h2>6. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on our website. Your continued use of the services constitutes acceptance of the updated terms.
          </p>

          <h2>7. Contact Information</h2>
          <p>
            If you have any questions or concerns regarding these Terms and Conditions, please contact us at info@Zestpay.co.in.
          </p>
          
          <p className="text-sm text-slate-500 mt-8">Last updated: March 2024</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsPage;
