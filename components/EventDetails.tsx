'use client';

export default function EventDetails() {
  // 17 Nov 2026, 19:00 WITA sama dengan 11:00 UTC
  const gCalLink = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Resepsi+Pernikahan%3A+Larry+%26+Tifena&dates=20261117T110000Z/20261117T140000Z&details=Merupakan+suatu+kehormatan+dan+kebahagiaan+bagi+kami+apabila+Bapak%2FIbu%2FSaudara%28i%29+berkenan+hadir.&location=Restaurant+Bamboodent+1,+Makassar,+South+Sulawesi";

  return (
    <div className="w-full py-20 px-6 bg-offwhite text-center flex flex-col items-center">
      <h3 className="text-4xl md:text-5xl font-vibes text-forest mb-4">Resepsi Pernikahan</h3>
      
      <div className="w-16 h-[1px] bg-champagne mb-10"></div>

      <div className="bg-white border border-champagne/30 p-8 md:p-12 rounded-t-full shadow-sm max-w-md w-full relative mb-16">
        <p className="text-forest font-bold uppercase tracking-widest text-sm mb-2">Selasa</p>
        <p className="text-5xl font-serif text-champagne mb-2">17</p>
        <p className="text-forest uppercase tracking-widest text-xs mb-8">November 2026 <br/> 19:00 WITA s/d Selesai</p>

        <h4 className="font-serif text-forest text-lg mb-2">Restaurant Bamboodent 1</h4>
        <p className="text-xs text-forest/70 leading-relaxed font-light mb-10">
          Lantai 2 <br/>
          Makassar, Sulawesi Selatan
        </p>

        {/* Grup Tombol Aksi */}
        <div className="flex flex-col space-y-3 items-center w-full">
          <a href={gCalLink} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-champagne text-forest text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-forest hover:text-champagne transition-all duration-300 shadow-md w-full max-w-[220px]">
            Save the Date
          </a>
          
          <a href="https://maps.google.com/?q=Restaurant+Bamboodent+1+Makassar" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 border border-forest text-forest text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-forest hover:text-offwhite transition-all duration-300 w-full max-w-[220px]">
            View Map
          </a>
        </div>
      </div>

      {/* Teks Penutup dan Keluarga yang Mengundang */}
      <div className="max-w-md w-full text-center flex flex-col items-center">
        <p className="text-xs md:text-sm font-light text-forest/80 leading-relaxed font-serif italic mb-12">
          "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara(i) berkenan hadir dan memberikan doa restu kepada kedua mempelai. Atas kehadirannya kami ucapkan terima kasih."
        </p>
        
        <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-forest/50 mb-6">
          Kami yang berbahagia
        </p>
        
        <p className="text-sm font-medium text-forest mb-2">Kel. Pdt. Farry Tualangi, M.Th</p>
        <p className="text-sm font-medium text-forest mb-8">Kel. Pdt. Henry Hendra Tanujaya, M.Div</p>
        
        <p className="text-[9px] uppercase tracking-widest text-forest/50 mb-1">Kedua Mempelai</p>
        <p className="text-3xl font-vibes text-champagne">Larry &amp; Tifena</p>
      </div>
    </div>
  );
}