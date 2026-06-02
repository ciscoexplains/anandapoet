/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Calendar } from 'lucide-react';
import { HIGH_FASHION_BANNER_PHOTOS } from '../data/portfolioData';

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HIGH_FASHION_BANNER_PHOTOS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      id="hero-section"
      className="relative h-screen w-full overflow-hidden bg-[#050505]"
    >
      {/* Cinematic Ken-Burns Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 z-0 h-full w-full"
        >
          {/* Black gradient mask to keep text highly legible & dramatic */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505] via-[#050505]/45 to-[#050505]/80" />
          <div className="absolute inset-y-0 right-0 z-10 w-full sm:w-1/2 bg-gradient-to-l from-[#050505]/40 to-transparent" />
          <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_70%_70%_at_50%_40%,transparent_10%,#050505_95%)]" />

          {/* Golden glow accents */}
          <div className="absolute bottom-20 left-12 z-10 h-72 w-72 rounded-full bg-[#D4AF37]/5 blur-[90px] pointer-events-none" />
          <div className="absolute top-20 right-12 z-10 h-80 w-80 rounded-full bg-[#7A0000]/10 blur-[100px] pointer-events-none" />

          {/* Actual image */}
          <motion.img
            src={HIGH_FASHION_BANNER_PHOTOS[currentIndex]}
            alt={`ANANDAPOET High Fashion Slide ${currentIndex + 1}`}
            initial={{ scale: 1.02 }}
            animate={{ scale: 1.09 }}
            transition={{ duration: 6, ease: 'easeOut' }}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover object-center grayscale brightness-75 contrast-125"
          />
        </motion.div>
      </AnimatePresence>

      {/* Grid structure lines */}
      <div className="absolute inset-0 z-10 pointer-events-none border-x border-[#F8F5EE]/5 max-w-7xl mx-auto" />
      <div className="absolute left-1/4 top-0 bottom-0 z-10 pointer-events-none border-r border-[#F8F5EE]/5 hidden lg:block" />
      <div className="absolute right-1/4 top-0 bottom-0 z-10 pointer-events-none border-l border-[#F8F5EE]/5 hidden lg:block" />

      {/* Top Gradient Gold Line */}
      <div className="absolute top-0 inset-x-0 z-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      {/* Hero Central Typography */}
      <div className="relative z-20 flex h-full max-w-7xl mx-auto items-end pb-24 px-6 md:px-12">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Main Title Col */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7A0000]" />
              <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-[#7A0000] font-bold">
                PERSONAL PHOTOGRAPHY GALLERY
              </p>
            </div>

            <div>
              <h1 className="font-serif text-5xl sm:text-7xl md:text-9xl font-light tracking-tighter text-[#F8F5EE] leading-none select-none">
                ANANDA<br/>
                <span className="text-[#D4AF37] italic font-light drop-shadow-sm">POET</span>
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[#F8F5EE]/75 text-[11px] font-mono tracking-widest uppercase">
              <span className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
                <span className="h-1 w-1 bg-[#D4AF37]" /> Editorial
              </span>
              <span className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
                <span className="h-1 w-1 bg-[#7A0000]" /> Portrait
              </span>
              <span className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
                <span className="h-1 w-1 bg-[#D4AF37]" /> Fine Art
              </span>
            </div>
          </div>

          {/* Slogan and details Column */}
          <div className="lg:col-span-4 space-y-8 lg:text-right flex flex-col items-start lg:items-end">
            <div className="text-left lg:text-right">
              <span className="font-serif italic text-lg sm:text-2xl text-[#F8F5EE]/40 block mb-2 font-light">
                "Every image tells a story."
              </span>
              <p className="text-[11px] font-mono text-[#D4AF37]/75 tracking-wider uppercase ml-1 block">
                beauty is transient, art is eternal
              </p>
            </div>



            {/* Slide Quick Navigation Lines */}
            <div className="flex items-center gap-2 mt-4">
              {HIGH_FASHION_BANNER_PHOTOS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-[3px] rounded-full transition-all duration-500 ${
                    idx === currentIndex ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-[#F8F5EE]/20 hover:bg-[#F8F5EE]/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          
        </div>
      </div>

      {/* Outer borders and details */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-10 hidden md:flex z-20">
        <div className="h-12 w-[1px] bg-gradient-to-b from-[#D4AF37]/40 to-transparent" />
        <span className="font-mono text-[8px] tracking-[0.5em] text-[#D4AF37]/50 uppercase rotate-90 my-8 select-none">
          PERSONAL ART GALLERY
        </span>
        <div className="h-12 w-[1px] bg-gradient-to-t from-[#D4AF37]/40 to-transparent" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="font-mono text-[8px] tracking-[0.3em] text-[#F8F5EE]/40 uppercase select-none">
          SCROLL TO VIEW GALLERY
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="h-7 w-4.5 rounded-full border border-dashed border-[#D4AF37]/35 flex justify-center p-1"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-[#7A0000]" />
        </motion.div>
      </div>
    </div>
  );
}
