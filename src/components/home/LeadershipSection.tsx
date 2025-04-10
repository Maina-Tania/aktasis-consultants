
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

const leaders = [
  {
    name: 'Munene Vine',
    position: 'CEO',
    bio: '20+ years in mining, strategy, and sustainability',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500'
  },
  {
    name: 'Sarah Kimani',
    position: 'Head of R&D',
    bio: 'AI-driven exploration and eco-innovation specialist',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500'
  },
  {
    name: 'Mauyo Jaydenibra',
    position: 'Director of Operations',
    bio: 'Expert in logistics and regulatory compliance',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500'
  }
];

const LeadershipSection = () => {
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Our <span className="text-milgen-yellow">Leadership Team</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-on-scroll">
            Meet the experienced professionals driving Milgen Mines' vision and operations across Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div 
              key={index} 
              className="text-center animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6 group">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-96 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-milgen-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <Link 
                    to="#" 
                    className="w-10 h-10 bg-milgen-yellow rounded-full flex items-center justify-center"
                  >
                    <Linkedin size={20} className="text-milgen-black" />
                  </Link>
                </div>
              </div>
              <h3 className="text-xl font-bold">{leader.name}</h3>
              <p className="text-milgen-yellow font-medium mb-2">{leader.position}</p>
              <p className="text-gray-700">{leader.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-on-scroll">
          <Link to="/leadership" className="black-button">
            Meet The Full Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
