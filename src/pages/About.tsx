import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ArrowDown, Globe, Users, Award, Sparkles } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';
import ModernLayout from '../components/layout/ModernLayout';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const About = () => {
  // Animation controls
  const controls = useAnimation();
  
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
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

  // Timeline data
  const timeline = [
    {
      year: '2005',
      title: 'Foundation',
      description: 'AKTASIS was established with a focus on creating innovative architectural solutions for diverse projects.',
    },
    {
      year: '2010',
      title: 'Expansion',
      description: 'Expanded into commercial architecture with projects across multiple cities and diverse sectors.',
    },
    {
      year: '2015',
      title: 'Innovation',
      description: 'Pioneered sustainable design practices and integrated cutting-edge technology into our projects.',
    },
    {
      year: '2020',
      title: 'Global Recognition',
      description: 'Received international awards for design excellence and sustainable architecture practices.',
    },
    {
      year: '2024',
      title: 'Design Leadership',
      description: 'Recognized as industry leader in innovative architectural design and sustainable building practices.',
    },
  ];

  // Team members data
  const leadershipTeam = [
    {
      name: 'Alex Chen',
      role: 'Principal Architect',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800',
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Design Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800',
    },
    {
      name: 'Michael Thompson',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800',
    },
  ];
  
  // Stats data
  const statsData = [
    { value: '20+', label: 'Years Experience' },
    { value: '150+', label: 'Projects Completed' },
    { value: '25+', label: 'Team Members' },
    { value: '15+', label: 'Awards Won' },
  ];

  // Refs for scroll animations
  const historyRef = useRef(null);
  const historyInView = useInView(historyRef, { once: true, margin: "-10%" });
  
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-10%" });
  
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-10%" });

  return (
    <ModernLayout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-64 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-96 -right-64 w-[50rem] h-[50rem] bg-blue-500/5 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-600 rounded-full text-sm font-medium mb-6"
              variants={itemVariants}
            >
              <Globe className="w-4 h-4 mr-2" />
              About AKTASIS
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight"
              variants={itemVariants}
            >
              Crafting <span className="text-blue-500">Architectural</span> Excellence
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed max-w-3xl mx-auto"
              variants={itemVariants}
            >
              We are a forward-thinking architectural studio dedicated to creating innovative, sustainable designs that transform how people live, work, and interact with their environments.
            </motion.p>
            
            <motion.div 
              className="text-center mb-12"
              variants={itemVariants}
            >
              <p className="text-lg text-gray-700 mb-2">
                <strong>Principal Architect:</strong> MAINA E. NGATIA
              </p>
              <p className="text-sm text-gray-500">
                B. Arch Hons (UON), MAAK
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={containerVariants}
            >
              {statsData.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  variants={itemVariants}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Our <span className="text-blue-500">Mission</span> & Vision
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that great architecture has the power to inspire, transform, and create lasting positive impact on communities and the environment.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                    <p className="text-gray-600">Pushing boundaries with cutting-edge design and technology</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                    <p className="text-gray-600">Delivering exceptional quality in every project we undertake</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                    <p className="text-gray-600">Working closely with clients to bring their vision to life</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800" 
                  alt="Modern architecture" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24" ref={timelineRef}>
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-blue-500">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Two decades of architectural innovation, growth, and commitment to design excellence.
            </p>
          </motion.div>
          
          <motion.div 
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500/20"></div>
            
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                variants={itemVariants}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="text-2xl font-bold text-blue-500 mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-blue-500">Leadership</span> Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the talented architects and designers who bring your vision to life with creativity and expertise.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {leadershipTeam.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-500 font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="container-custom text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Let's collaborate to create something extraordinary. Contact our team for a consultation.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact" className="flex items-center">
                Get Started
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </ModernLayout>
  );
};

export default About;