import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const ModernHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Check if current page has light background
  const hasLightBackground = useMemo(() => {
    const lightBackgroundPages = [
      '/about',
      '/projects',
      '/contact',
      '/privacy-policy',
      '/terms',
      '/architectural-design',
      '/sustainable-design',
      '/interior-design',
      '/project-management'
    ];
    return lightBackgroundPages.includes(location.pathname);
  }, [location.pathname]);

  // Navigation items with dropdown support
  const navigationItems = useMemo(() => [
    { name: 'Home', href: '/', hasDropdown: false },
    { name: 'About', href: '/about', hasDropdown: false },
    { 
      name: 'Services',
      href: '/projects',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Architectural Design', href: '/architectural-design' },
        { name: 'Sustainable Design', href: '/sustainable-design' },
        { name: 'Interior Design', href: '/interior-design' },
        { name: 'Project Management', href: '/project-management' }
      ]
    },
    { name: 'Projects', href: '/projects', hasDropdown: false }
  ], []);

  // Handle scroll effect
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 20;
    setIsScrolled(scrolled);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const headerClasses = useMemo(() => {
    return `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || hasLightBackground
        ? 'bg-black/95 backdrop-blur-xl py-3 shadow-2xl border-b border-white/10' 
        : 'bg-transparent py-5'
    }`;
  }, [isScrolled, hasLightBackground]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className={headerClasses} role="banner">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Site Logo */}
          <Link 
            to="/" 
            className="flex items-center group"
            aria-label="Home"
          >
            <motion.img
              src="/logo.png"
              alt="Site logo"
              className="h-10 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-blue-500 bg-blue-500/10'
                      : hasLightBackground 
                        ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="inline ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
                
                {/* Desktop Dropdown */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Phone className="mr-2" size={16} />
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              hasLightBackground 
                ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle mobile menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden mt-4 bg-black/95 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden"
            >
              <div className="py-4 px-4 space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        isActive(item.href)
                          ? 'text-blue-500 bg-blue-500/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                      onClick={() => {
                        if (!item.hasDropdown) {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        {item.hasDropdown && (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveDropdown(activeDropdown === item.name ? null : item.name);
                            }}
                            className="p-1"
                            aria-label={`Toggle ${item.name} submenu`}
                            title={`Toggle ${item.name} submenu`}
                          >
                            <ChevronDown 
                              className={`w-4 h-4 transition-transform duration-200 ${
                                activeDropdown === item.name ? 'rotate-180' : ''
                              }`} 
                            />
                          </button>
                        )}
                      </div>
                    </Link>
                    
                    {/* Mobile Dropdown */}
                    {item.hasDropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 mt-2 space-y-1"
                      >
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 border-t border-white/10">
                  <Link
                    to="/contact"
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Phone className="mr-2" size={16} />
                    Join Platform
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default ModernHeader; 