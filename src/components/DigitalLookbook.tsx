/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ChevronLeft, ChevronRight, Maximize2, Minimize2, Quote, Sparkles } from 'lucide-react';
import { LOOKBOOK_PAGES } from '../data/portfolioData';

export default function DigitalLookbook() {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [isFullscreenReading, setIsFullscreenReading] = useState<boolean>(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diffX = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (diffX > minSwipeDistance) {
      handleNextPage(); // Swipe left -> Next
    } else if (diffX < -minSwipeDistance) {
      handlePrevPage(); // Swipe right -> Prev
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const activePage = LOOKBOOK_PAGES[currentPageIndex];

  const handleNextPage = () => {
    if (currentPageIndex < LOOKBOOK_PAGES.length - 1) {
      setCurrentPageIndex(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(prev => prev - 1);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreenReading(!isFullscreenReading);
  };

  const renderLayoutContent = () => {
    switch (activePage.layoutType) {
      case 'editorial':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
            <div className="space-y-6">
              <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]">
                {activePage.subtitle}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-widest text-[#F8F5EE]">
                {activePage.title}
              </h3>
              <p className="text-xs text-[#F8F5EE]/70 font-light leading-relaxed">
                {activePage.description}
              </p>
              {activePage.quote && (
                <div className="border-l-2 border-[#7A0000] pl-4 py-1">
                  <p className="font-serif italic text-xs text-[#D4AF37]">
                    {activePage.quote}
                  </p>
                </div>
              )}
            </div>
            
            <div className="relative group overflow-hidden border border-white/5 shadow-lg h-[260px] sm:h-[320px] md:h-[360px] rounded">
              <img
                src={activePage.imageUrl}
                alt={activePage.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700 select-none"
              />
            </div>
          </div>
        );
        
      case 'split':
        return (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
            <div className="md:col-span-7 relative group overflow-hidden border border-white/5 shadow-lg h-[260px] sm:h-[320px] md:h-[360px] rounded">
              <img
                src={activePage.imageUrl}
                alt={activePage.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 select-none"
              />
            </div>
            
            <div className="md:col-span-5 space-y-4">
              <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#D4AF37]/60 block">
                {activePage.subtitle}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-widest text-[#F8F5EE]">
                {activePage.title}
              </h3>
              <div className="h-[1px] w-12 bg-[#7A0000]" />
              <p className="text-xs text-[#F8F5EE]/65 font-light leading-relaxed text-justify">
                {activePage.description}
              </p>
            </div>
          </div>
        );

      case 'asymmetric':
        return (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
            <div className="md:col-span-5 space-y-4 order-last md:order-first">
              <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]">
                {activePage.subtitle}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-widest text-[#F8F5EE]">
                {activePage.title}
              </h3>
              <p className="text-xs text-[#F8F5EE]/70 font-light leading-relaxed">
                {activePage.description}
              </p>
              {activePage.quote && (
                <div className="relative pl-6 py-2 border-l-2 border-[#7A0000]">
                  <Quote className="absolute top-1 left-0 h-4 w-4 text-[#7A0000]/30 -translate-x-full" />
                  <p className="font-serif italic text-xs text-[#D4AF37]">
                    {activePage.quote}
                  </p>
                </div>
              )}
            </div>

            <div className="md:col-span-7 relative group overflow-hidden border border-white/5 shadow-2xl h-[260px] sm:h-[320px] md:h-[360px] rounded">
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/0 to-transparent p-4 z-10" />
              <img
                src={activePage.imageUrl}
                alt={activePage.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700 select-none"
              />
            </div>
          </div>
        );

      case 'full':
        return (
          <div className="relative w-full h-[380px] sm:h-[450px] overflow-hidden border border-white/5 shadow-2xl rounded group">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 z-10" />
            
            <img
              src={activePage.imageUrl}
              alt={activePage.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-110 brightness-75 select-none transition-transform duration-700 group-hover:scale-102"
            />
            
            <div className="absolute bottom-8 left-8 right-8 z-20 max-w-xl space-y-3">
              <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#D4AF37]">
                {activePage.subtitle}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-black tracking-widest text-[#F8F5EE] uppercase">
                {activePage.title}
              </h3>
              <p className="text-xs text-[#F8F5EE]/80 font-light leading-relaxed">
                {activePage.description}
              </p>
            </div>
          </div>
        );
    }
  };

  const LookbookContent = () => (
    <div 
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative bg-[#050505] border border-[#D4AF37]/30 shadow-2xl p-6 sm:p-12 min-h-[460px] select-none rounded flex flex-col justify-between"
    >
      
      {/* Vintage paper page fold shadow overlay */}
      <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-black/60 shadow-[0_0_12px_rgba(0,0,0,0.85)] z-20 hidden md:block pointer-events-none" />

      {/* Pages Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-[9px] text-[#F8F5EE]/40">
        <span className="flex items-center gap-1.5 uppercase">
          <BookOpen className="h-3 w-3 text-[#D4AF37]" /> DIGITAL LOOKBOOK VOL_I
        </span>
        <span className="uppercase tracking-[0.2em] text-[#D4AF37]/75 font-bold">
          ANANDAPOET EXCLUSIVE
        </span>
      </div>

      {/* Animated Layout Slide Section */}
      <div className="my-8 flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPageIndex}
            initial={{ opacity: 0, scale: 0.98, rotateY: 5 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.98, rotateY: -5 }}
            transition={{ duration: 0.45 }}
            className="h-full"
          >
            {renderLayoutContent()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pages Pagination Nav Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-6 gap-4 font-mono text-[9.5px]">
        
        {/* Flip Left */}
        <button
          onClick={handlePrevPage}
          disabled={currentPageIndex === 0}
          className={`flex items-center gap-2 px-3 py-1.5 transition-colors ${
            currentPageIndex === 0 ? 'text-white/10 cursor-not-allowed' : 'text-[#D4AF37] hover:text-white'
          }`}
        >
          <ChevronLeft className="h-4 w-4" /> FLIP PREVIOUS PAGE
        </button>

        {/* Page status index marks */}
        <div className="flex items-center gap-4">
          <span className="text-white/40">PAGE {activePage.pageNumber} OF {LOOKBOOK_PAGES.length}</span>
          <div className="flex gap-1">
            {LOOKBOOK_PAGES.map((_, idx) => (
              <span
                key={idx}
                className={`h-1 w-1.5 rounded-full ${idx === currentPageIndex ? 'bg-[#D4AF37]' : 'bg-white/10'}`}
              />
            ))}
          </div>
        </div>

        {/* Flip Right */}
        <button
          onClick={handleNextPage}
          disabled={currentPageIndex === LOOKBOOK_PAGES.length - 1}
          className={`flex items-center gap-2 px-3 py-1.5 transition-colors ${
            currentPageIndex === LOOKBOOK_PAGES.length - 1 ? 'text-white/10 cursor-not-allowed' : 'text-[#D4AF37] hover:text-white'
          }`}
        >
          FLIP NEXT PAGE <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );

  return (
    <div
      id="digital-lookbook-section"
      className="relative w-full bg-[#111111] py-24 px-6 md:px-12 border-b border-[#F8F5EE]/5"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Title with Fullscreen toggle */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#7A0000]" />
              <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]">
                DIGITAL PORTFOLIO PRESS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl tracking-widest text-[#F8F5EE] uppercase">
              THE LOOKBOOK
            </h2>
          </div>

          <button
            onClick={toggleFullscreen}
            className="flex items-center gap-2 border border-[#D4AF37]/30 hover:border-[#D4AF37] bg-black/50 hover:bg-[#7A0000]/15 text-[#D4AF37] hover:text-white px-4 py-2 text-xs font-mono tracking-widest transition-all rounded shadow-md"
            title="Read in theater distraction-free layout"
          >
            <Maximize2 className="h-3.5 w-3.5" /> 
            <span>THEATRE PRINT MODE</span>
          </button>
        </div>

        {/* Regular embedded book display */}
        <LookbookContent />

        {/* Absolute Portal/Overlay Fullscreen Reading Backdrop */}
        <AnimatePresence>
          {isFullscreenReading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-[#050505]/98 p-6 overflow-y-auto"
            >
              {// Mini overlay background glows
              }
              <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-[#7A0000]/10 blur-[130px] pointer-events-none" />
              <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[#D4AF37]/5 blur-[130px] pointer-events-none" />

              {/* Close/Exit floating overlay button */}
              <button
                onClick={toggleFullscreen}
                className="absolute top-6 right-6 z-50 flex items-center justify-center gap-2 border border-white/20 bg-[#111111] hover:bg-[#7A0000] text-white px-4 py-2 text-xs font-mono tracking-widest transition-all rounded shadow-lg"
              >
                <Minimize2 className="h-3.5 w-3.5" /> CLOSE STUDY
              </button>

              <div className="w-full max-w-4xl space-y-6 pt-12">
                <LookbookContent />
                
                {/* Fullscreen Reading guide note */}
                <p className="font-mono text-[9px] text-[#F8F5EE]/30 text-center uppercase tracking-widest">
                  TIP: Press FLIP buttons or use keyboard left/right indicators to navigate this private press print
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
