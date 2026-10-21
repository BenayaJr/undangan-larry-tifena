'use client';

export default function ParallaxQuote() {
  return (
    <div className="relative w-full h-[55vh] flex items-center justify-center overflow-hidden my-8 shadow-inner bg-forest">
      
      {/* Background menggunakan img tag absolut agar tidak 'zoom' berlebihan */}
      <img 
        src="/parallax.jpg" 
        alt="Parallax Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
      />

      <div className="absolute inset-0 bg-forest/70"></div>
      
      <div className="relative z-10 text-center px-8 flex flex-col items-center">
        <svg className="w-8 h-8 text-champagne mb-5 opacity-90" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        
        <h2 className="text-3xl md:text-4xl font-vibes text-offwhite leading-relaxed drop-shadow-md mb-5">
          &quot;I have found the one <br/> whom my soul loves.&quot;
        </h2>
        
        <div className="w-12 h-[1px] bg-champagne mb-3"></div>
        <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-champagne">
          Song of Solomon 3:4
        </p>
      </div>
    </div>
  );
}