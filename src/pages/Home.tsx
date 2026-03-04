import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Opportunities from '../components/Opportunities';
import Partners from '../components/Partners';
import Impact from '../components/Impact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <Partners />
      <Impact />
      <Opportunities />
    </main>
  );
};

export default Home;
