import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Home, 
  Globe, 
  Users, 
  Award, 
  Download, 
  BarChart3, 
  Check,
  ArrowRight,
  Building,
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
  Sofa,
  Lamp,
  Paintbrush,
  Sparkles,
  Leaf
} from 'lucide-react';
import ModernLayout from '../components/layout/ModernLayout';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const InteriorDesign = () => {
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

  // Interior design services
  const designServices = [
    {
      icon: <Palette className="text-purple-500" size={24} />,
      title: "Color Consultation",
      description: "Expert color palettes that create the perfect mood and atmosphere for your space."
    },
    {
      icon: <Sofa className="text-orange-500" size={24} />,
      title: "Furniture Selection",
      description: "Curated furniture pieces that combine style, comfort, and functionality."
    },
    {
      icon: <Lamp className="text-yellow-500" size={24} />,
      title: "Lighting Design",
      description: "Strategic lighting solutions that enhance ambiance and functionality."
    },
    {
      icon: <Paintbrush className="text-blue-500" size={24} />,
      title: "Space Planning",
      description: "Optimal layout design that maximizes space efficiency and flow."
    }
  ];

  // Design styles
  const designStyles = [
    {
      title: "Modern Minimalist",
      description: "Clean lines, neutral colors, and uncluttered spaces for contemporary living.",
      icon: <Sparkles className="text-gray-500" size={32} />,
      features: ["Clean Lines", "Neutral Palette", "Open Spaces", "Natural Materials"]
    },
    {
      title: "Contemporary Elegance",
      description: "Sophisticated designs that blend modern aesthetics with timeless elegance.",
      icon: <Star className="text-gold-500" size={32} />,
      features: ["Luxury Materials", "Artistic Elements", "Comfortable Sophistication", "Personal Touch"]
    },
    {
      title: "Sustainable Living",
      description: "Eco-friendly interior design that promotes health and environmental responsibility.",
      icon: <Leaf className="text-green-500" size={32} />,
      features: ["Eco Materials", "Natural Elements", "Energy Efficiency", "Healthy Living"]
    }
  ];

  // Process steps
  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We discuss your vision, lifestyle, and requirements to understand your design goals."
    },
    {
      step: "02",
      title: "Concept Development",
      description: "Create design concepts and mood boards that reflect your style and preferences."
    },
    {
      step: "03",
      title: "Space Planning",
      description: "Develop detailed floor plans and furniture layouts for optimal functionality."
    },
    {
      step: "04",
      title: "Material Selection",
      description: "Choose finishes, fabrics, and materials that align with your design vision."
    },
    {
      step: "05",
      title: "Implementation",
      description: "Coordinate installation and styling to bring your design to life."
    }
  ];

  // Benefits
  const benefits = [
    {
      title: "Enhanced Functionality",
      description: "Optimize your space for better flow, storage, and daily activities.",
      icon: <Target className="text-blue-500" size={24} />,
      stats: "40% more efficient space usage"
    },
    {
      title: "Improved Aesthetics",
      description: "Create beautiful, cohesive spaces that reflect your personal style.",
      icon: <Palette className="text-purple-500" size={24} />,
      stats: "100% personalized design"
    },
    {
      title: "Increased Value",
      description: "Well-designed interiors can significantly increase property value.",
      icon: <Award className="text-green-500" size={24} />,
      stats: "25% higher property value"
    },
    {
      title: "Better Wellbeing",
      description: "Thoughtfully designed spaces promote comfort, productivity, and happiness.",
      icon: <Users className="text-orange-500" size={24} />,
      stats: "30% improvement in mood"
    }
  ];

  return (
    <ModernLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1920&h=1080&fit=crop" 
            alt="Luxury interior design" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-pink-900/70 to-purple-900/80"></div>
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
              className="inline-flex items-center px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-6"
              variants={itemVariants}
            >
              <Palette className="w-4 h-4 mr-2" />
              Interior Excellence
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
              variants={itemVariants}
            >
              <span className="text-purple-400">Interior</span> Design
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Transform your living spaces into beautiful, functional environments that inspire and delight. Where style meets comfort.
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

      {/* Design Services */}
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
              <span className="text-purple-500">Interior Design</span> Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              Comprehensive interior design services that transform your vision into stunning, functional spaces.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {designServices.map((service, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-purple-50 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Design Styles */}
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
              Design <span className="text-purple-500">Styles</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              From modern minimalism to contemporary elegance, we create spaces that reflect your unique style and personality.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {designStyles.map((style, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-6">
                  {style.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{style.title}</h3>
                <p className="text-gray-600 mb-6">{style.description}</p>
                <ul className="space-y-2">
                  {style.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
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
              Our <span className="text-purple-500">Design Process</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              A collaborative approach to interior design that ensures every detail reflects your vision and lifestyle.
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
                  <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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

      {/* Benefits */}
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
              Benefits of <span className="text-purple-500">Interior Design</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              Professional interior design delivers measurable improvements to your space and quality of life.
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
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 mb-4">{benefit.description}</p>
                    <div className="text-lg font-bold text-purple-600">{benefit.stats}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-500 to-purple-600 text-white">
        <div className="container-custom text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Space
            </h2>
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Let's create an interior that reflects your style, enhances your lifestyle, and brings joy to your daily life.
            </p>
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link to="/contact" className="flex items-center">
                Start Your Interior Design Project
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </ModernLayout>
  );
};

export default InteriorDesign; 