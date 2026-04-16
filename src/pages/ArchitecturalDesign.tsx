import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building, 
  Home, 
  Globe, 
  Users, 
  Award, 
  Download, 
  BarChart3, 
  Check,
  ArrowRight,
  Palette,
  Lightbulb,
  Shield,
  Zap,
  MapPin,
  Phone,
  Mail,
  Star,
  Clock,
  Target,
  Layers
} from 'lucide-react';
import ModernLayout from '../components/layout/ModernLayout';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const ArchitecturalDesign = () => {
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

  // Service features
  const serviceFeatures = [
    {
      icon: <Building className="text-blue-500" size={24} />,
      title: "Concept Development",
      description: "Transform your vision into innovative architectural concepts that blend creativity with functionality."
    },
    {
      icon: <Layers className="text-green-500" size={24} />,
      title: "Detailed Drawings",
      description: "Comprehensive technical drawings and specifications for construction and implementation."
    },
    {
      icon: <Palette className="text-purple-500" size={24} />,
      title: "3D Modeling & Visualization",
      description: "Advanced 3D modeling and photorealistic renderings to bring your project to life."
    },
    {
      icon: <Target className="text-orange-500" size={24} />,
      title: "Construction Documentation",
      description: "Complete construction documents including plans, sections, and detailed specifications."
    }
  ];

  // Project types
  const projectTypes = [
    {
      title: "Residential Architecture",
      description: "Custom homes, apartments, and residential complexes designed for modern living.",
      icon: <Home className="text-blue-500" size={32} />,
      features: ["Custom Home Design", "Multi-Family Housing", "Luxury Residences", "Sustainable Homes"]
    },
    {
      title: "Commercial Architecture",
      description: "Office buildings, retail spaces, and commercial facilities that drive business success.",
      icon: <Building className="text-green-500" size={32} />,
      features: ["Office Buildings", "Retail Spaces", "Hotels & Hospitality", "Industrial Facilities"]
    },
    {
      title: "Institutional Architecture",
      description: "Schools, hospitals, and public buildings that serve communities effectively.",
      icon: <Users className="text-purple-500" size={32} />,
      features: ["Educational Facilities", "Healthcare Buildings", "Government Offices", "Cultural Centers"]
    }
  ];

  // Process steps
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description: "We begin with a comprehensive consultation to understand your vision, requirements, and project goals."
    },
    {
      step: "02",
      title: "Concept Development",
      description: "Our team creates innovative design concepts that align with your vision and functional needs."
    },
    {
      step: "03",
      title: "Design Development",
      description: "We refine the concept into detailed designs with comprehensive documentation and specifications."
    },
    {
      step: "04",
      title: "Construction Documentation",
      description: "Complete technical drawings and specifications for construction and implementation."
    },
    {
      step: "05",
      title: "Construction Support",
      description: "Ongoing support during construction to ensure design integrity and quality implementation."
    }
  ];

  return (
    <ModernLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1920&h=1080&fit=crop" 
            alt="Modern architectural design" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-blue-900/80"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-6"
              variants={itemVariants}
            >
              <Building className="w-4 h-4 mr-2" />
              Architectural Excellence
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
              variants={itemVariants}
            >
              <span className="text-blue-500">Architectural</span> Design
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Transform your vision into stunning architectural masterpieces. From concept to construction, we create innovative designs that inspire and endure.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              variants={itemVariants}
            >
              <Button variant="apple" size="apple-lg" asChild>
                <Link to="/contact" className="flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button variant="outline" size="apple-lg" className="bg-white/10 text-white border-white hover:bg-white/30 hover:text-white backdrop-blur-sm" asChild>
                <Link to="/projects" className="flex items-center">
                  View Our Work
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              Comprehensive <span className="text-blue-500">Architectural Services</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              From initial concept to final construction, we provide end-to-end architectural design services tailored to your unique vision and requirements.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {serviceFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              Specialized <span className="text-blue-500">Project Types</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              We specialize in diverse architectural projects, each designed with precision and innovation to meet specific needs and aspirations.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projectTypes.map((project, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              Our <span className="text-blue-500">Design Process</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              A systematic approach to architectural design that ensures every project meets the highest standards of quality and innovation.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="text-center relative"
                variants={itemVariants}
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 z-0"></div>
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
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
              Ready to Create Something Extraordinary?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Let's collaborate to bring your architectural vision to life. Contact our team for a consultation.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact" className="flex items-center">
                Start Your Project
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </ModernLayout>
  );
};

export default ArchitecturalDesign; 