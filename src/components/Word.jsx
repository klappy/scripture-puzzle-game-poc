import React from "react";
import './Evidence.css';

export default function Word({text, used, correct, addWordToEditorText}) {
  let className = 'Word';
  if (used) className = className + ' used';
  if (correct) className = className + ' correct';

  const handleClick = () => {
    addWordToEditorText({word: text});
  };

  return (
    <span onClick={handleClick} className={className}>{text} </span>
  );
};