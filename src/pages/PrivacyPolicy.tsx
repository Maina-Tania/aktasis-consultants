
import React from 'react';
import ModernLayout from '../components/layout/ModernLayout';

const PrivacyPolicy = () => {
  return (
    <ModernLayout>
      <div className="container-custom py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              At Aktasis Consultancy, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.aktasisconsultancy.com or use our services.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              We collect information that you provide directly to us, such as when you fill out our contact form, request a consultation, or communicate with us. This may include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Name and contact information (email, phone number)</li>
              <li>Project details and requirements</li>
              <li>Budget and timeline information</li>
              <li>Any other information you choose to provide</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Provide and improve our architectural services</li>
              <li>Communicate with you about your projects</li>
              <li>Send you updates about our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Comply with legal obligations</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Information Sharing</h2>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Service providers who assist us in operating our website and providing services</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your explicit consent</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Cookies and Tracking</h2>
            <p className="text-gray-600 mb-6">
              Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences. We use these technologies to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Improve our website functionality</li>
              <li>Provide personalized content</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Rights</h2>
            <p className="text-gray-600 mb-6">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to our processing of your information</li>
              <li>Withdraw consent at any time</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Children's Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-600">
                <strong>Aktasis Consultancy</strong><br />
                Email: privacy@aktasisconsultancy.com<br />
                Phone: +1 (555) 123-4567<br />
                Address: Downtown Design District, 123 Architecture Ave, Suite 100
              </p>
            </div>
            
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Last updated:</strong> January 2024<br />
                <strong>Effective date:</strong> January 1, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </ModernLayout>
  );
};

export default PrivacyPolicy;
