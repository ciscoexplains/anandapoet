/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_IMAGES } from '../data/portfolioData';
import { ChevronLeft, ChevronRight, Eye, ShieldAlert, Sliders, Frame, Sparkles } from 'lucide-react';
import { PortfolioImage } from '../types';

export default function ImmersiveExhibition() {
  const [currentWallIndex, setCurrentWallIndex] = useState(0);
  const [spotlightIntensity, setSpotlightIntensity] = useState<number>(80); // 0 to 100%
  const [frameStyle, setFrameStyle] = useState<'baroque' | 'minimalist' | 'canvas'>('baroque');

  // Filter 10 unique masterpieces for the virtual exhibition walk-through
  const museumCollection = PORTFOLIO_IMAGES.filter(img => img.goldRating).slice(0, 10);

  const activeExhibit = museumCollection[currentWallIndex] || museumCollection[0];

  const navigateCollection = (direction: number) => {
    setCurrentWallIndex((prev) => (prev + direction + museumCollection.length) % museumCollection.length);
  };

  const getFrameStyling = () => {
    switch (frameStyle) {
      case 'baroque':
        return 'border-[16px] border-[#D4AF37] outline outline-4 outline-[#050505] shadow-[0_25px_60px_-15px_rgba(212,175,55,0.4)]';
      case 'minimalist':
        return 'border-4 border-[#D4AF37]/80 shadow-[0_15px_40px_-10px_rgba(212,175,55,0.25)]';
      case 'canvas':
        return 'border-0 outline outline-1 outline-white/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)]';
    }
  };

  return (
    <div
      id="interactive-exhibition-section"
      className="relative w-full bg-[#111111] py-24 px-6 md:px-12 overflow-hidden border-b border-[#F8F5EE]/5"
    >
      {/* Dynamic Dramatic Ambient Lighting Spotlight centered on current art */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#7A0000] to-[#D4AF37] opacity-20 blur-[150px] transition-all duration-700 pointer-events-none"
        style={{ 
          width: `${300 + spotlightIntensity * 4}px`, 
          height: `${300 + spotlightIntensity * 4}px`,
          opacity: spotlightIntensity / 500
        }}
      />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Title */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-1 w-1 bg-[#D4AF37]" />
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]">
              IMMERSIVE MODE
            </span>
            <span className="h-1 w-1 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl tracking-widest text-[#F8F5EE] uppercase">
            THE PRIVATE GALLERY
          </h2>
          <p className="max-w-xl mx-auto text-xs font-serif italic text-[#F8F5EE]/50">
            "Saksikan galeri museum interaktif yang menampilkan ANANDAPOET sebagai subjek teatrikal dalam eksplorasi seni peran dan fotografi."
          </p>
        </div>

        {/* Gallery Interface Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Controls Sidebar (Left Column) */}
          <div className="lg:col-span-3 space-y-8 bg-[#050505]/90 border border-[#D4AF37]/20 p-6 shadow-xl backdrop-blur-md rounded">
            <div className="flex items-center gap-2 text-[#D4AF37] border-b border-[#D4AF37]/20 pb-3">
              <Sliders className="h-4 w-4" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold">EXHIBIT CONTROLS</span>
            </div>

            {/* Spotlight intensity slider */}
            <div className="space-y-3">
              <div className="flex justify-between font-mono text-[9px] text-[#F8F5EE]/60 uppercase tracking-wider">
                <span>TRACK SPOTLIGHT</span>
                <span className="text-[#D4AF37] font-bold">{spotlightIntensity}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={spotlightIntensity}
                onChange={(e) => setSpotlightIntensity(Number(e.target.value))}
                className="w-full h-1 bg-[#111111] rounded-lg appearance-none cursor-pointer accent-[#D4AF37] border border-white/5"
              />
            </div>

            {/* Choose Frame Styling preset */}
            <div className="space-y-3">
              <span className="font-mono text-[9px] text-[#F8F5EE]/60 uppercase tracking-wider block">FRAME DESIGN</span>
              <div className="grid grid-cols-3 gap-2">
                {(['baroque', 'minimalist', 'canvas'] as const).map((style) => (
                  <button
                    key={style}
                    onClick={() => setFrameStyle(style)}
                    className={`px-1 py-2 font-mono text-[8px] uppercase tracking-wider transition-all duration-300 rounded border ${
                      frameStyle === style
                        ? 'border-[#D4AF37] bg-[#7A0000]/25 text-[#D4AF37] font-bold shadow-md'
                        : 'border-white/5 bg-[#111111] text-[#F8F5EE]/40 hover:text-white'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            {/* Exhibit Details Specs Card */}
            <div className="space-y-4 bg-[#111111]/70 p-4 border border-white/5 text-[9.5px] font-mono leading-relaxed rounded">
              <div className="flex justify-between">
                <span className="text-white/40">EXHIBIT NO</span>
                <span className="text-[#D4AF37]">#{activeExhibit.id.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">CATEGORY</span>
                <span className="text-white">{activeExhibit.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">YEAR CATALOGED</span>
                <span className="text-white">{activeExhibit.year}</span>
              </div>
              <div className="h-[1px] bg-[#D4AF37]/15" />
              <div>
                <span className="text-[#D4AF37] block font-bold mb-1">ARTIST NOTE:</span>
                <span className="text-white/70 block leading-normal">
                  {activeExhibit.description}
                </span>
              </div>
            </div>
          </div>

          {/* Immersive Wall Canvas (Center/Right Columns) */}
          <div className="lg:col-span-9 flex flex-col justify-center items-center space-y-8 relative">
            
            {/* Spotlight Projection Beam effect */}
            <div 
              className="absolute top-0 w-36 h-28 bg-[#D4AF37]/25 rounded-full filter blur-xl pointer-events-none transition-all duration-700" 
              style={{
                opacity: spotlightIntensity / 150,
                transform: 'scaleY(0.7)'
              }}
            />

            {/* Heavy Museum Wood Base Pedestal Floor Line */}
            <div className="absolute bottom-16 inset-x-8 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent pointer-events-none" />

            {/* The Main Exhibition Picture Frame (with Framer Motion transition) */}
            <div className="relative flex items-center justify-center min-h-[460px] w-full max-w-xl px-12 py-6">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentWallIndex}
                  initial={{ opacity: 0, x: 100, rotateY: 15 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: -100, rotateY: -15 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="relative perspective-800 z-10 w-full"
                >
                  <div className={`relative overflow-hidden bg-[#050505] transition-all duration-500 select-none ${getFrameStyling()}`}>
                    {/* The Spotlight Overlay tint mapping */}
                    <div 
                      className="absolute inset-0 z-10 pointer-events-none transition-all duration-500 bg-[#050505]"
                      style={{ opacity: (100 - spotlightIntensity) / 105 }}
                    />
                    
                    {/* Subtle dramatic visual lighting reflection */}
                    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#D4AF37]/10 to-transparent z-10 pointer-events-none" />

                    {/* Highly curated Unsplash Image */}
                    <img
                      src={activeExhibit.imageUrl}
                      alt={activeExhibit.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-[380px] sm:h-[450px] object-cover filter contrast-125 brightness-95 grayscale hover:grayscale-0 transition-all duration-700 select-none"
                    />

                    {/* Tiny Classic Gold Plate Label mounted at bottom of image inside frame */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-[#D4AF37] via-[#F8F5EE] to-[#D4AF37] text-[#050505] font-serif border border-[#050505] py-0.5 px-4 rounded-sm shadow-md text-[8px] tracking-widest text-center select-none font-black uppercase">
                      " {activeExhibit.title} "
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Decorative Museum Wire Hangings from Ceiling */}
              <div className="absolute top-0 left-1/2 -translate-x-[calc(50%_-_1px)] w-[1px] h-12 bg-white/10 z-0 pointer-events-none" />
              <div className="absolute top-0 left-1/2 -translate-x-[calc(50%_+_1px)] w-[1px] h-12 bg-white/10 z-0 pointer-events-none" />
            </div>

            {/* Master Navigation & Scrubber panel */}
            <div className="flex flex-col sm:flex-row items-center gap-6 z-20 select-none">
              
              <div className="flex items-center gap-4 bg-[#050505]/70 border border-[#D4AF37]/30 p-2 rounded-full">
                {/* Walk Back Button */}
                <button
                  onClick={() => navigateCollection(-1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111111] border border-white/5 text-[#D4AF37] hover:bg-[#7A0000] hover:text-white transition-all shadow-lg"
                  title="Walk to Prior Painting"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <span className="font-mono text-[9px] uppercase tracking-[0.34em] text-[#F8F5EE] px-4">
                  EXHIBIT {currentWallIndex + 1} OF {museumCollection.length}
                </span>

                {/* Walk Forward Button */}
                <button
                  onClick={() => navigateCollection(1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111111] border border-white/5 text-[#D4AF37] hover:bg-[#7A0000] hover:text-white transition-all shadow-lg"
                  title="Walk to Next Painting"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Little gold stars progress maps indicators */}
              <div className="flex items-center gap-1.5 bg-[#050505]/30 p-2 rounded-full">
                {museumCollection.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentWallIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentWallIndex 
                        ? 'w-4 bg-[#D4AF37]' 
                        : 'w-1.5 bg-[#F8F5EE]/20 hover:bg-[#F8F5EE]/55'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
