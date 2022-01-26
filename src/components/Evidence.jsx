import React, { useState, useMemo } from "react";
import { useDeepCompareMemo, useDeepCompareEffect as useEffect } from "use-deep-compare";
import Word from "./Word";

export default function Evidence({ evidenceText = '', editorText = '' }) {
  const [randomWords, setRandomWords] = useState([]);

  const evidenceWords = useMemo(() => {
    return evidenceText.split(' ');
  }, [evidenceText]);

  useEffect(() => {
    const _randomWords = evidenceWords.sort(() => (Math.random() > .5) ? 1 : -1);
    setRandomWords(_randomWords);
  }, [evidenceWords]);

  const wordsComponent = useDeepCompareMemo(() => {
    const editorWords = editorText.split(' ');
    const correctOverlap = editorWords.filter((word, index) => (word === evidenceWords[index]));
    return randomWords.map((word, index) => {
      const used = editorWords.includes(word);
      const correct = (correctOverlap.includes(word));
      return (<Word key={word + index} used={used} text={word} correct={correct} />);
    });
  }, [evidenceWords, editorText, randomWords]);

  return (
    <div className="Evidence">
      <h3>Evidence</h3>
      <p>{wordsComponent}</p>
    </div>
  );
};