'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SeatInfo() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get('to') || 'Our Honored Guest';
  const seatCount = searchParams.get('pax') || '1'; 

  return (
    <div className="w-full text-center px-6 py-20 bg-forest text-offwhite border-y border-champagne/20">
      <h3 className="text-4xl font-vibes text-champagne mb-2">Reservation Details</h3>
      <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-offwhite/60 mb-10">
        Attendance Information
      </p>
      
      <div className="max-w-md mx-auto border border-champagne/30 p-8 rounded-lg bg-forest/50 backdrop-blur-sm shadow-lg">
        <p className="text-sm font-light leading-relaxed mb-4 text-offwhite/90">
          Dear <span className="font-bold text-champagne uppercase tracking-wider">{guestName}</span>,
        </p>
        <p className="text-xs md:text-sm font-light leading-relaxed mb-8 text-offwhite/80">
          We joyfully anticipate your presence at our wedding reception. 
          Please note that we have reserved:
        </p>
        
        <div className="text-6xl font-serif text-champagne mb-4 drop-shadow-md">
          {seatCount}
        </div>
        
        <p className="text-[10px] uppercase tracking-widest text-offwhite/80">
          Seat(s) In Your Honor
        </p>
      </div>
    </div>
  );
}

export default function SeatAllocation() {
  return (
    <Suspense fallback={<div className="bg-forest py-20 text-center text-champagne">Loading reservation...</div>}>
      <SeatInfo />
    </Suspense>
  );
}