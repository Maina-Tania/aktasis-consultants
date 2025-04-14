import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SparklesCore } from "../ui/sparkles";
import { Button } from "../ui/button";

const ModernHeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Enhanced particle background */}
      <SparklesCore
        id="tsparticles"
        background="transparent"
        minSize={0.8}
        maxSize={1.8}
        particleColor="#F7CA18"
        particleDensity={80}
        speed={2}
        className="w-full h-full absolute inset-0"
      />

      {/* Content container with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

      {/* Hero content */}
      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-milgen-yellow">Powering</span> the Future
            <span className="block mt-2 text-white font-light text-3xl md:text-4xl">With Sustainable Mining</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            From Earth's depths to global horizons—Milgen Mines fuels possibilities through sustainable, innovative mining across Africa.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Button variant="default" size="lg" asChild>
              <Link to="/about" className="flex items-center">
                Discover Our Work 
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact" className="flex items-center">
                Contact Us
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        onClick={scrollToAbout}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div 
            className="w-1.5 h-3 bg-white rounded-full mt-2"
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* Transitional element */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg 
          className="w-full h-auto text-background fill-current" 
          viewBox="0 0 1440 100" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Path element removed */}
        </svg>
      </div>
    </section>
  );
};

export default ModernHeroSection; 