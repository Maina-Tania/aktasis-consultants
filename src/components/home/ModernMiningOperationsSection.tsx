import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

const projects = [
  {
    id: 'residential',
    title: 'Residential',
    locations: 'Modern Homes & Apartments',
    description: 'Creating beautiful, functional living spaces that blend comfort with contemporary design.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000',
    stats: '45+ Projects'
  },
  {
    id: 'commercial',
    title: 'Commercial',
    locations: 'Office Buildings & Retail',
    description: 'Designing innovative commercial spaces that enhance productivity and customer experience.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000',
    stats: '30+ Buildings'
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    locations: 'Hotels & Resorts',
    description: 'Crafting memorable hospitality experiences through thoughtful architectural design.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000',
    stats: '25+ Venues'
  },
  {
    id: 'sustainable',
    title: 'Sustainable',
    locations: 'Green Buildings',
    description: 'Pioneering eco-friendly architecture that minimizes environmental impact.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000',
    stats: '20+ Green Projects'
  }
];

const ModernProjectsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-0 w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[80px]"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-1.5 bg-blue-500/10 text-blue-600 rounded-full text-sm font-medium">
              Our Projects
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Our <span className="text-blue-500">Architectural Projects</span>
          </h2>
          
          <p className="text-lg text-gray-600">
            We specialize in creating innovative architectural solutions across diverse sectors, 
            delivering exceptional designs that stand the test of time.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
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
                  <span className="text-sm font-semibold text-gray-900">{project.stats}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="w-4 h-4 text-blue-500 mr-2" />
                  <span className="text-sm text-gray-600">{project.locations}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="group-hover:text-blue-600 p-0 h-auto"
                >
                  <span className="flex items-center text-sm font-medium">
                    View Project
                    <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button asChild size="lg" className="group">
            <Link to="/operations" className="flex items-center">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernProjectsSection; 