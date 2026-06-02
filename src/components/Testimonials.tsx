/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote, ChevronLeft, ChevronRight, MessageSquare, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % TESTIMONIALS.length);
    }, 8500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % TESTIMONIALS.length);
  };

  const activeTestimonial = TESTIMONIALS[activeIndex];

  return (
    <div
      id="testimonials-section"
      className="relative w-full bg-[#050505] py-24 px-6 md:px-12 border-b border-[#F8F5EE]/5 overflow-hidden"
    >
      {/* Background brand glow overlays */}
      <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-[#7A0000]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 select-none">
          <div className="inline-flex items-center gap-2">
            <span className="h-1 w-1 bg-[#D4AF37]" />
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]">
              COUTURE VERDICTS
            </span>
            <span className="h-1 w-1 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl tracking-widest text-[#F8F5EE] uppercase">
            ENDORSEMENTS
          </h2>
          <div className="h-[1px] w-16 bg-[#7A0000] mx-auto" />
        </div>

        {/* Testimonials Slider Frame */}
        <div className="relative bg-[#111111] border border-[#D4AF37]/20 p-8 sm:p-14 rounded shadow-2xl select-none">
          
          {/* Glowing quote vectors decoration */}
          <div className="absolute top-6 left-6 text-white/5 font-serif text-9xl h-10 select-none pointer-events-none font-bold">
            “
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="space-y-8 text-center"
            >
              {/* Stars layout detailing */}
              <div className="flex justify-center items-center gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-4.5 w-4.5 text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>

              {/* Huge quote statement */}
              <blockquote className="font-serif text-base sm:text-xl md:text-2xl font-light text-[#F8F5EE] italic leading-relaxed text-opacity-95">
                "{activeTestimonial.quote}"
              </blockquote>

              <div className="h-[1px] max-w-xs bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent mx-auto" />

              {/* Author metadata details */}
              <div className="space-y-1">
                <cite className="not-italic font-mono text-[10.5px] uppercase tracking-widest text-[#D4AF37] font-bold">
                  {activeTestimonial.author}
                </cite>
                <p className="font-mono text-[8.5px] uppercase tracking-widest text-[#F8F5EE]/45">
                  {activeTestimonial.role} — {activeTestimonial.companyOrBrand}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Controls Overlay */}
          <div className="absolute inset-y-0 inset-x-4 flex justify-between items-center pointer-events-none">
            <button
              onClick={handlePrev}
              className="pointer-events-auto h-10 w-10 flex items-center justify-center bg-black/60 rounded-full border border-white/5 hover:border-[#D4AF37] text-[#D4AF37] hover:bg-black transition-all"
            >
              <ChevronLeft className="h-4.5 w-4.5" />
            </button>

            <button
              onClick={handleNext}
              className="pointer-events-auto h-10 w-10 flex items-center justify-center bg-black/60 rounded-full border border-white/5 hover:border-[#D4AF37] text-[#D4AF37] hover:bg-black transition-all"
            >
              <ChevronRight className="h-4.5 w-4.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
