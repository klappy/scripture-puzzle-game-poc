import React from 'react';
import './CaseSolvedStamp.css';

export default function CaseSolvedStamp({ visible }) {
  return (
    <div className={`CaseSolvedStamp ${visible ? 'visible' : ''}`}>CASE&nbsp;SOLVED</div>
  );
}