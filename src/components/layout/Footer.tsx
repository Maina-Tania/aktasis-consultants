
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img src="/logo.png" alt="Site logo" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 mb-6">
              Creating innovative architectural solutions that transform spaces and enhance lives. We specialize in sustainable design for residential, commercial, and institutional projects.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/about" label="About" />
              <FooterLink to="/projects" label="Projects" />
              <FooterLink to="/contact" label="Contact" />
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <FooterLink to="/architectural-design" label="Architectural Design" />
              <FooterLink to="/sustainable-design" label="Sustainable Design" />
              <FooterLink to="/interior-design" label="Interior Design" />
              <FooterLink to="/project-management" label="Project Management" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-blue-400 shrink-0 mt-1" size={18} />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-blue-400 shrink-0" size={18} />
                <span>+254 721 762 086</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-blue-400 shrink-0" size={18} />
                <span>hello@aktasisconsultancy.com</span>
              </li>
              <li className="flex items-center">
                <Globe className="mr-3 text-blue-400 shrink-0" size={18} />
                <span>www.aktasisconsultancy.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 border-opacity-20">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} AKTASIS CONSULTANTS. All rights reserved.
          </p>
                      <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-blue-400">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 text-sm hover:text-blue-400">
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
    <li>
      <Link 
        to={to} 
        className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
      >
        {label}
      </Link>
    </li>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <button 
      className="w-8 h-8 bg-black border border-gray-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-colors duration-300"
    >
      {icon}
    </button>
  );
};

export default Footer;
