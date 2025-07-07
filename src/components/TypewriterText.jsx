import React, { useEffect, useState } from 'react';
import './TypewriterText.css';

const typingAudio = new Audio('/sounds/typewriter-key.mp3');
typingAudio.volume = 0.3;

export default function TypewriterText({ text = '', speed = 35 }) {
  const [display, setDisplay] = useState('');
  const [finished, setFinished] = useState(false);

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

  useEffect(() => {
    if (display.length === text.length && text.length > 0) {
      setFinished(true);
      const t = setTimeout(() => setFinished(false), 700);
      return () => clearTimeout(t);
    }
  }, [display, text]);

  return <span className={`TypewriterText ${finished ? 'finished' : ''}`}>{display}</span>;
}