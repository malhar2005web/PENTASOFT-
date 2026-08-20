import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#1E3A8A]/95 backdrop-blur-xl border-b border-blue-900 shadow-lg text-white'
          : 'py-4 bg-[#1E40AF] text-white shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Logo */}
          <a href="#home" className="flex items-center space-x-3.5 group">
            <img 
              src="/logo.png" 
              alt="Planex Software Consultancy Logo" 
              className="h-11 sm:h-12 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-200"
            />
            <div className="flex flex-col">
              <span className="font-black text-lg tracking-tight text-white flex items-center gap-1.5">
                Planex <span className="font-semibold text-blue-200">Software Consultancy</span>
              </span>
              <span className="text-[10px] font-mono text-blue-300 tracking-wider font-bold">EST. 1994 // PLANEX SOFTWARE CONSULTANCY</span>
            </div>
          </a>

          {/* Clean 4-Item Navigation with About Us next to Contact */}
          <nav className="hidden md:flex items-center space-x-1 px-3 py-1.5 rounded-full bg-blue-950/50 border border-white/15 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-white bg-[#DC2626] shadow-md'
                    : 'text-blue-100 hover:text-white hover:bg-white/15'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Status & Red Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-[11px] font-mono font-bold text-blue-100 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-white/15">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Since 1994 • 30+ Yrs</span>
            </div>
            
            <a
              href="#contact"
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full text-xs font-bold bg-[#DC2626] text-white hover:bg-[#B91C1C] shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              <span>Schedule Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#DC2626] text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1E3A8A] border-b border-blue-900 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl rounded-b-2xl mx-4 text-white">
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
            className="block text-center px-4 py-2.5 rounded-full text-xs font-bold bg-[#DC2626] text-white hover:bg-[#B91C1C] mt-4"
          >
            Schedule Demo
          </a>
        </div>
      )}
    </header>
  );
}
