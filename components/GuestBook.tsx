'use client';

import { useState, useEffect, Suspense } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp, Timestamp } from 'firebase/firestore';
import { useSearchParams } from 'next/navigation';

// Tipe data pesan (any diganti dengan Timestamp | null)
interface GuestMessage {
  id: string;
  name: string;
  message: string;
  createdAt: Timestamp | null;
}

function GuestbookForm() {
  const searchParams = useSearchParams();
  
  // Mengambil nama otomatis dari URL
  const guestName = searchParams.get('to') || 'Our Honored Guest';

  const [messages, setMessages] = useState<GuestMessage[]>([]);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mengambil data dari Firebase Real-time
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

  // Fungsi mengirim pesan ke Firebase
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
      alert("Gagal mengirim pesan.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full py-20 px-6 bg-[#f4f5f0] text-center flex flex-col items-center">
      <h3 className="text-3xl md:text-4xl font-sans text-forest mb-4">Wishes & Blessings</h3>
      <p className="text-xs md:text-sm font-light text-forest/70 leading-relaxed max-w-md mb-12">
        {/* Tanda kutip tunggal sudah diperbaiki menggunakan &apos; */}
        Your wishes and blessings mean so much to us as we begin this journey together in God&apos;s grace!
      </p>

      {/* Form Input */}
      <form onSubmit={handleSubmit} className="w-full max-w-md mb-12 flex items-center gap-4">
        <input 
          type="text" 
          placeholder="Give your wish..." 
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
          <span>{isSubmitting ? '...' : 'Send'}</span>
          {!isSubmitting && <span className="text-sm">↗️</span>}
        </button>
      </form>

      {/* Daftar Pesan Guestbook */}
      <div className="w-full max-w-md flex flex-col text-left space-y-6 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#8fa492] pr-4">
        {messages.length === 0 ? (
          <p className="text-center text-forest/50 font-light italic text-sm">
            Jadilah yang pertama memberikan doa restu!
          </p>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="border-b border-forest/20 pb-4">
              <p className="font-bold text-forest text-sm md:text-base mb-1">{msg.name}</p>
              {msg.createdAt && (
                <p className="text-[10px] text-forest/50 mb-3 uppercase tracking-wider">
                  {new Date(msg.createdAt.toDate()).toLocaleDateString('id-ID', { 
                    day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' 
                  })}
                </p>
              )}
              <p className="text-sm font-light text-forest/80 leading-relaxed">
                {msg.message}
              </p>
            </div>
          ))
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