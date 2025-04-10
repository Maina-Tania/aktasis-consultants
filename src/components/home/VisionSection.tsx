
import React, { useEffect } from 'react';
import { Check } from 'lucide-react';

const initiatives = [
  {
    title: 'Technological Advancement',
    description: 'Leveraging AI, modern equipment, and innovative techniques to enhance safety and efficiency.'
  },
  {
    title: 'Global Market Expansion',
    description: 'Developing export partnerships and integrating into global supply chains for sustainable growth.'
  },
  {
    title: 'Community Empowerment',
    description: 'Creating jobs, supporting education, and developing infrastructure in local communities.'
  },
  {
    title: 'Sustainability Leadership',
    description: 'Setting industry standards for ethical mining, reduced environmental impact, and land rehabilitation.'
  }
];

const VisionSection = () => {
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
    <section className="section-padding bg-milgen-black text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Our <span className="text-milgen-yellow">Vision & Initiatives</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-on-scroll">
            Milgen Mines aims to become Africa's leading mining company by promoting sustainability, diversification, and growth across the continent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6 text-milgen-yellow">Future Goals</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Check className="text-milgen-yellow mr-3 shrink-0 mt-1" size={20} />
                <span>Expand operations into titanium and silver mining</span>
              </li>
              <li className="flex">
                <Check className="text-milgen-yellow mr-3 shrink-0 mt-1" size={20} />
                <span>Strengthen Africa's role in the global minerals supply chain</span>
              </li>
              <li className="flex">
                <Check className="text-milgen-yellow mr-3 shrink-0 mt-1" size={20} />
                <span>Drive local industrial growth through resource beneficiation</span>
              </li>
              <li className="flex">
                <Check className="text-milgen-yellow mr-3 shrink-0 mt-1" size={20} />
                <span>Create sustainable employment opportunities across Africa</span>
              </li>
              <li className="flex">
                <Check className="text-milgen-yellow mr-3 shrink-0 mt-1" size={20} />
                <span>Achieve carbon-neutral mining operations aligned with global sustainability goals</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-milgen-yellow animate-on-scroll">Key Initiatives</h3>
            <div className="space-y-6">
              {initiatives.map((initiative, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900 p-6 rounded-lg animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="text-xl font-semibold mb-2">{initiative.title}</h4>
                  <p className="text-gray-300">{initiative.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
