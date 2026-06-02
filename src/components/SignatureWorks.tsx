/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { CAMPAIGNS } from '../data/portfolioData';
import { Sparkles, Calendar, Quote, Award } from 'lucide-react';

export default function SignatureWorks() {
  const [activeSpread, setActiveSpread] = useState<number>(0);

  return (
    <div
      id="signature-campaigns-section"
      className="relative w-full bg-[#050505] py-24 px-6 md:px-12 border-b border-[#F8F5EE]/5"
    >
      {/* Decorative vertical lines mimicking high-end press print layouts */}
      <div className="absolute inset-y-0 left-12 w-[1px] bg-[#F8F5EE]/5 hidden md:block" />
      <div className="absolute inset-y-0 right-12 w-[1px] bg-[#F8F5EE]/5 hidden md:block" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-[#D4AF37]" />
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]">
              FEATURED CAMPAIGNS
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl tracking-widest text-[#F8F5EE] uppercase">
            SIGNATURE WORKS
          </h2>
          <div className="h-0.5 w-16 bg-[#7A0000]" />
        </div>

        {/* Magazine Selector Tabs resembling high-end catalog directories */}
        <div className="flex justify-center items-center gap-2 max-w-2xl mx-auto overflow-x-auto scrollbar-none pb-4">
          {CAMPAIGNS.map((camp, idx) => (
            <button
              key={camp.id}
              onClick={() => setActiveSpread(idx)}
              className={`px-4 py-2 font-serif text-xs uppercase tracking-widest transition-all duration-300 border-b-2 whitespace-nowrap ${
                activeSpread === idx
                  ? 'border-[#D4AF37] text-[#D4AF37] font-black'
                  : 'border-transparent text-[#F8F5EE]/45 hover:text-[#F8F5EE]/80'
              }`}
            >
              {camp.brand} • {camp.title}
            </button>
          ))}
        </div>

        {/* The Magazine Page Spread Layout Container */}
        <div className="relative bg-[#111111] border border-[#F8F5EE]/5 shadow-2xl p-6 sm:p-12 overflow-hidden rounded">
          
          {/* Subtle print page line in the center simulating a opened book fold */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-black/40 shadow-[0_0_15px_rgba(0,0,0,0.9)] z-20 hidden lg:block pointer-events-none" />

          {/* Dynamic background gradient based on campaign active choices */}
          <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#050505] via-[#111111]/98 to-transparent opacity-80" />

          {/* Main Layout Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            
            {/* LEFT PAGE - Photographic Showcase */}
            <div className="relative group p-6 select-none">
              <div className="editorial-frame-rotated-gold scale-[0.94] group-hover:rotate-6 group-hover:scale-[0.97]" />
              <div className="editorial-frame-rotated-crimson scale-[0.94] group-hover:-rotate-4 group-hover:scale-[0.97]" />
              
              <motion.div
                key={`img-spread-${activeSpread}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative overflow-hidden border border-[#D4AF37]/35 rounded shadow-2xl z-10"
              >
              {/* Gold frame shadow corner ticks */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/50" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/50" />

              <div className="absolute inset-0 bg-[#7A0000]/10 mix-blend-color z-10" />

              <img
                src={CAMPAIGNS[activeSpread].imageUrl}
                alt={CAMPAIGNS[activeSpread].title}
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[500px] object-cover transition-transform duration-700 hover:scale-103 filter contrast-125 brightness-90 grayscale hover:grayscale-0"
              />

              {/* Gold layout page tag */}
              <div className="absolute bottom-4 left-4 z-20 bg-black/80 px-3 py-1 text-[8.5px] font-mono tracking-widest text-[#D4AF37] border border-[#D4AF37]/35 rounded-sm select-none">
                PAGE 0{activeSpread * 2 + 1} // CAMPAIGN RELEASE
              </div>
            </motion.div>
          </div>

            {/* RIGHT PAGE - Editorial Typographic Material */}
            <motion.div
              key={`text-spread-${activeSpread}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-8 select-none flex flex-col justify-center h-full"
            >
              
              {/* Pre heading */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]/60">
                  {CAMPAIGNS[activeSpread].brand} INTERNATIONAL
                </span>
                <span className="h-[1px] w-12 bg-[#D4AF37]/20" />
              </div>

              {/* Title group */}
              <div className="space-y-2">
                <h3 className="font-serif text-3xl sm:text-5xl font-black tracking-widest text-[#F8F5EE] uppercase">
                  {CAMPAIGNS[activeSpread].title}
                </h3>
                <div className="flex items-center gap-4 text-xs font-mono text-[#D4AF37]/80">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> RELEASED {CAMPAIGNS[activeSpread].year}
                  </span>
                  <span>|</span>
                  <span className="uppercase text-[#F8F5EE]/65">ROLE: {CAMPAIGNS[activeSpread].role}</span>
                </div>
              </div>

              <div className="h-[1px] w-full bg-[#D4AF37]/20" />

              {/* Large quote design section */}
              <div className="relative pl-6 py-1 border-l-2 border-[#7A0000]">
                <Quote className="absolute top-0 -left-1 h-5 w-5 text-[#7A0000]/20 -translate-x-full scale-125" />
                <p className="font-serif italic text-base text-[#F8F5EE]/85 uppercase leading-relaxed font-semibold">
                  A revolutionary perspective that redefined commercial fashion aesthetics globally.
                </p>
              </div>

              {/* Main detailed paragraph in clean serif editorial font */}
              <p className="font-serif text-xs font-light text-[#F8F5EE]/70 leading-relaxed text-opacity-90 tracking-wide text-justify">
                {CAMPAIGNS[activeSpread].description} Through dynamic physical posture, subtle shadow capture, and high-fashion styling parameters, these iconic spreads featured extensively across major city centers including Tokyo, Berlin, Milan, and NY, achieving multiple outstanding industry award distinctions.
              </p>

              {/* Spec sheet parameters block */}
              <div className="grid grid-cols-2 gap-4 pt-4 text-[9px] font-mono uppercase bg-black/30 p-4 border border-white/5 rounded-sm">
                <div>
                  <span className="text-white/40 block">CREATIVE DIRECTORS</span>
                  <span className="text-[#D4AF37]">SAURELLE & ASSOCIATES</span>
                </div>
                <div>
                  <span className="text-white/40 block">AGENCY PARTNER</span>
                  <span className="text-[#F8F5EE]/80">METROPOLITAN MILAN</span>
                </div>
              </div>

              {/* Footer catalog mark */}
              <div className="flex items-center justify-between font-mono text-[8px] text-white/30 pt-6">
                <span>SAINT LAURENT & VOGUE EXCLUSIVE</span>
                <span>PAGE 0{activeSpread * 2 + 2} // LUXURY REPORT</span>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
}
