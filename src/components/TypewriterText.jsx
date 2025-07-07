import React, { useEffect, useState } from 'react';

const typingAudio = new Audio('/sounds/typewriter-key.mp3');
typingAudio.volume = 0.3;

export default function TypewriterText({ text = '', speed = 35 }) {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplay('');
    const interval = setInterval(() => {
      index += 1;
      setDisplay(text.slice(0, index));
      // play sound
      if (text[index - 1] && text[index - 1] !== ' ') {
        typingAudio.currentTime = 0;
        typingAudio.play();
      }
      if (index >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{display}</span>;
}