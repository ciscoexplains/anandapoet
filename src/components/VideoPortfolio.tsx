/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Film, X, Volume2, Maximize2, Tv, Sparkles, Clock } from 'lucide-react';
import { VIDEO_PORTFOLIO_ITEMS } from '../data/portfolioData';
import { VideoItem } from '../types';

export default function VideoPortfolio() {
  const [hoveredVideoId, setHoveredVideoId] = useState<string | null>(null);
  const [activeTheaterVideo, setActiveTheaterVideo] = useState<VideoItem | null>(null);
  const [cinematicBeat, setCinematicBeat] = useState(0);

  // Animate mock subtitles/frames in theater block for high immersion
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (activeTheaterVideo) {
      interval = setInterval(() => {
        setCinematicBeat(prev => (prev + 1) % 4);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [activeTheaterVideo]);

  const mockSubtitles = [
    "[ INSTRUMENTAL ORKESTRA KLASIK DIMULAI ]",
    "ANANDAPOET: \"Jiwa sebuah karakter tidak lahir dari dialog... melainkan dari tatapan batin.\"",
    "[ SOROT LAMPU STROBO DI BALIK LAYAR ]",
    "[ GONG MONOLOG BERGEMA PERLAHAN ]"
  ];

  return (
    <div
      id="cinematic-videos-section"
      className="relative w-full bg-[#050505] py-24 px-6 md:px-12 border-b border-[#F8F5EE]/5"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-8 bg-[#7A0000]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#D4AF37]">
                CINEMATIC reels
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl tracking-widest text-[#F8F5EE] uppercase">
              REEL & FILMS
            </h2>
          </div>
          
          <div className="flex items-center gap-2 border border-white/10 bg-[#111111] px-4 py-2 rounded select-none text-[9.5px] font-mono text-[#F8F5EE]/50">
            <Film className="h-4 w-4 text-[#D4AF37]" />
            <span>HOVER INDIVIDUAL CARDS FOR SILENT LOOP PREVIEW</span>
          </div>
        </div>

        {/* Video Reels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VIDEO_PORTFOLIO_ITEMS.map((video) => {
            const isHovered = hoveredVideoId === video.id;
            
            return (
              <div
                key={video.id}
                onMouseEnter={() => setHoveredVideoId(video.id)}
                onMouseLeave={() => setHoveredVideoId(null)}
                onClick={() => setActiveTheaterVideo(video)}
                className="relative group border border-white/5 bg-[#111111] overflow-hidden shadow-2xl transition-all duration-500 cursor-pointer rounded h-[280px]"
              >
                {/* Visual Glow Layer */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
                <div className="absolute inset-0 z-10 border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/35 transition-all duration-500 rounded pointer-events-none" />

                {/* Simulated Hover Video Zoom-Panning */}
                <div className="absolute inset-0 z-0 select-none overflow-hidden h-full w-full">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    referrerPolicy="no-referrer"
                    className={`h-full w-full object-cover filter grayscale brightness-75 contrast-125 transition-all duration-700 select-none ${
                      isHovered ? 'scale-115 translate-x-2 translate-y-1 grayscale-0 brightness-50' : 'scale-100'
                    }`}
                  />
                  
                  {/* Subtle pulsing red glare overlay when hovered */}
                  {isHovered && (
                    <div className="absolute inset-0 bg-[#7A0000]/15 mix-blend-overlay z-10 animate-pulse" />
                  )}
                </div>

                {/* Time stamps & Format details */}
                <div className="absolute top-4 left-4 z-20 flex gap-2 font-mono text-[8px] uppercase select-none">
                  <span className="bg-[#7A0000]/90 border border-[#D4AF37]/30 text-white px-2.5 py-1 rounded">
                    {video.type}
                  </span>
                  <span className="bg-[#050505]/85 border border-[#D4AF37]/10 text-[#D4AF37] px-2.5 py-1 rounded flex items-center gap-1">
                    <Clock className="h-2.5 w-2.5" /> {video.duration}
                  </span>
                </div>

                {/* Central Play Button and Visualizer Loop */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className="relative flex items-center justify-center h-14 w-14 rounded-full border border-[#D4AF37]/35 bg-black/60 group-hover:bg-[#7A0000] text-[#D4AF37] group-hover:text-white group-hover:border-white transition-all scale-95 group-hover:scale-105 shadow-xl">
                    {/* Ring Visual Tracker bars spinning on hover */}
                    {isHovered && (
                      <div className="absolute -inset-1 rounded-full border-1 border-dashed border-[#D4AF37] animate-spin" style={{ animationDuration: '4s' }} />
                    )}
                    <Play className="h-5 w-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Video Info overlay at bottom */}
                <div className="absolute bottom-6 inset-x-6 z-20 space-y-2 select-none text-left">
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#D4AF37]">
                    YEAR COLLECTED: {video.year}
                  </span>
                  <h3 className="font-serif text-xl font-bold tracking-widest text-[#F8F5EE]">
                    {video.title}
                  </h3>
                  <p className="font-sans text-[11px] text-[#F8F5EE]/60 max-w-sm line-clamp-1">
                    {video.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Immersive Theater Video Projection Portal */}
      <AnimatePresence>
        {activeTheaterVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-[#050505]/99 backdrop-blur-lg flex flex-col justify-start md:justify-center items-center"
          >
            {/* Ambient projection lights */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7A0000]/15 w-[600px] h-[600px] blur-[150px] pointer-events-none" />

            <div className="min-h-full w-full flex items-center justify-center py-16 md:py-4 px-2 md:px-8">
              <div className="relative max-w-4xl w-full flex flex-col justify-center items-center space-y-6 z-30 select-none">
                
                {/* Theater Frame Headers */}
                <div className="w-full flex items-center justify-between border-b border-white/10 pb-4 font-mono text-[9.5px]">
                  <span className="flex items-center gap-2 text-[#D4AF37]">
                    <Tv className="h-4 w-4" /> CAMPAIGN PROJECTOR ACT_IV
                  </span>
                  <span className="text-white/40">ANANDAPOET CINEMATIC BRAND REEL</span>
                  <button
                    onClick={() => setActiveTheaterVideo(null)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/70 hover:text-white hover:border-[#D4AF37] transition-all"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Virtual Screen projecting high fashion slides */}
                <div className="relative w-full aspect-video border-[12px] border-[#111111] bg-[#000] overflow-hidden shadow-[0_0_100px_rgba(122,0,0,0.3)] flex justify-center items-center">
                  
                  {/* Horizontal scanner beam overlay scanlines */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] z-20 pointer-events-none" />
                  
                  {/* Visual projection filter glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#7A0000]/10 via-transparent to-[#D4AF37]/5 z-10 pointer-events-none" />

                  {/* Animated Simulated film frames panning on a custom scheduler */}
                  <motion.div
                    key={cinematicBeat}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 0.9, scale: 1.15 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 4.8, ease: 'easeOut' }}
                    className="absolute inset-0"
                  >
                    <img
                      src={activeTheaterVideo.thumbnailUrl}
                      alt={activeTheaterVideo.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter grayscale contrast-150 brightness-75 animate-[cinematicMotion_20s_infinite_linear]"
                    />
                  </motion.div>

                  {/* Sound indicator layer */}
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-[#050505]/70 border border-[#D4AF37]/20 px-2.5 py-1 rounded text-[#D4AF37] text-[8px] font-mono">
                    <Volume2 className="h-3 w-3 animate-pulse" />
                    <span>SIMULATED STEREO AUDIO ACTIVE</span>
                  </div>

                  {/* Cinematic Subtitle Box centered inside projector screen */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 max-w-xl text-center select-none bg-[#050505]/85 border border-[#D4AF37]/20 px-5 py-2.5 rounded-sm">
                    <p className="font-mono text-[9px] sm:text-[10px] tracking-wide text-[#F8F5EE] leading-normal uppercase">
                      {mockSubtitles[cinematicBeat]}
                    </p>
                  </div>

                  {/* Vignette letterboxing border */}
                  <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.95)] z-20 pointer-events-none" />
                </div>

                {/* Theater metadata stats */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-left py-4 border-t border-white/10">
                  <div className="space-y-1 font-mono text-[10px]">
                    <span className="text-white/40 block">CAMPAIGN TITLE</span>
                    <span className="text-white uppercase font-bold text-xs">{activeTheaterVideo.title}</span>
                  </div>
                  <div className="space-y-1 font-mono text-[10px]">
                    <span className="text-white/40 block">DIRECT DETAILS</span>
                    <span className="text-[#D4AF37] text-[10.5px] block">{activeTheaterVideo.description}</span>
                  </div>
                  <div className="space-y-1 font-mono text-[10px]">
                    <span className="text-white/40 block">SPECIFICATIONS</span>
                    <span className="text-white uppercase text-xs">FORMAT: 2.39:1 CINEMASCOPE</span>
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
