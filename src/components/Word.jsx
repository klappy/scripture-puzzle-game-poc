import React from "react";
import './Evidence.css';

export default function Word({text, used, correct, addWordToEditorText}) {
  let className = 'Word';
  if (used) className = className + ' used';
  if (correct) className = className + ' correct';

  const handleClick = () => {
    // Prevent adding the word again if it has already been used
    if (used) return;
    addWordToEditorText({word: text});
  };

  const title = correct ? 'Correct position!' : (used ? 'Already used' : 'Click to add');

  return (
    <span title={title} onClick={handleClick} className={className}>{text} </span>
  );
};