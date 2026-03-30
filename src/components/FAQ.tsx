import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: t("What is Zestpay?"),
      answer: t("Zestpay is a leading fintech platform in India that empowers local retailers and entrepreneurs to provide essential banking and financial services to their communities, including AEPS, Money Transfer, and Bill Payments.")
    },
    {
      question: t("How can I become a Zestpay partner?"),
      answer: t("Becoming a partner is easy! Simply click on the 'Register' button on our website, fill in your details, and our team will get in touch with you to complete the KYC process and activate your dashboard.")
    },
    {
      question: t("What is AEPS (Aadhaar Enabled Payment System)?"),
      answer: t("AEPS is a bank-led model which allows online interoperable financial inclusion transactions at PoS (MicroATM) through the Business Correspondent of any bank using the Aadhaar authentication.")
    },
    {
      question: t("Are Zestpay transactions secure?"),
      answer: t("Yes, security is our top priority. We use industry-standard encryption and follow all regulatory guidelines set by NPCI and RBI to ensure every transaction is safe and secure.")
    },
    {
      question: t("What documents are required for registration?"),
      answer: t("Typically, you will need your Aadhaar Card, PAN Card, a passport-size photograph, and proof of your business location (like a shop photo or electricity bill).")
    },
    {
      question: t("How do I earn commissions with Zestpay?"),
      answer: t("Partners earn a commission on every successful transaction performed through their dashboard. The commission rates vary by service and are credited to your Zestpay wallet in real-time.")
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4 uppercase tracking-wider"
          >
            <HelpCircle size={18} />
            {t("FAQ")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            {t("Frequently Asked Questions")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            {t("Find answers to common questions about our services and partnership.")}
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-800 pr-8">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-slate-400 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
