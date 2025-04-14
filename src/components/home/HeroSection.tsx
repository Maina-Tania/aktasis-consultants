import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Powering the Future",
      description: "From Earth's depths to global horizons—Milgen Mines fuels possibilities through sustainable, innovative mining across Africa.",
      image: "https://images.unsplash.com/photo-1575310066311-2b594f1796e9?q=80&w=1920"
    },
    {
      title: "Sustainable Mining Practices",
      description: "Leading the industry with environmentally responsible extraction methods and community-focused development.",
      image: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=1920"
    },
    {
      title: "Global Resource Solutions",
      description: "Delivering premium mineral resources to power industries and economies around the world.",
      image: "https://images.unsplash.com/photo-1609952542840-df54cebbbee8?q=80&w=1920"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Particle background */}
      <div className="absolute inset-0 z-0">
        <div
          id="hero-sparkles"
          className="w-full h-full bg-transparent"
          style={{
            background: "transparent",
            color: "#FFD700"
          }}
        />
      </div>
      
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 h-full flex items-center">
        <motion.div 
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          key={currentSlide} // Force animation to restart on slide change
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-yellow-400">
              {slides[currentSlide].title.split(' ')[0]}
            </span>{' '}
            {slides[currentSlide].title.split(' ').slice(1).join(' ')}
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            {slides[currentSlide].description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/about" 
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center"
            >
              Discover Our Work
              <ArrowRight className="ml-2" size={18} />
            </Link>
            
            <Link 
              to="/contact" 
              className="border-2 border-white hover:border-yellow-400 text-white hover:text-yellow-400 font-semibold py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center backdrop-blur-sm bg-black bg-opacity-20"
            >
              Contact Us
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index 
                ? 'bg-yellow-400 scale-125' 
                : 'bg-white opacity-60'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;