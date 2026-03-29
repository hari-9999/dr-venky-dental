import React from 'react';
import HeroSection from '../components/HeroSection';
import TrustSignals from '../components/TrustSignals';
import Services from '../components/Services';
import AboutDoctor from '../components/AboutDoctor';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <TrustSignals />
      <Services />
      <AboutDoctor />
      <Testimonials />
    </main>
  );
};

export default Home;
