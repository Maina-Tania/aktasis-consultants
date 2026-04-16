import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Clipboard, 
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
  Calendar,
  FileText,
  Settings,
  TrendingUp
} from 'lucide-react';
import ModernLayout from '../components/layout/ModernLayout';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const ProjectManagement = () => {
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

  // Project management services
  const managementServices = [
    {
      icon: <Calendar className="text-blue-500" size={24} />,
      title: "Project Planning",
      description: "Comprehensive project planning including timelines, budgets, and resource allocation."
    },
    {
      icon: <FileText className="text-green-500" size={24} />,
      title: "Documentation Management",
      description: "Organized management of all project documents, contracts, and specifications."
    },
    {
      icon: <Settings className="text-orange-500" size={24} />,
      title: "Quality Control",
      description: "Rigorous quality assurance processes to ensure project standards are met."
    },
    {
      icon: <TrendingUp className="text-purple-500" size={24} />,
      title: "Progress Monitoring",
      description: "Real-time tracking of project progress with detailed reporting and updates."
    }
  ];

  // Management phases
  const managementPhases = [
    {
      title: "Pre-Construction",
      description: "Comprehensive planning and preparation phase to ensure project success.",
      icon: <Clipboard className="text-blue-500" size={32} />,
      features: ["Site Analysis", "Budget Planning", "Permit Acquisition", "Team Assembly"]
    },
    {
      title: "Construction Phase",
      description: "Oversight and coordination of all construction activities and contractors.",
      icon: <Building className="text-green-500" size={32} />,
      features: ["Site Supervision", "Quality Control", "Schedule Management", "Safety Compliance"]
    },
    {
      title: "Post-Construction",
      description: "Final inspections, documentation, and handover to ensure project completion.",
      icon: <Check className="text-purple-500" size={32} />,
      features: ["Final Inspections", "Documentation", "Client Handover", "Warranty Management"]
    }
  ];

  // Process steps
  const processSteps = [
    {
      step: "01",
      title: "Project Initiation",
      description: "Define project scope, objectives, and establish the project team and stakeholders."
    },
    {
      step: "02",
      title: "Planning & Design",
      description: "Develop detailed project plans, schedules, and coordinate with design teams."
    },
    {
      step: "03",
      title: "Execution",
      description: "Implement project plans, manage resources, and coordinate all activities."
    },
    {
      step: "04",
      title: "Monitoring & Control",
      description: "Track progress, manage changes, and ensure quality standards are maintained."
    },
    {
      step: "05",
      title: "Project Closure",
      description: "Complete final deliverables, conduct reviews, and close out the project."
    }
  ];

  // Benefits
  const benefits = [
    {
      title: "Timely Delivery",
      description: "Efficient project management ensures projects are completed on schedule.",
      icon: <Clock className="text-blue-500" size={24} />,
      stats: "95% on-time delivery rate"
    },
    {
      title: "Cost Control",
      description: "Careful budget management and cost monitoring throughout the project lifecycle.",
      icon: <BarChart3 className="text-green-500" size={24} />,
      stats: "10% average cost savings"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensure the highest standards are maintained.",
      icon: <Shield className="text-purple-500" size={24} />,
      stats: "100% quality compliance"
    },
    {
      title: "Risk Management",
      description: "Proactive identification and mitigation of project risks and challenges.",
      icon: <Target className="text-orange-500" size={24} />,
      stats: "90% risk mitigation success"
    }
  ];

  return (
    <ModernLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920&h=1080&fit=crop" 
            alt="Construction project management" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/70 to-slate-900/80"></div>
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
              <Clipboard className="w-4 h-4 mr-2" />
              Project Excellence
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
              variants={itemVariants}
            >
              <span className="text-blue-400">Project</span> Management
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Professional project management services that ensure your construction projects are delivered on time, within budget, and to the highest quality standards.
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

      {/* Management Services */}
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
              <span className="text-blue-500">Project Management</span> Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              Comprehensive project management solutions that streamline your construction process and ensure successful project delivery.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {managementServices.map((service, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 group"
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

      {/* Management Phases */}
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
              Project <span className="text-blue-500">Management Phases</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              Our structured approach to project management ensures every phase is carefully planned and executed for optimal results.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {managementPhases.map((phase, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  {phase.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                <p className="text-gray-600 mb-6">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
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
              Our <span className="text-blue-500">Management Process</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              A proven methodology that ensures successful project delivery from conception to completion.
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
              Benefits of <span className="text-blue-500">Professional Management</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              Professional project management delivers measurable improvements to project outcomes and client satisfaction.
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
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 mb-4">{benefit.description}</p>
                    <div className="text-lg font-bold text-blue-600">{benefit.stats}</div>
                  </div>
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
              Manage Your Project Successfully
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Let our experienced project management team ensure your construction project is delivered on time, within budget, and to the highest standards.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact" className="flex items-center">
                Start Your Project Management
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </ModernLayout>
  );
};

export default ProjectManagement; 