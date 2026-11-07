'use client';

import { useState, Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

function GalleryContent() {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'id';

  const totalPhotos = 45;
  const photos = Array.from({ length: totalPhotos }, (_, i) => `/gallery-${i + 1}.jpg`);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div className="w-full text-center px-6 py-16 bg-offwhite">
      <h3 className="text-4xl md:text-5xl font-vibes text-forest mb-2">
        {lang === 'en' ? 'Our Moments' : 'Momen Kami'}
      </h3>
      <p className="text-[10px] text-forest/70 uppercase tracking-[0.3em] font-bold mb-8">
        {lang === 'en' ? 'A Glimpse of Us' : 'Sekilas Tentang Kami'}
      </p>

      <div className="relative max-w-5xl mx-auto h-[65vh] md:h-[75vh] mt-10 border border-forest/10 rounded-sm">
        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-offwhite to-transparent z-10 pointer-events-none"></div>

        <div className="w-full h-full overflow-y-auto pb-16 pt-8 px-2 scrollbar-thin scrollbar-thumb-champagne scrollbar-track-transparent">
          <div className="columns-2 md:columns-3 gap-3 space-y-3">
            {photos.map((photo, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveImage(photo)}
                className="relative overflow-hidden rounded-lg break-inside-avoid cursor-pointer group shadow-sm bg-sage-200"
              >
                <Image 
                  src={photo} 
                  alt={`Gallery ${idx + 1}`} 
                  width={600}
                  height={800}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-forest/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-offwhite text-xs tracking-widest uppercase font-bold border border-offwhite/80 px-3 py-1 rounded-full backdrop-blur-xs">
                    {lang === 'en' ? 'View' : 'Lihat'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-offwhite to-transparent z-10 pointer-events-none"></div>
      </div>

      <p className="text-[9px] uppercase tracking-widest text-forest/50 mt-4 mb-8">
        {lang === 'en' ? 'Scroll inside to explore more' : 'Gulir ke dalam untuk melihat lebih banyak'}
      </p>

      {/* Lightbox Preview */}
      {activeImage && (
        <div 
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in cursor-pointer"
        >
          <div className="relative max-w-5xl max-h-[95vh] w-full flex items-center justify-center">
            <Image 
              src={activeImage} 
              alt="Fullscreen Preview"
              width={1200}
              height={1200}
              className="max-h-[90vh] max-w-full object-contain rounded-md shadow-2xl"
            />
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 text-offwhite bg-forest/80 w-10 h-10 rounded-full flex items-center justify-center text-lg font-light hover:bg-champagne hover:text-forest transition-all"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Gallery() {
  return (
    <Suspense fallback={<div className="py-16 bg-offwhite text-center text-forest">Loading gallery...</div>}>
      <GalleryContent />
    </Suspense>
  );
}