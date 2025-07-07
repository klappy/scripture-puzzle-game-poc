import React from 'react';
import './BrickWall.css';

const ROWS = 14; // how many brick rows to render
const BRICKS_PER_ROW = 14; // bricks per row

export default function BrickWall() {
  return (
    <div className="BrickWall">
      {Array.from({ length: ROWS }).map((_, rowIdx) => (
        <div className="row" key={rowIdx}>
          {Array.from({ length: BRICKS_PER_ROW }).map((_, brickIdx) => (
            <div className="brick" key={brickIdx} />
          ))}
        </div>
      ))}
    </div>
  );
}