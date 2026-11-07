'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SeatAllocationContent() {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'id';
  
  // Deteksi nama tamu, jika tidak ada, gunakan default sesuai bahasa
  const defaultName = lang === 'en' ? 'Our Honored Guest' : 'Tamu Kehormatan';
  const guestName = searchParams.get('to') || defaultName;
  const seatCount = searchParams.get('pax') || '1';

  return (
    <div className="bg-forest py-20 text-center px-6">
      <h3 className="text-4xl md:text-5xl font-vibes text-champagne mb-2 drop-shadow-sm">
        {lang === 'en' ? 'Reservation Details' : 'Detail Reservasi'}
      </h3>
      <p className="text-[10px] text-offwhite/80 uppercase tracking-[0.3em] font-bold mb-10">
        {lang === 'en' ? 'ATTENDANCE INFORMATION' : 'INFORMASI KEHADIRAN'}
      </p>

      <div className="border border-champagne/30 rounded-lg p-8 md:p-12 max-w-md mx-auto bg-forest/80 backdrop-blur-sm text-offwhite shadow-lg">
        <p className="text-sm mb-4">
          {lang === 'en' ? 'Dear' : 'Kepada Yth.'} <span className="text-champagne font-bold uppercase tracking-wider">{guestName}</span>,
        </p>
        
        <p className="text-sm font-light leading-relaxed mb-8">
          {lang === 'en' 
            ? 'We joyfully anticipate your presence at our wedding reception. Please note that we have reserved:' 
            : 'Kami sangat menantikan kehadiran Anda pada acara resepsi pernikahan kami. Kami telah mengalokasikan:'}
        </p>

        <div className="text-6xl font-serif text-champagne mb-4 drop-shadow-md">
          {seatCount}
        </div>
        
        <p className="text-[10px] uppercase tracking-widest text-offwhite/80">
          {lang === 'en' ? 'SEAT(S) IN YOUR HONOR' : 'KURSI UNTUK ANDA'}
        </p>
      </div>
    </div>
  );
}

export default function SeatAllocation() {
  return (
    <Suspense fallback={<div className="bg-forest py-20 text-center text-champagne">Loading reservation...</div>}>
      <SeatAllocationContent />
    </Suspense>
  );
}