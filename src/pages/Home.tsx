import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Opportunities from '../components/Opportunities';
import Partners from '../components/Partners';
import DownloadApp from '../components/DownloadApp';
import Impact from '../components/Impact';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <main>
      <SEO 
        title="Home" 
        description="Welcome to Zestpay - India's leading fintech platform for retailers and distributors. Access AEPS, Money Transfer, Bill Payments, and more."
        keywords="Zestpay home, fintech India, banking services, retailer portal, AEPS service"
      />
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <Partners />
      <DownloadApp />
      <Impact />
      <Opportunities />
    </main>
  );
};

export default Home;
