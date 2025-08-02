import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  Building, 
  Home, 
  Globe, 
  Leaf, 
  Users, 
  ArrowRight, 
  ExternalLink,
  MapPin,
  Calendar,
  Award
} from 'lucide-react';
import ModernLayout from '../components/layout/ModernLayout';
import { Button } from '../components/ui/button';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  
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

  // Portfolio data
  const projects = [
    {
      id: 1,
      title: "Modern Office Complex",
      category: "commercial",
      location: "Downtown Business District",
      year: "2023",
      description: "A state-of-the-art office complex featuring sustainable design, smart building technology, and collaborative workspaces.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
      details: {
        size: "50,000 sq ft",
        duration: "18 months",
        awards: ["LEED Gold Certification", "Best Commercial Project 2023"],
        features: ["Smart Building Systems", "Green Roof", "Collaborative Spaces", "Natural Lighting"]
      }
    },
    {
      id: 2,
      title: "Luxury Residential Villa",
      category: "residential",
      location: "Exclusive Hillside Community",
      year: "2023",
      description: "A contemporary luxury villa that seamlessly blends indoor and outdoor living with panoramic views.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800",
      details: {
        size: "8,500 sq ft",
        duration: "12 months",
        awards: ["Residential Design Excellence"],
        features: ["Open Floor Plan", "Smart Home Integration", "Sustainable Materials", "Landscape Design"]
      }
    },
    {
      id: 3,
      title: "Boutique Hotel & Spa",
      category: "hospitality",
      location: "Coastal Resort Area",
      year: "2022",
      description: "An intimate boutique hotel that captures the essence of coastal living with modern luxury amenities.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
      details: {
        size: "25,000 sq ft",
        duration: "15 months",
        awards: ["Hospitality Design Award", "Sustainable Tourism"],
        features: ["Ocean Views", "Spa Facilities", "Rooftop Restaurant", "Eco-Friendly Design"]
      }
    },
    {
      id: 4,
      title: "Green Office Tower",
      category: "sustainable",
      location: "Urban Center",
      year: "2022",
      description: "A pioneering sustainable office tower that sets new standards for green building technology.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800",
      details: {
        size: "120,000 sq ft",
        duration: "24 months",
        awards: ["LEED Platinum", "Green Building of the Year"],
        features: ["Solar Panels", "Rainwater Harvesting", "Living Walls", "Net Zero Energy"]
      }
    },
    {
      id: 5,
      title: "Contemporary Art Gallery",
      category: "commercial",
      location: "Cultural District",
      year: "2021",
      description: "A stunning art gallery that serves as both a cultural hub and architectural landmark.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800",
      details: {
        size: "15,000 sq ft",
        duration: "10 months",
        awards: ["Cultural Architecture Award"],
        features: ["Natural Light Galleries", "Flexible Exhibition Spaces", "Public Plaza", "Cafe"]
      }
    },
    {
      id: 6,
      title: "Smart Home Complex",
      category: "residential",
      location: "Suburban Development",
      year: "2021",
      description: "A community of smart homes that demonstrate the future of residential living technology.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800",
      details: {
        size: "12,000 sq ft total",
        duration: "14 months",
        awards: ["Innovation in Residential Design"],
        features: ["Smart Home Systems", "Community Gardens", "Shared Amenities", "Energy Efficient"]
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: <Building className="w-4 h-4" /> },
    { id: 'residential', label: 'Residential', icon: <Home className="w-4 h-4" /> },
    { id: 'commercial', label: 'Commercial', icon: <Building className="w-4 h-4" /> },
    { id: 'hospitality', label: 'Hospitality', icon: <Globe className="w-4 h-4" /> },
    { id: 'sustainable', label: 'Sustainable', icon: <Leaf className="w-4 h-4" /> }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
              <Award className="w-4 h-4 mr-2" />
              Our Portfolio
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

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
                variants={itemVariants}
                whileHover={{ y: -2 }}
              >
                {category.icon}
                <span className="ml-2 font-medium">{category.label}</span>
              </motion.button>
            ))}
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
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-900 capitalize">{project.category}</span>
                  </div>
                  
                  {/* Year badge */}
                  <div className="absolute top-4 right-4 bg-blue-500/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-white">{project.year}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <MapPin className="w-4 h-4 text-blue-500 mr-2" />
                    <span className="text-sm text-gray-600">{project.location}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Project details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{project.details.size}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Award className="w-4 h-4 mr-2" />
                      <span>{project.details.duration}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="group-hover:text-blue-600 p-0 h-auto"
                  >
                    <span className="flex items-center text-sm font-medium">
                      View Details
                      <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-sm font-medium capitalize">
                  {selectedProject.category}
                </span>
                <span className="ml-4 text-gray-500">{selectedProject.year}</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="text-gray-600 mb-6">{selectedProject.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Size:</span>
                      <span className="font-medium">{selectedProject.details.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{selectedProject.details.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium">{selectedProject.location}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedProject.details.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {selectedProject.details.awards.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Awards & Recognition</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.details.awards.map((award, index) => (
                      <span key={index} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                        {award}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}

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
              Inspired by our portfolio? Let's collaborate to create something extraordinary for your next project.
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

export default Portfolio; 