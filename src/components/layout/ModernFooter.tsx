import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Linkedin, Instagram, ArrowUpRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ModernFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-milgen-black to-[#0A0A0A] text-white">
      {/* Top wave separator */}
      <div className="w-full overflow-hidden">
        <svg className="w-full h-auto text-background fill-current" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 C240,110 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
      
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-3xl font-bold text-milgen-yellow">MILGEN</span>
              <span className="text-3xl font-bold ml-1">MINES</span>
            </motion.div>
            <motion.p 
              className="text-milgen-gray mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Unearthing prosperity, shaping tomorrow. From Earth's depths to global horizons—Milgen Mines fuels possibilities.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h3 
              className="text-xl font-bold mb-6 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-8 h-[2px] bg-milgen-yellow mr-3"></span>
              Quick Links
            </motion.h3>
            <motion.ul 
              className="space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, staggerChildren: 0.1 }}
            >
              <FooterLink to="/" label="Home" />
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/operations" label="Our Operations" />
              <FooterLink to="/sustainability" label="Sustainability" />
              <FooterLink to="/leadership" label="Leadership" />
              <FooterLink to="/contact" label="Contact Us" />
            </motion.ul>
          </div>

          {/* Operations */}
          <div>
            <motion.h3 
              className="text-xl font-bold mb-6 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-8 h-[2px] bg-milgen-yellow mr-3"></span>
              Our Operations
            </motion.h3>
            <motion.ul 
              className="space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FooterLink to="/operations#gemstones" label="Gemstones" />
              <FooterLink to="/operations#coltan" label="Coltan" />
              <FooterLink to="/operations#gold" label="Gold" />
              <FooterLink to="/operations#cinnabar" label="Cinnabar" />
              <FooterLink to="/operations#copper" label="Copper Recycling" />
            </motion.ul>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h3 
              className="text-xl font-bold mb-6 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-8 h-[2px] bg-milgen-yellow mr-3"></span>
              Contact Us
            </motion.h3>
            <motion.ul 
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.li 
                className="flex items-start group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center mr-3 shrink-0 group-hover:bg-milgen-yellow/20 transition-colors">
                  <MapPin className="text-milgen-yellow" size={18} />
                </div>
                <span>Nairobi, Kenya</span>
              </motion.li>
              
              <motion.li 
                className="flex items-center group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center mr-3 shrink-0 group-hover:bg-milgen-yellow/20 transition-colors">
                  <Phone className="text-milgen-yellow" size={18} />
                </div>
                <span>+254 757 476560</span>
              </motion.li>
              
              <motion.li 
                className="flex items-center group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center mr-3 shrink-0 group-hover:bg-milgen-yellow/20 transition-colors">
                  <Mail className="text-milgen-yellow" size={18} />
                </div>
                <span>brinac.co@gmail.com</span>
              </motion.li>
              
              <motion.li 
                className="flex items-center group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center mr-3 shrink-0 group-hover:bg-milgen-yellow/20 transition-colors">
                  <Globe className="text-milgen-yellow" size={18} />
                </div>
                <span>www.milgenmines.com</span>
              </motion.li>
            </motion.ul>
          </div>
        </div>
        
        {/* Newsletter Subscription - New Feature */}
        <motion.div 
          className="mt-16 p-6 md:p-8 bg-[#111111] rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-milgen-gray max-w-md">Subscribe to our newsletter for the latest news, updates, and insights from Milgen Mines.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-3 rounded-lg bg-[#1A1A1A] border border-milgen-gray/30 focus:outline-none focus:border-milgen-yellow text-white"
              />
              <button className="px-6 py-3 bg-milgen-yellow text-milgen-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors flex items-center justify-center">
                Subscribe
                <ArrowUpRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-milgen-gray/20">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-milgen-gray text-sm mb-4 md:mb-0">
            © {currentYear} Milgen Mines. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-milgen-gray text-sm hover:text-milgen-yellow transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-milgen-gray text-sm hover:text-milgen-yellow transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, label }: { to: string; label: string }) => {
  return (
    <motion.li
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <Link 
        to={to} 
        className="text-milgen-gray hover:text-milgen-yellow transition-colors duration-300 flex items-center"
      >
        <ChevronRight size={14} className="mr-2 text-milgen-yellow" />
        {label}
      </Link>
    </motion.li>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <motion.a 
      href="#" 
      className="w-10 h-10 bg-black/30 border border-milgen-gray/30 rounded-full flex items-center justify-center hover:bg-milgen-yellow hover:border-milgen-yellow hover:text-milgen-black transition-colors duration-300"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {icon}
    </motion.a>
  );
};

export default ModernFooter; 