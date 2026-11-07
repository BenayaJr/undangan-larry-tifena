'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function DressCodeContent() {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'id';

  const colors = [
    { name: 'Forest', hex: '#1A2E24' },
    { name: 'Sage', hex: '#5C7665' },
    { name: 'Matcha', hex: '#88A090' },
    { name: 'Champagne', hex: '#C5A869' },
  ];

  return (
    <div className="w-full text-center px-6 py-16 bg-offwhite">
      <h3 className="text-4xl md:text-5xl font-vibes text-forest mb-2">
        {lang === 'en' ? 'Attire Guide' : 'Panduan Busana'}
      </h3>
      <p className="text-[10px] text-forest/70 uppercase tracking-[0.3em] font-bold mb-8">
        {lang === 'en' ? 'WHAT TO WEAR' : 'TEMA WARNA'}
      </p>

      <p className="text-xs italic text-forest/80 max-w-[300px] mx-auto mb-10 leading-relaxed font-serif">
        &quot;{lang === 'en' 
          ? 'We would love to see our family and friends coordinate with our wedding color palette. However, your presence is what matters most!' 
          : 'Kami akan sangat berbahagia jika keluarga dan sahabat berkenan hadir mengenakan warna senada dengan tema pernikahan kami. Namun, kehadiran Anda tetaplah yang paling bermakna!'}&quot;
      </p>

      <div className="flex flex-wrap justify-center gap-4 md:gap-5">
        {colors.map((color, idx) => (
          <div key={idx} className="flex flex-col items-center group">
            <div 
              className="w-10 h-10 rounded-full shadow-lg mb-3 border-[3px] border-offwhite group-hover:scale-110 transition-transform duration-300"
              style={{ backgroundColor: color.hex }}
            ></div>
            <span className="text-[9px] uppercase tracking-widest text-forest/60 font-bold">
              {color.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DressCode() {
  return (
    <Suspense fallback={<div className="py-16 bg-offwhite text-center text-forest">Loading attire guide...</div>}>
      <DressCodeContent />
    </Suspense>
  );
}