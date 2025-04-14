import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  ArrowRight, 
  Globe, 
  BookOpen, 
  Award, 
  Users, 
  Briefcase,
  Lightbulb,
  Shield,
  Coffee
} from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const executiveTeam = [
  {
    name: 'Munene Vine',
    position: 'Chief Executive Officer',
    bio: 'With over 20 years in mining and sustainability, Munene leads Milgen Mines\' strategic vision and global growth. His expertise spans operational excellence, resource optimization, and ethical mining practices.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000',
    credentials: 'MBA, Mining Engineering',
    expertise: ['Strategic Planning', 'Resource Management', 'Sustainable Mining'],
    quote: "Mining's future depends on our commitment to innovation, sustainability, and community development."
  },
  {
    name: 'Sarah Kimani',
    position: 'Head of Research & Development',
    bio: 'Sarah spearheads our technological innovations, focusing on AI-driven exploration and eco-friendly mining solutions. Her background in geology and computer science drives our competitive advantage.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000',
    credentials: 'PhD, Geological Sciences',
    expertise: ['AI in Mining', 'Eco-Innovation', 'GIS Mapping'],
    quote: "Technology and sustainability are not competing interests, but complementary paths to responsible resource extraction."
  },
  {
    name: 'Mauyo Jaydenibra',
    position: 'Director of Operations',
    bio: 'Mauyo oversees all mining operations, ensuring regulatory compliance and operational efficiency. His expertise in logistics and international trade has strengthened our global supply chain.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000',
    credentials: 'MSc, Operations Management',
    expertise: ['Logistics', 'Regulatory Compliance', 'Supply Chain'],
    quote: "Operational excellence is built on safety, efficiency, and respect for both our people and the environment."
  }
];

const seniorManagement = [
  {
    name: 'Jane Mwangi',
    position: 'Chief Financial Officer',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000',
    department: 'Finance'
  },
  {
    name: 'David Omondi',
    position: 'Head of Sustainability',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1000',
    department: 'Sustainability'
  },
  {
    name: 'Asha Kariuki',
    position: 'Human Resources Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000',
    department: 'Human Resources'
  },
  {
    name: 'Ibrahim Hassan',
    position: 'Community Relations Manager',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000',
    department: 'Community Relations'
  },
  {
    name: 'Catherine Ndung\'u',
    position: 'Legal Counsel',
    image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=1000',
    department: 'Legal'
  },
  {
    name: 'Michael Njoroge',
    position: 'Head of Security',
    image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1000',
    department: 'Security'
  }
];

// Company values for the culture section
const companyValues = [
  {
    title: 'Innovation',
    description: 'Embracing new technologies and approaches to improve mining practices',
    icon: <Lightbulb className="text-milgen-yellow" size={32} />
  },
  {
    title: 'Integrity',
    description: 'Operating with transparency, honesty, and ethical standards in all relationships',
    icon: <Shield className="text-milgen-yellow" size={32} />
  },
  {
    title: 'Community',
    description: 'Fostering partnerships with local communities and creating shared value',
    icon: <Users className="text-milgen-yellow" size={32} />
  },
  {
    title: 'Expertise',
    description: 'Developing specialized knowledge and skills across all mining operations',
    icon: <BookOpen className="text-milgen-yellow" size={32} />
  }
];

// Operation locations
const operationLocations = [
  {
    name: 'Migori Gold Fields',
    type: 'Gold Mining',
    location: 'Migori County, Kenya',
    employees: '320+',
    established: '2010'
  },
  {
    name: 'Taita Gemstone Mines',
    type: 'Gemstone Extraction',
    location: 'Taita Taveta, Kenya',
    employees: '180+',
    established: '2012'
  },
  {
    name: 'Mombasa Processing Plant',
    type: 'Mineral Processing',
    location: 'Mombasa, Kenya',
    employees: '250+',
    established: '2015'
  }
];

const Leadership = () => {
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

  // Refs for scroll animations
  const executiveRef = useRef(null);
  const executiveInView = useInView(executiveRef, { once: true, margin: "-10%" });
  
  const managementRef = useRef(null);
  const managementInView = useInView(managementRef, { once: true, margin: "-10%" });
  
  const cultureRef = useRef(null);
  const cultureInView = useInView(cultureRef, { once: true, margin: "-10%" });
  
  const operationsRef = useRef(null);
  const operationsInView = useInView(operationsRef, { once: true, margin: "-10%" });

  return (
    <>
      <Header />
      <main>
        {/* Enhanced Hero Section */}
        <section className="h-[70vh] relative flex items-center overflow-hidden">
          {/* Parallax background with gradient overlay */}
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597392526749-eda994cc75d1?q=80&w=1920')] bg-cover bg-center transform scale-110"
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
                Meet Our Team
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Our <span className="text-milgen-yellow">Leadership</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                Meet the experienced team guiding Milgen Mines to sustainable growth, innovation, and responsible resource management.
              </p>
              
              {/* Key stats row */}
              <div className="flex flex-wrap gap-10 mt-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex flex-col"
                >
                  <span className="text-4xl font-bold text-milgen-yellow">20+</span>
                  <span className="text-sm text-white/80">Years Experience</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="flex flex-col"
                >
                  <span className="text-4xl font-bold text-milgen-yellow">15+</span>
                  <span className="text-sm text-white/80">Industry Awards</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="flex flex-col"
                >
                  <span className="text-4xl font-bold text-milgen-yellow">3</span>
                  <span className="text-sm text-white/80">Mining Operations</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* Floating element */}
          <motion.div 
            className="hidden md:block absolute bottom-10 right-10 bg-white p-4 rounded-xl shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <Award className="text-milgen-yellow" size={32} />
              <div>
                <p className="font-bold">Industry Leaders</p>
                <p className="text-sm text-gray-600">In Sustainable Mining</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Enhanced Executive Team Section */}
        <section className="py-20 md:py-28 bg-white" ref={executiveRef}>
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={executiveInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 bg-milgen-yellow/10 text-milgen-yellow rounded-full text-sm font-medium mb-4">
                Executive Leadership
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Executive <span className="text-milgen-yellow">Team</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our executive leadership combines decades of industry expertise with visionary innovation to drive Milgen Mines forward in responsible resource management.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {executiveTeam.map((executive, index) => (
                <motion.div 
                  key={index} 
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={executiveInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.2 + (index * 0.2), duration: 0.7 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="relative h-96 mb-0 overflow-hidden">
                      <img 
                        src={executive.image} 
                        alt={executive.name} 
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70"></div>
                      
                      {/* Social icons */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex gap-3 transform translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          <a 
                            href="#" 
                            className="w-10 h-10 bg-milgen-yellow rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                            aria-label={`${executive.name}'s LinkedIn profile`}
                          >
                            <Linkedin size={20} className="text-milgen-black" />
                          </a>
                          <a 
                            href="#" 
                            className="w-10 h-10 bg-milgen-yellow rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                            aria-label={`${executive.name}'s Twitter profile`}
                          >
                            <Twitter size={20} className="text-milgen-black" />
                          </a>
                          <a 
                            href={`mailto:${executive.name.toLowerCase().replace(' ', '.')}@milgenmines.com`} 
                            className="w-10 h-10 bg-milgen-yellow rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                            aria-label={`Email ${executive.name}`}
                          >
                            <Mail size={20} className="text-milgen-black" />
                          </a>
                        </div>
                      </div>
                      
                      {/* Name and position overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:translate-y-2 transition-transform duration-300">
                        <div className="mb-1 text-milgen-yellow font-medium">
                          {executive.credentials}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{executive.name}</h3>
                        <p className="text-white/80 font-medium mb-0">{executive.position}</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      {/* Expertise tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {executive.expertise.map((skill, i) => (
                          <span key={i} className="px-3 py-1 bg-milgen-yellow/10 text-milgen-yellow text-xs font-medium rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <p className="text-gray-700 mb-4">{executive.bio}</p>
                      
                      {/* Quote */}
                      <blockquote className="italic text-gray-600 border-l-4 border-milgen-yellow pl-4 text-sm">
                        "{executive.quote}"
                      </blockquote>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Senior Management Section */}
        <section className="py-20 bg-milgen-light" ref={managementRef}>
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={managementInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 bg-milgen-yellow/10 text-milgen-yellow rounded-full text-sm font-medium mb-4">
                Management Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Senior <span className="text-milgen-yellow">Management</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our management team brings specialized expertise and operational leadership to every aspect of our business.
              </p>
            </motion.div>

            {/* Filter tabs for management team */}
            <div className="mb-12">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="bg-white/70 flex flex-wrap justify-center">
                  <TabsTrigger value="all">All Departments</TabsTrigger>
                  <TabsTrigger value="finance">Finance</TabsTrigger>
                  <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
                  <TabsTrigger value="hr">Human Resources</TabsTrigger>
                  <TabsTrigger value="other">Other Departments</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {seniorManagement.map((manager, index) => (
                      <ManagerCard manager={manager} index={index} inView={managementInView} key={index} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="finance" className="mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {seniorManagement
                      .filter(manager => manager.department === 'Finance')
                      .map((manager, index) => (
                        <ManagerCard manager={manager} index={index} inView={managementInView} key={index} />
                      ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="sustainability" className="mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {seniorManagement
                      .filter(manager => manager.department === 'Sustainability')
                      .map((manager, index) => (
                        <ManagerCard manager={manager} index={index} inView={managementInView} key={index} />
                      ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="hr" className="mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {seniorManagement
                      .filter(manager => manager.department === 'Human Resources')
                      .map((manager, index) => (
                        <ManagerCard manager={manager} index={index} inView={managementInView} key={index} />
                      ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="other" className="mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {seniorManagement
                      .filter(manager => !['Finance', 'Sustainability', 'Human Resources'].includes(manager.department))
                      .map((manager, index) => (
                        <ManagerCard manager={manager} index={index} inView={managementInView} key={index} />
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Enhanced Company Culture Section */}
        <section className="py-20 bg-milgen-black text-white" ref={cultureRef}>
          <div className="container-custom">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              initial="hidden"
              animate={cultureInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <motion.div className="lg:col-span-6 space-y-6" variants={itemVariants}>
                <span className="inline-block px-4 py-1.5 bg-milgen-yellow/20 text-milgen-yellow rounded-full text-sm font-medium">
                  Our Workplace
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Our <span className="text-milgen-yellow">Culture</span>
                </h2>
                <p className="text-lg mb-6">
                  At Milgen Mines, we foster a culture of innovation, integrity, and inclusivity. Our team members are empowered to contribute ideas, take ownership, and grow professionally.
                </p>
                <p className="text-lg mb-6">
                  We believe that diverse perspectives drive better decision-making and outcomes. Our leadership team is committed to creating an environment where all employees can thrive.
                </p>
                
                {/* Company values grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                  {companyValues.map((value, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm p-5 rounded-xl">
                      <div className="flex items-center mb-3">
                        {value.icon}
                        <h3 className="font-bold text-xl ml-3">{value.title}</h3>
                      </div>
                      <p className="text-white/80">{value.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div className="lg:col-span-6 relative" variants={itemVariants}>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-milgen-yellow/10 rounded-full blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1626619540199-afd6d3fcd1f4?q=80&w=1920" 
                  alt="Mining team collaboration" 
                  className="rounded-xl shadow-2xl w-full object-cover h-[500px]"
                  loading="lazy"
                />
                
                {/* Floating achievement badge */}
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={cultureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <div className="w-10 h-10 rounded-full bg-milgen-yellow/20 flex items-center justify-center">
                    <Coffee className="text-milgen-yellow" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Top Employer</p>
                    <p className="text-xs text-gray-500">In Mining Industry</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Mining Operations Section */}
        <section className="py-20 bg-milgen-light" ref={operationsRef}>
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={operationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 bg-milgen-yellow/10 text-milgen-yellow rounded-full text-sm font-medium mb-4">
                Our Mines
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-milgen-yellow">Mining Operations</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our leadership team oversees diverse mining operations across Kenya, ensuring sustainable extraction of valuable minerals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white rounded-xl overflow-hidden shadow-md group"
                initial={{ opacity: 0, y: 30 }}
                animate={operationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                whileHover={{ y: -10 }}
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1586043511338-6ed43a9d0674?q=80&w=1000" 
                    alt="Gold Mining Operations" 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="bg-milgen-yellow text-black text-xs font-bold px-2 py-1 rounded-md">Gold Mining</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Gold Operations</h3>
                  <p className="text-gray-700 mb-4">
                    High-purity gold extraction operations in Migori & Western Kenya regions with state-of-the-art processing facilities.
                  </p>
                  
                  <div className="flex justify-between text-sm mt-6 pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-gray-500">Location:</span>
                      <p className="font-medium">Migori County</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Established:</span>
                      <p className="font-medium">2010</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white rounded-xl overflow-hidden shadow-md group"
                initial={{ opacity: 0, y: 30 }}
                animate={operationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                whileHover={{ y: -10 }}
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1618500299034-abce7ed0e8df?q=80&w=1000" 
                    alt="Gemstone Mining" 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="bg-milgen-yellow text-black text-xs font-bold px-2 py-1 rounded-md">Gemstone Mining</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Gemstone Operations</h3>
                  <p className="text-gray-700 mb-4">
                    Extraction of high-quality rubies, sapphires and garnets in Taita Taveta with artisanal mining support.
                  </p>
                  
                  <div className="flex justify-between text-sm mt-6 pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-gray-500">Location:</span>
                      <p className="font-medium">Taita Taveta</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Established:</span>
                      <p className="font-medium">2012</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white rounded-xl overflow-hidden shadow-md group"
                initial={{ opacity: 0, y: 30 }}
                animate={operationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                whileHover={{ y: -10 }}
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1606761568499-5d2d30cf57a2?q=80&w=1000" 
                    alt="Copper Mining" 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="bg-milgen-yellow text-black text-xs font-bold px-2 py-1 rounded-md">Copper Processing</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Copper Operations</h3>
                  <p className="text-gray-700 mb-4">
                    Sustainable copper recycling and processing facilities in Nairobi & Mombasa serving local and international markets.
                  </p>
                  
                  <div className="flex justify-between text-sm mt-6 pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-gray-500">Location:</span>
                      <p className="font-medium">Mombasa</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Established:</span>
                      <p className="font-medium">2015</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={operationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <Button variant="outline" size="lg" asChild>
                <Link to="/operations" className="flex items-center">
                  Explore All Mining Operations
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Join Us CTA */}
        <section className="py-16 bg-gradient-to-r from-milgen-black to-milgen-black/90 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Join Our <span className="text-milgen-yellow">Team</span>
                </h2>
                <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
                  We're always looking for talented individuals who share our values and vision for responsible mining. Explore opportunities to grow with us and make a meaningful impact in the mining industry.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button variant="apple" size="apple-lg" className="bg-milgen-yellow hover:bg-milgen-yellow/90 text-black" asChild>
                    <Link to="/careers" className="flex items-center">
                      <Briefcase className="mr-2" size={18} />
                      View Career Opportunities
                    </Link>
                  </Button>
                  <Button variant="outline" size="apple-lg" className="text-white border-white hover:bg-white/10" asChild>
                    <Link to="/contact">
                      Contact Our Team
                    </Link>
                  </Button>
                </div>
                
                {/* Stats row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-3xl font-bold text-milgen-yellow">96%</h3>
                    <p className="text-white/80">Employee Satisfaction</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-3xl font-bold text-milgen-yellow">750+</h3>
                    <p className="text-white/80">Team Members</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-3xl font-bold text-milgen-yellow">4.8/5</h3>
                    <p className="text-white/80">Glassdoor Rating</p>
                  </div>
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

// Component for manager cards to avoid repetition
const ManagerCard = ({ manager, index, inView }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: 0.2 + (index * 0.1), duration: 0.7 }}
      whileHover={{ y: -5 }}
    >
      <div className="h-64 overflow-hidden relative">
        <img 
          src={manager.image} 
          alt={manager.name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Hover overlay with social links */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-3 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <a 
              href="#" 
              className="w-9 h-9 bg-milgen-yellow rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
              aria-label={`${manager.name}'s LinkedIn profile`}
            >
              <Linkedin size={18} className="text-milgen-black" />
            </a>
            <a 
              href={`mailto:${manager.name.toLowerCase().replace(' ', '.')}@milgenmines.com`} 
              className="w-9 h-9 bg-milgen-yellow rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
              aria-label={`Email ${manager.name}`}
            >
              <Mail size={18} className="text-milgen-black" />
            </a>
          </div>
        </div>
        
        {/* Department badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-milgen-yellow/90 text-black text-xs font-bold rounded-full">
            {manager.department}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{manager.name}</h3>
        <p className="text-milgen-yellow font-medium">{manager.position}</p>
      </div>
    </motion.div>
  );
};

export default Leadership;