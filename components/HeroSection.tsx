'use client';

import FallingPetals from './FallingPetals';

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-forest overflow-hidden">
      
      {/* Efek Kelopak Jatuh */}
      <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
        <FallingPetals />
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <p className="text-[10px] md:text-xs text-champagne uppercase tracking-[0.3em] font-bold mb-4">
          Wedding Reception
        </p>
        
        <h1 className="text-6xl md:text-7xl font-vibes text-offwhite mb-6 drop-shadow-md">
          Larry & Tifena
        </h1>
        
        {/* Garis Pemisah Emas */}
        <div className="w-12 h-[1px] bg-champagne/70 mb-6"></div>
        
        <p className="text-sm md:text-base text-offwhite/90 font-light tracking-widest">
          November 17th, 2026
        </p>
      </div>
    </div>
  );
}