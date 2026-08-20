import React from 'react';
import { Phone, Mail, MapPin, Building } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#DC2626] via-[#C51A1A] to-[#A81515] text-white py-16 text-xs font-mono border-t border-red-400/40 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/20">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3.5">
              <img 
                src="/logo.png" 
                alt="Planex Software Logo" 
                className="h-11 w-auto object-contain drop-shadow-md bg-white p-1 rounded-lg"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-base tracking-tight">
                  Planex <span className="text-white/80 font-normal">Software</span>
                </span>
                <span className="text-[10px] text-white/90 font-mono font-bold">PLANEX SOFTWARE • ESTD. 1994</span>
              </div>
            </div>
            <p className="text-white/90 text-xs font-sans max-w-sm leading-relaxed">
              Leading provider of Ready Mix Concrete (RMC), Crusher Management, ERP, TeamPulse workforce tracking, E-Invoicing, and customized business software solutions across India since 1994.
            </p>
            <div className="text-[11px] text-white/90 font-mono">
              <span>GSTIN: </span><span className="text-white font-black">27AABPJ2329N1ZM</span>
            </div>
          </div>

          {/* Direct Contact & Address */}
          <div className="space-y-3">
            <div className="text-white font-black text-xs uppercase tracking-wider mb-2">
              Registered Office & Contacts
            </div>
            
            <div className="flex items-start space-x-2.5 text-white/90 py-0.5 font-sans text-xs leading-relaxed">
              <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span>501-502, Bldg No. 6, Sector-3, Shanti Garden, Near New MHADA Buildings, Srishti, Mira Road - 401107, Mumbai, India</span>
            </div>

            <div className="space-y-1.5 pt-2">
              <a 
                href="tel:+919821027060" 
                className="flex items-center space-x-2.5 text-white/90 hover:text-white transition-colors py-0.5"
              >
                <Phone className="w-4 h-4 text-white shrink-0" />
                <span>+91 98210 27060 / +91 96645 40011</span>
              </a>

              <a 
                href="mailto:joshi@pentasoftconsultancy.com" 
                className="flex items-center space-x-2.5 text-white/90 hover:text-white transition-colors py-0.5"
              >
                <Mail className="w-4 h-4 text-white shrink-0" />
                <span>joshi@pentasoftconsultancy.com</span>
              </a>

              <a 
                href="mailto:rekha@pentasoftconsultancy.com" 
                className="flex items-center space-x-2.5 text-white/90 hover:text-white transition-colors py-0.5"
              >
                <Mail className="w-4 h-4 text-white shrink-0" />
                <span>rekha@pentasoftconsultancy.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 md:text-right">
            <div className="text-white font-black text-xs uppercase tracking-wider mb-2">
              Product Navigation
            </div>
            <div className="flex flex-col space-y-2 text-xs font-semibold">
              <a href="#what-we-do" className="text-white/90 hover:text-white transition-colors">Penta Product Suite</a>
              <a href="#who-we-serve" className="text-white/90 hover:text-white transition-colors">Industries We Serve</a>
              <a href="#about-us" className="text-white/90 hover:text-white transition-colors">Our Vision & Heritage</a>
              <a href="#contact" className="text-white/90 hover:text-white transition-colors">Schedule Product Demo</a>
            </div>
          </div>

        </div>

        {/* Bottom SLA and Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/80">
          <div>
            © {new Date().getFullYear()} Planex Software. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-white font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse shadow-[0_0_8px_#6EE7B7]"></span>
            <span>Serving Clients Pan-India Since 1994</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
