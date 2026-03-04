import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'motion/react';
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
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white"
      >
        <Navbar />
        <Routes>
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
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
        <Footer />
      </motion.div>
    </Router>
  );
}

export default App;
