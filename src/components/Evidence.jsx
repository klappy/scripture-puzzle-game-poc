import React, { useState } from "react";
import { useDeepCompareEffect } from "use-deep-compare";
import Word from "./Word";

export default function Evidence({ evidenceText = '', editorText = '', addWordToEditorText }) {
  const [randomWords, setRandomWords] = useState([]);

  const evidenceWords = evidenceText.split(/\s+/);

  useDeepCompareEffect(() => {
    const _randomWords = evidenceWords.sort(() => (Math.random() > .5) ? 1 : -1);
    setRandomWords(_randomWords);
  }, [evidenceWords]);

  const editorWords = editorText.trim().split(/\s+/);
  const correctOverlap = editorWords.filter((word, index) => (word === evidenceWords[index]));

  const wordsComponent = randomWords.map((word, index) => {
    const used = editorWords.includes(word);
    const correct = (correctOverlap.includes(word));
    return (<Word key={word + index} used={used} text={word} correct={correct} addWordToEditorText={addWordToEditorText} />);
  });

  return (
    <div className="Evidence">
      <h3>Evidence</h3>
      <p>{wordsComponent}</p>
    </div>
  );
};