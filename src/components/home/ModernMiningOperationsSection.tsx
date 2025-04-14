import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

const operations = [
  {
    id: 'gemstones',
    title: 'Gemstones',
    locations: 'Taita Taveta & Garbatula',
    description: 'Extraction of high-quality rubies, sapphires and garnets for luxury markets worldwide.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000',
    stats: '4.2K+ carats monthly'
  },
  {
    id: 'coltan',
    title: 'Coltan',
    locations: 'Embu, Kitui & Turkana',
    description: 'Mining vital coltan used in electronics and aerospace industries globally.',
    image: 'https://images.unsplash.com/photo-1569144157596-65c376e7bcfd?q=80&w=1000',
    stats: '1.8K tons annually'
  },
  {
    id: 'gold',
    title: 'Gold',
    locations: 'Migori & Western Kenya',
    description: 'Extracting high-purity gold meeting international standards for investment and industry.',
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=1000',
    stats: '850kg per year'
  },
  {
    id: 'cinnabar',
    title: 'Cinnabar',
    locations: 'Vitengeni',
    description: 'Sourcing mercury for essential industrial processes with strict safety protocols.',
    image: 'https://images.unsplash.com/photo-1624365169398-e4e120beb080?q=80&w=1000',
    stats: '520 tons processed'
  }
];

const ModernMiningOperationsSection = () => {
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
        <div className="absolute top-40 right-0 w-[30rem] h-[30rem] bg-milgen-yellow/5 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-milgen-yellow/10 rounded-full blur-[80px]"></div>
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
            <span className="px-4 py-1.5 bg-milgen-yellow/10 text-milgen-yellow rounded-full text-sm font-medium">
              Our Operations
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Our <span className="text-milgen-yellow">Mining Operations</span>
          </h2>
          
          <p className="text-lg text-gray-600">
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
          {operations.map((op, index) => (
            <motion.div 
              key={op.id}
              variants={itemVariants} 
              className="rounded-2xl overflow-hidden group"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={op.image} 
                  alt={op.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                
                {/* Content overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full inline-flex items-center w-fit mb-3">
                    <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                    <span className="text-xs text-white font-medium">Active Operation</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-1">{op.title}</h3>
                  
                  <div className="flex items-center text-sm text-white/80 mb-2">
                    <MapPin size={14} className="mr-1 text-milgen-yellow" />
                    <p>{op.locations}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-md dark:bg-black/40 p-6 border border-gray-100 dark:border-gray-800">
                <div className="flex items-start justify-between mb-4">
                  <p className="text-gray-700 dark:text-gray-300">{op.description}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-milgen-yellow font-medium">
                    <CheckCircle2 size={14} />
                    <span>{op.stats}</span>
                  </div>
                  
                  <Link 
                    to={`/operations#${op.id}`}
                    className="inline-flex items-center text-milgen-yellow font-medium hover:text-yellow-600 transition-colors text-sm"
                  >
                    Learn more
                    <ArrowRight className="ml-1" size={14} />
                  </Link>
                </div>
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
          <Button variant="apple" size="apple-lg" asChild>
            <Link to="/operations" className="flex items-center">
              View All Operations
              <ArrowUpRight className="ml-2" size={18} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernMiningOperationsSection; 