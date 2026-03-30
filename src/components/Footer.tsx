import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t('About Us'), path: '/about' },
    { name: t('Zestpay Retailer'), path: '/retailer' },
    { name: t('Zestpay Distributor'), path: '/distributor' },
    { name: t('White Label Partner'), path: '/white-label' },
    { name: t('API Partner'), path: '/api-partner' },
    { name: t('Contact Us'), path: '/contact' },
  ];

  const legalLinks = [
    { name: t('Terms & Conditions'), path: '/terms' },
    { name: t('Privacy Policy'), path: '/privacy' },
  ];

  return (
    <footer id="contact" className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Logo className="scale-75 origin-left" dark />
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              {t('Zestpay delivers smart, Aadhaar-enabled payment solutions and digital financial services designed for modern businesses. From instant money transfers and utility bill payments to mobile recharges and travel bookings, we provide everything retailers need on one powerful platform. With secure transactions, fast settlements, and reliable support, Zestpay helps entrepreneurs expand their services and increase earnings. Partner with Zestpay and power your growth with confidence.')}
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: 'https://www.facebook.com/info.Zestpay' },
                { Icon: Twitter, href: '#' },
                { Icon: Instagram, href: 'https://www.instagram.com/info.zestpay' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/company/infozestpay/' },
                { Icon: Youtube, href: 'https://m.youtube.com/@zestpay' }
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">{t('Our Services')}</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
                  <span className="text-primary">🔹</span> {t('Financial & Banking Solutions')}
                </h4>
                <ul className="space-y-2 pl-6">
                  {[
                    { name: t('AEPS Registration'), path: '/services/aeps-registration' },
                    { name: t('Aadhaar ATM Services'), path: '/services/aadhaar-atm-services' },
                    { name: t('Micro ATM Machine Services'), path: '/services/micro-atm-machine-services' },
                    { name: t('Money Transfer Services'), path: '/services/money-transfer-services' },
                    { name: t('EMI & Cash Collection'), path: '/services/emi-cash-collection' },
                    { name: t('Digital Gold Selling'), path: '/services/digital-gold-selling' }
                  ].map((service) => (
                    <li key={service.name}>
                      <Link to={service.path} className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center group">
                        <ArrowUpRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
                  <span className="text-primary">🔹</span> {t('Recharge & Utility Services')}
                </h4>
                <ul className="space-y-2 pl-6">
                  {[
                    { name: t('Utility Bill Payments'), path: '/services/utility-bill-payments' },
                    { name: t('Mobile & DTH Recharge'), path: '/services/mobile-dth-recharge' }
                  ].map((service) => (
                    <li key={service.name}>
                      <Link to={service.path} className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center group">
                        <ArrowUpRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
                  <span className="text-primary">🔹</span> {t('Travel & Ticketing Services')}
                </h4>
                <ul className="space-y-2 pl-6">
                  {[
                    { name: t('IRCTC Agent Registration'), path: '/services/irctc-agent-registration' },
                    { name: t('Bus Ticketing Agent Services'), path: '/services/bus-ticketing-agent-services' }
                  ].map((service) => (
                    <li key={service.name}>
                      <Link to={service.path} className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center group">
                        <ArrowUpRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
                  <span className="text-primary">🔹</span> {t('Business & Agency Opportunities')}
                </h4>
                <ul className="space-y-2 pl-6">
                  {[
                    { name: t('Insurance Agent Registration'), path: '/services/insurance-agent-registration' },
                    { name: t('Gift Card Selling'), path: '/services/gift-card-selling' },
                    { name: t('PAN Card Agent Registration'), path: '/services/pan-card-agent-registration' }
                  ].map((service) => (
                    <li key={service.name}>
                      <Link to={service.path} className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center group">
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
            <h3 className="text-lg font-bold text-white mb-6">{t('Quick Links')}</h3>
            <ul className="space-y-3 mb-8">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center group">
                    <ArrowUpRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold text-white mb-6">{t('Legal')}</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center group">
                    <ArrowUpRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">{t('Address')}</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-1">Bharat Mitra Innovations Pvt Ltd.</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    No 8 Crs Chalapathi Raju Layout<br />
                    Doddabasapur K Puram<br />
                    Bengaluru Karnataka 560036
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-green-500 flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{t('Call Us')}</p>
                  <p className="text-white font-medium text-sm">022 42123306</p>
                  <p className="text-white font-medium text-sm">022 42306306</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{t('Email Us')}</p>
                  <p className="text-white font-medium text-sm">info@Zestpay.co.in</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {currentYear} Zestpay. {t('All rights reserved.')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
