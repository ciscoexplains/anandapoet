/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

export default function AudioEngine() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);
  const lfoRef = useRef<OscillatorNode | null>(null);

  const startOrchestralPad = () => {
    try {
      // Create audio context if it doesn't exist
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }

      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Master gain node for smooth fading
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, ctx.currentTime);
      // Volume fade in
      masterGain.gain.linearRampToValueAtTime(0.35, ctx.currentTime + 3.0);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Create a warm lowpass filter to emulate sub-bass analog strings
      const lowpassFilter = ctx.createBiquadFilter();
      lowpassFilter.type = 'lowpass';
      lowpassFilter.frequency.setValueAtTime(320, ctx.currentTime);
      lowpassFilter.Q.setValueAtTime(4, ctx.currentTime);
      lowpassFilter.connect(masterGain);

      // We synthesize an elegant C Min9 open-voiced drone chord
      // Notes: C2 (65.41 Hz), G2 (98.00 Hz), C3 (130.81 Hz), Eb3 (155.56 Hz), Bb3 (233.08 Hz), D4 (293.66 Hz)
      const freqs = [65.41, 98.00, 130.81, 155.56, 233.08, 293.66];
      const oscillators: OscillatorNode[] = [];

      freqs.forEach((freq, idx) => {
        // We use a mix of sawtooth and triangle waves per voice for rich harmonic texture
        const oscSaw = ctx.createOscillator();
        const oscTri = ctx.createOscillator();
        const voiceGain = ctx.createGain();

        oscSaw.type = 'sawtooth';
        oscTri.type = 'triangle';

        oscSaw.frequency.setValueAtTime(freq, ctx.currentTime);
        // Slightly detune the voices to create rich luxury chorus effect
        oscSaw.detune.setValueAtTime((idx % 2 === 0 ? 5 : -5), ctx.currentTime);
        
        oscTri.frequency.setValueAtTime(freq * 0.998, ctx.currentTime);
        oscTri.detune.setValueAtTime((idx % 2 === 0 ? -12 : 12), ctx.currentTime);

        // Balance gains between saws and triangles (triangles add warmth, saws add brightness)
        voiceGain.gain.setValueAtTime(0.12, ctx.currentTime);

        oscSaw.connect(voiceGain);
        oscTri.connect(voiceGain);
        voiceGain.connect(lowpassFilter);

        oscSaw.start();
        oscTri.start();

        oscillators.push(oscSaw);
        oscillators.push(oscTri);
      });

      // LFO (Low-Frequency Oscillator) to modulate filter sweep, giving breathing cinematic effect
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.15, ctx.currentTime); // very slow: 0.15 Hz
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(140, ctx.currentTime); // sweep range

      lfo.connect(lfoGain);
      lfoGain.connect(lowpassFilter.frequency);
      lfo.start();

      lfoRef.current = lfo;
      oscillatorsRef.current = oscillators;
      setIsPlaying(true);
    } catch (e) {
      console.error('Audio synthesis failed to initialize:', e);
    }
  };

  const stopOrchestralPad = () => {
    const ctx = audioContextRef.current;
    const masterGain = gainNodeRef.current;

    if (ctx && masterGain) {
      // Fade out volume first
      masterGain.gain.setValueAtTime(masterGain.gain.value, ctx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.2);

      setTimeout(() => {
        // Stop and clean up all nodes after fading completes
        oscillatorsRef.current.forEach((osc) => {
          try {
            osc.stop();
          } catch (e) {}
        });
        oscillatorsRef.current = [];

        if (lfoRef.current) {
          try {
            lfoRef.current.stop();
          } catch (e) {}
          lfoRef.current = null;
        }

        setIsPlaying(false);
      }, 1300);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopOrchestralPad();
    } else {
      startOrchestralPad();
    }
  };

  // Clean up nodes on unmount
  useEffect(() => {
    return () => {
      oscillatorsRef.current.forEach((osc) => {
        try {
          osc.stop();
        } catch (e) {}
      });
      if (lfoRef.current) {
        try {
          lfoRef.current.stop();
        } catch (e) {}
      }
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div id="ambient-audio-control" className="fixed bottom-8 left-8 z-50 flex items-center gap-3">
      <button
        onClick={toggleSound}
        className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#050505]/85 text-[#D4AF37] shadow-lg backdrop-blur-md transition-all hover:border-[#D4AF37] hover:bg-[#7A0000]/20"
        title={isPlaying ? "Mute Ambience" : "Play Orchestral Ambience"}
      >
        {isPlaying ? (
          <Volume2 className="h-4 w-4 animate-pulse text-[#D4AF37]" />
        ) : (
          <VolumeX className="h-4 w-4 text-[#D4AF37]/60 group-hover:text-[#D4AF37]" />
        )}
      </button>

      {isPlaying && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-1 bg-[#050505]/70 px-3 py-1.5 rounded-full border border-[#D4AF37]/10"
        >
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#D4AF37]">
            ORCHESTRAL AMBIENCE
          </span>
          <div className="flex items-end gap-0.5 h-2.5 w-4 ml-2">
            <span className="w-0.5 bg-[#D4AF37] animate-[soundBar_1.2s_infinite_ease-in-out_0.1s]" style={{ height: '30%' }} />
            <span className="w-0.5 bg-[#7A0000] animate-[soundBar_1s_infinite_ease-in-out_0.4s]" style={{ height: '80%' }} />
            <span className="w-0.5 bg-[#D4AF37] animate-[soundBar_1.4s_infinite_ease-in-out_0.2s]" style={{ height: '50%' }} />
            <span className="w-0.5 bg-[#7A0000] animate-[soundBar_1.1s_infinite_ease-in-out_0.6s]" style={{ height: '90%' }} />
          </div>
        </motion.div>
      )}
    </div>
  );
}
