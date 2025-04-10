
import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Terms = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="container-custom py-16 md:py-24">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <p className="mb-6">
              Last Updated: April 10, 2025
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-6">
              Welcome to Milgen Mines. These Terms of Service ("Terms") govern your use of our website located at www.milgenmines.com (the "Site") and form a binding legal agreement between you and Milgen Mines.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Acceptance of Terms</h2>
            <p className="mb-6">
              By accessing or using the Site, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not access the Site.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Changes to Terms</h2>
            <p className="mb-6">
              We reserve the right to modify these Terms at any time. All changes are effective immediately upon posting on the Site. Your continued use of the Site following the posting of revised Terms means you accept and agree to the changes.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Accessing the Site</h2>
            <p className="mb-6">
              We reserve the right to withdraw or modify the Site, and any service or material we provide on the Site, at our sole discretion and without notice. We will not be liable if, for any reason, all or any part of the Site is unavailable at any time or for any period.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Intellectual Property Rights</h2>
            <p className="mb-6">
              The Site and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof), are owned by Milgen Mines, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Prohibited Uses</h2>
            <p className="mb-4">
              You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to use the Site:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation</li>
              <li>To impersonate or attempt to impersonate Milgen Mines, a Milgen Mines employee, another user, or any other person or entity</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Site, or which may harm Milgen Mines or users of the Site, or expose them to liability</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. User Contributions</h2>
            <p className="mb-6">
              The Site may contain message boards, chat rooms, personal web pages or profiles, forums, bulletin boards, and other interactive features that allow users to post, submit, publish, display, or transmit to other users or other persons content or materials on or through the Site. All User Contributions must comply with the Content Standards set out in these Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Disclaimer of Warranties</h2>
            <p className="mb-6">
              The Site and all contents, features, and functionality are provided "as is," "as available" basis, without any warranties of any kind, either express or implied. Neither Milgen Mines nor any person associated with Milgen Mines makes any warranty or representation with respect to the completeness, security, reliability, quality, accuracy, or availability of the Site.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Limitation on Liability</h2>
            <p className="mb-6">
              In no event will Milgen Mines, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Site, any websites linked to it, any content on the Site or such other websites, including any direct, indirect, special, incidental, consequential, or punitive damages.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Indemnification</h2>
            <p className="mb-6">
              You agree to defend, indemnify, and hold harmless Milgen Mines, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Site.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">11. Governing Law and Jurisdiction</h2>
            <p className="mb-6">
              These Terms and any dispute or claim arising out of or in connection with them or their subject matter or formation shall be governed by and construed in accordance with the laws of Kenya, without giving effect to any choice or conflict of law provision or rule.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">12. Contact Information</h2>
            <p className="mb-6">
              Questions about the Terms should be sent to us at brinac.co@gmail.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
