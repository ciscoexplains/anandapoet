/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Quote, Sparkles, Mail, Phone, Instagram } from 'lucide-react';

export default function AboutSection() {
  const brands = [
    {
      name: 'Reelbuzz',
      category: 'Entertainment',
      logo: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-[1.5]">
          <path d="M6 3l14 9-14 9V3z" />
          <path d="M9 7h3.5c1.1 0 2 .9 2 2s-.9 2-2 2H9v6m3-2l2.5 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      name: 'Lemon8',
      category: 'Lifestyle',
      logo: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-[1.5]">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
          <path d="M12 6a3 3 0 1 1 0 6 3 3 0 1 1 0-6zm0 6a4 4 0 1 1 0 8 4 4 0 1 1 0-8z" />
          <path d="M12 2c1-1 3-1 3-1s0 2-2 3c-1 0.5-1 0-1-2z" fill="currentColor" />
        </svg>
      )
    },
    {
      name: 'Helo',
      category: 'Social Media',
      logo: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-[1.5]">
          <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5h-3L4 23v-5.5A8.5 8.5 0 1 1 21 11.5z" />
          <path d="M8.5 14c1.5 2 5.5 2 7 0" strokeLinecap="round" />
          <circle cx="9" cy="10" r="1.2" fill="currentColor" />
          <path d="M14 10.5c.5-.8 1.5-.8 2 0" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: 'TikTok Ads',
      category: 'Tech Ads',
      logo: (
        <svg viewBox="0 0 16 16" className="w-7 h-7 fill-current">
          <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
        </svg>
      )
    },
    {
      name: 'Meta',
      category: 'Tech Giant',
      logo: (
        <svg viewBox="0 0 16 16" className="w-7 h-7 fill-current">
          <path fillRule="evenodd" d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a55 55 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3q.477-.001.924.122c.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224q-.378-.615-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87zM4.846 4.756c.725.1 1.385.634 2.34 2.001A212 212 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264q.137 0 .27.018"/>
        </svg>
      )
    },
    {
      name: 'Sensatia',
      category: 'Skincare',
      logo: (
        <svg viewBox="0 0 48 16" className="w-12 h-6 fill-current">
          <text x="50%" y="65%" fontSize="7.5" fontWeight="bold" fontFamily="serif" letterSpacing="0.2em" textAnchor="middle">SENSATIA</text>
          <text x="50%" y="95%" fontSize="2.8" fontWeight="light" fontFamily="sans-serif" letterSpacing="0.1em" textAnchor="middle">BOTANICALS</text>
        </svg>
      )
    }
  ];

  return (
    <div
      id="about-section"
      className="relative w-full bg-[#111111] py-24 px-6 md:px-12 border-b border-[#F8F5EE]/5"
    >
      {/* Background glow overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(circle_at_70%_20%,#7A0000_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          {/* Portrait Column (Left Columns) */}
          <div className="lg:col-span-5 relative group text-center py-6">
            {/* Elegant rotated border frames */}
            <div className="absolute inset-0 border border-[#D4AF37]/15 rounded -rotate-3 scale-[0.98] group-hover:rotate-1 group-hover:scale-[1] transition-transform duration-700 pointer-events-none" />
            <div className="absolute inset-0 border border-[#7A0000]/15 rounded rotate-3 scale-[0.98] group-hover:-rotate-2 group-hover:scale-[1] transition-transform duration-700 pointer-events-none" />
            
            {/* Image backing block */}
            <div className="relative overflow-hidden bg-[#111111] max-w-[380px] mx-auto border border-[#D4AF37]/25 rounded shadow-2xl z-10">
              <div className="absolute inset-0 bg-[#7A0000]/5 mix-blend-color" />
              <img
                src={`${import.meta.env.BASE_URL}assets/IMG_2235.jpg`}
                alt="Ananda Poet Portrait"
                className="w-full h-[460px] object-cover filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-103 select-none"
              />
              
              <div className="absolute bottom-6 left-6 right-6 bg-[#050505]/95 border border-[#D4AF37]/30 p-3 z-20 whitespace-normal text-left">
                <span className="font-mono text-[8px] uppercase tracking-widest text-[#D4AF37] block">
                  ANANDA POET
                </span>
                <span className="font-serif text-xs font-semibold text-[#F8F5EE] uppercase block mt-1">
                  BALI / JAKARTA, INDONESIA
                </span>
              </div>
            </div>
          </div>

          {/* Biography Column (Right Columns) */}
          <div className="lg:col-span-7 space-y-8 select-none text-left">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-8 bg-[#7A0000]" />
                <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]">
                  PROFESSIONAL PROFILE
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-widest text-[#F8F5EE] uppercase">
                Ananda Poet
              </h2>
              <p className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-widest">
                Actress, Model, and Host based in Bali & Jakarta
              </p>
            </div>

            <div className="h-[1px] w-full bg-[#D4AF37]/20" />

            <div className="relative pl-6 py-2 border-l-2 border-[#D4AF37]/40">
              <Quote className="absolute top-0 -left-1 h-5 w-5 text-[#D4AF37]/15 -translate-x-full scale-125" />
              <p className="font-serif italic text-base sm:text-lg text-[#F8F5EE] leading-relaxed">
                "From UGC content to fitting scripted roles, I am versatile and well articulated."
              </p>
            </div>

            <p className="font-sans text-sm font-light text-[#F8F5EE]/75 leading-relaxed max-w-xl">
              Actress, model and host based in Bali with over 5 years of experience working with tech brands and tv shows. I bring a structured, reliable, and expressive presence to every campaign, shoot, and screen production.
            </p>

            {/* Direct Contacts Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              
              <a
                href="https://instagram.com/anandapoet_"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-[#1c1c1c] border border-white/5 hover:border-[#D4AF37]/40 p-4 rounded transition-all group"
              >
                <div className="h-8 w-8 rounded-full bg-[#050505] flex items-center justify-center text-[#D4AF37] group-hover:bg-[#7A0000]/20 transition-colors">
                  <Instagram className="h-4 w-4" />
                </div>
                <div className="text-left font-mono">
                  <div className="text-[7.5px] text-[#F8F5EE]/40 uppercase tracking-widest">INSTAGRAM</div>
                  <div className="text-[9.5px] text-[#F8F5EE] font-bold">@anandapoet_</div>
                </div>
              </a>

              <a
                href="https://wa.me/62895347253517"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-[#1c1c1c] border border-white/5 hover:border-[#D4AF37]/40 p-4 rounded transition-all group"
              >
                <div className="h-8 w-8 rounded-full bg-[#050505] flex items-center justify-center text-[#D4AF37] group-hover:bg-[#7A0000]/20 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="text-left font-mono">
                  <div className="text-[7.5px] text-[#F8F5EE]/40 uppercase tracking-widest">WHATSAPP</div>
                  <div className="text-[9.5px] text-[#F8F5EE] font-bold">+62 895 3472 53517</div>
                </div>
              </a>

              <a
                href="mailto:anandaputri1381@gmail.com"
                className="flex items-center gap-3 bg-[#1c1c1c] border border-white/5 hover:border-[#D4AF37]/40 p-4 rounded transition-all group"
              >
                <div className="h-8 w-8 rounded-full bg-[#050505] flex items-center justify-center text-[#D4AF37] group-hover:bg-[#7A0000]/20 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="text-left font-mono">
                  <div className="text-[7.5px] text-[#F8F5EE]/40 uppercase tracking-widest">EMAIL</div>
                  <div className="text-[9.5px] text-[#F8F5EE] font-bold overflow-hidden text-ellipsis whitespace-nowrap max-w-[120px]">
                    anandaputri1381@gmail.com
                  </div>
                </div>
              </a>

            </div>

          </div>

        </div>

        {/* Brand Collaborations section */}
        <div className="border-t border-white/5 pt-12 space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="h-3 w-3 text-[#D4AF37]" />
            <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-[#D4AF37] font-bold">
              BRANDS I'VE WORKED WITH
            </span>
          </div>

          {/* Luxury Brand Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden group bg-[#080808] border border-white/5 hover:border-[#D4AF37]/35 py-6 px-4 rounded text-center transition-all duration-300 hover:-translate-y-0.5 shadow-md flex flex-col items-center justify-center gap-3"
              >
                <div className="absolute inset-x-0 bottom-0 h-[1.5px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-350 ease-out origin-center" />
                <div className="text-[#D4AF37]/65 group-hover:text-[#D4AF37] transition-all duration-300 group-hover:scale-105">
                  {brand.logo}
                </div>
                <div>
                  <span className="block font-serif text-sm font-semibold tracking-wider text-[#F8F5EE] group-hover:text-[#D4AF37] transition-colors uppercase">
                    {brand.name}
                  </span>
                  <span className="block font-mono text-[7px] text-[#F8F5EE]/30 uppercase tracking-widest mt-1">
                    {brand.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
