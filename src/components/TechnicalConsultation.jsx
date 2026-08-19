import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail } from 'lucide-react';

export default function TechnicalConsultation() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    industryDomain: 'Pharmaceuticals & Healthcare IT Solutions',
    workloadRequirements: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#D4F82C] text-[#101010] border-t border-black/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center space-x-2 text-xs font-mono text-neutral-800 font-bold uppercase tracking-wider mb-4 px-3.5 py-1.5 rounded-full liquid-glass-pill">
          <span>□ INITIATE INDUSTRY ENGAGEMENT</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tight mb-6">
          Ready to build custom software for your industry?
        </h2>

        <p className="text-neutral-800 text-base sm:text-lg max-w-xl mx-auto mb-10 font-medium">
          Consult directly with our solution architects. We design scalable systems tailored for Pharma, Construction, Mobile & Cloud operations.
        </p>

        {/* Direct Contact Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs font-mono font-bold">
          <a
            href="tel:+919821027060"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full liquid-glass-pill text-black hover:bg-white/80 transition-all shadow-sm"
          >
            <Phone className="w-4 h-4 text-black" />
            <span>+91 98210 27060</span>
          </a>

          <a
            href="mailto:rekha@pentasoftconsultancy.com"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full liquid-glass-pill text-black hover:bg-white/80 transition-all shadow-sm"
          >
            <Mail className="w-4 h-4 text-black" />
            <span>rekha@pentasoftconsultancy.com</span>
          </a>

          <a
            href="mailto:joshi@pentasoftconsultancy.com"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full liquid-glass-pill text-black hover:bg-white/80 transition-all shadow-sm"
          >
            <Mail className="w-4 h-4 text-black" />
            <span>joshi@pentasoftconsultancy.com</span>
          </a>
        </div>

        {/* Contact Form Liquid Glass Card */}
        <div className="liquid-glass-card p-8 sm:p-12 text-left">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-black text-[#D4F82C] mx-auto flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-black">Consultation Request Dispatched</h3>
              <p className="text-neutral-800 text-sm max-w-md mx-auto font-medium">
                Thank you. Our enterprise solutions team will review your industry requirements and reach out via email or phone within 24 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', industryDomain: 'Pharmaceuticals & Healthcare IT Solutions', workloadRequirements: '' }); }}
                className="px-6 py-2.5 rounded-full text-xs font-mono font-bold bg-black text-[#D4F82C] hover:bg-neutral-900 shadow-md"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-neutral-800 font-bold mb-2">FULL NAME / ORGANIZATION</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rajesh Sharma (Operations Director)"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/60 border border-black/15 text-black text-sm font-medium focus:outline-none focus:border-black focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-800 font-bold mb-2">WORK EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rajesh@organization.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/60 border border-black/15 text-black text-sm font-medium focus:outline-none focus:border-black focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-800 font-bold mb-2">PRIMARY INDUSTRY / SOLUTION FOCUS</label>
                <select
                  value={formData.industryDomain}
                  onChange={(e) => setFormData({ ...formData, industryDomain: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/60 border border-black/15 text-black text-sm font-medium focus:outline-none focus:border-black focus:bg-white transition-colors"
                >
                  <option value="Pharmaceuticals & Healthcare IT Solutions">Pharmaceuticals & Healthcare IT (GMP / Batch Tracking)</option>
                  <option value="Construction & Infrastructure Operations">Construction & Infrastructure (Field Apps / Material ERP)</option>
                  <option value="Enterprise Web Platforms & SaaS Portals">Enterprise Web Platforms & Customer Portals</option>
                  <option value="Custom Mobile Applications (iOS / Android)">Custom Mobile Applications (iOS / Android / Desktop)</option>
                  <option value="Complete Cloud Operations & DevOps (AWS/Azure)">Complete Cloud Operations & DevOps (AWS / Azure)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-800 font-bold mb-2">PROJECT SCOPE & INDUSTRY WORKFLOW REQUIREMENTS</label>
                <textarea
                  rows={4}
                  required
                  value={formData.workloadRequirements}
                  onChange={(e) => setFormData({ ...formData, workloadRequirements: e.target.value })}
                  placeholder="Describe your current industry challenges, app/website needs, cloud hosting preferences, or specific operational requirements..."
                  className="w-full px-4 py-3.5 rounded-xl bg-white/60 border border-black/15 text-black text-sm font-medium focus:outline-none focus:border-black focus:bg-white transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full font-bold text-xs font-mono bg-black text-[#D4F82C] hover:bg-neutral-900 shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>TRANSMIT SPECIFICATIONS FOR REVIEW</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
