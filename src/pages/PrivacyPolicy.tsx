
import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const PrivacyPolicy = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="container-custom py-16 md:py-24">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="mb-6">
              Last Updated: April 10, 2025
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              This Privacy Policy explains how Milgen Mines ("we," "our," or "us") collects, uses, shares, and protects your personal information when you visit our website, contact us, or interact with our services. We respect your privacy and are committed to protecting your personal information.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Personal Information</h3>
            <p className="mb-4">
              We may collect the following types of personal information:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Contact information (name, email address, phone number, postal address)</li>
              <li>Professional or employment-related information</li>
              <li>Communication preferences</li>
              <li>Information you provide in forms, surveys, or correspondence</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Technical Information</h3>
            <p className="mb-4">
              When you visit our website, we may automatically collect:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on those pages</li>
              <li>Referring website addresses</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">
              We use your personal information for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Responding to your inquiries and providing customer service</li>
              <li>Processing and fulfilling your requests or transactions</li>
              <li>Sending communications, including marketing materials, about our products, services, and events</li>
              <li>Improving our website, services, and business operations</li>
              <li>Conducting research and analysis to better understand our customers' needs</li>
              <li>Complying with legal obligations</li>
              <li>Protecting our rights, property, and safety, and the rights, property, and safety of others</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. How We Share Your Information</h2>
            <p className="mb-4">
              We may share your personal information with:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Service providers who perform services on our behalf</li>
              <li>Professional advisors, including lawyers, auditors, and insurers</li>
              <li>Government authorities or law enforcement officials if required by law</li>
              <li>Potential buyers or investors in the event of a business transaction (e.g., sale, merger, or acquisition)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Security</h2>
            <p className="mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>The right to access your personal information</li>
              <li>The right to rectify inaccurate personal information</li>
              <li>The right to request the deletion of your personal information</li>
              <li>The right to restrict or object to the processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent at any time</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Cookies and Similar Technologies</h2>
            <p className="mb-6">
              Our website uses cookies and similar technologies to enhance your experience, gather information about visitors, and track website usage. You can control cookies through your browser settings, but disabling cookies may limit your use of certain features on our website.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Changes to This Privacy Policy</h2>
            <p className="mb-6">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post the revised policy on our website with a new "Last Updated" date.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Contact Us</h2>
            <p className="mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="mb-6">
              Email: brinac.co@gmail.com<br />
              Phone: +254 757 476560<br />
              Address: Nairobi, Kenya
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
