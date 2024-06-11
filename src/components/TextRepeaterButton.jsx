import { useState } from "react";

export default function TextRepeaterButton() {
  const [ repititions, setRepititions ] = useState(1);
  const textArr = [];
  for (let i = 0; i < repititions; i++) {
    textArr.push(<span key={i}>I like this text</span>);
  }
  const handleClick = () => setRepititions(repititions + 1)

  return (
    <button onClick={handleClick} className="TextRepeaterButton">
      {textArr}
    </button>
  );
}
