import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MissionPage from './pages/MissionPage';
import VisionPage from './pages/VisionPage';
import ServicePage from './pages/ServicePage';
import AllServices from './pages/AllServices';
import IncomeCalculator from './pages/IncomeCalculator';
import AboutPage from './pages/AboutPage';
import RetailerPage from './pages/RetailerPage';
import DistributorPage from './pages/DistributorPage';
import WhiteLabelPage from './pages/WhiteLabelPage';
import ApiPartnerPage from './pages/ApiPartnerPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';

const AppContent = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/forgot-password';

  return (
    <>
      <ScrollToTop />
      {!isAuthPage && <Navbar />}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="min-h-screen bg-white"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/services" element={<AllServices />} />
            <Route path="/services/:serviceId" element={<ServicePage />} />
            <Route path="/income-calculator" element={<IncomeCalculator />} />
            <Route path="/retailer" element={<RetailerPage />} />
            <Route path="/distributor" element={<DistributorPage />} />
            <Route path="/white-label" element={<WhiteLabelPage />} />
            <Route path="/api-partner" element={<ApiPartnerPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      {!isAuthPage && <Footer />}
      <ScrollToTopButton />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
