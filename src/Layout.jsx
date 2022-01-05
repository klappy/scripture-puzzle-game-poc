import React, { useEffect, useState } from "react";
import ComputerScreen from "./components/ComputerScreen";
import Desk from "./components/Desk";
import useBible from "./hooks/useBible";

export default function Layout() {
  const [editorText, setEditorText] = useState('');
  const [evidenceText, setEvidenceText] = useState('');

  const reference = 'Genesis 1:1';
  const { verse } = useBible({ reference });

  useEffect(() => {
    setEvidenceText(verse);
  }, [verse]);

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