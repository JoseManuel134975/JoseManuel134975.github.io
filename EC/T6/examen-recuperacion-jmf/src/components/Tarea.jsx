import React, { useState } from "react";

export default function Tarea({ tarea, completed, setCompleted }) {
  const [isComplete, setIsComplete] = useState(false);

    const mark = () => {
      if(!isComplete) {
        setIsComplete(true)
        setCompleted(completed + 1)
      } else {
        setIsComplete(false)
        setCompleted(completed - 1)
      }
    };
  
  return (
    <>
      <article>
        <p>{tarea.title}</p>
        <button onClick={mark}>{isComplete ? "✅" : "X"}</button>
      </article>
    </>
  );
}
