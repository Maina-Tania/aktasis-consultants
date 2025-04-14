import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  MapPin, 
  ArrowRight, 
  BarChart3, 
  Truck, 
  Globe, 
  Shield, 
  Leaf, 
  Users,
  ChevronDown,
  ChevronUp,
  FileText,
  Download,
  Activity,
  Clock,
  Package
} from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Progress } from '../components/ui/progress';

const operations = [
  {
    id: 'gemstones',
    title: 'Gemstones',
    locations: 'Taita Taveta & Garbatula',
    description: 'Extraction of high-quality rubies, sapphires and garnets for luxury markets worldwide.',
    longDescription: 'Our gemstone operations focus on responsibly mining precious stones that meet the highest quality standards. Using both artisanal and modern techniques, we extract rubies, sapphires, and garnets that supply luxury jewelry markets across Europe, Asia, and North America.',
    process: ['Exploration', 'Extraction', 'Sorting', 'Cutting', 'Polishing', 'Export'],
    image: '/images/operations/gemstones-mining.jpg',
    stats: {
      production: '2,500kg annually',
      employees: '250+',
      established: '2012',
      sustainability: 75
    },
    products: ['Rubies', 'Sapphires', 'Garnets', 'Aquamarines'],
    icon: <Globe className="text-rose-500" size={24} />
  },
  {
    id: 'coltan',
    title: 'Coltan',
    locations: 'Embu, Kitui & Turkana',
    description: 'Mining vital coltan used in electronics and aerospace industries globally.',
    longDescription: 'Coltan is essential for manufacturing capacitors used in electronic devices. Our operations extract this valuable mineral following strict environmental and ethical guidelines, ensuring responsible sourcing for the tech industry worldwide.',
    process: ['Exploration', 'Extraction', 'Processing', 'Refinement', 'Export'],
    image: '/images/operations/coltan-mining.jpg',
    stats: {
      production: '1,800 tonnes annually',
      employees: '180+',
      established: '2015',
      sustainability: 80
    },
    products: ['Tantalite', 'Columbite', 'Refined Coltan'],
    icon: <Activity className="text-blue-500" size={24} />
  },
  {
    id: 'gold',
    title: 'Gold',
    locations: 'Migori & Western Kenya',
    description: 'Extracting high-purity gold meeting international standards for investment and industry.',
    longDescription: 'Our gold mining operations combine traditional and modern extraction methods to produce high-purity gold. We follow strict protocols that meet international standards, supplying gold for investment markets, jewelry manufacturing, and industrial applications.',
    process: ['Exploration', 'Extraction', 'Crushing', 'Chemical Processing', 'Smelting', 'Refining', 'Export'],
    image: '/images/operations/gold-mining.jpg',
    stats: {
      production: '850kg annually',
      employees: '320+',
      established: '2010',
      sustainability: 70
    },
    products: ['Gold Bars', 'Gold Dust', 'Semi-processed Gold'],
    icon: <BarChart3 className="text-amber-500" size={24} />
  },
  {
    id: 'cinnabar',
    title: 'Cinnabar',
    locations: 'Vitengeni',
    description: 'Sourcing mercury for essential industrial processes with strict safety protocols.',
    longDescription: 'Our cinnabar mining adheres to the strictest safety and environmental standards. We extract this mercury-containing mineral for specialized industrial applications while implementing comprehensive safeguards to protect workers and the environment.',
    process: ['Exploration', 'Extraction', 'Processing', 'Refining', 'Safe Transport'],
    image: '/images/operations/cinnabar-mining.jpg',
    stats: {
      production: '450 tonnes annually',
      employees: '120+',
      established: '2018',
      sustainability: 85
    },
    products: ['Processed Cinnabar', 'Mercury Compounds', 'Industrial Derivatives'],
    icon: <Shield className="text-red-500" size={24} />
  },
  {
    id: 'copper',
    title: 'Copper Recycling',
    locations: 'Nairobi & Mombasa',
    description: 'Repurposing copper wire into exportable bars for sustainable material reuse.',
    longDescription: 'Our copper recycling initiative transforms used copper wire and components into high-quality copper bars ready for export. This sustainable operation reduces waste while creating valuable materials for global manufacturing and construction industries.',
    process: ['Collection', 'Sorting', 'Processing', 'Smelting', 'Molding', 'Quality Control', 'Export'],
    image: '/images/operations/copper-recycling.jpg',
    stats: {
      production: '3,200 tonnes annually',
      employees: '150+',
      established: '2017',
      sustainability: 95
    },
    products: ['Copper Bars', 'Copper Wire', 'Copper Granules', 'Copper Plates'],
    icon: <Leaf className="text-green-500" size={24} />
  }
];

// Statistics for dashboard
const operationsStats = [
  {
    title: '5 Mining Operations',
    value: '5',
    description: 'Across different regions of Kenya',
    icon: <MapPin size={32} className="text-milgen-yellow" />
  },
  {
    title: 'Annual Production',
    value: '8,000+',
    description: 'Tonnes of minerals processed yearly',
    icon: <BarChart3 size={32} className="text-milgen-yellow" />
  },
  {
    title: 'Export Markets',
    value: '25+',
    description: 'Countries receiving our minerals',
    icon: <Globe size={32} className="text-milgen-yellow" />
  },
  {
    title: 'Workforce',
    value: '1,200+',
    description: 'Employees across all operations',
    icon: <Users size={32} className="text-milgen-yellow" />
  }
];

const Operations = () => {
  // State for the current active operation
  const [activeOperation, setActiveOperation] = useState(null);
  
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle anchor navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveOperation(id);
        }, 500);
      }
    }
  }, []);

  // Animation controls and refs
  const controls = useAnimation();
  
  const overviewRef = useRef(null);
  const overviewInView = useInView(overviewRef, { once: true, margin: "-10%" });
  
  const portfolioRef = useRef(null);
  const portfolioInView = useInView(portfolioRef, { once: true, margin: "-10%" });
  
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-10%" });

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

  return (
    <>
      <Header />
      <main>
        {/* Enhanced Hero Section */}
        <section className="h-[70vh] relative flex items-center overflow-hidden">
          {/* Parallax background */}
          <div 
            className="absolute inset-0 bg-[url('/images/operations/mining-hero.jpg')] bg-cover bg-center transform scale-110"
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
                Mining Excellence
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Our <span className="text-milgen-yellow">Operations</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                Exploring and extracting Africa's mineral wealth with responsibility, innovation and sustainable practices.
              </p>
              
              {/* Quick navigation */}
              <div className="flex flex-wrap gap-4 mt-10">
                <Button variant="apple" size="apple-lg" asChild>
                  <a href="#portfolio" className="flex items-center">
                    Explore Mining Portfolio
                  </a>
                </Button>
                <Button variant="outline" size="apple-lg" className="text-white border-white hover:bg-white/10" asChild>
                  <a href="#" className="flex items-center">
                    <Download className="mr-2" size={18} />
                    Operations Report
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Floating element - Key stat */}
          <motion.div 
            className="hidden md:block absolute bottom-10 right-10 bg-white p-4 rounded-xl shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <Shield className="text-green-600" size={32} />
              <div>
                <p className="font-bold">5 Sustainable Operations</p>
                <p className="text-sm text-gray-600">Across Kenya</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Enhanced Overview Section */}
        <section className="py-20 bg-white" ref={overviewRef}>
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={overviewInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 bg-milgen-yellow/10 text-milgen-yellow rounded-full text-sm font-medium mb-4">
                At A Glance
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Mining <span className="text-milgen-yellow">Operations Overview</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Milgen Mines operates across Kenya, extracting and processing diverse minerals with sustainable practices and cutting-edge technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {operationsStats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-milgen-light p-8 rounded-xl shadow-sm group hover:shadow-lg transition-all duration-300 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={overviewInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.7 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-white h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:bg-milgen-yellow/10 transition-all duration-300">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                  <h4 className="text-lg font-semibold mb-2">{stat.title}</h4>
                  <p className="text-gray-700">{stat.description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* World map showing operation locations */}
            <motion.div 
              className="mt-20 bg-milgen-light rounded-xl p-8 shadow-lg overflow-hidden relative"
              initial={{ opacity: 0, y: 30 }}
              animate={overviewInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-4">
                  <h3 className="text-2xl font-bold mb-4">Global Reach</h3>
                  <p className="text-gray-700 mb-6">
                    Our operations span across Kenya's richest mineral regions, with exports reaching markets on five continents. We maintain strategic partnerships with leading manufacturers, technology companies, and jewelry houses worldwide.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-milgen-yellow/20 flex items-center justify-center mr-4 mt-1 shrink-0">
                        <Globe className="text-milgen-yellow" size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold">Export Markets</h4>
                        <p className="text-gray-700">Europe, Asia, North America, Middle East, Australia</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-milgen-yellow/20 flex items-center justify-center mr-4 mt-1 shrink-0">
                        <Clock className="text-milgen-yellow" size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold">Operations Since</h4>
                        <p className="text-gray-700">2010, with continuous expansion</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-milgen-yellow/20 flex items-center justify-center mr-4 mt-1 shrink-0">
                        <Truck className="text-milgen-yellow" size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold">Logistics</h4>
                        <p className="text-gray-700">Direct shipping from Mombasa Port to global destinations</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-8 relative">
                  <img 
                    src="/images/operations/world-map.png" 
                    alt="Milgen Mines Global Operations" 
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                  />
                  
                  {/* Map pins for Kenya operations */}
                  <div className="absolute top-[45%] left-[55%] w-6 h-6 bg-milgen-yellow rounded-full shadow-lg animate-pulse"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Operations Stats Dashboard */}
        <section className="py-20 bg-milgen-black text-white" ref={statsRef}>
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 bg-milgen-yellow/20 text-milgen-yellow rounded-full text-sm font-medium mb-4">
                Production Metrics
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Operations <span className="text-milgen-yellow">Dashboard</span>
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Track our mining production, export figures, and sustainability metrics across all operations.
              </p>
            </motion.div>
            
            <Tabs defaultValue="production" className="w-full">
              <TabsList className="bg-white/10 backdrop-blur-sm flex flex-wrap justify-center mb-8">
                <TabsTrigger value="production" className="data-[state=active]:bg-milgen-yellow data-[state=active]:text-black">
                  Production
                </TabsTrigger>
                <TabsTrigger value="sustainability" className="data-[state=active]:bg-milgen-yellow data-[state=active]:text-black">
                  Sustainability
                </TabsTrigger>
                <TabsTrigger value="workforce" className="data-[state=active]:bg-milgen-yellow data-[state=active]:text-black">
                  Workforce
                </TabsTrigger>
                <TabsTrigger value="exports" className="data-[state=active]:bg-milgen-yellow data-[state=active]:text-black">
                  Exports
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="production" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  {operations.map((operation, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                          {operation.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-xl">{operation.title}</h3>
                          <p className="text-white/70">{operation.stats.production}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Production Target</span>
                            <span>75%</span>
                          </div>
                          <Progress value={75} className="h-2 bg-white/20" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Year-over-Year Growth</span>
                            <span>12%</span>
                          </div>
                          <Progress value={12} className="h-2 bg-white/20" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="text-center mt-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10" asChild>
                    <a href="#" className="flex items-center">
                      <FileText className="mr-2" size={18} />
                      Download Production Report
                    </a>
                  </Button>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="sustainability" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {operations.map((operation, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                          {operation.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-xl">{operation.title}</h3>
                          <p className="text-white/70">{operation.stats.established}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Sustainability Score</span>
                            <span>{operation.stats.sustainability}%</span>
                          </div>
                          <Progress value={operation.stats.sustainability} className="h-2 bg-white/20" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Carbon Reduction</span>
                            <span>{Math.round(operation.stats.sustainability * 0.8)}%</span>
                          </div>
                          <Progress value={Math.round(operation.stats.sustainability * 0.8)} className="h-2 bg-white/20" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Water Recycled</span>
                            <span>{Math.round(operation.stats.sustainability * 0.9)}%</span>
                          </div>
                          <Progress value={Math.round(operation.stats.sustainability * 0.9)} className="h-2 bg-white/20" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="text-center mt-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10" asChild>
                    <Link to="/sustainability" className="flex items-center">
                      <Leaf className="mr-2" size={18} />
                      View Sustainability Initiatives
                    </Link>
                  </Button>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="workforce" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  {operations.map((operation, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                          {operation.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-xl">{operation.title}</h3>
                          <p className="text-white/70">{operation.stats.employees} Employees</p>
                        </div>
                      </div>
                      
                      <div className="space-y-1 mt-4">
                        <div className="flex justify-between">
                          <span>Local Employment</span>
                          <span>92%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Women in Workforce</span>
                          <span>38%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Safety Rating</span>
                          <span>97%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Training Hours/Month</span>
                          <span>18 hrs</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="text-center mt-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10" asChild>
                    <Link to="/leadership" className="flex items-center">
                      <Users className="mr-2" size={18} />
                      Meet Our Team
                    </Link>
                  </Button>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="exports" className="mt-0">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-6">Export Destinations</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                      <h4 className="font-bold text-xl mb-4 text-milgen-yellow">Asia</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Globe className="text-white/60 mr-2" size={16} />
                          <span>China - 35%</span>
                        </li>
                        <li className="flex items-center">
                          <Globe className="text-white/60 mr-2" size={16} />
                          <span>India - 18%</span>
                        </li>
                        <li className="flex items-center">
                          <Globe className="text-white/60 mr-2" size={16} />
                          <span>Japan - 12%</span>
                        </li>
                        <li className="flex items-center">
                          <Globe className="text-white/60 mr-2" size={16} />
                          <span>UAE - 8%</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-xl mb-4 text-milgen-yellow">Europe</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Globe className="text-white/60 mr-2" size={16} />
                          <span>Germany - 22%</span>
                        </li>
                        <li className="flex items-center">
                          <Globe className="text-white/60 mr-2" size={16} />
                          <span>UK - 15%</span>
                        </li>
                        <li className="flex items-center">
                          <Globe className="text-white/60 mr-2" size={16} />
                          <span>Switzerland - 10%</span>
                        </li>
                        <li className="flex items-center">
                          <Globe className="text-white/60 mr-2" size={16} />
                          <span>France - 8%</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-xl mb-4 text-milgen-yellow">North America</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Globe className="text-white/60 mr-2" size={16} />
                          <span>USA - 28%</span>
                        </li>
                        <li className="flex items-center">
                          <Globe className="text-white/60 mr-2" size={16} />
                          <span>Canada - 12%</span>
                        </li>
                        <li className="flex items-center">
                          <Globe className="text-white/60 mr-2" size={16} />
                          <span>Mexico - 7%</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-xl mb-4 text-milgen-yellow">Others</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Globe className="text-white/60 mr-2" size={16} />
                          <span>Australia - 8%</span>
                        </li>
                        <li className="flex items-center">
                          <Globe className="text-white/60 mr-2" size={16} />
                          <span>South Africa - 6%</span>
                        </li>
                        <li className="flex items-center">
                          <Globe className="text-white/60 mr-2" size={16} />
                          <span>Brazil - 5%</span>
                        </li>
                        <li className="flex items-center">
                          <Globe className="text-white/60 mr-2" size={16} />
                          <span>Others - 6%</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-bold text-xl mb-4">Annual Export Growth</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>2022</span>
                          <span>8.5%</span>
                        </div>
                        <Progress value={8.5} className="h-2 bg-white/20" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>2023</span>
                          <span>12.7%</span>
                        </div>
                        <Progress value={12.7} className="h-2 bg-white/20" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>2024 (Projected)</span>
                          <span>15.2%</span>
                        </div>
                        <Progress value={15.2} className="h-2 bg-white/20" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <motion.div 
                  className="text-center mt-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10" asChild>
                    <a href="#" className="flex items-center">
                      <BarChart3 className="mr-2" size={18} />
                      Export Market Analysis
                    </a>
                  </Button>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Enhanced Mining Portfolio */}
        <section id="portfolio" className="py-20 bg-milgen-light" ref={portfolioRef}>
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={portfolioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 bg-milgen-yellow/10 text-milgen-yellow rounded-full text-sm font-medium mb-4">
                Resource Extraction
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="text-milgen-yellow">Mining Portfolio</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Discover our diverse range of mining operations across Kenya, from precious gemstones to essential industrial minerals.
              </p>
            </motion.div>

            {/* Quick navigation links */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {operations.map((operation) => (
                <Button
                  key={operation.id}
                  variant={activeOperation === operation.id ? "default" : "outline"}
                  onClick={() => {
                    setActiveOperation(operation.id);
                    document.getElementById(operation.id).scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={activeOperation === operation.id ? "bg-milgen-yellow hover:bg-milgen-yellow/90 text-black" : ""}
                >
                  {operation.title}
                </Button>
              ))}
            </div>

            {operations.map((operation, index) => (
              <motion.div 
                key={operation.id} 
                id={operation.id}
                className={`mb-20 ${index !== operations.length - 1 ? 'pb-20 border-b border-gray-200' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={portfolioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.2 + (index * 0.1), duration: 0.7 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-xl overflow-hidden shadow-xl">
                      <img 
                        src={operation.image} 
                        alt={operation.title} 
                        className="w-full h-[400px] object-cover"
                        loading="lazy"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      {/* Location badge */}
                      <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center">
                        <MapPin className="text-milgen-yellow mr-2" size={18} />
                        <span className="font-medium">{operation.locations}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-7">
                    <h3 className="text-3xl font-bold mb-2">{operation.title}</h3>
                    <p className="text-milgen-yellow font-medium mb-6 flex items-center">
                      {operation.description}
                    </p>
                    
                    <p className="text-gray-700 mb-6">
                      {operation.longDescription}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-bold mb-3 flex items-center">
                          <div className="w-8 h-8 bg-milgen-yellow/20 rounded-full flex items-center justify-center mr-2">
                            <Activity size={16} className="text-milgen-yellow" />
                          </div>
                          Processing Steps
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {operation.process.map((step, stepIndex) => (
                            <span 
                              key={stepIndex} 
                              className="bg-milgen-light px-3 py-1 rounded-full text-sm"
                            >
                              {step}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-bold mb-3 flex items-center">
                          <div className="w-8 h-8 bg-milgen-yellow/20 rounded-full flex items-center justify-center mr-2">
                            <Package size={16} className="text-milgen-yellow" />
                          </div>
                          Products
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {operation.products.map((product, productIndex) => (
                            <span 
                              key={productIndex} 
                              className="bg-milgen-light px-3 py-1 rounded-full text-sm"
                            >
                              {product}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <Button variant="outline" size="lg" asChild>
                        <a href={`#${operation.id}-details`} className="flex items-center">
                          Learn More
                          <ArrowRight className="ml-2" size={18} />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={portfolioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                Our operations are constantly evolving with new technologies and sustainable practices.
                Stay updated on our latest ventures and achievements.
              </p>
              <Button variant="apple" size="apple-lg" className="bg-milgen-yellow hover:bg-milgen-yellow/90 text-black" asChild>
                <a href="#" className="flex items-center">
                  <Download className="mr-2" size={18} />
                  Download Operations Report
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-milgen-black to-milgen-black/90 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Interested in <span className="text-milgen-yellow">Our Mining Operations?</span>
                </h2>
                <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
                  Whether you're looking to partner, invest, or simply learn more about our sustainable mining practices, our team is ready to assist you.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button variant="apple" size="apple-lg" className="bg-milgen-yellow hover:bg-milgen-yellow/90 text-black" asChild>
                    <Link to="/contact" className="flex items-center">
                      Contact Our Team
                      <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </Button>
                  <Button variant="outline" size="apple-lg" className="text-white border-white hover:bg-white/10" asChild>
                    <Link to="/sustainability">
                      Explore Sustainability
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

export default Operations;