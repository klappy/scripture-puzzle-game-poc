import React, { useEffect, useState } from "react";
import ComputerScreen from "./components/ComputerScreen";
import Desk from "./components/Desk";
import BrickWall from "./components/BrickWall";
import useBible from "./hooks/useBible";

export default function Layout() {
  const [editorText, setEditorText] = useState('');
  const [evidenceText, setEvidenceText] = useState('');
  const [currentReference, setCurrentReference] = useState('');
  const [score, setScore] = useState(0);
  const [wasComplete, setWasComplete] = useState(false);
  const [casesSolved, setCasesSolved] = useState(0);
  const [currentCaseNumber, setCurrentCaseNumber] = useState(1);

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

  // track verse completion to update score once per verse
  const verseComplete = evidenceText.trim().length > 0 && evidenceText.trim() === editorText.trim();

  useEffect(() => {
    if (verseComplete && !wasComplete) {
      setScore(prev => prev + 1);
      setCasesSolved(prev => prev + 1);
      setWasComplete(true);
      
      // Show case completion notification
      setTimeout(() => {
        console.log(`🎯 CASE ${currentCaseNumber} SOLVED!`);
      }, 500);
    } else if (!verseComplete && wasComplete) {
      setWasComplete(false);
    }
  }, [verseComplete, wasComplete, currentCaseNumber]);

  // DETECTIVE GAMEPLAY CONTROLS -----------------------
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
    setWasComplete(false);
    setCurrentCaseNumber(prev => prev + 1);
  };

  // Detective case status calculation
  const evidenceWords = evidenceText.trim().split(/\s+/).filter(Boolean);
  const editorWords = editorText.trim().split(/\s+/).filter(Boolean);
  const correctWordCount = editorWords.filter((word, index) => word === evidenceWords[index]).length;
  const investigationProgress = evidenceWords.length > 0 ? Math.round((correctWordCount / evidenceWords.length) * 100) : 0;

  const getRankByScore = (score) => {
    if (score >= 20) return { rank: "CHIEF DETECTIVE", badge: "👑" };
    if (score >= 15) return { rank: "SENIOR DETECTIVE", badge: "🏅" };
    if (score >= 10) return { rank: "DETECTIVE", badge: "🔍" };
    if (score >= 5) return { rank: "INVESTIGATOR", badge: "📝" };
    return { rank: "ROOKIE", badge: "👮" };
  };

  const currentRank = getRankByScore(score);

  return (
    <div className="Layout detective-headquarters">
      {/* Detective Office Background */}
      <div className="BackWall">
        <BrickWall />
      </div>

      {/* Detective Case Introduction */}
      <div className="case-briefing">
        <div className="briefing-header">
          <h2>🔍 BIBLICAL MYSTERIES DEPARTMENT</h2>
          <div className="case-status-line">
            <span className="current-case">CASE #{String(currentCaseNumber).padStart(3, '0')}</span>
            <span className="investigation-status">
              {verseComplete ? "SOLVED ✅" : investigationProgress > 70 ? "BREAKTHROUGH 🔍" : investigationProgress > 40 ? "ACTIVE 📋" : "INVESTIGATING 🕵️"}
            </span>
          </div>
        </div>
        <div className="briefing-text">
          <p>🕵️ <strong>Detective,</strong> you've been assigned to investigate mysterious biblical texts. Analyze the evidence, piece together the clues, and solve each case by reconstructing the original message.</p>
        </div>
      </div>

      {/* Detective Terminal/Computer */}
      <ComputerScreen editorText={editorText} onEditorText={setEditorText} />

      {/* Detective Control Panel */}
      <div className="Controls detective-controls">
        <button onClick={undoLastWord} className="control-btn undo-btn">
          ↶ UNDO EVIDENCE
        </button>
        <button onClick={clearEditor} className="control-btn clear-btn">
          🗑️ CLEAR CASE
        </button>
        <button onClick={nextVerse} className="control-btn next-btn">
          📁 NEW CASE
        </button>
      </div>

      {/* Detective Career Progress */}
      <div className="Scoreboard detective-career">
        <div className="career-badge">
          <span className="rank-badge">{currentRank.badge}</span>
          <span className="rank-title">{currentRank.rank}</span>
        </div>
        <div className="career-stats">
          <div className="stat">
            <span className="stat-number">{casesSolved}</span>
            <span className="stat-label">Cases Solved</span>
          </div>
          <div className="stat">
            <span className="stat-number">{investigationProgress}%</span>
            <span className="stat-label">Current Case</span>
          </div>
          <div className="stat">
            <span className="stat-number">{score}</span>
            <span className="stat-label">Total Score</span>
          </div>
        </div>
      </div>

      {/* Detective's Office Desk */}
      <Desk
        editorText={editorText}
        evidenceText={evidenceText}
        addWordToEditorText={addWordToEditorText}
        reference={currentReference}
      />

      {/* Evidence Locker */}
      <div className="FileCabinet evidence-locker">
        <div className="locker-title">📁 EVIDENCE LOCKER</div>
        <div className="locker-stats">
          <div className="locker-item">
            <span className="locker-count">{casesSolved}</span>
            <span className="locker-label">CLOSED CASES</span>
          </div>
          <div className="locker-item">
            <span className="locker-count">{currentCaseNumber - 1}</span>
            <span className="locker-label">TOTAL CASES</span>
          </div>
        </div>
        <div className="clearance-level">
          <span className="clearance-text">CLEARANCE: {currentRank.rank}</span>
        </div>
      </div>

      {/* Atmospheric Detective Office Elements */}
      <div className="office-atmosphere">
        <div className="office-lamp">
          <div className="lamp-light"></div>
        </div>
        <div className="case-board">
          <div className="board-title">ACTIVE INVESTIGATIONS</div>
          <div className="case-threads">
            <div className="thread thread-1"></div>
            <div className="thread thread-2"></div>
            <div className="thread thread-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};