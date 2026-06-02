/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import HeroSection from './components/HeroSection';
import PortfolioGallery from './components/PortfolioGallery';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F8F5EE] font-sans antialiased selection:bg-[#7A0000] selection:text-[#D4AF37]">
      <div className="relative min-h-screen editorial-ambient shadow-2xl overflow-hidden">
        {/* Elegant Outer Fine Gold Border outlining the viewport context */}
        <div className="fixed inset-0 z-50 pointer-events-none border border-[#D4AF37]/30 md:border-[#D4AF37]/65" />
        
        {/* Signature Backstage Double Hotspot Glow Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20 z-0 bg-[radial-gradient(circle_at_20%_30%,#7A0000_0%,transparent_50%),radial-gradient(circle_at_80%_70%,#7A0000_0%,transparent_50%)]" />

        {/* Elegant Fixed Header Navbar */}
        <header className="sticky top-0 z-40 bg-[#050505]/95 backdrop-blur-md border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 h-20 flex items-center justify-between">
            {/* Brand Logo design */}
            <a href="#" className="flex flex-col items-start select-none">
              <span className="font-serif text-lg sm:text-2xl md:text-3xl font-light tracking-[0.15em] text-[#D4AF37] hover:text-[#F8F5EE] transition-all leading-none uppercase">
                ANANDAPOET
              </span>
              <span className="font-sans text-[7px] sm:text-[9px] md:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#D4AF37] font-semibold mt-1 sm:mt-1.5">
                PERSONAL GALLERY
              </span>
            </a>

            {/* Navigation links */}
            <nav className="flex items-center gap-2.5 sm:gap-4 md:gap-6 font-mono text-[8px] sm:text-[9.5px] uppercase tracking-wider sm:tracking-widest text-[#F8F5EE]/60">
              <a href="#portfolio-gallery-section" className="hover:text-[#D4AF37] transition-colors">
                PHOTO GALLERY
              </a>
              <span className="text-white/10">•</span>
              <a href="#about-section" className="hover:text-[#D4AF37] transition-colors">
                ABOUT & CONTACT
              </a>
            </nav>
          </div>
        </header>

        {/* Main Sections */}
        <main className="relative z-10">
          {/* Hero Background Slider */}
          <HeroSection />

          {/* Portfolio Grid layout */}
          <PortfolioGallery />

          {/* About Biography, Brands and Contact cards */}
          <AboutSection />
        </main>

        {/* Footnote Copyright details */}
        <Footer />
      </div>
    </div>
  );
}
