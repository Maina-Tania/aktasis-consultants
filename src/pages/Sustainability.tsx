import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  Leaf, 
  Users, 
  Recycle, 
  TreePine, 
  Shield, 
  Building2, 
  Download, 
  BarChart3, 
  Droplets, 
  HeartPulse,
  GraduationCap,
  Building,
  Globe,
  AlertCircle,
  Check
} from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const Sustainability = () => {
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

  // Progress stats for circular progress bars
  const progressStats = [
    { label: 'Renewable Energy', value: 30, icon: <Leaf className="text-green-500" size={24} />, color: 'bg-green-500' },
    { label: 'Waste Recycled', value: 60, icon: <Recycle className="text-blue-500" size={24} />, color: 'bg-blue-500' },
    { label: 'Carbon Reduction', value: 45, icon: <Globe className="text-amber-500" size={24} />, color: 'bg-amber-500' },
    { label: 'Water Reuse', value: 70, icon: <Droplets className="text-cyan-500" size={24} />, color: 'bg-cyan-500' },
  ];

  // Refs for scroll animations
  const pillarsRef = useRef(null);
  const pillarsInView = useInView(pillarsRef, { once: true, margin: "-10%" });
  
  const environmentalRef = useRef(null);
  const environmentalInView = useInView(environmentalRef, { once: true, margin: "-10%" });
  
  const communityRef = useRef(null);
  const communityInView = useInView(communityRef, { once: true, margin: "-10%" });
  
  const goalsRef = useRef(null);
  const goalsInView = useInView(goalsRef, { once: true, margin: "-10%" });
  
  const metricsRef = useRef(null);
  const metricsInView = useInView(metricsRef, { once: true, margin: "-10%" });

  return (
    <>
      <Header />
      <main>
        {/* Enhanced Hero Section */}
        <section className="h-[70vh] relative flex items-center overflow-hidden">
          {/* Parallax background with video overlay option */}
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617500584008-4b4f0b10a1fd?q=80&w=1920')] bg-cover bg-center transform scale-110"
            style={{
              transition: 'transform 0.5s ease-out',
            }}
          ></div>
          
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-milgen-black/90 via-milgen-black/80 to-milgen-black/90"></div>
          
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-milgen-yellow/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-milgen-yellow/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container-custom relative z-10">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 bg-milgen-yellow/20 text-milgen-yellow rounded-full text-sm font-medium mb-6">
                Environmental Responsibility
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Our <span className="text-milgen-yellow">Sustainability</span> Journey
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                Balancing resource extraction with environmental stewardship and community development for a better future.
              </p>
              
              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Button variant="apple" size="apple-lg" asChild>
                  <a href="#sustainable-pillars" className="flex items-center">
                    Explore Our Approach
                  </a>
                </Button>
                <Button variant="outline" size="apple-lg" className="text-white border-white hover:bg-white/10" asChild>
                  <a href="#" className="flex items-center">
                    <Download className="mr-2" size={18} />
                    Sustainability Report
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Floating achievement badge */}
          <motion.div 
            className="hidden md:block absolute bottom-10 right-10 bg-white p-4 rounded-xl shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <Shield className="text-green-600" size={32} />
              <div>
                <p className="font-bold">ISO 14001 Certified</p>
                <p className="text-sm text-gray-600">Environmental Management</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Enhanced Main Pillars Section */}
        <section id="sustainable-pillars" className="py-20 md:py-28 bg-white" ref={pillarsRef}>
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={pillarsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 bg-milgen-yellow/10 text-milgen-yellow rounded-full text-sm font-medium mb-4">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Sustainability <span className="text-milgen-yellow">Pillars</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our approach to sustainability is built on three interconnected foundations that guide all our operations and decision-making processes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <motion.div 
                className="bg-milgen-light p-8 rounded-2xl shadow-sm group hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={pillarsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-md group-hover:bg-milgen-yellow/10 transition-all duration-300">
                  <Leaf size={48} className="text-milgen-yellow" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Environmental</h3>
                <p className="text-gray-700 text-center">
                  We minimize our environmental footprint through responsible waste management, land rehabilitation, water conservation, and carbon reduction initiatives.
                </p>
                <div className="pt-6 text-center">
                  <Button variant="ghost" size="sm" className="text-milgen-yellow hover:bg-milgen-yellow/10" asChild>
                    <Link to="/sustainability/environmental">
                      Learn more
                    </Link>
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-milgen-light p-8 rounded-2xl shadow-sm group hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={pillarsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-md group-hover:bg-milgen-yellow/10 transition-all duration-300">
                  <Users size={48} className="text-milgen-yellow" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Social</h3>
                <p className="text-gray-700 text-center">
                  We invest in community development through education programs, healthcare facilities, infrastructure projects, and local business support initiatives.
                </p>
                <div className="pt-6 text-center">
                  <Button variant="ghost" size="sm" className="text-milgen-yellow hover:bg-milgen-yellow/10" asChild>
                    <Link to="/sustainability/social">
                      Learn more
                    </Link>
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-milgen-light p-8 rounded-2xl shadow-sm group hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={pillarsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-md group-hover:bg-milgen-yellow/10 transition-all duration-300">
                  <Building2 size={48} className="text-milgen-yellow" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Governance</h3>
                <p className="text-gray-700 text-center">
                  We maintain transparent operations, ethical business practices, regulatory compliance, and strong stakeholder engagement at all levels of our organization.
                </p>
                <div className="pt-6 text-center">
                  <Button variant="ghost" size="sm" className="text-milgen-yellow hover:bg-milgen-yellow/10" asChild>
                    <Link to="/sustainability/governance">
                      Learn more
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* New Metrics Section */}
        <section className="py-20 bg-gradient-to-r from-milgen-yellow/5 to-milgen-yellow/10" ref={metricsRef}>
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={metricsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 bg-milgen-yellow/20 text-milgen-yellow rounded-full text-sm font-medium mb-4">
                Performance Metrics
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Measuring Our <span className="text-milgen-yellow">Impact</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We track our progress with transparent metrics that hold us accountable to our sustainability goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {progressStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={metricsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.7 }}
                >
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    {/* Circular progress background */}
                    <div className="absolute inset-0 rounded-full bg-gray-100"></div>
                    
                    {/* Progress circle with animation */}
                    <motion.div 
                      className="absolute inset-0"
                      initial={{ strokeDashoffset: 335 }}
                      animate={metricsInView ? { 
                        strokeDashoffset: 335 - (335 * stat.value / 100) 
                      } : { strokeDashoffset: 335 }}
                      transition={{ duration: 2, delay: 0.5 + (index * 0.2) }}
                    >
                      <svg width="100%" height="100%" viewBox="0 0 120 120">
                        <circle
                          cx="60"
                          cy="60"
                          r="54"
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth="8"
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="54"
                          fill="none"
                          stroke={stat.color.replace('bg-', 'var(--')}
                          strokeWidth="8"
                          strokeDasharray="335"
                          strokeDashoffset="335"
                          strokeLinecap="round"
                          transform="rotate(-90 60 60)"
                          className={stat.color}
                        />
                      </svg>
                    </motion.div>
                    
                    {/* Center icon and percentage */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="mb-1">{stat.icon}</div>
                      <div className="text-2xl font-bold">{stat.value}%</div>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg">{stat.label}</h3>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={metricsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <Button variant="outline" asChild>
                <Link to="/sustainability/metrics">
                  View Detailed Metrics
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Environmental Initiatives Section */}
        <section className="py-20 bg-milgen-black text-white" ref={environmentalRef}>
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={environmentalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 bg-milgen-yellow/20 text-milgen-yellow rounded-full text-sm font-medium mb-4">
                Planet Protection
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Environmental <span className="text-milgen-yellow">Initiatives</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our commitment to environmental stewardship is reflected in concrete actions across all our operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl flex items-start group hover:bg-gray-900/90 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={environmentalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                whileHover={{ y: -5 }}
              >
                <div className="mr-6 mt-1">
                  <div className="w-12 h-12 bg-milgen-yellow/20 rounded-full flex items-center justify-center group-hover:bg-milgen-yellow/30 transition-all duration-300">
                    <Recycle className="text-milgen-yellow" size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Waste Reduction</h3>
                  <p className="text-gray-300 mb-4">
                    Our closed-loop waste management systems recycle over 60% of operational waste. We're targeting 80% by 2027 through new material recovery processes.
                  </p>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Current: 60%</span>
                        <span>Target: 80%</span>
                      </div>
                      <Progress value={75} className="h-2 bg-gray-700" />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl flex items-start group hover:bg-gray-900/90 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={environmentalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                whileHover={{ y: -5 }}
              >
                <div className="mr-6 mt-1">
                  <div className="w-12 h-12 bg-milgen-yellow/20 rounded-full flex items-center justify-center group-hover:bg-milgen-yellow/30 transition-all duration-300">
                    <TreePine className="text-milgen-yellow" size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Reforestation</h3>
                  <p className="text-gray-300 mb-4">
                    For every acre of land used in mining, we plant twice as many trees in surrounding areas. We've planted over 50,000 native trees since 2020.
                  </p>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Current: 50,000</span>
                        <span>Target: 100,000</span>
                      </div>
                      <Progress value={50} className="h-2 bg-gray-700" />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl flex items-start group hover:bg-gray-900/90 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={environmentalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                whileHover={{ y: -5 }}
              >
                <div className="mr-6 mt-1">
                  <div className="w-12 h-12 bg-milgen-yellow/20 rounded-full flex items-center justify-center group-hover:bg-milgen-yellow/30 transition-all duration-300">
                    <Shield className="text-milgen-yellow" size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Land Rehabilitation</h3>
                  <p className="text-gray-300 mb-4">
                    Our post-mining rehabilitation converts former mining sites into productive agricultural land or restored natural habitats, exceeding regulatory requirements.
                  </p>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Current: 85%</span>
                        <span>Target: 100%</span>
                      </div>
                      <Progress value={85} className="h-2 bg-gray-700" />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl flex items-start group hover:bg-gray-900/90 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={environmentalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                whileHover={{ y: -5 }}
              >
                <div className="mr-6 mt-1">
                  <div className="w-12 h-12 bg-milgen-yellow/20 rounded-full flex items-center justify-center group-hover:bg-milgen-yellow/30 transition-all duration-300">
                    <Leaf className="text-milgen-yellow" size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Carbon Reduction</h3>
                  <p className="text-gray-300 mb-4">
                    We're transitioning to renewable energy sources, with solar power now supplying 30% of our processing facilities' energy needs, reducing our carbon footprint.
                  </p>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Current: 30%</span>
                        <span>Target: 50%</span>
                      </div>
                      <Progress value={60} className="h-2 bg-gray-700" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={environmentalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <Button variant="apple" size="apple-lg" className="bg-milgen-yellow hover:bg-milgen-yellow/90 text-black" asChild>
                <a href="#" className="flex items-center">
                  <Download className="mr-2" size={18} />
                  Download Sustainability Report
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Community Development */}
        <section className="py-20 bg-white" ref={communityRef}>
          <div className="container-custom">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              initial="hidden"
              animate={communityInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <motion.div className="lg:col-span-6 space-y-6" variants={itemVariants}>
                <span className="inline-block px-4 py-1.5 bg-milgen-yellow/10 text-milgen-yellow rounded-full text-sm font-medium">
                  Social Responsibility
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Community <span className="text-milgen-yellow">Development</span>
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  At Milgen Mines, we believe our success is directly linked to the prosperity of the communities where we operate. We invest in initiatives that create lasting positive impact.
                </p>
                
                {/* Tabs for different community initiatives */}
                <div className="pt-4">
                  <Tabs defaultValue="education" className="w-full">
                    <TabsList className="bg-gray-100/80">
                      <TabsTrigger value="education">Education</TabsTrigger>
                      <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
                      <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="education" className="mt-6">
                      <div className="flex items-start space-x-4">
                        <div className="mt-1">
                          <div className="w-10 h-10 bg-milgen-yellow/20 rounded-full flex items-center justify-center">
                            <GraduationCap className="text-milgen-yellow" size={24} />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-xl mb-3">Educational Support</h3>
                          <p className="text-gray-700">
                            Our educational initiatives provide scholarships, school infrastructure improvements, and teacher training programs reaching over 5,000 students annually across our operational areas.
                          </p>
                          <ul className="mt-4 space-y-2">
                            <li className="flex items-center">
                              <Check className="text-milgen-yellow mr-2 shrink-0" size={18} />
                              <span>Scholarships for 250+ students annually</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="text-milgen-yellow mr-2 shrink-0" size={18} />
                              <span>Built or renovated 12 schools since 2018</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="text-milgen-yellow mr-2 shrink-0" size={18} />
                              <span>Teacher development programs in 4 countries</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="healthcare" className="mt-6">
                      <div className="flex items-start space-x-4">
                        <div className="mt-1">
                          <div className="w-10 h-10 bg-milgen-yellow/20 rounded-full flex items-center justify-center">
                            <HeartPulse className="text-milgen-yellow" size={24} />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-xl mb-3">Healthcare Access</h3>
                          <p className="text-gray-700">
                            We improve healthcare access through mobile clinics, medical equipment donations, and healthcare worker training in communities surrounding our mining operations.
                          </p>
                          <ul className="mt-4 space-y-2">
                            <li className="flex items-center">
                              <Check className="text-milgen-yellow mr-2 shrink-0" size={18} />
                              <span>8 mobile clinics serving remote areas</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="text-milgen-yellow mr-2 shrink-0" size={18} />
                              <span>Medical equipment for 15 rural facilities</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="text-milgen-yellow mr-2 shrink-0" size={18} />
                              <span>Training for 120+ community health workers</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="infrastructure" className="mt-6">
                      <div className="flex items-start space-x-4">
                        <div className="mt-1">
                          <div className="w-10 h-10 bg-milgen-yellow/20 rounded-full flex items-center justify-center">
                            <Building className="text-milgen-yellow" size={24} />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-xl mb-3">Infrastructure Development</h3>
                          <p className="text-gray-700">
                            We invest in critical infrastructure including road construction, water systems, and renewable energy installations that benefit entire regions beyond our immediate mining areas.
                          </p>
                          <ul className="mt-4 space-y-2">
                            <li className="flex items-center">
                              <Check className="text-milgen-yellow mr-2 shrink-0" size={18} />
                              <span>200+ km of roads constructed or improved</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="text-milgen-yellow mr-2 shrink-0" size={18} />
                              <span>Clean water access for 25,000+ people</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="text-milgen-yellow mr-2 shrink-0" size={18} />
                              <span>Solar installations in 18 communities</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </motion.div>
              
              <motion.div className="lg:col-span-6 relative" variants={itemVariants}>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-milgen-yellow/10 rounded-full blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920" 
                  alt="Community development project" 
                  className="rounded-xl shadow-xl w-full h-[400px] object-cover"
                  loading="lazy"
                />
                
                {/* Floating achievement badge */}
                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={communityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <div className="w-10 h-10 rounded-full bg-milgen-yellow/20 flex items-center justify-center">
                    <Users className="text-milgen-yellow" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">25,000+ Lives</p>
                    <p className="text-xs text-gray-500">Positively Impacted</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Goals Section */}
        <section className="py-20 bg-milgen-light" ref={goalsRef}>
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={goalsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 bg-milgen-yellow/10 text-milgen-yellow rounded-full text-sm font-medium mb-4">
                Future Vision
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-milgen-yellow">Sustainability Goals</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We've set ambitious targets to guide our journey toward more sustainable mining practices and measurable positive impact.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-md relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={goalsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                whileHover={{ y: -10 }}
              >
                {/* Decorative corner */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-milgen-yellow/20 rounded-full"></div>
                
                <div className="relative">
                  <span className="inline-block px-3 py-1 bg-milgen-yellow/10 text-milgen-yellow rounded-lg text-sm font-medium mb-4">
                    Near-Term
                  </span>
                  <h3 className="text-2xl font-bold mb-4">2025 Goals</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 text-milgen-yellow">•</div>
                      <span>50% renewable energy usage across all operations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 text-milgen-yellow">•</div>
                      <span>70% water recycling in all processing facilities</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 text-milgen-yellow">•</div>
                      <span>Zero workplace incidents through improved safety protocols</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 text-milgen-yellow">•</div>
                      <span>1,000 additional local jobs created in mining communities</span>
                    </li>
                  </ul>
                  
                  {/* Progress indicator */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Progress</span>
                      <span className="text-milgen-yellow font-medium">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-md relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={goalsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                whileHover={{ y: -10 }}
              >
                {/* Decorative corner */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-milgen-yellow/20 rounded-full"></div>
                
                <div className="relative">
                  <span className="inline-block px-3 py-1 bg-milgen-yellow/10 text-milgen-yellow rounded-lg text-sm font-medium mb-4">
                    Mid-Term
                  </span>
                  <h3 className="text-2xl font-bold mb-4">2030 Goals</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 text-milgen-yellow">•</div>
                      <span>80% renewable energy usage across all operations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 text-milgen-yellow">•</div>
                      <span>90% waste reduction and recycling in mining processes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 text-milgen-yellow">•</div>
                      <span>100,000 trees planted through reforestation initiatives</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 text-milgen-yellow">•</div>
                      <span>Support for 20 community-led businesses near mine sites</span>
                    </li>
                  </ul>
                  
                  {/* Progress indicator */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Progress</span>
                      <span className="text-milgen-yellow font-medium">40%</span>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-md relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={goalsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                whileHover={{ y: -10 }}
              >
                {/* Decorative corner */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-milgen-yellow/20 rounded-full"></div>
                
                <div className="relative">
                  <span className="inline-block px-3 py-1 bg-milgen-yellow/10 text-milgen-yellow rounded-lg text-sm font-medium mb-4">
                    Long-Term
                  </span>
                  <h3 className="text-2xl font-bold mb-4">2035 Goals</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 text-milgen-yellow">•</div>
                      <span>Carbon-neutral operations across all mining sites</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 text-milgen-yellow">•</div>
                      <span>Full implementation of automated and AI-driven mining</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 text-milgen-yellow">•</div>
                      <span>Complete rehabilitation of all closed sites to productive use</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 text-milgen-yellow">•</div>
                      <span>Self-sustaining community development funds established</span>
                    </li>
                  </ul>
                  
                  {/* Progress indicator */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Progress</span>
                      <span className="text-milgen-yellow font-medium">25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Call to action */}
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={goalsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Join us on our sustainability journey as we work toward creating a better future for communities and the environment.
              </p>
              <Button asChild>
                <Link to="/contact" className="flex items-center">
                  Partner With Us On Sustainability
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* New Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-milgen-black to-milgen-black/90 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Learn More About Our <span className="text-milgen-yellow">Sustainability Efforts</span>?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Download our comprehensive sustainability report or contact our team to discuss partnership opportunities.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="apple" size="apple-lg" className="bg-milgen-yellow hover:bg-milgen-yellow/90 text-black" asChild>
                  <a href="#" className="flex items-center">
                    <Download className="mr-2" size={18} />
                    Download Full Report
                  </a>
                </Button>
                <Button variant="outline" size="apple-lg" className="text-white border-white hover:bg-white/10" asChild>
                  <Link to="/contact">
                    Contact Sustainability Team
                  </Link>
                </Button>
              </div>
              
              {/* Alert for subscription */}
              <motion.div 
                className="mt-12 bg-white/10 backdrop-blur-sm p-6 rounded-xl flex items-center max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                <div className="mr-4 shrink-0">
                  <AlertCircle className="text-milgen-yellow" size={24} />
                </div>
                <div className="text-left">
                  <h3 className="font-bold mb-1">Stay Updated</h3>
                  <p className="text-sm text-white/80">
                    Subscribe to our quarterly sustainability newsletter to get the latest updates on our environmental and community initiatives.
                  </p>
                </div>
                <div className="ml-auto shrink-0">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10" asChild>
                    <Link to="/subscribe">
                      Subscribe
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Sustainability;