import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const achievements = [
    { value: '3.2K+', label: 'Tons Exported' },
    { value: '12+', label: 'Active Mines' },
    { value: '850+', label: 'Employees' },
    { value: '18', label: 'Countries Served' },
  ];

  return (
    <section id="about-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            className="lg:col-span-5 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-500 opacity-20 -full blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-yellow-500 opacity-20 rounded-full blur-2xl"></div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=1920" 
                alt="Mining operations" 
                className="rounded-2xl shadow-xl w-full object-cover h-96 lg:h-auto"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 md:p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <CheckCircle size={24} className="text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">ISO Certified</p>
                    <p className="text-lg font-bold">Sustainable Mining</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-yellow-500">Who</span> We Are
              </h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Milgen Mines leads in <span className="font-semibold">responsible mining and global exports</span>. 
                Our practices prioritize sustainability, innovation, and community development across Africa.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                We harness Africa's vast mineral wealth to support economic growth, industrial development, 
                job creation, and foreign investment through sustainable extraction and technological innovation.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={fadeInUp}
            >
              {achievements.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-1">{item.value}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              ))}
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={fadeInUp}
            >
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-yellow-500">
                <h3 className="font-bold text-xl mb-3">Sustainable Resource</h3>
                <p className="text-gray-700">Ethical mining practices, environmental conservation, and comprehensive land rehabilitation programs</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-yellow-500">
                <h3 className="font-bold text-xl mb-3">Economic Growth</h3>
                <p className="text-gray-700">Local employment opportunities, infrastructure development, and education support initiatives</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Link 
                to="/about" 
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Learn more about us 
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;