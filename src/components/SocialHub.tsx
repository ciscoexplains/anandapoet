/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, Youtube, Compass, Eye, Heart, Sparkles, MessageCircle, ExternalLink } from 'lucide-react';

export default function SocialHub() {
  const [activeTab, setActiveTab] = useState<'instagram' | 'tiktok' | 'behance'>('instagram');

  // Realistic luxurious mock post images curated for ANANDAPOET branding
  const mockInstagramPosts = [
    {
      id: 'ig-1',
      likes: '14.2K',
      comments: '342',
      imageUrl: `${import.meta.env.BASE_URL}assets/F1D10215-2A3A-4093-A386-2958CA6E3E95.JPG`,
      tag: '@anandapoet Milan Fashion Week openings'
    },
    {
      id: 'ig-2',
      likes: '8.9K',
      comments: '110',
      imageUrl: `${import.meta.env.BASE_URL}assets/IMG_3392.JPG`,
      tag: 'Studio chiaroscuro study with Elena Rostova'
    },
    {
      id: 'ig-3',
      likes: '22.1K',
      comments: '580',
      imageUrl: `${import.meta.env.BASE_URL}assets/53A15401-71F6-4139-B030-8ABBF64BB7DA.jpg`,
      tag: 'Exclusive Golden Weave campaigns for Balmain Paris'
    },
    {
      id: 'ig-4',
      likes: '11.8K',
      comments: '202',
      imageUrl: `${import.meta.env.BASE_URL}assets/IMG_8935.jpg`,
      tag: 'Backstage details, bespoke Tom Ford suits'
    }
  ];

  return (
    <div
      id="social-hub-section"
      className="relative w-full bg-[#111111] py-24 px-6 md:px-12 border-b border-[#F8F5EE]/5"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-8 bg-[#7A0000]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#D4AF37]">
                SARTORIAL METRICS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl tracking-widest text-[#F8F5EE] uppercase">
              SOCIAL CHANNELS
            </h2>
          </div>
          
          <div className="flex items-center gap-4 text-xs font-mono text-[#D4AF37]">
            <Sparkles className="h-4 w-4 animate-spin" style={{ animationDuration: '6s' }} />
            <span>@ANANDAPOET OFFICIAL CHANNEL REGISTER</span>
          </div>
        </div>

        {/* Bento Grid layout for social media accounts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Box 1 - Instagram Feed Grid Preview (Runs 6 columns) */}
          <div className="lg:col-span-8 bg-[#050505] p-6 sm:p-8 border border-white/5 shadow-2xl relative rounded space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full border border-[#D4AF37]/50 bg-[#111111] flex items-center justify-center text-[#D4AF37]">
                  <Instagram className="h-5 w-5" />
                </div>
                <div className="text-left font-mono">
                  <span className="text-white text-xs block font-bold uppercase">INSTAGRAM STUDIO FEED</span>
                  <span className="text-[#D4AF37] text-[9px] uppercase tracking-widest">354K COUTURE FOLLOWERS</span>
                </div>
              </div>

              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1 text-[9px] font-mono text-[#D4AF37] hover:text-white transition-colors"
              >
                VISIT SYSTEM PROFILE <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Instagram photos block */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {mockInstagramPosts.map((post) => (
                <div
                  key={post.id}
                  className="relative group overflow-hidden bg-[#111111] border border-white/5 rounded aspect-square cursor-pointer"
                >
                  <img
                    src={post.imageUrl}
                    alt={post.tag}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500 ease-out brightness-90"
                  />
                  
                  {/* Hover stats overlays */}
                  <div className="absolute inset-0 bg-black/85 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center space-y-2 text-center p-3">
                    <div className="flex items-center gap-1 text-xs text-[#D4AF37]">
                      <Heart className="h-3.5 w-3.5 fill-[#D4AF37]" /> {post.likes}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-white/80">
                      <MessageCircle className="h-3.5 w-3.5" /> {post.comments}
                    </div>
                    <div className="h-[1px] w-8 bg-[#D4AF37]/25" />
                    <p className="font-sans text-[8.5px] leading-tight text-white/50 lowercase">
                      {post.tag}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Box 2 - Creative Documentaries & Video Series (Runs 4 columns) */}
          <div className="lg:col-span-4 bg-[#050505] p-6 sm:p-8 border border-white/5 shadow-2xl relative rounded flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="h-10 w-10 rounded-full border border-[#D4AF37]/50 bg-[#111111] flex items-center justify-center text-[#D4AF37]">
                  <Youtube className="h-5 w-5" />
                </div>
                <div className="text-left font-mono">
                  <span className="text-white text-xs block font-bold uppercase">CINEMATIC DIARIES</span>
                  <span className="text-white/40 text-[9px] uppercase tracking-widest">YOUTUBE CAMPAIGNS</span>
                </div>
              </div>

              {/* Documentary Card Link */}
              <div className="relative border border-white/5 bg-[#111111] group rounded overflow-hidden cursor-pointer">
                <img
                  src={`${import.meta.env.BASE_URL}assets/0b641165-ba33-43c3-9952-01652d0dd2ba.jpg`}
                  alt="YouTube Documentaries"
                  referrerPolicy="no-referrer"
                  className="w-full h-44 object-cover filter grayscale contrast-125 brightness-50 group-hover:brightness-40 group-hover:scale-102 transition-all duration-500"
                />

                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="h-11 w-11 rounded-full border border-[#D4AF37]/50 bg-black/60 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#7A0000] group-hover:text-white transition-colors">
                    <Youtube className="h-5 w-5 fill-current" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <p className="font-mono text-[8px] uppercase text-[#D4AF37] tracking-wider font-bold">EXHIBITION SHORT_FILM • 18 MINS</p>
                  <p className="font-serif text-sm font-bold text-white tracking-wide">"THE METAMORPHOSIS OF FORM"</p>
                </div>
              </div>
            </div>

            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border border-[#D4AF37]/20 hover:border-[#D4AF37] bg-[#111111] hover:bg-[#7A0000]/15 text-[#D4AF37] hover:text-white py-3 text-xs font-mono tracking-widest transition-all rounded mt-6"
            >
              SUBSCRIBE TO DIRECTORS CUT
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
