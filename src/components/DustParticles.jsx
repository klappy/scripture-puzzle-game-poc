import React from 'react';
import './DustParticles.css';

const NUM_PARTICLES = 40;

export default function DustParticles() {
  return (
    <div className="DustParticles">
      {Array.from({ length: NUM_PARTICLES }).map((_, idx) => {
        const size = 2 + Math.random() * 3; // 2-5px
        const duration = 15 + Math.random() * 15; // 15-30s
        const delay = Math.random() * 20; // 0-20s
        const left = Math.random() * 100; // 0-100%
        return (
          <span
            key={idx}
            className="particle"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
}