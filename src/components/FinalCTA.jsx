import React, { useState } from 'react';
import { ArrowRight, Mail, Send, CheckCircle2, MessageSquare, ShieldCheck, Loader2 } from 'lucide-react';

export default function FinalCTA() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('https://formsubmit.co/ajax/joshi@pentasoftconsultancy.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'Client Name': formData.name,
          'Work Email': formData.email,
          'Project Specs': formData.message,
          '_subject': `New Technical Inquiry from ${formData.name} [Planex Software]`,
          '_template': 'table',
          '_captcha': 'false'
        })
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        const mailtoUrl = `mailto:joshi@pentasoftconsultancy.com?subject=${encodeURIComponent(
          `New Technical Inquiry from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nProject Specs:\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
        setFormSubmitted(true);
      }
    } catch (err) {
      console.warn('Form submit error, fallback to mailto:', err);
      const mailtoUrl = `mailto:joshi@pentasoftconsultancy.com?subject=${encodeURIComponent(
        `New Technical Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nProject Specs:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 relative bg-[#07090E] border-t border-white/10 overflow-hidden">
      {/* Background Gradient Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#00E5FF]/15 via-purple-600/10 to-blue-600/15 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Call to Action Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-pill border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF]">
              <MessageSquare className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>Section 08 — Final Call To Action</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Let's build <br />
              <span className="text-gradient-cyan">what's next</span> together.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Whether you need to architect a new software suite, migrate legacy systems, or implement production-grade cloud architectures, our engineering team is ready.
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-center space-x-3 text-xs font-mono text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" />
                <span>Direct consultation with senior software architects</span>
              </div>
              <div className="flex items-center space-x-3 text-xs font-mono text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" />
                <span>NDA & zero-trust security commitment</span>
              </div>
              <div className="flex items-center space-x-3 text-xs font-mono text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" />
                <span>Comprehensive technical feasibility proposal within 48h</span>
              </div>
            </div>
          </div>

          {/* Right Contact Form Card */}
          <div className="lg:col-span-6 glass-panel p-8 sm:p-10 rounded-3xl border border-[#00E5FF]/30 shadow-2xl relative">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#00E5FF]/20 border border-[#00E5FF] mx-auto flex items-center justify-center text-[#00E5FF]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out to Planex Software. Your inquiry has been sent to <strong>joshi@pentasoftconsultancy.com</strong>. Our engineering team will review your project specs and respond within 24 hours.
                </p>
                <button
                  onClick={() => { setFormSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                  className="px-4 py-2 rounded-lg text-xs font-mono bg-white/10 text-white hover:bg-white/20"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="text-xl font-bold text-white mb-2">Initiate Technical Consultation</div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">FULL NAME / COMPANY</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rajesh Sharma (Operations Director)"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white text-sm focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">WORK EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rajesh@organization.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white text-sm focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">PROJECT OVERVIEW / SYSTEM REQUIREMENTS</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your software infrastructure, technical challenges, or desired timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white text-sm focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-[#00E5FF] via-blue-500 to-blue-600 text-black hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Technical Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
