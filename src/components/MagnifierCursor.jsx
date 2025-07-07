import React, { useEffect, useRef } from 'react';
import './MagnifierCursor.css';

export default function MagnifierCursor() {
  const lensRef = useRef(null);

  useEffect(() => {
    const lens = lensRef.current;
    if (!lens) return;

    const move = (e) => {
      const { clientX, clientY } = e;
      lens.style.transform = `translate(${clientX}px, ${clientY}px)`;
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return <div ref={lensRef} className="MagnifierCursor" />;
}