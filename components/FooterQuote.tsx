'use client';

export default function FooterQuote() {
  return (
    <div className="w-full bg-forest text-center py-20 px-8 border-t border-champagne/20">
      <div className="max-w-lg mx-auto">
        <svg className="w-6 h-6 text-champagne mx-auto mb-6 opacity-60" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-sm md:text-base italic text-offwhite/90 leading-loose font-serif">
          &quot;While marriage is many things, it is anything but sentimental. Marriage is glorious but hard. It&apos;s a burning joy and strength, and yet it is also blood, sweat, and tears, humbling defeats and exhausting victories.&quot;
        </p>
        <p className="text-[10px] tracking-[0.3em] font-bold text-champagne uppercase mt-8">
          — Timothy Keller
        </p>
      </div>
    </div>
  );
}