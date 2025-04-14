import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ArrowDown, Globe, Users, Award, Sparkles } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
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
      description: 'Milgen Mines was established with a focus on responsible gemstone mining in Kenya.',
    },
    {
      year: '2010',
      title: 'Expansion',
      description: 'Operations expanded to Tanzania and Uganda with diversification into gold and coltan.',
    },
    {
      year: '2015',
      title: 'Innovation',
      description: 'Implementation of AI-driven exploration and eco-friendly extraction technologies.',
    },
    {
      year: '2020',
      title: 'Global Reach',
      description: 'Established export partnerships with industries across Europe, Asia and North America.',
    },
    {
      year: '2024',
      title: 'Sustainability Leadership',
      description: 'Recognized as industry leader in sustainable mining practices and community development.',
    },
  ];

  // Team members data
  const leadershipTeam = [
    {
      name: 'Dr. Sarah Nkosi',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800',
    },
    {
      name: 'Kwame Osei',
      role: 'Chief Operations Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800',
    },
    {
      name: 'Dr. Amina Diop',
      role: 'Head of Sustainability',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800',
    },
  ];
  
  // Stats data
  const statsData = [
    { value: '15+', label: 'Years Experience' },
    { value: '4', label: 'Countries' },
    { value: '1200+', label: 'Team Members' },
    { value: '30+', label: 'Global Partners' },
  ];

  // Refs for scroll animations
  const historyRef = useRef(null);
  const historyInView = useInView(historyRef, { once: true, margin: "-10%" });
  
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-10%" });
  
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-10%" });
  
  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true, margin: "-10%" });
  
  const successRef = useRef(null);
  const successInView = useInView(successRef, { once: true, margin: "-10%" });

  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Enhanced with parallax and animations */}
        <section className="h-[80vh] relative flex items-center overflow-hidden">
          {/* Parallax background */}
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485575301924-4e24746916fa?q=80&w=1920')] bg-cover bg-center"
            style={{
              transform: 'translateY(0)',
              transition: 'transform 0.5s ease-out',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-milgen-black/80 via-milgen-black/70 to-milgen-black/90"></div>
          
          <div className="container-custom relative z-10">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 bg-milgen-yellow/20 text-milgen-yellow rounded-full text-sm font-medium mb-6">
                Our Company
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                <span className="text-milgen-yellow">About</span> Us
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                Discover the story, vision, and commitment that drive Milgen Mines to be a leader in sustainable African mining.
              </p>
              
              {/* Stats row */}
              <div className="flex flex-wrap gap-10 mt-12">
                {statsData.map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + (index * 0.1), duration: 0.6 }}
                    className="flex flex-col"
                  >
                    <span className="text-4xl font-bold text-milgen-yellow">{stat.value}</span>
                    <span className="text-sm text-white/80">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </motion.div>
        </section>

        {/* Company History - Enhanced with animations and design */}
        <section className="py-20 md:py-28 bg-white" ref={historyRef}>
          <div className="container-custom">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
              initial="hidden"
              animate={historyInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <motion.div className="lg:col-span-6 space-y-6" variants={itemVariants}>
                <span className="inline-block px-4 py-1.5 bg-milgen-yellow/10 text-milgen-yellow rounded-full text-sm font-medium">
                  Our Heritage
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Our <span className="text-milgen-yellow">Journey</span>
                </h2>
                <p className="text-lg text-gray-700">
                  Founded with a vision to harness Africa's mineral wealth responsibly, Milgen Mines has grown from a small exploration company to a key player in the African mining sector.
                </p>
                <p className="text-lg text-gray-700">
                  Our journey began with gemstone mining in Kenya's Taita Taveta region, gradually expanding into coltan, gold, and other valuable minerals across multiple regions.
                </p>
                <p className="text-lg text-gray-700">
                  Throughout our growth, we've maintained our commitment to sustainable practices, community development, and technological innovation.
                </p>
                
                {/* Tabs for more details */}
                <div className="pt-6">
                  <Tabs defaultValue="vision" className="w-full">
                    <TabsList className="bg-gray-100/80">
                      <TabsTrigger value="vision">Vision</TabsTrigger>
                      <TabsTrigger value="mission">Mission</TabsTrigger>
                      <TabsTrigger value="approach">Approach</TabsTrigger>
                    </TabsList>
                    <TabsContent value="vision" className="mt-4 text-gray-700">
                      To be Africa's leading mining company, creating sustainable value while transforming the industry's environmental and community impact.
                    </TabsContent>
                    <TabsContent value="mission" className="mt-4 text-gray-700">
                      To extract Africa's mineral resources responsibly, maximizing benefits for all stakeholders while protecting environments and empowering communities.
                    </TabsContent>
                    <TabsContent value="approach" className="mt-4 text-gray-700">
                      We combine cutting-edge technology with traditional knowledge, working closely with communities and governments to ensure sustainable development.
                    </TabsContent>
                  </Tabs>
                </div>
              </motion.div>
              
              <motion.div className="lg:col-span-6 relative" variants={itemVariants}>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-milgen-yellow/10 rounded-full blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1578594410744-81e47b8d53d5?q=80&w=1920" 
                  alt="Mining operations history" 
                  className="rounded-lg shadow-xl w-full object-cover h-[400px]"
                  loading="lazy"
                />
                {/* Floating accent element */}
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={historyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <div className="w-10 h-10 rounded-full bg-milgen-yellow/20 flex items-center justify-center">
                    <Award className="text-milgen-yellow" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Industry Leader</p>
                    <p className="text-xs text-gray-500">Since 2005</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Timeline Section - New section */}
        <section className="py-20 bg-milgen-black text-white" ref={timelineRef}>
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 bg-milgen-yellow/20 text-milgen-yellow rounded-full text-sm font-medium mb-4">
                Our Evolution
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Growth <span className="text-milgen-yellow">Timeline</span>
              </h2>
              <p className="text-lg max-w-3xl mx-auto opacity-80">
                The key milestones that have shaped our company's development over the years.
              </p>
            </motion.div>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-milgen-yellow/30 z-0 hidden md:block"></div>
              
              <div className="space-y-0">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`flex flex-col md:flex-row md:items-center gap-4 md:gap-0 pb-12 relative ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.2 + (index * 0.1), duration: 0.7 }}
                  >
                    {/* Center dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-milgen-yellow rounded-full z-10 hidden md:block"></div>
                    
                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                        <div className="text-milgen-yellow font-bold text-2xl mb-1">{item.year}</div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-white/80">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Empty space for the other side */}
                    <div className="md:w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team - New section */}
        <section className="py-20 bg-white" ref={teamRef}>
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 bg-milgen-yellow/10 text-milgen-yellow rounded-full text-sm font-medium mb-4">
                Our Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet The <span className="text-milgen-yellow">Team</span>
              </h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-700">
                Driven by expertise, passion, and a commitment to responsible mining.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadershipTeam.map((member, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.2 + (index * 0.2), duration: 0.7 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-[350px] object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-milgen-yellow">{member.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link to="/team" className="flex items-center mx-auto">
                  View Full Team
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Core Values - Enhanced with icons and animations */}
        <section className="py-20 bg-milgen-light" ref={valuesRef}>
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 bg-milgen-yellow/10 text-milgen-yellow rounded-full text-sm font-medium mb-4">
                What Drives Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-milgen-yellow">Core Values</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                At Milgen Mines, everything we do is guided by our commitment to these foundational principles.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-md group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 rounded-full bg-milgen-yellow/20 flex items-center justify-center mb-6 group-hover:bg-milgen-yellow/30 transition-all duration-300">
                  <Globe className="text-milgen-yellow" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Sustainability</h3>
                <p className="text-gray-700">
                  We extract resources responsibly, conserve environments, and restore land post-mining operations.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-xl shadow-md group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 rounded-full bg-milgen-yellow/20 flex items-center justify-center mb-6 group-hover:bg-milgen-yellow/30 transition-all duration-300">
                  <Sparkles className="text-milgen-yellow" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-700">
                  We embrace cutting-edge technologies to enhance safety, efficiency, and environmental protection.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-xl shadow-md group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 rounded-full bg-milgen-yellow/20 flex items-center justify-center mb-6 group-hover:bg-milgen-yellow/30 transition-all duration-300">
                  <Users className="text-milgen-yellow" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Community</h3>
                <p className="text-gray-700">
                  We invest in local communities through education, infrastructure, and employment opportunities.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-xl shadow-md group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 rounded-full bg-milgen-yellow/20 flex items-center justify-center mb-6 group-hover:bg-milgen-yellow/30 transition-all duration-300">
                  <Award className="text-milgen-yellow" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-gray-700">
                  We operate with transparency, honesty, and ethical standards in all our business dealings.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Success Factors - Enhanced with design and animations */}
        <section className="py-20 bg-milgen-black text-white" ref={successRef}>
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={successInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 bg-milgen-yellow/20 text-milgen-yellow rounded-full text-sm font-medium mb-4">
                Why We Excel
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-milgen-yellow">Success Factors</span>
              </h2>
              <p className="text-lg max-w-3xl mx-auto opacity-80">
                The key elements that set Milgen Mines apart in the industry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={successInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-milgen-yellow flex items-center">
                  <Users className="mr-3" size={24} />
                  Skilled Workforce
                </h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <Check className="text-milgen-yellow mr-3 shrink-0 mt-1" size={20} />
                    <span>Expert geologists with deep knowledge of African minerals</span>
                  </li>
                  <li className="flex">
                    <Check className="text-milgen-yellow mr-3 shrink-0 mt-1" size={20} />
                    <span>Experienced engineers implementing best practices</span>
                  </li>
                  <li className="flex">
                    <Check className="text-milgen-yellow mr-3 shrink-0 mt-1" size={20} />
                    <span>Skilled local miners trained in modern techniques</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={successInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-milgen-yellow flex items-center">
                  <Globe className="mr-3" size={24} />
                  Rich Mineral Reserves
                </h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <Check className="text-milgen-yellow mr-3 shrink-0 mt-1" size={20} />
                    <span>Strategically located operations in mineral-rich regions</span>
                  </li>
                  <li className="flex">
                    <Check className="text-milgen-yellow mr-3 shrink-0 mt-1" size={20} />
                    <span>Diverse portfolio of high-demand minerals</span>
                  </li>
                  <li className="flex">
                    <Check className="text-milgen-yellow mr-3 shrink-0 mt-1" size={20} />
                    <span>Advanced geological surveying for optimal extraction</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={successInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.6, duration: 0.7 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-milgen-yellow flex items-center">
                  <Sparkles className="mr-3" size={24} />
                  Advanced Technology
                </h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <Check className="text-milgen-yellow mr-3 shrink-0 mt-1" size={20} />
                    <span>AI-driven exploration and operational optimization</span>
                  </li>
                  <li className="flex">
                    <Check className="text-milgen-yellow mr-3 shrink-0 mt-1" size={20} />
                    <span>Modern equipment enhancing safety and output</span>
                  </li>
                  <li className="flex">
                    <Check className="text-milgen-yellow mr-3 shrink-0 mt-1" size={20} />
                    <span>Research partnerships advancing mining innovation</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={successInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <Button variant="apple" size="apple-lg" asChild>
                <Link to="/contact" className="flex items-center mx-auto">
                  Partner With Us
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section - New section */}
        <section className="py-20 bg-gradient-to-r from-milgen-yellow/10 to-milgen-yellow/5">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to <span className="text-milgen-yellow">Work Together</span>?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Whether you're interested in partnering, investing, or learning more about our operations, we'd love to hear from you.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="apple" size="apple-lg" asChild>
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
                <Button variant="outline" size="apple-lg" asChild>
                  <Link to="/projects">
                    View Our Projects
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;