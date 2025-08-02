
import React from 'react';
import ModernLayout from '../components/layout/ModernLayout';

const Terms = () => {
  return (
    <ModernLayout>
      <div className="container-custom py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Welcome to Aktasis Consultancy. These Terms of Service ("Terms") govern your use of our website located at www.aktasisconsultancy.com (the "Site") and form a binding legal agreement between you and Aktasis Consultancy.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using this Site, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Use License</h2>
            <p className="text-gray-600 mb-6">
              Permission is granted to temporarily download one copy of the materials (information or software) on Aktasis Consultancy's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
              <li>Attempt to decompile or reverse engineer any software contained on Aktasis Consultancy's website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              The materials on Aktasis Consultancy's website are provided on an 'as is' basis. Aktasis Consultancy makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Limitations</h2>
            <p className="text-gray-600 mb-6">
              In no event shall Aktasis Consultancy or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Aktasis Consultancy's website, even if Aktasis Consultancy or a Aktasis Consultancy authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Accuracy of Materials</h2>
            <p className="text-gray-600 mb-6">
              The materials appearing on Aktasis Consultancy's website could include technical, typographical, or photographic errors. Aktasis Consultancy does not warrant that any of the materials on its website are accurate, complete or current. Aktasis Consultancy may make changes to the materials contained on its website at any time without notice.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Links</h2>
            <p className="text-gray-600 mb-6">
              Aktasis Consultancy has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Aktasis Consultancy of the site. Use of any such linked website is at the user's own risk.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Modifications</h2>
            <p className="text-gray-600 mb-6">
              Aktasis Consultancy may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
            
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Last updated:</strong> January 2024<br />
                <strong>Contact:</strong> For questions about these Terms of Service, please contact us at legal@aktasisconsultancy.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </ModernLayout>
  );
};

export default Terms;
