'use client';

import { useState } from 'react';

export default function Guestbook() {
  const [newWish, setNewWish] = useState('');
  
  // Dummy data komentar awal
  const [wishes, setWishes] = useState([
    { id: 1, name: 'Alyssa Grace', date: '02 Oct 2026, 17:09', text: 'CANT WAIT D-43!' },
    { id: 2, name: 'Ms. Alang', date: '09 Sep 2026, 07:31', text: 'Congrats to the lovely couple. So proud of you.' },
    { id: 3, name: 'Shawn', date: '06 Sep 2026, 22:44', text: 'Congratulations, 🥂🎉\nMay God bless your marriage with love, joy, peace, understanding, and a lifetime of happiness together. May He always be at the center of your marriage. Amen.' },
  ]);

  const handleSend = () => {
    if (!newWish.trim()) return;
    
    const newComment = {
      id: Date.now(),
      name: 'Guest (You)',
      date: 'Just now',
      text: newWish,
    };
    
    setWishes([newComment, ...wishes]);
    setNewWish('');
  };

  return (
    <div className="w-full px-6 py-12 bg-sage-500/10">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-serif mb-2 text-dark">Wishes & Blessings</h3>
        <p className="text-xs text-gray-600 leading-relaxed max-w-sm mx-auto">
          Your wishes and blessings mean so much to us as we begin this journey together in God&apos;s grace!
        </p>
      </div>

      <div className="max-w-sm mx-auto">
        {/* Form Input */}
        <div className="flex gap-2 mb-8">
          <input
            type="text"
            value={newWish}
            onChange={(e) => setNewWish(e.target.value)}
            placeholder="Give your wish..."
            className="flex-1 px-4 py-3 bg-transparent border-b border-dark/30 text-sm focus:outline-none focus:border-sage-500 transition-colors"
          />
          <button 
            onClick={handleSend}
            className="px-5 py-2 bg-sage-500 text-white text-sm font-medium rounded-lg hover:bg-dark transition-colors"
          >
            Send ↗
          </button>
        </div>

        {/* Daftar Komentar */}
        <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
          {wishes.map((wish) => (
            <div key={wish.id} className="border-b border-dark/10 pb-4">
              <p className="font-medium text-dark text-sm">{wish.name}</p>
              <p className="text-[10px] text-gray-500 mb-2">{wish.date}</p>
              <p className="text-sm text-gray-700 whitespace-pre-line">{wish.text}</p>
            </div>
          ))}
        </div>
        
        <button className="w-full mt-6 py-3 border border-sage-500 text-sage-500 text-sm font-medium rounded-full hover:bg-sage-500 hover:text-white transition-colors">
          Show more comments
        </button>
      </div>
    </div>
  );
}