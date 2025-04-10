
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-milgen-black py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-milgen-yellow">MILGEN</span>
          <span className="text-2xl font-bold text-white ml-1">MINES</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" label="Home" />
          <NavLink to="/about" label="About Us" />
          <NavLink to="/operations" label="Operations" />
          <NavLink to="/sustainability" label="Sustainability" />
          <NavLink to="/leadership" label="Leadership" />
          <NavLink to="/contact" label="Contact" />
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-milgen-black py-4 px-4 absolute top-full left-0 right-0">
          <div className="flex flex-col space-y-4">
            <MobileNavLink to="/" label="Home" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/about" label="About Us" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/operations" label="Operations" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/sustainability" label="Sustainability" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/leadership" label="Leadership" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/contact" label="Contact" onClick={() => setMobileMenuOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, label }: { to: string; label: string }) => {
  return (
    <Link 
      to={to} 
      className="text-white hover:text-milgen-yellow transition-colors duration-300 font-medium"
    >
      {label}
    </Link>
  );
};

const MobileNavLink = ({ to, label, onClick }: { to: string; label: string; onClick: () => void }) => {
  return (
    <Link 
      to={to} 
      className="text-white hover:text-milgen-yellow transition-colors duration-300 block py-2 font-medium"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Header;
