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
    { value: '15+', label: 'Years Experience' },
    { value: '30+', label: 'Global Partners' },
    { value: '250+', label: 'Team Members' },
  ];
  
  const tabsData = [
    { 
      id: 'vision', 
      label: 'Our Vision',
      content: 'To lead the African mining industry in responsible resource extraction while driving economic growth and community development across the continent.'
    },
    { 
      id: 'mission', 
      label: 'Our Mission',
      content: 'Sustainably harness Africa\'s mineral wealth to support economic prosperity, create jobs, and attract investment through ethical practices and technological innovation.'
    },
    { 
      id: 'values', 
      label: 'Our Values',
      content: 'Integrity, sustainability, innovation, and community partnership guide every aspect of our operations from extraction to environmental rehabilitation.'
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
        <div className="absolute top-1/4 -left-64 w-[30rem] h-[30rem] bg-milgen-yellow/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-96 -right-64 w-[50rem] h-[50rem] bg-milgen-yellow/5 rounded-full blur-[120px]"></div>
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
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-milgen-yellow/20 rounded-full blur-xl"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=1920" 
                alt="Mining operations" 
                className="w-full h-[480px] object-cover"
                loading="lazy"
              />
              {/* Enhanced overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
            </div>
            
            {/* Enhanced floating accent elements */}
            <motion.div 
              className="absolute -bottom-8 -right-8 bg-white p-5 rounded-xl shadow-xl flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.6 } }
              }}
            >
              <div className="w-12 h-12 rounded-full bg-milgen-yellow/20 flex items-center justify-center">
                <Award className="text-milgen-yellow" size={26} />
              </div>
              <div>
                <p className="text-sm font-bold">Industry Leader</p>
                <p className="text-xs text-gray-500">Top 5 in Africa</p>
              </div>
            </motion.div>
            
            {/* Additional floating element */}
            <motion.div 
              className="absolute top-6 -right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0, transition: { delay: 1.0, duration: 0.6 } }
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="text-green-600" size={20} />
                </div>
                <p className="text-sm font-medium">Eco-Certified</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Content section - now 7 columns */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <span className="px-4 py-1.5 bg-milgen-yellow/10 text-milgen-yellow rounded-full text-sm font-medium inline-block">
                About Milgen Mines
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              variants={itemVariants}
            >
              <span className="text-milgen-yellow">Pioneering</span> Sustainable <br className="hidden md:block" />Mining in Africa
            </motion.h2>
            
            <motion.div 
              className="space-y-5 text-lg text-gray-600"
              variants={itemVariants}
            >
              <p>
                Milgen Mines leads in responsible mining and global exports. Our practices prioritize sustainability, innovation, and community development across Africa.
              </p>
              
              <p>
                We harness Africa's vast mineral wealth to support economic growth, industrial development, job creation, and foreign investment through sustainable extraction and technological innovation.
              </p>
            </motion.div>
            
            {/* New stats section */}
            <motion.div 
              className="flex flex-wrap gap-8 pt-4"
              variants={itemVariants}
            >
              {statsData.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-3xl font-bold text-milgen-yellow">{stat.value}</span>
                  <span className="text-sm text-gray-500">{stat.label}</span>
                </div>
              ))}
            </motion.div>
            
            {/* New tabs section */}
            <motion.div variants={itemVariants} className="pt-6">
              <Tabs defaultValue="vision" className="w-full">
                <TabsList className="bg-gray-100/80">
                  {tabsData.map(tab => (
                    <TabsTrigger key={tab.id} value={tab.id}>{tab.label}</TabsTrigger>
                  ))}
                </TabsList>
                {tabsData.map(tab => (
                  <TabsContent key={tab.id} value={tab.id} className="mt-4 text-gray-600">
                    {tab.content}
                  </TabsContent>
                ))}
              </Tabs>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6"
              variants={containerVariants}
            >
              <motion.div 
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-100"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 rounded-full bg-milgen-yellow/20 flex items-center justify-center mb-4">
                  <CheckCircle className="text-milgen-yellow" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-2">Sustainable Resource</h3>
                <p className="text-gray-600">Ethical mining, conservation, and land rehabilitation</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-100"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 rounded-full bg-milgen-yellow/20 flex items-center justify-center mb-4">
                  <Globe className="text-milgen-yellow" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-2">Global Impact</h3>
                <p className="text-gray-600">Supporting communities and economies worldwide</p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="pt-6 flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Button variant="apple" size="apple-lg" asChild>
                <Link to="/about" className="flex items-center">
                  Learn more about us
                  <ArrowUpRight className="ml-2" size={18} />
                </Link>
              </Button>
              
              <Button variant="outline" size="apple-lg" asChild>
                <Link to="/contact" className="flex items-center">
                  Contact our team
                  <ArrowUpRight className="ml-2" size={18} />
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