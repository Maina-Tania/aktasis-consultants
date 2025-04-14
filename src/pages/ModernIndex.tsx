import React, { useEffect } from 'react';
import ModernLayout from '../components/layout/ModernLayout';
import ModernHeroSection from '../components/home/ModernHeroSection';
import ModernAboutSection from '../components/home/ModernAboutSection';
import ModernMiningOperationsSection from '../components/home/ModernMiningOperationsSection';
import ModernVisionSection from '../components/home/ModernVisionSection';
import ModernStatisticsSection from '../components/home/ModernStatisticsSection';
import ModernLeadershipSection from '../components/home/ModernLeadershipSection';
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
        <ModernMiningOperationsSection />
        <ModernVisionSection />
        <ModernStatisticsSection />
        <ModernLeadershipSection />
        <ModernContactSection />
      </div>
    </ModernLayout>
  );
};

export default ModernIndex; 