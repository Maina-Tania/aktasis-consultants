import React, { useEffect } from 'react';
import ModernLayout from '../components/layout/ModernLayout';
import ModernHeroSection from '../components/home/ModernHeroSection';
import ModernAboutSection from '../components/home/ModernAboutSection';
import ModernProjectsSection from '../components/home/ModernMiningOperationsSection';
import ModernServicesSection from '../components/home/ModernVisionSection';
import ModernStatisticsSection from '../components/home/ModernStatisticsSection';
import ModernContactSection from '../components/home/ModernContactSection';

const ModernIndex = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ModernLayout>
      <div className="flex flex-col">
        <ModernHeroSection />
        <ModernAboutSection />
        <ModernProjectsSection />
        <ModernServicesSection />
        <ModernStatisticsSection />
        <ModernContactSection />
      </div>
    </ModernLayout>
  );
};

export default ModernIndex; 