'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function EventDetailsContent() {
  // Mengambil parameter bahasa dari URL, default ke 'id' (Indonesia)
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'id';

  const gCalLink = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Resepsi+Pernikahan%3A+Larry+%26+Tifena&dates=20261117T110000Z/20261117T140000Z&details=Merupakan+suatu+kehormatan+dan+kebahagiaan+bagi+kami+apabila+Bapak%2FIbu%2FSaudara%28i%29+berkenan+hadir.&location=Restaurant+Bamboodent+1,+Makassar,+South+Sulawesi";

  return (
    <div className="w-full py-20 px-6 bg-offwhite text-center flex flex-col items-center">
      
      {/* Ibadah Pemberkatan */}
      <div className="flex flex-col items-center justify-center text-center mb-16 w-full max-w-md mx-auto relative">
        <h3 className="text-4xl md:text-5xl font-vibes text-forest mb-8">
          {lang === 'en' ? 'Holy Matrimony' : 'Ibadah Pemberkatan'}
        </h3>
        
        <div className="w-full border-y border-champagne/50 py-10 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-champagne rotate-45"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-champagne rotate-45"></div>

          <p className="text-forest font-bold uppercase tracking-[0.2em] text-sm mb-2">
            {lang === 'en' ? 'Saturday' : 'Sabtu'}
          </p>
          <p className="text-5xl md:text-6xl font-serif text-champagne mb-2 drop-shadow-sm">14</p>
          <p className="text-forest uppercase tracking-widest text-xs mb-8">
            {lang === 'en' ? 'November 2026' : 'November 2026'} <br/> 
            09:30 AM - 01:00 PM ({lang === 'en' ? 'Malaysia Time' : 'Waktu Malaysia'})
          </p>

          <h4 className="font-serif text-forest text-lg mb-2 px-4">Petaling Jaya Evangelical Free Church</h4>
          <p className="text-xs text-forest/70 leading-relaxed font-light mb-8">
            3, Jln 13/6, Seksyen 13, 46200 <br/>
            Petaling Jaya, Selangor, Malaysia
          </p>

          <a href="https://maps.google.com/?q=Petaling+Jaya+Evangelical+Free+Church" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-2 border border-forest/60 text-forest text-[9px] font-bold uppercase tracking-widest rounded-full hover:bg-forest hover:text-offwhite transition-all duration-300">
            View Map
          </a>
        </div>
      </div>

      <div className="w-16 h-[1px] bg-champagne mb-16"></div>

      {/* Resepsi Pernikahan */}
      <h3 className="text-4xl md:text-5xl font-vibes text-forest mb-4">
        {lang === 'en' ? 'Wedding Reception' : 'Resepsi Pernikahan'}
      </h3>
      
      <div className="bg-white border border-champagne/30 p-8 md:p-12 rounded-t-full shadow-sm max-w-md w-full relative mb-16 mt-6">
        <p className="text-forest font-bold uppercase tracking-widest text-sm mb-2">
          {lang === 'en' ? 'Tuesday' : 'Selasa'}
        </p>
        <p className="text-5xl font-serif text-champagne mb-2">17</p>
        <p className="text-forest uppercase tracking-widest text-xs mb-8">
          November 2026 <br/> 
          {lang === 'en' ? '07:00 PM (WITA) onwards' : '19:00 WITA s/d Selesai'}
        </p>

        <h4 className="font-serif text-forest text-lg mb-2">Restaurant Bamboodent 1</h4>
        <p className="text-xs text-forest/70 leading-relaxed font-light mb-10">
          {lang === 'en' ? 'Level 2' : 'Lantai 2'} <br/>
          Makassar, {lang === 'en' ? 'South Sulawesi' : 'Sulawesi Selatan'}
        </p>

        <div className="flex flex-col space-y-3 items-center w-full">
          <a href={gCalLink} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-champagne text-forest text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-forest hover:text-champagne transition-all duration-300 shadow-md w-full max-w-[220px]">
            Save the Date
          </a>
          <a href="https://maps.google.com/?q=Restaurant+Bamboodent+1+Makassar" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 border border-forest text-forest text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-forest hover:text-offwhite transition-all duration-300 w-full max-w-[220px]">
            View Map
          </a>
        </div>
      </div>

      {/* Teks Penutup */}
      <div className="max-w-md w-full text-center flex flex-col items-center">
        <p className="text-xs md:text-sm font-light text-forest/80 leading-relaxed font-serif italic mb-12">
          {lang === 'en' 
            ? `"It is an honor and joy to have you share in this special day. We sincerely thank you for your presence and blessings."`
            : `"Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara(i) berkenan hadir dan memberikan doa restu kepada kedua mempelai. Atas kehadirannya kami ucapkan terima kasih."`
          }
        </p>
        
        <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-forest/50 mb-6">
          {lang === 'en' ? 'Together with our families' : 'Kami yang berbahagia'}
        </p>
        
        <p className="text-sm font-medium text-forest mb-2">Kel. Pdt. Farry Tualangi, M.Th</p>
        <p className="text-sm font-medium text-forest mb-8">Kel. Pdt. Henry Hendra Tanujaya, M.Div</p>
        
        <p className="text-[9px] uppercase tracking-widest text-forest/50 mb-1">
          {lang === 'en' ? 'The Bride & Groom' : 'Kedua Mempelai'}
        </p>
        <p className="text-3xl font-vibes text-champagne">Larry &amp; Tifena</p>
      </div>
    </div>
  );
}

export default function EventDetails() {
  return (
    <Suspense fallback={<div className="py-20 bg-offwhite text-center text-forest">Loading event details...</div>}>
      <EventDetailsContent />
    </Suspense>
  );
}