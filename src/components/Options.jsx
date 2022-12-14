import React from "react";

export default function Options() {
  const questions = ["character", "movie", "book"];

  return (
    <div>
      {questions.map((question, index) => {
        return <button key={index}>{question}</button>;
      })}

      {/* <button>{questions[0]}</button>
      <button>{questions[1]}</button>
      <button>{questions[2]}</button> */}
    </div>
  );
}
