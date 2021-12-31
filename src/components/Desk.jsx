import React from "react";
import Evidence from "./Evidence";

export default function Desk() {
  return (
    <div className="Desk">
      <div className="BookCover Book">
        <div className="gap"></div>
      </div>
      <div className="BookCoverLetter">E</div>
      <div className="BookCoverLetter">L</div>
      <div className="BookCoverLetter">B</div>
      <div className="BookCoverLetter">I</div>
      <div className="BookCoverLetter">B</div>
      <div className="ReferenceBook Book">
        <h3>UGNT</h3>
      </div>
      <Evidence text="For God so loved the world..." />
      <div className="ReferenceBook Book">
        <h3>UTN</h3>
      </div>
      <div className="Printout">Printout</div>
  </div>
  );
};