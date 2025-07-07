import React, { useMemo, useState } from "react";
import { useDeepCompareEffect, useDeepCompareMemo } from "use-deep-compare";
import Word from "./Word";

export default function Evidence({ evidenceText = '', editorText = '', addWordToEditorText }) {
  const [randomWords, setRandomWords] = useState([]);

  const evidenceWords = useMemo(() => {
    return evidenceText.split(/\s+/);
  }, [evidenceText]);

  useDeepCompareEffect(() => {
    const _randomWords = [...evidenceWords].sort(() => (Math.random() > .5) ? 1 : -1);
    setRandomWords(_randomWords);
  }, [evidenceWords]);

  const editorWords = useMemo(() => {
    return editorText.trim().split(/\s+/);
  }, [editorText]);

  const correctOverlap = useDeepCompareMemo(() => {
    return editorWords.filter((word, index) => (word === evidenceWords[index]));
  }, [editorWords, evidenceWords]);
  
  const wordsComponent = useDeepCompareMemo(() => {
    const words = randomWords.map((word, index) => {
      const used = editorWords.includes(word);
      const correct = (correctOverlap.includes(word));
      return (<Word key={word + index} used={used} text={word} correct={correct} addWordToEditorText={addWordToEditorText} />);
    });
    return words;
  }, [randomWords, editorWords, correctOverlap]); 

  // Calculate investigation progress
  const totalClues = evidenceWords.length;
  const cluesFound = editorWords.length;
  const cluesCorrect = correctOverlap.length;

  return (
    <div className="Evidence detective-board">
      <div className="evidence-header">
        <h3>🔍 CASE EVIDENCE BOARD</h3>
        <div className="evidence-status">
          <span className="badge">📋 {cluesFound}/{totalClues} CLUES COLLECTED</span>
          <span className="badge">✓ {cluesCorrect} VERIFIED</span>
        </div>
      </div>
      
      <div className="evidence-description">
        <p>🕵️ <strong>Detective:</strong> Examine each piece of evidence carefully. Click on clues to add them to your investigation report. The correct sequence will solve this biblical mystery case.</p>
      </div>

      <div className="evidence-board-container">
        <div className="evidence-grid">
          {wordsComponent}
        </div>
        
        <div className="evidence-strings">
          <div className="string string-1"></div>
          <div className="string string-2"></div>
          <div className="string string-3"></div>
        </div>
        
        <div className="evidence-pins">
          <div className="pin pin-1"></div>
          <div className="pin pin-2"></div>
          <div className="pin pin-3"></div>
          <div className="pin pin-4"></div>
        </div>
      </div>

      <div className="investigation-tools">
        <div className="tool magnifying-glass">🔍</div>
        <div className="tool fingerprint">👤</div>
        <div className="tool case-file">📁</div>
        <div className="tool evidence-bag">🏷️</div>
      </div>
    </div>
  );
};