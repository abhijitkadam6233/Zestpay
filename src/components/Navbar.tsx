import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

const Tooltip = ({ text }: { text: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 8, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 8, scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-primary text-white text-[11px] font-bold rounded-lg shadow-[0_8px_16px_rgba(37,99,235,0.25)] whitespace-nowrap z-50 pointer-events-none uppercase tracking-wider"
  >
    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45" />
    {text}
  </motion.div>
);

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showWhoWeAre, setShowWhoWeAre] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [showContact, setShowContact] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileWhoWeAreOpen, setMobileWhoWeAreOpen] = useState(false);

  const isSolid = scrolled || location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesList = [
    { name: 'AEPS Registration', id: 'aeps-registration' },
    { name: 'Aadhaar ATM Services', id: 'aadhaar-atm-services' },
    { name: 'Micro ATM Machine Services', id: 'micro-atm-machine-services' },
    { name: 'Money Transfer Services', id: 'money-transfer-services' },
    { name: 'EMI & Cash Collection', id: 'emi-cash-collection' },
    { name: 'Digital Gold Selling', id: 'digital-gold-selling' },
    { name: 'Utility Bill Payments', id: 'utility-bill-payments' },
    { name: 'Mobile & DTH Recharge', id: 'mobile-dth-recharge' },
    { name: 'IRCTC Agent Registration', id: 'irctc-agent-registration' },
    { name: 'Bus Ticketing Agent Services', id: 'bus-ticketing-agent-services' },
    { name: 'Insurance Agent Registration', id: 'insurance-agent-registration' },
    { name: 'Gift Card Selling', id: 'gift-card-selling' },
    { name: 'PAN Card Agent Registration', id: 'pan-card-agent-registration' }
  ];

  const whoWeAreList = [
    { name: 'Mission', href: '/mission' },
    { name: 'Vision', href: '/vision' }
  ];

  const navLinks: { name: string; to?: string; href?: string }[] = [
    { name: 'Home', to: '/' },
    { name: 'Opportunities', to: '/#opportunities' },
    { name: 'Income Calculator', to: '/income-calculator' },
    { name: 'Contact Us', to: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isSolid ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Logo className="scale-75 origin-left" />
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
                  Home
                </Link>
                <AnimatePresence>
                  {hoveredLink === 'Home' && <Tooltip text="Home" />}
                </AnimatePresence>
              </div>

              {/* Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-base font-medium transition-all ${
                    isSolid ? 'text-slate-700 hover:text-primary hover:bg-slate-100' : 'text-slate-700 hover:text-primary hover:bg-slate-100'
                  }`}
                >
                  Services <ChevronDown size={16} className={`transition-transform duration-200 ${showServices ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {showServices && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 mt-0 w-72 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-100 py-3 z-50 overflow-hidden"
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
                          </motion.div>
                        ))}
                        <div className="border-t border-slate-100 mt-2 pt-2">
                          <Link
                            to="/services"
                            onClick={() => setShowServices(false)}
                            className="px-6 py-3 text-[14px] text-primary hover:bg-primary/5 transition-all font-bold flex items-center justify-between group/item"
                          >
                            View All Services
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
                onMouseEnter={() => setShowWhoWeAre(true)}
                onMouseLeave={() => setShowWhoWeAre(false)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-base font-medium transition-all ${
                    isSolid ? 'text-slate-700 hover:text-primary hover:bg-slate-100' : 'text-slate-700 hover:text-primary hover:bg-slate-100'
                  }`}
                >
                  Who We Are <ChevronDown size={16} className={`transition-transform duration-200 ${showWhoWeAre ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {showWhoWeAre && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 mt-0 w-52 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-100 py-3 z-50 overflow-hidden"
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
                          >
                            <Link
                              to={item.href}
                              onClick={() => setShowWhoWeAre(false)}
                              className="px-6 py-2.5 text-[14px] text-slate-700 hover:bg-primary/5 hover:text-primary transition-all font-medium block"
                            >
                              {item.name}
                            </Link>
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
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className={`px-3 py-2 rounded-md text-base font-medium transition-all block ${
                        isSolid ? 'text-slate-700 hover:text-primary hover:bg-slate-100' : 'text-slate-700 hover:text-primary hover:bg-slate-100'
                      }`}
                    >
                      {link.name}
                    </a>
                  )}
                  <AnimatePresence>
                    {hoveredLink === link.name && <Tooltip text={link.name} />}
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
                  Register
                </Link>
                <AnimatePresence>
                  {hoveredLink === 'Register' && <Tooltip text="Register" />}
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
                  Login
                </Link>
                <AnimatePresence>
                  {hoveredLink === 'Login' && <Tooltip text="Login" />}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center">
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
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-b border-slate-100 overflow-y-auto max-h-[80vh] overscroll-contain shadow-inner"
          >
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
              }}
              className="px-4 pt-2 pb-12 space-y-1"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </motion.div>
              
              {/* Mobile Services */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="py-1"
              >
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between py-3 text-base font-bold text-slate-900 hover:text-primary transition-colors"
                >
                  <span className="flex items-center gap-2">Services</span>
                  <ChevronDown size={18} className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden pl-4 space-y-1"
                    >
                      {servicesList.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.id}`}
                          className="block py-2 text-sm text-slate-600 hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                      <Link
                        to="/services"
                        className="block py-2 text-sm text-primary font-bold border-t border-slate-50 mt-2 pt-2"
                        onClick={() => setIsOpen(false)}
                      >
                        View All Services
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Mobile Who We Are */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="py-1"
              >
                <button 
                  onClick={() => setMobileWhoWeAreOpen(!mobileWhoWeAreOpen)}
                  className="w-full flex items-center justify-between py-3 text-base font-bold text-slate-900 hover:text-primary transition-colors"
                >
                  <span className="flex items-center gap-2">Who We Are</span>
                  <ChevronDown size={18} className={`transition-transform duration-300 ${mobileWhoWeAreOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {mobileWhoWeAreOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden pl-4 space-y-1"
                    >
                      {whoWeAreList.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block py-2 text-sm text-slate-600 hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {navLinks.slice(1).map((link) => (
                <motion.div
                  key={link.name}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  className="py-1"
                >
                  {link.to ? (
                    <Link
                      to={link.to}
                      className="block py-3 text-base font-bold text-slate-900 hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="block py-3 text-base font-bold text-slate-900 hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  )}
                </motion.div>
              ))}

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="pt-4 pb-2 border-t border-slate-100 space-y-3"
              >
                <Link 
                  to="/register"
                  className="w-full block text-center bg-white text-slate-700 border border-slate-200 px-6 py-3 rounded-lg text-base font-semibold hover:bg-slate-50 hover:text-primary transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
                <Link 
                  to="/login"
                  className="w-full block text-center bg-white text-slate-700 border border-slate-200 px-6 py-3 rounded-lg text-base font-semibold hover:bg-slate-50 hover:text-primary transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
