import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroData = {
  title: "Aktasis Consultancy",
  subtitle: "Professional Architectural Services",
  description: "Transform your vision into reality with innovative architectural design solutions for residential, commercial, and sustainable projects.",
  cta: {
    primary: "Start Your Project",
    secondary: "View Our Work"
  },
  features: [
    "Licensed & Certified",
    "5+ Years Experience",
    "50+ Projects Completed"
  ]
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Mobile-optimized background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6 md:mb-8"
          >
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
            <span className="hidden sm:inline">Licensed Architectural Consultancy</span>
            <span className="sm:hidden">Licensed & Certified</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight"
          >
            {heroData.title.split(' ').map((word, index) => (
              <span key={index} className="inline-block mr-2 md:mr-4">
                {word}
              </span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-300 mb-6 md:mb-8"
          >
            {heroData.subtitle}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          >
            {heroData.description}
          </motion.p>

          {/* Feature Pills - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12 px-4"
          >
            {heroData.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm text-white/90 border border-white/20"
              >
                <Calendar className="w-3 h-3 mr-1" />
                {feature}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <Link
              to="/contact"
              className="group w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center touch-manipulation"
            >
              <Phone className="mr-2" size={18} />
              {heroData.cta.primary}
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </Link>
            
            <Link
              to="/portfolio"
              className="group w-full sm:w-auto border-2 border-white/30 hover:border-white text-white px-6 sm:px-8 py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center touch-manipulation"
            >
              {heroData.cta.secondary}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </Link>
          </motion.div>

          {/* Quick Contact Info - Mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 md:mt-12 px-4"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-600"></div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Mon-Fri: 9AM-6PM</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Mobile Optimized */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </div>
        <p className="text-xs text-gray-400 text-center mt-2 hidden sm:block">Scroll to explore</p>
      </motion.div>

      {/* Mobile-specific floating action button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="fixed bottom-4 right-4 sm:hidden z-50"
      >
        <Link
          to="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 touch-manipulation"
          aria-label="Quick contact"
        >
          <Phone size={24} />
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;