import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle, Award, Globe } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

const ModernAboutSection = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };
  
  const statsData = [
    { value: '20+', label: 'Years Experience' },
    { value: '150+', label: 'Projects Completed' },
    { value: '25+', label: 'Team Members' },
  ];
  
  const tabsData = [
    { 
      id: 'vision', 
      label: 'Our Vision',
      content: 'To create innovative, sustainable architecture that enhances human experience and shapes the future of urban development through thoughtful design and cutting-edge technology.'
    },
    { 
      id: 'mission', 
      label: 'Our Mission',
      content: 'Transform spaces into inspiring environments that balance aesthetics, functionality, and sustainability while exceeding client expectations and pushing architectural boundaries.'
    },
    { 
      id: 'values', 
      label: 'Our Values',
      content: 'Innovation, sustainability, collaboration, and excellence guide every project from concept to completion, ensuring timeless designs that serve communities.'
    },
  ];

  return (
    <section 
      id="about-section" 
      className="py-24 md:py-32 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-64 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-96 -right-64 w-[50rem] h-[50rem] bg-blue-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-3/4 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Expanded image section - now 5 columns */}
          <motion.div 
            className="lg:col-span-5 relative"
            variants={itemVariants}
          >
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1920" 
                alt="Modern architecture" 
                className="w-full h-[480px] object-cover"
                loading="lazy"
              />
              {/* Enhanced overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
            </div>
            
            {/* Enhanced floating accent elements */}
            <motion.div 
              className="absolute -bottom-8 -right-8 bg-white p-5 rounded-xl shadow-xl flex items-center space-x-4 z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-900 leading-tight mb-1">Award Winning</p>
                <p className="text-xs text-gray-600 leading-tight">Design Excellence</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content section - now 7 columns */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            variants={itemVariants}
          >
            <div className="space-y-6">
              <motion.div 
                className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-600 rounded-full text-sm font-medium"
                variants={itemVariants}
              >
                <Globe className="w-4 h-4 mr-2" />
                Leading Architectural Studio
              </motion.div>
              
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                variants={itemVariants}
              >
                Creating Spaces That
                <span className="text-blue-500 block">Inspire & Endure</span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed"
                variants={itemVariants}
              >
                We are a forward-thinking architectural studio dedicated to creating innovative, sustainable designs that transform how people live, work, and interact with their environments.
              </motion.p>
            </div>

            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-3 gap-6"
              variants={itemVariants}
            >
              {statsData.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Enhanced Tabs */}
            <motion.div variants={itemVariants}>
              <Tabs defaultValue="vision" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-gray-100 p-1 rounded-lg">
                  {tabsData.map((tab) => (
                    <TabsTrigger 
                      key={tab.id} 
                      value={tab.id}
                      className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {tabsData.map((tab) => (
                  <TabsContent key={tab.id} value={tab.id} className="mt-6">
                    <p className="text-gray-600 leading-relaxed">{tab.content}</p>
                  </TabsContent>
                ))}
              </Tabs>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Button asChild size="lg" className="group">
                <Link to="/about" className="flex items-center">
                  Learn More About Us
                  <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernAboutSection;