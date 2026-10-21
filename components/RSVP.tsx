'use client';

import { useState } from 'react';

export default function RSVP() {
  const [attendance, setAttendance] = useState<boolean | null>(null);
  const [guestCount, setGuestCount] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleConfirm = () => {
    if (attendance === null) return;
    setIsSubmitted(true);
    // Nanti di sini kita bisa sambungkan ke Firebase/Database sungguhan
  };

  return (
    <div className="w-full text-center px-6 py-16 bg-offwhite">
      <h3 className="text-sm font-medium text-dark uppercase tracking-widest mb-2">RSVP</h3>
      <p className="text-sm text-gray-600 mb-2">Please confirm your attendance before,</p>
      <p className="text-lg font-bold text-dark mb-8">Sep 06th, 2026</p>

      {!isSubmitted ? (
        <div className="max-w-sm mx-auto space-y-6">
          {/* Kehadiran */}
          <div className="bg-sage-500/10 p-5 rounded-xl border border-sage-200">
            <p className="text-sm text-dark font-medium mb-4">Will you be joining us to celebrate our wedding?</p>
            <div className="space-y-3">
              <button 
                onClick={() => setAttendance(true)}
                className={`w-full py-3 rounded-lg text-sm font-medium transition-colors border ${
                  attendance === true ? 'bg-sage-500 text-white border-sage-500' : 'bg-transparent text-dark border-sage-500 hover:bg-sage-200'
                }`}
              >
                Yes, I will attend!
              </button>
              <button 
                onClick={() => setAttendance(false)}
                className={`w-full py-3 rounded-lg text-sm font-medium transition-colors border ${
                  attendance === false ? 'bg-sage-500 text-white border-sage-500' : 'bg-transparent text-dark border-sage-500 hover:bg-sage-200'
                }`}
              >
                No, I can&apos;t attend.
              </button>
            </div>
          </div>

          {/* Jumlah Tamu (Hanya muncul jika hadir) */}
          {attendance && (
            <div className="bg-sage-500/10 p-5 rounded-xl border border-sage-200 transition-all">
              <p className="text-sm text-dark font-medium mb-4">How many people will be attending including you?</p>
              <div className="flex items-center justify-between bg-white border border-sage-200 rounded-lg p-2">
                <button 
                  onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                  className="w-10 h-10 flex items-center justify-center text-dark bg-sage-200/50 rounded hover:bg-sage-200 transition"
                >
                  −
                </button>
                <span className="text-lg font-semibold text-dark">{guestCount}</span>
                <button 
                  onClick={() => setGuestCount(guestCount + 1)}
                  className="w-10 h-10 flex items-center justify-center text-dark bg-sage-200/50 rounded hover:bg-sage-200 transition"
                >
                  +
                </button>
              </div>
            </div>
          )}

          {/* Tombol Confirm */}
          <button 
            onClick={handleConfirm}
            disabled={attendance === null}
            className="w-full py-3 rounded-full font-medium text-white bg-sage-500 hover:bg-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirm
          </button>
        </div>
      ) : (
        <div className="max-w-sm mx-auto bg-sage-200/50 p-6 rounded-xl border border-sage-500">
          <p className="text-dark font-medium text-lg mb-2">Thank you!</p>
          <p className="text-sm text-gray-700">
            {attendance ? `We are so happy that you can make it! (${guestCount} Guest)` : "We will miss you! Thank you for letting us know."}
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="mt-4 text-xs text-sage-500 underline"
          >
            Change Response
          </button>
        </div>
      )}
    </div>
  );
}