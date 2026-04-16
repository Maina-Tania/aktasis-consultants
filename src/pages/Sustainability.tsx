import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  Building, 
  Home, 
  Globe, 
  Leaf, 
  Users, 
  Award, 
  Download, 
  BarChart3, 
  Droplets, 
  HeartPulse,
  GraduationCap,
  Building2,
  AlertCircle,
  Check,
  ArrowRight,
  Palette,
  Lightbulb,
  Shield,
  Zap
} from 'lucide-react';
import ModernLayout from '../components/layout/ModernLayout';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const Services = () => {
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

  // Service categories
  const serviceCategories = [
    { 
      label: 'Residential Design', 
      value: 35, 
      icon: <Home className="text-blue-500" size={24} />, 
      color: 'bg-blue-500' 
    },
    { 
      label: 'Commercial Projects', 
      value: 45, 
      icon: <Building className="text-green-500" size={24} />, 
      color: 'bg-green-500' 
    },
    { 
      label: 'Sustainable Design', 
      value: 60, 
      icon: <Leaf className="text-amber-500" size={24} />, 
      color: 'bg-amber-500' 
    },
    { 
      label: 'Interior Design', 
      value: 40, 
      icon: <Palette className="text-purple-500" size={24} />, 
      color: 'bg-purple-500' 
    },
  ];

  // Refs for scroll animations
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-10%" });
  
  const expertiseRef = useRef(null);
  const expertiseInView = useInView(expertiseRef, { once: true, margin: "-10%" });
  
  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: "-10%" });
  
  const benefitsRef = useRef(null);
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-10%" });
  
  const metricsRef = useRef(null);
  const metricsInView = useInView(metricsRef, { once: true, margin: "-10%" });

  return (
    <ModernLayout>
      {/* Enhanced Hero Section */}
      <section className="h-[70vh] relative flex items-center overflow-hidden">
        {/* Parallax background */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920')] bg-cover bg-center transform scale-110"
          style={{
            transition: 'transform 0.5s ease-out',
          }}
        ></div>
        
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90"></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-500 rounded-full text-sm font-medium mb-6">
              Architectural Excellence
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Our <span className="text-blue-500">Services</span> & Expertise
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Comprehensive architectural solutions tailored to your needs, from sustainable design to innovative building solutions with AKTASIS.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="apple" size="apple-lg" asChild>
                <a href="#services-overview" className="flex items-center">
                  Explore Our Services
                </a>
              </Button>
              <Button variant="outline" size="apple-lg" className="text-white border-white hover:bg-white/10" asChild>
                <Link to="/contact" className="flex items-center">
                  <ArrowRight className="mr-2" size={18} />
                  Start Your Project
                </Link>
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
            <Award className="text-blue-600" size={32} />
            <div>
              <p className="font-bold">Licensed Architect</p>
              <p className="text-sm text-gray-600">Professional Certification</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Main Services Section */}
      <section id="services-overview" className="py-20 md:py-28 bg-white" ref={servicesRef}>
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Comprehensive <span className="text-blue-500">Architectural Services</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From initial concept to project completion, AKTASIS provides end-to-end architectural solutions that bring your vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div 
              className="bg-gray-50 p-8 rounded-2xl shadow-sm group hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-white h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-md group-hover:bg-blue-500/10 transition-all duration-300">
                <Building size={48} className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Architectural Design</h3>
              <p className="text-gray-700 text-center">
                Complete architectural design services including concept development, detailed drawings, 3D modeling, and construction documentation.
              </p>
              <div className="pt-6 text-center">
                <Button variant="ghost" size="sm" className="text-blue-500 hover:bg-blue-500/10" asChild>
                  <Link to="/projects">
                    View Projects
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-8 rounded-2xl shadow-sm group hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-white h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-md group-hover:bg-blue-500/10 transition-all duration-300">
                <Leaf size={48} className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Sustainable Design</h3>
              <p className="text-gray-700 text-center">
                Eco-friendly architectural solutions that prioritize energy efficiency, green building materials, and environmental responsibility.
              </p>
              <div className="pt-6 text-center">
                <Button variant="ghost" size="sm" className="text-blue-500 hover:bg-blue-500/10" asChild>
                  <Link to="/projects">
                    Learn More
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-8 rounded-2xl shadow-sm group hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-white h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-md group-hover:bg-blue-500/10 transition-all duration-300">
                <Palette size={48} className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Interior Design</h3>
              <p className="text-gray-700 text-center">
                Seamless interior design integration that complements architectural vision with functional and aesthetic excellence.
              </p>
              <div className="pt-6 text-center">
                <Button variant="ghost" size="sm" className="text-blue-500 hover:bg-blue-500/10" asChild>
                  <Link to="/projects">
                    View Examples
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 md:py-28 bg-gray-50" ref={expertiseRef}>
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={expertiseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Areas of <span className="text-blue-500">Expertise</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Specialized architectural services across diverse project types and scales.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Home className="text-blue-500" size={32} />,
                title: "Residential",
                description: "Custom homes, renovations, and multi-family projects"
              },
              {
                icon: <Building className="text-blue-500" size={32} />,
                title: "Commercial",
                description: "Office buildings, retail spaces, and mixed-use developments"
              },
              {
                icon: <Globe className="text-blue-500" size={32} />,
                title: "Hospitality",
                description: "Hotels, restaurants, and entertainment venues"
              },
              {
                icon: <Leaf className="text-blue-500" size={32} />,
                title: "Sustainable",
                description: "Green buildings and eco-friendly design solutions"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={expertiseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 md:py-28 bg-white" ref={processRef}>
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-blue-500">Design Process</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A collaborative approach that ensures your vision is realized through every stage of the project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Initial meeting to understand your vision, requirements, and project goals"
              },
              {
                step: "02",
                title: "Concept Design",
                description: "Development of initial concepts and preliminary design solutions"
              },
              {
                step: "03",
                title: "Detailed Design",
                description: "Comprehensive design development with technical specifications"
              },
              {
                step: "04",
                title: "Construction",
                description: "Oversight and coordination during the construction phase"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
              >
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-blue-500 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-blue-500" size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-gray-50" ref={benefitsRef}>
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why Choose <span className="text-blue-500">AKTASIS</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Experience the difference of working with a dedicated architectural consultant who puts your vision first.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="text-blue-500" size={32} />,
                title: "Professional Excellence",
                description: "Licensed architect with years of experience in diverse project types"
              },
              {
                icon: <Users className="text-blue-500" size={32} />,
                title: "Personal Attention",
                description: "Direct collaboration with the principal architect throughout your project"
              },
              {
                icon: <Lightbulb className="text-blue-500" size={32} />,
                title: "Innovative Solutions",
                description: "Creative design approaches that balance aesthetics with functionality"
              },
              {
                icon: <Shield className="text-blue-500" size={32} />,
                title: "Quality Assurance",
                description: "Rigorous attention to detail and commitment to delivering excellence"
              },
              {
                icon: <Zap className="text-blue-500" size={32} />,
                title: "Efficient Process",
                description: "Streamlined workflow that respects your timeline and budget"
              },
              {
                icon: <Globe className="text-blue-500" size={32} />,
                title: "Sustainable Focus",
                description: "Environmental consciousness integrated into every design decision"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-xl font-semibold ml-3">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-blue-500">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your <span className="text-blue-200">Project</span>?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your architectural vision and create something extraordinary together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="apple-secondary" size="apple-lg" asChild>
                <Link to="/contact" className="flex items-center">
                  Get Started Today
                </Link>
              </Button>
              <Button variant="outline" size="apple-lg" className="bg-white/10 text-white border-white hover:bg-white/30 hover:text-white backdrop-blur-sm" asChild>
                <Link to="/projects" className="flex items-center">
                  View Our Work
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </ModernLayout>
  );
};

export default Services;