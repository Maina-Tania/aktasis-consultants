
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const About = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="h-[50vh] relative flex items-center bg-[url('https://images.unsplash.com/photo-1485575301924-4e24746916fa?q=80&w=1920')] bg-cover bg-center">
          <div className="absolute inset-0 bg-milgen-black bg-opacity-70"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                <span className="text-milgen-yellow">About</span> Us
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                Discover the story, vision, and commitment that drive Milgen Mines.
              </p>
            </div>
          </div>
        </section>

        {/* Company History */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our <span className="text-milgen-yellow">Journey</span>
                </h2>
                <p className="text-lg text-gray-700">
                  Founded with a vision to harness Africa's mineral wealth responsibly, Milgen Mines has grown from a small exploration company to a key player in the African mining sector.
                </p>
                <p className="text-lg text-gray-700">
                  Our journey began with gemstone mining in Kenya's Taita Taveta region, gradually expanding into coltan, gold, and other valuable minerals across multiple regions.
                </p>
                <p className="text-lg text-gray-700">
                  Throughout our growth, we've maintained our commitment to sustainable practices, community development, and technological innovation.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1578594410744-81e47b8d53d5?q=80&w=1920" 
                  alt="Mining operations history" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-milgen-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-milgen-yellow">Core Values</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                At Milgen Mines, everything we do is guided by our commitment to these foundational principles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Sustainability</h3>
                <p className="text-gray-700">
                  We extract resources responsibly, conserve environments, and restore land post-mining operations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-700">
                  We embrace cutting-edge technologies to enhance safety, efficiency, and environmental protection.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Community</h3>
                <p className="text-gray-700">
                  We invest in local communities through education, infrastructure, and employment opportunities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-gray-700">
                  We operate with transparency, honesty, and ethical standards in all our business dealings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Factors */}
        <section className="section-padding bg-milgen-black text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our <span className="text-milgen-yellow">Success Factors</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-milgen-yellow">Skilled Workforce</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <Check className="text-milgen-yellow mr-3 shrink-0 mt-1" size={20} />
                    <span>Expert geologists with deep knowledge of African minerals</span>
                  </li>
                  <li className="flex">
                    <Check className="text-milgen-yellow mr-3 shrink-0 mt-1" size={20} />
                    <span>Experienced engineers implementing best practices</span>
                  </li>
                  <li className="flex">
                    <Check className="text-milgen-yellow mr-3 shrink-0 mt-1" size={20} />
                    <span>Skilled local miners trained in modern techniques</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-milgen-yellow">Rich Mineral Reserves</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <Check className="text-milgen-yellow mr-3 shrink-0 mt-1" size={20} />
                    <span>Strategically located operations in mineral-rich regions</span>
                  </li>
                  <li className="flex">
                    <Check className="text-milgen-yellow mr-3 shrink-0 mt-1" size={20} />
                    <span>Diverse portfolio of high-demand minerals</span>
                  </li>
                  <li className="flex">
                    <Check className="text-milgen-yellow mr-3 shrink-0 mt-1" size={20} />
                    <span>Advanced geological surveying for optimal extraction</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-milgen-yellow">Advanced Technology</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <Check className="text-milgen-yellow mr-3 shrink-0 mt-1" size={20} />
                    <span>AI-driven exploration and operational optimization</span>
                  </li>
                  <li className="flex">
                    <Check className="text-milgen-yellow mr-3 shrink-0 mt-1" size={20} />
                    <span>Modern equipment enhancing safety and output</span>
                  </li>
                  <li className="flex">
                    <Check className="text-milgen-yellow mr-3 shrink-0 mt-1" size={20} />
                    <span>Research partnerships advancing mining innovation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link to="/contact" className="yellow-button">
                Partner With Us
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
