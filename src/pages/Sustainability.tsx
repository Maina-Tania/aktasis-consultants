
import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Leaf, Users, Recycle, TreePine, Shield, Building2 } from 'lucide-react';

const Sustainability = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="h-[50vh] relative flex items-center bg-[url('https://images.unsplash.com/photo-1617500584008-4b4f0b10a1fd?q=80&w=1920')] bg-cover bg-center">
          <div className="absolute inset-0 bg-milgen-black bg-opacity-70"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our <span className="text-milgen-yellow">Sustainability</span> Journey
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                Balancing resource extraction with environmental stewardship and community development.
              </p>
            </div>
          </div>
        </section>

        {/* Main Pillars */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sustainability <span className="text-milgen-yellow">Pillars</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our approach to sustainability is built on three interconnected foundations that guide all our operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-milgen-light p-8 rounded-lg text-center">
                <div className="bg-white h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Leaf size={40} className="text-milgen-yellow" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Environmental</h3>
                <p className="text-gray-700">
                  We minimize our environmental footprint through responsible waste management, land rehabilitation, water conservation, and carbon reduction initiatives.
                </p>
              </div>
              
              <div className="bg-milgen-light p-8 rounded-lg text-center">
                <div className="bg-white h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Users size={40} className="text-milgen-yellow" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Social</h3>
                <p className="text-gray-700">
                  We invest in community development through education programs, healthcare facilities, infrastructure projects, and local business support.
                </p>
              </div>
              
              <div className="bg-milgen-light p-8 rounded-lg text-center">
                <div className="bg-white h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Building2 size={40} className="text-milgen-yellow" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Governance</h3>
                <p className="text-gray-700">
                  We maintain transparent operations, ethical business practices, regulatory compliance, and strong stakeholder engagement at all levels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Initiatives */}
        <section className="section-padding bg-milgen-black text-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Environmental <span className="text-milgen-yellow">Initiatives</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our commitment to environmental stewardship is reflected in concrete actions across all our operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg flex">
                <div className="mr-4">
                  <Recycle className="text-milgen-yellow" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Waste Reduction</h3>
                  <p className="text-gray-300">
                    Our closed-loop waste management systems recycle over 60% of operational waste. We're targeting 80% by 2027 through new material recovery processes.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg flex">
                <div className="mr-4">
                  <TreePine className="text-milgen-yellow" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Reforestation</h3>
                  <p className="text-gray-300">
                    For every acre of land used in mining, we plant twice as many trees in surrounding areas. We've planted over 50,000 native trees since 2020.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg flex">
                <div className="mr-4">
                  <Shield className="text-milgen-yellow" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Land Rehabilitation</h3>
                  <p className="text-gray-300">
                    Our post-mining rehabilitation converts former mining sites into productive agricultural land or restored natural habitats, exceeding regulatory requirements.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg flex">
                <div className="mr-4">
                  <Leaf className="text-milgen-yellow" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Carbon Reduction</h3>
                  <p className="text-gray-300">
                    We're transitioning to renewable energy sources, with solar power now supplying 30% of our processing facilities' energy needs, reducing our carbon footprint.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a href="#" className="yellow-button inline-flex items-center">
                Download Sustainability Report
              </a>
            </div>
          </div>
        </section>

        {/* Community Development */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Community <span className="text-milgen-yellow">Development</span>
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  At Milgen Mines, we believe our success is directly linked to the prosperity of the communities where we operate. We invest in initiatives that create lasting positive impact.
                </p>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-milgen-yellow pl-4">
                    <h3 className="font-bold text-xl mb-2">Educational Support</h3>
                    <p className="text-gray-700">Scholarships, school infrastructure, and teacher training programs reaching over 5,000 students.</p>
                  </div>
                  
                  <div className="border-l-4 border-milgen-yellow pl-4">
                    <h3 className="font-bold text-xl mb-2">Healthcare Access</h3>
                    <p className="text-gray-700">Mobile clinics, medical equipment donations, and healthcare worker training in mining communities.</p>
                  </div>
                  
                  <div className="border-l-4 border-milgen-yellow pl-4">
                    <h3 className="font-bold text-xl mb-2">Infrastructure Development</h3>
                    <p className="text-gray-700">Road construction, water systems, and renewable energy installations benefiting entire regions.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920" 
                  alt="Community development project" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Goals Section */}
        <section className="section-padding bg-milgen-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-milgen-yellow">Sustainability Goals</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We've set ambitious targets to guide our journey toward more sustainable mining practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">2025 Goals</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 50% renewable energy usage</li>
                  <li>• 70% water recycling in all operations</li>
                  <li>• Zero workplace incidents</li>
                  <li>• 1,000 additional local jobs created</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">2030 Goals</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 80% renewable energy usage</li>
                  <li>• 90% waste reduction and recycling</li>
                  <li>• 100,000 trees planted</li>
                  <li>• Support for 20 community-led businesses</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">2035 Goals</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Carbon-neutral operations</li>
                  <li>• Full implementation of automated mining</li>
                  <li>• Complete rehabilitation of all closed sites</li>
                  <li>• Self-sustaining community development funds</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Sustainability;
