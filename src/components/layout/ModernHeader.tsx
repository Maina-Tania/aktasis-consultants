import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ModernHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-milgen-black/90 backdrop-blur-lg py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-milgen-yellow relative"
          >
            MILGEN
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-milgen-yellow transition-all duration-300 group-hover:w-full"></span>
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl font-bold text-white ml-1"
          >
            MINES
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <NavLink to="/" label="Home" isActive={location.pathname === '/'} />
          <NavLink to="/about" label="About Us" isActive={location.pathname === '/about'} />
          <NavLink to="/operations" label="Operations" isActive={location.pathname === '/operations'} />
          <NavLink to="/sustainability" label="Sustainability" isActive={location.pathname === '/sustainability'} />
          <NavLink to="/leadership" label="Leadership" isActive={location.pathname === '/leadership'} />
          <NavLink to="/contact" label="Contact" isActive={location.pathname === '/contact'} />
          <NavLink to="/apple-design" label="Design" isActive={location.pathname === '/apple-design'} />
        </nav>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden text-white focus:outline-none w-10 h-10 flex items-center justify-center rounded-full bg-milgen-black/50 backdrop-blur-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-gradient-to-b from-milgen-black/95 to-milgen-black/90 backdrop-blur-lg absolute top-full left-0 right-0 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col p-4 space-y-2">
              <MobileNavLink to="/" label="Home" isActive={location.pathname === '/'} />
              <MobileNavLink to="/about" label="About Us" isActive={location.pathname === '/about'} />
              <MobileNavLink to="/operations" label="Operations" isActive={location.pathname === '/operations'} />
              <MobileNavLink to="/sustainability" label="Sustainability" isActive={location.pathname === '/sustainability'} />
              <MobileNavLink to="/leadership" label="Leadership" isActive={location.pathname === '/leadership'} />
              <MobileNavLink to="/contact" label="Contact" isActive={location.pathname === '/contact'} />
              <MobileNavLink to="/apple-design" label="Design" isActive={location.pathname === '/apple-design'} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavLink = ({ to, label, isActive }: { to: string; label: string; isActive: boolean }) => {
  return (
    <Link 
      to={to} 
      className={`relative px-3 py-2 rounded-full transition-all duration-300 ${
        isActive 
          ? 'text-milgen-yellow' 
          : 'text-white hover:text-milgen-yellow'
      }`}
    >
      <span className="relative z-10 font-medium">{label}</span>
      {isActive && (
        <motion.span 
          layoutId="navbar-indicator"
          className="absolute inset-0 bg-milgen-black/40 rounded-full -z-10"
          transition={{ type: "spring", duration: 0.5 }}
        />
      )}
    </Link>
  );
};

const MobileNavLink = ({ to, label, isActive }: { to: string; label: string; isActive: boolean }) => {
  return (
    <Link 
      to={to} 
      className={`relative px-4 py-3 rounded-xl flex items-center transition-all duration-300 ${
        isActive 
          ? 'bg-milgen-black/30 text-milgen-yellow' 
          : 'text-white hover:bg-milgen-black/20'
      }`}
    >
      <span className="font-medium">{label}</span>
      {isActive ? (
        <span className="ml-auto">
          <ChevronDown size={16} />
        </span>
      ) : null}
    </Link>
  );
};

export default ModernHeader; 