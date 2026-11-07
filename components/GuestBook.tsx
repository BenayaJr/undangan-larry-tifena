'use client';

import { useState, useEffect, Suspense } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp, Timestamp } from 'firebase/firestore';
import { useSearchParams } from 'next/navigation';

interface GuestMessage {
  id: string;
  name: string;
  message: string;
  createdAt: Timestamp | null;
}

function GuestbookForm() {
  const searchParams = useSearchParams();
  
  // 1. Variabel bahasa diletakkan di posisi yang benar
  const lang = searchParams.get('lang') || 'id';
  
  // 2. Default nama tamu disesuaikan dengan bahasanya
  const guestName = searchParams.get('to') || (lang === 'en' ? 'Our Honored Guest' : 'Tamu Kehormatan');

  const [messages, setMessages] = useState<GuestMessage[]>([]);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const q = query(collection(db, 'guestbook'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as GuestMessage[];
      setMessages(msgs);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'guestbook'), {
        name: guestName,
        message: message,
        createdAt: serverTimestamp()
      });
      setMessage('');
    } catch (error) {
      console.error("Error adding document: ", error);
      alert(lang === 'en' ? "Failed to send message." : "Gagal mengirim pesan.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full py-20 px-6 bg-[#f4f5f0] text-center flex flex-col items-center">
      <h3 className="text-3xl md:text-4xl font-sans text-forest mb-4">
        {lang === 'en' ? 'Wishes & Blessings' : 'Doa & Restu'}
      </h3>
      <p className="text-xs md:text-sm font-light text-forest/70 leading-relaxed max-w-md mb-12">
        {lang === 'en' 
          ? "Your wishes and blessings mean so much to us as we begin this journey together in God's grace!" 
          : "Doa dan restu Anda sangat berarti bagi kami dalam memulai perjalanan ini di dalam kasih karunia Tuhan!"}
      </p>

      {/* Form Input */}
      <form onSubmit={handleSubmit} className="w-full max-w-md mb-12 flex items-center gap-4">
        <input 
          type="text" 
          placeholder={lang === 'en' ? 'Give your wish...' : 'Berikan doa restu...'}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          disabled={isSubmitting}
          className="flex-1 bg-transparent border-b-2 border-forest/80 focus:outline-none focus:border-forest text-forest placeholder-forest/50 text-sm md:text-base py-2 px-1 transition-colors"
        />
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`px-6 py-2 bg-[#8fa492] text-white font-bold rounded-lg border-2 border-forest flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-95 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:brightness-105'
          }`}
        >
          <span>{isSubmitting ? '...' : (lang === 'en' ? 'Send' : 'Kirim')}</span>
          {!isSubmitting && <span className="text-sm">↗️</span>}
        </button>
      </form>

      {/* Daftar Pesan Guestbook */}
      <div className="w-full max-w-md flex flex-col text-left space-y-6 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#8fa492] pr-4 pb-4">
        {messages.length === 0 ? (
          <p className="text-center text-forest/50 font-light italic text-sm">
            {lang === 'en' ? 'Be the first to send wishes!' : 'Jadilah yang pertama memberikan doa restu!'}
          </p>
        ) : (
          <>
            {messages.slice(0, visibleCount).map((msg) => (
              <div key={msg.id} className="border-b border-forest/20 pb-4">
                <p className="font-bold text-forest text-sm md:text-base mb-1">{msg.name}</p>
                {msg.createdAt && (
                  <p className="text-[10px] text-forest/50 mb-3 uppercase tracking-wider">
                    {/* Format tanggal disesuaikan dengan bahasa */}
                    {new Date(msg.createdAt.toDate()).toLocaleDateString(lang === 'en' ? 'en-US' : 'id-ID', { 
                      day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' 
                    })}
                  </p>
                )}
                <p className="text-sm font-light text-forest/80 leading-relaxed">
                  {msg.message}
                </p>
              </div>
            ))}
            
            {/* Tombol Load More */}
            {visibleCount < messages.length && (
              <div className="flex justify-center pt-4">
                <button 
                  onClick={() => setVisibleCount(prev => prev + 5)}
                  className="px-6 py-2 border border-forest text-forest text-[10px] uppercase tracking-widest rounded-full hover:bg-forest hover:text-[#f4f5f0] transition-all duration-300"
                >
                  {lang === 'en' ? 'View More Wishes' : 'Lihat Ucapan Lainnya'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default function Guestbook() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-forest">Loading wishes...</div>}>
      <GuestbookForm />
    </Suspense>
  );
}