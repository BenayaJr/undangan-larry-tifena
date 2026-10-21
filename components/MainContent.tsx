'use client';

export default function MainContent() {
  return (
    <section className="w-full bg-offwhite py-24 px-6 flex flex-col items-center text-center">
      
      {/* Kalimat Pembuka Sesuai Undangan Fisik */}
      <div className="mb-20 max-w-lg animate-fade-in">
        <svg className="w-8 h-8 text-champagne mx-auto mb-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <p className="text-xs md:text-sm font-light text-forest/80 leading-relaxed font-serif italic">
          &quot;Dengan penuh rasa syukur atas kasih Anugerah Tuhan, kami mengundang Bapak/Ibu/Saudara(i) kiranya menghadiri acara pernikahan anak kami&quot;
        </p>
      </div>

      {/* PROFIL GROOM (MEMPELAI PRIA) */}
      <div className="flex flex-col items-center mb-12">
        <div className="w-48 h-64 md:w-56 md:h-72 overflow-hidden rounded-t-full rounded-b-lg shadow-md mb-8 border border-champagne/30 bg-sage-200">
          <img 
            src="/groom.jpg" 
            alt="Larry Christofal" 
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-4xl md:text-5xl font-vibes text-forest mb-2">Larry Christofal</h2>
        <p className="text-xs font-serif text-forest/80 font-bold tracking-widest mb-6">S.Th</p>
        
        <p className="text-[9px] uppercase tracking-widest text-forest/50 mb-2">Anak pertama dari</p>
        <p className="text-xs md:text-sm font-medium text-forest">Bapak Pdt. Farry Tualangi, M.Th</p>
        <p className="text-xs font-light text-forest/80 mt-1">&amp; Ibu Pdt. Lea Helena</p>
      </div>

      {/* SIMBOL '&' PEMISAH */}
      <div className="my-10">
        <span className="text-6xl font-vibes text-champagne drop-shadow-sm opacity-90">&amp;</span>
      </div>

      {/* PROFIL BRIDE (MEMPELAI WANITA) */}
      <div className="flex flex-col items-center mt-4 mb-10">
        <div className="w-48 h-64 md:w-56 md:h-72 overflow-hidden rounded-t-full rounded-b-lg shadow-md mb-8 border border-champagne/30 bg-sage-200">
          <img 
            src="/bride.jpeg" 
            alt="Tifena Tania" 
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-4xl md:text-5xl font-vibes text-forest mb-2">Tifena Tania</h2>
        <p className="text-xs font-serif text-forest/80 font-bold tracking-widest mb-6">B.Th</p>
        
        <p className="text-[9px] uppercase tracking-widest text-forest/50 mb-2">Anak kedua dari</p>
        <p className="text-xs md:text-sm font-medium text-forest">Bapak Pdt. Henry Hendra Tanujaya, M.Div</p>
        <p className="text-xs font-light text-forest/80 mt-1">&amp; Ibu Ev. Adriani, S.Th</p>
      </div>

    </section>
  );
}