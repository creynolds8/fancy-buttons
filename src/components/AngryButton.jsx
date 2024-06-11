import { useState } from "react";

export default function AngryButton() {
  const [ anger, setAnger ] = useState(0);
  const handleClick = () => setAnger(anger < 1 ? anger + 0.1 : 0);
  return (
    <button style={{ backgroundColor: `rgba(255, 0, 0, ${anger})` }} className="AngryButton" onClick={handleClick}>
      { anger < 1 && <span>Don't click me too much! </span> }
      { anger > 1 && <span>Rawr!</span> }
    </button>
  );
}
