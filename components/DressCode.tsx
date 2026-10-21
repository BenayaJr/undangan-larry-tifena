export default function DressCode() {
  const colors = [
    { name: 'Forest', hex: '#1A2E24' },
    { name: 'Sage', hex: '#5C7665' },
    { name: 'Matcha', hex: '#88A090' },
    { name: 'Champagne', hex: '#C5A869' },
  ];

  return (
    <div className="w-full text-center px-6 py-16 bg-offwhite">
      <h3 className="text-5xl font-vibes text-forest mb-2">Attire Guide</h3>
      <p className="text-[10px] text-forest/70 uppercase tracking-[0.3em] font-bold mb-8">What to wear</p>
      
      <p className="text-xs italic text-forest/80 max-w-[280px] mx-auto mb-10 leading-relaxed font-serif">
        &quot;We would love to see our family and friends coordinate with our wedding color palette. 
        However, your presence is what matters most!&quot;
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 md:gap-5">
        {colors.map((color, idx) => (
          <div key={idx} className="flex flex-col items-center group">
            <div 
              className="w-10 h-10 rounded-full shadow-lg mb-3 border-[3px] border-offwhite group-hover:scale-110 transition-transform duration-300"
              style={{ backgroundColor: color.hex }}
            ></div>
            <span className="text-[9px] uppercase tracking-widest text-forest/60 font-bold">{color.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}