'use client';

import { useEffect, useState } from 'react';

export default function CoverScreen({ onOpen, isOpened }: { onOpen: () => void, isOpened: boolean }) {
  const [guestName, setGuestName] = useState('Bapak/Ibu/Saudara/i');
  const [currentImage, setCurrentImage] = useState(0);

  // Daftar foto yang akan berganti-ganti (bisa ditambah/dikurangi)
  // Pastikan nama file ini sudah ada di dalam folder 'public'
  const coverPhotos = [
    '/cover.jpg',
    '/gallery-1.jpg',
    '/gallery-2.jpg',
    '/gallery-3.jpg',
    '/parallax.jpg'
  ];

  // Efek untuk mengganti foto setiap 4 detik (4000 milidetik)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % coverPhotos.length);
    }, 4000); 
    
    return () => clearInterval(interval);
  },); // Hapus array dependensi agar interval aman

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (to) setGuestName(to);
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-start justify-end p-10 overflow-hidden bg-forest">
       
       {/* Background Slider: Tumpukan gambar dengan transisi Fade */}
       {coverPhotos.map((photo, index) => (
         <div
           key={index}
           className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
             index === currentImage ? 'opacity-100' : 'opacity-0'
           }`}
           style={{ backgroundImage: `url('${photo}')` }}
         ></div>
       ))}

       {/* Overlay Gradasi Hitam agar teks tetap terbaca */}
       <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-0"></div>
       
       {/* Konten Teks & Tombol */}
       <div className="relative z-10 flex flex-col w-full text-left animate-fade-in mb-8">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-2 text-champagne font-bold shadow-black drop-shadow-lg">
            The Wedding Of
          </p>
          
          <h1 className="text-6xl md:text-7xl font-vibes text-offwhite mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
            Larry & Tifena
          </h1>
          
          <div className="mb-8 drop-shadow-md">
            <p className="text-xs text-offwhite/80 mb-1 uppercase tracking-widest">Dear,</p>
            <p className="text-xl font-serif font-bold text-champagne">{guestName}</p>
          </div>
          
          {/* Tombol Open Invitation / RSVP */}
          {!isOpened && (
            <button 
              onClick={onOpen} 
              className="self-start px-8 py-3 bg-champagne text-forest text-[11px] uppercase tracking-[0.2em] font-bold rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(197,168,105,0.4)]"
            >
              Open Invitation
            </button>
          )}
       </div>
    </div>
  );
}