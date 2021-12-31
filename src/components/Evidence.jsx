import React from "react";
import Word from "./Word";

export default function Evidence({text}) {
  const words = text.split(' ').reverse().map((word, index) => {
    return (<Word key={word + index} text={word} />);
  });

  return (
    <div className="Evidence">
      <h3>Evidence</h3>
      <p>{words}</p>
    </div>
  );
};