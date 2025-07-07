import React from "react";
import Evidence from "./Evidence";
import Printout from "./Printout";

export default function Desk({ reference, editorText, evidenceText, addWordToEditorText }) {
  return (
    <div className="Desk detective-office">
      {/* Detective's Case Files */}
      <div className="case-file-stack">
        <div className="case-file primary-case">
          <div className="file-tab">CASE #001</div>
          <div className="file-label">BIBLICAL MYSTERIES</div>
          <div className="classification-stamp">CONFIDENTIAL</div>
        </div>
      </div>

      {/* Detective Badge */}
      <div className="detective-badge">
        <div className="badge-circle">
          <div className="badge-star">⭐</div>
          <div className="badge-text">DETECTIVE</div>
          <div className="badge-number">187</div>
        </div>
      </div>

      {/* Investigation Manual */}
      <div className="investigation-manual Book">
        <div className="manual-title">INVESTIGATION</div>
        <div className="manual-subtitle">HANDBOOK</div>
        <div className="manual-edition">7th Ed.</div>
      </div>

      {/* Evidence Analysis Section */}
      <Evidence evidenceText={evidenceText} editorText={editorText} addWordToEditorText={addWordToEditorText} />

      {/* Forensics Guide */}
      <div className="forensics-guide Book">
        <div className="guide-title">FORENSICS</div>
        <div className="guide-subtitle">FIELD GUIDE</div>
        <div className="guide-icon">🔬</div>
      </div>

      {/* Case Progress Report */}
      <Printout evidenceText={evidenceText} editorText={editorText} reference={reference} />

      {/* Detective Tools */}
      <div className="detective-tools">
        <div className="tool-magnifier">
          <div className="magnifier-handle"></div>
          <div className="magnifier-lens">🔍</div>
        </div>
        <div className="tool-notepad">
          <div className="notepad-spiral"></div>
          <div className="notepad-content">📝</div>
        </div>
        <div className="tool-flashlight">
          <div className="flashlight-body">🔦</div>
          <div className="flashlight-beam"></div>
        </div>
      </div>

      {/* Crime Scene Photos */}
      <div className="crime-scene-photos">
        <div className="photo photo-1">
          <div className="photo-content">📷</div>
          <div className="photo-label">SCENE A</div>
        </div>
        <div className="photo photo-2">
          <div className="photo-content">🏛️</div>
          <div className="photo-label">LOCATION</div>
        </div>
      </div>

      {/* Evidence Markers */}
      <div className="evidence-markers">
        <div className="marker marker-a">A</div>
        <div className="marker marker-b">B</div>
        <div className="marker marker-c">C</div>
      </div>

      {/* Coffee Cup (Detective Essential) */}
      <div className="detective-coffee">
        <div className="coffee-cup">☕</div>
        <div className="coffee-steam"></div>
      </div>
    </div>
  );
};