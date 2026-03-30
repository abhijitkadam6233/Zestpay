import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

const Tooltip = ({ text }: { text: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 8, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 8, scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-slate-900 text-white text-[11px] font-bold rounded-lg shadow-[0_8px_16px_rgba(0,0,0,0.15)] whitespace-nowrap z-50 pointer-events-none uppercase tracking-wider"
  >
    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45" />
    {text}
  </motion.div>
);

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showWhoWeAre, setShowWhoWeAre] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [showContact, setShowContact] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileWhoWeAreOpen, setMobileWhoWeAreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSolid = scrolled || location.pathname !== '/';

  const servicesList = [
    { name: t('AEPS Registration'), id: 'aeps-registration' },
    { name: t('Aadhaar ATM Services'), id: 'aadhaar-atm-services' },
    { name: t('Micro ATM Machine Services'), id: 'micro-atm-machine-services' },
    { name: t('Money Transfer Services'), id: 'money-transfer-services' },
    { name: t('EMI & Cash Collection'), id: 'emi-cash-collection' },
    { name: t('Digital Gold Selling'), id: 'digital-gold-selling' },
    { name: t('Utility Bill Payments'), id: 'utility-bill-payments' },
    { name: t('Mobile & DTH Recharge'), id: 'mobile-dth-recharge' },
    { name: t('IRCTC Agent Registration'), id: 'irctc-agent-registration' },
    { name: t('Bus Ticketing Agent Services'), id: 'bus-ticketing-agent-services' },
    { name: t('Insurance Agent Registration'), id: 'insurance-agent-registration' },
    { name: t('Gift Card Selling'), id: 'gift-card-selling' },
    { name: t('PAN Card Agent Registration'), id: 'pan-card-agent-registration' }
  ];

  const whoWeAreList = [
    { name: t('Mission'), href: '/mission' },
    { name: t('Vision'), href: '/vision' }
  ];

  const navLinks: { name: string; label: string; to?: string; href?: string }[] = [
    { name: 'Home', label: t('Home'), to: '/' },
    { name: 'Opportunities', label: t('Opportunities'), to: '/#opportunities' },
    { name: 'Income Calculator', label: t('Income Calculator'), to: '/income-calculator' },
    { name: 'Contact Us', label: t('Contact Us'), to: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isSolid ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Logo isSolid={isSolid} />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              <div 
                className="relative"
                onMouseEnter={() => setHoveredLink('Home')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link
                  to="/"
                  className={`px-3 py-2 rounded-md text-base font-medium transition-all ${
                    isSolid ? 'text-slate-700 hover:text-primary hover:bg-slate-100' : 'text-slate-700 hover:text-primary hover:bg-slate-100'
                  }`}
                >
                  {t('Home')}
                </Link>
                <AnimatePresence>
                  {hoveredLink === 'Home' && <Tooltip text="Home" />}
                </AnimatePresence>
              </div>

              {/* Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => { setShowServices(true); setHoveredLink('Services'); }}
                onMouseLeave={() => { setShowServices(false); setHoveredLink(null); }}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-base font-medium transition-all ${
                    isSolid ? 'text-slate-700 hover:text-primary hover:bg-slate-100' : 'text-slate-700 hover:text-primary hover:bg-slate-100'
                  }`}
                >
                  {t('Services')} <ChevronDown size={16} className={`transition-transform duration-200 ${showServices ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {hoveredLink === 'Services' && <Tooltip text={t('Services')} />}
                </AnimatePresence>
                
                <AnimatePresence>
                  {showServices && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 mt-0 w-72 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-100 py-3 z-50"
                    >
                      <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={{
                          visible: { transition: { staggerChildren: 0.03 } }
                        }}
                        className="flex flex-col"
                      >
                        {servicesList.map((service) => (
                          <motion.div
                            key={service.id}
                            variants={{
                              hidden: { opacity: 0, x: -10 },
                              visible: { opacity: 1, x: 0 }
                            }}
                            className="relative"
                            onMouseEnter={() => setHoveredLink(service.id)}
                            onMouseLeave={() => setHoveredLink(null)}
                          >
                            <Link
                              to={`/services/${service.id}`}
                              onClick={() => setShowServices(false)}
                              className="px-6 py-2.5 text-[14px] text-slate-700 hover:bg-primary/5 hover:text-primary transition-all font-medium flex items-center justify-between group/item"
                            >
                              {service.name}
                              <motion.span 
                                initial={{ opacity: 0, x: -5 }}
                                whileHover={{ opacity: 1, x: 0 }}
                                className="text-primary opacity-0 group-hover/item:opacity-100 transition-opacity"
                              >
                                →
                              </motion.span>
                            </Link>
                            <AnimatePresence>
                              {hoveredLink === service.id && <Tooltip text={service.name} />}
                            </AnimatePresence>
                          </motion.div>
                        ))}
                        <div className="border-t border-slate-100 mt-2 pt-2">
                          <Link
                            to="/services"
                            onClick={() => setShowServices(false)}
                            className="px-6 py-3 text-[14px] text-primary hover:bg-primary/5 transition-all font-bold flex items-center justify-between group/item"
                          >
                            {t('View All Services')}
                            <span className="group-hover/item:translate-x-1 transition-transform">→</span>
                          </Link>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Who We Are Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => { setShowWhoWeAre(true); setHoveredLink('Who We Are'); }}
                onMouseLeave={() => { setShowWhoWeAre(false); setHoveredLink(null); }}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-base font-medium transition-all ${
                    isSolid ? 'text-slate-700 hover:text-primary hover:bg-slate-100' : 'text-slate-700 hover:text-primary hover:bg-slate-100'
                  }`}
                >
                  {t('Who We Are')} <ChevronDown size={16} className={`transition-transform duration-200 ${showWhoWeAre ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {hoveredLink === 'Who We Are' && <Tooltip text={t('Who We Are')} />}
                </AnimatePresence>
                
                <AnimatePresence>
                  {showWhoWeAre && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 mt-0 w-52 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-100 py-3 z-50"
                    >
                      <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={{
                          visible: { transition: { staggerChildren: 0.05 } }
                        }}
                        className="flex flex-col"
                      >
                        {whoWeAreList.map((item) => (
                          <motion.div
                            key={item.name}
                            variants={{
                              hidden: { opacity: 0, x: -10 },
                              visible: { opacity: 1, x: 0 }
                            }}
                            className="relative"
                            onMouseEnter={() => setHoveredLink(item.name)}
                            onMouseLeave={() => setHoveredLink(null)}
                          >
                            <Link
                              to={item.href}
                              onClick={() => setShowWhoWeAre(false)}
                              className="px-6 py-2.5 text-[14px] text-slate-700 hover:bg-primary/5 hover:text-primary transition-all font-medium block"
                            >
                              {item.name}
                            </Link>
                            <AnimatePresence>
                              {hoveredLink === item.name && <Tooltip text={item.name} />}
                            </AnimatePresence>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(1).map((link) => (
                <div 
                  key={link.name} 
                  className="relative"
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.to ? (
                    <Link
                      to={link.to}
                      className={`px-3 py-2 rounded-md text-base font-medium transition-all block ${
                        isSolid ? 'text-slate-700 hover:text-primary hover:bg-slate-100' : 'text-slate-700 hover:text-primary hover:bg-slate-100'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className={`px-3 py-2 rounded-md text-base font-medium transition-all block ${
                        isSolid ? 'text-slate-700 hover:text-primary hover:bg-slate-100' : 'text-slate-700 hover:text-primary hover:bg-slate-100'
                      }`}
                    >
                      {link.label}
                    </a>
                  )}
                  <AnimatePresence>
                    {hoveredLink === link.name && <Tooltip text={link.label} />}
                  </AnimatePresence>
                </div>
              ))}

              <div 
                className="relative"
                onMouseEnter={() => setHoveredLink('Register')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link 
                  to="/register"
                  className={`px-4 py-2 rounded-md text-base font-semibold transition-all inline-block ${
                    isSolid ? 'text-slate-700 hover:text-primary hover:bg-slate-100' : 'text-slate-700 hover:text-primary hover:bg-slate-100'
                  }`}
                >
                  {t('Register')}
                </Link>
                <AnimatePresence>
                  {hoveredLink === 'Register' && <Tooltip text={t('Register')} />}
                </AnimatePresence>
              </div>

              <div 
                className="relative"
                onMouseEnter={() => setHoveredLink('Login')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link 
                  to="/login"
                  className={`px-4 py-2 rounded-md text-base font-semibold transition-all block ${
                    isSolid ? 'text-slate-700 hover:text-primary hover:bg-slate-100' : 'text-slate-700 hover:text-primary hover:bg-slate-100'
                  }`}
                >
                  {t('Login')}
                </Link>
                <AnimatePresence>
                  {hoveredLink === 'Login' && <Tooltip text={t('Login')} />}
                </AnimatePresence>
              </div>

              {/* Language Switcher */}
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isSolid ? 'text-slate-700' : 'text-slate-700'
              } hover:text-primary focus:outline-none`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile Menu Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[85%] max-w-sm bg-white z-50 md:hidden shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-100">
                <Logo />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-500 hover:text-primary transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-8 space-y-2">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    to="/"
                    className={`block py-3 text-lg font-bold transition-colors ${location.pathname === '/' ? 'text-primary' : 'text-slate-900'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {t('Home')}
                  </Link>
                </motion.div>
                
                {/* Mobile Services */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  className="py-1"
                >
                  <button 
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between py-3 text-lg font-bold text-slate-900 hover:text-primary transition-colors"
                  >
                    <span>{t('Services')}</span>
                    <ChevronDown size={20} className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pl-4 border-l-2 border-slate-100 ml-1 mt-1 space-y-1"
                      >
                        {servicesList.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services/${service.id}`}
                            className="block py-2.5 text-base font-medium text-slate-600 hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                        <Link
                          to="/services"
                          className="block py-3 text-base text-primary font-bold mt-2"
                          onClick={() => setIsOpen(false)}
                        >
                          {t('View All Services')} →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Mobile Who We Are */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="py-1"
                >
                  <button 
                    onClick={() => setMobileWhoWeAreOpen(!mobileWhoWeAreOpen)}
                    className="w-full flex items-center justify-between py-3 text-lg font-bold text-slate-900 hover:text-primary transition-colors"
                  >
                    <span>{t('Who We Are')}</span>
                    <ChevronDown size={20} className={`transition-transform duration-300 ${mobileWhoWeAreOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {mobileWhoWeAreOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pl-4 border-l-2 border-slate-100 ml-1 mt-1 space-y-1"
                      >
                        {whoWeAreList.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block py-2.5 text-base font-medium text-slate-600 hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {navLinks.slice(1).map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + (idx * 0.05) }}
                    className="py-1"
                  >
                    {link.to ? (
                      <Link
                        to={link.to}
                        className={`block py-3 text-lg font-bold transition-colors ${location.pathname === link.to ? 'text-primary' : 'text-slate-900'}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="block py-3 text-lg font-bold text-slate-900 hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </a>
                    )}
                  </motion.div>
                ))}

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6 mt-6 border-t border-slate-100 space-y-6"
                >
                  <div className="grid grid-cols-2 gap-3">
                    <Link 
                      to="/register"
                      className="flex items-center justify-center bg-slate-100 text-slate-900 px-4 py-4 rounded-xl text-sm font-bold hover:bg-slate-200 transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      {t('Register')}
                    </Link>
                    <Link 
                      to="/login"
                      className="flex items-center justify-center bg-primary text-white px-4 py-4 rounded-xl text-sm font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      {t('Login')}
                    </Link>
                  </div>
                </motion.div>
              </div>

              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <div className="flex items-center gap-4 text-slate-500">
                  <a href="tel:02242123306" className="flex-1 flex flex-col items-center gap-1 p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <Phone size={18} className="text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Call</span>
                  </a>
                  <a href="mailto:info@Zestpay.co.in" className="flex-1 flex flex-col items-center gap-1 p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <Mail size={18} className="text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Email</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
