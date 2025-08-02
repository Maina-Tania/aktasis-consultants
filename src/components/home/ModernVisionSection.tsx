import React from 'react';
import { CheckCircle, Sparkles, Target, Globe, Users, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Architectural Design',
    description: 'Creating innovative, functional designs that balance aesthetics with practical needs.',
    icon: <Sparkles className="text-blue-500" size={22} />
  },
  {
    title: 'Project Management',
    description: 'Comprehensive project oversight from concept to completion, ensuring quality and timeline adherence.',
    icon: <Target className="text-blue-500" size={22} />
  },
  {
    title: 'Sustainable Design',
    description: 'Implementing eco-friendly solutions and green building practices for environmental responsibility.',
    icon: <Leaf className="text-blue-500" size={22} />
  },
  {
    title: 'Interior Design',
    description: 'Seamlessly integrating interior spaces with architectural vision for cohesive environments.',
    icon: <Users className="text-blue-500" size={22} />
  }
];

const coreValues = [
  "Innovation in design and construction methods",
  "Sustainability and environmental responsibility",
  "Client collaboration and satisfaction",
  "Quality craftsmanship and attention to detail",
  "Timeless design that serves future generations"
];

const ModernServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-40 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-500/5 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">
              Our Services
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Our <span className="text-blue-500">Services & Expertise</span>
          </h2>
          
          <p className="text-lg text-gray-300">
            We offer comprehensive architectural services that transform visions into reality, 
            creating spaces that inspire and endure for generations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-blue-400">Our Core Values</h3>
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {coreValues.map((value, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-3"
                  variants={itemVariants}
                >
                  <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">{value}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-blue-400">What We Offer</h3>
            <motion.div 
              className="grid grid-cols-1 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Ready to start your architectural journey? Let's collaborate to create something extraordinary.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernServicesSection; 