'use client';

import { useEffect, useState } from 'react';

export default function CoverScreen({ onOpen, isOpened }: { onOpen: () => void, isOpened: boolean }) {
  const [guestName, setGuestName] = useState('Bapak/Ibu/Saudara/i');
  const [lang, setLang] = useState('id');
  const [currentImage, setCurrentImage] = useState(0);

  // Daftar foto yang akan berganti-ganti
  const coverPhotos = [
    '/cover.jpg',
    '/gallery-1.jpg',
    '/gallery-2.jpg',
    '/gallery-3.jpg',
    '/parallax.jpg'
  ];

  // Efek untuk mengganti foto setiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % coverPhotos.length);
    }, 4000); 
    
    return () => clearInterval(interval);
  }, []); // Typo dependensi array sudah diperbaiki

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    const urlLang = params.get('lang') || 'id';
    
    // Setel bahasa dan nama tamu
    setLang(urlLang);
    if (to) {
      setGuestName(to);
    } else {
      // Nama default menyesuaikan bahasa
      setGuestName(urlLang === 'en' ? 'Our Honored Guest' : 'Bapak/Ibu/Saudara/i');
    }
  }, []);

  return (
    // Mengganti h-screen menjadi h-[100dvh] dan memperbesar padding bawah (pb-20)
    <div className="relative w-full h-[100dvh] flex flex-col items-start justify-end p-8 pb-20 md:p-10 md:pb-16 overflow-hidden bg-forest">
       
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
       <div className="relative z-10 flex flex-col w-full text-left animate-fade-in mb-4 md:mb-8">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-2 text-champagne font-bold shadow-black drop-shadow-lg">
            The Wedding Of
          </p>
          
          <h1 className="text-6xl md:text-7xl font-vibes text-offwhite mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
            Larry & Tifena
          </h1>
          
          <div className="mb-8 drop-shadow-md">
            <p className="text-xs text-offwhite/80 mb-1 uppercase tracking-widest">
              {lang === 'en' ? 'Dear,' : 'Kepada Yth,'}
            </p>
            <p className="text-xl font-serif font-bold text-champagne">{guestName}</p>
          </div>
          
          {/* Tombol Open Invitation / RSVP */}
          {!isOpened && (
            <button 
              onClick={onOpen} 
              className="self-start px-8 py-3 bg-champagne text-forest text-[11px] uppercase tracking-[0.2em] font-bold rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(197,168,105,0.4)]"
            >
              {lang === 'en' ? 'Open Invitation' : 'Buka Undangan'}
            </button>
          )}
       </div>
    </div>
  );
}