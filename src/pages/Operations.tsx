
import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { MapPin, ArrowRight, BarChart3, Truck } from 'lucide-react';

const operations = [
  {
    id: 'gemstones',
    title: 'Gemstones',
    locations: 'Taita Taveta & Garbatula',
    description: 'Extraction of high-quality rubies, sapphires and garnets for luxury markets worldwide.',
    longDescription: 'Our gemstone operations focus on responsibly mining precious stones that meet the highest quality standards. Using both artisanal and modern techniques, we extract rubies, sapphires, and garnets that supply luxury jewelry markets across Europe, Asia, and North America.',
    process: ['Exploration', 'Extraction', 'Sorting', 'Cutting', 'Polishing', 'Export'],
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1920'
  },
  {
    id: 'coltan',
    title: 'Coltan',
    locations: 'Embu, Kitui & Turkana',
    description: 'Mining vital coltan used in electronics and aerospace industries globally.',
    longDescription: 'Coltan is essential for manufacturing capacitors used in electronic devices. Our operations extract this valuable mineral following strict environmental and ethical guidelines, ensuring responsible sourcing for the tech industry worldwide.',
    process: ['Exploration', 'Extraction', 'Processing', 'Refinement', 'Export'],
    image: 'https://images.unsplash.com/photo-1569144157596-65c376e7bcfd?q=80&w=1920'
  },
  {
    id: 'gold',
    title: 'Gold',
    locations: 'Migori & Western Kenya',
    description: 'Extracting high-purity gold meeting international standards for investment and industry.',
    longDescription: 'Our gold mining operations combine traditional and modern extraction methods to produce high-purity gold. We follow strict protocols that meet international standards, supplying gold for investment markets, jewelry manufacturing, and industrial applications.',
    process: ['Exploration', 'Extraction', 'Crushing', 'Chemical Processing', 'Smelting', 'Refining', 'Export'],
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=1920'
  },
  {
    id: 'cinnabar',
    title: 'Cinnabar',
    locations: 'Vitengeni',
    description: 'Sourcing mercury for essential industrial processes with strict safety protocols.',
    longDescription: 'Our cinnabar mining adheres to the strictest safety and environmental standards. We extract this mercury-containing mineral for specialized industrial applications while implementing comprehensive safeguards to protect workers and the environment.',
    process: ['Exploration', 'Extraction', 'Processing', 'Refining', 'Safe Transport'],
    image: 'https://images.unsplash.com/photo-1624365169398-e4e120beb080?q=80&w=1920'
  },
  {
    id: 'copper',
    title: 'Copper Recycling',
    locations: 'Nairobi & Mombasa',
    description: 'Repurposing copper wire into exportable bars for sustainable material reuse.',
    longDescription: 'Our copper recycling initiative transforms used copper wire and components into high-quality copper bars ready for export. This sustainable operation reduces waste while creating valuable materials for global manufacturing and construction industries.',
    process: ['Collection', 'Sorting', 'Processing', 'Smelting', 'Molding', 'Quality Control', 'Export'],
    image: 'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=1920'
  }
];

const Operations = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle anchor navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="h-[50vh] relative flex items-center bg-[url('https://images.unsplash.com/photo-1511747262098-10c828086a48?q=80&w=1920')] bg-cover bg-center">
          <div className="absolute inset-0 bg-milgen-black bg-opacity-70"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our <span className="text-milgen-yellow">Operations</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                Exploring and extracting Africa's mineral wealth with responsibility and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Mining <span className="text-milgen-yellow">Operations Overview</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Milgen Mines operates across Kenya, extracting and processing diverse minerals with sustainable practices and cutting-edge technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="bg-milgen-light h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={32} className="text-milgen-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-2">5 Major Locations</h3>
                <p className="text-gray-700">Operations across Kenya's richest mineral regions</p>
              </div>
              
              <div className="text-center">
                <div className="bg-milgen-light h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 size={32} className="text-milgen-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-2">Growing Production</h3>
                <p className="text-gray-700">Steadily increasing output across all mineral categories</p>
              </div>
              
              <div className="text-center">
                <div className="bg-milgen-light h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck size={32} className="text-milgen-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-2">Global Export Network</h3>
                <p className="text-gray-700">Products shipped to markets across five continents</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Operations */}
        <section className="section-padding bg-milgen-light">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our <span className="text-milgen-yellow">Mining Portfolio</span>
            </h2>

            {operations.map((operation, index) => (
              <div 
                key={operation.id} 
                id={operation.id}
                className={`mb-16 ${index !== operations.length - 1 ? 'pb-16 border-b border-gray-200' : ''}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img 
                      src={operation.image} 
                      alt={operation.title} 
                      className="rounded-lg shadow-lg w-full h-96 object-cover"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{operation.title}</h3>
                    <p className="text-milgen-yellow font-medium mb-4 flex items-center">
                      <MapPin size={18} className="mr-2" /> {operation.locations}
                    </p>
                    <p className="text-gray-700 mb-6">
                      {operation.longDescription}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Processing Steps:</h4>
                      <div className="flex flex-wrap gap-2">
                        {operation.process.map((step, stepIndex) => (
                          <span 
                            key={stepIndex} 
                            className="bg-white px-3 py-1 rounded-full text-sm"
                          >
                            {step}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="text-center mt-8">
              <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                Our operations are constantly evolving with new technologies and sustainable practices.
                Stay updated on our latest ventures and achievements.
              </p>
              <a href="#" className="yellow-button inline-flex items-center">
                Download Operations Report
                <ArrowRight className="ml-2" size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Operations;
