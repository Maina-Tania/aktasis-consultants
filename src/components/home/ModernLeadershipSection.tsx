import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

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

const ModernLeadershipSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 to-transparent opacity-60"></div>
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-milgen-yellow">Leadership Team</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Meet the experienced professionals driving Milgen Mines' vision and operations across Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {leaders.map((leader, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-96 object-cover object-center transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-1">{leader.name}</h3>
                  <p className="text-milgen-yellow font-medium mb-3">{leader.position}</p>
                  
                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link 
                      to="#" 
                      className="w-9 h-9 bg-milgen-yellow rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                    >
                      <Linkedin size={18} className="text-milgen-black" />
                    </Link>
                    <p className="text-white/90 text-sm">{leader.bio}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-16 text-center">
          <Button variant="default" size="lg" asChild>
            <Link to="/leadership" className="flex items-center">
              Meet The Full Team
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ModernLeadershipSection; 