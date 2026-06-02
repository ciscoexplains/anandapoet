/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { Award, Globe, Camera, Layers, Users } from 'lucide-react';

export default function Achievements() {
  const [photoshoots, setPhotoshoots] = useState(0);
  const [campaigns, setCampaigns] = useState(0);
  const [countries, setCountries] = useState(0);
  const [publications, setPublications] = useState(0);
  const [collaborations, setCollaborations] = useState(0);

  // Smooth luxury numeric incremental counters on initial mount
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;
    
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      
      setPhotoshoots(Math.min(Math.round((ACHIEVEMENTS.photoshoots / steps) * currentStep), ACHIEVEMENTS.photoshoots));
      setCampaigns(Math.min(Math.round((ACHIEVEMENTS.campaigns / steps) * currentStep), ACHIEVEMENTS.campaigns));
      setCountries(Math.min(Math.round((ACHIEVEMENTS.countries / steps) * currentStep), ACHIEVEMENTS.countries));
      setPublications(Math.min(Math.round((ACHIEVEMENTS.publications / steps) * currentStep), ACHIEVEMENTS.publications));
      setCollaborations(Math.min(Math.round((ACHIEVEMENTS.collaborations / steps) * currentStep), ACHIEVEMENTS.collaborations));
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const statItems = [
    {
      label: 'Sesi Foto Sukses',
      value: photoshoots,
      suffix: '+',
      icon: <Camera className="h-5 w-5 text-[#D4AF37]" />,
      desc: 'Pemotretan editorial dan konseptual bersama fotografer ternama.'
    },
    {
      label: 'Peran Akting',
      value: campaigns,
      suffix: '',
      icon: <Award className="h-5 w-5 text-[#7A0000]" />,
      desc: 'Daftar pemeran utama/pendukung dalam film independen, teater, dan iklan.'
    },
    {
      label: 'Lokasi Produksi',
      value: countries,
      suffix: '',
      icon: <Globe className="h-5 w-5 text-[#D4AF37]" />,
      desc: 'Pengalaman panggung dan syuting lintas kota seni budaya.'
    },
    {
      label: 'Publikasi Media',
      value: publications,
      suffix: '+',
      icon: <Layers className="h-5 w-5 text-[#7A0000]" />,
      desc: 'Fitur galeri, poster rilis film, kajian teater, dan majalah mode cetak.'
    },
    {
      label: 'Kolaborasi Kreatif',
      value: collaborations,
      suffix: '+',
      icon: <Users className="h-5 w-5 text-[#D4AF37]" />,
      desc: 'Kerja sama erat dengan para sutradara, kurator, dan pengarah artistik.'
    }
  ];

  return (
    <div
      id="achievements-section"
      className="relative w-full bg-[#050505] py-24 px-6 md:px-12 border-b border-[#F8F5EE]/5 overflow-hidden"
    >
      {/* Decorative vertical watermarks */}
      <div className="absolute right-10 bottom-0 pointer-events-none select-none opacity-5 font-serif font-black text-9xl text-white">
        VII_MMXXVI
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 select-none">
          <div className="inline-flex items-center gap-2">
            <span className="h-1 w-1 bg-[#D4AF37]" />
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]">
              EXCLUSIVITY BY NUMBERS
            </span>
            <span className="h-1 w-1 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl tracking-widest text-[#F8F5EE] uppercase">
            GLOBAL INFLUENCE
          </h2>
          <div className="h-[1px] w-24 bg-[#7A0000] mx-auto" />
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {statItems.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-[#111111] border border-[#F8F5EE]/5 p-6 space-y-4 hover:border-[#D4AF37]/30 transition-all duration-300 shadow-xl group rounded flex flex-col justify-between"
            >
              {/* Corner accent decorative markers */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#D4AF37]/20 group-hover:border-[#D4AF37]/60" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#D4AF37]/20 group-hover:border-[#D4AF37]/60" />

              <div className="space-y-4 text-left">
                {/* Icon header */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 border border-[#F8F5EE]/5 group-hover:border-[#D4AF37]/20 transition-all duration-300">
                  {item.icon}
                </div>

                {/* Big numbers glowing gold */}
                <div className="space-y-1">
                  <span className="font-serif text-4xl sm:text-5xl font-extrabold tracking-widest text-[#D4AF37] group-hover:text-white transition-colors">
                    {item.value}
                    <span className="text-[#7A0000] ml-0.5">{item.suffix}</span>
                  </span>
                  
                  <h3 className="font-mono text-[9px] uppercase tracking-widest text-[#F8F5EE] font-bold">
                    {item.label}
                  </h3>
                </div>
              </div>

              <p className="font-serif text-[10.5px] leading-relaxed text-[#F8F5EE]/50 pt-2 border-t border-white/5 text-left">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
