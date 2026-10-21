'use client';

import { useEffect, useState } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Layar mulai memudar setelah 2 detik
    const timer1 = setTimeout(() => setFadeOut(true), 2000); 
    // Komponen sepenuhnya hilang setelah 2.8 detik
    const timer2 = setTimeout(() => onComplete(), 2800); 
    
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-forest flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Menggunakan font-serif yang bersih dan mewah */}
      <h1 className="text-5xl md:text-6xl font-serif text-champagne animate-pulse drop-shadow-md mb-5 tracking-widest flex items-center">
        L <span className="text-4xl md:text-5xl opacity-70 mx-3 font-light">&amp;</span> T
      </h1>
      
      <div className="w-12 h-[1px] bg-champagne/50 mb-6"></div>
      
      <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-champagne/80 animate-bounce">
        Curating memories...
      </p>
    </div>
  );
}