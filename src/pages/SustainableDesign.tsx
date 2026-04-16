import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Leaf, 
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
  Layers,
  Sun,
  Droplets,
  Wind,
  Recycle
} from 'lucide-react';
import ModernLayout from '../components/layout/ModernLayout';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const SustainableDesign = () => {
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

  // Sustainable features
  const sustainableFeatures = [
    {
      icon: <Sun className="text-yellow-500" size={24} />,
      title: "Solar Integration",
      description: "Harness the power of the sun with integrated solar panels and passive solar design strategies."
    },
    {
      icon: <Droplets className="text-blue-500" size={24} />,
      title: "Water Conservation",
      description: "Implement rainwater harvesting, greywater systems, and water-efficient fixtures."
    },
    {
      icon: <Wind className="text-green-500" size={24} />,
      title: "Natural Ventilation",
      description: "Design for optimal airflow and natural cooling to reduce energy consumption."
    },
    {
      icon: <Recycle className="text-purple-500" size={24} />,
      title: "Sustainable Materials",
      description: "Use eco-friendly, locally sourced, and recycled materials throughout the project."
    }
  ];

  // Green building standards
  const greenStandards = [
    {
      title: "LEED Certification",
      description: "Leadership in Energy and Environmental Design certification for sustainable building practices.",
      icon: <Award className="text-green-500" size={32} />,
      features: ["Energy Efficiency", "Water Conservation", "Sustainable Materials", "Indoor Air Quality"]
    },
    {
      title: "BREEAM Standards",
      description: "Building Research Establishment Environmental Assessment Method for sustainable construction.",
      icon: <Shield className="text-blue-500" size={32} />,
      features: ["Environmental Impact", "Resource Efficiency", "Health & Wellbeing", "Innovation"]
    },
    {
      title: "Green Star Rating",
      description: "Comprehensive sustainability rating system for buildings and communities.",
      icon: <Star className="text-yellow-500" size={32} />,
      features: ["Management", "Energy", "Water", "Materials"]
    }
  ];

  // Benefits
  const benefits = [
    {
      title: "Environmental Impact",
      description: "Reduce carbon footprint and minimize environmental damage through sustainable practices.",
      icon: <Globe className="text-green-500" size={24} />,
      stats: "40% reduction in energy consumption"
    },
    {
      title: "Cost Savings",
      description: "Lower operational costs through energy efficiency and reduced resource consumption.",
      icon: <BarChart3 className="text-blue-500" size={24} />,
      stats: "30% lower utility bills"
    },
    {
      title: "Health Benefits",
      description: "Improved indoor air quality and natural lighting for better occupant health and wellbeing.",
      icon: <Users className="text-purple-500" size={24} />,
      stats: "25% improvement in productivity"
    },
    {
      title: "Market Value",
      description: "Increased property value and marketability through sustainable design features.",
      icon: <Award className="text-orange-500" size={24} />,
      stats: "15% higher property value"
    }
  ];

  return (
    <ModernLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&h=1080&fit=crop" 
            alt="Sustainable green building design" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-emerald-900/70 to-green-900/80"></div>
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
              className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-medium mb-6"
              variants={itemVariants}
            >
              <Leaf className="w-4 h-4 mr-2" />
              Sustainable Excellence
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
              variants={itemVariants}
            >
              <span className="text-green-400">Sustainable</span> Design
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Create buildings that harmonize with nature while providing exceptional functionality and beauty. Sustainable design for a better future.
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

      {/* Sustainable Features */}
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
              <span className="text-green-500">Sustainable</span> Design Features
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              Our sustainable design approach integrates cutting-edge green technologies with timeless architectural principles.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {sustainableFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-green-50 transition-all duration-300 group"
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

      {/* Green Building Standards */}
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
              Green Building <span className="text-green-500">Standards</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              We adhere to international green building standards to ensure the highest levels of sustainability and environmental responsibility.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {greenStandards.map((standard, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  {standard.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{standard.title}</h3>
                <p className="text-gray-600 mb-6">{standard.description}</p>
                <ul className="space-y-2">
                  {standard.features.map((feature, featureIndex) => (
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

      {/* Benefits */}
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
              Benefits of <span className="text-green-500">Sustainable Design</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              Sustainable design delivers measurable benefits for the environment, your wallet, and your wellbeing.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:bg-green-50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 mb-4">{benefit.description}</p>
                    <div className="text-lg font-bold text-green-600">{benefit.stats}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container-custom text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Build a Sustainable Future
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              Join us in creating buildings that respect the environment while providing exceptional spaces for living and working.
            </p>
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link to="/contact" className="flex items-center">
                Start Your Sustainable Project
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </ModernLayout>
  );
};

export default SustainableDesign; 