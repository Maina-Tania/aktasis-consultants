import React from 'react';
import { motion } from 'framer-motion';
import { Building, Home, Globe, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MiningOperationsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Residential Complex",
      description: "Modern residential development featuring sustainable design principles and innovative space utilization.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800",
      category: "Residential",
      location: "Downtown District",
      year: "2024"
    },
    {
      id: 2,
      title: "Commercial Office Tower",
      description: "State-of-the-art office building with cutting-edge design and energy-efficient systems.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
      category: "Commercial",
      location: "Business District",
      year: "2023"
    },
    {
      id: 3,
      title: "Sustainable Community",
      description: "Eco-friendly residential community with green building practices and renewable energy integration.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800",
      category: "Sustainable",
      location: "Green Valley",
      year: "2024"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AKTASIS operates across diverse architectural sectors, delivering innovative design solutions 
            for residential, commercial, and sustainable projects that transform spaces and enhance communities.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Building className="mr-1" size={16} />
                    {project.location}
                  </div>
                  <Link
                    to={`/projects/${project.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                  >
                    View Details
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MiningOperationsSection;