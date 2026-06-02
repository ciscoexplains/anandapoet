/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Eye } from 'lucide-react';

interface LandingScreenProps {
  onEnter: () => void;
}

export default function LandingScreen({ onEnter }: LandingScreenProps) {
  // Letters of the name for staggered cinematic animation
  const logoText = "ANANDAPOET".split("");

  return (
    <div
      id="landing-screen"
      className="relative z-50 flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Cinematic Blood-Red slow glowing radials */}
      <div className="absolute inset-x-0 top-1/4 -z-10 mx-auto h-[400px] w-[400px] rounded-full bg-[#7A0000] opacity-25 blur-[120px] animate-pulse" />
      <div className="absolute inset-x-0 bottom-1/4 -z-10 mx-auto h-[300px] w-[300px] rounded-full bg-[#D4AF37] opacity-10 blur-[130px] animate-pulse" style={{ animationDuration: '6s' }} />

      {/* Grid overlay for luxurious museum feeling */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      {/* Luxury Border Lines */}
      <div className="absolute inset-6 pointer-events-none border border-[#D4AF37]/10" />
      <div className="absolute inset-8 pointer-events-none border border-[#7A0000]/10" />

      {/* Header Stamp */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1">
        <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]/45">
          PRIVATE EXHIBITION
        </span>
        <div className="h-4 w-[1px] bg-[#D4AF37]/30" />
      </div>

      {/* Main Logo & Presentation */}
      <div className="flex flex-col items-center justify-center space-y-8 text-center max-w-xl px-6">
        {/* Animated Blood-Red Gold visual marker */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37]/25 bg-gradient-to-tr from-[#050505] to-[#111111] shadow-2xl"
        >
          <div className="absolute inset-1.5 rounded-full border border-[#7A0000]/40 animate-spin" style={{ animationDuration: '10s' }} />
          <span className="font-serif text-lg font-bold tracking-wider text-[#D4AF37]">A</span>
        </motion.div>

        <div>
          {/* Staggered ANANDAPOET text */}
          <h1 className="flex justify-center text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-[0.25em] text-[#F8F5EE] select-none pl-[0.25em]">
            {logoText.map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.3 + index * 0.1,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                className="inline-block hover:text-[#D4AF37] transition-colors"
              >
                {char}
              </motion.span>
            ))}
          </h1>

          {/* Subtitles with elegant line */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.6 }}
            className="mt-6 flex flex-col items-center"
          >
            <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
            <p className="mt-4 font-sans text-[11px] font-medium uppercase tracking-[0.45em] text-[#D4AF37]">
              AKTRIS & MODEL FOTOGRAFI
            </p>
            <p className="mt-2 text-xs font-serif italic text-[#F8F5EE]/60 tracking-wider">
              "Every image tells a story. Art is remembered. Beauty is witnessed."
            </p>
          </motion.div>
        </div>

        {/* Enter Prompt Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 2.2 }}
          className="pt-6"
        >
          <button
            onClick={onEnter}
            className="group relative flex items-center justify-center gap-3 overflow-hidden border border-[#D4AF37]/50 bg-gradient-to-r from-[#111111]/80 to-[#050505] px-10 py-4 font-mono text-[11px] uppercase tracking-[0.3em] text-[#D4AF37] shadow-xl backdrop-blur-sm transition-all hover:border-[#D4AF37] hover:text-[#F8F5EE] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
          >
            {/* Slide glow background effect */}
            <span className="absolute inset-0 z-0 bg-[#7A0000]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            
            <Eye className="relative z-10 h-3.5 w-3.5 text-[#D4AF37] group-hover:rotate-180 transition-transform duration-700" />
            <span className="relative z-10">ENTER THE GALLERY</span>
          </button>
          
          <p className="mt-4 text-[9px] font-mono tracking-widest text-[#D4AF37]/40">
            CLICK TO INITIATE SONIC STRINGS
          </p>
        </motion.div>
      </div>

      {/* Footer Stamp */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-8 flex flex-col items-center"
      >
        <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#F8F5EE]">
          MILAN • PARIS • NYC • TOKYO
        </span>
      </motion.div>
    </div>
  );
}
