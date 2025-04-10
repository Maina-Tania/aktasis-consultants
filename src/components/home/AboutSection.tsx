
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
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
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=1920" 
              alt="Mining operations" 
              className="rounded-lg shadow-lg w-full animate-on-scroll"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
              <span className="text-milgen-yellow">Who</span> We Are
            </h2>
            
            <p className="text-lg text-gray-700 animate-on-scroll">
              Milgen Mines leads in responsible mining and global exports. Our practices prioritize sustainability, innovation, and community development across Africa.
            </p>
            
            <p className="text-lg text-gray-700 animate-on-scroll">
              We harness Africa's vast mineral wealth to support economic growth, industrial development, job creation, and foreign investment through sustainable extraction and technological innovation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 animate-on-scroll">
              <div className="border-l-4 border-milgen-yellow pl-4">
                <h3 className="font-bold text-xl mb-2">Sustainable Resource</h3>
                <p className="text-gray-700">Ethical mining, conservation, and land rehabilitation</p>
              </div>
              
              <div className="border-l-4 border-milgen-yellow pl-4">
                <h3 className="font-bold text-xl mb-2">Economic Growth</h3>
                <p className="text-gray-700">Employment, infrastructure, education support</p>
              </div>
            </div>
            
            <div className="pt-4 animate-on-scroll">
              <Link to="/about" className="inline-flex items-center text-milgen-black font-semibold hover:text-milgen-yellow transition-colors">
                Learn more about us 
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
