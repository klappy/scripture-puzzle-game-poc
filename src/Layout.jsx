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

  const addWordToEditorText = ({word}) => {
    const _editorText = [ editorText.trim(), word ].join(' ').trim();
    setEditorText(_editorText);
  };

  return (
    <div className="Layout">
      <div className="BackWall">
      </div>
      <ComputerScreen editorText={editorText} onEditorText={setEditorText} />
      <Desk
        editorText={editorText}
        evidenceText={evidenceText}
        addWordToEditorText={addWordToEditorText}
        reference={reference}
      />
      <div className="FileCabinet">FileCabinet</div>
    </div>
  );
};