
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const executiveTeam = [
  {
    name: 'Munene Vine',
    position: 'Chief Executive Officer',
    bio: 'With over 20 years in mining and sustainability, Munene leads Milgen Mines\' strategic vision and global growth. His expertise spans operational excellence, resource optimization, and ethical mining practices.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000'
  },
  {
    name: 'Sarah Kimani',
    position: 'Head of Research & Development',
    bio: 'Sarah spearheads our technological innovations, focusing on AI-driven exploration and eco-friendly mining solutions. Her background in geology and computer science drives our competitive advantage.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000'
  },
  {
    name: 'Mauyo Jaydenibra',
    position: 'Director of Operations',
    bio: 'Mauyo oversees all mining operations, ensuring regulatory compliance and operational efficiency. His expertise in logistics and international trade has strengthened our global supply chain.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000'
  }
];

const seniorManagement = [
  {
    name: 'Jane Mwangi',
    position: 'Chief Financial Officer',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000'
  },
  {
    name: 'David Omondi',
    position: 'Head of Sustainability',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1000'
  },
  {
    name: 'Asha Kariuki',
    position: 'Human Resources Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000'
  },
  {
    name: 'Ibrahim Hassan',
    position: 'Community Relations Manager',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000'
  },
  {
    name: 'Catherine Ndung\'u',
    position: 'Legal Counsel',
    image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=1000'
  },
  {
    name: 'Michael Njoroge',
    position: 'Head of Security',
    image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1000'
  }
];

const Leadership = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Updated with real mining image */}
        <section className="h-[50vh] relative flex items-center bg-[url('https://images.unsplash.com/photo-1597392526749-eda994cc75d1?q=80&w=1920')] bg-cover bg-center">
          <div className="absolute inset-0 bg-milgen-black bg-opacity-70"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our <span className="text-milgen-yellow">Leadership</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                Meet the experienced team guiding Milgen Mines to sustainable growth and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Executive Team */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Executive <span className="text-milgen-yellow">Team</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our executive leadership combines decades of industry expertise with visionary innovation to drive Milgen Mines forward.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {executiveTeam.map((executive, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6 group">
                    <div className="overflow-hidden rounded-lg">
                      <img 
                        src={executive.image} 
                        alt={executive.name} 
                        className="w-full h-96 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-milgen-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all duration-300">
                      <div className="flex gap-3 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <a 
                          href="#" 
                          className="w-10 h-10 bg-milgen-yellow rounded-full flex items-center justify-center"
                        >
                          <Linkedin size={20} className="text-milgen-black" />
                        </a>
                        <a 
                          href="#" 
                          className="w-10 h-10 bg-milgen-yellow rounded-full flex items-center justify-center"
                        >
                          <Twitter size={20} className="text-milgen-black" />
                        </a>
                        <a 
                          href="#" 
                          className="w-10 h-10 bg-milgen-yellow rounded-full flex items-center justify-center"
                        >
                          <Mail size={20} className="text-milgen-black" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">{executive.name}</h3>
                  <p className="text-milgen-yellow font-medium mb-3">{executive.position}</p>
                  <p className="text-gray-700">{executive.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Senior Management */}
        <section className="section-padding bg-milgen-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Senior <span className="text-milgen-yellow">Management</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our management team brings specialized expertise and operational leadership to every aspect of our business.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {seniorManagement.map((manager, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={manager.image} 
                      alt={manager.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{manager.name}</h3>
                    <p className="text-milgen-yellow">{manager.position}</p>
                    <div className="mt-4 flex gap-2">
                      <a 
                        href="#" 
                        className="text-gray-600 hover:text-milgen-yellow transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a 
                        href="#" 
                        className="text-gray-600 hover:text-milgen-yellow transition-colors"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture - Updated with real mining site image */}
        <section className="section-padding bg-milgen-black text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our <span className="text-milgen-yellow">Culture</span>
                </h2>
                <p className="text-lg mb-6">
                  At Milgen Mines, we foster a culture of innovation, integrity, and inclusivity. Our team members are empowered to contribute ideas, take ownership, and grow professionally.
                </p>
                <p className="text-lg mb-6">
                  We believe that diverse perspectives drive better decision-making and outcomes. Our leadership team is committed to creating an environment where all employees can thrive.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-milgen-yellow rounded-full mr-3"></div>
                    <p>Continuous learning and development</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-milgen-yellow rounded-full mr-3"></div>
                    <p>Work-life balance and wellness initiatives</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-milgen-yellow rounded-full mr-3"></div>
                    <p>Recognition for excellence and innovation</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-milgen-yellow rounded-full mr-3"></div>
                    <p>Environmental responsibility at all levels</p>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1626619540199-afd6d3fcd1f4?q=80&w=1920" 
                  alt="Mining team collaboration" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mining Operations Showcase - New section with mineral images */}
        <section className="section-padding bg-milgen-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-milgen-yellow">Mining Operations</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our leadership team oversees diverse mining operations across Kenya, ensuring sustainable extraction of valuable minerals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1586043511338-6ed43a9d0674?q=80&w=1000" 
                    alt="Gold Mining Operations" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Gold Mining</h3>
                  <p className="text-gray-700">
                    High-purity gold extraction operations in Migori & Western Kenya regions.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1618500299034-abce7ed0e8df?q=80&w=1000" 
                    alt="Gemstone Mining" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Gemstone Operations</h3>
                  <p className="text-gray-700">
                    Extraction of high-quality rubies, sapphires and garnets in Taita Taveta.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1606761568499-5d2d30cf57a2?q=80&w=1000" 
                    alt="Copper Mining" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Copper Operations</h3>
                  <p className="text-gray-700">
                    Sustainable copper recycling and processing facilities in Nairobi & Mombasa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="section-padding bg-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our <span className="text-milgen-yellow">Team</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              We're always looking for talented individuals who share our values and vision for responsible mining. Explore opportunities to grow with us.
            </p>
            <Link to="/contact" className="yellow-button">
              View Career Opportunities
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Leadership;
