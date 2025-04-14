import React from 'react';
import { CheckCircle, Sparkles, Target, Globe, Users, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const initiatives = [
  {
    title: 'Technological Advancement',
    description: 'Leveraging AI, modern equipment, and innovative techniques to enhance safety and efficiency.',
    icon: <Sparkles className="text-milgen-yellow" size={22} />
  },
  {
    title: 'Global Market Expansion',
    description: 'Developing export partnerships and integrating into global supply chains for sustainable growth.',
    icon: <Globe className="text-milgen-yellow" size={22} />
  },
  {
    title: 'Community Empowerment',
    description: 'Creating jobs, supporting education, and developing infrastructure in local communities.',
    icon: <Users className="text-milgen-yellow" size={22} />
  },
  {
    title: 'Sustainability Leadership',
    description: 'Setting industry standards for ethical mining, reduced environmental impact, and land rehabilitation.',
    icon: <Leaf className="text-milgen-yellow" size={22} />
  }
];

const futureGoals = [
  "Expand operations into titanium and silver mining",
  "Strengthen Africa's role in the global minerals supply chain",
  "Drive local industrial growth through resource beneficiation",
  "Create sustainable employment opportunities across Africa",
  "Achieve carbon-neutral mining operations aligned with global sustainability goals"
];

const ModernVisionSection = () => {
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
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-milgen-black via-milgen-black to-black text-white">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-milgen-yellow/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-40 right-1/3 w-96 h-96 bg-milgen-yellow/10 rounded-full blur-[120px]"></div>
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
            <span className="px-4 py-1.5 bg-milgen-yellow/10 text-milgen-yellow rounded-full text-sm font-medium">
              Our Vision
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Our <span className="text-milgen-yellow">Vision & Initiatives</span>
          </h2>
          
          <p className="text-lg text-gray-300">
            Milgen Mines aims to become Africa's leading mining company by promoting sustainability, 
            diversification, and growth across the continent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Future Goals */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-milgen-yellow/20 flex items-center justify-center mr-4">
                <Target className="text-milgen-yellow" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-milgen-yellow">Future Goals</h3>
            </div>
            
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {futureGoals.map((goal, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-start bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors group"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="w-8 h-8 rounded-full bg-milgen-yellow/10 flex items-center justify-center mr-4 shrink-0 group-hover:bg-milgen-yellow/20 transition-colors">
                    <CheckCircle className="text-milgen-yellow" size={16} />
                  </div>
                  <span className="text-white/90">{goal}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Key Initiatives */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-milgen-yellow/20 flex items-center justify-center mr-4">
                <Sparkles className="text-milgen-yellow" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-milgen-yellow">Key Initiatives</h3>
            </div>
            
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {initiatives.map((initiative, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-milgen-yellow/30 transition-all"
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-milgen-yellow/10 flex items-center justify-center mr-3">
                      {initiative.icon}
                    </div>
                    <h4 className="text-xl font-semibold">{initiative.title}</h4>
                  </div>
                  <p className="text-gray-300 pl-[3.25rem]">{initiative.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernVisionSection; 