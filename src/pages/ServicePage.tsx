import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, ArrowLeft, CheckCircle2, Zap, ShieldCheck, TrendingUp, Info } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const ServicePage = () => {
  const { serviceId } = useParams();
  
  const currentService = servicesData[serviceId || ''] || {
    title: serviceId?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || 'Service',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1200&h=675',
    description: 'Empower your retail business with our industry-leading platform. We provide the most secure, fast, and reliable infrastructure for all your digital financial needs.'
  };

  const serviceName = currentService.title;
  const getImageUrl = (path: string) => {
    const baseUrl = import.meta.env.BASE_URL || '/';
    if (path.startsWith('http')) return path;
    const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    return `${cleanBase}${cleanPath}`;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  return (
    <div className="pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-3 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-slate-900 font-medium">Services</span>
            <ChevronRight size={14} />
            <span className="text-primary font-semibold">{serviceName}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/" className="inline-flex items-center gap-2 text-primary font-semibold mb-6 hover:gap-3 transition-all">
                <ArrowLeft size={18} /> Back to Home
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                Professional <span className="text-primary">{serviceName}</span> Solutions
              </h1>
              <p className="text-base text-slate-600 mb-8 leading-relaxed">
                {currentService.description.split('\n\n')[0]}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-primary/20">
                  Register Now
                </button>
                <button className="border-2 border-slate-200 text-slate-700 px-6 py-3 rounded-full font-bold hover:bg-slate-50 transition-all">
                  Download Brochure
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[16/10] bg-blue-50 rounded-2xl overflow-hidden border border-blue-100 flex items-center justify-center">
                {currentService.image ? (
                  <img 
                    src={getImageUrl(currentService.image)} 
                    alt={`${serviceName} Banner`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-12">
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary mx-auto mb-6">
                      <Zap size={40} />
                    </div>
                    <p className="text-slate-400 font-medium">Interactive Demo Coming Soon</p>
                  </div>
                )}
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Description Section */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-primary">
              <Info size={20} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">About {serviceName}</h2>
          </div>
          <div className="prose prose-slate max-w-none">
            {currentService.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-slate-600 text-base leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Key Benefits of {serviceName}</h2>
            <p className="text-slate-600 text-sm">Why thousands of retailers trust Zestpay for their business growth.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Instant Settlement', desc: 'Get your commissions credited to your wallet instantly after every successful transaction.', icon: <Zap className="text-yellow-600" /> },
              { title: 'Highest Commission', desc: 'Earn the best-in-market commissions on every transaction you perform.', icon: <TrendingUp className="text-green-600" /> },
              { title: 'Bank Grade Security', desc: 'Your data and transactions are protected by 256-bit encryption and multi-factor authentication.', icon: <ShieldCheck className="text-blue-600" /> }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm"
              >
                <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[2rem] p-8 md:p-14 text-white overflow-hidden relative">
            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to start with {serviceName}?</h2>
                <div className="space-y-3">
                  {[
                    'Zero setup cost for new retailers',
                    'Real-time transaction monitoring',
                    'Dedicated 24/7 relationship manager',
                    'Marketing materials and branding support',
                    'Regular training and webinars'
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-green-400 flex-shrink-0" size={18} />
                      <span className="text-base opacity-90">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center lg:text-right">
                <button className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl">
                  Get Started Today
                </button>
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
