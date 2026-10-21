'use client';

import { useEffect, useState } from 'react';

export default function FallingPetals() {
  const [petals, setPetals] = useState<{ id: number; left: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      delay: `${Math.random() * 10}s`,
      duration: `${10 + Math.random() * 15}s`,
    }));
    
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        ></div>
      ))}
    </div>
  );
}