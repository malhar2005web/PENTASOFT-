import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('what-we-do');
  const [hoveredNav, setHoveredNav] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'what-we-do', 'who-we-serve', 'about-us', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 250 && rect.bottom >= 250;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'What We Do', href: '#what-we-do', id: 'what-we-do' },
    { name: 'Who We Serve', href: '#who-we-serve', id: 'who-we-serve' },
    { name: 'About Us', href: '#about-us', id: 'about-us' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const currentSelection = hoveredNav || activeSection;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        scrolled
          ? 'py-2.5 frosted-glass-navbar-blue shadow-lg'
          : 'py-3.5 frosted-glass-navbar-blue'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Logo */}
          <a href="#home" className="flex items-center space-x-3.5 group">
            <img 
              src="/logo.png" 
              alt="Planex Software Logo" 
              className="h-11 sm:h-12 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-200"
            />
            <div className="flex flex-col">
              <span className="font-black text-lg tracking-tight text-white flex items-center gap-1.5">
                Planex <span className="font-semibold text-blue-200">Software</span>
              </span>
              <span className="text-[10px] font-mono text-blue-300 tracking-wider font-bold">EST. 1994 // PLANEX SOFTWARE</span>
            </div>
          </a>

          {/* Interactive Sliding Liquid Glass Bubble Nav Container */}
          <nav 
            className="hidden md:flex items-center space-x-1 px-3 py-1.5 rounded-full bg-blue-950/60 border border-white/20 backdrop-blur-xl relative shadow-inner"
            onMouseLeave={() => setHoveredNav(null)}
          >
            {navLinks.map((link) => {
              const isSelected = currentSelection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onMouseEnter={() => setHoveredNav(link.id)}
                  onClick={() => {
                    setActiveSection(link.id);
                    setHoveredNav(null);
                  }}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-bold transition-colors duration-200 z-10 ${
                    isSelected
                      ? 'text-white drop-shadow-sm'
                      : 'text-blue-100 hover:text-white'
                  }`}
                >
                  {/* 3D Claymorphic Red Liquid Bubble Indicator */}
                  {isSelected && (
                    <motion.div
                      layoutId="navbar-liquid-bubble"
                      className="absolute inset-0 rounded-full z-[-1]"
                      style={{
                        background: 'linear-gradient(180deg, #FF4B4B 0%, #DC2626 55%, #B91C1C 100%)',
                        boxShadow: '0 4px 0 #7F1D1D, 0 8px 16px -2px rgba(0, 0, 0, 0.45), inset 0 2px 3px rgba(255, 255, 255, 0.6), inset 0 -2px 3px rgba(0, 0, 0, 0.4)',
                        border: '1px solid rgba(255, 255, 255, 0.4)'
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 420,
                        damping: 30
                      }}
                    />
                  )}
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Status & 3D Claymorphic Red Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-[11px] font-mono font-bold text-blue-100 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-white/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Since 1994 • 30+ Yrs</span>
            </div>
            
            <a
              href="#contact"
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full text-xs font-bold clay-btn-red cursor-pointer"
            >
              <span>Schedule Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl clay-btn-red"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1E3A8A]/95 backdrop-blur-2xl border-b border-blue-900 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl rounded-b-2xl mx-4 text-white">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-semibold text-blue-100 hover:text-white hover:bg-blue-800"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center px-4 py-2.5 rounded-full text-xs font-bold clay-btn-red mt-4"
          >
            Schedule Demo
          </a>
        </div>
      )}
    </header>
  );
}
