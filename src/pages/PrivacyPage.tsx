import React from 'react';
import { motion } from 'motion/react';

const PrivacyPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 pb-24 bg-slate-50 min-h-screen"
    >
      <div className="bg-slate-900 py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          How we collect, use, and protect your personal information.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 prose prose-slate max-w-none">
          <h2>1. Introduction</h2>
          <p>
            At Zest Pay, operated by Bharat Mitra Innovations Pvt Ltd., we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you use our website and services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We may collect the following types of information:
          </p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number, date of birth, and identification documents (e.g., Aadhaar, PAN) required for KYC verification.</li>
            <li><strong>Financial Information:</strong> Bank account details, transaction history, and payment information.</li>
            <li><strong>Technical Information:</strong> IP address, browser type, device identifiers, and usage data collected through cookies and similar technologies.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>
            We use the collected information for various purposes, including:
          </p>
          <ul>
            <li>Providing, operating, and maintaining our services.</li>
            <li>Processing transactions and sending related notifications.</li>
            <li>Verifying your identity and complying with legal and regulatory requirements (e.g., KYC/AML).</li>
            <li>Improving our platform, customer support, and user experience.</li>
            <li>Sending promotional communications and updates (with your consent).</li>
          </ul>

          <h2>4. Data Sharing and Disclosure</h2>
          <p>
            We do not sell your personal information. We may share your data with:
          </p>
          <ul>
            <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our platform, processing payments, or providing customer support.</li>
            <li><strong>Financial Institutions:</strong> Banks and payment gateways to facilitate transactions.</li>
            <li><strong>Legal Authorities:</strong> When required by law, regulation, or legal process to protect our rights or comply with a judicial proceeding.</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>
            We implement robust security measures, including encryption and secure servers, to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            You have the right to access, update, or request deletion of your personal information. You may also opt-out of receiving promotional communications. To exercise these rights, please contact us using the information below.
          </p>

          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website. Your continued use of the services after the changes take effect constitutes your acceptance of the revised policy.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at info@Zestpay.co.in.
          </p>
          
          <p className="text-sm text-slate-500 mt-8">Last updated: March 2024</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPage;
