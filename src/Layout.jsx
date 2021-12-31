import React, { useEffect, useState } from "react";
import ComputerScreen from "./components/ComputerScreen";
import Desk from "./components/Desk";

export default function Layout() {
  const [editorText, setEditorText] = useState('');
  const [evidenceText, setEvidenceText] = useState('');

  useEffect(() => {
    setEvidenceText('For God so loved the world...');
  }, [])

  return (
    <div className="Layout">
      <div className="BackWall">
      </div>
      <ComputerScreen editorText={editorText} onEditorText={setEditorText} />
      <Desk
        editorText={editorText}
        evidenceText={evidenceText}
      />
      <div className="FileCabinet">FileCabinet</div>
    </div>
  );
};