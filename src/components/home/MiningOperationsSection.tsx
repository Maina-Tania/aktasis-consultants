
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const operations = [
  {
    id: 'gemstones',
    title: 'Gemstones',
    locations: 'Taita Taveta & Garbatula',
    description: 'Extraction of high-quality rubies, sapphires and garnets for luxury markets worldwide.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000'
  },
  {
    id: 'coltan',
    title: 'Coltan',
    locations: 'Embu, Kitui & Turkana',
    description: 'Mining vital coltan used in electronics and aerospace industries globally.',
    image: 'https://images.unsplash.com/photo-1569144157596-65c376e7bcfd?q=80&w=1000'
  },
  {
    id: 'gold',
    title: 'Gold',
    locations: 'Migori & Western Kenya',
    description: 'Extracting high-purity gold meeting international standards for investment and industry.',
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=1000'
  },
  {
    id: 'cinnabar',
    title: 'Cinnabar',
    locations: 'Vitengeni',
    description: 'Sourcing mercury for essential industrial processes with strict safety protocols.',
    image: 'https://images.unsplash.com/photo-1624365169398-e4e120beb080?q=80&w=1000'
  }
];

const MiningOperationsSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section className="section-padding bg-milgen-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Our <span className="text-milgen-yellow">Mining Operations</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-on-scroll">
            Milgen Mines operates across key mineral sectors in strategic locations throughout Kenya, delivering premium resources to global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {operations.map((op, index) => (
            <div 
              key={op.id} 
              className="mineral-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={op.image} 
                  alt={op.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{op.title}</h3>
                <p className="text-sm text-milgen-yellow font-medium mb-3">{op.locations}</p>
                <p className="text-gray-700 mb-4">{op.description}</p>
                <Link 
                  to={`/operations#${op.id}`}
                  className="inline-flex items-center text-milgen-black font-semibold hover:text-milgen-yellow transition-colors text-sm"
                >
                  Learn more
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-on-scroll">
          <Link to="/operations" className="yellow-button">
            View All Operations
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MiningOperationsSection;
