/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Eye, X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { PORTFOLIO_IMAGES } from '../data/portfolioData';
import { PortfolioImage } from '../types';

function GalleryCard({
  photo,
  index,
  openViewer
}: {
  photo: PortfolioImage;
  index: number;
  openViewer: (photo: PortfolioImage, index: number) => void;
  key?: string | number;
}) {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.15, // trigger when 15% of the element is visible
        rootMargin: '-5% 0px -5% 0px' // small margin padding to trigger colors smoothly as user scrolls on mobile
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={elementRef}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="break-inside-avoid relative group overflow-hidden bg-[#111111] border border-[#F8F5EE]/5 shadow-xl hover:shadow-[#7A0000]/10 transition-all cursor-pointer rounded"
      onClick={() => openViewer(photo, index)}
    >
      {/* Photo Overlay hover effects */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505] via-[#050505]/0 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-[#050505]/80 border border-[#D4AF37]/30 text-[#D4AF37] opacity-100 scale-100 md:opacity-0 md:scale-90 md:group-hover:opacity-100 md:group-hover:scale-100 transition-all duration-300">
        <Maximize2 className="h-3.5 w-3.5" />
      </div>

      {photo.goldRating && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-[#7A0000]/90 border border-[#D4AF37]/50 px-2.5 py-1 rounded-full text-[#D4AF37]">
          <Sparkles className="h-3 w-3 fill-[#D4AF37]/80" />
          <span className="font-mono text-[8px] tracking-widest uppercase font-bold text-white">MASTERWORK</span>
        </div>
      )}

      {/* High Quality Loaded Image */}
      <img
        src={photo.imageUrl}
        alt={photo.title}
        referrerPolicy="no-referrer"
        className={`w-full h-auto object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-95 brightness-90 ${
          isInView ? 'grayscale-0 contrast-100' : 'grayscale contrast-125'
        }`}
        loading="lazy"
      />

      {/* Photographic Metadata Slate */}
      <div className="absolute bottom-0 inset-x-0 z-20 p-5 translate-y-0 opacity-100 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300 select-none bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[8px] uppercase tracking-widest text-[#D4AF37]">
            {photo.category}
          </span>
          <span className="font-mono text-[9px] text-[#F8F5EE]/40">
            {photo.year}
          </span>
        </div>
        <h3 className="font-serif text-lg tracking-wider text-[#F8F5EE] mt-1">
          {photo.title}
        </h3>
      </div>
    </motion.div>
  );
}

export default function PortfolioGallery() {
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [activePhoto, setActivePhoto] = useState<PortfolioImage | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement | null>(null);

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
      navigatePhoto(1); // Swipe left -> Next
    } else if (diffX < -minSwipeDistance) {
      navigatePhoto(-1); // Swipe right -> Prev
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // All portfolio images are shown without category filters
  const filteredImages = PORTFOLIO_IMAGES;

  // Load more items for infinite scroll simulation
  const visibleImages = filteredImages.slice(0, visibleCount);

  // Watch for scroll to bottom to auto infinite-scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      // If we are within 150px of bottom, load more
      if (scrollHeight - scrollTop - clientHeight < 150) {
        if (visibleCount < filteredImages.length) {
          setVisibleCount(prev => Math.min(prev + 12, filteredImages.length));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCount, filteredImages]);

  // Handle Full-screen navigation keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activePhoto) return;
      if (e.key === 'Escape') {
        closeViewer();
      } else if (e.key === 'ArrowRight') {
        navigatePhoto(1);
      } else if (e.key === 'ArrowLeft') {
        navigatePhoto(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhoto, activePhotoIndex, filteredImages]);

  const openViewer = (photo: PortfolioImage, index: number) => {
    setActivePhoto(photo);
    // Find the actual index matches in the list
    const realIndex = filteredImages.findIndex(img => img.id === photo.id);
    setActivePhotoIndex(realIndex);
  };

  const closeViewer = () => {
    setActivePhoto(null);
    setActivePhotoIndex(-1);
  };

  const navigatePhoto = (direction: number) => {
    if (activePhotoIndex === -1) return;
    const nextIndex = (activePhotoIndex + direction + filteredImages.length) % filteredImages.length;
    setActivePhoto(filteredImages[nextIndex]);
    setActivePhotoIndex(nextIndex);
  };

  return (
    <div
      ref={containerRef}
      id="portfolio-gallery-section"
      className="relative w-full bg-[#050505] py-24 px-6 md:px-12 border-b border-[#F8F5EE]/5"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-8 bg-[#7A0000]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#D4AF37]">
                PRIVATE COLLECTION
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl tracking-widest text-[#F8F5EE] uppercase">
              THE PORTFOLIO
            </h2>
          </div>
          
          <div className="flex items-center gap-2 border border-[#D4AF37]/20 bg-[#111111]/80 px-4 py-2 rounded-full backdrop-blur-sm select-none">
            <Sparkles className="h-4 w-4 text-[#D4AF37] animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#F8F5EE]/70">
              EXPLORING {PORTFOLIO_IMAGES.length} WORKS
            </span>
          </div>
        </div>

        {/* Masonry-Style Layout Grid */}
        {visibleImages.length === 0 ? (
          <div className="flex h-64 flex-col items-center justify-center border border-dashed border-[#D4AF37]/20 text-center rounded">
            <p className="font-mono text-sm text-[#F8F5EE]/40">No photographs matched your criteria.</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 [column-fill:_balance]">
            <AnimatePresence mode="popLayout">
              {visibleImages.map((photo, index) => (
                <GalleryCard
                  key={photo.id}
                  photo={photo}
                  index={index}
                  openViewer={openViewer}
                />
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Load More Trigger info indicator */}
        {visibleCount < filteredImages.length && (
          <div className="flex justify-center pt-8">
            <button
              onClick={() => setVisibleCount(prev => Math.min(prev + 12, filteredImages.length))}
              className="relative overflow-hidden group border border-[#D4AF37]/45 bg-[#111111]/70 px-8 py-3 text-xs font-mono tracking-widest text-[#D4AF37] hover:text-[#050505] transition-all duration-300 hover:border-[#D4AF37]/80 rounded"
            >
              <span className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              <span className="relative z-10 flex items-center gap-2">
                CONTINUE DOWNWARD FOR INFINITE WORKS 
                <span className="animate-bounce">↓</span>
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Full-Screen Immersive Image Viewer portal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="fixed inset-0 z-50 overflow-y-auto bg-[#050505]/98 backdrop-blur-md flex flex-col justify-start md:justify-center items-center"
          >
            {/* Ambient backstage gold glow under viewer */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#7A0000]/15 blur-[120px] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={closeViewer}
              className="absolute top-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/70 hover:text-white hover:border-[#D4AF37] transition-colors"
              title="Close Exhibit [Esc]"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left Nav */}
            <button
              onClick={() => navigatePhoto(-1)}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-40 flex h-10 w-8 md:h-14 md:w-11 items-center justify-center bg-black/40 hover:bg-black text-[#D4AF37] border-y border-r border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all"
              title="Previous Photo [←]"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Right Nav */}
            <button
              onClick={() => navigatePhoto(1)}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-40 flex h-10 w-8 md:h-14 md:w-11 items-center justify-center bg-black/40 hover:bg-black text-[#D4AF37] border-y border-l border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all"
              title="Next Photo [→]"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Scrollable inner wrapper for centering and vertical flow */}
            <div className="min-h-full w-full flex items-center justify-center py-16 md:py-4 px-2 md:px-8">
              {/* Media Canvas Area */}
              <div className="relative max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 z-30 select-none">
                
                {/* Actual Image Frame */}
                <div className="md:col-span-8 flex justify-center items-center h-[40vh] sm:h-[55vh] md:h-[75vh] relative group border border-[#D4AF37]/10 bg-[#111111]/40 rounded p-2">
                  {/* Gold Frame accent shadows */}
                  <div className="absolute inset-0 border border-[#D4AF37]/5 pointer-events-none" />
                  <motion.img
                    key={activePhoto.imageUrl}
                    src={activePhoto.imageUrl}
                    alt={activePhoto.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain shadow-2xl filter contrast-110 select-none"
                  />
                </div>

                {/* High Fashion Spec Sheet Metadata */}
                <div className="md:col-span-4 flex flex-col justify-between py-2 text-left space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#D4AF37]">
                        {activePhoto.category}
                      </span>
                      <span className="font-mono text-[10px] text-[#F8F5EE]/40 bg-[#111111] px-2 py-0.5 rounded border border-white/5">
                        EXHIBIT {activePhotoIndex + 1}/{filteredImages.length}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-widest text-[#F8F5EE]">
                        {activePhoto.title}
                      </h2>
                      <p className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-[0.2em]">
                        RELEASE YEAR: {activePhoto.year}
                      </p>
                    </div>

                    <p className="text-xs text-[#F8F5EE]/70 font-light leading-relaxed">
                      {activePhoto.description}
                    </p>
                  </div>

                  <div className="space-y-4 bg-[#111111]/80 border border-[#D4AF37]/15 p-5 rounded">
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span className="text-[#F8F5EE]/40 uppercase tracking-widest">GALLERY EXHIBIT</span>
                      <span className="text-[#F8F5EE] uppercase">ANANDAPOET</span>
                    </div>
                    <div className="h-[1px] bg-white/5" />
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span className="text-[#F8F5EE]/40 uppercase tracking-widest">ARTWORK TYPE</span>
                      <span className="text-[#D4AF37] uppercase font-bold">{activePhoto.category} PHOTOGRAPHY</span>
                    </div>
                  </div>

                  {/* Keyboard Controls footer Helper */}
                  <div className="hidden md:flex items-center justify-between text-[9px] font-mono text-[#F8F5EE]/25 bg-[#050505] p-2 border border-white/5 rounded">
                    <span>← PREVIOUS PHOTO</span>
                    <span>ESC TO CLOSE</span>
                    <span>NEXT PHOTO →</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
