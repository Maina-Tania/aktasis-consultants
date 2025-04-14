import React, { useEffect } from 'react';
import ModernHeroSection from '../components/home/ModernHeroSection';
import AboutSection from '../components/home/AboutSection';
import MiningOperationsSection from '../components/home/MiningOperationsSection';
import VisionSection from '../components/home/VisionSection';
import StatisticsSection from '../components/home/StatisticsSection';
import LeadershipSection from '../components/home/LeadershipSection';
import ContactSection from '../components/home/ContactSection';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Index = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <ModernHeroSection />
        <AboutSection />
        <MiningOperationsSection />
        <VisionSection />
        <StatisticsSection />
        <LeadershipSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
