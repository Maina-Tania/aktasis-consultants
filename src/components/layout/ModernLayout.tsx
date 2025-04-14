import React from 'react';
import ModernHeader from './ModernHeader';
import ModernFooter from './ModernFooter';

interface ModernLayoutProps {
  children: React.ReactNode;
}

const ModernLayout: React.FC<ModernLayoutProps> = ({ children }) => {
  return (
    <>
      <ModernHeader />
      <main>
        {children}
      </main>
      <ModernFooter />
    </>
  );
};

export default ModernLayout; 