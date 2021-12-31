import React from "react";
import './Evidence.css';

export default function Word({text, used, correct}) {
  let className = 'Word';
  if (used) className = className + ' used';
  if (correct) className = className + ' correct';
  return (
    <span className={className}>{text} </span>
  );
};