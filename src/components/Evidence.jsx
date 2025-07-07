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

  return (
    <div className="Evidence">
      <div className="paperclip" />
      <div className="coffee-stain" />
      <div className="fingerprint fp1" />
      <div className="fingerprint fp2" />
      <div className="redacted r1" />
      <div className="redacted r2" />
      <h3>Evidence</h3>
      <p>{wordsComponent}</p>
    </div>
  );
};