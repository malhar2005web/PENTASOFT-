import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050811] text-slate-400 py-16 text-xs font-mono border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3.5">
              <img 
                src="/logo.png" 
                alt="PentaSoft PCS Logo" 
                className="h-11 w-auto object-contain drop-shadow-md"
              />
              <span className="font-extrabold text-white text-base tracking-tight">
                PentaSoft <span className="text-slate-400 font-normal">Consultancy</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs font-sans max-w-sm leading-relaxed">
              End-to-end custom software development, mobile & web applications, and cloud-based operations for Construction, Pharma, Healthcare, and Global Enterprise industries.
            </p>
          </div>

          {/* Direct Contact Details */}
          <div className="space-y-3">
            <div className="text-white font-bold text-xs uppercase tracking-wider mb-2">
              Direct Contact & Inquiries
            </div>
            
            <a 
              href="tel:+919821027060" 
              className="flex items-center space-x-2.5 text-slate-300 hover:text-[#D4F82C] transition-colors py-0.5"
            >
              <Phone className="w-4 h-4 text-[#D4F82C] shrink-0" />
              <span>+91 98210 27060</span>
            </a>

            <div className="space-y-1.5 pt-1">
              <a 
                href="mailto:rekha@pentasoftconsultancy.com" 
                className="flex items-center space-x-2.5 text-slate-300 hover:text-[#D4F82C] transition-colors py-0.5"
              >
                <Mail className="w-4 h-4 text-[#D4F82C] shrink-0" />
                <span>rekha@pentasoftconsultancy.com</span>
              </a>

              <a 
                href="mailto:joshi@pentasoftconsultancy.com" 
                className="flex items-center space-x-2.5 text-slate-300 hover:text-[#D4F82C] transition-colors py-0.5"
              >
                <Mail className="w-4 h-4 text-[#D4F82C] shrink-0" />
                <span>joshi@pentasoftconsultancy.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 md:text-right">
            <div className="text-white font-bold text-xs uppercase tracking-wider mb-2">
              Navigation
            </div>
            <div className="flex flex-col space-y-2 text-xs font-semibold">
              <a href="#what-we-do" className="hover:text-white transition-colors">Solutions & Capabilities</a>
              <a href="#who-we-serve" className="hover:text-white transition-colors">Industries Served</a>
              <a href="#contact" className="hover:text-white transition-colors">Schedule Consultation</a>
            </div>
          </div>

        </div>

        {/* Bottom SLA and Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} PentaSoft Consultancy Services (PCS). All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Cloud Operations Active • 99.999% SLA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
