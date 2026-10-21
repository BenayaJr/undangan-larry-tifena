'use client';

import { useState, useRef, useEffect } from 'react';

export default function MusicPlayer({ isOpened }: { isOpened: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/wedding-song.mp3');
    audioRef.current.loop = true;
  }, []);

  useEffect(() => {
    if (isOpened && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(console.error); // <--- Ubah bagian ini
    }
  }, [isOpened]);

  const togglePlay = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Visualizer Gelombang Suara (Hanya muncul saat lagu menyala) */}
      <div className={`flex items-end h-4 gap-[3px] transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}>
        <span className="w-[3px] bg-sage-500 rounded-full animate-soundwave" style={{ animationDelay: '0.1s' }}></span>
        <span className="w-[3px] bg-sage-500 rounded-full animate-soundwave" style={{ animationDelay: '0.4s' }}></span>
        <span className="w-[3px] bg-sage-500 rounded-full animate-soundwave" style={{ animationDelay: '0.2s' }}></span>
        <span className="w-[3px] bg-sage-500 rounded-full animate-soundwave" style={{ animationDelay: '0.5s' }}></span>
      </div>
      
      {/* Tombol Piringan Hitam */}
      <button
        onClick={togglePlay}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-dark shadow-xl hover:scale-105 transition-transform border border-sage-500"
        aria-label="Toggle Music"
      >
        <div className={`w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}>
           {/* Titik tengah putih */}
           <div className="w-2 h-2 bg-offwhite rounded-full"></div>
        </div>
      </button>
    </div>
  );
}