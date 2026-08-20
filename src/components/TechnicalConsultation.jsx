import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, Loader2, AlertCircle } from 'lucide-react';

export default function TechnicalConsultation() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    industryDomain: 'Pharmaceuticals & Healthcare IT Solutions',
    workloadRequirements: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      // Direct email dispatch to joshi@pentasoftconsultancy.com via FormSubmit AJAX API
      const response = await fetch('https://formsubmit.co/ajax/joshi@pentasoftconsultancy.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'Client Name': formData.name,
          'Work Email': formData.email,
          'Industry / Solution Focus': formData.industryDomain,
          'Project Scope & Requirements': formData.workloadRequirements,
          '_subject': `New Consultation Request from ${formData.name} [Planex Software]`,
          '_template': 'table',
          '_captcha': 'false'
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback to mailto if external endpoint is blocked
        const mailtoUrl = `mailto:joshi@pentasoftconsultancy.com?subject=${encodeURIComponent(
          `New Consultation Request from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nIndustry: ${formData.industryDomain}\n\nRequirements:\n${formData.workloadRequirements}`
        )}`;
        window.location.href = mailtoUrl;
        setSubmitted(true);
      }
    } catch (err) {
      console.warn('Form submit error, fallback to mailto:', err);
      const mailtoUrl = `mailto:joshi@pentasoftconsultancy.com?subject=${encodeURIComponent(
        `New Consultation Request from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nIndustry: ${formData.industryDomain}\n\nRequirements:\n${formData.workloadRequirements}`
      )}`;
      window.location.href = mailtoUrl;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#F8F9FB] text-[#101010] border-t border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="inline-flex items-center space-x-2 text-xs font-mono text-neutral-800 font-bold uppercase tracking-wider mb-4 px-3.5 py-1.5 rounded-full liquid-glass-pill border border-neutral-200 shadow-sm">
          <span>□ INITIATE INDUSTRY ENGAGEMENT</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tight mb-6">
          Ready to build custom software for your industry?
        </h2>

        <p className="text-neutral-700 text-base sm:text-lg max-w-xl mx-auto mb-10 font-medium">
          Consult directly with our solution architects. We design scalable systems tailored for Pharma, Construction, Mobile & Cloud operations.
        </p>

        {/* Direct Contact Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs font-mono font-bold">
          <a
            href="tel:+919821027060"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full liquid-glass-pill text-neutral-800 hover:bg-white transition-all shadow-sm border border-neutral-200"
          >
            <Phone className="w-4 h-4 text-[#DC2626]" />
            <span>+91 98210 27060</span>
          </a>

          <a
            href="mailto:rekha@pentasoftconsultancy.com"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full liquid-glass-pill text-neutral-800 hover:bg-white transition-all shadow-sm border border-neutral-200"
          >
            <Mail className="w-4 h-4 text-[#DC2626]" />
            <span>rekha@pentasoftconsultancy.com</span>
          </a>

          <a
            href="mailto:joshi@pentasoftconsultancy.com"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full liquid-glass-pill text-neutral-800 hover:bg-white transition-all shadow-sm border border-neutral-200"
          >
            <Mail className="w-4 h-4 text-[#DC2626]" />
            <span>joshi@pentasoftconsultancy.com</span>
          </a>
        </div>

        {/* Contact Form Liquid Glass Card */}
        <div className="liquid-glass-card p-8 sm:p-12 text-left">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#DC2626] text-white mx-auto flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-black">Inquiry Transmitted Successfully</h3>
              <p className="text-neutral-700 text-sm max-w-md mx-auto font-medium leading-relaxed">
                Your specifications have been delivered to <strong>joshi@pentasoftconsultancy.com</strong>. Our solutions team will review your project requirements and respond within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      industryDomain: 'Pharmaceuticals & Healthcare IT Solutions',
                      workloadRequirements: ''
                    });
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-mono font-bold bg-[#DC2626] text-white hover:bg-[#B91C1C] shadow-md transition-transform hover:scale-105"
                >
                  Transmit another inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-blue-200 font-bold mb-2">FULL NAME / ORGANIZATION</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rajesh Sharma (Operations Director)"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/50 text-sm font-medium focus:outline-none focus:border-[#38bdf8] focus:bg-white/15 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-blue-200 font-bold mb-2">WORK EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rajesh@organization.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/50 text-sm font-medium focus:outline-none focus:border-[#38bdf8] focus:bg-white/15 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-blue-200 font-bold mb-2">PRIMARY INDUSTRY / SOLUTION FOCUS</label>
                <select
                  value={formData.industryDomain}
                  onChange={(e) => setFormData({ ...formData, industryDomain: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#0F172A] border border-white/20 text-white text-sm font-medium focus:outline-none focus:border-[#38bdf8] transition-colors"
                >
                  <option value="Pharmaceuticals & Healthcare IT Solutions">Pharmaceuticals & Healthcare IT (GMP / Batch Tracking)</option>
                  <option value="Construction & Infrastructure Operations">Construction & Infrastructure (Field Apps / Material ERP)</option>
                  <option value="Enterprise Web Platforms & SaaS Portals">Enterprise Web Platforms & Customer Portals</option>
                  <option value="Custom Mobile Applications (iOS / Android)">Custom Mobile Applications (iOS / Android / Desktop)</option>
                  <option value="Complete Cloud Operations & DevOps (AWS/Azure)">Complete Cloud Operations & DevOps (AWS / Azure)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-blue-200 font-bold mb-2">PROJECT SCOPE & INDUSTRY WORKFLOW REQUIREMENTS</label>
                <textarea
                  rows={4}
                  required
                  value={formData.workloadRequirements}
                  onChange={(e) => setFormData({ ...formData, workloadRequirements: e.target.value })}
                  placeholder="Describe your current industry challenges, app/website needs, cloud hosting preferences, or specific operational requirements..."
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/50 text-sm font-medium focus:outline-none focus:border-[#38bdf8] focus:bg-white/15 transition-colors"
                ></textarea>
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 text-xs font-mono flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full font-bold text-xs font-mono bg-[#DC2626] text-white hover:bg-[#B91C1C] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>TRANSMITTING SPECIFICATIONS...</span>
                  </>
                ) : (
                  <>
                    <span>TRANSMIT SPECIFICATIONS FOR REVIEW</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
