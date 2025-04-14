import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const operations = [
  {
    id: 'gemstones',
    title: 'Gemstones',
    locations: 'Taita Taveta & Garbatula',
    description: 'Extraction of high-quality rubies, sapphires and garnets for luxury markets worldwide.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000'
  },
  {
    id: 'coltan',
    title: 'Coltan',
    locations: 'Embu, Kitui & Turkana',
    description: 'Mining vital coltan used in electronics and aerospace industries globally.',
    image: 'https://images.unsplash.com/photo-1569144157596-65c376e7bcfd?q=80&w=1000'
  },
  {
    id: 'gold',
    title: 'Gold',
    locations: 'Migori & Western Kenya',
    description: 'Extracting high-purity gold meeting international standards for investment and industry.',
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=1000'
  },
  {
    id: 'cinnabar',
    title: 'Cinnabar',
    locations: 'Vitengeni',
    description: 'Sourcing mercury for essential industrial processes with strict safety protocols.',
    image: 'https://images.unsplash.com/photo-1624365169398-e4e120beb080?q=80&w=1000'
  }
];

const MiningOperationsSection = () => {
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="text-yellow-500">Mining Operations</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Milgen Mines operates across key mineral sectors in strategic locations throughout Kenya, 
            delivering premium resources to global markets.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {operations.map((op) => (
            <motion.div 
              key={op.id}
              variants={itemVariants} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-56 overflow-hidden group">
                <img 
                  src={op.image} 
                  alt={op.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium px-4 py-2 rounded-full border-2 border-white">Explore</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-gray-800">{op.title}</h3>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-1 rounded">Active</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <MapPin size={14} className="mr-1 text-yellow-500" />
                  <p>{op.locations}</p>
                </div>
                <p className="text-gray-700 mb-6">{op.description}</p>
                <Link 
                  to={`/operations#${op.id}`}
                  className="inline-flex items-center text-yellow-500 font-semibold hover:text-yellow-600 transition-colors"
                >
                  Learn more
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link 
            to="/operations" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center"
          >
            View All Operations
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MiningOperationsSection;