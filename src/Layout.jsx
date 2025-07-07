import React, { useEffect, useState } from "react";
import ComputerScreen from "./components/ComputerScreen";
import Desk from "./components/Desk";
import useBible from "./hooks/useBible";
import BrickWall from "./components/BrickWall";
import DustParticles from "./components/DustParticles";
import NeonSign from "./components/NeonSign";
import CaseSolvedStamp from "./components/CaseSolvedStamp";
import MagnifierCursor from "./components/MagnifierCursor";
import NoirOverlay from "./components/NoirOverlay";

export default function Layout() {
  const [editorText, setEditorText] = useState('');
  const [evidenceText, setEvidenceText] = useState('');
  const [currentReference, setCurrentReference] = useState('');
  const [score, setScore] = useState(0);
  const [wasComplete, setWasComplete] = useState(false);
  const [showStamp, setShowStamp] = useState(false);

  const { reference, verse, randomVerse } = useBible({});

  const shuffleAudio = typeof Audio !== 'undefined' ? new Audio('/sounds/paper-shuffle.mp3') : null;

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

  // track verse completion to update score once per verse
  const verseComplete = evidenceText.trim().length > 0 && evidenceText.trim() === editorText.trim();

  useEffect(() => {
    if (verseComplete && !wasComplete) {
      setScore(prev => prev + 1);
      setWasComplete(true);
      setShowStamp(true);
      setTimeout(() => setShowStamp(false), 2500);
    } else if (!verseComplete && wasComplete) {
      setWasComplete(false);
    }
  }, [verseComplete, wasComplete]);

  // GAMEPLAY CONTROLS -----------------------
  const undoLastWord = () => {
    const words = editorText.trim().split(/\s+/);
    words.pop();
    setEditorText(words.join(' '));
  };

  const clearEditor = () => setEditorText('');

  const nextVerse = () => {
    const { reference: newRef, verse: newVerse } = randomVerse();
    if (shuffleAudio) {
      shuffleAudio.currentTime = 0;
      shuffleAudio.play();
    }
    setEvidenceText(newVerse);
    setCurrentReference(newRef);
    setEditorText('');
    setWasComplete(false);
  };

  return (
    <div className="Layout">
      <div className="BackWall">
        <BrickWall />
        <DustParticles />
        <NeonSign />
      </div>
      <ComputerScreen editorText={editorText} onEditorText={setEditorText} />

      <div className="Controls">
        <button onClick={undoLastWord}>Undo</button>
        <button onClick={clearEditor}>Clear</button>
        <button onClick={nextVerse}>Next Verse</button>
      </div>

      <div className="Scoreboard">Score: {score}</div>

      <Desk
        editorText={editorText}
        evidenceText={evidenceText}
        addWordToEditorText={addWordToEditorText}
        reference={currentReference}
      />
      <div className="FileCabinet">FileCabinet</div>
      <CaseSolvedStamp visible={showStamp} />
      <NoirOverlay />
      <MagnifierCursor />
    </div>
  );
};