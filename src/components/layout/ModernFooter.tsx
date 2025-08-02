import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowUp,
  Clock,
  MessageCircle,
  Building2
} from 'lucide-react';

const ModernFooter = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: 'Architectural Design', href: '/sustainability#design' },
      { name: 'Sustainable Design', href: '/sustainability#sustainable' },
      { name: 'Interior Design', href: '/sustainability#interior' },
      { name: 'Project Management', href: '/sustainability#management' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Projects', href: '/operations' },
      { name: 'Portfolio', href: '/portfolio' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/aktasisconsultancy' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/aktasisconsultancy' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/aktasisconsultancy' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/aktasisconsultancy' }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center mb-4">
              <motion.div 
                className="relative flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {/* Logo Icon */}
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                    <Building2 className="text-white w-5 h-5" />
                  </div>
                  {/* Animated accent */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                
                {/* Logo Text */}
                <div className="ml-3">
                  <div className="flex items-baseline">
                    <span className="text-lg font-bold text-white">
                      AKTASIS
                    </span>
                    <motion.span 
                      className="text-xs text-blue-400 ml-1 font-medium"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ®
                    </motion.span>
                  </div>
                  <span className="block text-xs text-gray-400 font-medium tracking-wider">
                    CONSULTANCY
                  </span>
                </div>
              </motion.div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming visions into exceptional built environments through innovative architectural design and sustainable practices.
            </p>
            
            {/* Contact Info - Mobile Optimized */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-400">
                <MapPin className="mr-3 flex-shrink-0" size={16} />
                <span>123 Architecture Ave, Suite 100</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Phone className="mr-3 flex-shrink-0" size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Mail className="mr-3 flex-shrink-0" size={16} />
                <span>hello@aktasisconsultancy.com</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Clock className="mr-3 flex-shrink-0" size={16} />
                <span>Mon-Fri: 9AM-6PM</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Contact - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Get Started</h3>
            <div className="space-y-3">
              <Link
                to="/contact"
                className="flex items-center w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 touch-manipulation"
              >
                <MessageCircle className="mr-2" size={16} />
                Start Your Project
              </Link>
              <Link
                to="tel:+15551234567"
                className="flex items-center w-full bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 touch-manipulation"
              >
                <Phone className="mr-2" size={16} />
                Call Now
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm text-gray-400 text-center sm:text-left"
            >
              © {currentYear} Aktasis Consultancy. All rights reserved.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg touch-manipulation"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Legal Links - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-gray-400"
          >
            {footerLinks.legal.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="hover:text-white transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button - Mobile Optimized */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 touch-manipulation z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default ModernFooter; 