'use client';

import { useState, useEffect } from 'react';
import Preloader from '@/components/Preloader';
import CoverScreen from '@/components/CoverScreen';
import HeroSection from '@/components/HeroSection';
import MainContent from '@/components/MainContent';
import ParallaxQuote from '@/components/ParallaxQuote';
import EventDetails from '@/components/EventDetails';
import SeatAllocation from '@/components/SeatAllocation';
import DressCode from '@/components/DressCode';
import Gallery from '@/components/Gallery';
import Guestbook from '@/components/GuestBook';
import MusicPlayer from '@/components/MusicPlayer';
import FooterQuote from '@/components/FooterQuote';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  // Mencegah scroll saat masih loading atau cover tertutup
  useEffect(() => {
    if (isLoading || !isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading, isOpen]);

  return (
    <>
      {/* Layar Loading Sinematik */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      <main className="relative w-full min-h-screen bg-offwhite overflow-hidden flex">
        
        {/* KIRI: Cover Screen */}
        <div 
          className={`fixed top-0 left-0 h-full z-50 transition-all duration-1000 ease-in-out ${
            isOpen ? 'w-full md:w-1/2 -translate-y-full md:translate-y-0' : 'w-full'
          }`}
        >
          <CoverScreen onOpen={() => setIsOpen(true)} isOpened={isOpen} />
        </div>

        {/* KANAN: Konten Utama */}
        <div 
          className={`w-full md:w-1/2 absolute top-0 right-0 h-full overflow-y-auto transition-opacity duration-1000 ease-in-out ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <HeroSection />

          <div className="w-full bg-forest flex flex-col items-center justify-center py-16 px-8 text-center border-b border-champagne/10">
            <p className="text-[10px] text-champagne uppercase tracking-[0.3em] font-bold mb-6">Holy Matrimony</p>
            <p className="text-lg md:text-xl font-serif italic text-offwhite/90 mb-6 max-w-md leading-relaxed">
              &quot;The Lord has done great things for us; we are glad.&quot;
            </p>
            <p className="text-[9px] text-champagne uppercase tracking-[0.3em] font-bold">Psalms 126:3</p>
          </div>

          <MainContent />
          <ParallaxQuote />
          <EventDetails />
          <SeatAllocation />
          <DressCode />
          <Gallery />
          <Guestbook />

          {/* Kutipan Penutup di paling bawah */}
          <FooterQuote />
        </div>

        <MusicPlayer isOpened={isOpen} />
      </main>
    </>
  );
}