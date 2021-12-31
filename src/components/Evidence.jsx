import React from "react";
import Word from "./Word";

export default function Evidence({evidenceText='', editorText=''}) {
  const evidenceWords = evidenceText.split(' ');
  const editorWords = editorText.split(' ');

  // let evidence = "For God so loved the world..."
  // let editor = "For God the"
  // const correctOverlap = "For God";
  const correctOverlap = editorWords.filter((word, index) => (word === evidenceWords[index]));

  const wordsComponent = evidenceWords.reverse().map((word, index) => {
    const used = editorWords.includes(word);
    const correct = (correctOverlap.includes(word));
    return (<Word key={word + index} used={used} text={word} correct={correct} />);
  });

  return (
    <div className="Evidence">
      <h3>Evidence</h3>
      <p>{wordsComponent}</p>
    </div>
  );
};