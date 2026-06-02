/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, ArrowUp, Mail } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-app-footer"
      className="relative bg-[#050505] pt-24 pb-12 px-6 md:px-12 border-t border-[#D4AF37]/20 select-none overflow-hidden"
    >
      {/* Footer background red glow lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-full max-w-7xl bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#7A0000]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Logo brand & Quote (Cols 6) */}
          <div className="md:col-span-8 space-y-6 text-left">
            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-[0.2em] text-[#D4AF37] uppercase select-none">
                ANANDAPOET
              </h1>
              <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#F8F5EE]/45 block">
                PERSONAL FINE ART & PORTRAIT GALLERY
              </span>
            </div>

            <p className="font-serif italic text-base text-[#F8F5EE]/50 max-w-md">
              "Art is remembered. Beauty is witnessed."
            </p>

            <p className="font-sans text-xs text-[#F8F5EE]/40 max-w-sm leading-relaxed font-light">
              A personal visual art archive exploring contrast, shadows, and editorial expressions through the camera lens.
            </p>
          </div>

          {/* Quick communication links (Cols 4) */}
          <div className="md:col-span-4 space-y-4 text-left font-mono">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] block">CONTACT & SOCIAL</span>
            <div className="h-[1px] w-12 bg-[#7A0000]" />
            <ul className="text-[9.5px] text-[#F8F5EE]/60 space-y-3 uppercase tracking-widest">
              <li className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                <Mail className="h-3.5 w-3.5 text-[#D4AF37]/65" /> anandaputri1381@gmail.com
              </li>
              <li className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                <Instagram className="h-3.5 w-3.5 text-[#D4AF37]/65" /> @anandapoet_
              </li>
            </ul>
          </div>

        </div>

        {/* Big visual decorative typography stamp */}
        <div className="text-center border-y border-white/5 py-12 select-none overflow-hidden max-w-7xl mx-auto h-28 hidden sm:block">
          <p className="font-serif font-black text-6xl tracking-[0.45em] text-[#D4AF37]/5 leading-none pl-[0.45em] uppercase pointer-events-none">
            ANANDAPOET
          </p>
        </div>

        {/* Bottom footer bar row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-white/5 pt-8 font-mono text-[9px] text-[#F8F5EE]/30">
          
          <div className="flex flex-wrap justify-center items-center gap-4 uppercase tracking-widest">
            <span>© {new Date().getFullYear()} ANANDAPOET GALLERY. ALL RIGHTS RESERVED.</span>
          </div>

          <button
            onClick={handleScrollTop}
            className="flex items-center gap-2 bg-[#111111] hover:bg-[#7A0000]/25 border border-[#D4AF37]/35 text-[#D4AF37] hover:text-white px-4 py-2 text-[10px] tracking-widest rounded transition-all shadow-md group"
          >
            BACK TO TOP <ArrowUp className="h-3 w-3 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
