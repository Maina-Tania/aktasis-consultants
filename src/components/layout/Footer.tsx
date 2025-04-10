
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-milgen-black text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <span className="text-3xl font-bold text-milgen-yellow">MILGEN</span>
              <span className="text-3xl font-bold ml-1">MINES</span>
            </div>
            <p className="text-milgen-gray mb-6">
              Unearthing prosperity, shaping tomorrow. From Earth's depths to global horizons—Milgen Mines fuels possibilities.
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
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/operations" label="Our Operations" />
              <FooterLink to="/sustainability" label="Sustainability" />
              <FooterLink to="/leadership" label="Leadership" />
              <FooterLink to="/contact" label="Contact Us" />
            </ul>
          </div>

          {/* Operations */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Operations</h3>
            <ul className="space-y-3">
              <FooterLink to="/operations#gemstones" label="Gemstones" />
              <FooterLink to="/operations#coltan" label="Coltan" />
              <FooterLink to="/operations#gold" label="Gold" />
              <FooterLink to="/operations#cinnabar" label="Cinnabar" />
              <FooterLink to="/operations#copper" label="Copper Recycling" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-milgen-yellow shrink-0 mt-1" size={18} />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-milgen-yellow shrink-0" size={18} />
                <span>+254 757 476560</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-milgen-yellow shrink-0" size={18} />
                <span>brinac.co@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Globe className="mr-3 text-milgen-yellow shrink-0" size={18} />
                <span>www.milgenmines.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-milgen-gray border-opacity-20">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-milgen-gray text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Milgen Mines. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-milgen-gray text-sm hover:text-milgen-yellow">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-milgen-gray text-sm hover:text-milgen-yellow">
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
        className="text-milgen-gray hover:text-milgen-yellow transition-colors duration-300"
      >
        {label}
      </Link>
    </li>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <a 
      href="#" 
      className="w-8 h-8 bg-milgen-black border border-milgen-gray rounded-full flex items-center justify-center hover:bg-milgen-yellow hover:border-milgen-yellow hover:text-milgen-black transition-colors duration-300"
    >
      {icon}
    </a>
  );
};

export default Footer;
