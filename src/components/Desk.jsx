import React from "react";
import Evidence from "./Evidence";
import Printout from "./Printout";

export default function Desk({ reference, editorText, evidenceText, addWordToEditorText }) {
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
      <Evidence evidenceText={evidenceText} editorText={editorText} addWordToEditorText={addWordToEditorText} />
      <div className="ReferenceBook Book">
        <h3>UTN</h3>
      </div>
      <Printout evidenceText={evidenceText} editorText={editorText} reference={reference} />
  </div>
  );
};