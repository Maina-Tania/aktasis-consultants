
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const backgrounds = [
  'bg-[url("https://images.unsplash.com/photo-1575310066311-2b594f1796e9?q=80&w=1920")]',
  'bg-[url("https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=1920")]',
  'bg-[url("https://images.unsplash.com/photo-1609952542840-df54cebbbee8?q=80&w=1920")]'
];

const HeroSection = () => {
  const [currentBackground, setCurrentBackground] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground(prev => (prev + 1) % backgrounds.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`h-screen relative flex items-center ${backgrounds[currentBackground]} bg-cover bg-center transition-all duration-1000 ease-in-out`}>
      <div className="absolute inset-0 bg-milgen-black bg-opacity-70"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-milgen-yellow">Powering</span> the Future
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            From Earth's depths to global horizons—Milgen Mines fuels possibilities through sustainable, innovative mining across Africa.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/about" className="yellow-button flex items-center">
              Discover Our Work 
              <ArrowRight className="ml-2" size={18} />
            </Link>
            
            <Link to="/contact" className="border-2 border-white hover:border-milgen-yellow text-white hover:text-milgen-yellow font-semibold py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center">
              Contact Us
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2">
        {backgrounds.map((_, index) => (
          <button 
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${currentBackground === index ? 'bg-milgen-yellow scale-125' : 'bg-white opacity-60'}`}
            onClick={() => setCurrentBackground(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
