import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  MapPin, 
  ArrowRight, 
  Building, 
  Home, 
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
import ModernLayout from '../components/layout/ModernLayout';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Progress } from '../components/ui/progress';

const projects = [
  {
    id: 'residential',
    title: 'Residential Design',
    locations: 'Urban & Suburban Areas',
    description: 'Creating beautiful, functional living spaces that blend comfort with contemporary design.',
    longDescription: 'Our residential projects focus on creating homes that are both aesthetically pleasing and highly functional. We work closely with homeowners to understand their lifestyle needs and create spaces that enhance daily living while maintaining architectural integrity.',
    process: ['Consultation', 'Concept Design', 'Detailed Planning', 'Construction', 'Interior Design', 'Completion'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800',
    stats: {
      projects: '45+ completed',
      employees: '12 architects',
      established: '2005',
      satisfaction: 95
    },
    services: ['Custom Homes', 'Renovations', 'Interior Design', 'Landscape Design'],
    icon: <Home className="text-blue-500" size={24} />
  },
  {
    id: 'commercial',
    title: 'Commercial Architecture',
    locations: 'Downtown & Business Districts',
    description: 'Designing innovative commercial spaces that enhance productivity and customer experience.',
    longDescription: 'Our commercial projects range from office buildings to retail spaces, always with a focus on creating environments that support business success while providing excellent user experience. We integrate modern technology and sustainable practices into every project.',
    process: ['Site Analysis', 'Concept Development', 'Technical Design', 'Construction Management', 'Interior Fit-out', 'Handover'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800',
    stats: {
      projects: '30+ completed',
      employees: '8 architects',
      established: '2010',
      satisfaction: 92
    },
    services: ['Office Buildings', 'Retail Spaces', 'Restaurants', 'Hotels'],
    icon: <Building className="text-green-500" size={24} />
  },
  {
    id: 'hospitality',
    title: 'Hospitality Projects',
    locations: 'Tourist Destinations & Cities',
    description: 'Crafting memorable hospitality experiences through thoughtful architectural design.',
    longDescription: 'Our hospitality projects create spaces that not only meet functional requirements but also provide memorable experiences for guests. We focus on creating unique atmospheres that reflect local culture while maintaining international standards.',
    process: ['Concept Design', 'Space Planning', 'Interior Design', 'Construction', 'Furnishing', 'Opening'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
    stats: {
      projects: '25+ completed',
      employees: '6 architects',
      established: '2012',
      satisfaction: 94
    },
    services: ['Hotels', 'Resorts', 'Restaurants', 'Spas'],
    icon: <Globe className="text-purple-500" size={24} />
  },
  {
    id: 'sustainable',
    title: 'Sustainable Design',
    locations: 'Various Locations',
    description: 'Pioneering eco-friendly architecture that minimizes environmental impact.',
    longDescription: 'Our sustainable design projects demonstrate that beautiful architecture can also be environmentally responsible. We use cutting-edge green building technologies and materials to create structures that are both stunning and sustainable.',
    process: ['Environmental Analysis', 'Sustainable Design', 'Green Materials', 'Construction', 'Certification', 'Monitoring'],
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800',
    stats: {
      projects: '20+ completed',
      employees: '4 architects',
      established: '2015',
      satisfaction: 98
    },
    services: ['LEED Certification', 'Green Buildings', 'Solar Integration', 'Water Conservation'],
    icon: <Leaf className="text-green-600" size={24} />
  },
  {
    id: 'interior',
    title: 'Interior Design',
    locations: 'Residential & Commercial',
    description: 'Seamlessly integrating interior spaces with architectural vision for cohesive environments.',
    longDescription: 'Our interior design services complement our architectural work, ensuring that every space is not only structurally sound but also beautifully appointed. We create interiors that reflect the architectural vision while meeting the practical needs of users.',
    process: ['Space Analysis', 'Concept Development', 'Material Selection', 'Furniture Design', 'Installation', 'Styling'],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800',
    stats: {
      projects: '60+ completed',
      employees: '10 designers',
      established: '2008',
      satisfaction: 96
    },
    services: ['Residential Interiors', 'Commercial Spaces', 'Furniture Design', 'Lighting Design'],
    icon: <Users className="text-orange-500" size={24} />
  }
];

const Projects = () => {
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
              <Building className="w-4 h-4 mr-2" />
              Our Projects
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight"
              variants={itemVariants}
            >
              Our <span className="text-blue-500">Portfolio</span> of Excellence
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Explore our diverse collection of architectural projects that showcase our commitment to innovation, sustainability, and design excellence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Stats overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-900">{project.stats.projects}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    {project.icon}
                    <span className="text-sm text-gray-600 ml-2">{project.locations}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Services */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Services:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.services.map((service, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="group-hover:text-blue-600 p-0 h-auto"
                  >
                    <span className="flex items-center text-sm font-medium">
                      View Project
                      <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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
              Our <span className="text-blue-500">Impact</span> in Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quantifying our success through completed projects, satisfied clients, and industry recognition.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <div className="text-4xl font-bold text-blue-500 mb-2">180+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <div className="text-4xl font-bold text-blue-500 mb-2">95%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <div className="text-4xl font-bold text-blue-500 mb-2">25+</div>
              <div className="text-sm text-gray-600">Team Members</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <div className="text-4xl font-bold text-blue-500 mb-2">15+</div>
              <div className="text-sm text-gray-600">Awards Won</div>
            </motion.div>
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

export default Projects;