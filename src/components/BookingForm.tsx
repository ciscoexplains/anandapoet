/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Building2, DollarSign, MapPin, Mail, MessageSquare, Send, CheckCircle2, Sparkles } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    projectType: 'Editorial',
    budget: '$10,000 - $25,000',
    location: 'Paris',
    email: '',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate high-fashion contract submission and verification
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      projectType: 'Editorial',
      budget: '$10,000 - $25,000',
      location: 'Paris',
      email: '',
      message: ''
    });
    setIsSuccess(false);
  };

  return (
    <div
      id="booking-section"
      className="relative w-full bg-[#111111] py-24 px-6 md:px-12 border-b border-[#F8F5EE]/5"
    >
      {/* Backdrops glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 h-80 w-80 rounded-full bg-[#7A0000]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-1 w-1 bg-[#D4AF37]" />
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]">
              CAMPAIGN SCHEDULER
            </span>
            <span className="h-1 w-1 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl tracking-widest text-[#F8F5EE] uppercase">
            RESERVE ANANDAPOET
          </h2>
          <p className="max-w-xl mx-auto text-xs font-serif italic text-[#F8F5EE]/50">
            "Draft your visual Campaign, cinematic/theatre acting contract, casting audition, or artistic photography session brief below."
          </p>
        </div>

        {/* Main Interface Box */}
        <div className="bg-[#050505] border border-[#D4AF37]/25 p-6 sm:p-12 relative overflow-hidden rounded shadow-2xl">
          
          {/* Subtle logo bg mark */}
          <div className="absolute top-4 right-4 pointer-events-none select-none text-[120px] leading-none font-serif opacity-[0.02] text-[#D4AF37] h-20 overflow-hidden font-bold">
            A
          </div>

          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="booking-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  
                  {/* Full Name Input */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 font-mono text-[9.5px] uppercase tracking-widest text-[#D4AF37]">
                      <User className="h-3.5 w-3.5 text-[#D4AF37]/75" /> FULL NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Harrison Sterling"
                      className="w-full bg-[#111111] border border-white/10 focus:border-[#D4AF37] focus:ring-0 text-xs text-[#F8F5EE] placeholder-white/20 px-4 py-3 rounded outline-none transition-colors"
                    />
                  </div>

                  {/* Company Name Input */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 font-mono text-[9.5px] uppercase tracking-widest text-[#D4AF37]">
                      <Building2 className="h-3.5 w-3.5 text-[#D4AF37]/75" /> COMPANY / BRAND
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Saint Laurent Paris"
                      className="w-full bg-[#111111] border border-white/10 focus:border-[#D4AF37] focus:ring-0 text-xs text-[#F8F5EE] placeholder-white/20 px-4 py-3 rounded outline-none transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 font-mono text-[9.5px] uppercase tracking-widest text-[#D4AF37]">
                      <Mail className="h-3.5 w-3.5 text-[#D4AF37]/75" /> BUSINESS EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. director@brand.com"
                      className="w-full bg-[#111111] border border-white/10 focus:border-[#D4AF37] focus:ring-0 text-xs text-[#F8F5EE] placeholder-white/20 px-4 py-3 rounded outline-none transition-colors"
                    />
                  </div>

                  {/* Project Type Select Dropdown */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 font-mono text-[9.5px] uppercase tracking-widest text-[#D4AF37]">
                      <Calendar className="h-3.5 w-3.5 text-[#D4AF37]/75" /> PROJECT TYPE
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#111111] border border-white/10 focus:border-[#D4AF37] text-xs text-[#F8F5EE] px-4 py-3 rounded outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Editorial">Editorial Photoshoot</option>
                      <option value="High Fashion">High Fashion Campaign</option>
                      <option value="Acting Role">Film & Stage Acting Role</option>
                      <option value="Casting Audition">Theatrikal Audition / Casting</option>
                      <option value="Art Concept">Artistic Concept Showcase</option>
                    </select>
                  </div>

                  {/* Budget Selector Dropdown */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 font-mono text-[9.5px] uppercase tracking-widest text-[#D4AF37]">
                      <DollarSign className="h-3.5 w-3.5 text-[#D4AF37]/75" /> ESTIMATED BUDGET BUDGET
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#111111] border border-white/10 focus:border-[#D4AF37] text-xs text-[#F8F5EE] px-4 py-3 rounded outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="$5,000 - $10,000">$5,000 - $10,000 USD</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000 USD</option>
                      <option value="$25,000 - $50,000">$25,000 - $50,000 USD</option>
                      <option value="$50,000+">$50,000+ USD Haute Couture</option>
                    </select>
                  </div>

                  {/* Preferred Location Selection */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 font-mono text-[9.5px] uppercase tracking-widest text-[#D4AF37]">
                      <MapPin className="h-3.5 w-3.5 text-[#D4AF37]/75" /> SESSION LOCATION
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-[#111111] border border-white/10 focus:border-[#D4AF37] text-xs text-[#F8F5EE] px-4 py-3 rounded outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Paris">Paris, France</option>
                      <option value="Milan">Milan, Italy</option>
                      <option value="New York">New York, USA</option>
                      <option value="Tokyo">Tokyo, Japan</option>
                      <option value="International Travels">Other International Travel</option>
                    </select>
                  </div>

                </div>

                {/* Message/Specification Details text area */}
                <div className="space-y-2 text-left">
                  <label className="flex items-center gap-2 font-mono text-[9.5px] uppercase tracking-widest text-[#D4AF37]">
                    <MessageSquare className="h-3.5 w-3.5 text-[#D4AF37]/75" /> CAMPAIGN SPECIFICATIONS
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe details of the film/theatre script role, casting specifications, planned director/photographer, dates, and concept parameters..."
                    className="w-full bg-[#111111] border border-white/10 focus:border-[#D4AF37] focus:ring-0 text-xs text-[#F8F5EE] placeholder-white/20 p-4 rounded outline-none transition-colors resize-none"
                  />
                </div>

                {/* Interactive Submit Trigger bar with spectacular blood red & gold animations */}
                <div className="pt-4 flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full overflow-hidden group border border-[#D4AF37] bg-[#7A0000] hover:bg-[#7A0000]/90 text-sm font-mono tracking-[0.35em] text-white py-4.5 rounded transition-all duration-300 shadow-xl"
                  >
                    {/* Animated side gold slide */}
                    <span className="absolute inset-x-0 bottom-0 h-1 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10" />
                    
                    <span className="relative z-20 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <span className="flex items-center gap-2 uppercase">
                          <span className="animate-spin h-4.5 w-4.5 rounded-full border-2 border-white border-t-transparent" />
                          VERIFYING INTEGRITY...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2 uppercase font-bold">
                          <Send className="h-4 w-4" /> SUBMIT CAMPAIGN CONTRACT
                        </span>
                      )}
                    </span>
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 space-y-6 text-center select-none"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#7A0000]/25 border border-[#D4AF37] mx-auto animate-bounce text-[#D4AF37]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#D4AF37] block">
                    TRANSMISSION SECURED
                  </span>
                  <h3 className="font-serif text-3xl font-extrabold text-[#F8F5EE] uppercase tracking-widest">
                    BRIEF UNDER COUTURE REVIEW
                  </h3>
                  <p className="max-w-md mx-auto text-xs text-[#F8F5EE]/65 leading-relaxed font-light font-serif italic">
                    "Thank you, Harrison Sterling. The creative agency of ANANDAPOET has accepted your commercial request. We will contact you at your business catalog email within 24 hours to coordinate scheduling."
                  </p>
                </div>

                <div className="h-[1px] max-w-sm bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mx-auto" />

                {/* Styled Invoice Reference */}
                <div className="inline-block bg-[#111111]/70 border border-white/5 p-4 text-[9px] font-mono text-left space-y-2 rounded-sm select-auto">
                  <div className="flex justify-between gap-12">
                    <span className="text-white/30">CLIENT BRIEF CODE:</span>
                    <span className="text-white font-bold">#AP-COMM-{(Math.random()*10000).toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/30">DATE FILED:</span>
                    <span className="text-white">{new Date().toISOString().split('T')[0]} UTC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/30">BOOKING LOCATION:</span>
                    <span className="text-white">{formData.location} STATION</span>
                  </div>
                </div>

                <div>
                  <button
                    onClick={handleReset}
                    className="border border-[#D4AF37]/35 hover:border-[#D4AF37] bg-transparent hover:bg-[#111111] text-xs font-mono tracking-widest text-[#D4AF37] px-6 py-2 rounded transition-colors"
                  >
                    DRAFT NEW INQUIRY
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </div>
  );
}
