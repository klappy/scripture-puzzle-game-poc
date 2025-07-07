import React, { useEffect, useState } from "react";
import ComputerScreen from "./components/ComputerScreen";
import Desk from "./components/Desk";
import useBible from "./hooks/useBible";

export default function Layout() {
  const [editorText, setEditorText] = useState('');
  const [evidenceText, setEvidenceText] = useState('');
  const [currentReference, setCurrentReference] = useState('');

  const { reference, verse, randomVerse } = useBible({});

  useEffect(() => {
    if (verse) {
      setEvidenceText(verse);
      setCurrentReference(reference);
    }
  }, [verse, reference]);

  const addWordToEditorText = ({word}) => {
    const _editorText = [ editorText.trim(), word ].join(' ').trim();
    setEditorText(_editorText);
  };

  // GAMEPLAY CONTROLS -----------------------
  const undoLastWord = () => {
    const words = editorText.trim().split(/\s+/);
    words.pop();
    setEditorText(words.join(' '));
  };

  const clearEditor = () => setEditorText('');

  const nextVerse = () => {
    const { reference: newRef, verse: newVerse } = randomVerse();
    setEvidenceText(newVerse);
    setCurrentReference(newRef);
    setEditorText('');
  };

  return (
    <div className="Layout">
      <div className="BackWall">
      </div>
      <ComputerScreen editorText={editorText} onEditorText={setEditorText} />

      <div className="Controls">
        <button onClick={undoLastWord}>Undo</button>
        <button onClick={clearEditor}>Clear</button>
        <button onClick={nextVerse}>Next Verse</button>
      </div>

      <Desk
        editorText={editorText}
        evidenceText={evidenceText}
        addWordToEditorText={addWordToEditorText}
        reference={currentReference}
      />
      <div className="FileCabinet">FileCabinet</div>
    </div>
  );
};