import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Zest Pay Retailer', path: '/retailer' },
    { name: 'Zest Pay Distributor', path: '/distributor' },
    { name: 'White Label Partner', path: '/white-label' },
    { name: 'API Partner', path: '/api-partner' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const legalLinks = [
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
  ];

  return (
    <footer id="contact" className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                <span className="text-xl font-bold">Z</span>
              </div>
              <span className="text-2xl font-bold text-slate-900">Zest Pay</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm">
              Zest Pay delivers smart, Aadhaar-enabled payment solutions and digital financial services designed for modern businesses. From instant money transfers and utility bill payments to mobile recharges and travel bookings, we provide everything retailers need on one powerful platform. With secure transactions, fast settlements, and reliable support, Zest Pay helps entrepreneurs expand their services and increase earnings. Partner with Zest Pay and power your growth with confidence.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6">Our Services</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <span className="text-primary">🔹</span> Financial & Banking Solutions
                </h4>
                <ul className="space-y-2 pl-6">
                  {[
                    { name: 'AEPS Registration', path: '/services/aeps-registration' },
                    { name: 'Aadhaar ATM Services', path: '/services/aadhaar-atm-services' },
                    { name: 'Micro ATM Machine Services', path: '/services/micro-atm-machine-services' },
                    { name: 'Money Transfer Services', path: '/services/money-transfer-services' },
                    { name: 'EMI & Cash Collection', path: '/services/emi-cash-collection' },
                    { name: 'Digital Gold Selling', path: '/services/digital-gold-selling' }
                  ].map((service) => (
                    <li key={service.name}>
                      <Link to={service.path} className="text-slate-600 hover:text-primary transition-colors text-sm flex items-center group">
                        <ArrowUpRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <span className="text-primary">🔹</span> Recharge & Utility Services
                </h4>
                <ul className="space-y-2 pl-6">
                  {[
                    { name: 'Utility Bill Payments', path: '/services/utility-bill-payments' },
                    { name: 'Mobile & DTH Recharge', path: '/services/mobile-dth-recharge' }
                  ].map((service) => (
                    <li key={service.name}>
                      <Link to={service.path} className="text-slate-600 hover:text-primary transition-colors text-sm flex items-center group">
                        <ArrowUpRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <span className="text-primary">🔹</span> Travel & Ticketing Services
                </h4>
                <ul className="space-y-2 pl-6">
                  {[
                    { name: 'IRCTC Agent Registration', path: '/services/irctc-agent-registration' },
                    { name: 'Bus Ticketing Agent Services', path: '/services/bus-ticketing-agent-services' }
                  ].map((service) => (
                    <li key={service.name}>
                      <Link to={service.path} className="text-slate-600 hover:text-primary transition-colors text-sm flex items-center group">
                        <ArrowUpRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <span className="text-primary">🔹</span> Business & Agency Opportunities
                </h4>
                <ul className="space-y-2 pl-6">
                  {[
                    { name: 'Insurance Agent / Advisor Registration', path: '/services/insurance-agent-registration' },
                    { name: 'Gift Card Selling', path: '/services/gift-card-selling' },
                    { name: 'PAN Card Agent Registration', path: '/services/pan-card-agent-registration' }
                  ].map((service) => (
                    <li key={service.name}>
                      <Link to={service.path} className="text-slate-600 hover:text-primary transition-colors text-sm flex items-center group">
                        <ArrowUpRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Links & Legal */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6">Quick Links</h3>
            <ul className="space-y-3 mb-8">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-600 hover:text-primary transition-colors text-sm flex items-center group">
                    <ArrowUpRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold text-slate-900 mb-6">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-600 hover:text-primary transition-colors text-sm flex items-center group">
                    <ArrowUpRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6">Address</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-sm mb-1">Bharat Mitra Innovations Pvt Ltd.</p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    No 8 Crs Chalapathi Raju Layout<br />
                    Doddabasapur K Puram<br />
                    Bengaluru Karnataka 560036
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Call Us</p>
                  <p className="text-slate-900 font-medium text-sm">022 42123306</p>
                  <p className="text-slate-900 font-medium text-sm">022 42306306</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email Us</p>
                  <p className="text-slate-900 font-medium text-sm">info@Zestpay.co.in</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {currentYear} Zest Pay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
